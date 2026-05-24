// ── TOAST ──
const toast = document.getElementById('toast');
let toastTimer = null;

function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
}

// ── DECORATIVE APP-ICON TOASTS (row 2 + WYR) ──
document.querySelectorAll('.ifruit-app--deco').forEach(btn => {
  btn.addEventListener('click', () => showToast(btn.dataset.toast || ''));
});

document.querySelectorAll('.ifruit-app--locked').forEach(el => {
  const fire = () => showToast('🔒 Would You Rather komt binnenkort!');
  el.addEventListener('click', fire);
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fire(); }
  });
});

// ── BOTTOM 3-BUTTON ROW ──
document.getElementById('btnSearch')?.addEventListener('click', () => {
  showToast('🔍 Niks te zoeken hier');
});

document.getElementById('btnPlus')?.addEventListener('click', () => {
  showToast('➕ Geen nieuwe missies');
});

document.getElementById('btnBack')?.addEventListener('click', () => {
  if (window.history.length > 1 && document.referrer) {
    window.history.back();
  } else {
    showToast('↩ Je bent al thuis');
  }
});

// ── WALLPAPER SKYLINE PARALLAX (desktop only) ──
const skyline = document.querySelector('.ifruit-skyline');
const isFineTouch = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (isFineTouch && skyline) {
  document.addEventListener('pointermove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    skyline.style.transform = `translate3d(${-dx * 4}px, ${-dy * 2}px, 0)`;
  });
}

// ── APP-LAUNCH ZOOM TRANSITION ──
const launchOverlay = document.getElementById('launchOverlay');
const APP_COLORS = {
  treasure:  'rgba(201,48,44,0.92)',   // red — matches Schatzoeker tile
  questions: 'rgba(31,93,204,0.92)',   // blue — matches Druijfhartig tile
  wyr:       'rgba(214,58,26,0.92)',   // orange-red — matches WYR tile
};

document.querySelectorAll('a.ifruit-app:not(.ifruit-app--locked)').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href) return;
    e.preventDefault();

    const rect = link.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    const game = link.dataset.game;

    launchOverlay.style.setProperty('--launch-x', `${cx}px`);
    launchOverlay.style.setProperty('--launch-y', `${cy}px`);
    launchOverlay.style.setProperty('--launch-color', APP_COLORS[game] || 'rgba(255,200,87,0.85)');
    launchOverlay.classList.add('active');

    // tile zoom-up effect
    const tile = link.querySelector('.ifruit-tile');
    if (tile) {
      tile.style.transition = 'transform 0.38s cubic-bezier(0.32, 0.72, 0, 1)';
      tile.style.transform  = 'scale(1.5)';
      tile.style.zIndex     = '10';
    }
    link.style.opacity = '0';
    link.style.transition = 'opacity 0.35s';

    setTimeout(() => { window.location.href = href; }, 380);
  });
});
