# Configuración de EmailJS para Transportes Maheja

Este documento explica cómo configurar EmailJS para que los formularios de **Cotización** y **Contacto** envíen correos a:
- gabriela.geronimo@transportesmaheja.com
- facturacionmaheja@gmail.com

## Paso 1: Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Verifica tu email

## Paso 2: Configurar un servicio de email

1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. Copia el **Service ID** que se genera

## Paso 3: Crear plantillas de email

### Plantilla para Cotizaciones

1. Ve a **Email Templates** en el dashboard
2. Haz clic en **Create New Template**
3. Nombra la plantilla: "Cotización - Transportes Maheja"
4. Configura el template con el siguiente contenido:

**Subject:**
```
Nueva Cotización - {{tipo_servicio}} - {{nombre_contacto}}
```

**Content:**
```
Nueva solicitud de cotización recibida:

═══════════════════════════════════════
INFORMACIÓN DEL SERVICIO
═══════════════════════════════════════
Tipo de Servicio: {{tipo_servicio}}
Tipo de Carga: {{tipo_carga}}
Peso: {{peso}} kg
Dimensiones: {{dimensiones}}
Valor de Mercancía: {{valor_mercancia}}
Requiere Seguro: {{requiere_seguro}}

═══════════════════════════════════════
RUTA Y FECHAS
═══════════════════════════════════════
Origen: {{origen}}
Destino: {{destino}}
Fecha de Recogida: {{fecha_recogida}}
Fecha de Entrega: {{fecha_entrega}}
Tipo de Entrega: {{tipo_entrega}}

═══════════════════════════════════════
INFORMACIÓN DE CONTACTO
═══════════════════════════════════════
Empresa: {{nombre_empresa}}
Contacto: {{nombre_contacto}}
Email: {{email}}
Teléfono: {{telefono}}

═══════════════════════════════════════
COMENTARIOS
═══════════════════════════════════════
{{comentarios}}

═══════════════════════════════════════
COTIZACIÓN ESTIMADA
═══════════════════════════════════════
{{cotizacion_estimada}}

---
Este correo fue enviado automáticamente desde el formulario de cotización de Transportes Maheja.
```

5. En **Settings** de la plantilla:
   - **To Email:** Deja el campo vacío o usa `{{to_emails}}`
   - **From Name:** Transportes Maheja - Sistema de Cotizaciones
   - **Reply To:** `{{email}}` (para responder directamente al cliente)

6. Copia el **Template ID**

### Plantilla para Contacto

1. Crea otra plantilla nueva
2. Nombra la plantilla: "Contacto - Transportes Maheja"
3. Configura el template con el siguiente contenido:

**Subject:**
```
Nuevo Mensaje de Contacto - {{nombre}}
```

**Content:**
```
Nuevo mensaje recibido desde el formulario de contacto:

═══════════════════════════════════════
INFORMACIÓN DE CONTACTO
═══════════════════════════════════════
Nombre: {{nombre}}
Email: {{email}}
Teléfono: {{telefono}}
Empresa: {{empresa}}
Servicio de Interés: {{servicio}}

═══════════════════════════════════════
MENSAJE
═══════════════════════════════════════
{{mensaje}}

---
Este correo fue enviado automáticamente desde el formulario de contacto de Transportes Maheja.
```

4. En **Settings** de la plantilla:
   - **To Email:** Deja el campo vacío o usa `{{to_emails}}`
   - **From Name:** Transportes Maheja - Contacto
   - **Reply To:** `{{email}}` (para responder directamente al cliente)

5. Copia el **Template ID**

## Paso 4: Obtener tu Public Key

1. Ve a **Account** > **General**
2. Busca la sección **API Keys**
3. Copia tu **Public Key**

## Paso 5: Configurar múltiples destinatarios

Para enviar a ambos correos (gabriela.geronimo@transportesmaheja.com y facturacionmaheja@gmail.com):

**Opción 1: En la plantilla de EmailJS**
1. En cada plantilla, ve a **Settings**
2. En el campo **To Email**, ingresa:
   ```
   gabriela.geronimo@transportesmaheja.com, facturacionmaheja@gmail.com
   ```

**Opción 2: Usar BCC (Recomendado)**
1. En cada plantilla, ve a **Settings**
2. Habilita **BCC** y agrega:
   ```
   gabriela.geronimo@transportesmaheja.com, facturacionmaheja@gmail.com
   ```

## Paso 6: Actualizar el archivo de configuración

Abre el archivo `src/config/emailConfig.js` y reemplaza los valores:

```javascript
export const EMAILJS_CONFIG = {
    SERVICE_ID: 'TU_SERVICE_ID_AQUI',
    TEMPLATE_ID_COTIZACION: 'TU_TEMPLATE_ID_COTIZACION_AQUI',
    TEMPLATE_ID_CONTACTO: 'TU_TEMPLATE_ID_CONTACTO_AQUI',
    PUBLIC_KEY: 'TU_PUBLIC_KEY_AQUI'
};
```

## Paso 7: Probar los formularios

1. Ejecuta el proyecto: `npm run dev`
2. Ve a la página de **Cotizar** y completa el formulario
3. Ve a la página de **Contacto** y completa el formulario
4. Verifica que los correos lleguen a ambas direcciones

## Notas importantes

- **Plan gratuito de EmailJS:** Permite hasta 200 emails por mes
- **Seguridad:** Las credenciales están en el frontend, pero EmailJS tiene protección contra spam
- **Límite de rate:** EmailJS tiene protección contra abuso automático
- Si necesitas más emails o mejor seguridad, considera implementar un backend

## Solución de problemas

### Los emails no llegan
1. Verifica que las credenciales en `emailConfig.js` sean correctas
2. Revisa la consola del navegador para ver errores
3. Verifica en el dashboard de EmailJS si los emails se enviaron
4. Revisa la carpeta de spam

### Error de CORS
- EmailJS maneja CORS automáticamente, no deberías tener problemas

### Error 403
- Verifica que tu Public Key sea correcta
- Asegúrate de que el servicio esté activo en EmailJS

## Contacto de soporte

Si tienes problemas, contacta a:
- Soporte EmailJS: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
