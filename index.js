// Subtle press-down feedback for game cards (in addition to CSS :active,
// gives a tiny extra cue on slower devices).
document.querySelectorAll('.game-card:not(.is-disabled)').forEach(card => {
  card.addEventListener('pointerdown', () => card.classList.add('is-pressed'));
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev =>
    card.addEventListener(ev, () => card.classList.remove('is-pressed'))
  );
});
