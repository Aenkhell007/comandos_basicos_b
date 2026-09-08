(() => {
  'use strict';

  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const validThemes = ['light', 'dark', 'auto'];
  let theme = 'auto';
  try {
    const saved = localStorage.getItem('theme');
    if (validThemes.includes(saved)) theme = saved;
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-bs-theme',
      theme === 'auto' ? (systemTheme.matches ? 'dark' : 'light') : theme);
  }

  function updateControls() {
    document.querySelectorAll('[data-bs-theme-value]').forEach(button => {
      const active = button.dataset.bsThemeValue === theme;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const toggle = document.getElementById('bd-theme');
    toggle.setAttribute('aria-label', `Toggle theme (${theme})`);
    toggle.querySelector('use').setAttribute('href', {
      light: '#sun-fill', dark: '#moon-stars-fill', auto: '#circle-half'
    }[theme]);
  }

  applyTheme();
  systemTheme.addEventListener('change', applyTheme);
  document.addEventListener('DOMContentLoaded', () => {
    updateControls();
    document.querySelectorAll('[data-bs-theme-value]').forEach(button => {
      button.addEventListener('click', () => {
        theme = button.dataset.bsThemeValue;
        try { localStorage.setItem('theme', theme); } catch {}
        applyTheme();
        updateControls();
        document.getElementById('bd-theme').focus();
      });
    });
  });
})();
