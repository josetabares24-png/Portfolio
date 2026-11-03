# Portfolio V6 — decisión visual documentada

**Fecha:** 2026-11-03. **Estado:** propuesta implementada en rama de preview, todavía no aprobada. **Objeto:** portafolio personal global de creación web; proyectos de turismo/restauración son muestras de trabajo, no el posicionamiento del portafolio.

## Baseline V5 (observado en capturas locales anteriores)

- Home 1440: display blanco sobre negro, 2 cubiertas CSS, índice textual repetido, sobre mí y bloque coral de contacto.
- Home 390: mayor distancia vertical por tamaño del titular; ambas cubiertas CSS aparecen en móvil.
- Interior 390: mismo patrón editorial de portada/explicación para dos casos distintos.
- No hay capturas auténticas de las webs externas integradas en la V5; tampoco hay vídeos de sus interfaces.

## Sistemas considerados (no variantes de color)

| Dirección | Estructura y jerarquía | Proyectos | Interacción | Decisión |
|---|---|---|---|---|
| A. Portfolio de experimentos | Home casi de una sola pantalla, lienzo tipográfico con gestos y capas | Índice de experimentos de interacción con miniaturas al foco | Movimiento fuerte | Rechazada: el material disponible son webs terminadas, no una colección de experimentos |
| B. Archivo continuo tipo Gil Huybrecht | Entrar directamente en galería vertical con muy poco texto | Capturas a pantalla completa | Scroll y transición mínima | Pospuesta: no hay capturas auténticas descargables de webs externas en este entorno |
| C. Editorial interactivo propio (elegido) | Display de gran escala + primera invitación directa a los trabajos + galería de dos casos + índice exploratorio + proceso personal | Dos casos reales enlazados y art direction gráfica expresamente declarada | Hover contextual, movimiento reducido y navegación táctil | Elegida: evoluciona V5 con la referencia Eliot aprobada, sin copiar su identidad ni fingir assets |

## Contrato de continuidad

**Conservar:** identidad personal José Tabares, origen independiente, portafolio internacional, fondo oscuro/editorial, trabajo real verificable, dos rutas de casos, correo directo, separación de la marca Estaba en Lisboa, `noindex` en preview, producción sin cambiar.

**Puede cambiar:** tipografía y licencias, retícula, proporciones, interacción del cursor, jerarquía de secciones, gráficos para presentación, microanimaciones, copy provisional.

**Pendiente/LOCKED hasta confirmación:** nombre comercial definitivo, correo público, idiomas, fotografías autorizadas, materiales audiovisuales descargados, tarifas, producción e indexación.

## Cambios V6

1. Sistema tipográfico con Barlow Condensed y DM Sans (Google Fonts, con fallback), en vez de fuentes declaradas pero no cargadas.
2. Hero con jerarquía refinada y división tipográfica asimétrica, sin foto decorativa ni laptop.
3. Galería de trabajos y páginas interiores con identidad gráfica separada por caso y enlaces reales, con aviso de que las portadas NO son capturas.
4. Índice de casos activa movimiento solo al pasar el cursor; se cancela cuando deja de ser necesario. Móvil no depende de hover.
5. Sección de proceso menos genérica, contacto directo visible y menú móvil accesible.
6. Fuente de verdad del portafolio separada del sistema de turismo.

## Evidencia técnica local y límites

Se renderizó el HTML/CSS/JS **con contenido local inyectado en Chromium**, porque el entorno bloqueó navegación HTTP externa e incluso local. Se revisaron vistas de 390, 768, 1280 y 1440 px, sin desplazamiento horizontal o errores JS; menú móvil se abre/cierra, hover del índice activa la preview y reduced motion desactiva animaciones. Esta modalidad verifica estructura/estilos offline con fallback y ejecución JS, **no prueba fuentes descargadas, assets externos ni el despliegue remoto**. Se comprobará compilación mediante el estado del PR de Vercel; READY no certifica estética.

**Bloqueador visual no resuelto:** capturas y pequeños vídeos de los sitios públicos `estabaenlisboa.com` y `milsaboresbrunch.com` **no pudieron capturarse desde el navegador en este entorno**. No se han inventado. La V6 incorpora cubiertas gráficas propias y enlaces a las webs reales; no presentar esto como requisito final completado.

## QA final previo a publicar

- Confirmar capturas y grabaciones reales desde las dos webs; sustituir las portadas gráficas allí donde mejoren la demostración.
- Verificar fuente realmente descargada y sus licencias, y ajustar kerning en navegadores reales.
- Comprobar correo público y recepción, reorientación internacional e idioma inglés.
- Revisar contraste, foco, teclado, estado móvil, reduced motion y rendimiento remoto. Ejecutar `npm run build`, `npm run lint` en entorno con dependencias.
- Mantener PR como draft hasta aprobación explícita; solo después retirar `noindex`, añadir canonical/hreflang del dominio definitivo.