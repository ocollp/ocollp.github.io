(() => {
  const root = document.documentElement;
  let theme = 'dark';
  try { if (localStorage.getItem('olga-theme') === 'light') theme = 'light'; } catch {}
  root.dataset.theme = theme;
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    function render() {
      const light = root.dataset.theme === 'light';
      button.textContent = light ? '🌙' : '☀️';
      button.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
      button.title = button.getAttribute('aria-label');
    }
    button.hidden = false;
    render();
    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      try { localStorage.setItem('olga-theme', root.dataset.theme); } catch {}
      render();
    });
  });
})();
