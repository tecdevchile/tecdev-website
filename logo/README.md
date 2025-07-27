# Logo Tecdev SpA - Guía de Uso

## 🎨 Descripción del Logo

El logo de Tecdev SpA combina elementos modernos y tecnológicos que representan la identidad de la empresa:

- **Símbolo "T" estilizado**: Representa la inicial de Tecdev
- **Elementos de código**: Simbolizan el desarrollo de software
- **Gradiente corporativo**: Usa la paleta de colores oficial
- **Diseño limpio y profesional**: Refleja la seriedad y confiabilidad

## 📁 Archivos del Logo

### Versiones Principales

1. **`logo.svg`** - Logo completo con texto (200x60px)
   - Versión principal para uso general
   - Incluye "Tecdev" completo
   - Gradiente corporativo

2. **`logo-symbol.svg`** - Solo el símbolo (50x50px)
   - Para espacios pequeños
   - Ideal para favicons y aplicaciones
   - Versión simplificada

3. **`logo-white.svg`** - Versión en blanco (200x60px)
   - Para fondos oscuros (como el header azul)
   - Texto completo en blanco para máxima legibilidad
   - Símbolo en fondo blanco

4. **`favicon.svg`** - Favicon del sitio (32x32px)
   - Optimizado para navegadores modernos
   - Versión simplificada del símbolo
   - Formato vectorial escalable

5. **`favicon.png`** - Favicon PNG (32x32px)
   - Compatibilidad con navegadores antiguos
   - Exportado desde favicon.svg

6. **`favicon-16x16.png`** - Favicon pequeño (16x16px)
   - Para pestañas de navegador
   - Exportado desde favicon.svg

7. **`apple-touch-icon.png`** - Icono Apple (180x180px)
   - Para dispositivos iOS
   - Exportado desde favicon.svg

## 🎯 Especificaciones Técnicas

### Colores Corporativos
- **Azul Oscuro**: `#1F2A44`
- **Azul Acento**: `#1D72B8`
- **Blanco**: `#FFFFFF`
- **Gris Claro**: `#E1E1E1`

### Tipografías
- **Principal**: Arial (fallback a sans-serif)
- **Peso**: Bold para el texto principal
- **Tamaños**: Escalables según el contexto

### Formatos
- **SVG**: Vectorial, escalable sin pérdida de calidad
- **Optimizado**: Archivos ligeros para web
- **Responsive**: Se adapta a cualquier tamaño

## 📐 Zona de Protección

Para mantener la legibilidad del logo:

- **Mínimo**: 32px de altura
- **Recomendado**: 60px de altura
- **Espacio libre**: 1/4 del ancho del logo alrededor

## 🔄 Uso en Diferentes Contextos

### Header del Sitio Web
```html
<img src="images/logo/logo-white.svg" alt="Tecdev SpA" class="logo-img">
```

**Nota**: El logo en blanco (`logo-white.svg`) está optimizado para fondos oscuros como el header azul del sitio. Todo el texto está en color blanco para garantizar máxima legibilidad.

### Favicon
```html
<link rel="icon" type="image/svg+xml" href="images/logo/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="images/logo/favicon.png">
<link rel="icon" type="image/png" sizes="16x16" href="images/logo/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="images/logo/apple-touch-icon.png">
```

### Documentos
- **Fondos claros**: Usar `images/logo/logo.svg`
- **Fondos oscuros**: Usar `images/logo/logo-white.svg`
- **Espacios pequeños**: Usar `images/logo/logo-symbol.svg`

### Redes Sociales
- **Perfil**: `images/logo/logo-symbol.svg` (cuadrado)
- **Header**: `images/logo/logo.svg` (horizontal)
- **Posts**: Versión apropiada según el fondo

## 🚫 Uso Incorrecto

### NO hacer:
- ❌ Cambiar los colores del logo
- ❌ Estirar o deformar las proporciones
- ❌ Usar versiones de baja calidad
- ❌ Colocar sobre fondos que comprometan la legibilidad
- ❌ Usar tamaños muy pequeños (< 32px)

### SÍ hacer:
- ✅ Mantener las proporciones originales
- ✅ Usar la versión apropiada para cada contexto
- ✅ Asegurar suficiente contraste con el fondo
- ✅ Escalar desde archivos vectoriales
- ✅ Mantener la zona de protección

## 🎨 Personalización

### Cambiar Colores
Para modificar los colores del logo, edita los valores en los archivos SVG:

```svg
<!-- Azul acento -->
<stop offset="0%" style="stop-color:#1D72B8;stop-opacity:1" />

<!-- Azul oscuro -->
<stop offset="100%" style="stop-color:#1F2A44;stop-opacity:1" />
```

### Cambiar Texto
Para modificar el texto del logo:

```svg
<text x="55" y="25" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1F2A44">Tec</text>
<text x="55" y="40" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1D72B8">dev</text>
```

**Nota**: El logo actualmente muestra solo "Tecdev" sin "SpA" para un diseño más limpio y directo.

## 📱 Responsive Design

El logo se adapta automáticamente:

- **Desktop**: Logo completo con texto
- **Tablet**: Logo completo, tamaño reducido
- **Mobile**: Logo completo, tamaño mínimo

## 🔧 Implementación en el Sitio

### CSS para el Logo
```css
.logo-img {
    height: 50px;
    width: auto;
    transition: transform 0.3s ease;
}

.logo-img:hover {
    transform: scale(1.05);
}
```

### Responsive
```css
/* Pantallas grandes */
@media (min-width: 1200px) {
    .logo-img {
        height: 60px;
    }
}

/* Tablets y móviles */
@media (max-width: 768px) {
    .logo-img {
        height: 45px;
    }
}
```

## 📄 Exportación para Otros Formatos

Si necesitas el logo en otros formatos:

### Favicons PNG

Para crear los favicons PNG desde el archivo SVG:

1. **Abrir** `images/logo/favicon.svg` en un editor de imágenes (Inkscape, Adobe Illustrator, etc.)
2. **Exportar** como PNG en los siguientes tamaños:
   - `favicon.png`: 32x32px
   - `favicon-16x16.png`: 16x16px
   - `apple-touch-icon.png`: 180x180px
3. **Reemplazar** los archivos placeholder con las imágenes reales

### Herramientas Online

También puedes usar herramientas online para convertir SVG a PNG:
- **Convertio**: https://convertio.co/svg-png/
- **CloudConvert**: https://cloudconvert.com/svg-to-png
- **Favicon Generator**: https://realfavicongenerator.net/

Si necesitas el logo en otros formatos:

### PNG (para impresión)
- Resolución: 300 DPI
- Tamaños: 200x60px, 400x120px, 800x240px

### JPG (para web)
- Calidad: 90%
- Optimización: Para web

### PDF (para documentos)
- Vectorial: Mantiene calidad en cualquier tamaño
- Ideal: Para impresión profesional

---

**Nota**: Todos los archivos SVG están optimizados para web y listos para usar. El logo mantiene la identidad visual de Tecdev SpA y es consistente con la paleta de colores corporativa. 