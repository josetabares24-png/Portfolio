# Portafolio de diseño web — nombre provisional

Este repositorio ya existía como un portafolio de edición de vídeo. La rama `preview/web-portfolio-servicios-2026-11-03` plantea una **nueva web comercial** para captar clientes de diseño web sin afectar la rama `main`.

## Qué contiene
- Landing React 19 + Vite: portada, casos reales, servicios, proceso, tarifas orientativas, presentación y contacto.
- Selector ES / PT-PT (parámetro opcional `?lang=pt`).
- Dos enlaces a proyectos reales: Estaba en Lisboa y Mil Sabores.
- CTA por `mailto:` a `josetabares24@gmail.com`. No hay un formulario ni un envío simulado.
- Diseño adaptable a móvil, sin fotografías de stock ni testimonios ficticios.
- El nombre, dominio y logotipo definitivos siguen pendientes.

## Desarrollo

```bash
npm ci
npm run lint
npm run build
npm run dev
```

## Decisiones / Human Web

Fuente de consulta: [Human Webs Mega](https://github.com/josetabares24-png/human-webs-mega), en particular `AGENTS.md`, `memory/INDEX.md`, `memory/DECISIONS.md`, `memory/ART-DIRECTION.md`, `memory/SECTORS/servicios/PLAYBOOK.md`, `memory/TYPOGRAPHY-CTA-MOTION.md`, `memory/VOICE-AND-COPY.md` y `memory/QUALITY-GATES.md`.

Tres caminos considerados para un portafolio comercial (no equivalentes estéticos):
1. **Editorial de alto contraste (seleccionado):** mucho espacio, tipografía sans de gran escala, navegación compacta, fichas de proyectos en filas, ilustraciones tipográficas originales, negro/blanco roto neutro/lima puntual, consulta directa por email. Evita fotos inventadas y deja el trabajo real en primer plano.
2. **Archivo digital:** fondo oscuro, índice lateral navegable, miniaturas de pantalla a ancho completo, detalle técnico por proyecto. Más adecuado cuando existan al menos cinco casos completos y capturas propias reales.
3. **Estudio fotográfico:** fondo claro, portada basada en retratos/fotos de trabajo originales, historias largas de clientes y contacto editorial. Se descarta por falta de activos originales aprobados.

Referencias examinadas el 03-11-2026:
- Kott Studio — https://kott.studio/: estructura con selección de proyectos y una oferta comprensible. No se copiaron textos ni CSS. Inspección textual, no medición visual.
- Koto / Made by ON — https://madebyon.com/case-studies/koto-studio/: lectura de portafolio como herramienta comercial. No se copiaron elementos.
- Fixando — https://www.fixando.pt/como-funciona: claridad del recorrido de solicitud de presupuesto; no replicamos su marketplace ni su embudo.

### Limitaciones antes de producción
- Estas tarjetas muestran **composiciones tipográficas**, no capturas reales de las webs enlazadas.
- El precio `desde 150 €` es una tarifa inicial orientativa, no una oferta cerrada con hosting o mantenimiento.
- El email debe verificarse como buzón de recepción antes de usar la página en campañas.
- El selector de idioma es de experiencia de usuario; si se quiere posicionar PT/ES por separado, crear rutas indexables y etiquetas hreflang en otra fase.
- Se requiere QA visual a 390 y 1280 px, prueba de enlaces y `npm run build` en ambiente de ejecución antes de publicar.
- No hay dominio definitivo, canonical ni herramienta de analítica configurada.
- No publicar `main` hasta revisión y aprobación explícita.

## Checklist de publicación
- [ ] Confirmar nombre y correo público.
- [ ] Abrir y revisar preview en móvil y escritorio.
- [ ] Verificar SEO, contrastes, teclado, enlaces, email.
- [ ] Aprobar precios y alcance comercial.
- [ ] Asignar dominio y publicar mediante PR aprobado.
