# Portfolio V6 — José Tabares

Nueva versión **solo para revisión**, inspirada en los principios de diseño y movimiento del portafolio de Eliot Besson, con identidad original y sin copiar sus assets.

Incluye una home, dos casos reales, galería visual, índice interactivo, proceso, presentación personal, contacto directo y adaptación móvil. `index.html` + `src/showcase.css` + `src/showcase.js` + casos HTML; Vite multipágina.

La dirección artística, el contrato de continuidad, las tres opciones estudiadas y los límites de pruebas están documentados en [`docs/DIRECCION-V6.md`](docs/DIRECCION-V6.md).

**Actualización 3 noviembre 2026:** la galería y los casos ahora incorporan imágenes reales, con procedencia en [`docs/FUENTES-IMAGENES-V6.md`](docs/FUENTES-IMAGENES-V6.md). Estaba en Lisboa utiliza capturas auténticas de QA fechadas el 2 de noviembre; Mil Sabores utiliza fotografías de su propio repositorio. No hay capturas actuales de su interfaz ni vídeos grabados. Los recursos se cargan temporalmente desde GitHub Raw mientras no exista un proceso fiable de copia de imágenes binarias. La carga remota de imágenes todavía requiere QA visual. El email `josetabares24@gmail.com` debe confirmarse como buzón comercial antes de producción.

El sitio usa Google Fonts Barlow Condensed y DM Sans, con fuentes de sistema de respaldo. En revisión usa `noindex,nofollow`; solo retirar tras autorizar publicar y fijar un dominio. No fusionar sin aprobar.

## Pruebas

Test local mediante Chromium renderizando fuente HTML/CSS/JS (network bloqueada en el entorno). Pantallas 390/768/1280/1440 sin overflow ni errores JS; menú móvil, Escape, hover del índice y reduced motion comprobados. Esta prueba **no certifica** un recorrido real de URL en Vercel ni descarga de Google Fonts. Verificar build y endpoints tras el deploy.

Comandos de desarrollo en entorno con red/dependencias disponibles: `npm ci`, `npm run build`, `npm run lint`, `npm run dev`.