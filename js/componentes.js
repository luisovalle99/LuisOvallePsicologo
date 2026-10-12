
/* =========================================
   LUIS OVALLE PSICOLOGÍA
   COMPONENTES COMUNES

   1. Menú ordenador
   2. Menú hamburguesa móvil
   3. Footer
   4. Funciones de navegación
   ========================================= */


/* =========================================
   1. MENÚ DE NAVEGACIÓN
   ========================================= */

const MENU = String.raw`

<nav class="site-nav" aria-label="Navegación principal">

    <!-- LOGOTIPO / NOMBRE -->
    <a href="index.html" class="logo">
        Luis Ovalle Psicología
    </a>

    <!-- MENÚ DE ORDENADOR -->
    <div class="nav-links">

        <a href="index.html">Inicio</a>

        <a href="sobre-mi.html">Sobre mí</a>

        <a href="especialidades.html">Especialidades</a>

        <a href="preguntas-frecuentes.html">
            Preguntas frecuentes
        </a>

        <a href="contacto-ubicacion.html">Ubicación</a>

        <a href="contacto-ubicacion.html" class="btn">
            Pedir cita
        </a>

    </div>


    <!-- BOTÓN HAMBURGUESA PARA MÓVIL -->
    <button
        type="button"
        class="mobile-menu-toggle"
        aria-label="Abrir menú de navegación"
        aria-expanded="false"
        aria-controls="mobile-navigation"
    >
        <span></span>
        <span></span>
        <span></span>
    </button>


    <!-- MENÚ DESPLEGABLE MÓVIL -->
    <div
        id="mobile-navigation"
        class="mobile-nav"
        hidden
    >

        <a href="index.html">Inicio</a>

        <a href="sobre-mi.html">Sobre mí</a>

        <a href="especialidades.html">Especialidades</a>

        <a href="preguntas-frecuentes.html">
            Preguntas frecuentes
        </a>

        <a href="contacto-ubicacion.html">Ubicación</a>

        <a href="contacto-ubicacion.html" class="btn">
            Pedir cita
        </a>

    </div>

</nav>
`;


/* =========================================
   2. FOOTER - SIN MODIFICACIONES
   ========================================= */

const FOOTER = String.raw`

<footer>

    <div class="footer-content">

        <p>
            <strong>Luis Ovalle Psicología</strong>
            — Psicólogo General Sanitario
        </p>

        <p>
            Nº Colegiado 34183
            (Col·legi Oficial de Psicologia de Catalunya)
        </p>

        <p>
            Psicorosselló (Barcelona) y Consulta Online
        </p>

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

        <p class="copyright">
            © 2026 Luis Ovalle.
            Todos los derechos reservados.
        </p>

    </div>

</footer>
`;


/* =========================================
   3. CARGAR EL MENÚ EN TODAS LAS PÁGINAS
   ========================================= */

const menuTarget = document.getElementById("menu-comun");

if (menuTarget) {

    menuTarget.innerHTML = MENU;

    const actual =
        window.location.pathname.split("/").pop()
        || "index.html";

    /* Identificar página activa */
    menuTarget.querySelectorAll(
        ".nav-links a, .mobile-nav a"
    ).forEach(link => {

        const esActual =
            link.getAttribute("href") === actual
            && !link.classList.contains("btn");

        link.classList.toggle("active", esActual);

        if (esActual) {
            link.setAttribute("aria-current", "page");
        }

    });


    /* =====================================
       4. FUNCIONAMIENTO DEL MENÚ MÓVIL
       ===================================== */

    const toggle = menuTarget.querySelector(
        ".mobile-menu-toggle"
    );

    const mobileNav = menuTarget.querySelector(
        ".mobile-nav"
    );

    function setMenuOpen(open) {

        mobileNav.hidden = !open;

        toggle.classList.toggle("is-open", open);

        toggle.setAttribute(
            "aria-expanded",
            String(open)
        );

        toggle.setAttribute(
            "aria-label",
            open
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
        );

    }

    /* Abrir y cerrar pulsando las tres líneas */
    toggle.addEventListener("click", () => {

        setMenuOpen(mobileNav.hidden);

    });

    /* Cerrar cuando se elige una opción */
    mobileNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            setMenuOpen(false);
        });

    });

    /* Cerrar al pulsar fuera del menú */
    document.addEventListener("click", event => {

        if (
            !mobileNav.hidden &&
            !menuTarget.contains(event.target)
        ) {
            setMenuOpen(false);
        }

    });

    /* Cerrar con la tecla Escape */
    document.addEventListener("keydown", event => {

        if (event.key === "Escape" && !mobileNav.hidden) {

            setMenuOpen(false);
            toggle.focus();

        }

    });

    /* Cerrar si pasamos de móvil a ordenador */
    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {
            setMenuOpen(false);
        }

    });

}


/* =========================================
   5. CARGAR EL FOOTER
   ========================================= */

const footerTarget = document.getElementById(
    "footer-comun"
);

if (footerTarget) {
    footerTarget.innerHTML = FOOTER;
}
