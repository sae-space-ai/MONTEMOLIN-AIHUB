# MONTEMOLIN-AIHUB

**Propuesta de Hub europeo de inteligencia artificial confiable y despliegue empresarial desde Montemolín, Extremadura (NUTS2 ES43).**

> ⚠️ **Proyecto en preparación.** Este sitio tiene carácter demostrativo. No se ha concedido financiación de la Unión Europea. Convocatoria de referencia: I3-2026-INV2a.

## Estado actual — Fase 4 completada

El proyecto ha completado las cuatro fases de desarrollo:

- **Fase 0**: Fundamentos y cohesión — Landing, rutas 0-4, datos canónicos
- **Fase 1**: Tecnología preparada — Arquitectura, evidencias TRL, seguridad
- **Fase 2**: Inversión interregional — Presupuestos trazables, simulador local
- **Fase 3**: Mercado y monetización — Oferta hipotética, IP, casos simulados
- **Fase 4**: Continuidad y escalado — Sostenibilidad, escenarios, auditoría final

## Estructura del proyecto

```
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI/CD
├── data/
│   └── project.json             # Fuente única de datos canónicos
├── docs/
│   ├── PUBLISHING_GUIDE.md      # Guía de publicación segura
│   └── PR_CHECKLIST.md          # Checklist de revisión PR
├── public/
│   ├── favicon.svg              # Marca gráfica propia tricolor
│   ├── robots.txt               # Control de crawlers
│   └── _redirects               # Redirecciones para Vercel
├── src/
│   ├── App.tsx                  # Router principal (HashRouter)
│   ├── main.tsx                 # Punto de entrada React
│   ├── index.css                # Estilos y tokens de color
│   ├── components/
│   │   └── Layout.tsx           # Cabecera, navegación, pie de página
│   └── pages/
│       ├── Home.tsx             # Landing page
│       ├── StagePage.tsx        # Páginas de fases 0–4
│       ├── Technology.tsx       # Ecosistema tecnológico y arquitectura
│       ├── Security.tsx         # Seguridad y gobernanza de IA
│       ├── Investment.tsx       # Presupuesto e inversión
│       ├── Commercial.tsx       # Comercialización y propiedad intelectual
│       ├── Continuity.tsx       # Continuidad y escalado post-subvención
│       ├── Vision.tsx           # Visión industrial AION ZERO
│       └── Transparency.tsx     # Transparencia y fuentes
├── CHANGELOG.md                 # Historial de cambios
├── FASE1_ENTREGA.md             # Documento de entrega Fase 1
├── FASE2_ENTREGA.md             # Documento de entrega Fase 2
├── FASE3_ENTREGA.md             # Documento de entrega Fase 3
├── FASE4_ENTREGA.md             # Documento de entrega Fase 4
├── index.html                   # HTML base con SEO
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

# Verificar tipos TypeScript
npm run typecheck
```

El proyecto se levanta en `http://localhost:3000`.

## Despliegue

### Vercel (recomendado)

1. **Importar repositorio** en [vercel.com](https://vercel.com)
2. **Configuración automática**:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
3. **Variables de entorno**: No se necesitan
4. **Dominio**: Configurar dominio propio cuando esté registrado
5. **Despliegue**: Automático en push a main

### GitHub Pages

1. **Configurar GitHub Actions** (ya incluido en `.github/workflows/ci.yml`)
2. **Añadir workflow de despliegue** a gh-pages:

```yaml
# Añadir a .github/workflows/ci.yml
deploy:
  needs: build-and-test
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main'
  steps:
    - uses: actions/download-artifact@v4
      with:
        name: dist
        path: dist/
    - uses: peaceiris/actions-gh-pages@v4
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

3. **El proyecto usa HashRouter** para compatibilidad con subdirectorios
4. **Acceder a**: `https://usuario.github.io/repositorio/`

### Instrucciones paso a paso

```bash
# 1. Crear repositorio en GitHub
gh repo create montemolin-aihub --public --clone
cd montemolin-aihub

# 2. Copiar archivos del proyecto
# (o hacer clone si ya existe)

# 3. Push inicial
git add .
git commit -m "Initial commit: MONTEMOLIN-AIHUB Fase 4"
git push -u origin main

# 4. Conectar a Vercel
# Ir a vercel.com/new y seleccionar el repositorio

# 5. O configurar GitHub Pages
# Settings → Pages → Source: GitHub Actions
```

## Edición de contenido

Todos los datos factuales se encuentran en `data/project.json`. Para modificar cifras, estados o textos canónicos:

1. Editar `data/project.json`
2. Las páginas leen de este archivo automáticamente
3. Verificar que el build sigue funcionando: `npm run build`
4. Actualizar `CHANGELOG.md`
5. Hacer commit y push

**Regla**: No duplicar cifras en componentes. Si necesitas una nueva propiedad, añádela al JSON con unidad, procedencia, fecha y estatus.

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
- Todas las cifras deben tener etiqueta de estado (escenario/objetivo/hipótesis/pendiente/verificado)

Ver [docs/PUBLISHING_GUIDE.md](docs/PUBLISHING_GUIDE.md) para más detalles.

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
- SVG con `aria-label` descriptivo

## Páginas del sitio

1. **Inicio** (`/`) — Landing con misión, métricas y fases
2. **Fases** (`/fases/0` a `/fases/4`) — Detalle de cada fase
3. **Tecnología** (`/tecnologia`) — Arquitectura y componentes
4. **Seguridad** (`/seguridad`) — Gobernanza de IA
5. **Inversión** (`/inversion`) — Presupuesto y simulador
6. **Comercialización** (`/comercializacion`) — Oferta hipotética e IP
7. **Continuidad** (`/continuidad`) — Sostenibilidad post-subvención
8. **Visión** (`/vision`) — AION ZERO y gigafactoría
9. **Transparencia** (`/transparencia`) — Fuentes y estado de datos

## Documentación adicional

- [CHANGELOG.md](CHANGELOG.md) — Historial de cambios
- [docs/PUBLISHING_GUIDE.md](docs/PUBLISHING_GUIDE.md) — Guía de publicación segura
- [docs/PR_CHECKLIST.md](docs/PR_CHECKLIST.md) — Checklist de revisión PR
- [FASE1_ENTREGA.md](FASE1_ENTREGA.md) — Documento de entrega Fase 1
- [FASE2_ENTREGA.md](FASE2_ENTREGA.md) — Documento de entrega Fase 2
- [FASE3_ENTREGA.md](FASE3_ENTREGA.md) — Documento de entrega Fase 3
- [FASE4_ENTREGA.md](FASE4_ENTREGA.md) — Documento de entrega Fase 4

## Contribuir

Antes de hacer un PR, revisa [docs/PR_CHECKLIST.md](docs/PR_CHECKLIST.md).

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'Añadir nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## Licencia

Este repositorio es una propuesta demostrativa. La propiedad intelectual del software y servicios es materia de inventario y acuerdos reales.

---

**Última actualización**: Fase 4 (2026)
**Estado**: Listo para desplegar (pendiente de configuración de dominio y despliegue)
**Versión**: 0.4.0
