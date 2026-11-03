# Portafolio — propuesta de estudio independiente V4

**Estado: VISTA PREVIA; pendiente de aprobación estética y de publicación.**

La propuesta se implementó como web navegable real, no como un PNG generado. Se conserva `main` sin cambios. La dirección visual es una interpretación nueva: tipografía protagonista, oscuro sobrio al inicio, trabajo existente primero, servicios concretos y contacto útil.

## URLs de la rama preview
- ES: `/` o `/propuesta.html`
- PT: `/pt/` o `/?lang=pt`

El nombre público del negocio no está decidido; José Tabares es un identificador provisional.

## Alcance
- Portafolio compacto sin fotografías decorativas ni mockups de clientes inventados.
- Trabajos reales: `https://estabaenlisboa.com/` y `https://www.milsaboresbrunch.com/`.
- CTA de consulta que permite elegir entre nueva web, rediseño y orientación. El enlace crea un borrador en la aplicación de correo a `josetabares24@gmail.com`; **no envía por sí solo**.
- Cambiador ES/PT, menú móvil accesible, HTML semántico, estilos y funciones autocontenidas (prototipo; antes de producción conviene separar estilos y plantillas).
- Metadatos de robots `noindex,nofollow` mientras esté en revisión. No usar en producción antes de definir dominio, canonical e indexación.
- Precio orientativo de web básica desde 150 € (sujeto a alcance), sin afirmar resultados garantizados de SEO.

## Método / Human Web
Documentación consultada: `AGENTS.md`, `memory/INDEX.md`, `memory/DECISIONS.md`, `memory/ART-DIRECTION.md`, `memory/VOICE-AND-COPY.md`, `memory/ERRORS.md` y `memory/QUALITY-GATES.md` en `josetabares24-png/human-webs-mega`.

Se descartó reutilizar la dirección visual V3 (hero claro, sección oscura intermedia y dos cubiertas pseudo-visuales de proyectos). Se optó por una estructura con trabajo listado como evidencia enlazada y un bloque de contacto realmente accionable. La estética aún requiere evaluación del propietario.

## Pruebas verificadas localmente
Fuente local: `portfolio_v4/propuesta.html`; fuente de GitHub transferida desde ese mismo archivo para `index.html`, `pt/index.html` y `public/propuesta.html`.

Playwright + Chromium:
- Anchos 1440 y 390 px, sin scroll horizontal.
- Sin errores JavaScript de página observados.
- Selector de tipo de proyecto actualiza el enlace `mailto:`.
- Cambio ES/PT modifica la interfaz y la etiqueta de idioma.
- Menú móvil abre y cierra al navegar.
- Enlaces a proyectos apuntan a los destinos previstos.

Vercel informa compilación correcta del commit de la rama, pero la inspección visual **de la URL remota** permanece pendiente porque el navegador utilizado localmente no tuvo acceso externo a esa preview. No confundir compilación con aprobación.

## Para pasar a producción
- Confirmar diseño con el propietario.
- Confirmar correo de recepción y alcance/precios comerciales.
- Revisar la vista previa remota en móvil y escritorio.
- Refactorizar HTML repetido a componentes/datos compartidos.
- Crear rutas/SEO final, canonical/hreflang, accesibilidad y pruebas automatizadas estables.
- Publicar únicamente con aprobación explícita.
