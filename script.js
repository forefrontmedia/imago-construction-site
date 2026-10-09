/* ---------------------------------------------------------------
   Imago Construction — shared site script
   MEDIA MAP — drop file paths here as photos come in. Any slot left
   empty keeps its labeled placeholder. The same slot code is reused
   across pages wherever the same photo appears (e.g. 'p1' fills both
   the homepage teaser and the Our Work gallery).
---------------------------------------------------------------- */
// Path prefix so the same MEDIA map works from root pages and from /blog/*.html
const MEDIA_BASE = /\/(blog|work)\//.test(location.pathname) ? '../images/' : 'images/';

const MEDIA = {
  // Home
  'home-hero': 'home-hero.jpg',      // S01 — hero exterior, dusk
  'ethan-site': 'ethan-headshot.jpg', // S02 — using the headshot until an on-site photo of Ethan exists

  // Services
  'svc-new': 'svc-new.jpg',          // S03 — finished new-construction exterior
  'svc-remodel': 'svc-remodel.jpg',  // S04 — remodeled kitchen
  'svc-plans': 'svc-plans.jpg',       // S05 — architectural floor plan drawings
  'svc-guidance': 'svc-guidance.jpg', // S06 — reviewing plans together
  'performance': 'performance.jpg',  // S07 — building science: roof truss framing
  'ph-services': 'ph-services.jpg',  // banner — build in progress

  // Our Work — homepage teaser
  'p1': 'p1.jpg', 'p2': 'p2.jpg', 'p3': 'p3.jpg',
  'ph-work': 'ph-work.jpg',
  'proj-cr-cover': 'proj-cr-hero.jpg',

  // Our Work — Craftsman Ranch project gallery (all one house)
  'proj-cr-hero': 'proj-cr-hero.jpg',
  'proj-cr-entry': 'proj-cr-entry.jpg',
  'proj-cr-elevation': 'proj-cr-elevation.jpg',
  'proj-cr-aerial': 'proj-cr-aerial.jpg',
  'proj-cr-rear': 'proj-cr-rear.jpg',
  'proj-cr-polebarn': 'proj-cr-polebarn.jpg',
  'proj-cr-foyer': 'proj-cr-foyer.jpg',
  'proj-cr-greatroom': 'proj-cr-greatroom.jpg',
  'proj-cr-kitchen': 'proj-cr-kitchen.jpg',
  'proj-cr-kitchendetail': 'proj-cr-kitchendetail.jpg',
  'proj-cr-pantry': 'proj-cr-pantry.jpg',
  'proj-cr-library': 'proj-cr-library.jpg',
  'proj-cr-dining': 'proj-cr-dining.jpg',
  'proj-cr-hallway': 'proj-cr-hallway.jpg',
  'proj-cr-bath': 'proj-cr-bath.jpg',
  'proj-cr-vanity': 'proj-cr-vanity.jpg',
  'proj-cr-shower': 'proj-cr-shower.jpg',
  'proj-cr-tub': 'proj-cr-tub.jpg',
  'proj-cr-guestbath': 'proj-cr-guestbath.jpg',
  'proj-cr-porch': 'proj-cr-porch.jpg',

  // Our Work — Ridgeline Estate project gallery (all one house)
  'proj-re-cover': 'proj-re-hero.jpg',
  'proj-re-hero': 'proj-re-hero.jpg',
  'proj-re-portico': 'proj-re-portico.jpg',
  'proj-re-doordetail': 'proj-re-doordetail.jpg',
  'proj-re-porch': 'proj-re-porch.jpg',
  'proj-re-foyer': 'proj-re-foyer.jpg',
  'proj-re-foyer2': 'proj-re-foyer2.jpg',
  'proj-re-stairchandelier': 'proj-re-stairchandelier.jpg',
  'proj-re-stairlanding': 'proj-re-stairlanding.jpg',
  'proj-re-staircurve': 'proj-re-staircurve.jpg',
  'proj-re-stairdetail': 'proj-re-stairdetail.jpg',
  'proj-re-greatroom': 'proj-re-greatroom.jpg',
  'proj-re-den': 'proj-re-den.jpg',
  'proj-re-kitchen': 'proj-re-kitchen.jpg',
  'proj-re-kitchen2': 'proj-re-kitchen2.jpg',
  'proj-re-kitchen3': 'proj-re-kitchen3.jpg',
  'proj-re-kitchen4': 'proj-re-kitchen4.jpg',
  'proj-re-kitchenisland': 'proj-re-kitchenisland.jpg',
  'proj-re-fullhouse': 'proj-re-fullhouse.jpg',
  'proj-re-kitchencounter': 'proj-re-kitchencounter.jpg',
  'proj-re-kitchencounter2': 'proj-re-kitchencounter2.jpg',
  'proj-re-rangehood': 'proj-re-rangehood.jpg',
  'proj-re-backsplash': 'proj-re-backsplash.jpg',
  'proj-re-backsplashdetail': 'proj-re-backsplashdetail.jpg',
  'proj-re-builtin': 'proj-re-builtin.jpg',
  'proj-re-dining': 'proj-re-dining.jpg',
  'proj-re-dining2': 'proj-re-dining2.jpg',
  'proj-re-primary': 'proj-re-primary.jpg',
  'proj-re-primary2': 'proj-re-primary2.jpg',
  'proj-re-bedroom': 'proj-re-bedroom.jpg',
  'proj-re-tub': 'proj-re-tub.jpg',
  'proj-re-vanity': 'proj-re-vanity.jpg',
  'proj-re-vanity2': 'proj-re-vanity2.jpg',
  'proj-re-vanitydetail': 'proj-re-vanitydetail.jpg',
  'proj-re-closet': 'proj-re-closet.jpg',
  'proj-re-closetbench': 'proj-re-closetbench.jpg',
  'proj-re-gym': 'proj-re-gym.jpg',
  'proj-re-mudroom': 'proj-re-mudroom.jpg',
  'proj-re-hallway': 'proj-re-hallway.jpg',
  'proj-re-hallway2': 'proj-re-hallway2.jpg',
  'proj-re-bonus': 'proj-re-bonus.jpg',
  'proj-re-chandelier': 'proj-re-chandelier.jpg',
  'proj-re-shelfdetail': 'proj-re-shelfdetail.jpg',
  'proj-re-ceilingdetail': 'proj-re-ceilingdetail.jpg',
  // 'proj-re-video' intentionally left unmapped — reserved for the walkthrough video

  // Our Work — Lakeview Bluff project gallery (in progress · framing stage)
  'proj-lb-cover': 'proj-lb-hero.jpg',
  'proj-lb-hero': 'proj-lb-hero.jpg',
  'proj-lb-aerial2': 'proj-lb-aerial2.jpg',
  'proj-lb-aerial4': 'proj-lb-aerial4.jpg',
  'proj-lb-aerialtop': 'proj-lb-aerialtop.jpg',
  'proj-lb-cranetruck': 'proj-lb-cranetruck.jpg',
  'proj-lb-wallraise': 'proj-lb-wallraise.jpg',
  'proj-lb-ladderclimb': 'proj-lb-ladderclimb.jpg',
  'proj-lb-topwalk': 'proj-lb-topwalk.jpg',
  'proj-lb-craneangle': 'proj-lb-craneangle.jpg',
  'proj-lb-gablelift': 'proj-lb-gablelift.jpg',
  'proj-lb-trusslift': 'proj-lb-trusslift.jpg',
  'proj-lb-rafterjoint': 'proj-lb-rafterjoint.jpg',
  'proj-lb-rafterwide': 'proj-lb-rafterwide.jpg',
  'proj-lb-sheathing': 'proj-lb-sheathing.jpg',
  'proj-lb-crewbalance': 'proj-lb-crewbalance.jpg',
  'proj-lb-peakcrew': 'proj-lb-peakcrew.jpg',
  'proj-lb-crewclose': 'proj-lb-crewclose.jpg',
  'proj-lb-skidloader': 'proj-lb-skidloader.jpg',
  'proj-lb-lumberhoist': 'proj-lb-lumberhoist.jpg',
  'proj-lb-hooksilhouette': 'proj-lb-hooksilhouette.jpg',

  // About
  'ethan-headshot': 'ethan-headshot.jpg', // S08 — real headshot
  'ph-about': 'ethan-headshot.jpg',       // using the headshot until an on-site photo of Ethan exists

  // Contact
  'contact': 'contact.jpg', // S09 — home / site
  'ph-contact': 'ph-contact-109lakeharbor.jpg', // 109 Lake Harbor Dr — supplied by client

  // Blog
  'ph-blog': 'ph-blog.jpg',
  'blog-post-1': 'blog-post-1.jpg',    // feature image for the sample article
  'blog-post-2': 'proj-cr-hero.jpg',
  'blog-post-3': 'proj-lb-hero.jpg',
  'blog-post-4': 'proj-cr-elevation.jpg',
  'blog-post-5': 'proj-lb-aerial2.jpg',
  'blog-post-6': 'proj-re-kitchen4.jpg',
  'blog-post-7': 'proj-lb-sheathing.jpg',
  'blog-post-8': 'proj-re-primary.jpg',
  'blog-post-9': 'proj-lb-peakcrew.jpg',
  'blog-post-10': 'proj-cr-porch.jpg',
  'blog-post-11': 'proj-re-gym.jpg'
};

document.querySelectorAll('[data-slot]').forEach(el => {
  const file = MEDIA[el.dataset.slot];
  if (!file) return;
  const src = MEDIA_BASE + file;
  const img = new Image();
  img.alt = el.dataset.alt || '';
  img.decoding = 'async';
  if (el.dataset.slot !== 'home-hero') img.loading = 'lazy';
  img.src = src;
  el.appendChild(img);
  el.classList.add('has-img');
});

/* Mobile nav */
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
}

/* Work filter (Our Work page only) — smooth crossfade instead of an instant cut */
const chips = document.querySelectorAll('.chip');
const figs = document.querySelectorAll('.work-grid figure');
if (chips.length && figs.length) {
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  chips.forEach(c => c.addEventListener('click', () => {
    if (c.getAttribute('aria-pressed') === 'true') return;
    chips.forEach(x => x.setAttribute('aria-pressed', x === c));
    const apply = () => figs.forEach(f => f.hidden = c.dataset.filter !== 'all' && f.dataset.status !== c.dataset.filter);
    if (reduceMotion) { apply(); return; }
    figs.forEach(f => { f.style.transition = 'opacity .18s ease, transform .18s ease'; f.style.opacity = '0'; f.style.transform = 'scale(.97)'; });
    setTimeout(() => {
      apply();
      figs.forEach(f => { if (!f.hidden) requestAnimationFrame(() => { f.style.opacity = '1'; f.style.transform = 'none'; }); });
    }, 180);
  }));
}

/* Scroll reveal — with a safety net so a fast scroll or flick never leaves content invisible */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}
window.addEventListener('load', () => setTimeout(() => revealEls.forEach(el => el.classList.add('in')), 1200));

/* Lead form (Contact page only) — stand-in: opens the visitor's email app.
   Replace with Formspree / Netlify Forms / the host's form handler at launch. */
const form = document.getElementById('lead-form');
if (form) {
  const status = document.getElementById('form-status');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    if (!d.get('name') || !d.get('email')) { status.textContent = 'Please add your name and email.'; return; }
    const body = [
      'Name: ' + d.get('name'), 'Phone: ' + (d.get('phone') || ''), 'Email: ' + d.get('email'),
      'Location: ' + (d.get('location') || ''), 'Looking for: ' + d.get('type'), '', d.get('message') || ''
    ].join('\n');
    location.href = 'mailto:ethan@imagoconstruction.com?subject=' +
      encodeURIComponent('Consultation request from ' + d.get('name')) + '&body=' + encodeURIComponent(body);
    status.textContent = 'Thanks! Your email app should open to finish sending.';
  });
}

document.querySelectorAll('.js-year').forEach(el => el.textContent = new Date().getFullYear());

/* Header gains a shadow once the page scrolls. On the homepage the header stays
   transparent, overlaid on the full-screen hero, until the hero has scrolled by. */
const siteHeader = document.querySelector('.header');
const homeHero = document.querySelector('body.home .hero');
if (siteHeader) {
  const threshold = () => homeHero ? Math.max(homeHero.offsetHeight - 120, 80) : 8;
  const setScrolled = () => siteHeader.classList.toggle('scrolled', window.scrollY > threshold());
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });
  window.addEventListener('resize', setScrolled, { passive: true });
}

/* Reading progress bar (blog article pages only) */
const article = document.querySelector('.article-wrap');
if (article) {
  const bar = document.createElement('div');
  bar.className = 'reading-bar';
  document.body.appendChild(bar);
  const updateBar = () => {
    const total = article.offsetHeight - window.innerHeight;
    const scrolled = window.scrollY - article.offsetTop + window.innerHeight * 0.4;
    const pct = total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0;
    bar.style.width = pct + '%';
  };
  updateBar();
  window.addEventListener('scroll', updateBar, { passive: true });
  window.addEventListener('resize', updateBar);
}

const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;

/* Animated year-in-business counter — computed from 2001, never goes stale */
document.querySelectorAll('[data-count-since]').forEach(el => {
  const since = parseInt(el.dataset.countSince, 10);
  const target = new Date().getFullYear() - since;
  if (prefersReducedMotion) { el.textContent = target + '+'; return; }
  const io2 = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    io2.disconnect();
    const start = performance.now();
    const dur = 1100;
    const tick = now => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + '+';
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: .5 });
  io2.observe(el);
});

/* Subtle 3D tilt on card hover — desktop pointer only */
if (!prefersReducedMotion && !isTouch) {
  document.querySelectorAll('.svc, .work-grid figure, .blog-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

/* Before / After comparison sliders */
document.querySelectorAll('.baslider').forEach(slider => {
  const after = slider.querySelector('.ba-after');
  const handle = slider.querySelector('.ba-handle');
  let dragging = false;
  const setPct = clientX => {
    const r = slider.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100));
    after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left = pct + '%';
  };
  setPct(slider.getBoundingClientRect().left + slider.getBoundingClientRect().width / 2);
  const start = () => { dragging = true; };
  const stop = () => { dragging = false; };
  const move = e => { if (dragging) setPct(e.touches ? e.touches[0].clientX : e.clientX); };
  slider.addEventListener('mousedown', start);
  slider.addEventListener('touchstart', start, { passive: true });
  window.addEventListener('mouseup', stop);
  window.addEventListener('touchend', stop);
  window.addEventListener('mousemove', move);
  slider.addEventListener('touchmove', move, { passive: true });
  slider.addEventListener('click', e => setPct(e.clientX));
});

/* Portfolio lightbox — built once, reused for every .work-grid figure */
const lightboxSource = document.querySelectorAll('.work-grid figure');
if (lightboxSource.length) {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = `
    <div class="lightbox-panel">
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <div class="media lightbox-media"></div>
      <div class="lightbox-body">
        <div class="tag-row"></div>
        <h3></h3>
        <span class="loc"></span>
        <dl></dl>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  const panelMedia = overlay.querySelector('.lightbox-media');
  const closeBtn = overlay.querySelector('.lightbox-close');
  let lastFocused = null;

  const closeLightbox = () => {
    overlay.classList.remove('open');
    if (lastFocused) lastFocused.focus();
  };
  const openLightbox = fig => {
    lastFocused = document.activeElement;
    const name = fig.querySelector('figcaption strong')?.textContent || 'Project name';
    const loc = fig.querySelector('figcaption span')?.textContent || 'Town, TN';
    const scope = fig.dataset.scope || '';
    const code = fig.querySelector('.ph-label b')?.textContent || '';
    const status = fig.querySelector('.tag')?.textContent || '';
    overlay.querySelector('h3').textContent = name;
    overlay.querySelector('.loc').textContent = loc;
    overlay.querySelector('.tag-row').innerHTML = status ? `<span class="tag${status.toLowerCase().includes('progress') ? ' progress' : ''}" style="position:static">${status}</span>` : '';
    overlay.querySelector('dl').innerHTML = scope ? `<dt>Scope</dt><dd>${scope}</dd>` : '';
    panelMedia.innerHTML = '';
    const srcMedia = fig.querySelector('.media');
    const srcImg = srcMedia?.querySelector('img');
    if (srcImg) {
      panelMedia.classList.add('has-img');
      const cloneImg = srcImg.cloneNode();
      panelMedia.appendChild(cloneImg);
    } else {
      panelMedia.classList.remove('has-img');
      panelMedia.innerHTML = '<span class="ph-label"><b>' + code + '</b>Full-size photo goes here</span>';
    }
    overlay.classList.add('open');
    closeBtn.focus();
  };

  lightboxSource.forEach(fig => {
    fig.style.cursor = 'zoom-in';
    fig.addEventListener('click', () => openLightbox(fig));
    fig.setAttribute('tabindex', '0');
    fig.setAttribute('role', 'button');
    fig.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(fig); } });
  });
  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeLightbox(); });
}

/* FAQ accordion */
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const isOpen = item.getAttribute('data-open') === 'true';
    item.setAttribute('data-open', String(!isOpen));
    q.setAttribute('aria-expanded', String(!isOpen));
    a.style.maxHeight = isOpen ? '0px' : a.scrollHeight + 'px';
  });
});

/* Sticky mobile call / consultation bar */
(() => {
  const contactLink = document.querySelector('.nav a[href$="contact.html"]');
  const contactHref = contactLink ? contactLink.getAttribute('href') : 'contact.html';
  const bar = document.createElement('div');
  bar.className = 'mobile-cta';
  bar.innerHTML = `
    <a class="btn btn-line" href="tel:+18654693076">Call</a>
    <a class="btn btn-primary" href="${contactHref}">Free Consultation</a>`;
  document.body.appendChild(bar);
  setTimeout(() => bar.classList.add('show'), 600);
})();

/* Subtle parallax on hero / page-header background */
if (!prefersReducedMotion) {
  const parallaxEls = document.querySelectorAll('.hero .media, .pagehead .media');
  if (parallaxEls.length) {
    const onScroll = () => {
      parallaxEls.forEach(el => {
        const rect = el.parentElement.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        el.style.transform = `translateY(${rect.top * -0.12}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
}

/* Smooth fade between pages on internal navigation */
if (!prefersReducedMotion) {
  document.body.style.transition = 'opacity .22s ease';
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || a.target === '_blank') return;
    a.addEventListener('click', e => {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => { window.location.href = href; }, 180);
    });
  });
  window.addEventListener('pageshow', () => { document.body.style.opacity = '1'; });
}
