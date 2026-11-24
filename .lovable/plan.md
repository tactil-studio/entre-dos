# Sala Privada (planta baja) — nueva página

## Qué se construye
- Nueva página **/sala-privada** (también en inglés), con título y descripción propios para que Google la encuentre ("Sala privada para grupos en Barcelona – Entre Dos").
- Enlace "Sala privada" en el menú (escritorio y móvil) y en el footer; el banner en movimiento "private room downstairs" también lleva a esta página.

## Efecto "bajar las escaleras"
Mientras llega el vídeo real:
- Al pulsar "Sala privada", la pantalla se desliza hacia arriba y se oscurece, con franjas tipo "escalones" pasando, como si la cámara bajara.
- Llegamos a la sala: la primera foto entra con un zoom suave y una etiqueta "−1 · Planta baja".
- Al hacer scroll, las fotos tienen un ligero efecto de profundidad.
- Cuando tengáis el vídeo de las escaleras, lo ponemos como intro (hueco preparado).

## Contenido
1. Portada: foto de la sala + "Abajo, solo para vosotros." + botón de contacto.
2. Info: para qué (cumpleaños, cenas de empresa, eventos), capacidad — lo que no sé lo dejo como texto provisional.
3. Galería con las 5 fotos enviadas (+ espacio para vídeos).
4. **Menú de grupo 35€/persona**: Para empezar (Canelones de setas con salsa de foie, Ensalada de queso de cabra con granada y frutos secos, Tataki de atún con wasabi), Principal (Solomillo con salsa de champiñones, Bacalao con salsa de naranja, Risotto de setas), Postre a elegir (Brownie, Tarta de queso, Helados). Con descarga del PDF.
5. Cierre con contacto (WhatsApp/teléfono/email actuales).

Todo en español e inglés y adaptado a día/noche.

## Detalles técnicos
- Fotos y PDF como assets CDN; nueva ruta en App.tsx; title/meta description propios por página.
- Transición con overlay animado disparado desde los enlaces antes de navegar.
