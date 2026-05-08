const tabBtns    = document.querySelectorAll('.home-tab-btn');
const tabPanels  = document.querySelectorAll('.tab-panel');
const bottomTabs = document.querySelectorAll('.tab-item');

function switchTab(id) {
  tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === id));
  tabPanels.forEach(p => p.classList.toggle('active', p.id === id));
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// Bottom bar items (future pages can be linked here)
bottomTabs.forEach(item => {
  item.addEventListener('click', () => {
    bottomTabs.forEach(t => t.classList.remove('active'));
    item.classList.add('active');
  });
});
