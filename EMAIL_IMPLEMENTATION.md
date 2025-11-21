# 📧 Sistema de Emails - Transportes Maheja

## ✅ Implementación Completada

Se ha configurado EmailJS para enviar todos los correos de los formularios de **Cotización** y **Contacto** a:

📬 **Destinatarios:**
- gabriela.geronimo@transportesmaheja.com
- facturacionmaheja@gmail.com

---

## 📋 Archivos Modificados

### 1. **Instalación de dependencias**
- ✅ Instalado `@emailjs/browser`

### 2. **Archivos creados**
- ✅ `src/config/emailConfig.js` - Configuración centralizada de EmailJS
- ✅ `EMAILJS_SETUP.md` - Guía completa de configuración

### 3. **Archivos modificados**
- ✅ `src/pages/cotizar.jsx` - Formulario de cotización con EmailJS
- ✅ `src/pages/Contacto.jsx` - Formulario de contacto con EmailJS

---

## 🚀 Próximos Pasos

### 1. Configurar EmailJS (REQUERIDO)

Sigue las instrucciones detalladas en el archivo `EMAILJS_SETUP.md`:

1. **Crear cuenta en EmailJS**: https://www.emailjs.com/
2. **Configurar servicio de email** (Gmail, Outlook, etc.)
3. **Crear 2 plantillas**:
   - Plantilla para cotizaciones
   - Plantilla para contacto
4. **Obtener credenciales**:
   - Service ID
   - Template ID (Cotización)
   - Template ID (Contacto)
   - Public Key

### 2. Actualizar credenciales

**Opción A: Editar directamente el archivo de configuración**

Abre `src/config/emailConfig.js` y reemplaza:
```javascript
export const EMAILJS_CONFIG = {
    SERVICE_ID: 'tu_service_id_real',
    TEMPLATE_ID_COTIZACION: 'tu_template_cotizacion_real',
    TEMPLATE_ID_CONTACTO: 'tu_template_contacto_real',
    PUBLIC_KEY: 'tu_public_key_real'
};
```

**Opción B: Usar variables de entorno (Recomendado para producción)**

Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_EMAILJS_SERVICE_ID=tu_service_id_real
VITE_EMAILJS_TEMPLATE_ID_COTIZACION=tu_template_cotizacion_real
VITE_EMAILJS_TEMPLATE_ID_CONTACTO=tu_template_contacto_real
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_real
```

### 3. Configurar destinatarios en EmailJS

En cada plantilla de EmailJS, configura los destinatarios:

**Método 1: Campo "To Email"**
```
gabriela.geronimo@transportesmaheja.com, facturacionmaheja@gmail.com
```

**Método 2: Campo "BCC" (Recomendado)**
```
gabriela.geronimo@transportesmaheja.com, facturacionmaheja@gmail.com
```

### 4. Probar los formularios

```bash
npm run dev
```

Luego:
1. Ve a http://localhost:5173/cotizar
2. Completa el formulario de cotización
3. Ve a http://localhost:5173/contacto
4. Completa el formulario de contacto
5. Verifica que los emails lleguen a ambas direcciones

---

## 📊 Características Implementadas

### Formulario de Cotización
- ✅ Envía todos los detalles del servicio
- ✅ Incluye información de carga (tipo, peso, dimensiones)
- ✅ Incluye ruta (origen, destino, fechas)
- ✅ Incluye datos de contacto
- ✅ Calcula y muestra cotización estimada
- ✅ Manejo de errores con mensajes al usuario

### Formulario de Contacto
- ✅ Envía información de contacto completa
- ✅ Incluye servicio de interés
- ✅ Incluye mensaje del cliente
- ✅ Manejo de errores con mensajes al usuario

---

## 🔒 Seguridad y Límites

### Plan Gratuito de EmailJS
- **200 emails/mes** incluidos
- Protección automática contra spam
- Rate limiting integrado

### Consideraciones de Seguridad
- Las credenciales están en el frontend (normal para EmailJS)
- EmailJS tiene protección contra abuso
- Para mayor seguridad en producción, considera implementar un backend

---

## 🐛 Solución de Problemas

### Los emails no se envían
1. Verifica que las credenciales en `emailConfig.js` sean correctas
2. Revisa la consola del navegador (F12) para ver errores
3. Verifica en el dashboard de EmailJS si los emails aparecen como enviados

### Los emails no llegan
1. Revisa la carpeta de spam
2. Verifica que los destinatarios estén configurados correctamente en las plantillas
3. Verifica que el servicio de email esté activo en EmailJS

### Error 403 o 401
- Verifica que tu Public Key sea correcta
- Asegúrate de que el servicio esté activo

---

## 📞 Soporte

- **Documentación EmailJS**: https://www.emailjs.com/docs/
- **Dashboard EmailJS**: https://dashboard.emailjs.com/

---

## ✨ Resumen

El sistema está listo para funcionar. Solo necesitas:
1. Crear cuenta en EmailJS
2. Configurar las plantillas
3. Actualizar las credenciales en `src/config/emailConfig.js`
4. ¡Probar!

Todos los correos de cotización y contacto se enviarán automáticamente a:
- gabriela.geronimo@transportesmaheja.com
- facturacionmaheja@gmail.com
