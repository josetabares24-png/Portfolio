# Portfolio V6 — José Tabares

Nueva versión **solo para revisión**, inspirada en los principios de diseño y movimiento del portafolio de Eliot Besson, con identidad original y sin copiar sus assets.

Incluye una home, dos casos reales, galería visual, índice interactivo, proceso, presentación personal, contacto directo y adaptación móvil. `index.html` + `src/showcase.css` + `src/showcase.js` + casos HTML; Vite multipágina.

La dirección artística, el contrato de continuidad, las tres opciones estudiadas y los límites de pruebas están documentados en [`docs/DIRECCION-V6.md`](docs/DIRECCION-V6.md).

**Importante:** las cubiertas de proyectos son composiciones gráficas originales, **no capturas de sus webs**. No se pudieron capturar los sitios externos en el entorno de revisión. Los enlaces llevan directamente a los sitios publicados. Esta fase no incluye vídeos auténticos de los proyectos. El email `josetabares24@gmail.com` debe confirmarse como buzón comercial antes de producción.

El sitio usa Google Fonts Barlow Condensed y DM Sans, con fuentes de sistema de respaldo. En revisión usa `noindex,nofollow`; solo retirar tras autorizar publicar y fijar un dominio. No fusionar sin aprobar.

## Pruebas

Test local mediante Chromium renderizando fuente HTML/CSS/JS (network bloqueada en el entorno). Pantallas 390/768/1280/1440 sin overflow ni errores JS; menú móvil, Escape, hover del índice y reduced motion comprobados. Esta prueba **no certifica** un recorrido real de URL en Vercel ni descarga de Google Fonts. Verificar build y endpoints tras el deploy.

Comandos de desarrollo en entorno con red/dependencias disponibles: `npm ci`, `npm run build`, `npm run lint`, `npm run dev`.