const API_BASE = '/forum/api';

const AVATAR_COLORS = [
  '#C9302C',
  '#3A6BD8',
  '#2A8F4A',
  '#9B70E0',
  '#C86010',
  '#B8306A',
];

function avatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function formatTime(isoString) {
  const d = new Date(isoString + 'Z');
  const now = new Date();
  const hhmm = d.toLocaleTimeString('nl', { hour: '2-digit', minute: '2-digit' });
  const diffMs = now - d;
  const diffDays = Math.floor(diffMs / 86400000);
  if (diffDays === 0) return `vandaag ${hhmm}`;
  if (diffDays === 1) return `gisteren ${hhmm}`;
  return d.toLocaleDateString('nl', { day: 'numeric', month: 'short' }) + ` ${hhmm}`;
}

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const listEl    = document.getElementById('fmList');
const flashEl   = document.getElementById('fmFlash');
const nameInput = document.getElementById('fmName');
const contentEl = document.getElementById('fmContent');
const charCount = document.getElementById('fmCount');
const errorEl   = document.getElementById('fmError');
const submitBtn = document.getElementById('fmSubmit');

function renderMessages(messages) {
  if (!messages.length) {
    listEl.innerHTML = '<div class="fm-empty">Nog geen berichten — wees de eerste!</div>';
    return;
  }
  listEl.innerHTML = messages.map(m => {
    const initial = (m.name[0] || '?').toUpperCase();
    const color = avatarColor(m.name);
    return `<div class="jl-row">
      <div class="jl-avatar jl-avatar--num" style="background:${color}">${escHtml(initial)}</div>
      <div class="jl-body">
        <div class="jl-title">${escHtml(m.name)} · ${formatTime(m.created_at)}</div>
        <div class="fm-msg-text">${escHtml(m.content)}</div>
      </div>
    </div>`;
  }).join('');
}

async function loadMessages() {
  try {
    const r = await fetch(`${API_BASE}/messages`);
    if (!r.ok) return;
    renderMessages(await r.json());
  } catch {}
}

contentEl.addEventListener('input', () => {
  const len = contentEl.value.length;
  charCount.textContent = `${len} / 280`;
  charCount.classList.toggle('fm-near-limit', len >= 250);
});

submitBtn.addEventListener('click', async () => {
  const name    = nameInput.value.trim();
  const content = contentEl.value.trim();
  errorEl.textContent = '';

  if (!name)    { errorEl.textContent = 'Vul je naam in.';              nameInput.focus(); return; }
  if (!content) { errorEl.textContent = 'Bericht mag niet leeg zijn.';  contentEl.focus();  return; }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Plaatsen...';

  try {
    const r = await fetch(`${API_BASE}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, content }),
    });

    if (r.status === 429) {
      errorEl.textContent = 'Te snel! Wacht even voor je weer post.';
      return;
    }
    if (!r.ok) {
      const err = await r.json().catch(() => ({}));
      errorEl.textContent = err.detail || 'Er ging iets mis, probeer opnieuw.';
      return;
    }

    nameInput.value = '';
    contentEl.value = '';
    charCount.textContent = '0 / 280';
    charCount.classList.remove('fm-near-limit');

    flashEl.classList.add('show');
    setTimeout(() => flashEl.classList.remove('show'), 2500);

    await loadMessages();
  } catch {
    errorEl.textContent = 'Kon geen verbinding maken met de server.';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Plaatsen';
  }
});

document.getElementById('btnBack').addEventListener('click', () => {
  window.location.href = '../index.html';
});

document.getElementById('btnCompose').addEventListener('click', () => {
  document.getElementById('forumStage').scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => nameInput.focus(), 300);
});

document.getElementById('btnRefresh').addEventListener('click', loadMessages);

loadMessages();
setInterval(loadMessages, 7500);
