/**
 * ==========================================================================
 * APPLICATION LOGIC & MOTION CHOREOGRAPHY
 * Integrates Lenis Smooth Inertial Scroll, Magnetic Cursor, Floating Table
 * Previews, Instant Filtering & Case Study Modal.
 * ==========================================================================
 */

// State variables
let currentCategory = 'All';
let currentSearch = '';
let currentWorkLayout = 'grid';
let lenis = null;

// Initialize Lenis Smooth Inertial Scrolling
function initLenis() {
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

/**
 * 1. POPULATE DYNAMIC CONFIGURATION STRINGS
 */
function populateSiteConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;

  // Header and Title
  const brandNames = document.querySelectorAll('.cfg-full-name');
  brandNames.forEach(el => el.textContent = SITE_CONFIG.fullName);

  const brandTitles = document.querySelectorAll('.cfg-short-title');
  brandTitles.forEach(el => el.textContent = SITE_CONFIG.shortTitle);

  const statusTags = document.querySelectorAll('.cfg-status');
  statusTags.forEach(el => el.textContent = SITE_CONFIG.availabilityStatus);

  const locations = document.querySelectorAll('.cfg-location');
  locations.forEach(el => el.textContent = SITE_CONFIG.location);

  const emails = document.querySelectorAll('.cfg-email');
  emails.forEach(el => {
    el.textContent = SITE_CONFIG.email;
    if (el.tagName === 'A') el.href = `mailto:${SITE_CONFIG.email}`;
  });

  // Project count badges
  const totalCount = PROJECTS_DATA.length;
  const countBadge = document.getElementById('project-count-badge');
  if (countBadge) countBadge.textContent = totalCount;

  const homeCountBadge = document.getElementById('home-total-projects');
  if (homeCountBadge) homeCountBadge.textContent = totalCount;
}

/**
 * 2. RENDER FEATURED WORK ON HOME VIEW (Asymmetric Bento/Editorial Grid)
 */
function renderFeaturedProjects() {
  const container = document.getElementById('featured-projects-container');
  if (!container) return;

  const featured = PROJECTS_DATA.filter(p => p.featured);

  container.innerHTML = featured.map(proj => `
    <article 
      onclick="openProjectModal('${proj.id}')"
      onmouseenter="showCustomCursor('${proj.status || 'View Work'}')"
      onmouseleave="hideCustomCursor()"
      class="project-card group cursor-pointer ${proj.span || 'md:col-span-6'} reveal-up"
    >
      <div class="relative ${proj.aspect || 'aspect-[16/10]'} w-full rounded-2xl overflow-hidden bg-charcoal border border-white/[0.08] mb-5">
        <img 
          src="${proj.image}" 
          alt="${proj.title}" 
          loading="lazy"
          class="card-media w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
        
        <!-- Badges -->
        <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span class="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-obsidian/85 backdrop-blur-md text-alabaster border border-white/10">
            ${proj.category}
          </span>
          <span class="px-3 py-1 rounded-full text-[11px] font-mono bg-obsidian/85 backdrop-blur-md text-muted border border-white/10">
            ${proj.year}
          </span>
        </div>
      </div>

      <!-- Caption Underneath (Exact Kyson Editorial Pattern) -->
      <div class="flex items-baseline justify-between gap-4 px-1">
        <div>
          <h3 class="text-xl sm:text-2xl font-normal tracking-tight text-alabaster group-hover:text-white transition-colors">
            ${proj.title}
          </h3>
          <p class="text-sm text-muted mt-1 line-clamp-1 font-light">${proj.subtitle}</p>
        </div>
        <span class="text-xs font-mono uppercase tracking-widest text-muted group-hover:text-alabaster shrink-0 transition-colors flex items-center gap-1">
          <span>${proj.status || 'View'}</span>
          <span class="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </article>
  `).join('');

  observeReveals();
}

/**
 * 3. RENDER ALL PROJECTS ON WORK VIEW (Supports 20 to 50+ Projects Seamlessly)
 */
function renderWorkArchive() {
  const gridContainer = document.getElementById('work-grid-container');
  const tableContainer = document.getElementById('archive-rows-list');
  if (!gridContainer || !tableContainer) return;

  const filtered = PROJECTS_DATA.filter(p => {
    const matchesCat = currentCategory === 'All' || p.category === currentCategory;
    const q = currentSearch.toLowerCase();
    const matchesSearch = !q ||
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      (p.stack && p.stack.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  // Empty state if search returns nothing
  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full py-16 text-center text-muted font-light">
        <p class="text-lg">No projects found matching "${currentSearch}".</p>
        <button onclick="clearSearch()" class="mt-4 px-4 py-2 rounded-full border border-white/10 text-xs font-mono uppercase tracking-wider text-alabaster hover:bg-white/10 transition-colors">
          Clear Search
        </button>
      </div>
    `;
    tableContainer.innerHTML = `
      <div class="py-12 text-center text-muted font-light">
        <p class="text-base">No projects match the current filter.</p>
      </div>
    `;
    return;
  }

  // 1. Render Visual Grid Mode
  gridContainer.innerHTML = filtered.map(proj => `
    <article 
      onclick="openProjectModal('${proj.id}')"
      onmouseenter="showCustomCursor('${proj.status || 'View Work'}')"
      onmouseleave="hideCustomCursor()"
      class="project-card group cursor-pointer reveal-up active"
    >
      <div class="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-charcoal border border-white/[0.08] mb-4">
        <img src="${proj.image}" alt="${proj.title}" loading="lazy" class="card-media w-full h-full object-cover" />
        <div class="absolute top-4 left-4 flex gap-2">
          <span class="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-obsidian/85 backdrop-blur-md text-alabaster border border-white/10">
            ${proj.category}
          </span>
        </div>
      </div>
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="text-xl font-normal text-alabaster group-hover:text-white transition-colors">${proj.title}</h3>
          <p class="text-sm text-muted mt-0.5 line-clamp-1">${proj.subtitle}</p>
          <p class="text-xs font-mono text-muted/70 mt-2 tracking-wide">${proj.stack || ''}</p>
        </div>
        <span class="text-xs font-mono uppercase text-muted group-hover:text-alabaster shrink-0 mt-1">
          ${proj.year} ↗
        </span>
      </div>
    </article>
  `).join('');

  // 2. Render Compact Index Table Mode (Optimized for 20-50+ Projects)
  tableContainer.innerHTML = filtered.map(proj => `
    <div 
      onclick="openProjectModal('${proj.id}')"
      onmouseenter="showArchiveFloatingPreview('${proj.image}')"
      onmouseleave="hideArchiveFloatingPreview()"
      class="grid grid-cols-12 py-5 px-4 items-center hover:bg-white/[0.03] cursor-pointer transition-colors group"
    >
      <div class="col-span-2 sm:col-span-1 font-mono text-xs text-muted">${proj.year}</div>
      <div class="col-span-6 sm:col-span-4">
        <p class="text-base font-medium text-alabaster group-hover:translate-x-1 transition-transform">${proj.title}</p>
        <p class="text-xs text-muted line-clamp-1 font-light">${proj.subtitle}</p>
      </div>
      <div class="hidden sm:block sm:col-span-3">
        <span class="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/[0.05] text-muted border border-white/[0.06]">
          ${proj.category}
        </span>
      </div>
      <div class="hidden md:block md:col-span-3 text-xs font-mono text-muted/80 truncate pr-4">
        ${proj.stack || ''}
      </div>
      <div class="col-span-4 sm:col-span-1 text-right font-mono text-xs text-muted group-hover:text-alabaster">
        ${proj.status === 'Coming soon' ? 'Soon' : 'View ↗'}
      </div>
    </div>
  `).join('');
}

function clearSearch() {
  const searchInput = document.getElementById('project-search');
  if (searchInput) searchInput.value = '';
  currentSearch = '';
  renderWorkArchive();
}

function filterProjects(category) {
  currentCategory = category;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.dataset.cat === category) {
      btn.className = "cat-btn bg-alabaster text-obsidian px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all";
    } else {
      btn.className = "cat-btn bg-charcoal hover:bg-white/10 text-muted hover:text-alabaster border border-white/10 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all";
    }
  });
  renderWorkArchive();
}

function handleSearchProjects(val) {
  currentSearch = val;
  renderWorkArchive();
}

function setWorkLayout(mode) {
  currentWorkLayout = mode;
  const gridEl = document.getElementById('work-grid-container');
  const tableEl = document.getElementById('work-table-container');
  const gridBtn = document.getElementById('layout-grid-btn');
  const tableBtn = document.getElementById('layout-table-btn');

  if (mode === 'grid') {
    gridEl.classList.remove('hidden');
    tableEl.classList.add('hidden');
    gridBtn.className = "px-3 py-1 rounded-full text-xs font-mono bg-white/15 text-alabaster transition-all";
    tableBtn.className = "px-3 py-1 rounded-full text-xs font-mono text-muted hover:text-alabaster transition-all";
  } else {
    gridEl.classList.add('hidden');
    tableEl.classList.remove('hidden');
    tableBtn.className = "px-3 py-1 rounded-full text-xs font-mono bg-white/15 text-alabaster transition-all";
    gridBtn.className = "px-3 py-1 rounded-full text-xs font-mono text-muted hover:text-alabaster transition-all";
  }
}

/**
 * 4. RENDER EXPERIENCE TIMELINE & CAPABILITIES (About View)
 */
function renderAboutDetails() {
  // Experience Timeline
  const timelineEl = document.getElementById('experience-timeline-container');
  if (timelineEl && typeof EXPERIENCE_DATA !== 'undefined') {
    timelineEl.innerHTML = EXPERIENCE_DATA.map(exp => `
      <div class="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline hover:bg-white/[0.02] px-3 rounded-lg transition-colors">
        <span class="sm:col-span-3 font-mono text-xs text-muted">${exp.year}</span>
        <span class="sm:col-span-4 text-base font-medium text-alabaster">${exp.company}</span>
        <span class="sm:col-span-2 text-xs font-mono text-muted">${exp.type}</span>
        <span class="sm:col-span-3 text-sm text-muted sm:text-right font-light">${exp.role}</span>
      </div>
    `).join('');
  }

  // Capabilities 3-Column Matrix
  const capabilitiesEl = document.getElementById('capabilities-container');
  if (capabilitiesEl && typeof CAPABILITIES_DATA !== 'undefined') {
    capabilitiesEl.innerHTML = CAPABILITIES_DATA.map(col => `
      <div class="p-8 rounded-2xl bg-charcoal/60 border border-white/[0.07] hover:border-white/15 transition-all">
        <h3 class="text-lg font-medium text-alabaster mb-6 pb-4 border-b border-white/10">${col.title}</h3>
        <ul class="space-y-3 text-sm text-muted font-light">
          ${col.skills.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }
}

/**
 * 5. SPA VIEW NAVIGATION (Home / Work / About)
 */
function switchView(viewName) {
  const views = ['home', 'work', 'about'];
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    const navBtn = document.getElementById(`nav-${v}`);
    if (el) el.classList.add('hidden');
    if (navBtn) navBtn.classList.remove('active-tab');
  });

  const activeEl = document.getElementById(`view-${viewName}`);
  const activeNav = document.getElementById(`nav-${viewName}`);
  if (activeEl) activeEl.classList.remove('hidden');
  if (activeNav) activeNav.classList.add('active-tab');

  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setTimeout(() => {
    observeReveals();
  }, 80);
}

/**
 * 6. CASE STUDY MODAL
 */
function openProjectModal(projId) {
  const proj = PROJECTS_DATA.find(p => p.id === projId);
  if (!proj) return;

  document.getElementById('modal-category').textContent = proj.category || 'Case Study';
  document.getElementById('modal-year').textContent = proj.year || '';
  document.getElementById('modal-title').textContent = proj.title || '';
  document.getElementById('modal-subtitle').textContent = proj.subtitle || '';
  document.getElementById('modal-image').src = proj.image || '';
  document.getElementById('modal-role').textContent = proj.role || 'Lead Engineer';
  document.getElementById('modal-stack').textContent = proj.stack || '';
  document.getElementById('modal-metrics').textContent = proj.metrics || 'Shipped to production';
  document.getElementById('modal-description').textContent = proj.description || '';

  const liveLink = document.getElementById('modal-live-link');
  if (proj.liveUrl && proj.liveUrl !== '#') {
    liveLink.href = proj.liveUrl;
    liveLink.classList.remove('hidden');
  } else {
    liveLink.classList.add('hidden');
  }

  const repoLink = document.getElementById('modal-repo-link');
  if (proj.repoUrl && proj.repoUrl !== '#') {
    repoLink.href = proj.repoUrl;
    repoLink.classList.remove('hidden');
  } else {
    repoLink.classList.add('hidden');
  }

  const modal = document.getElementById('project-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');

  if (lenis) lenis.stop();
  hideCustomCursor();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.classList.remove('modal-open');

  if (lenis) lenis.start();
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

/**
 * 7. CUSTOM MAGNETIC CURSOR & FLOATING ARCHIVE PREVIEW
 */
const cursorEl = document.getElementById('custom-cursor');
const cursorTextEl = document.getElementById('cursor-text');
const floatingPreview = document.getElementById('archive-floating-preview');
const floatingPreviewImg = document.getElementById('archive-preview-img');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (floatingPreview && floatingPreview.classList.contains('show')) {
    floatingPreview.style.left = `${mouseX + 180}px`;
    floatingPreview.style.top = `${mouseY}px`;
  }
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.18;
  cursorY += (mouseY - cursorY) * 0.18;
  if (cursorEl) {
    cursorEl.style.left = `${cursorX}px`;
    cursorEl.style.top = `${cursorY}px`;
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

function showCustomCursor(label) {
  if (cursorTextEl) cursorTextEl.textContent = label || 'View Work';
  if (cursorEl) cursorEl.classList.add('cursor-active');
}

function hideCustomCursor() {
  if (cursorEl) cursorEl.classList.remove('cursor-active');
}

function showArchiveFloatingPreview(imgUrl) {
  if (floatingPreviewImg && floatingPreview) {
    floatingPreviewImg.src = imgUrl;
    floatingPreview.classList.add('show');
  }
}

function hideArchiveFloatingPreview() {
  if (floatingPreview) floatingPreview.classList.remove('show');
}

/**
 * 8. SCROLL REVEALS WITH INTERSECTION OBSERVER
 */
function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal-up:not(.active)').forEach(el => observer.observe(el));
}

/**
 * 9. NEWSLETTER SUBSCRIPTION MOCK
 */
function handleNewsletter(e) {
  e.preventDefault();
  const feedback = document.getElementById('newsletter-feedback');
  if (feedback) feedback.classList.remove('hidden');
  e.target.reset();
}

/**
 * INITIALIZATION
 */
window.addEventListener('DOMContentLoaded', () => {
  initLenis();
  populateSiteConfig();
  renderFeaturedProjects();
  renderWorkArchive();
  renderAboutDetails();
  observeReveals();
});
