import { Link } from 'react-router-dom';
import projectData from '../../data/project.json';

const { meta, stages, metrics, sources, nonClaims, products } = projectData;

function formatEUR(value: number): string {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 1 }).format(value);
}

export default function Home() {
  return (
    <div>
      {/* Warning banner */}
      <div className="warning-banner mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-lg p-4 text-center" role="alert">
        <p className="font-semibold text-sm sm:text-base">
          ⚠️ Proyecto en preparación — {meta.status}
        </p>
        <p className="text-xs sm:text-sm mt-1">
          Este sitio tiene carácter demostrativo. No se ha concedido financiación europea.
        </p>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20" aria-labelledby="hero-title">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black-deep leading-tight">
            Capacidades de IA empresarial desde Extremadura hacia cadenas de valor europeas
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
            Una propuesta para construir un Hub de inteligencia artificial confiable en Montemolín, 
            región menos desarrollada (NUTS2 ES43), orientado a la innovación, implantación y 
            comercialización de soluciones de IA para pymes y empresas europeas.
          </p>
          <p className="mt-4 text-base text-gray-600">
            Misión: crear capacidades reales de adopción tecnológica en el territorio, conectando 
            regiones europeas mediante cooperación interregional y evidencia verificable.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/fases/0"
              className="inline-flex items-center px-6 py-3 bg-green-primary text-white font-semibold rounded-lg hover:bg-green-secondary transition-colors focus-visible:outline-offset-2"
            >
              Ver hoja de ruta (fases 0–4)
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/transparencia"
              className="inline-flex items-center px-6 py-3 border-2 border-green-primary text-green-primary font-semibold rounded-lg hover:bg-green-light transition-colors"
            >
              Qué es real y qué es objetivo
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-gray-50 py-12 sm:py-16" aria-labelledby="metrics-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="metrics-title" className="text-2xl sm:text-3xl font-bold text-center mb-3">
            Objetivos de planificación
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Las siguientes cifras son metas del proyecto propuesto, no resultados alcanzados ni compromisos firmados.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {metrics.map((metric) => (
              <article key={metric.name} className="metric-card rounded-xl p-5 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-primary">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{metric.unit}</div>
                <div className="font-semibold text-black-deep mt-2 text-sm sm:text-base">{metric.name}</div>
                <div className="text-xs text-gray-500 mt-1 italic">{metric.note}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Budget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16" aria-labelledby="budget-title">
        <h2 id="budget-title" className="text-2xl sm:text-3xl font-bold mb-6">
          Presupuesto: escenario, no compromiso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-light rounded-xl p-6 border border-green-secondary/20">
            <div className="text-sm font-medium text-green-primary uppercase tracking-wide">Presupuesto total</div>
            <div className="text-2xl sm:text-3xl font-bold text-black-deep mt-2">{formatEUR(meta.budgetScenarioEUR)}</div>
            <div className="text-sm text-gray-600 mt-2">Escenario de planificación a 30 meses</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Aportación europea</div>
            <div className="text-2xl sm:text-3xl font-bold text-black-deep mt-2">{formatEUR(meta.euContributionIllustrativeEUR)}</div>
            <div className="text-sm text-gray-600 mt-2">Teórica al 70 % — no concedida</div>
          </div>
          <div className="bg-warning-bg rounded-xl p-6 border border-warning-border">
            <div className="text-sm font-medium text-warning-text uppercase tracking-wide">Cofinanciación</div>
            <div className="text-2xl sm:text-3xl font-bold text-black-deep mt-2">{formatEUR(meta.cofinancingNotCommittedEUR)}</div>
            <div className="text-sm text-warning-text mt-2">No comprometida — pendiente de identificación</div>
          </div>
        </div>
      </section>

      {/* Stages roadmap */}
      <section className="bg-gray-50 py-12 sm:py-16" aria-labelledby="stages-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stages-title" className="text-2xl sm:text-3xl font-bold text-center mb-3">
            Hoja de ruta: cinco fases
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Secuencia de trabajo propuesta. Cada fase construye sobre la anterior y tiene puertas de verificación.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stages.map((stage) => (
              <Link
                key={stage.id}
                to={`/fases/${stage.slug}`}
                className="stage-card block bg-white rounded-lg p-5 no-underline hover:shadow-md transition-shadow"
              >
                <div className="text-xs font-bold text-green-primary uppercase tracking-wide">
                  Fase {stage.id}
                </div>
                <h3 className="font-bold text-black-deep mt-2 text-sm sm:text-base">{stage.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{stage.subtitle}</p>
                <p className="text-sm text-gray-600 mt-3 line-clamp-3">{stage.headline}</p>
                <div className="mt-3 text-xs text-green-primary font-medium">
                  Ver fase →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16" aria-labelledby="tech-title">
        <h2 id="tech-title" className="text-2xl sm:text-3xl font-bold mb-3">
          Ecosistema tecnológico
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Líneas de trabajo del Hub. Ninguna se presenta como producto maduro ni TRL 6 verificado sin evidencia independiente.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <article key={product.name} className="border border-gray-200 rounded-xl p-5 hover:border-green-primary/30 transition-colors">
              <div className="text-xs font-bold text-green-primary uppercase tracking-wide">{product.tag}</div>
              <h3 className="font-bold text-black-deep mt-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{product.text}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded uppercase font-semibold">
                  {product.maturity}
                </span>
              </div>
              <div className="mt-2 text-xs text-warning-text italic">
                {product.evidenceStatus}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/tecnologia" className="text-green-primary font-semibold hover:underline inline-flex items-center gap-1">
            Ver detalle tecnológico
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Non-claims / Transparency */}
      <section className="bg-black-deep text-white py-12 sm:py-16" aria-labelledby="claims-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="claims-title" className="text-2xl sm:text-3xl font-bold mb-8">
            Lo que este proyecto NO es
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nonClaims.map((claim, i) => (
              <li key={i} className="flex items-start gap-3 bg-gray-800 rounded-lg p-4">
                <svg className="w-5 h-5 text-green-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span className="text-sm text-gray-200">{claim}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link to="/transparencia" className="text-green-secondary font-semibold hover:underline inline-flex items-center gap-1">
              Ver transparencia completa
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16" aria-labelledby="sources-title">
        <h2 id="sources-title" className="text-2xl sm:text-3xl font-bold mb-6">
          Fuentes públicas de referencia
        </h2>
        <ul className="space-y-3">
          {sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-primary hover:underline font-medium inline-flex items-center gap-2"
              >
                {source.name}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12 sm:py-16" aria-labelledby="faq-title">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-title" className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-lg border border-gray-200 p-5">
              <summary className="font-semibold cursor-pointer text-black-deep list-none flex items-center justify-between">
                ¿Se ha concedido la financiación?
                <svg className="w-5 h-5 text-green-primary group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                No. El proyecto está en preparación. La convocatoria de referencia es I3-2026-INV2a y no se ha resuelto. 
                Las cifras de presupuesto son un escenario de planificación.
              </p>
            </details>
            <details className="group bg-white rounded-lg border border-gray-200 p-5">
              <summary className="font-semibold cursor-pointer text-black-deep list-none flex items-center justify-between">
                ¿Hay socios confirmados?
                <svg className="w-5 h-5 text-green-primary group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                La composición del consorcio está pendiente. Entidades como ACS, Telefónica, Banco Santander o la Junta de Extremadura 
                son candidatas a explorar, no socios confirmados. No se atribuyen compromisos, logos ni cartas de apoyo.
              </p>
            </details>
            <details className="group bg-white rounded-lg border border-gray-200 p-5">
              <summary className="font-semibold cursor-pointer text-black-deep list-none flex items-center justify-between">
                ¿Qué nivel TRL tienen ARCHEION, SAE y JOULE?
                <svg className="w-5 h-5 text-green-primary group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                No hay justificación suficiente para presentarlos como TRL 6 acreditado. Son líneas tecnológicas del ecosistema 
                en desarrollo. Se buscará una configuración de partida con TRL 6 demostrado mediante evidencia independiente.
              </p>
            </details>
            <details className="group bg-white rounded-lg border border-gray-200 p-5">
              <summary className="font-semibold cursor-pointer text-black-deep list-none flex items-center justify-between">
                ¿Qué es la gigafactoría AION ZERO?
                <svg className="w-5 h-5 text-green-primary group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                Es una visión industrial a largo plazo, separada del alcance financiable I3. No se presupuesta ni se presenta 
                como infraestructura aprobada dentro de este proyecto.
              </p>
            </details>
            <details className="group bg-white rounded-lg border border-gray-200 p-5">
              <summary className="font-semibold cursor-pointer text-black-deep list-none flex items-center justify-between">
                ¿Dónde se ubica el Hub?
                <svg className="w-5 h-5 text-green-primary group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                La sede territorial prevista es Montemolín, Badajoz, Extremadura (NUTS2 ES43), clasificada como región menos 
                desarrollada en el marco de cohesión de la Unión Europea.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
