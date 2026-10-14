import { useParams, Link, Navigate } from 'react-router-dom';
import projectData from '../../data/project.json';

const { stages } = projectData;

export default function StagePage() {
  const { stageId } = useParams<{ stageId: string }>();
  const stage = stages.find((s) => s.slug === stageId);

  if (!stage) {
    return <Navigate to="/" replace />;
  }

  const prevStage = stages.find((s) => s.id === stage.id - 1);
  const nextStage = stages.find((s) => s.id === stage.id + 1);

  return (
    <div>
      {/* Warning banner */}
      <div className="warning-banner mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-lg p-3 text-center" role="alert">
        <p className="font-semibold text-xs sm:text-sm">
          ⚠️ Fase propuesta — Los contenidos de esta página son objetivos de planificación, no resultados verificados.
        </p>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-green-primary">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-black-deep font-medium">Fase {stage.id}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="text-sm font-bold text-green-primary uppercase tracking-wide mb-2">
            Fase {stage.id} de 4 · {stage.workpacks}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-black-deep">{stage.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{stage.subtitle}</p>
          <p className="text-sm text-gray-500 mt-1">{stage.months}</p>
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-green-primary italic">
            «{stage.headline}»
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">{stage.description}</p>
        </header>

        {/* Goals */}
        <section aria-labelledby={`goals-${stage.id}`} className="mb-10">
          <h2 id={`goals-${stage.id}`} className="text-xl sm:text-2xl font-bold text-black-deep mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-green-primary text-white rounded-full flex items-center justify-center text-sm" aria-hidden="true">✓</span>
            Objetivos
          </h2>
          <ul className="space-y-3">
            {stage.goals.map((goal, i) => (
              <li key={i} className="flex items-start gap-3 bg-green-light rounded-lg p-4">
                <span className="w-6 h-6 bg-green-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5" aria-hidden="true">{i + 1}</span>
                <span className="text-gray-700">{goal}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Outputs */}
        <section aria-labelledby={`outputs-${stage.id}`} className="mb-10">
          <h2 id={`outputs-${stage.id}`} className="text-xl sm:text-2xl font-bold text-black-deep mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm" aria-hidden="true">📋</span>
            Entregables previstos
          </h2>
          <ul className="space-y-2">
            {stage.outputs.map((output, i) => (
              <li key={i} className="flex items-start gap-3 border-l-4 border-green-primary pl-4 py-1">
                <svg className="w-4 h-4 text-green-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{output}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Gates */}
        <section aria-labelledby={`gates-${stage.id}`} className="mb-10">
          <h2 id={`gates-${stage.id}`} className="text-xl sm:text-2xl font-bold text-black-deep mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-warning-border text-white rounded-full flex items-center justify-center text-sm" aria-hidden="true">🚧</span>
            Puertas de verificación
          </h2>
          <div className="bg-warning-bg border border-warning-border rounded-lg p-5">
            <ul className="space-y-2">
              {stage.gates.map((gate, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-warning-text">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                  </svg>
                  <span>{gate}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Navigation between stages */}
        <nav aria-label="Navegación entre fases" className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevStage ? (
              <Link
                to={`/fases/${prevStage.slug}`}
                className="flex items-center gap-2 text-green-primary font-semibold hover:underline"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Fase {prevStage.id}: {prevStage.title}
              </Link>
            ) : (
              <Link to="/" className="flex items-center gap-2 text-green-primary font-semibold hover:underline">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Volver al inicio
              </Link>
            )}
            {nextStage ? (
              <Link
                to={`/fases/${nextStage.slug}`}
                className="flex items-center gap-2 text-green-primary font-semibold hover:underline sm:text-right"
              >
                Fase {nextStage.id}: {nextStage.title}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <Link to="/vision" className="flex items-center gap-2 text-green-primary font-semibold hover:underline sm:text-right">
                Visión industrial AION ZERO
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </nav>
      </article>
    </div>
  );
}
