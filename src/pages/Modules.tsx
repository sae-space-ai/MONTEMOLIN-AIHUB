import { Link } from 'react-router-dom';
import data from '../../data/project.json';

const modules = data.modules;

export default function Modules() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {modules.title}
          </h1>
          <p className="text-xl text-gray-600">
            {modules.description}
          </p>
        </div>

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
                <strong>Módulos en definición.</strong> Los objetivos, tareas y evidencias están por completar. No representan compromisos firmados ni resultados alcanzados.
              </p>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {modules.items.map((mod) => (
            <div key={mod.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Module Header */}
              <div className="bg-green-50 border-b border-green-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{mod.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{mod.location}</p>
                <p className="text-sm font-semibold text-green-primary">{mod.focus}</p>
              </div>

              {/* Module Content */}
              <div className="p-6">
                {/* Description */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Descripción</h3>
                  <p className="text-sm text-gray-700">{mod.description}</p>
                </div>

                {/* Objectives */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Objetivos</h3>
                  <ul className="space-y-1">
                    {mod.objectives.map((obj, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="text-green-primary font-bold mr-2">{i + 1}.</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tasks */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Tareas</h3>
                  <ul className="space-y-1">
                    {mod.tasks.map((task, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Evidence */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Evidencias Requeridas</h3>
                  <div className="space-y-2">
                    {mod.evidence.map((ev, i) => (
                      <div key={i} className="bg-gray-50 rounded p-3">
                        <div className="font-semibold text-sm text-gray-900">{ev.type}</div>
                        <div className="text-xs text-gray-600 mt-1">{ev.description}</div>
                        <div className="text-xs text-yellow-700 mt-1">Estado: {ev.status}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tracking */}
                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Seguimiento</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-xs text-gray-600">Estado</div>
                      <div className="font-semibold">{mod.tracking.status}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">Progreso</div>
                      <div className="font-semibold">{mod.tracking.progress}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">Próximo Hito</div>
                      <div className="font-semibold text-xs">{mod.tracking.nextMilestone}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">Última Actualización</div>
                      <div className="font-semibold text-xs">{mod.tracking.lastUpdate}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link to="/" className="text-green-primary hover:text-green-secondary font-semibold">
            ← Volver al inicio
          </Link>
          <Link to="/tecnologia" className="text-green-primary hover:text-green-secondary font-semibold">
            Ir a Tecnología →
          </Link>
        </div>
      </div>
    </div>
  );
}
