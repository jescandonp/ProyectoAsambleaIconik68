/**
 * Iconik 68 — Componente de Navegación Compartida
 * Inyecta el TopNav y el SideNav en todas las páginas del portal.
 *
 * Uso en cada HTML:
 *   1. Añadir data-page="[id]" al <body>
 *   2. Poner <div id="app-topnav"></div> y <div id="app-sidenav"></div>
 *   3. Incluir <script src="assets/nav.js"></script>
 *
 * IDs de página válidos: intro | gestion | presupuesto | proyectos | convivencia | galeria
 */

const ICONIK_NAV = {
  pages: [
    {
      id:    'intro',
      href:  'index.html',
      label: 'Introducción',
      icon:  'home',
      desc:  'Bienvenida y acceso a secciones'
    },
    {
      id:    'gestion',
      href:  'informe-gestion.html',
      label: 'Gestión Consejos',
      icon:  'analytics',
      desc:  'Informe de Gestión Consejos de Administración'
    },
    {
      id:    'presupuesto',
      href:  'presupuesto.html',
      label: 'Presupuesto 2026',
      icon:  'account_balance_wallet',
      desc:  'Proyecciones y asignación de recursos'
    },
    {
      id:    'proyectos',
      href:  'proyectos.html',
      label: 'Proyectos',
      icon:  'construction',
      desc:  'Cuota extraordinaria e infraestructura'
    },
    {
      id:    'convivencia',
      href:  'manual-convivencia.html',
      label: 'Convivencia',
      icon:  'menu_book',
      desc:  'Normativa y zonas comunes'
    },
    {
      id:    'documentos',
      href:  'documentos.html',
      label: 'Documentos',
      icon:  'folder_open',
      desc:  'Revisoría Fiscal y Estados Financieros',
      divider: true
    },
    {
      id:    'galeria',
      href:  'galeria.html',
      label: 'Galería',
      icon:  'photo_library',
      desc:  'Fotos y actividades del conjunto'
    }
  ],

  getCurrentPage() {
    return document.body.getAttribute('data-page') || 'intro';
  },

  renderTopNav() {
    const current = this.getCurrentPage();
    const topPages = this.pages.slice(0, 4); // primeras 4 en el topnav
    return `
      <nav class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm shadow-blue-900/5">
        <div class="flex justify-between items-center px-8 py-4 w-full max-w-7xl mx-auto">
          <!-- Logo -->
          <div class="flex items-center gap-3">
            <a href="index.html" class="flex items-center gap-2 group">
              <div class="w-8 h-8 bg-gradient-to-br from-primary to-primary-container rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md">I</div>
              <span class="text-xl font-['Outfit'] font-bold tracking-tight text-blue-900">Iconik 68</span>
            </a>
          </div>

          <!-- Links desktop -->
          <div class="hidden md:flex items-center gap-8">
            ${topPages.map(p => `
              <a href="${p.href}" class="${current === p.id
                ? 'text-blue-900 border-b-2 border-blue-900 pb-1 font-semibold text-sm'
                : 'text-slate-500 font-medium text-sm hover:text-blue-700 transition-colors'}">
                ${p.label}
              </a>
            `).join('')}
          </div>

          <!-- Acciones -->
          <div class="flex items-center gap-2">
            <span class="hidden md:inline-flex items-center gap-1 text-xs text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full">
              <span class="material-symbols-outlined text-[14px]">calendar_today</span>
              Asamblea 2026
            </span>
            <!-- Hamburger mobile -->
            <button id="iconik-mobile-btn" class="md:hidden p-2 text-slate-600 hover:bg-blue-50 rounded-full transition-all active:scale-95" aria-label="Menú">
              <span class="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        <div id="iconik-mobile-menu" class="hidden md:hidden bg-white/98 backdrop-blur-xl border-t border-blue-900/10 px-6 py-2 shadow-lg">
          ${this.pages.map(p => `
            ${p.divider ? '<div class="border-t border-slate-100 my-1"></div>' : ''}
            <a href="${p.href}" class="flex items-center gap-3 py-3 ${current === p.id
              ? 'text-blue-900 font-semibold'
              : 'text-slate-600 hover:text-blue-900'} transition-colors border-b border-slate-100 last:border-0">
              <span class="material-symbols-outlined text-base">${p.icon}</span>
              <div class="flex-1">
                <div class="text-sm">${p.label}</div>
                <div class="text-xs text-slate-400">${p.desc}</div>
              </div>
              ${p.divider ? '<span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>' : ''}
            </a>
          `).join('')}
        </div>
      </nav>`;
  },

  renderSideNav() {
    const current = this.getCurrentPage();
    return `
      <aside class="hidden lg:flex h-screen w-64 fixed left-0 top-0 pt-24 bg-slate-50 flex-col p-4 z-40 border-r border-slate-200/60">
        <div class="mb-8 px-4">
          <h2 class="text-base font-bold text-blue-900 font-['Outfit']">Asamblea General</h2>
          <p class="text-xs text-slate-400 mt-0.5">Iconik 68 · 2026</p>
        </div>

        <nav class="flex flex-col gap-1 flex-1">
          ${this.pages.map(p => `
            ${p.divider ? '<div class="my-2 border-t border-slate-200/60"></div>' : ''}
            <a href="${p.href}" class="flex items-center gap-3 p-3 rounded-l-xl transition-all duration-200 ${current === p.id
              ? 'bg-white text-blue-900 font-bold shadow-sm border-r-4 border-blue-900 translate-x-1'
              : 'text-slate-500 hover:bg-white hover:text-blue-900 hover:translate-x-1 hover:shadow-sm'}">
              <span class="material-symbols-outlined text-xl" ${current === p.id ? 'style="font-variation-settings: \'FILL\' 1;"' : ''}>${p.icon}</span>
              <span class="text-sm">${p.label}</span>
              ${p.divider && current !== p.id ? '<span class="ml-auto w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>' : ''}
            </a>
          `).join('')}
        </nav>

        <!-- Footer del sidebar -->
        <div class="mt-auto pt-6 border-t border-slate-200/60 px-2">
          <p class="text-[10px] text-slate-400 leading-relaxed">
            Portal desarrollado por<br>
            <span class="font-semibold text-slate-500">Juan Manuel Escandón</span><br>
            para la comunidad Iconik 68.
          </p>
        </div>
      </aside>`;
  },

  initMobileMenu() {
    const btn  = document.getElementById('iconik-mobile-btn');
    const menu = document.getElementById('iconik-mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('hidden');
      const isOpen = !menu.classList.contains('hidden');
      btn.querySelector('.material-symbols-outlined').textContent = isOpen ? 'close' : 'menu';
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', () => {
      if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        btn.querySelector('.material-symbols-outlined').textContent = 'menu';
      }
    });
  },

  init() {
    const run = () => {
      const topEl  = document.getElementById('app-topnav');
      const sideEl = document.getElementById('app-sidenav');
      if (topEl)  topEl.innerHTML  = this.renderTopNav();
      if (sideEl) sideEl.innerHTML = this.renderSideNav();
      this.initMobileMenu();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  }
};

ICONIK_NAV.init();
