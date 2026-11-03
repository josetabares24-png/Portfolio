# Imágenes reales incorporadas en Portfolio V6

Fecha: 2026-11-03. Estado: rama de vista previa, no producción.

Las imágenes se obtienen de las rutas originales de **los repositorios de los propios proyectos**. No hay fotografías ni capturas sintéticas.

## Estaba en Lisboa — capturas auténticas de una versión documentada
- Escritorio: https://github.com/josetabares24-png/portugal-autentico-v2/blob/main/docs/qa/grok-2026-11-02/home-full-final-1440.jpg
- Móvil: https://github.com/josetabares24-png/portugal-autentico-v2/blob/main/docs/qa/grok-2026-11-02/home-full-final-390.jpg
- Procedencia: documentación de QA del proyecto fechada **2 noviembre 2026**. Son capturas verdaderas de esa versión del trabajo, pero **no prueban el estado visual en vivo de hoy**.

## Mil Sabores — fotografías reales incluidas en su web
- Brunch americano: https://github.com/josetabares24-png/milsabores/blob/main/public/images/Mil%20Sabores/Brunch%20Americano.webp
- Interior: https://github.com/josetabares24-png/milsabores/blob/main/public/images/Mil%20Sabores/IMG_3818.webp
- Procedencia: archivos `public/images/Mil Sabores/` del repositorio real. Ver implementación del uso en `src/components/Hero.tsx` y `src/components/About.tsx`.
- **No llamarlas capturas de pantalla**. Se necesitan capturas actuales de escritorio/móvil de milsaboresbrunch.com cuando un navegador con acceso de red esté disponible.

## Uso dentro del portafolio
- La galería de inicio contiene capturas de Lisboa y fotografía de Mil Sabores en lugar de ilustraciones CSS.
- Los casos incluyen vista principal y secundaria móvil/fotográfica.
- El índice de proyectos presenta una imagen real bajo hover en escritorio y miniaturas visibles en móvil.
- Las imágenes usan URLs públicas `raw.githubusercontent.com`, alt específicos, carga diferida cuando corresponde y tamaño responsivo. Se debe comprobar remotamente la carga real; este entorno local carece de DNS externo.

## Riesgos antes de producción
- Dependencia de archivos externos alojados en GitHub Raw (pueden sufrir limitaciones de disponibilidad). Lo ideal es copiar recursos **con su licencia confirmada** al directorio público del Portfolio y servirlos como assets propios; no se consiguió descargar archivos binarios con el conector en esta sesión.
- No hay evidencias de captura actual de Mil Sabores ni grabaciones auténticas de movimiento.
- La aprobación visual final y la verificación de fuentes e imágenes en Vercel siguen pendientes.
