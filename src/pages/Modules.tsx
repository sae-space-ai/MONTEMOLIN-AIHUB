import { Link } from 'react-router-dom';
import projectData from '../../data/project.json';

export default function Modules() {
  // Verificación de seguridad
  if (!projectData.modules || !projectData.modules.items) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error al cargar módulos</h1>
          <p className="text-gray-600">No se pudo cargar la información de los módulos.</p>
          <Link to="/" className="mt-6 inline-block text-green-primary hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const { modules } = projectData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Warning Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Módulos en definición.</strong> Los objetivos, tareas y evidencias están por completar. No representan compromisos firmados ni resultados alcanzados.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Migas de pan">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-green-primary">Inicio</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Módulos</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {modules.title}
          </h1>
          <p className="text-xl text-gray-600">
            {modules.description}
          </p>
        </header>

        {/* Overview Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Vista general</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.items.map((mod) => (
              <a
                key={mod.id}
                href={`#${mod.id}`}
                className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-green-primary hover:shadow-md transition-all no-underline"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">
                      {mod.location.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{mod.name}</h3>
                    <p className="text-xs text-gray-500">{mod.location}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{mod.focus}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    {mod.tracking.status}
                  </span>
                  <span className="text-xs text-gray-500">{mod.tracking.progress}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Detailed Module Cards */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fichas detalladas</h2>
          <div className="space-y-8">
            {modules.items.map((mod) => (
              <article
                key={mod.id}
                id={mod.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden scroll-mt-20"
              >
                {/* Module Header */}
                <div className="bg-green-50 border-b border-green-200 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 bg-green-primary text-white rounded-full flex items-center justify-center font-bold">
                      {mod.location.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{mod.name}</h3>
                      <p className="text-sm text-gray-600">{mod.location}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-green-primary mb-2">{mod.focus}</p>
                  <p className="text-gray-700">{mod.description}</p>
                </div>

                {/* Module Content */}
                <div className="p-6">
                  {/* Objectives */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="h-6 w-6 bg-green-primary text-white rounded-full flex items-center justify-center text-xs">✓</span>
                      Objetivos
                    </h4>
                    <ul className="space-y-2">
                      {mod.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-primary font-bold mt-0.5">{i + 1}.</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tasks */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="h-6 w-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-xs">📋</span>
                      Tareas
                    </h4>
                    <ul className="space-y-2">
                      {mod.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Evidence */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="h-6 w-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs">📊</span>
                      Evidencias requeridas
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {mod.evidence.map((ev, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <h5 className="font-semibold text-gray-900 text-sm mb-2">{ev.type}</h5>
                          <p className="text-xs text-gray-600 mb-2">{ev.description}</p>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                            {ev.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tracking */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="h-6 w-6 bg-green-primary text-white rounded-full flex items-center justify-center text-xs">📈</span>
                      Seguimiento
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">Estado</div>
                        <div className="font-semibold text-gray-900">{mod.tracking.status}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">Progreso</div>
                        <div className="font-semibold text-gray-900">{mod.tracking.progress}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">Próximo hito</div>
                        <div className="font-semibold text-gray-900 text-xs">{mod.tracking.nextMilestone}</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-green-200">
                      <div className="text-xs text-gray-600">
                        <strong>Última actualización:</strong> {mod.tracking.lastUpdate}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Integration Note */}
        <section className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Integración con MONTEMOLIN-AIHUB</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Estos cuatro módulos operativos se integran en la estructura del Hub como iniciativas territoriales 
            complementarias. Cada módulo contribuye a los objetivos generales del proyecto I3 en sus respectivas 
            áreas de especialización, manteniendo su autonomía operativa y su trazabilidad individual.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">Sinergia con fases del proyecto</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>• <strong>Fase 1:</strong> Aportación de casos de uso y validación tecnológica</li>
                <li>• <strong>Fase 2:</strong> Participación como empresas piloto en inversiones</li>
                <li>• <strong>Fase 3:</strong> Comercialización de soluciones desarrolladas</li>
                <li>• <strong>Fase 4:</strong> Contribución a sostenibilidad post-subvención</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">Gobernanza y seguimiento</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>• Cada módulo tiene responsable operativo propio</li>
                <li>• Reuniones de coordinación trimestrales</li>
                <li>• Informes de progreso integrados en reporting I3</li>
                <li>• Evidencias auditables y trazables</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              to="/tecnologia"
              className="flex items-center text-green-primary hover:text-green-secondary font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tecnología
            </Link>
            <Link
              to="/inversion"
              className="flex items-center text-green-primary hover:text-green-secondary font-semibold"
            >
              Inversión
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
