# Plantillas de EmailJS - Copiar y Pegar

## 📋 Plantilla 1: Cotización

### Configuración de la Plantilla

**Nombre de la plantilla:** `Cotización - Transportes Maheja`

**To Email:**
```
gabriela.geronimo@transportesmaheja.com, facturacionmaheja@gmail.com
```

**From Name:**
```
Transportes Maheja - Sistema de Cotizaciones
```

**Reply To:**
```
{{email}}
```

**Subject:**
```
Nueva Cotización - {{tipo_servicio}} - {{nombre_contacto}}
```

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .section {
            background: #f9fafb;
            padding: 20px;
            margin: 10px 0;
            border-left: 4px solid #dc2626;
        }
        .section-title {
            color: #dc2626;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
            text-transform: uppercase;
        }
        .info-row {
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        .label {
            font-weight: bold;
            color: #6b7280;
            display: inline-block;
            width: 180px;
        }
        .value {
            color: #111827;
        }
        .price-box {
            background: #dc2626;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 10px;
            margin: 20px 0;
        }
        .price {
            font-size: 32px;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #6b7280;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚛 Nueva Solicitud de Cotización</h1>
            <p>Transportes Maheja</p>
        </div>

        <div class="section">
            <div class="section-title">📦 Información del Servicio</div>
            <div class="info-row">
                <span class="label">Tipo de Servicio:</span>
                <span class="value">{{tipo_servicio}}</span>
            </div>
            <div class="info-row">
                <span class="label">Tipo de Carga:</span>
                <span class="value">{{tipo_carga}}</span>
            </div>
            <div class="info-row">
                <span class="label">Peso:</span>
                <span class="value">{{peso}} kg</span>
            </div>
            <div class="info-row">
                <span class="label">Dimensiones:</span>
                <span class="value">{{dimensiones}}</span>
            </div>
            <div class="info-row">
                <span class="label">Valor de Mercancía:</span>
                <span class="value">{{valor_mercancia}}</span>
            </div>
            <div class="info-row">
                <span class="label">Requiere Seguro:</span>
                <span class="value">{{requiere_seguro}}</span>
            </div>
        </div>

        <div class="section">
            <div class="section-title">🗺️ Ruta y Fechas</div>
            <div class="info-row">
                <span class="label">Origen:</span>
                <span class="value">{{origen}}</span>
            </div>
            <div class="info-row">
                <span class="label">Destino:</span>
                <span class="value">{{destino}}</span>
            </div>
            <div class="info-row">
                <span class="label">Fecha de Recogida:</span>
                <span class="value">{{fecha_recogida}}</span>
            </div>
            <div class="info-row">
                <span class="label">Fecha de Entrega:</span>
                <span class="value">{{fecha_entrega}}</span>
            </div>
            <div class="info-row">
                <span class="label">Tipo de Entrega:</span>
                <span class="value">{{tipo_entrega}}</span>
            </div>
        </div>

        <div class="section">
            <div class="section-title">👤 Información de Contacto</div>
            <div class="info-row">
                <span class="label">Empresa:</span>
                <span class="value">{{nombre_empresa}}</span>
            </div>
            <div class="info-row">
                <span class="label">Contacto:</span>
                <span class="value">{{nombre_contacto}}</span>
            </div>
            <div class="info-row">
                <span class="label">Email:</span>
                <span class="value">{{email}}</span>
            </div>
            <div class="info-row">
                <span class="label">Teléfono:</span>
                <span class="value">{{telefono}}</span>
            </div>
        </div>

        <div class="section">
            <div class="section-title">💬 Comentarios</div>
            <p>{{comentarios}}</p>
        </div>

        <div class="price-box">
            <div>Cotización Estimada</div>
            <div class="price">{{cotizacion_estimada}}</div>
            <div style="font-size: 14px; margin-top: 10px;">*Precio estimado sujeto a confirmación</div>
        </div>

        <div class="footer">
            <p>Este correo fue enviado automáticamente desde el formulario de cotización de Transportes Maheja.</p>
            <p>Para responder al cliente, simplemente responde a este email.</p>
        </div>
    </div>
</body>
</html>
```

---

## 📧 Plantilla 2: Contacto

### Configuración de la Plantilla

**Nombre de la plantilla:** `Contacto - Transportes Maheja`

**To Email:**
```
gabriela.geronimo@transportesmaheja.com, facturacionmaheja@gmail.com
```

**From Name:**
```
Transportes Maheja - Contacto
```

**Reply To:**
```
{{email}}
```

**Subject:**
```
Nuevo Mensaje de Contacto - {{nombre}}
```

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .section {
            background: #f9fafb;
            padding: 20px;
            margin: 10px 0;
            border-left: 4px solid #dc2626;
        }
        .section-title {
            color: #dc2626;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
            text-transform: uppercase;
        }
        .info-row {
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        .label {
            font-weight: bold;
            color: #6b7280;
            display: inline-block;
            width: 180px;
        }
        .value {
            color: #111827;
        }
        .message-box {
            background: white;
            padding: 20px;
            border-radius: 10px;
            border: 2px solid #e5e7eb;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #6b7280;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📬 Nuevo Mensaje de Contacto</h1>
            <p>Transportes Maheja</p>
        </div>

        <div class="section">
            <div class="section-title">👤 Información de Contacto</div>
            <div class="info-row">
                <span class="label">Nombre:</span>
                <span class="value">{{nombre}}</span>
            </div>
            <div class="info-row">
                <span class="label">Email:</span>
                <span class="value">{{email}}</span>
            </div>
            <div class="info-row">
                <span class="label">Teléfono:</span>
                <span class="value">{{telefono}}</span>
            </div>
            <div class="info-row">
                <span class="label">Empresa:</span>
                <span class="value">{{empresa}}</span>
            </div>
            <div class="info-row">
                <span class="label">Servicio de Interés:</span>
                <span class="value">{{servicio}}</span>
            </div>
        </div>

        <div class="section">
            <div class="section-title">💬 Mensaje</div>
            <div class="message-box">
                <p>{{mensaje}}</p>
            </div>
        </div>

        <div class="footer">
            <p>Este correo fue enviado automáticamente desde el formulario de contacto de Transportes Maheja.</p>
            <p>Para responder al cliente, simplemente responde a este email.</p>
        </div>
    </div>
</body>
</html>
```

---

## 🎯 Instrucciones Rápidas

### Paso 1: Crear Plantilla en EmailJS

1. Ve a https://dashboard.emailjs.com/admin/templates
2. Haz clic en "Create New Template"
3. Copia el nombre de la plantilla
4. Configura los campos (To Email, From Name, Reply To, Subject)
5. Pega el contenido HTML en el editor
6. Guarda y copia el Template ID

### Paso 2: Repetir para la segunda plantilla

Crea la segunda plantilla siguiendo los mismos pasos.

### Paso 3: Actualizar configuración

Actualiza `src/config/emailConfig.js` con tus IDs.

---

## ✅ Verificación

Después de configurar las plantillas, verifica que:
- ✅ Los emails de destino estén correctos
- ✅ El "Reply To" esté configurado como `{{email}}`
- ✅ Los nombres de las variables coincidan exactamente (case-sensitive)
- ✅ Las plantillas estén activas en EmailJS

---

## 📝 Notas Importantes

1. **Variables**: Las variables entre `{{}}` deben coincidir exactamente con las que se envían desde el código
2. **Reply To**: Configurar `{{email}}` permite responder directamente al cliente
3. **HTML**: Puedes personalizar los estilos según tu preferencia
4. **Testing**: Usa la función "Test" en EmailJS para probar las plantillas antes de usarlas en producción
