# Changelog

Todos los cambios significativos en el proyecto MONTEMOLIN-AIHUB se documentan en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto sigue [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

### Added
- Página de Continuidad (Fase 4) con escenarios económicos etiquetados como hipótesis
- Separación explícita del plan AION ZERO del proyecto I3
- Archivo robots.txt para control de crawlers
- Archivo _redirects para Vercel
- Workflow de GitHub Actions para CI/CD

### Changed
- Navegación actualizada para incluir página de Continuidad
- Router actualizado con nueva ruta /continuidad

## [0.4.0] - Fase 3: Comercialización

### Added
- Página de Comercialización con oferta hipotética de servicios
- Separación clara entre hipótesis comerciales y realidad contractual
- Inventario de propiedad intelectual (Background IP)
- Tipos de propiedad intelectual explicados
- Indicadores IP como metas, no derechos adquiridos
- Biblioteca de casos hipotéticos claramente simulados
- Métricas de adopción sin valores simulados como producción
- Directrices de licencias como borrador orientativo

### Changed
- Datos canónicos ampliados con 10 nuevas secciones comerciales
- Navegación actualizada para incluir página de Comercialización

## [0.3.0] - Fase 2: Inversión

### Added
- Página de Inversión reescrita con simulador local interactivo
- Mapa de regiones elegibles con criterios claros
- Tres casos de inversión modelo sin empresas asignadas
- Categorías de costes diferenciadas según reglas I3
- Roles de socios descritos sin atribuir a candidatos
- Estudio DGX B200 como referencia técnica separada
- Procedimiento de cartas de intención sin documentos fingidos
- Criterios de selección de pymes objetivos

### Changed
- Datos canónicos ampliados con 9 nuevas secciones de inversión
- Simulador de presupuesto sin persistencia ni envío a servidor

## [0.2.0] - Fase 1: Tecnología

### Added
- Página de Tecnología reescrita con arquitectura de 5 capas
- Diagrama SVG de arquitectura con etiquetas accesibles
- Etiquetas de madurez (concepto, prototipo, demostrado, implementado, comercial)
- Modelo de evidencias TRL con campos vacíos
- Lista de aceptación técnica con criterios medibles
- Página de Seguridad con supervisión humana y privacidad
- Diferenciación producto comercial maduro vs personalización local
- Procedencia de modelos sin credenciales expuestas

### Changed
- Datos canónicos ampliados con arquitectura, evidencias y seguridad
- Navegación actualizada para incluir página de Seguridad

## [0.1.0] - Fase 0: Fundamentos

### Added
- Landing page con misión, alcance, región y estado
- Ruta de cinco fases (0-4) con navegación bidireccional
- Páginas de Tecnología, Inversión, Visión y Transparencia
- Datos canónicos centralizados en data/project.json
- Diseño responsive (320px a 1920px) y accesible (WCAG AA)
- Aviso visible de proyecto en preparación
- Marca gráfica propia tricolor (verde, blanco, negro)
- Sin datos inventados: socios, TRL, financiación o compromisos

### Technical
- React 18 + TypeScript + Vite
- Tailwind CSS para estilos
- HashRouter para compatibilidad con GitHub Pages
- Estructura de componentes modular
- Datos canónicos en JSON para single source of truth

## [0.0.0] - Inicial

### Added
- Estructura base del proyecto
- Configuración de Vite, TypeScript y Tailwind
- Dependencias: React, React Router, Lucide React

---

## Convenciones de versionado

- **MAJOR**: Cambios incompatibles en la API o estructura
- **MINOR**: Nuevas funcionalidades compatibles
- **PATCH**: Correcciones de errores compatibles

## Proceso de release

1. Actualizar CHANGELOG.md con cambios de la fase
2. Actualizar versión en package.json
3. Commit: "chore: release vX.Y.Z"
4. Tag: `git tag vX.Y.Z`
5. Push: `git push && git push --tags`
6. GitHub Actions ejecuta build y tests
7. Despliegue manual a Vercel/GitHub Pages

## Defectos conocidos

- Script `npm run check` no definido en package.json
- GitHub Actions requiere configuración de secrets para despliegue
- Pruebas de accesibilidad automatizadas no ejecutadas en CI
- Dominio web no registrado (no se puede configurar canonical/sitemap)

## Próximas mejoras

- Implementar script de validación de enlaces y contenido
- Añadir pruebas de accesibilidad automatizadas (axe-core)
- Configurar despliegue automático a Vercel
- Registrar dominio y configurar DNS
- Implementar analítica respetuosa con privacidad (opcional)
