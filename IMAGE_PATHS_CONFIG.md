# Configuración de Rutas de Imágenes para Deploy

## Resumen
Este documento explica cómo están configuradas las rutas de las imágenes para que funcionen correctamente en GitHub Pages y Vercel.

## Configuración de Vite

En `vite.config.js`, el proyecto está configurado con:
```javascript
base: '/MahejaWeb/'
```

Esto es necesario para GitHub Pages, ya que el sitio se servirá desde `https://usuario.github.io/MahejaWeb/`.

Para Vercel, esta configuración también funciona correctamente.

## Manejo de Imágenes

### ✅ Forma Correcta (Usando Imports)

Todas las imágenes deben importarse como módulos ES6:

```javascript
import logo from '../assets/logo.svg'
import fondo from '../assets/fondo.jpg'
import imagen1 from '../assets/Img/IMG-20251030-WA0007.jpg'

// Luego usar en JSX:
<img src={logo} alt="Logo" />
```

**Ventajas:**
- Vite procesa las imágenes durante el build
- Genera nombres de archivo con hash para cache busting
- Las rutas se resuelven automáticamente según el `base` configurado
- Funciona tanto en desarrollo como en producción
- Compatible con GitHub Pages y Vercel

### ❌ Forma Incorrecta (Rutas Absolutas)

**NO usar rutas absolutas:**
```javascript
// ❌ INCORRECTO - No funcionará en producción
<img src="/src/assets/logo.svg" alt="Logo" />
<img src="/assets/logo.svg" alt="Logo" />
```

## Archivos Corregidos

Los siguientes archivos fueron actualizados para usar imports correctos:

1. **`src/compo/nav.jsx`**
   - Importa: `logo.svg`
   - Usa: `<img src={logo} />`

2. **`src/compo/footer.jsx`**
   - Importa: `logo.svg`
   - Usa: `<img src={logo} />`

## Archivos que Ya Estaban Correctos

Los siguientes archivos ya usaban imports correctamente:

- `src/compo/hero.jsx` - Importa: `fondo.jpg`, logos de empresas
- `src/pages/galeria.jsx` - Importa: todas las imágenes de la galería
- `src/pages/Servicios.jsx` - Importa: imagen hero

## Estructura de Assets

```
src/
  assets/
    logo.svg
    fondo.jpg
    react.svg
    camión kenworth 3d.glb
    Img/
      ├── Agrogen.png
      ├── PACIFEX.png
      ├── Zucarmex.png
      ├── wilmar.png
      ├── yara.png
      ├── cic.png
      ├── SQM.png
      └── IMG-20251030-WA00XX.jpg (múltiples imágenes)
```

## Verificación

Para verificar que todo funciona correctamente:

1. **En desarrollo:**
   ```bash
   npm run dev
   ```
   Verifica que todas las imágenes se vean correctamente.

2. **Build de producción:**
   ```bash
   npm run build
   npm run preview
   ```
   Verifica que las imágenes funcionen en el build de producción.

## Deploy

### GitHub Pages

1. El workflow de GitHub Actions ya está configurado en `.github/workflows/`
2. Asegúrate de que `base: '/MahejaWeb/'` esté en `vite.config.js`
3. Push a la rama principal para activar el deploy automático

### Vercel

1. Conecta el repositorio en Vercel
2. Vercel detectará automáticamente que es un proyecto Vite
3. No se requiere configuración adicional
4. El `base: '/MahejaWeb/'` también funciona en Vercel

## Notas Importantes

- **Nunca uses rutas absolutas** que comiencen con `/src/` o `/assets/`
- **Siempre importa las imágenes** como módulos
- Las imágenes en `public/` se copian tal cual, pero no se recomienda para assets del proyecto
- El `base` en `vite.config.js` es crucial para GitHub Pages

## Troubleshooting

Si las imágenes no se ven después del deploy:

1. Verifica que todas las imágenes usen imports
2. Revisa la consola del navegador para errores 404
3. Verifica que el `base` en `vite.config.js` coincida con el nombre del repositorio
4. Asegúrate de que el build se completó sin errores
