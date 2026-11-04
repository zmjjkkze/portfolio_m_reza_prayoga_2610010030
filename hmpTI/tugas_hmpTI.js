'use strict';

/* ─── HELPERS ─────────────────────────────────────────────────────────────── */
const $ = (sel, parent = document) => parent.querySelector(sel);
const $$ = (sel, parent = document) => [...parent.querySelectorAll(sel)];

function openWA(number, msg) {
  window.open(
    'https://wa.me/' + number + '?text=' + encodeURIComponent(msg),
    '_blank',
    'noopener'
  );
}

/* ─── DATA ────────────────────────────────────────────────────────────────── */
const PRODUCTS = [
  { id: 1, category: 'kopi',    emoji: '☕', name: 'Americano',     desc: 'Espresso murni dengan air panas, cita rasa kopi yang kuat dan autentik.',                   price: 'Rp 10.000', wa: '628123456789' },
  { id: 2, category: 'kopi',    emoji: '☕', name: 'Butterscotch',  desc: 'Perpaduan kopi espresso dengan sirup butterscotch yang manis dan creamy.',                  price: 'Rp 15.000', wa: '628123456789' },
  { id: 3, category: 'kopi',    emoji: '☕', name: 'Hazelnut',      desc: 'Kopi lembut dengan aroma hazelnut yang khas dan rasa yang memikat.',                        price: 'Rp 15.000', wa: '628123456789' },
  { id: 4, category: 'kopi',    emoji: '☕', name: 'Caramel',       desc: 'Espresso dengan sentuhan caramel manis yang sempurna dan creamy.',                          price: 'Rp 15.000', wa: '628123456789' },
  { id: 5, category: 'kopi',     emoji: '☕', name: 'Aren Latte',    desc: 'Kopi susu dengan gula aren alami khas Nusantara, manis dan nikmat.',                       price: 'Rp 15.000', wa: '628123456789' },
  { id: 6, category: 'non-kopi', emoji: '🍵', name: 'Matcha Latte',  desc: 'Matcha premium Jepang blend dengan susu segar, seimbang dan menyegarkan.',                 price: 'Rp 20.000', wa: '628123456789' },
  { id: 7, category: 'non-kopi', emoji: '🍫', name: 'Coklat',        desc: 'Minuman coklat premium yang rich dan creamy, cocok untuk pecinta coklat.',                  price: 'Rp 20.000', wa: '628123456789' },
];

const UMKM_LIST = [
  { id: 1, initials: 'AR', color: '#1d4ed8', brand: 'Dapur Arini',       owner: 'Arini Rahmawati',   type: 'Makanan',      desc: 'Produk makanan rumahan seperti sambal kemasan, keripik singkong, dan kue tradisional Banjar.',                             wa: '628111111111' },
  { id: 2, initials: 'BF', color: '#0ea5e9', brand: 'BF Digital Studio',  owner: 'Bagas Firmansyah',  type: 'Jasa Digital',  desc: 'Layanan desain grafis, editing video, dan pembuatan konten kreatif untuk UMKM dan perorangan.',                          wa: '628222222222' },
  { id: 3, initials: 'CN', color: '#1e3a8a', brand: 'Cinta Thrift',       owner: 'Cinta Nuraini',     type: 'Fashion',       desc: 'Pakaian thrift berkualitas pilihan dari berbagai brand ternama dengan harga terjangkau.',                                  wa: '628333333333' },
  { id: 4, initials: 'DH', color: '#3b82f6', brand: 'Dhika Brew',         owner: 'Dhika Hermawan',    type: 'Minuman',       desc: 'Kopi dan minuman kekinian dengan bahan pilihan lokal Kalimantan, siap antar area Banjarmasin.',                           wa: '628444444444' },
  { id: 5, initials: 'EK', color: '#1d4ed8', brand: 'EK Craft',           owner: 'Eka Kusuma',        type: 'Kerajinan',     desc: 'Produk kerajinan tangan dari bahan daur ulang dan limbah kayu, bernilai seni tinggi.',                                   wa: '628555555555' },
  { id: 6, initials: 'FN', color: '#0ea5e9', brand: 'FN Print & Design',  owner: 'Fauzan Noor',       type: 'Jasa Cetak',    desc: 'Layanan cetak banner, kaos, stiker, undangan, dan kebutuhan printing lainnya dengan harga bersahabat.',                  wa: '628666666666' },
];

const GALLERY_ITEMS = [
  { id: 1,  category: 'bazar',      emoji: '🎪', caption: 'Entrepreneurship Day 2025',    gradient: 'linear-gradient(135deg,#1e3a8a,#3b82f6)' },
  { id: 2,  category: 'bazar',      emoji: '🛒', caption: 'Stand Produk HMP-TI',          gradient: 'linear-gradient(135deg,#1a2744,#1d4ed8)' },
  { id: 3,  category: 'produk',     emoji: '🍱', caption: 'Display Produk Unggulan',      gradient: 'linear-gradient(135deg,#0a1628,#0ea5e9)' },
  { id: 4,  category: 'produk',     emoji: '☕', caption: 'Produk Minuman Kekinian',      gradient: 'linear-gradient(135deg,#1e3a8a,#60a5fa)' },
  { id: 5,  category: 'pelatihan',  emoji: '📚', caption: 'Workshop Digital Marketing',   gradient: 'linear-gradient(135deg,#1a2744,#3b82f6)' },
  { id: 6,  category: 'pelatihan',  emoji: '💡', caption: 'Business Sharing Session',     gradient: 'linear-gradient(135deg,#0a1628,#1d4ed8)' },
  { id: 7,  category: 'rapat',      emoji: '🤝', caption: 'Rapat Koordinasi Divisi',      gradient: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)' },
  { id: 8,  category: 'rapat',      emoji: '📋', caption: 'Persiapan Program Kerja',      gradient: 'linear-gradient(135deg,#1a2744,#60a5fa)' },
  { id: 9,  category: 'kolaborasi', emoji: '🌐', caption: 'Kolaborasi dengan UMKM Lokal', gradient: 'linear-gradient(135deg,#0a1628,#3b82f6)' },
  { id: 10, category: 'kolaborasi', emoji: '🏆', caption: 'Penghargaan UMKM Mahasiswa',   gradient: 'linear-gradient(135deg,#1e3a8a,#1d4ed8)' },
  { id: 11, category: 'bazar',      emoji: '🎯', caption: 'Closing Ceremony Bazar',       gradient: 'linear-gradient(135deg,#1a2744,#0ea5e9)' },
  { id: 12, category: 'pelatihan',  emoji: '🚀', caption: 'Bootcamp Kewirausahaan',       gradient: 'linear-gradient(135deg,#0a1628,#60a5fa)' },
];

const TEAM_MEMBERS = [
  { initials: 'MR', name: 'Muhammad Rizki', role: 'Ketua Divisi',   gradient: 'linear-gradient(135deg,#1e3a8a,#3b82f6)' },
  { initials: 'NA', name: 'Nur Aini',       role: 'Wakil Ketua',    gradient: 'linear-gradient(135deg,#1a2744,#0ea5e9)' },
  { initials: 'SF', name: 'Siti Fatimah',   role: 'Sekretaris',     gradient: 'linear-gradient(135deg,#1d4ed8,#60a5fa)' },
  { initials: 'AR', name: 'Ahmad Rasyid',   role: 'Bendahara',      gradient: 'linear-gradient(135deg,#0a1628,#1e3a8a)' },
  { initials: 'DK', name: 'Dewi Kartika',   role: 'Anggota Divisi', gradient: 'linear-gradient(135deg,#1e3a8a,#3b82f6)' },
  { initials: 'FA', name: 'Faisal Akbar',   role: 'Anggota Divisi', gradient: 'linear-gradient(135deg,#1a2744,#0ea5e9)' },
  { initials: 'RP', name: 'Rina Pratiwi',   role: 'Anggota Divisi', gradient: 'linear-gradient(135deg,#1d4ed8,#60a5fa)' },
  { initials: 'YH', name: 'Yusuf Hakim',    role: 'Anggota Divisi', gradient: 'linear-gradient(135deg,#0a1628,#1e3a8a)' },
];

const ARTICLES = [
  { id: 1, tag: 'Bisnis',    emoji: '🚀', title: 'Cara Memulai Bisnis bagi Mahasiswa',                            excerpt: 'Panduan langkah demi langkah untuk mahasiswa yang ingin memulai usaha pertama mereka dengan modal minim dan ide kreatif.',                                  date: '28 Okt 2026', readTime: '5 menit', gradient: 'linear-gradient(135deg,#1e3a8a,#3b82f6)' },
  { id: 2, tag: 'Marketing', emoji: '📱', title: 'Strategi Pemasaran Produk melalui Media Sosial',                excerpt: 'Tips dan trik efektif untuk memasarkan produk di Instagram, TikTok, dan platform digital lainnya dengan engagement tinggi.',                              date: '25 Okt 2026', readTime: '7 menit', gradient: 'linear-gradient(135deg,#1a2744,#0ea5e9)' },
  { id: 3, tag: 'Kreatif',   emoji: '💡', title: 'Tips Mengembangkan Ide Bisnis Kreatif',                        excerpt: 'Bagaimana menemukan dan mengembangkan ide bisnis yang unik, relevan, dan memiliki potensi pasar yang besar.',                                             date: '20 Okt 2026', readTime: '4 menit', gradient: 'linear-gradient(135deg,#1d4ed8,#60a5fa)' },
  { id: 4, tag: 'Branding',  emoji: '🎨', title: 'Pentingnya Branding dalam Sebuah Usaha',                       excerpt: 'Mengapa identitas merek yang kuat menjadi fondasi kesuksesan bisnis dan bagaimana membangunnya dari nol.',                                               date: '15 Okt 2026', readTime: '6 menit', gradient: 'linear-gradient(135deg,#0a1628,#1d4ed8)' },
  { id: 5, tag: 'Digital',   emoji: '💻', title: 'Peluang Bisnis Digital bagi Mahasiswa Teknik Informatika',     excerpt: 'Eksplorasi berbagai peluang bisnis di bidang teknologi digital yang sangat relevan bagi mahasiswa IT di era sekarang.',                                  date: '10 Okt 2026', readTime: '8 menit', gradient: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)' },
  { id: 6, tag: 'UMKM',     emoji: '🤝', title: 'Kolaborasi UMKM dan Mahasiswa: Sinergi yang Menguntungkan',    excerpt: 'Bagaimana kemitraan antara usaha mikro kecil menengah dengan mahasiswa menciptakan nilai tambah bagi kedua belah pihak.',                              date: '5 Okt 2026',  readTime: '5 menit', gradient: 'linear-gradient(135deg,#1a2744,#3b82f6)' },
];

/* ─── TOAST ───────────────────────────────────────────────────────────────── */
let _toastTimer = null;

function showToast(msg, type = 'success') {
  const toast = $('#toast');
  if (!toast) return;

  if (_toastTimer) {
    clearTimeout(_toastTimer);
    _toastTimer = null;
  }

  toast.textContent = msg;
  toast.classList.remove('show', 'warning', 'error');

  if (type === 'warning') toast.classList.add('warning');
  if (type === 'error')   toast.classList.add('error');

  // Force reflow to restart CSS transition even on rapid calls
  void toast.offsetWidth;
  toast.classList.add('show');

  _toastTimer = setTimeout(() => {
    toast.classList.remove('show', 'warning', 'error');
    _toastTimer = null;
  }, 3000);
}

/* ─── NAVBAR ──────────────────────────────────────────────────────────────── */
function updateActiveLink() {
  const sectionIds = ['home', 'about', 'programs', 'contact'];
  const offset = 120;
  let currentId = '';

  for (const id of sectionIds) {
    const section = document.getElementById(id);
    if (!section) continue;
    const rect = section.getBoundingClientRect();
    if (rect.top <= offset && rect.bottom > offset) {
      currentId = id;
      break;
    }
  }

  $$('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentId}`) {
      link.classList.add('active');
    }
  });
}

function initNavbar() {
  const navbar    = $('#navbar');
  const hamburger = $('#hamburger');
  const navLinks  = $('#navLinks');

  // Add .scrolled when page is scrolled more than 20px
  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Mobile hamburger toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile nav when any nav link is clicked
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger) hamburger.classList.remove('open');
      if (navLinks)  navLinks.classList.remove('open');
    });
  });
}

/* ─── PRODUCTS ────────────────────────────────────────────────────────────── */
const WA_ICON_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.118 1.529 5.845L.057 23.492a.5.5 0 0 0 .614.614l5.647-1.472A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 0 1-5.031-1.387l-.36-.214-3.735.974.994-3.624-.235-.374A9.796 9.796 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
</svg>`;

function renderProducts(category = 'all', searchQuery = '') {
  const grid = $('#productsGrid');
  if (!grid) return;

  const query = searchQuery.trim().toLowerCase();

  const filtered = PRODUCTS.filter(item => {
    const matchCat    = category === 'all' || item.category === category;
    const matchSearch = !query
      || item.name.toLowerCase().includes(query)
      || item.desc.toLowerCase().includes(query);
    return matchCat && matchSearch;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="grid-column:1/-1;text-align:center;padding:3rem 1rem;opacity:.7;">
        <div style="font-size:3rem;margin-bottom:1rem;">🔍</div>
        <p style="font-size:1.1rem;">Tidak ada produk ditemukan</p>
      </div>`;
    return;
  }

  filtered.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.style.animationDelay = `${idx * 0.07}s`;
    card.innerHTML = `
      <div class="product-emoji">${item.emoji}</div>
      <div class="product-body" style="display:flex; flex-direction:column; flex:1; gap:8px;">
        <span class="product-badge product-category">${item.category}</span>
        <h3 class="product-name">${item.name}</h3>
        <p class="product-desc">${item.desc}</p>
        <div class="product-footer" style="display:flex; flex-direction:column; gap:10px; margin-top:auto;">
          <span class="product-price">${item.price}</span>
          <button class="wa-btn btn-wa product-wa-btn" aria-label="Pesan ${item.name} via WhatsApp">
            ${WA_ICON_SVG}
            Pesan via WhatsApp
          </button>
        </div>
      </div>`;

    card.querySelector('.product-wa-btn').addEventListener('click', () => {
      openWA(item.wa, `Halo, saya tertarik memesan ${item.name} seharga ${item.price}`);
    });

    grid.appendChild(card);
  });
}

function initProducts() {
  renderProducts('all', '');

  let _debounceTimer   = null;
  let _activeCategory  = 'all';

  // Category filter buttons
  $$('.product-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.product-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _activeCategory = btn.dataset.category || 'all';
      const query = ($('#productSearch') || {}).value || '';
      renderProducts(_activeCategory, query);
    });
  });

  // Search input with 300 ms debounce
  const searchInput = $('#productSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(_debounceTimer);
      _debounceTimer = setTimeout(() => {
        renderProducts(_activeCategory, searchInput.value);
      }, 300);
    });
  }

  // Search button – immediate render
  const searchBtn = $('#searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const query = ($('#productSearch') || {}).value || '';
      renderProducts(_activeCategory, query);
    });
  }
}

/* ─── UMKM ────────────────────────────────────────────────────────────────── */
function renderUMKM() {
  const grid = $('#umkmGrid');
  if (!grid) return;

  grid.innerHTML = '';

  UMKM_LIST.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'umkm-card fade-in';
    card.style.animationDelay = `${idx * 0.09}s`;
    card.innerHTML = `
      <div class="umkm-header">
        <div class="umkm-avatar" style="background:${item.color};">${item.initials}</div>
        <div class="umkm-info">
          <h3 class="umkm-brand">${item.brand}</h3>
          <p class="umkm-owner">${item.owner}</p>
        </div>
      </div>
      <span class="umkm-type-badge">${item.type}</span>
      <p class="umkm-desc">${item.desc}</p>
      <button class="wa-btn btn-wa umkm-wa-btn" aria-label="Hubungi ${item.brand} via WhatsApp">
        ${WA_ICON_SVG}
        Hubungi via WhatsApp
      </button>`;

    card.querySelector('.umkm-wa-btn').addEventListener('click', () => {
      openWA(item.wa, `Halo ${item.brand}, saya tertarik dengan usaha kamu!`);
    });

    grid.appendChild(card);
  });
}

/* ─── SUBMIT BUSINESS FORM ────────────────────────────────────────────────── */
function initSubmitBusinessForm() {
  const form = $('#submitBusinessForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const allFilled = $$('[required]', form).every(f => f.value.trim() !== '');

    if (!allFilled) {
      showToast('⚠️ Mohon lengkapi semua field yang wajib diisi.', 'warning');
      return;
    }

    showToast('✅ Usaha kamu berhasil didaftarkan! Kami akan menghubungi kamu segera.');
    form.reset();
  });
}

/* ─── GALLERY ─────────────────────────────────────────────────────────────── */
function openGalleryModal(item) {
  const modal = $('#galleryModal');
  if (!modal) return;

  const emojiEl   = modal.querySelector('.gallery-modal-emoji');
  const captionEl = modal.querySelector('.gallery-modal-caption');
  const catEl     = modal.querySelector('.gallery-modal-category');

  if (emojiEl)   emojiEl.textContent   = item.emoji;
  if (captionEl) captionEl.textContent = item.caption;
  if (catEl)     catEl.textContent     = item.category;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
  const modal = $('#galleryModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function renderGallery(category = 'all') {
  const grid = $('#galleryGrid');
  if (!grid) return;

  const filtered = category === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === category);

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="grid-column:1/-1;text-align:center;padding:3rem 1rem;opacity:.7;">
        <div style="font-size:3rem;margin-bottom:1rem;">📷</div>
        <p style="font-size:1.1rem;">Tidak ada foto ditemukan</p>
      </div>`;
    return;
  }

  filtered.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'gallery-item fade-in';
    el.style.animationDelay = `${idx * 0.07}s`;
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', item.caption);
    el.innerHTML = `
      <div class="gallery-item-inner gallery-img" style="background:${item.gradient};">
        <span class="gallery-category-badge">${item.category}</span>
        <span class="gallery-emoji">${item.emoji}</span>
        <div class="gallery-overlay">
          <div>
            <div class="gallery-caption">${item.caption}</div>
            <div class="gallery-caption-sub">Klik untuk melihat detail</div>
          </div>
        </div>
      </div>`;

    const handleOpen = () => openGalleryModal(item);
    el.addEventListener('click', handleOpen);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleOpen(); }
    });

    grid.appendChild(el);
  });
}

function initGallery() {
  renderGallery('all');

  $$('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.category || 'all');
    });
  });
}

function initGalleryModal() {
  const modal    = $('#galleryModal');
  const closeBtn = $('#galleryModalClose');
  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener('click', closeGalleryModal);

  // Click outside modal content box closes it
  modal.addEventListener('click', e => {
    if (e.target === modal) closeGalleryModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeGalleryModal();
  });
}

/* ─── TEAM ────────────────────────────────────────────────────────────────── */
function renderTeam() {
  const grid = $('#teamGrid');
  if (!grid) return;

  grid.innerHTML = '';

  TEAM_MEMBERS.forEach((member, idx) => {
    const card = document.createElement('div');
    card.className = 'team-card fade-in';
    card.style.animationDelay = `${idx * 0.08}s`;
    card.innerHTML = `
      <div class="team-avatar" style="background:${member.gradient};">${member.initials}</div>
      <h3 class="team-name">${member.name}</h3>
      <span class="team-role-badge team-role">${member.role}</span>
      <div class="team-division">Divisi Kewirausahaan</div>`;
    grid.appendChild(card);
  });
}

/* ─── ARTICLES ────────────────────────────────────────────────────────────── */
function renderArticles() {
  const grid = $('#articlesGrid');
  if (!grid) return;

  grid.innerHTML = '';

  ARTICLES.forEach((item, idx) => {
    const card = document.createElement('article');
    card.className = 'article-card fade-in';
    card.style.animationDelay = `${idx * 0.09}s`;
    card.innerHTML = `
      <div class="article-banner article-header" style="background:${item.gradient};">
        <span class="article-emoji">${item.emoji}</span>
      </div>
      <div class="article-body">
        <span class="article-tag">${item.tag}</span>
        <h3 class="article-title">${item.title}</h3>
        <p class="article-excerpt">${item.excerpt}</p>
        <div class="article-meta">
          <span class="article-date">📅 ${item.date}</span>
          <span class="article-read-time">⏱ ${item.readTime}</span>
        </div>
        <button class="article-read-btn btn-read">Baca Selengkapnya</button>
      </div>`;

    card.querySelector('.article-read-btn').addEventListener('click', () => {
      showToast(`📖 Membuka artikel: "${item.title}"`);
    });

    grid.appendChild(card);
  });
}

/* ─── CONTACT FORM ────────────────────────────────────────────────────────── */
function initContactForm() {
  const form = $('#contactForm');
  if (!form) return;

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Support both id-based and name-based selectors for flexibility
    const nameField    = $('#contactName',    form) || $('[name="name"]',    form);
    const emailField   = $('#contactEmail',   form) || $('[name="email"]',   form);
    const messageField = $('#contactMessage', form) || $('[name="message"]', form);

    const name    = nameField    ? nameField.value.trim()    : '';
    const email   = emailField   ? emailField.value.trim()   : '';
    const message = messageField ? messageField.value.trim() : '';

    if (!name || !email || !message) {
      showToast('⚠️ Mohon lengkapi semua field yang wajib diisi.', 'warning');
      return;
    }

    if (!EMAIL_RE.test(email)) {
      showToast('⚠️ Format email tidak valid. Contoh: nama@email.com', 'warning');
      return;
    }

    showToast('✅ Pesan kamu sudah terkirim! Kami akan membalas segera.');
    form.reset();
  });
}

/* ─── JOIN MODAL ──────────────────────────────────────────────────────────── */
function openJoinModal() {
  const modal = $('#joinModal');
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeJoinModal() {
  const modal = $('#joinModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function initJoinModal() {
  const modal    = $('#joinModal');
  const closeBtn = $('#joinModalClose');
  const joinForm = $('#joinForm');

  if (!modal) return;

  // Close triggers
  if (closeBtn) closeBtn.addEventListener('click', closeJoinModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeJoinModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeJoinModal();
  });

  // URL Google Apps Script Web App (Database Google Sheets)
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzdVQIOcXM_byZts4B5Ci-wu8-ivWK-lLFF1J1vKalUcCZidUo_vo4dgJ5J2s_FfqUFLw/exec';

  // Business Partner form validation & submission
  if (joinForm) {
    joinForm.addEventListener('submit', async e => {
      e.preventDefault();

      const allFilled = $$('[required]', joinForm).every(f => f.value.trim() !== '');

      if (!allFilled) {
        showToast('⚠️ Mohon lengkapi semua field yang wajib diisi.', 'warning');
        return;
      }

      const brand = $('#joinBrand')?.value.trim() || '';
      const owner = $('#joinOwner')?.value.trim() || '';
      const address = $('#joinAddress')?.value.trim() || '';
      const wa = $('#joinWA')?.value.trim() || '';
      const email = $('#joinEmail')?.value.trim() || '';
      const product = $('#joinProduct')?.value.trim() || '';
      const social = $('#joinSocial')?.value.trim() || '';

      const partnerPayload = { brand, owner, address, wa, email, product, social };
      localStorage.setItem('partnerData', JSON.stringify(partnerPayload));

      const submitBtn = joinForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>⏳</span> Menyimpan...';
      }

      if (GOOGLE_SHEET_URL && GOOGLE_SHEET_URL.trim() !== '') {
        try {
          await fetch(GOOGLE_SHEET_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(partnerPayload)
          });
          showToast('✅ Data Partner tersimpan di Google Sheets!');
        } catch (err) {
          console.error('Error Google Sheets:', err);
          showToast('✅ Data Partner tersimpan! Membuka Formulir Produk...');
        }
      } else {
        showToast('✅ Data Partner tersimpan! Membuka Formulir Produk...');
      }

      setTimeout(() => {
        joinForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        closeJoinModal();
        window.location.href = 'form-produk.html';
      }, 600);
    });
  }
}

/* ─── BACK TO TOP ─────────────────────────────────────────────────────────── */
function updateBackToTop() {
  const btn = $('#backToTop');
  if (btn) btn.classList.toggle('visible', window.scrollY > 500);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─── INTERSECTION OBSERVER ───────────────────────────────────────────────── */
function initIntersectionObserver() {
  const selector = [
    '.section-header',
    '.program-card',
    '.value-card',
    '.team-card',
    '.product-card',
    '.umkm-card',
    '.gallery-item',
    '.article-card',
    '.contact-card',
    '.stat-item',
  ].join(', ');

  const targets = $$(selector);
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
      observer.unobserve(el);
    });
  }, { threshold: 0.12 });

  targets.forEach(el => {
    // Only apply initial hidden state to elements without a CSS fade-in class
    if (!el.classList.contains('fade-in')) {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(28px)';
      el.style.transition = 'opacity .5s ease, transform .5s ease';
    }
    observer.observe(el);
  });
}

/* ─── SMOOTH SCROLL ───────────────────────────────────────────────────────── */
function initSmoothScroll() {
  const NAVBAR_HEIGHT = 72;

  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const hash = anchor.getAttribute('href');
    if (!hash || hash === '#') return;

    const targetEl = document.getElementById(hash.slice(1));
    if (!targetEl) return;

    e.preventDefault();

    const top = targetEl.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}

/* ─── NEWSLETTER / FOOTER CTA ─────────────────────────────────────────────── */
function initNewsletterOrCTA() {
  const newsletterForm = $('#newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('[type="email"]');
      if (!emailInput || !emailInput.value.trim()) {
        showToast('⚠️ Masukkan email kamu terlebih dahulu.', 'warning');
        return;
      }
      showToast('✅ Kamu berhasil berlangganan newsletter kami!');
      newsletterForm.reset();
    });
  }

  // Catch any remaining un-handled CTA buttons
  $$('.cta-btn:not([data-js-initialized])').forEach(btn => {
    btn.dataset.jsInitialized = 'true';
    btn.addEventListener('click', () => {
      showToast('🚀 Terima kasih atas antusiasme kamu!');
    });
  });
}

/* ─── BOOTSTRAP ───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initContactForm();
  initJoinModal();
  initIntersectionObserver();
  initSmoothScroll();
  initNewsletterOrCTA();

  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) backToTopBtn.addEventListener('click', scrollToTop);

  window.addEventListener('scroll', () => {
    updateActiveLink();
    updateBackToTop();
  }, { passive: true });

  // Initial state check without waiting for first scroll
  updateActiveLink();
  updateBackToTop();
});
