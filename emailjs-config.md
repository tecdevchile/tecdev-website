# Configuración de EmailJS para Formulario de Contacto

## 🚀 Pasos para Configurar EmailJS

### 1. Crear cuenta en EmailJS
1. Ve a [emailjs.com](https://www.emailjs.com/)
2. Regístrate con tu email
3. Confirma tu cuenta

### 2. Configurar Email Service
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. **Guarda el Service ID** (ej: `service_abc123`)

### 3. Crear Email Template
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa este template como base:

```html
Nuevo mensaje de contacto desde Tecdev SpA

Nombre: {{from_name}}
Email: {{from_email}}
Empresa: {{company}}
Mensaje: {{message}}

---
Enviado desde el formulario de contacto de Tecdev SpA
```

4. **Guarda el Template ID** (ej: `template_xyz789`)

### 4. Obtener Public Key
1. Ve a "Account" → "API Keys"
2. **Copia tu Public Key** (ej: `user_def456`)

### 5. Actualizar el Código
Reemplaza en `index.html`:
```javascript
emailjs.init("5RUX7W1PbM3VMhgcx"); // Tu Public Key
```

Reemplaza en `script.js`:
```javascript
await emailjs.send(
    'service_5vr1erj',    // Tu Service ID
    'template_kuf3e0s',   // Tu Template ID
    templateParams
);
```

## 📧 Ejemplo de Configuración Completa

### En index.html:
```javascript
emailjs.init("user_abc123def456");
```

### En script.js:
```javascript
await emailjs.send(
    'service_tecdev_contact',
    'template_contact_form',
    templateParams
);
```

## 🔧 Personalización del Template

### Variables disponibles:
- `{{from_name}}` - Nombre del remitente
- `{{from_email}}` - Email del remitente
- `{{company}}` - Empresa (opcional)
- `{{message}}` - Mensaje
- `{{to_name}}` - Nombre del destinatario

### Template HTML personalizado:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Nuevo Contacto - Tecdev SpA</title>
</head>
<body>
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Empresa:</strong> {{company}}</p>
    <p><strong>Mensaje:</strong></p>
    <p>{{message}}</p>
    <hr>
    <p><em>Enviado desde el formulario de contacto de Tecdev SpA</em></p>
</body>
</html>
```

## 🛡️ Seguridad

- **Public Key**: Es segura de mostrar en el frontend
- **Service ID**: Es segura de mostrar en el frontend
- **Template ID**: Es segura de mostrar en el frontend
- **Private Key**: NUNCA la uses en el frontend

## 📊 Límites Gratuitos

- **200 emails por mes** en el plan gratuito
- **2 servicios de email** conectados
- **5 templates** de email

## 🔍 Troubleshooting

### Error: "EmailJS is not defined"
- Verifica que el SDK esté cargado correctamente
- Asegúrate de que el script esté antes de tu código

### Error: "Service not found"
- Verifica que el Service ID sea correcto
- Asegúrate de que el servicio esté activo

### Error: "Template not found"
- Verifica que el Template ID sea correcto
- Asegúrate de que el template esté publicado

### Emails no llegan
- Verifica la carpeta de spam
- Revisa la configuración del servicio de email
- Verifica los logs en el dashboard de EmailJS 