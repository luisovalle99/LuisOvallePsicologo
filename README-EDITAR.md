# Web de Luis Ovalle — guía de edición

## ¿Qué archivo modifico?

- `index.html`: portada, presentación, áreas de intervención y secciones de inicio.
- `sobre-mi.html`: biografía y presentación profesional.
- `especialidades.html`: servicios y especialidades.
- `preguntas-frecuentes.html`: preguntas y respuestas.
- `contacto-ubicacion.html`: contacto, ubicación y llamadas a la acción.
- `js/componentes.js`: menú superior y pie de página compartidos entre las cinco páginas principales.
- `css/config.css`: colores globales, fondos, acentos y bordes.
- `css/style.css`: tamaños, distribución, versión móvil y estilos visuales.
- `img/`: imágenes de la web.
- `aviso-legal.html`, `politica-privacidad.html`, `politica-cookies.html`: textos legales; conservados en su formato original.

## Publicación en GitHub Pages

Sube **el contenido de esta carpeta** a la raíz del repositorio (no una carpeta extra). Mantén las rutas y nombres. GitHub Pages sirve los archivos HTML, CSS y JS sin compilación.

## Avisos antes de publicar

1. En la web original se referencian `img/favicon-32x32.png` y `img/og-preview.jpg`, pero no estaban en el ZIP. Añádelos si quieres icono y vista previa al compartir.
2. Comprueba y actualiza la información legal, de contacto y los enlaces antes de publicar.
3. El menú y el footer compartidos se insertan mediante JavaScript; si el navegador lo bloquea no aparecerán.
4. La foto de `sobre-mi.html` usaba un placeholder externo; ahora utiliza la fotografía local `img/luis-ovalle.jpg`.
