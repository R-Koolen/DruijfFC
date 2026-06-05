const API_BASE = '/polarsteps/api';
const WS_BASE  = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/polarsteps/ws/steps`;

// Session token: one random UUID per tab, never stored in DB
const SESSION_TOKEN = crypto.randomUUID();

let writerName      = localStorage.getItem('ps_name') || '';
let currentStep     = null;
let isWriter        = false;
let ws              = null;
let saveTimer       = null;
let heartbeatHandle = null;

const listView      = document.getElementById('psListView');
const detailView    = document.getElementById('psDetailView');
const headerTitle   = document.getElementById('psHeaderTitle');
const stepList      = document.getElementById('psStepList');
const textarea      = document.getElementById('psTextarea');
const saveIndicator = document.getElementById('psSaveIndicator');
const lockBanner    = document.getElementById('psLockBanner');
const namePrompt    = document.getElementById('psNamePrompt');
const writerNameEl  = document.getElementById('psWriterName');
const btnConfirmName= document.getElementById('btnConfirmName');
const btnDelete     = document.getElementById('btnDelete');
const btnWrite      = document.getElementById('btnWrite');
const navSpacer     = document.getElementById('navSpacer');
const btnBack       = document.getElementById('btnBack');
const stepTitleInput= document.getElementById('psStepTitle');
const stepDateInput = document.getElementById('psStepDate');
const newStepError  = document.getElementById('psNewStepError');
const btnAddStep    = document.getElementById('btnAddStep');
const detailDateEl  = document.getElementById('psDetailDate');

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatDate(d) {
  return new Date(d + 'T12:00:00').toLocaleDateString('nl', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

// ── Step list ──

async function loadSteps() {
  try {
    const r = await fetch(`${API_BASE}/steps`);
    if (!r.ok) return;
    renderSteps(await r.json());
  } catch {}
}

function renderSteps(steps) {
  if (!steps.length) {
    stepList.innerHTML = '<div class="ps-empty">Nog geen steps — voeg de eerste toe!</div>';
    return;
  }
  stepList.innerHTML = steps.map(s => `
    <button type="button" class="jl-row ps-step-row" data-id="${s.id}">
      <div class="jl-avatar ps-pin-avatar">📍</div>
      <div class="jl-body">
        <div class="jl-title">${escHtml(s.title)}</div>
        <div class="jl-sub">${escHtml(formatDate(s.date))}</div>
      </div>
      <svg viewBox="0 0 24 24" fill="none" width="16" height="16" style="color:var(--jl-text-muted);flex-shrink:0">
        <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `).join('');
  stepList.querySelectorAll('.ps-step-row').forEach(row => {
    row.addEventListener('click', () => openStep(parseInt(row.dataset.id, 10)));
  });
}

// ── Open step ──

async function openStep(id) {
  try {
    const r = await fetch(`${API_BASE}/steps/${id}`);
    if (!r.ok) return;
    currentStep = await r.json();
  } catch { return; }

  headerTitle.textContent   = currentStep.title;
  detailDateEl.textContent  = formatDate(currentStep.date);
  textarea.value            = currentStep.content;
  textarea.readOnly         = true;
  saveIndicator.textContent = '';
  saveIndicator.className   = 'ps-save-indicator';

  listView.style.display   = 'none';
  detailView.style.display = '';
  btnDelete.style.display  = '';
  namePrompt.style.display = 'none';

  showNavDetail();
  connectWS(id);
}

function showNavDetail() {
  btnDelete.style.display = '';
  btnWrite.style.display  = 'none';
  navSpacer.style.display = 'none';
}

// ── Lock UI ──

function setLockState(state, writerLabel) {
  lockBanner.style.display = 'none';
  btnWrite.style.display   = 'none';
  namePrompt.style.display = 'none';

  if (state === 'mine') {
    lockBanner.textContent = '✏️ Je schrijft nu';
    lockBanner.className   = 'ps-lock-banner ps-lock-banner--mine';
    lockBanner.style.display = '';
    textarea.readOnly = false;
    setSaveIndicator('');
  } else if (state === 'other') {
    lockBanner.textContent = `🖊 ${escHtml(writerLabel)} is aan het schrijven`;
    lockBanner.className   = 'ps-lock-banner ps-lock-banner--other';
    lockBanner.style.display = '';
    textarea.readOnly = true;
  } else {
    // No lock
    btnWrite.style.display = '';
    navSpacer.style.display = 'none';
    textarea.readOnly = true;
  }
}

// ── Write button ──

btnWrite.addEventListener('click', () => {
  if (writerName) {
    requestLock(writerName);
  } else {
    namePrompt.style.display = '';
    btnWrite.style.display   = 'none';
    setTimeout(() => writerNameEl.focus(), 60);
  }
});

btnConfirmName.addEventListener('click', () => {
  const name = writerNameEl.value.trim();
  if (!name) { writerNameEl.focus(); return; }
  writerName = name;
  localStorage.setItem('ps_name', writerName);
  namePrompt.style.display = 'none';
  requestLock(writerName);
});

writerNameEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') btnConfirmName.click();
});

async function requestLock(name) {
  try {
    const r = await fetch(`${API_BASE}/steps/${currentStep.id}/lock`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_token: SESSION_TOKEN, writer: name }),
    });
    if (r.ok) {
      isWriter = true;
      setLockState('mine');
      startHeartbeat();
      setTimeout(() => textarea.focus(), 60);
    } else if (r.status === 409) {
      const err = await r.json().catch(() => ({}));
      lockBanner.textContent = `⚠ ${escHtml(err.detail || 'Iemand schrijft al')}`;
      lockBanner.className   = 'ps-lock-banner ps-lock-banner--other';
      lockBanner.style.display = '';
      btnWrite.style.display = 'none';
    }
  } catch {}
}

// ── Heartbeat ──

function startHeartbeat() {
  stopHeartbeat();
  heartbeatHandle = setInterval(async () => {
    if (!isWriter || !currentStep) { stopHeartbeat(); return; }
    try {
      const r = await fetch(`${API_BASE}/steps/${currentStep.id}/heartbeat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_token: SESSION_TOKEN }),
      });
      if (!r.ok) lostLock();
    } catch {}
  }, 10_000);
}

function stopHeartbeat() {
  if (heartbeatHandle) { clearInterval(heartbeatHandle); heartbeatHandle = null; }
}

function lostLock() {
  isWriter = false;
  stopHeartbeat();
  clearTimeout(saveTimer);
  setSaveIndicator('⚠ Lock verlopen', 'error');
  setLockState('none');
}

// ── Auto-save (writer only, 2 s debounce) ──

textarea.addEventListener('input', () => {
  if (!isWriter) return;
  setSaveIndicator('Opslaan...');
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => saveContent(), 2_000);
});

async function saveContent() {
  if (!isWriter || !currentStep) return;
  const content = textarea.value;
  try {
    const r = await fetch(`${API_BASE}/steps/${currentStep.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, session_token: SESSION_TOKEN }),
    });
    if (r.ok) {
      setSaveIndicator('✓ Opgeslagen', 'saved');
    } else if (r.status === 403) {
      lostLock();
    } else {
      setSaveIndicator('✗ Fout bij opslaan', 'error');
    }
  } catch {
    setSaveIndicator('✗ Geen verbinding', 'error');
  }
}

function setSaveIndicator(text, mod) {
  saveIndicator.textContent = text;
  saveIndicator.className   = 'ps-save-indicator' + (mod ? ` ps-save-indicator--${mod}` : '');
  if (mod === 'saved') {
    clearTimeout(saveIndicator._timer);
    saveIndicator._timer = setTimeout(() => {
      saveIndicator.textContent = '';
      saveIndicator.className   = 'ps-save-indicator';
    }, 1_800);
  }
}

// ── Lock release ──

async function releaseLock() {
  if (!isWriter || !currentStep) return;
  stopHeartbeat();
  isWriter = false;
  try {
    await fetch(
      `${API_BASE}/steps/${currentStep.id}/lock?session_token=${encodeURIComponent(SESSION_TOKEN)}`,
      { method: 'DELETE' },
    );
  } catch {}
}

// ── WebSocket (reader) ──

function connectWS(stepId) {
  closeWS();
  try { ws = new WebSocket(`${WS_BASE}/${stepId}`); } catch { return; }

  ws.onmessage = ({ data }) => {
    let msg;
    try { msg = JSON.parse(data); } catch { return; }

    switch (msg.type) {
      case 'init':
        if (!isWriter) textarea.value = msg.content;
        if (msg.lock) {
          setLockState('other', msg.lock.writer);
        } else {
          setLockState('none');
        }
        break;

      case 'content':
        if (!isWriter) textarea.value = msg.content;
        break;

      case 'locked':
        if (!isWriter) setLockState('other', msg.writer);
        break;

      case 'unlocked':
        if (!isWriter) setLockState('none');
        break;

      case 'deleted':
        returnToList();
        break;
    }
  };

  ws.onerror  = () => {};
  ws.onclose  = () => { ws = null; };
}

function closeWS() {
  if (ws) { try { ws.close(); } catch {} ws = null; }
}

// ── Navigation ──

function returnToList() {
  releaseLock();
  closeWS();
  clearTimeout(saveTimer);
  currentStep = null;
  isWriter    = false;
  headerTitle.textContent  = 'Polarsteps';
  detailView.style.display = 'none';
  btnDelete.style.display  = 'none';
  btnWrite.style.display   = 'none';
  navSpacer.style.display  = '';
  listView.style.display   = '';
  loadSteps();
}

btnBack.addEventListener('click', () => {
  if (currentStep) returnToList();
  else window.location.href = '../index.html';
});

// Prevent losing lock on page unload
window.addEventListener('beforeunload', () => {
  if (isWriter && currentStep) {
    navigator.sendBeacon(
      `${API_BASE}/steps/${currentStep.id}/lock?session_token=${encodeURIComponent(SESSION_TOKEN)}`,
      new Blob([], { type: 'application/json' }),
    );
  }
});

// ── Delete ──

btnDelete.addEventListener('click', async () => {
  if (!currentStep) return;
  if (!confirm(`"${currentStep.title}" verwijderen? Dit kan niet ongedaan worden gemaakt.`)) return;
  await releaseLock();
  try {
    const r = await fetch(`${API_BASE}/steps/${currentStep.id}`, { method: 'DELETE' });
    if (r.ok) returnToList();
  } catch {}
});

// ── Add step ──

btnAddStep.addEventListener('click', async () => {
  const title = stepTitleInput.value.trim();
  const date  = stepDateInput.value;
  newStepError.textContent = '';

  if (!title) { newStepError.textContent = 'Geef de step een naam.';  stepTitleInput.focus(); return; }
  if (!date)  { newStepError.textContent = 'Selecteer een datum.';    stepDateInput.focus();  return; }

  btnAddStep.disabled = true;
  try {
    const r = await fetch(`${API_BASE}/steps`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, date }),
    });
    if (!r.ok) { newStepError.textContent = 'Er ging iets mis.'; return; }
    const step = await r.json();
    stepTitleInput.value = '';
    stepDateInput.value  = '';
    await openStep(step.id);
  } catch {
    newStepError.textContent = 'Kon geen verbinding maken.';
  } finally {
    btnAddStep.disabled = false;
  }
});

// ── Init ──

loadSteps();
