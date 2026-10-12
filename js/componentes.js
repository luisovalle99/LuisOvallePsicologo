
/* =========================================
   COMPONENTES COMUNES DE LA WEB DE LUIS

   Aquí puedes modificar:
   1. Menú superior
   2. Pie de página
   3. Enlaces legales

   Los cambios se aplican a todas las páginas.
   ========================================= */


/* =========================================
   1. MENÚ SUPERIOR
   ========================================= */

const MENU = String.raw`
<nav>
    <a href="index.html" class="logo">
        Luis Ovalle Psicología
    </a>

    <div class="nav-links">

        <a href="index.html" class="active">
            Inicio
        </a>

        <a href="sobre-mi.html">
            Sobre mí
        </a>

        <a href="especialidades.html">
            Especialidades
        </a>

        <a href="preguntas-frecuentes.html">
            Preguntas frecuentes
        </a>

        <a href="contacto-ubicacion.html">
            Ubicación
        </a>

        <a href="contacto-ubicacion.html" class="btn">
            Pedir cita
        </a>

    </div>
</nav>
`;


/* =========================================
   2. PIE DE PÁGINA
   ========================================= */

const FOOTER = String.raw`
<footer>

    <div class="footer-content">

        <!-- Nombre y profesión -->
        <p>
            <strong>Luis Ovalle Psicología</strong>
            — Psicólogo General Sanitario
        </p>

        <!-- Número de colegiado -->
        <p>
            Nº Colegiado 34183
            (Col·legi Oficial de Psicologia de Catalunya)
        </p>

        <!-- Ubicación -->
        <p>
            Psicorosselló (Barcelona) y Consulta Online
        </p>


        <!-- =================================
             ENLACES LEGALES
             Sin recuadro blanco
             ================================= -->

        <div class="footer-legal-nav">

            <a href="aviso-legal.html">
                Aviso Legal
            </a>

            <a href="politica-privacidad.html">
                Política de Privacidad
            </a>

            <a href="politica-cookies.html">
                Política de Cookies
            </a>

        </div>


        <!-- Copyright -->
        <p class="copyright">
            © 2026 Luis Ovalle.
            Todos los derechos reservados.
        </p>

    </div>

</footer>
`;


/* =========================================
   3. CARGAR MENÚ EN TODAS LAS PÁGINAS
   ========================================= */

const menuTarget = document.getElementById('menu-comun');

if (menuTarget) {

    menuTarget.innerHTML = MENU;

    // Detecta qué página está abierta.
    const actual =
        location.pathname.split('/').pop() || 'index.html';

    // Marca la página activa en el menú.
    menuTarget.querySelectorAll('.nav-links a').forEach(a => {

        a.classList.toggle(
            'active',
            a.getAttribute('href') === actual &&
            !a.classList.contains('btn')
        );

    });
}


/* =========================================
   4. CARGAR FOOTER EN TODAS LAS PÁGINAS
   ========================================= */

const footerTarget = document.getElementById('footer-comun');

if (footerTarget) {
    footerTarget.innerHTML = FOOTER;
}
