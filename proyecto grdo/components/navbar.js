class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.08);
          padding: 1rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: sticky;
          top: 0;
          z-index: 50;
          font-family: 'Inter', sans-serif;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .logo {
          color: #d97706;
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: -0.5px;
          cursor: pointer;
        }

        /* === Barra de búsqueda moderna === */
        .search-bar {
          flex-grow: 1;
          display: flex;
          align-items: center;
          background-color: #f9fafb;
          border-radius: 9999px;
          padding: 0.5rem 1rem;
          max-width: 600px;
          border: 1px solid #e5e7eb;
          transition: all 0.2s ease-in-out;
        }

        .search-bar:focus-within {
          border-color: #d97706;
          background-color: #ffffff;
          box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.15);
        }

        .search-bar input {
          flex: 1;
          border: none;
          background: transparent;
          outline: none;
          font-size: 0.95rem;
          color: #374151;
        }

        .search-bar input::placeholder {
          color: #9ca3af;
        }

        .search-bar button {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .search-bar svg {
          width: 18px;
          height: 18px;
          color: #6b7280;
          transition: color 0.2s ease;
        }

        .search-bar button:hover svg {
          color: #d97706;
        }

        /* === Íconos === */
        .icons {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .icon-wrapper {
          position: relative;
          cursor: pointer;
          background-color: #f9fafb;
          border-radius: 50%;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }

        .icon-wrapper:hover {
          background-color: #f3f4f6;
        }

        .icon-wrapper svg {
          width: 18px;
          height: 18px;
          color: #111827;
        }

        .login-btn {
          background-color: #d97706;
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .login-btn:hover {
          background-color: #b45309;
        }

        /* === Categorías === */
        .categories {
          display: flex;
          gap: 1.5rem;
          padding: 0.5rem 0;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .categories::-webkit-scrollbar {
          display: none;
        }

        .category {
          white-space: nowrap;
          color: #4b5563;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .category:hover {
          color: #d97706;
        }

        .category.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #d97706;
        }

        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          .top-bar {
            flex-direction: column;
            gap: 1rem;
          }
          .search-bar {
            width: 100%;
          }
        }
      </style>

      <nav>
        <div class="top-bar">
          <div class="logo" id="homeLink">Wireless Cooking</div>

          <div class="search-bar">
            <input type="text" placeholder="Buscar productos, materiales o tiendas…" />
            <button aria-label="Buscar">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </button>
          </div>

          <div class="icons">
            <div class="icon-wrapper" title="Favoritos">
              <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="black">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.435 4.582a5.5 5.5 0 00-7.778 0L12 6.24l-1.657-1.658a5.5 5.5 0 00-7.778 7.778l9.435 9.435 9.435-9.435a5.5 5.5 0 000-7.778z" />
              </svg>
            </div>
            <div class="icon-wrapper" title="Carrito">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#111827">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.293 4.293A1 1 0 007 19h10a1 1 0 00.894-1.447L17 13M9 21h.01M15 21h.01" />
              </svg>
            </div>
            <button class="login-btn" id="sessionBtn">Iniciar sesión</button>
          </div>
        </div>

        <div class="categories">
          <div class="category active" data-tab="ceramica">Cerámica</div>
          <div class="category" data-tab="acero">Acero Inoxidable</div>
          <div class="category" data-tab="utensilios">Utensilios</div>
          <div class="category" data-tab="artesanias">Artesanías</div>
          <div class="category" data-tab="vajillas">Vajillas</div>
          <div class="category" data-tab="accesorios">Accesorios</div>
          <div class="category" data-tab="ofertas">Ofertas</div>
        </div>
      </nav>
    `;

    // Navegación al home
    this.shadowRoot.querySelector('#homeLink').addEventListener('click', () => {
      window.location.href = 'index.html';
    });

    // Manejo de sesión
    const sessionBtn = this.shadowRoot.querySelector('#sessionBtn');
    const user = JSON.parse(localStorage.getItem('user'));

    // Cambiar texto según estado
    sessionBtn.textContent = user ? 'Cerrar sesión' : 'Iniciar sesión';

    sessionBtn.addEventListener('click', () => {
      if (user) {
        localStorage.removeItem('user');
        window.location.reload();
      } else {
        window.location.href = 'login.html';
      }
    });

    // Eventos de categorías
    const categories = this.shadowRoot.querySelectorAll('.category');
    categories.forEach(cat => {
      cat.addEventListener('click', () => {
        categories.forEach(c => c.classList.remove('active'));
        cat.classList.add('active');
        window.dispatchEvent(new CustomEvent('wc:switch-tab', { detail: { tab: cat.dataset.tab } }));
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
