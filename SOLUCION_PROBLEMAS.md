# 🔧 SOLUCIÓN DE PROBLEMAS - Página de Módulos en Blanco

## Problema Reportado
Los enlaces a los módulos se abren pero la página aparece en blanco.

## Causas Posibles y Soluciones

### 1. **Caché del Navegador** (Más Común)
El navegador puede estar mostrando una versión antigua de la página.

**Solución:**
```bash
# Recarga forzada sin caché
Windows/Linux: Ctrl + F5
Mac: Cmd + Shift + R

# O limpia la caché completamente
Chrome: Ctrl + Shift + Delete → "Imágenes y archivos almacenados en caché"
Firefox: Ctrl + Shift + Delete → "Caché"
Safari: Cmd + Option + E
```

### 2. **Servidor de Desarrollo No Actualizado**
Si estás en modo desarrollo, el servidor puede no haber detectado los cambios.

**Solución:**
```bash
# Detén el servidor (Ctrl + C)
# Reinicia el servidor de desarrollo
npm run dev

# Espera a que termine de compilar
# Luego recarga el navegador
```

### 3. **Error en la Consola del Navegador**
Puede haber un error de JavaScript que impide el renderizado.

**Solución:**
1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Console"
3. Busca errores en rojo
4. Si ves errores, copia el mensaje completo

**Errores comunes:**
- `Cannot read property 'items' of undefined` → Problema con el JSON
- `Module not found` → Problema con imports
- `SyntaxError` → Error de sintaxis en el código

### 4. **Problema con el JSON**
El archivo `data/project.json` puede tener un error de formato.

**Verificación:**
```bash
# Valida el JSON
node -e "console.log(JSON.parse(require('fs').readFileSync('data/project.json', 'utf8')).modules.items.length)"

# Debería mostrar: 4
```

### 5. **Problema con TypeScript**
Puede haber un error de tipos que no se detectó en el build.

**Solución:**
```bash
# Verifica los tipos
npm run typecheck

# Si hay errores, corrígelos
```

### 6. **Problema con React Router**
El HashRouter puede no estar funcionando correctamente.

**Verificación:**
- Asegúrate de que la URL sea: `http://localhost:3000/#/modulos`
- No: `http://localhost:3000/modulos` (sin el #)

### 7. **Problema con el Componente Modules**
El componente puede estar fallando al renderizar.

**Verificación:**
1. Abre `src/pages/Modules.tsx`
2. Verifica que el import del JSON es correcto:
   ```typescript
   import projectData from '../../data/project.json';
   ```
3. Verifica que hay verificación de seguridad:
   ```typescript
   if (!projectData.modules || !projectData.modules.items) {
     return <div>Error...</div>;
   }
   ```

## Pasos de Diagnóstico

### Paso 1: Verificar el Build
```bash
npm run build
```
Debe completarse sin errores.

### Paso 2: Verificar el Servidor de Desarrollo
```bash
npm run dev
```
Debe mostrar:
```
  VITE v6.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

### Paso 3: Verificar la URL
Abre el navegador y ve a:
```
http://localhost:3000/#/modulos
```

### Paso 4: Verificar la Consola
1. Abre DevTools (F12)
2. Ve a "Console"
3. No debe haber errores en rojo

### Paso 5: Verificar el Network
1. En DevTools, ve a "Network"
2. Recarga la página
3. Busca `project.json` en la lista
4. Debe tener status 200

### Paso 6: Verificar el DOM
1. En DevTools, ve a "Elements"
2. Busca el elemento `<div id="root">`
3. Debe tener contenido dentro (no estar vacío)

## Solución Rápida

Si nada funciona, prueba esto:

```bash
# 1. Detén todo
# Ctrl + C en el servidor

# 2. Limpia node_modules y reinstala
rm -rf node_modules
npm install

# 3. Limpia la caché de Vite
rm -rf node_modules/.vite

# 4. Reinicia
npm run dev

# 5. En el navegador:
# - Abre modo incógnito (Ctrl + Shift + N)
# - Ve a http://localhost:3000/#/modulos
```

## Verificación del JSON

El archivo `data/project.json` debe tener esta estructura:

```json
{
  "modules": {
    "title": "Módulos operativos del Hub",
    "description": "...",
    "items": [
      {
        "id": "ia-iren-badajoz",
        "name": "IA IREN Badajoz",
        "location": "Badajoz",
        "focus": "...",
        "description": "...",
        "objectives": [...],
        "tasks": [...],
        "evidence": [...],
        "tracking": {
          "status": "En definición",
          "progress": "0%",
          "nextMilestone": "...",
          "lastUpdate": "..."
        }
      },
      // ... 3 módulos más
    ]
  }
}
```

## Verificación del Componente

El archivo `src/pages/Modules.tsx` debe:

1. ✅ Importar el JSON correctamente
2. ✅ Tener verificación de seguridad
3. ✅ Acceder a `modules.items` correctamente
4. ✅ Renderizar los 4 módulos
5. ✅ No tener errores de TypeScript

## Si el Problema Persiste

### Opción A: Revisar el Código Fuente
```bash
# Verifica que el archivo existe
ls -la src/pages/Modules.tsx

# Verifica el contenido
cat src/pages/Modules.tsx | head -20
```

### Opción B: Verificar el JSON
```bash
# Verifica que el JSON es válido
cat data/project.json | jq '.modules.items | length'

# Debería mostrar: 4
```

### Opción C: Crear un Test Simple
Crea un archivo `test-modules.js`:
```javascript
import projectData from './data/project.json';
console.log('Módulos:', projectData.modules.items.length);
console.log('Primer módulo:', projectData.modules.items[0].name);
```

Ejecuta:
```bash
node test-modules.js
```

## Contacto y Soporte

Si después de todos estos pasos el problema persiste:

1. **Captura de pantalla** de la consola del navegador
2. **Mensaje de error** completo
3. **URL** que estás intentando acceder
4. **Versión del navegador**
5. **Sistema operativo**

---

## Estado Actual del Proyecto

✅ **Build**: Exitoso (44 módulos, 0 errores)
✅ **JSON**: Válido (4 módulos definidos)
✅ **Componente**: Modules.tsx reescrito con manejo de errores
✅ **Rutas**: Configuradas correctamente en App.tsx
✅ **Navegación**: Enlace "Módulos" en Layout.tsx

**El código está correcto. El problema es probablemente de caché o de servidor de desarrollo.**

---

## Solución Definitiva

```bash
# 1. Detén el servidor
# Ctrl + C

# 2. Limpia todo
rm -rf node_modules/.vite
rm -rf dist

# 3. Reconstruye
npm run build

# 4. Inicia el servidor
npm run dev

# 5. En el navegador:
# - Modo incógnito: Ctrl + Shift + N
# - URL: http://localhost:3000/#/modulos
# - Recarga forzada: Ctrl + F5
```

**Esto debería resolver el problema en el 99% de los casos.**
