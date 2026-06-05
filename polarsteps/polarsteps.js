const API_BASE = '/polarsteps/api';
const WS_BASE  = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/polarsteps/ws`;

let currentStep  = null;
let ws           = null;
let saveTimer    = null;
let isTyping     = false;
let typingTimer  = null;

const listView      = document.getElementById('psListView');
const detailView    = document.getElementById('psDetailView');
const headerTitle   = document.getElementById('psHeaderTitle');
const stepList      = document.getElementById('psStepList');
const textarea      = document.getElementById('psTextarea');
const saveIndicator = document.getElementById('psSaveIndicator');
const viewersBadge  = document.getElementById('psViewers');
const btnDelete     = document.getElementById('btnDelete');
const btnBack       = document.getElementById('btnBack');
const stepNameInput = document.getElementById('psStepName');
const stepDateInput = document.getElementById('psStepDate');
const newStepError  = document.getElementById('psNewStepError');
const btnAddStep    = document.getElementById('btnAddStep');
const detailDate    = document.getElementById('psDetailDate');

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
      <div class="jl-avatar" style="background:var(--jl-row-alt);font-size:20px;border-radius:8px;display:grid;place-items:center">📍</div>
      <div class="jl-body">
        <div class="jl-title">${escHtml(s.name)}</div>
        <div class="jl-sub">${escHtml(formatDate(s.date))}</div>
      </div>
      <svg class="ps-chevron" viewBox="0 0 24 24" fill="none" width="16" height="16">
        <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `).join('');

  stepList.querySelectorAll('.ps-step-row').forEach(row => {
    row.addEventListener('click', () => openStep(parseInt(row.dataset.id, 10)));
  });
}

async function openStep(id) {
  try {
    const r = await fetch(`${API_BASE}/steps/${id}`);
    if (!r.ok) return;
    currentStep = await r.json();

    headerTitle.textContent = currentStep.name;
    detailDate.textContent  = formatDate(currentStep.date);
    textarea.value          = currentStep.content;
    saveIndicator.textContent = '';
    saveIndicator.className   = 'ps-save-indicator';
    viewersBadge.style.display = 'none';

    listView.style.display   = 'none';
    detailView.style.display = '';
    btnDelete.style.display  = '';

    setTimeout(() => textarea.focus(), 80);
    openWS(id);
  } catch {}
}

function openWS(stepId) {
  closeWS();
  try {
    ws = new WebSocket(`${WS_BASE}/${stepId}`);
  } catch { return; }

  ws.onmessage = (event) => {
    let msg;
    try { msg = JSON.parse(event.data); } catch { return; }

    if (msg.type === 'init') {
      textarea.value = msg.content;
    } else if (msg.type === 'update' && !isTyping) {
      textarea.value = msg.content;
    } else if (msg.type === 'viewers') {
      const others = msg.count - 1;
      if (others > 0) {
        viewersBadge.textContent   = `👁 ${others} ${others === 1 ? 'persoon' : 'personen'} kijkt mee`;
        viewersBadge.style.display = 'inline-block';
      } else {
        viewersBadge.style.display = 'none';
      }
    }
  };

  ws.onerror  = () => {};
  ws.onclose  = () => { ws = null; };
}

function closeWS() {
  if (ws) { try { ws.close(); } catch {} ws = null; }
}

textarea.addEventListener('input', () => {
  isTyping = true;
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => { isTyping = false; }, 1200);

  saveIndicator.textContent = 'Opslaan...';
  saveIndicator.className   = 'ps-save-indicator';
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => sendUpdate(textarea.value), 500);
});

function sendUpdate(content) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ type: 'update', content }));
    saveIndicator.textContent = '✓ Opgeslagen';
    saveIndicator.className   = 'ps-save-indicator saved';
    setTimeout(() => {
      saveIndicator.textContent = '';
      saveIndicator.className   = 'ps-save-indicator';
    }, 1500);
  } else {
    // Fallback: save via REST
    if (!currentStep) return;
    fetch(`${API_BASE}/steps/${currentStep.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    }).then(r => {
      if (r.ok) {
        saveIndicator.textContent = '✓ Opgeslagen';
        saveIndicator.className   = 'ps-save-indicator saved';
      } else {
        saveIndicator.textContent = '✗ Fout bij opslaan';
        saveIndicator.className   = 'ps-save-indicator error';
      }
      setTimeout(() => {
        saveIndicator.textContent = '';
        saveIndicator.className   = 'ps-save-indicator';
      }, 1500);
    }).catch(() => {
      saveIndicator.textContent = '✗ Geen verbinding';
      saveIndicator.className   = 'ps-save-indicator error';
    });
  }
}

function returnToList() {
  closeWS();
  clearTimeout(saveTimer);
  currentStep = null;
  headerTitle.textContent = 'Polarsteps';
  detailView.style.display = 'none';
  btnDelete.style.display  = 'none';
  viewersBadge.style.display = 'none';
  listView.style.display   = '';
  loadSteps();
}

btnBack.addEventListener('click', () => {
  if (currentStep) {
    returnToList();
  } else {
    window.location.href = '../index.html';
  }
});

btnDelete.addEventListener('click', async () => {
  if (!currentStep) return;
  if (!confirm(`"${currentStep.name}" verwijderen? Dit kan niet ongedaan worden gemaakt.`)) return;
  try {
    const r = await fetch(`${API_BASE}/steps/${currentStep.id}`, { method: 'DELETE' });
    if (r.ok) returnToList();
  } catch {}
});

btnAddStep.addEventListener('click', async () => {
  const name = stepNameInput.value.trim();
  const date = stepDateInput.value;
  newStepError.textContent = '';

  if (!name) { newStepError.textContent = 'Geef de step een naam.'; stepNameInput.focus(); return; }
  if (!date) { newStepError.textContent = 'Selecteer een datum.';   stepDateInput.focus(); return; }

  btnAddStep.disabled = true;
  try {
    const r = await fetch(`${API_BASE}/steps`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, date }),
    });
    if (!r.ok) { newStepError.textContent = 'Er ging iets mis.'; return; }
    const step = await r.json();
    stepNameInput.value = '';
    stepDateInput.value = '';
    await openStep(step.id);
  } catch {
    newStepError.textContent = 'Kon geen verbinding maken.';
  } finally {
    btnAddStep.disabled = false;
  }
});

loadSteps();
