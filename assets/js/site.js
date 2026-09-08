(() => {
  'use strict';
  const form = document.querySelector('form[role="search"]');
  const input = form.querySelector('input');
  const status = document.getElementById('search-status');
  const cards = [...document.querySelectorAll('.career-card')];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  function filterCareers() {
    const query = normalize(input.value);
    let count = 0;
    cards.forEach(card => {
      const matches = normalize(card.textContent + ' ' + card.dataset.career).includes(query);
      card.hidden = !matches;
      if (matches) count++;
    });
    status.hidden = !query;
    status.textContent = count ? `${count} carrera(s) encontrada(s).` : 'No se encontraron carreras. Prueba con Software, Industrial o Robótica.';
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    filterCareers();
    document.getElementById('carreras').scrollIntoView();
  });
  input.addEventListener('input', filterCareers);
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
        item.classList.remove('active');
        item.removeAttribute('aria-current');
      });
      link.classList.add('active');
      link.setAttribute('aria-current', 'location');
      if (link.hash === '#carreras') {
        input.value = '';
        filterCareers();
      }
      bootstrap.Collapse.getInstance(document.getElementById('navbarCollapse'))?.hide();
    });
  });
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    bootstrap.Carousel.getOrCreateInstance(document.getElementById('myCarousel'), { ride: false }).pause();
  }
})();
