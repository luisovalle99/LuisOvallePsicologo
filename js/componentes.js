/* COMPONENTES COMUNES: menú y pie de página.
   Para modificar el menú o el footer en todas las páginas, edita aquí. */
const MENU = String.raw`<nav>
        <a href="index.html" class="logo">Luis Ovalle Psicología</a>
        <div class="nav-links">
            <a href="index.html" class="active">Inicio</a>
            <a href="sobre-mi.html">Sobre mí</a>
            <a href="especialidades.html">Especialidades</a>
            <a href="preguntas-frecuentes.html">Preguntas frecuentes</a>
            <a href="contacto-ubicacion.html">Ubicación</a>
            <a href="contacto-ubicacion.html" class="btn">Pedir cita</a>
        </div>
    </nav>`;
const FOOTER = String.raw`<footer>
        <div class="footer-content">
            <p><strong>Luis Ovalle Psicología</strong> — Psicólogo General Sanitario</p>
            <p>Nº Colegiado 34183 (Col·legi Oficial de Psicologia de Catalunya)</p>
            <p>Psicorosselló (Barcelona) y Consulta Online</p>
            <nav class="footer-legal-nav">
                <a href="aviso-legal.html">Aviso Legal</a>
                <a href="politica-privacidad.html">Política de Privacidad</a>
                <a href="politica-cookies.html">Política de Cookies</a>
            </nav>
            <p class="copyright">© 2026 Luis Ovalle. Todos los derechos reservados.</p>
        </div>
    </footer>`;

const menuTarget = document.getElementById('menu-comun');
if (menuTarget) {
  menuTarget.innerHTML = MENU;
  const actual = location.pathname.split('/').pop() || 'index.html';
  menuTarget.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === actual && !a.classList.contains('btn'));
  });
}
const footerTarget = document.getElementById('footer-comun');
if (footerTarget) footerTarget.innerHTML = FOOTER;
