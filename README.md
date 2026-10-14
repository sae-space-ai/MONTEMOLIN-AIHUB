# MONTEMOLIN-AIHUB

**Propuesta de Hub europeo de inteligencia artificial confiable y despliegue empresarial desde Montemolín, Extremadura (NUTS2 ES43).**

> ⚠️ **Proyecto en preparación.** Este sitio tiene carácter demostrativo. No se ha concedido financiación de la Unión Europea. Convocatoria de referencia: I3-2026-INV2a.

## Estado actual — Fase 0

La Fase 0 establece la base pública editorial, accesible y jurídicamente prudente del proyecto. Incluye:

- Landing page con misión, alcance, región y estado
- Ruta de cinco fases (0–4) con navegación bidireccional
- Páginas de tecnología, inversión, visión y transparencia
- Datos canónicos centralizados en `data/project.json`
- Diseño responsive (320px a 1920px) y accesible (WCAG AA)
- Aviso visible de proyecto en preparación
- Sin datos inventados: socios, TRL, financiación o compromisos

## Estructura del proyecto

```
├── data/
│   └── project.json          # Fuente única de datos canónicos
├── public/
│   └── favicon.svg           # Marca gráfica propia tricolor
├── src/
│   ├── App.tsx               # Router principal (HashRouter)
│   ├── main.tsx              # Punto de entrada React
│   ├── index.css             # Estilos y tokens de color
│   ├── components/
│   │   └── Layout.tsx        # Cabecera, navegación, pie de página
│   └── pages/
│       ├── Home.tsx           # Landing page
│       ├── StagePage.tsx      # Páginas de fases 0–4
│       ├── Technology.tsx     # Ecosistema tecnológico
│       ├── Investment.tsx     # Presupuesto e inversión
│       ├── Vision.tsx         # Visión industrial AION ZERO
│       └── Transparency.tsx   # Transparencia y fuentes
├── index.html                 # HTML base con SEO
├── package.json
├── tsconfig.json
└── vite.config.js
```

## Arranque local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

El proyecto se levanta en `http://localhost:3000`.

## Edición de contenido

Todos los datos factuales se encuentran en `data/project.json`. Para modificar cifras, estados o textos canónicos:

1. Editar `data/project.json`
2. Las páginas leen de este archivo automáticamente
3. Verificar que el build sigue funcionando: `npm run build`

**Regla:** No duplicar cifras en componentes. Si necesitas una nueva propiedad, añádela al JSON con unidad, procedencia, fecha y estatus.

## Despliegue

### Vercel

1. Importar el repositorio en Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. No se necesitan variables de entorno ni secretos

### GitHub Pages

El proyecto usa `HashRouter` para compatibilidad con subdirectorios. Para desplegar:

1. Configurar GitHub Actions con `base` en `vite.config.js` si es necesario
2. O usar un workflow que publique `dist/` en la rama `gh-pages`

## Identidad visual

- **Verde primario:** `#006B3F` (verde de Extremadura)
- **Verde secundario:** `#2E8B57`
- **Blanco:** `#FFFFFF` (lectura)
- **Negro:** `#1A1A1A` (contraste y tipografía)
- **Marca:** Logo abstracto tricolor propio (verde, blanco, negro)

No se utilizan logotipos institucionales de la UE, Junta de Extremadura u otras entidades sin autorización.

## Reglas de integridad

- **NO INVENTAR** subvenciones, permisos, acuerdos, TRL, cotizaciones, patentes, facturación, clientes, empleos ni dominios
- Un número de presupuesto es un **escenario**, salvo prueba en contrario
- Las relaciones con ACS, Telefónica, Santander y Junta son **candidatas a explorar**, no socios confirmados
- ARCHEION, SAE y JOULE **no se presentan como TRL 6 verificado**
- La gigafactoría AION ZERO es una **visión industrial separada** del proyecto I3

## Accesibilidad

- Skip link al contenido principal
- Navegación por teclado (Tab, Shift+Tab, Enter, Escape)
- Foco visible en todos los elementos interactivos
- Landmarks semánticos (nav, main, section, article, footer)
- Jerarquía de encabezados correcta (h1 → h2 → h3)
- Contraste AA en texto
- Respeto a `prefers-reduced-motion`
- Menú móvil con `aria-expanded`
- `details`/`summary` nativos para FAQ

## Licencia

Este repositorio es una propuesta demostrativa. La propiedad intelectual del software y servicios es materia de inventario y acuerdos reales.

## Fase siguiente

La Fase 1 abordará ingeniería y validación tecnológica, partiendo de esta base reparada y funcional.
