import { Link } from 'react-router-dom';

export default function Vision() {
  return (
    <div>
      <div className="warning-banner mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-lg p-3 text-center" role="alert">
        <p className="font-semibold text-xs sm:text-sm">
          ⚠️ Visión a largo plazo — AION ZERO y la gigafactoría son una estrategia industrial separada del proyecto I3.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-green-primary">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-black-deep font-medium">Visión</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-black-deep">Visión industrial AION ZERO</h1>
          <p className="text-lg text-gray-600 mt-3">
            Horizonte industrial a largo plazo que trasciende el alcance del proyecto I3. 
            Se describe como una aspiración estratégica, no como infraestructura aprobada ni presupuestada.
          </p>
        </header>

        <section aria-labelledby="separation" className="mb-12">
          <h2 id="separation" className="text-2xl font-bold text-black-deep mb-4">Separación del proyecto I3</h2>
          <div className="bg-green-light border border-green-primary/20 rounded-xl p-6 mb-6">
            <p className="text-gray-700 leading-relaxed">
              La visión de AION ZERO y una posible gigafactoría corresponde a un horizonte industrial distinto. 
              No puede verse ni presupuestarse como infraestructura I3 ya aprobada. El proyecto I3 tiene un alcance 
              de 30 meses y un presupuesto escenario de 14 millones de euros, orientado a capacidades empresariales 
              de IA, no a construcción de infraestructura computacional a escala.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-primary mb-2">Proyecto I3 (este proyecto)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Duración: 30 meses</li>
                <li>• Alcance: capacidades empresariales de IA</li>
                <li>• Presupuesto: 14 M€ escenario</li>
                <li>• Objetivo: pymes, pilotos, comercialización</li>
                <li>• Estado: en preparación</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-600 mb-2">AION ZERO (visión futura)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Horizonte: más allá del proyecto I3</li>
                <li>• Alcance: infraestructura computacional</li>
                <li>• Presupuesto: no definido en este proyecto</li>
                <li>• Sujeto a: ingeniería, demanda y financiación</li>
                <li>• Estado: aspiración estratégica</li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="gigafactory" className="mb-12">
          <h2 id="gigafactory" className="text-2xl font-bold text-black-deep mb-4">Gigafactoría: concepto separado</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El término «gigafactoría» se refiere a una posible instalación industrial de gran escala para producción 
            o procesamiento intensivo. En el contexto de este proyecto, se menciona como una posibilidad futura 
            que requiere:
          </p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-green-primary font-bold">•</span>
              Ingeniería detallada no realizada en el marco I3
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-primary font-bold">•</span>
              Demanda acreditada y contratos de servicio
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-primary font-bold">•</span>
              Financiación específica independiente
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-primary font-bold">•</span>
              Permisos, licencias y evaluación de impacto
            </li>
          </ul>
          <div className="mt-6 bg-warning-bg border border-warning-border rounded-lg p-5">
            <p className="text-sm text-warning-text">
              <strong>Nota de transparencia:</strong> No se presupuesta la gigafactoría dentro del proyecto I3. 
              Cualquier referencia corresponde a una visión industrial independiente que podría explorarse 
              en fases posteriores si se cumplen las condiciones de demanda y financiación.
            </p>
          </div>
        </section>

        <section aria-labelledby="continuity" className="mb-12">
          <h2 id="continuity" className="text-2xl font-bold text-black-deep mb-4">Continuidad postsubvención</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La Fase 4 del proyecto aborda la sostenibilidad del Hub después de la subvención. El plan de continuidad 
            se basa en ingresos reales, contratos verificados y capacidad de autofinanciación, no en compromisos presumidos.
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-black-deep mb-3">Criterios de sostenibilidad</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">✓</span>
                Ingresos recurrentes como hipótesis, no como certeza
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">✓</span>
                Propiedad y operación pendientes de definir
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">✓</span>
                Plan de inversión posterior basado en demanda acreditada
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">✓</span>
                Hoja de ruta industrial separada de la acción I3
              </li>
            </ul>
          </div>
        </section>

        <nav aria-label="Navegación contextual" className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/inversion" className="flex items-center gap-2 text-green-primary font-semibold hover:underline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Inversión
            </Link>
            <Link to="/transparencia" className="flex items-center gap-2 text-green-primary font-semibold hover:underline">
              Transparencia
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
