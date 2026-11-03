# Portafolio comercial — rediseño editorial v3

Esta rama crea una web independiente de diseño y desarrollo web, con una estética propia y foco en captar solicitudes de presupuestos. No se ha seleccionado nombre comercial definitivo; José Tabares aparece como identificador personal provisional.

## Arquitectura
- Dos páginas HTML reales: `/` (español) y `/pt/` (portugués de Portugal), compiladas como multipágina por Vite.
- Estilos compartidos en `src/site.css`; `src/site.js` solo se usa para menú móvil y copiar el correo.
- Enlaces a proyectos reales y verificables: estabaenlisboa.com y www.milsaboresbrunch.com.
- Contacto `mailto:` con asunto y datos del proyecto a `josetabares24@gmail.com`. No existe un formulario con envío simulado.
- Sin fotografías decorativas, falsos testimonios, logotipos de agencia ficticios ni flechas decorativas.
- Las portadas tipográficas de proyectos no representan capturas de pantalla. Para futuras capturas se requiere obtener las reales con permiso.

## Desarrollo y pruebas
```sh
npm ci
npm run build
npm run lint
npm run dev
```
Verificar ambas páginas a 390px y 1280/1440px; enlaces externos, enfoque de teclado, menú, contacto, tipografía y lectura.

## Human Web
Consultada la documentación de dirección artística, decisiones, errores, copy, QA, servicios y expedientes de rediseños rechazados en [Human Webs Mega](https://github.com/josetabares24-png/human-webs-mega). El objetivo comercial y la lectura móvil priman sobre los adornos.

## Antes de pasar a producción
- Confirmar el nombre, correo público y presupuesto orientativo con el propietario.
- Revisar el despliegue real con fuentes y assets cargados.
- Eliminar `noindex,nofollow` **solo cuando se apruebe publicar**, y añadir canonicals y hreflang absolutos para el dominio definitivo.
- Si se quiere un formulario, integrar un backend probado con antispam y privacidad.
- No fusionar sin aprobación de diseño ni QA.
