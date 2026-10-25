import { Link } from 'react-router-dom';
import projectData from '../../data/project.json';

const { modules } = projectData;

export default function Modules() {
  return (
    <div>
      <div className="warning-banner mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-lg p-3 text-center" role="alert">
        <p className="font-semibold text-xs sm:text-sm">
          ⚠️ Módulos en definición — Los objetivos, tareas y evidencias están por completar. No representan compromisos firmados ni resultados alcanzados.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-green-primary">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-black-deep font-medium">Módulos</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-black-deep">{modules.title}</h1>
          <p className="text-lg text-gray-600 mt-3">{modules.description}</p>
        </header>

        {/* Overview cards */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-black-deep mb-4">Vista general</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.items.map((mod) => (
              <a
                key={mod.id}
                href={`#${mod.id}`}
                className="block bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-green-primary transition-colors no-underline"
              >
                <div className="text-xs font-bold text-green-primary uppercase tracking-wide mb-2">
                  {mod.location}
                </div>
                <h3 className="font-bold text-black-deep text-sm sm:text-base mb-2">{mod.name}</h3>
                <p className="text-xs text-gray-600 line-clamp-2">{mod.focus}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-medium">
                    {mod.tracking.status}
                  </span>
                  <span className="text-xs text-gray-500">{mod.tracking.progress}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Detailed modules */}
        <section>
          <h2 className="text-xl font-bold text-black-deep mb-6">Fichas detalladas</h2>
          <div className="space-y-8">
            {modules.items.map((mod) => (
              <article
                key={mod.id}
                id={mod.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden scroll-mt-20"
              >
                {/* Header */}
                <div className="bg-green-light border-b border-green-primary/20 p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-bold bg-green-primary text-white px-3 py-1 rounded-full uppercase">
                      {mod.location}
                    </span>
                    <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-3 py-1 rounded uppercase">
                      {mod.tracking.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-black-deep mb-2">{mod.name}</h3>
                  <p className="text-sm text-gray-700 font-medium mb-3">{mod.focus}</p>
                  <p className="text-gray-600 leading-relaxed">{mod.description}</p>
                </div>

                {/* Content grid */}
                <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Objectives */}
                  <div>
                    <h4 className="font-bold text-black-deep mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-green-primary text-white rounded-full flex items-center justify-center text-xs" aria-hidden="true">✓</span>
                      Objetivos
                    </h4>
                    <ul className="space-y-2">
                      {mod.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-primary font-bold mt-0.5" aria-hidden="true">{i + 1}.</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tasks */}
                  <div>
                    <h4 className="font-bold text-black-deep mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-xs" aria-hidden="true">📋</span>
                      Tareas
                    </h4>
                    <ul className="space-y-2">
                      {mod.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-gray-400 mt-0.5" aria-hidden="true">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Evidence */}
                  <div className="lg:col-span-2">
                    <h4 className="font-bold text-black-deep mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-warning-border text-white rounded-full flex items-center justify-center text-xs" aria-hidden="true">📊</span>
                      Evidencias requeridas
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {mod.evidence.map((ev, i) => (
                        <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                          <div className="font-semibold text-black-deep text-sm mb-1">{ev.type}</div>
                          <p className="text-xs text-gray-600 mb-2">{ev.description}</p>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-medium">
                            {ev.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tracking */}
                  <div className="lg:col-span-2 bg-green-light border border-green-primary/20 rounded-lg p-5">
                    <h4 className="font-bold text-black-deep mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-green-primary text-white rounded-full flex items-center justify-center text-xs" aria-hidden="true">📈</span>
                      Seguimiento
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">Estado</div>
                        <div className="font-semibold text-black-deep">{mod.tracking.status}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">Progreso</div>
                        <div className="font-semibold text-black-deep">{mod.tracking.progress}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">Próximo hito</div>
                        <div className="font-semibold text-black-deep text-xs sm:text-sm">{mod.tracking.nextMilestone}</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-green-primary/20">
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

        {/* Integration note */}
        <section className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-black-deep mb-3">Integración con MONTEMOLIN-AIHUB</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Estos cuatro módulos operativos se integran en la estructura del Hub como iniciativas territoriales 
            complementarias. Cada módulo contribuye a los objetivos generales del proyecto I3 en sus respectivas 
            áreas de especialización, manteniendo su autonomía operativa y su trazabilidad individual.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <h3 className="font-semibold text-black-deep mb-2">Sinergia con fases del proyecto</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>• <strong>Fase 1:</strong> Aportación de casos de uso y validación tecnológica</li>
                <li>• <strong>Fase 2:</strong> Participación como empresas piloto en inversiones</li>
                <li>• <strong>Fase 3:</strong> Comercialización de soluciones desarrolladas</li>
                <li>• <strong>Fase 4:</strong> Contribución a sostenibilidad post-subvención</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <h3 className="font-semibold text-black-deep mb-2">Gobernanza y seguimiento</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>• Cada módulo tiene responsable operativo propio</li>
                <li>• Reuniones de coordinación trimestrales</li>
                <li>• Informes de progreso integrados en reporting I3</li>
                <li>• Evidencias auditables y trazables</li>
              </ul>
            </div>
          </div>
        </section>

        <nav aria-label="Navegación contextual" className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/tecnologia" className="flex items-center gap-2 text-green-primary font-semibold hover:underline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tecnología
            </Link>
            <Link to="/inversion" className="flex items-center gap-2 text-green-primary font-semibold hover:underline">
              Inversión
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
