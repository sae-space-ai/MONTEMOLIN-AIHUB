# Guía de publicación segura

Este documento establece los protocolos para publicar información en el sitio web de MONTEMOLIN-AIHUB sin comprometer la integridad del proyecto ni violar normativas.

## Principios fundamentales

### 1. NO INVENTAR
Nunca publicar información que no esté verificada o documentada:
- ❌ Subvenciones concedidas sin resolución oficial
- ❌ Acuerdos firmados sin contratos
- ❌ TRL acreditado sin evidencia independiente
- ❌ Cotizaciones oficiales sin presupuestos reales
- ❌ Clientes, empleos o facturación sin datos verificables
- ❌ Logos institucionales sin autorización

### 2. ETIQUETAR CORRECTAMENTE
Toda información debe tener su estado claramente identificado:
- ✅ **ESCENARIO**: Planificación interna, no compromiso
- ✅ **OBJETIVO**: Meta de planificación, no resultado
- ✅ **HIPÓTESIS**: Suposición por validar
- ✅ **PENDIENTE**: Información por confirmar
- ✅ **VERIFICADO**: Datos con evidencia documentada

### 3. PROTEGER DATOS SENSIBLES
Nunca publicar:
- ❌ Correos electrónicos privados
- ❌ Direcciones físicas de personas
- ❌ Números de teléfono personales
- ❌ PIC (Participant Identification Code) de la UE
- ❌ Borradores de propuestas
- ❌ Documentos confidenciales
- ❌ Credenciales de acceso (API keys, tokens)
- ❌ Código fuente protegido

## Checklist antes de publicar

### Contenido
- [ ] ¿Todas las cifras tienen etiqueta de estado (escenario/objetivo/hipótesis)?
- [ ] ¿Se han eliminado datos personales?
- [ ] ¿Los socios candidatos están marcados como "por confirmar"?
- [ ] ¿Los TRL están etiquetados como "no acreditado" si aplica?
- [ ] ¿La gigafactoría AION ZERO está separada del proyecto I3?
- [ ] ¿Hay aviso visible de "proyecto en preparación"?

### Técnico
- [ ] ¿El build funciona sin errores (`npm run build`)?
- [ ] ¿Todos los enlaces tienen destino real?
- [ ] ¿El menú móvil funciona con aria-expanded?
- [ ] ¿Las imágenes tienen alt descriptivo?
- [ ] ¿Los colores cumplen contraste AA?
- [ ] ¿No hay dependencias externas innecesarias?

### Legal
- [ ] ¿Se han revisado las licencias de terceros?
- [ ] ¿Hay acuerdo para usar logos/marcas si aplica?
- [ ] ¿Se ha consultado con asesoría jurídica si hay dudas?
- [ ] ¿Los términos y condiciones están actualizados?

### SEO y accesibilidad
- [ ] ¿Los metadatos title/description son únicos por página?
- [ ] ¿La jerarquía de encabezados es correcta (h1 → h2 → h3)?
- [ ] ¿El sitio es navegable solo con teclado?
- [ ] ¿Funciona con lectores de pantalla?
- [ ] ¿Es responsive en 320px, 768px y 1440px?

## Procedimiento de corrección

Si se detecta un error después de publicar:

1. **Identificar el error**: Documentar qué información es incorrecta
2. **Corregir en data/project.json**: Actualizar la fuente única de verdad
3. **Verificar propagación**: Comprobar que todas las páginas reflejan el cambio
4. **Documentar en CHANGELOG.md**: Registrar la corrección
5. **Rebuild y redespliegue**: `npm run build` y subir a producción
6. **Comunicar si es necesario**: Si el error era público, informar a stakeholders

## Clasificación de información

### Pública (sin restricciones)
- Misión y visión del proyecto
- Descripción de fases y objetivos
- Arquitectura tecnológica (sin código)
- Casos de uso hipotéticos (etiquetados)
- Fuentes públicas de referencia

### Interna (no publicar)
- Presupuestos detallados por partida
- Nombres de contactos específicos
- Estrategias competitivas
- Roadmaps no validados
- Métricas internas de rendimiento

### Confidencial (nunca publicar)
- Contratos firmados
- Acuerdos de confidencialidad (NDA)
- Credenciales de acceso
- Datos personales
- Propiedad intelectual no protegida
- Estrategias de negociación

## Responsabilidades

### Editor de contenido
- Revisar toda la información antes de publicar
- Verificar etiquetas de estado
- Comprobar que no hay datos sensibles
- Mantener CHANGELOG.md actualizado

### Desarrollador
- Asegurar que el build funciona
- Validar enlaces y navegación
- Comprobar accesibilidad
- Mantener documentación técnica

### Responsable legal
- Revisar implicaciones jurídicas
- Verificar cumplimiento de normativas
- Aprobar uso de marcas/logos
- Validar términos y condiciones

## Contacto para dudas

Si tienes dudas sobre si algo puede publicarse:
1. Consulta esta guía primero
2. Revisa el contrato transversal del repositorio
3. Contacta con el responsable legal del proyecto
4. En caso de duda, NO publicar

---

**Última actualización**: Fase 4 (2026)
**Versión**: 1.0
**Estado**: Vigente
