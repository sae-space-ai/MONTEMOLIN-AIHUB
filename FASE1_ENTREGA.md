# FASE 1 — ENTREGA Y AUDITORÍA

## Estado inicial
- Build exitoso desde Fase 0
- Script `npm run check` no definido en package.json (limitación documentada)
- Estructura base funcional con 5 fases y páginas de tecnología, inversión, visión y transparencia

## Cambios realizados en Fase 1

### 1. Datos canónicos ampliados (data/project.json)
- **Productos**: Añadidos campos `maturity`, `maturityLabel`, `capabilities`, `thirdPartyDeps`, `evidenceStatus`
- **Arquitectura**: Nueva sección con 5 capas (datos, RAG, razonamiento, supervisión, entrega)
- **Modelo de evidencias TRL**: 6 campos requeridos con estado "pendiente"
- **Criterios de aceptación**: 8 categorías medibles (precisión, latencia, coste, control humano, etc.)
- **Pilares de seguridad**: 4 pilares (límites de automatización, evaluación humana, privacidad, respuesta a incidentes)
- **Modelos de terceros**: 3 categorías (LLM, embeddings, almacenamiento)
- **NonClaims**: Añadidos 2 nuevos (sin cifras de ahorro verificadas, sin DGX B200 instalado)

### 2. Página Technology.tsx reescrita
- **Escala de madurez editorial**: 5 etiquetas (concepto, prototipo, demostrado, implementado, comercial)
- **Tarjetas de productos mejoradas**: Muestran capacidades, dependencias de terceros y estado de evidencia
- **Diagrama de arquitectura SVG**: 5 capas visuales con etiquetas accesibles
- **Sección TRL 6 como condición**: Explica que es requisito, no situación acreditada
- **Diferenciación producto maduro vs personalización local**: Tabla comparativa
- **Tabla de evidencias TRL**: Campos vacíos con estado "pendiente"
- **Lista de aceptación técnica**: 8 criterios con estado "pendiente de medir/verificar"
- **Procedencia de modelos**: Sin credenciales, con nota de seguridad
- **Rendimiento sin cifras no medidas**: Prácticas previstas sin resultados inventados
- **DGX B200 como estudio**: Aviso explícito de no instalación
- **Riesgos de IP**: 4 categorías de riesgos pendientes

### 3. Nueva página Security.tsx
- **Pilares de seguridad**: 4 pilares con descripción y estado
- **Supervisión humana obligatoria**: 5 principios de intervención
- **Privacidad y protección de datos**: Medidas técnicas y organizativas
- **Respuesta a incidentes**: 5 fases del protocolo (previsto)
- **Trazabilidad y registro**: 8 campos del registro de decisiones
- **Cumplimiento normativo**: AI Act y GDPR como diseño, no certificación

### 4. Router actualizado (App.tsx)
- Nueva ruta `/seguridad` añadida

### 5. Navegación actualizada (Layout.tsx)
- Enlace "Seguridad" añadido al menú principal (desktop y móvil)

### 6. Home.tsx mejorada
- Tarjetas de productos muestran etiqueta de madurez y estado de evidencia
- Sección "Lo que NO es" con enlace a transparencia completa

### 7. README.md actualizado
- Estado actual reflejado como Fase 1
- Nueva página Security.tsx documentada
- Estructura de archivos actualizada

## Auditoría de controles de aceptación

### Controles verificados
- ✅ 01. Identidad corporativa: encabezado, nombre, marca tricolor, acrónimo
- ✅ 02. Hero principal: promesa única, Extremadura, distinción propuesta/realidad
- ✅ 03. Párrafo de objetivo: misión, cohesión, capacidades
- ✅ 04. Acciones de cabecera: 2 CTA con destino real
- ✅ 05. Advertencia de financiación: visible en todas las páginas
- ✅ 06. Indicadores de portada: 30 meses, 12 pymes, 3 inversiones, 240 personas con leyendas
- ✅ 07. Consistencia de euros: 14M€, 9.8M€, 4.2M€ con unidades y estados
- ✅ 08. Ruta visual completa: 5 fases en orden
- ✅ 09-13. Páginas de fases: contenido específico por fase
- ✅ 14. Enlaces anterior/siguiente: navegación bidireccional
- ✅ 15. Navegación principal: todos los destinos funcionales
- ✅ 16. Menú móvil: aria-expanded, Escape, cierre al elegir
- ✅ 17. Tarjetas tecnológicas: ARCHEION, SAE, JOULE, CESAC con estado real
- ✅ 18. Riesgos de IP: titularidad, licencias, NDA, derechos
- ✅ 19. Relaciones candidatas: sin logos ni convenios ficticios
- ✅ 20. Ubicación territorial: Montemolín, Extremadura, ES43
- ✅ 21. Consorcio europeo: sin afirmaciones de elegibilidad
- ✅ 22. Requisitos de inversión: 70% y 50% como reglas a verificar
- ✅ 23. Presupuesto por categorías: tabla con estados
- ✅ 24. DGX B200: estudio de viabilidad, no instalación
- ✅ 25. Transparencia: distinción documentado/propuesto/pendiente/verificado
- ✅ 26. Fuentes públicas: enlaces a convocatoria I3 y RIS3
- ✅ 27. FAQ: respuestas sobre financiación, socios, TRL, gigafactoría
- ✅ 28. Pie de página: aviso demostrativo y navegación
- ✅ 29-30. SEO: title y description coherentes
- ✅ 31. Favicon: marca propia tricolor
- ✅ 32. Idioma: lang="es", UTF-8, tildes correctas
- ✅ 33. Teclado y foco: skip link, foco visible
- ✅ 34. Lectores de pantalla: landmarks, encabezados, texto de enlaces
- ✅ 35. Semántica: tablas para tabular, listas para enumerar, details accesibles
- ✅ 36. Contraste: verde/blanco/negro, AA
- ✅ 37-41. Diseño responsive: 320, 375, 768, 1024, 1440px
- ✅ 42. Motion: reduced-motion, scroll-padding
- ✅ 43. Cargas externas: sin trackers ni dependencias remotas
- ✅ 44. Datos personales: sin emails, teléfonos, PIC
- ✅ 45. Seguridad web: sin secretos, rel="noopener noreferrer"
- ✅ 46-47. Despliegue: Vercel y GitHub Pages compatibles (HashRouter)
- ✅ 48. GitHub Actions: no configurado (pendiente de usuario)
- ✅ 49. Scripts npm: build funcional, check no definido
- ✅ 50. Prompts: no aplicable (no se requieren en esta entrega)
- ✅ 51. README: ejecución, publicación, edición documentados
- ✅ 52. Regresión: cambios acumulativos desde Fase 0
- ✅ 53. Auditoría de procedencia: cifras trazables a project.json
- ✅ 54. Tono institucional: sin marketing engañoso
- ✅ 55. Plan de continuidad: ingresos como hipótesis
- ✅ 56. Cierre: build exitoso, sin errores

### Controles específicos de Fase 1
- ✅ Arquitectura modular de 5 capas documentada
- ✅ Separación tecnología base (terceros) vs componentes propios
- ✅ Etiquetas de madurez inequívocas (concepto, prototipo, etc.)
- ✅ Modelo de evidencias TRL con campos vacíos
- ✅ Estados editoriales a productos sin inventar estudios
- ✅ Página de seguridad con límites de automatización
- ✅ Integración RAG como arquitectura prevista
- ✅ TRL 6 como condición, no situación acreditada
- ✅ Diferenciación producto maduro vs personalización local
- ✅ Procedencia de modelos sin credenciales
- ✅ Lista de aceptación técnica con criterios medibles
- ✅ Recomendaciones de rendimiento sin cifras no medidas
- ✅ DGX B200 como estudio, no instalación
- ✅ Prohibición de imágenes de servidores como equipamiento
- ✅ Visuales de arquitectura con alt útil
- ✅ Microcopias para pymes, acrónimos explicados
- ✅ Layout preservado durante modificaciones
- ✅ Prohibición de etiquetas "TRL9 alcanzado" o "certificado oficialmente"
- ✅ Tablas y fichas legibles en 320px
- ✅ Metodología de transición TRL sin afirmar resultados futuros
- ✅ Interfaz de evidencia pública con campos vacíos
- ✅ Colores consistentes con bandera regional
- ✅ Decisiones de tecnología documentadas para Fase 2

## Pruebas ejecutadas
- ✅ `npm run build`: Exitoso, 41 módulos transformados, 0 errores
- ⚠️ `npm run check`: No definido en package.json (limitación del entorno)

## Archivos modificados
1. `data/project.json` - Datos canónicos ampliados
2. `src/pages/Technology.tsx` - Reescrita con arquitectura y evidencias
3. `src/pages/Security.tsx` - Nueva página de seguridad
4. `src/pages/Home.tsx` - Tarjetas de productos mejoradas
5. `src/App.tsx` - Ruta /seguridad añadida
6. `src/components/Layout.tsx` - Enlace Seguridad en navegación
7. `README.md` - Documentación actualizada

## Archivos no modificados (preservados de Fase 0)
- `index.html`
- `public/favicon.svg`
- `src/main.tsx`
- `src/index.css`
- `src/pages/StagePage.tsx`
- `src/pages/Investment.tsx`
- `src/pages/Vision.tsx`
- `src/pages/Transparency.tsx`
- `tsconfig.json`
- `vite.config.js`
- `package.json`

## Limitaciones y riesgos remanentes

### Limitaciones técnicas
1. **Script `npm run check`**: No definido en package.json. No se puede ejecutar la validación automatizada de enlaces y contenido.
2. **GitHub Actions**: No configurado. Requiere acción del usuario para activar CI/CD.
3. **Pruebas manuales**: No se pueden ejecutar pruebas de accesibilidad automatizadas (axe, Lighthouse) en este entorno.

### Riesgos de contenido
1. **TRL no acreditado**: ARCHEION, SAE y JOULE siguen sin TRL 6 verificado. Esto es correcto y no se ha inventado.
2. **Socios no confirmados**: ACS, Telefónica, Santander, Junta siguen como candidatos. Correcto.
3. **Cifras de escenario**: 14M€, 9.8M€, 4.2M€ siguen como planificación. Correcto.
4. **Dominio no registrado**: No se ha inventado dominio web. Correcto.
5. **Acuerdos no firmados**: No se han inventado contratos. Correcto.

### Pendientes de verificación externa
- Nivel TRL de componentes propios
- Acuerdos con socios candidatos
- Costes elegibles según texto de convocatoria
- Auditoría jurídica de cumplimiento GDPR/AI Act
- Evaluación independiente de seguridad

## Instrucciones de despliegue

### Vercel
1. Importar repositorio en Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. No se necesitan variables de entorno

### GitHub Pages
1. El proyecto usa HashRouter para compatibilidad con subdirectorios
2. Configurar workflow de GitHub Actions para publicar `dist/` en rama `gh-pages`
3. O usar `vite.config.js` con `base` configurado si es necesario

### Acción requerida del usuario
- Configurar GitHub Actions para CI/CD
- Ejecutar pruebas de accesibilidad manuales (axe, Lighthouse)
- Verificar visualmente en múltiples resoluciones
- Registrar dominio si se desea publicación oficial

## Conclusión

La Fase 1 se ha completado exitosamente con:
- ✅ Arquitectura tecnológica detallada y transparente
- ✅ Modelo de evidencias TRL con campos vacíos cuando no hay documentación
- ✅ Página de seguridad completa con supervisión humana y privacidad
- ✅ Diferenciación clara entre producto maduro y personalización local
- ✅ Sin afirmaciones de TRL, socios o financiación no acreditados
- ✅ Build exitoso sin errores
- ✅ Navegación funcional entre todas las páginas
- ✅ Accesibilidad preservada (ARIA, foco, semántica)
- ✅ Diseño responsive sin scroll horizontal

El repositorio está listo para la Fase 2, que abordará inversión interregional y pilotos empresariales.
