(() => {
  'use strict';
  const menu = document.querySelector('.menu-button');
  const navigation = document.querySelector('.site-nav');
  const closeMenu = () => {
    navigation?.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Open navigation');
  };
  menu?.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation?.classList.contains('open')) {
      closeMenu();
      menu.focus();
    }
  });
  window.matchMedia('(min-width: 701px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });

  const search = document.querySelector('#project-search');
  if (search) {
    document.querySelectorAll('[data-search-tools]').forEach(el => { el.hidden = false; });
    const cards = [...document.querySelectorAll('[data-project]')];
    const sections = [...document.querySelectorAll('[data-project-section]')];
    const filters = [...document.querySelectorAll('[data-filter]')];
    const clear = document.querySelector('#clear-search');
    let current = 'all';
    const apply = () => {
      const query = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
      let shown = 0;
      cards.forEach(card => {
        card.hidden = !((current === 'all' || card.dataset.category === current) && query.every(word => card.dataset.search.includes(word)));
        if (!card.hidden) shown += 1;
      });
      sections.forEach(section => { section.hidden = ![...section.querySelectorAll('[data-project]')].some(card => !card.hidden); });
      filters.forEach(button => {
        const active = button.dataset.filter === current;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      document.querySelector('#result-count').textContent = `Showing ${shown} of ${cards.length} projects`;
      document.querySelector('#empty-state').hidden = shown !== 0;
      clear.hidden = current === 'all' && query.length === 0;
    };
    const reset = () => { current = 'all'; search.value = ''; apply(); };
    filters.forEach(button => button.addEventListener('click', () => { current = button.dataset.filter; apply(); }));
    search.addEventListener('input', apply);
    clear.addEventListener('click', reset);
    document.querySelector('#reset-search').addEventListener('click', () => { reset(); search.focus(); });
    document.addEventListener('keydown', event => {
      if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input,textarea,[contenteditable]')) {
        event.preventDefault();
        search.focus();
      }
    });
    apply();
  }

  const imageLinks = [...document.querySelectorAll('.evidence-figure > a')];
  if (imageLinks.length && typeof HTMLDialogElement !== 'undefined') {
    const dialog = document.createElement('dialog');
    dialog.className = 'image-dialog';
    dialog.setAttribute('aria-label', 'Project evidence image');
    const bar = document.createElement('div');
    bar.className = 'image-dialog-bar';
    const caption = document.createElement('p');
    const original = document.createElement('a');
    original.textContent = 'Original ↗';
    original.target = '_blank';
    original.rel = 'noopener';
    const close = document.createElement('button');
    close.type = 'button';
    close.textContent = 'Close ×';
    const image = document.createElement('img');
    bar.append(caption, original, close);
    dialog.append(bar, image);
    document.body.append(dialog);
    close.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { document.documentElement.style.overflow = ''; });
    imageLinks.forEach(link => link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      image.src = link.href;
      image.alt = link.querySelector('img')?.alt || 'Project evidence';
      caption.textContent = link.closest('figure').querySelector('figcaption')?.textContent || image.alt;
      original.href = link.href;
      dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
    }));
  }
})();
