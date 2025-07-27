# Tecdev SpA - Sitio Web Corporativo

Sitio web oficial de Tecdev SpA, empresa de consultoría de software especializada en desarrollo a medida, integración de sistemas y modernización tecnológica.

## 🚀 Características

- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Carrusel Hero**: Imágenes de fondo con transiciones suaves
- **Formulario de Contacto**: Integrado con EmailJS
- **Banner de Cookies**: Cumple con GDPR y leyes chilenas
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías

- HTML5
- CSS3 (Flexbox, Grid, Variables)
- JavaScript (Vanilla JS)
- EmailJS para formularios
- Font Awesome para iconos

## 📁 Estructura del Proyecto

```
tecdev-website/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # JavaScript
├── images/                 # Imágenes del sitio
│   ├── logo/              # Logos corporativos
│   └── hero/              # Imágenes del carrusel
├── staticwebapp.config.json # Configuración Azure
└── README.md              # Este archivo
```

## 🚀 Despliegue en Azure Static Web Apps

Este sitio está configurado para desplegarse automáticamente en Azure Static Web Apps.

### Configuración Automática

1. **Conectar repositorio** a Azure Static Web Apps
2. **Configurar build** (no necesario para sitios estáticos)
3. **Despliegue automático** en cada push a main

### Configuración Manual

Si necesitas configurar manualmente:

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/tecdev-website.git

# Instalar Azure CLI
npm install -g @azure/static-web-apps-cli

# Desplegar
swa deploy
```

## 🔧 Configuración Local

1. **Clonar repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tecdev-website.git
   cd tecdev-website
   ```

2. **Servir localmente**:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   
   # Con Live Server (VS Code)
   # Instalar extensión Live Server y click derecho en index.html
   ```

3. **Abrir navegador**: `http://localhost:8000`

## 📧 Configuración EmailJS

Para que el formulario de contacto funcione:

1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Configurar servicio de email
3. Actualizar las claves en `index.html` y `script.js`

## 🍪 Configuración de Cookies

El banner de cookies está configurado para:
- Mostrar automáticamente en la primera visita
- Guardar preferencias en localStorage
- Cumplir con GDPR y leyes chilenas

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔒 Seguridad

- HTTPS automático en Azure
- Headers de seguridad configurados
- Validación de formularios en cliente y servidor

## 📈 SEO

- Meta tags optimizados
- Open Graph tags
- Twitter Cards
- Estructura semántica HTML5
- Sitemap automático (Azure)

## 🤝 Contribuir

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto es propiedad de Tecdev SpA. Todos los derechos reservados.

## 📞 Contacto

- **Email**: contacto@tecdev.cl
- **Teléfono**: +56 9 4558 2230
- **Sitio Web**: [tecdev.cl](https://tecdev.cl)

---

Desarrollado con ❤️ por Tecdev SpA 