class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #1f2937;
          color: white;
          padding: 3rem 1rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #d97706;
          margin-bottom: 1rem;
        }
        .links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s;
        }
        .links a:hover {
          color: white;
        }
        .copyright {
          grid-column: 1 / -1;
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid #374151;
          color: #9ca3af;
        }
        @media (max-width: 640px) {
          .container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="container">
          <div>
            <div class="logo">Wireless Cooking</div>
            <p class="text-gray-400">Marketplace de utensilios de cocina artesanales</p>
          </div>
          <div class="links">
            <h3 class="font-bold text-white mb-2">Compañía</h3>
            <a href="#">Sobre nosotros</a>
            <a href="#">Términos y condiciones</a>
            <a href="#">Política de privacidad</a>
          </div>
          <div class="links">
            <h3 class="font-bold text-white mb-2">Ayuda</h3>
            <a href="#">Preguntas frecuentes</a>
            <a href="#">Envíos y devoluciones</a>
            <a href="#">Contacto</a>
          </div>
          <div class="links">
            <h3 class="font-bold text-white mb-2">Síguenos</h3>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
          <div class="copyright">
            © 2025 Wireless Cooking. Proyecto universitario.
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);