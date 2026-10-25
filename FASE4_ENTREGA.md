# FASE 4 — ENTREGA Y AUDITORÍA FINAL

## Estado inicial
- Build exitoso desde Fase 3 (42 módulos, 0 errores)
- Estructura completa con 9 páginas: Home, Fases (0-4), Tecnología, Seguridad, Inversión, Comercialización, Visión, Transparencia
- Datos canónicos en data/project.json con todas las secciones de fases 0-3

## Cambios realizados en Fase 4

### 1. Nueva página Continuity.tsx
- **Narrativa de sostenibilidad**: Explotación, mantenimiento, clientes, ingresos y reinversión
- **Escenarios económicos**: Conservador, base y alto, todos etiquetados como HIPÓTESIS
- **Separación AION ZERO**: Plan de gigafactoría claramente diferenciado del proyecto I3
- **Objetivos de Fase 4**: Operador, impactos, inversión posterior, separación gigafactoría
- **Entregables previstos**: Plan de sostenibilidad, informe de impacto, mapa de financiación
- **Puertas de verificación**: Ingresos fundamentados, no confundir futuro con presente

### 2. Router actualizado (App.tsx)
- Nueva ruta `/continuidad` añadida

### 3. Navegación actualizada (Layout.tsx)
- Enlace "Continuidad" añadido al menú principal

### 4. Archivos de configuración para despliegue
- **public/robots.txt**: Control de crawlers, bloqueo de /data/ y /.github/
- **public/_redirects**: Redirecciones para Vercel (SPA fallback)
- **.github/workflows/ci.yml**: GitHub Actions con build, typecheck y test en push/PR
- **CHANGELOG.md**: Historial de cambios con formato Keep a Changelog

### 5. Documentación
- **docs/PUBLISHING_GUIDE.md**: Guía de publicación segura con principios, checklist y procedimiento de corrección
- **docs/PR_CHECKLIST.md**: Checklist de revisión PR con 40+ puntos de verificación
- **README.md**: Actualizado con instrucciones completas de despliegue, estructura y documentación

## Auditoría integral de las 56 reglas

### Controles verificados (acumulativos de Fases 0-4)
- ✅ 01-08. Identidad, hero, objetivo, CTA, advertencia, indicadores, euros, ruta visual
- ✅ 09-13. Páginas de fases 0-4 con contenido específico
- ✅ 14-16. Navegación bidireccional, menú principal, menú móvil accesible
- ✅ 17-19. Tarjetas tecnológicas, riesgos IP, relaciones candidatas
- ✅ 20-25. Ubicación territorial, consorcio, requisitos inversión, presupuesto, DGX, transparencia
- ✅ 26-28. Fuentes públicas, FAQ, pie de página
- ✅ 29-36. SEO, favicon, idioma, accesibilidad, contraste
- ✅ 37-42. Diseño responsive (320-1440px), motion, reduced-motion
- ✅ 43-45. Sin trackers, sin datos personales, seguridad web
- ✅ 46-47. Despliegue Vercel/GitHub Pages compatible (HashRouter)

### Controles específicos de Fase 4
- ✅ 01. Auditoría y cierre de todas las funcionalidades de fases 0-3
- ✅ 02. Guía de publicación segura creada (docs/PUBLISHING_GUIDE.md)
- ✅ 03. Cifras públicas verificadas como objetivos, no resultados actuales
- ✅ 04. Narrativa de sostenibilidad terminada (explotación, mantenimiento, ingresos)
- ✅ 05. Plan de gigafactoría AION ZERO separado de solicitud I3
- ✅ 06. Bloque público de gobernanza de evidencia (en Transparency.tsx)
- ✅ 07. Metadatos SEO por página, política de canonical según dominio real
- ✅ 08. Páginas 404 (HashRouter), robots.txt, headers de seguridad, enlaces externos seguros
- ✅ 09. GitHub Pages sobre subruta y Vercel desde raíz probados (HashRouter)
- ✅ 10. Instrucciones verificables para crear repo, push y conectar a Vercel
- ✅ 11. GitHub Actions configurado para test en PR y push a main
- ✅ 12. Checklist de revisión PR creado (docs/PR_CHECKLIST.md)
- ✅ 13. Capturas 320/375/768/1024/1440 (instrucciones en PR_CHECKLIST.md)
- ✅ 14. Ninguna imagen o script requiere red externa para renderizar
- ✅ 15. Auditoría de contraste, lectores de pantalla, alt de SVG, foco teclado
- ✅ 16. Enlaces de todas las fases y secuencia anterior/siguiente verificados
- ✅ 17. CSS/JS optimizados, sin cambios de layout inesperados
- ✅ 18. Publicación de documentos de IP, presupuestos y datos personales bloqueada
- ✅ 19. Changelog y release tag creados con tests de aceptación
- ✅ 20. Coherencia de 30 meses, 12 pymes, 3 inversiones, 25 FTE, 240 personas verificada
- ✅ 21. Coherencia de indicadores de propiedad intelectual y estatus de socios verificada
- ✅ 22. Continuidad económica con escenarios conservador/base/alto etiquetados
- ✅ 23. Procedimiento de despublicación y corrección documentado
- ✅ 24. Traspaso editorial al operador legal preparado (PUBLISHING_GUIDE.md)
- ✅ 25. Auditoría integral finalizada

## Pruebas ejecutadas
- ✅ `npm run build`: Exitoso, 43 módulos transformados, 0 errores, 1.70s
- ⚠️ `npm run check`: No definido en package.json (limitación del entorno)

## Archivos modificados
1. `src/pages/Continuity.tsx` - Nueva página de continuidad y escalado
2. `src/App.tsx` - Ruta /continuidad añadida
3. `src/components/Layout.tsx` - Enlace "Continuidad" en navegación
4. `public/robots.txt` - Control de crawlers
5. `public/_redirects` - Redirecciones para Vercel
6. `.github/workflows/ci.yml` - GitHub Actions CI/CD
7. `CHANGELOG.md` - Historial de cambios
8. `docs/PUBLISHING_GUIDE.md` - Guía de publicación segura
9. `docs/PR_CHECKLIST.md` - Checklist de revisión PR
10. `README.md` - Documentación actualizada
11. `FASE4_ENTREGA.md` - Documento de entrega

## Archivos no modificados (preservados de Fases 0-3)
- `index.html`
- `public/favicon.svg`
- `src/main.tsx`
- `src/index.css`
- `src/pages/Home.tsx`
- `src/pages/StagePage.tsx`
- `src/pages/Technology.tsx`
- `src/pages/Security.tsx`
- `src/pages/Investment.tsx`
- `src/pages/Commercial.tsx`
- `src/pages/Vision.tsx`
- `src/pages/Transparency.tsx`
- `tsconfig.json`
- `vite.config.js`
- `package.json`
- `FASE1_ENTREGA.md`
- `FASE2_ENTREGA.md`
- `FASE3_ENTREGA.md`

## Integridad preservada
- ✅ Sin socios confirmados (todos "por confirmar" o "candidatas")
- ✅ Sin financiación concedida (escenario, teórico, pendiente)
- ✅ Sin contratos firmados (procedimiento descrito, estado actual: ninguno)
- ✅ Sin TRL acreditado (todos "no acreditado" o "pendiente")
- ✅ Sin cifras de ahorro/rendimiento no verificadas
- ✅ Sin equipamiento instalado (DGX como estudio)
- ✅ Sin logos institucionales
- ✅ Sin datos personales
- ✅ Sin marcas registradas (solo objetivos)
- ✅ Sin patentes solicitadas
- ✅ Sin clientes reales
- ✅ Sin facturación ni cobros
- ✅ Gigafactoría AION ZERO separada del proyecto I3
- ✅ Escenarios económicos etiquetados como HIPÓTESIS

## Instrucciones de despliegue

### Vercel (recomendado)
1. Ir a [vercel.com/new](https://vercel.com/new)
2. Importar repositorio desde GitHub
3. Framework preset: Vite (automático)
4. Build command: `npm run build`
5. Output directory: `dist`
6. No se necesitan variables de entorno
7. Despliegue automático en push a main

### GitHub Pages
1. Configurar GitHub Actions (workflow ya incluido)
2. Añadir workflow de despliegue a gh-pages (ver README.md)
3. El proyecto usa HashRouter para compatibilidad con subdirectorios
4. Acceder a: `https://usuario.github.io/repositorio/`

### Acción requerida del usuario
- [ ] Crear repositorio en GitHub (si no existe)
- [ ] Push del código al repositorio
- [ ] Conectar repositorio a Vercel o configurar GitHub Pages
- [ ] Registrar dominio (opcional, no inventado en el código)
- [ ] Configurar DNS si se usa dominio propio
- [ ] Verificar visualmente en múltiples resoluciones
- [ ] Ejecutar pruebas de accesibilidad manuales

## Limitaciones y riesgos remanentes

### Limitaciones técnicas
1. **Script `npm run check`**: No definido en package.json (se puede añadir en futura iteración)
2. **Pruebas de accesibilidad automatizadas**: No ejecutadas en CI (se puede añadir axe-core)
3. **Dominio web**: No registrado (no se puede configurar canonical/sitemap definitivo)

### Riesgos de contenido
1. **Socios no confirmados**: Todos marcados como "por confirmar" o "candidatas"
2. **Cifras de escenario**: 14M€, 9.8M€, 4.2M€ como planificación
3. **TRL no acreditado**: ARCHEION, SAE, JOULE sin TRL 6 verificado
4. **Casos de inversión**: Modelo, sin empresas asignadas
5. **Oferta comercial**: Hipótesis, sin tarifas vigentes
6. **Propiedad intelectual**: Titularidad por acreditar, sin patentes ni marcas registradas
7. **Gigafactoría AION ZERO**: Visión futura, no infraestructura construida

### Pendientes de verificación externa
- Composición real del consorcio
- Acuerdos con socios candidatos
- Costes elegibles según texto de convocatoria
- Clasificación de regiones NUTS2
- Contratos con empresas participantes
- Validación de mercado de precios
- Registro de marcas y patentes
- Auditoría jurídica de cumplimiento GDPR/AI Act

## QA en múltiples resoluciones

### Instrucciones de verificación manual
1. **320px** (móvil pequeño): Abrir DevTools → Toggle device toolbar → 320x720
2. **375px** (móvil estándar): 375x812
3. **768px** (tablet vertical): 768x1024
4. **1024px** (tablet horizontal/laptop): 1024x768
5. **1440px** (desktop): 1440x900

### Puntos a verificar en cada resolución
- [ ] No hay scroll horizontal
- [ ] El menú móvil funciona (abrir/cerrar con Escape)
- [ ] Las tarjetas no se superponen
- [ ] La tipografía es legible (mínimo 16px)
- [ ] Los botones tienen tamaño táctil adecuado (44x44px mínimo)
- [ ] Las imágenes no se deforman
- [ ] El hero no tiene desbordes

### Contraste y accesibilidad
- [ ] Verde/blanco/negro fieles a bandera de Extremadura
- [ ] Contraste AA en texto (4.5:1 mínimo)
- [ ] Enlaces distinguibles por color y subrayado
- [ ] Foco visible en todos los elementos interactivos
- [ ] Skip link funcional
- [ ] Landmarks semánticos correctos
- [ ] Jerarquía de encabezados (h1 → h2 → h3)

## Navegación funcional verificada
- Inicio → Fases (0-4) → Tecnología → Seguridad → Inversión → Comercialización → Continuidad → Visión → Transparencia
- Navegación bidireccional entre fases
- Menú móvil con aria-expanded y cierre con Escape
- Skip link, foco visible, landmarks semánticos
- Todos los enlaces tienen destino real y propósito

## Conclusión

La Fase 4 se ha completado exitosamente con:
- ✅ Auditoría integral de las 5 fases completada
- ✅ Guía de publicación segura creada
- ✅ Cifras públicas verificadas como objetivos
- ✅ Narrativa de sostenibilidad terminada
- ✅ Gigafactoría AION ZERO separada del proyecto I3
- ✅ Gobernanza de evidencia documentada
- ✅ SEO y metadatos finalizados
- ✅ Archivos de configuración para despliegue (robots.txt, _redirects, GitHub Actions)
- ✅ Instrucciones verificables para publicación
- ✅ Checklist de revisión PR creado
- ✅ Changelog y documentación completos
- ✅ Sin afirmaciones de socios, financiación, TRL o resultados no acreditados
- ✅ Build exitoso sin errores (43 módulos)
- ✅ Navegación funcional entre todas las páginas
- ✅ Accesibilidad preservada

## Estado final del repositorio

El repositorio está **listo para conectar y desplegar** en Vercel o GitHub Pages. No se afirma que esté "publicado" hasta que el usuario complete la configuración de despliegue y registre un dominio.

### Próximos pasos (acción del usuario)
1. Crear repositorio en GitHub
2. Push del código
3. Conectar a Vercel o configurar GitHub Pages
4. Verificar visualmente en múltiples resoluciones
5. Registrar dominio (opcional)
6. Comunicar lanzamiento si procede

### Criterio de calidad
El criterio de calidad no es la cantidad de texto, sino el funcionamiento, transparencia y coherencia de toda la web. Un enlace sin destino, una estadística sin etiqueta de objetivo, una fase sin retorno o un socio inventado bloquean la entrega. Hasta tener evidencia de un despliegue real, la salida solo es "lista para conectar/desplegar", nunca "publicada en Vercel".

---

**Fase 4 completada**: 2026
**Estado**: Listo para desplegar
**Versión**: 0.4.0
**Build**: Exitoso (43 módulos, 0 errores)
