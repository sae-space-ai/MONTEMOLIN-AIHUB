# Checklist de revisión de Pull Request

Usa este checklist al crear o revisar un PR para el proyecto MONTEMOLIN-AIHUB.

## Contenido e integridad

- [ ] ¿Se han seguido las reglas de "NO INVENTAR"?
- [ ] ¿Todas las cifras tienen etiqueta de estado (escenario/objetivo/hipótesis/pendiente)?
- [ ] ¿Los datos provienen de `data/project.json` (single source of truth)?
- [ ] ¿No se han añadido socios confirmados sin evidencia?
- [ ] ¿No se han atribuido TRL sin verificación independiente?
- [ ] ¿La gigafactoría AION ZERO está claramente separada del proyecto I3?
- [ ] ¿No hay datos personales (emails, teléfonos, direcciones)?
- [ ] ¿No hay logos institucionales sin autorización?
- [ ] ¿Los casos de uso están etiquetados como "hipotéticos" si aplica?
- [ ] ¿Las tarifas comerciales están marcadas como "hipótesis" si no hay contratos?

## Accesibilidad

- [ ] ¿Los encabezados siguen jerarquía correcta (h1 → h2 → h3)?
- [ ] ¿Las imágenes tienen atributo `alt` descriptivo?
- [ ] ¿Los enlaces tienen texto descriptivo (no "click aquí")?
- [ ] ¿El sitio es navegable solo con teclado (Tab, Shift+Tab, Enter, Escape)?
- [ ] ¿El foco es visible en todos los elementos interactivos?
- [ ] ¿Los colores cumplen contraste AA (4.5:1 para texto normal)?
- [ ] ¿El menú móvil tiene `aria-expanded` y se cierra con Escape?
- [ ] ¿Hay skip link al contenido principal?
- [ ] ¿Las tablas tienen `caption` o `aria-label`?
- [ ] ¿Los `<details>` son accesibles nativamente?

## Responsive y diseño

- [ ] ¿Funciona en 320px (móvil pequeño)?
- [ ] ¿Funciona en 375px (móvil estándar)?
- [ ] ¿Funciona en 768px (tablet vertical)?
- [ ] ¿Funciona en 1024px (tablet horizontal/laptop)?
- [ ] ¿Funciona en 1440px (desktop)?
- [ ] ¿No hay scroll horizontal en ningún breakpoint?
- [ ] ¿Los botones tienen tamaño táctil adecuado (mínimo 44x44px)?
- [ ] ¿La tipografía es legible en móvil (mínimo 16px)?
- [ ] ¿Las tarjetas no se superponen en móvil?

## Rendimiento

- [ ] ¿El build funciona sin errores (`npm run build`)?
- [ ] ¿No se han añadido dependencias externas innecesarias?
- [ ] ¿No hay trackers, analítica invasiva o cookies no consentidas?
- [ ] ¿Las imágenes están optimizadas (formato adecuado, tamaño razonable)?
- [ ] ¿No hay código muerto o imports sin usar?
- [ ] ¿El CSS/JS no ha crecido significativamente sin justificación?

## SEO

- [ ] ¿El `<title>` es único y descriptivo por página?
- [ ] ¿El `<meta name="description">` es único por página?
- [ ] ¿El idioma está definido (`lang="es"`)?
- [ ] ¿El favicon es propio (no logos institucionales)?
- [ ] ¿No hay canonical pointing a dominio no registrado?
- [ ] ¿Los enlaces externos tienen `rel="noopener noreferrer"`?

## Seguridad

- [ ] ¿No hay secretos en el código (API keys, tokens, passwords)?
- [ ] ¿No hay scripts inline sin sanitizar?
- [ ] ¿Los formularios (si existen) tienen protección antiabuso?
- [ ] ¿No hay dependencias con vulnerabilidades conocidas?
- [ ] ¿El código está libre de XSS (no `dangerouslySetInnerHTML` sin sanitizar)?

## Navegación

- [ ] ¿Todos los enlaces tienen destino real (no `#` vacío)?
- [ ] ¿La navegación entre fases funciona (anterior/siguiente)?
- [ ] ¿El menú móvil abre y cierra correctamente?
- [ ] ¿Los backlinks funcionan en todas las páginas?
- [ ] ¿La ruta 0-4 está completa y en orden?

## Documentación

- [ ] ¿Se ha actualizado CHANGELOG.md?
- [ ] ¿Se ha actualizado README.md si aplica?
- [ ] ¿Los comentarios en código son claros y necesarios?
- [ ] ¿No hay TODOs ocultos que impliquen funcionalidad existente?

## Despliegue

- [ ] ¿El proyecto compila en GitHub Actions?
- [ ] ¿Funciona en Vercel (si se ha probado)?
- [ ] ¿Funciona en GitHub Pages (HashRouter)?
- [ ] ¿Las rutas profundas funcionan?

## Revisión final

- [ ] ¿He probado el sitio en navegador real (no solo build)?
- [ ] ¿He navegado con teclado todo el sitio?
- [ ] ¿He verificado que no hay textos que parezcan "resultados alcanzados" sin serlo?
- [ ] ¿He comprobado que la portada y las 5 fases siguen en producción?

---

**Si algún punto no cumple, NO aprobar el PR hasta que se corrija.**

La integridad del proyecto es más importante que la velocidad de entrega.
