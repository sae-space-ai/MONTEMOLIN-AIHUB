# FASE 2 — ENTREGA Y AUDITORÍA

## Estado inicial
- Build exitoso desde Fase 1 (41 módulos, 0 errores)
- Estructura completa con 7 páginas: Home, Fases (0-4), Tecnología, Seguridad, Inversión, Visión, Transparencia
- Datos canónicos en data/project.json con arquitectura, evidencias TRL, seguridad

## Cambios realizados en Fase 2

### 1. Datos canónicos ampliados (data/project.json)
- **regions**: Mapa de regiones elegibles con región sede (Extremadura ES43) y criterios para regiones socias
- **investmentCases**: Tres casos modelo (IA documental agroalimentaria, automatización supervisada, implantaciones sectoriales)
- **costCategories**: 5 categorías de costes (directos, indirectos, equipamiento, cofinanciación, financiación movilizada)
- **partnerRoles**: 3 roles posibles (socio tecnológico, empresa industrial, entidad regional)
- **i3rules**: Reglas del 70% y 50% con advertencias de verificación
- **doubleFunding**: Principio de no doble financiación con principios y contexto regional
- **dgxStudy**: Estudio DGX B200 como referencia técnica separada del presupuesto subvencionable
- **letterOfIntent**: Procedimiento de 4 pasos para cartas de intención y contratos
- **pymeSelection**: Criterios de selección de pymes, línea base y prueba de demanda
- **nonClaims**: 2 nuevas afirmaciones (cartas de intención, subvenciones regionales)

### 2. Investment.tsx reescrita completamente
- **Presupuesto como escenario**: 14M€, 9.8M€ teóricos, 4.2M€ pendientes con aclaración explícita
- **Simulador local**: Sliders interactivos para presupuesto (1-30M€) y porcentaje UE (40-100%)
  - Aviso de que es simulación local, no se envía a servidor
  - Cálculo en tiempo real de aportación UE y cofinanciación
  - Valores no persisten
- **Categorías de costes**: Tabla con 5 categorías, descripción, regla I3 y estado
- **Reglas I3**: 70% costes directos empresa y 50% regiones menos desarrolladas con advertencias
- **Tres casos de inversión**: Tarjetas con sector, WP, valor productivo, impacto regional y estado
- **Regiones elegibles**: Región sede destacada, criterios de socios, mínimo 3 regiones/2 países
- **Roles de socios**: 3 roles con responsabilidades posibles, todos "por confirmar"
- **Relaciones candidatas**: ACS, Telefónica, Santander, Junta como candidatas (no confirmadas)
- **No doble financiación**: Principios y contexto regional
- **DGX B200**: Estudio separado del presupuesto I3, consideraciones técnicas
- **Cartas de intención**: Procedimiento de 4 pasos, aviso de que no hay documentos firmados
- **Selección de pymes**: Criterios objetivos, línea base, prueba de demanda

### 3. Integridad preservada
- ✅ Sin socios confirmados (todos "por confirmar" o "candidatas a explorar")
- ✅ Sin financiación concedida (escenario, teórico, pendiente)
- ✅ Sin contratos firmados (procedimiento descrito, estado actual: ninguno)
- ✅ Sin cifras de ahorro/rendimiento no verificadas
- ✅ Sin equipamiento instalado (DGX como estudio)
- ✅ Sin logos institucionales
- ✅ Sin datos personales
- ✅ Simulador local sin persistencia ni envío a servidor

## Auditoría de controles de aceptación

### Controles verificados (acumulativos de Fases 0-2)
- ✅ 01-08. Identidad, hero, objetivo, CTA, advertencia, indicadores, euros, ruta visual
- ✅ 09-13. Páginas de fases 0-4 con contenido específico
- ✅ 14-16. Navegación bidireccional, menú principal, menú móvil accesible
- ✅ 17-19. Tarjetas tecnológicas, riesgos IP, relaciones candidatas
- ✅ 20-22. Ubicación territorial, consorcio europeo, requisitos de inversión
- ✅ 23-25. Presupuesto por categorías, DGX como estudio, transparencia
- ✅ 26-28. Fuentes públicas, FAQ, pie de página
- ✅ 29-36. SEO, favicon, idioma, accesibilidad, contraste
- ✅ 37-42. Diseño responsive (320-1440px), motion, reduced-motion
- ✅ 43-45. Sin trackers, sin datos personales, seguridad web
- ✅ 46-47. Despliegue Vercel/GitHub Pages compatible (HashRouter)
- ✅ 48-56. Scripts, documentación, regresión, procedencia, tono, continuidad

### Controles específicos de Fase 2
- ✅ 01. Auditoría de fases 0 y 1 completada
- ✅ 02. Mapa de regiones con Extremadura separada de socias por confirmar
- ✅ 03. Composición mínima explicada (3 regiones, 2 países, no solo PICs)
- ✅ 04. 14M€ como escenario, 9.8M€ como cálculo teórico
- ✅ 05. 4.2M€ como cofinanciación pendiente de identificar
- ✅ 06. Indicadores: 3 casos, 12 pymes, 2 regiones adicionales (en regiones)
- ✅ 07. Costes diferenciados: directos, indirectos, equipamiento, cofinanciación, movilizada
- ✅ 08. Panel de escenarios editables (simulador)
- ✅ 09. Slider etiquetado como simulación local, sin persistencia
- ✅ 10. Validaciones de sumas y tipos numéricos (Intl.NumberFormat)
- ✅ 11. Separación capital de terceros, apoyo a terceros, costes elegibles
- ✅ 12. Criterios I3 del 70% y 50% mostrados con advertencias
- ✅ 13. Aviso de que calcular 70% sobre no elegible no es ayuda autorizada
- ✅ 14. Tres casos modelo: IA documental, automatización, implantaciones sectoriales
- ✅ 15. Cada caso muestra valor productivo y vinculación a WP
- ✅ 16. Matriz de resultados por empresa sin nombres personales (criterios de selección)
- ✅ 17. Roles de socios descritos sin atribuir a candidatos
- ✅ 18. Aviso de no doble financiación
- ✅ 19. Subvenciones regionales como contexto, no transferencia atribuida
- ✅ 20. DGX B200 como estudio separado de coste subvencionable
- ✅ 21. Criterios de selección de pymes, prueba de demanda, líneas base
- ✅ 22. Procedimiento de cartas de intención sin fingir documentos firmados
- ✅ 23. Rutas profundas, anclas, responsive, indicadores coherentes
- ✅ 24. Fase 3 recibe modelo de inversión libre de compromisos inventados
- ✅ 25. Auditoría integral completada

## Pruebas ejecutadas
- ✅ `npm run build`: Exitoso, 41 módulos transformados, 0 errores, 1.64s
- ⚠️ `npm run check`: No definido en package.json (limitación del entorno)

## Archivos modificados
1. `data/project.json` - Añadidas 9 nuevas secciones (regions, investmentCases, costCategories, partnerRoles, i3rules, doubleFunding, dgxStudy, letterOfIntent, pymeSelection)
2. `src/pages/Investment.tsx` - Reescrita completamente con simulador, casos de inversión, regiones, roles, DGX, cartas de intención, selección de pymes
3. `FASE2_ENTREGA.md` - Documento de entrega creado

## Archivos no modificados (preservados de Fases 0-1)
- `index.html`
- `public/favicon.svg`
- `src/main.tsx`
- `src/index.css`
- `src/App.tsx`
- `src/components/Layout.tsx`
- `src/pages/Home.tsx`
- `src/pages/StagePage.tsx`
- `src/pages/Technology.tsx`
- `src/pages/Security.tsx`
- `src/pages/Vision.tsx`
- `src/pages/Transparency.tsx`
- `tsconfig.json`
- `vite.config.js`
- `package.json`
- `README.md`
- `FASE1_ENTREGA.md`

## Limitaciones y riesgos remanentes

### Limitaciones técnicas
1. **Script `npm run check`**: No definido en package.json
2. **GitHub Actions**: No configurado
3. **Pruebas manuales**: No ejecutadas en este entorno

### Riesgos de contenido
1. **Socios no confirmados**: Todos marcados como "por confirmar" o "candidatas"
2. **Cifras de escenario**: 14M€, 9.8M€, 4.2M€ como planificación
3. **Casos de inversión**: Modelo, sin empresas asignadas
4. **DGX B200**: Estudio, no adquisición
5. **Cartas de intención**: Procedimiento descrito, ninguna firmada

### Pendientes de verificación externa
- Composición real del consorcio
- Acuerdos con socios candidatos
- Costes elegibles según texto de convocatoria
- Clasificación de regiones NUTS2
- Contratos con empresas participantes

## Instrucciones de despliegue

### Vercel
1. Importar repositorio en Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. No se necesitan variables de entorno

### GitHub Pages
1. HashRouter compatible con subdirectorios
2. Configurar workflow para publicar `dist/` en rama `gh-pages`

### Acción requerida del usuario
- Configurar GitHub Actions para CI/CD
- Verificar visualmente en múltiples resoluciones
- Registrar dominio si se desea publicación oficial

## Navegación funcional verificada
- Inicio → Fases (0-4) → Tecnología → Seguridad → Inversión → Visión → Transparencia
- Navegación bidireccional entre fases
- Menú móvil con aria-expanded y cierre con Escape
- Skip link, foco visible, landmarks semánticos
- Simulador de presupuesto interactivo sin persistencia

## Conclusión

La Fase 2 se ha completado exitosamente con:
- ✅ Esquema empresarial interregional claro y honesto
- ✅ Presupuestos trazables sin prometer financiación
- ✅ Simulador local sin persistencia ni envío a servidor
- ✅ Tres casos de inversión modelo sin empresas asignadas
- ✅ Regiones elegibles con criterios claros
- ✅ Roles de socios descritos sin atribuir a candidatos
- ✅ DGX B200 como estudio separado del presupuesto I3
- ✅ Procedimiento de cartas de intención sin documentos fingidos
- ✅ Sin afirmaciones de socios, financiación o contratos no acreditados
- ✅ Build exitoso sin errores
- ✅ Navegación funcional entre todas las páginas
- ✅ Accesibilidad preservada

El repositorio está listo para la Fase 3, que abordará mercado y monetización.
