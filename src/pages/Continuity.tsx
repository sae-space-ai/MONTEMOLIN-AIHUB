import { Link } from 'react-router-dom';

export default function Continuity() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Migas de pan">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-green-primary">Inicio</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Continuidad</li>
          </ol>
        </nav>

        {/* Warning Banner */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Proyecto en preparación.</strong> Esta página describe planes futuros de sostenibilidad post-subvención. Ningún ingreso, contrato o infraestructura está confirmado.
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Continuidad y escalado
          </h1>
          <p className="text-xl text-gray-600">
            Un Hub sostenible más allá de la ayuda
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Comprobar resultados, contratos y capacidad de financiar la operación. La expansión computacional hacia AION ZERO y una eventual gigafactoría es una estrategia industrial separada, sujeta a ingeniería, demanda y financiación específicas.
          </p>
        </header>

        {/* Objetivos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Objetivos de la Fase 4</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Definir operador y gobernanza</h3>
              <p className="text-gray-700 text-sm">
                Establecer quién operará el Hub después de la subvención, modelo de propiedad, mantenimiento y costes recurrentes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Documentar impactos reales</h3>
              <p className="text-gray-700 text-sm">
                Registrar empleo generado, pymes beneficiadas y cadenas de valor europeas impactadas con evidencia verificable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Plan de inversión posterior</h3>
              <p className="text-gray-700 text-sm">
                Diseñar roadmap de inversión basado en demanda acreditada, no en suposiciones.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Separar gigafactoría del proyecto I3</h3>
              <p className="text-gray-700 text-sm">
                Mantener hoja de ruta industrial AION ZERO claramente diferenciada de la acción I3 financiada.
              </p>
            </div>
          </div>
        </section>

        {/* Entregables */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Entregables previstos</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">Plan de sostenibilidad y explotación postsubvención</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">Informe de impacto con recomendaciones públicas</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">Mapa de financiación posterior sin compromisos presumidos</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">Hoja de ruta industrial AION ZERO independiente</span>
            </li>
          </ul>
        </section>

        {/* Puertas de verificación */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Puertas de verificación</h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800"><strong>Ingresos y financiación del siguiente ciclo fundamentados</strong> en contratos reales, no en proyecciones</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800"><strong>No confundir infraestructura futura con resultados ya construidos</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800"><strong>Aprobación y publicación de resultados solo con evidencia</strong> verificable independiente</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Separación AION ZERO */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Separación del plan AION ZERO</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-blue-200">
            <div className="flex items-start mb-6">
              <svg className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visión industrial independiente</h3>
                <p className="text-gray-700">
                  AION ZERO representa una expansión computacional a largo plazo que <strong>no está incluida en el presupuesto I3</strong> de 14M€. Es una estrategia industrial separada que requiere:
                </p>
              </div>
            </div>
            <ul className="space-y-2 ml-12 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Ingeniería específica no desarrollada en el marco I3</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Demanda acreditada mediante contratos de servicio</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Financiación independiente (no subvención I3)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Permisos, licencias y evaluaciones de impacto propias</span>
              </li>
            </ul>
            <div className="mt-6 ml-12 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Nota de transparencia:</strong> La gigafactoría es una aspiración industrial futura. No se presupuesta dentro del proyecto I3 actual.
              </p>
            </div>
          </div>
        </section>

        {/* Escenarios de continuidad */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Escenarios de continuidad económica</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-700 font-bold">C</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Conservador</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Escenario de mínima actividad con mantenimiento básico del Hub.
              </p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Operación reducida</li>
                <li>• Ingresos mínimos de licencias</li>
                <li>• Sin expansión de infraestructura</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-xs text-gray-500 italic">Etiqueta: HIPÓTESIS</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-green-300">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-700 font-bold">B</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Base</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Escenario esperado si se cumplen objetivos de adopción.
              </p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Operación plena del Hub</li>
                <li>• Ingresos recurrentes de servicios</li>
                <li>• Crecimiento moderado</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-xs text-gray-500 italic">Etiqueta: HIPÓTESIS</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-700 font-bold">A</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Alto</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Escenario optimista con alta demanda y expansión.
              </p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Operación expandida</li>
                <li>• Ingresos significativos</li>
                <li>• Posible inicio AION ZERO</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-xs text-gray-500 italic">Etiqueta: HIPÓTESIS</span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 italic">
            Todos los escenarios son hipótesis de planificación. No representan compromisos financieros ni proyecciones garantizadas.
          </p>
        </section>

        {/* Workpacks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Workpacks asociados</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-800 font-mono text-lg">WP5 · WP6</p>
            <p className="text-sm text-gray-600 mt-2">
              WP5: Continuidad y escalado | WP6: Gestión del proyecto
            </p>
          </div>
        </section>

        {/* Navigation */}
        <nav className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              to="/comercializacion"
              className="flex items-center text-green-primary hover:text-green-secondary font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Comercialización
            </Link>
            <Link
              to="/vision"
              className="flex items-center text-green-primary hover:text-green-secondary font-semibold"
            >
              Visión
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
