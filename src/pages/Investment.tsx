import { useState } from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../data/project.json';

const { meta, regions, investmentCases, costCategories, partnerRoles, i3rules, doubleFunding, dgxStudy, letterOfIntent, pymeSelection } = projectData;

function formatEUR(value: number): string {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
}

export default function Investment() {
  const [simBudget, setSimBudget] = useState(meta.budgetScenarioEUR);
  const [simEuRate, setSimEuRate] = useState(70);

  const simEu = Math.round(simBudget * (simEuRate / 100));
  const simCo = simBudget - simEu;

  return (
    <div>
      <div className="warning-banner mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-lg p-3 text-center" role="alert">
        <p className="font-semibold text-xs sm:text-sm">
          ⚠️ Cifras de escenario — Los importes son previsiones de planificación, no financiación concedida ni compromisos firmados.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-green-primary">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-black-deep font-medium">Inversión</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-black-deep">Inversión interregional</h1>
          <p className="text-lg text-gray-600 mt-3">
            Esquema empresarial interregional con presupuestos trazables. Todas las cifras son escenarios 
            de planificación sujetos a verificación con el texto vigente de la convocatoria I3.
          </p>
        </header>

        {/* Budget overview */}
        <section aria-labelledby="budget-overview" className="mb-12">
          <h2 id="budget-overview" className="text-2xl font-bold text-black-deep mb-6">Presupuesto: escenario, no compromiso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-light rounded-xl p-6 border border-green-secondary/20">
              <div className="text-sm font-medium text-green-primary uppercase tracking-wide">Presupuesto total</div>
              <div className="text-3xl font-bold text-black-deep mt-2">{formatEUR(meta.budgetScenarioEUR)}</div>
              <div className="text-sm text-gray-600 mt-2">Escenario de planificación a {meta.durationMonths} meses</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Aportación europea</div>
              <div className="text-3xl font-bold text-black-deep mt-2">{formatEUR(meta.euContributionIllustrativeEUR)}</div>
              <div className="text-sm text-gray-600 mt-2">Cálculo teórico al 70 % — no concedida</div>
            </div>
            <div className="bg-warning-bg rounded-xl p-6 border border-warning-border">
              <div className="text-sm font-medium text-warning-text uppercase tracking-wide">Cofinanciación</div>
              <div className="text-3xl font-bold text-black-deep mt-2">{formatEUR(meta.cofinancingNotCommittedEUR)}</div>
              <div className="text-sm text-warning-text mt-2">Pendiente de identificar y documentar</div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
            <strong>Aclaración:</strong> Los 14 M€ son un escenario interno. Los 9,8 M€ son un cálculo teórico 
            (70 % de 14 M€). Los 4,2 M€ de cofinanciación no están comprometidos. Ninguna cifra representa 
            financiación concedida.
          </div>
        </section>

        {/* Budget simulator */}
        <section aria-labelledby="simulator" className="mb-12">
          <h2 id="simulator" className="text-2xl font-bold text-black-deep mb-4">Simulador local de escenarios</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Herramienta de exploración local para visualizar cómo variarían los importes según diferentes 
            presupuestos y porcentajes. <strong>Los valores no se envían a ningún servidor ni alteran la solicitud europea.</strong>
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-xs text-yellow-800">
              ⚠️ Simulación local — Los números que introduzcas no se guardan ni se transmiten. No modifican 
              ninguna solicitud presentada ante la Comisión Europea.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="budget-slider" className="block text-sm font-semibold text-black-deep mb-2">
                  Presupuesto total escenario (€)
                </label>
                <input
                  id="budget-slider"
                  type="range"
                  min={1000000}
                  max={30000000}
                  step={100000}
                  value={simBudget}
                  onChange={(e) => setSimBudget(Number(e.target.value))}
                  className="w-full accent-green-primary"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 M€</span>
                  <span className="font-bold text-green-primary">{formatEUR(simBudget)}</span>
                  <span>30 M€</span>
                </div>
              </div>
              <div>
                <label htmlFor="rate-slider" className="block text-sm font-semibold text-black-deep mb-2">
                  Porcentaje teórico de financiación UE (%)
                </label>
                <input
                  id="rate-slider"
                  type="range"
                  min={40}
                  max={100}
                  step={5}
                  value={simEuRate}
                  onChange={(e) => setSimEuRate(Number(e.target.value))}
                  className="w-full accent-green-primary"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>40 %</span>
                  <span className="font-bold text-green-primary">{simEuRate} %</span>
                  <span>100 %</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-xs text-gray-600 uppercase tracking-wide">Aportación UE teórica</div>
                <div className="text-2xl font-bold text-black-deep mt-1">{formatEUR(simEu)}</div>
                <div className="text-xs text-gray-500 mt-1">{simEuRate} % de {formatEUR(simBudget)}</div>
              </div>
              <div className="bg-warning-bg rounded-lg p-4">
                <div className="text-xs text-warning-text uppercase tracking-wide">Cofinanciación necesaria</div>
                <div className="text-2xl font-bold text-black-deep mt-1">{formatEUR(simCo)}</div>
                <div className="text-xs text-warning-text mt-1">Pendiente de identificar fuentes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost categories */}
        <section aria-labelledby="cost-categories" className="mb-12">
          <h2 id="cost-categories" className="text-2xl font-bold text-black-deep mb-3">
            {costCategories.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{costCategories.description}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <caption className="sr-only">{costCategories.title}</caption>
              <thead>
                <tr className="bg-green-light">
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Categoría</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Descripción</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Regla I3</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                {costCategories.categories.map((cat) => (
                  <tr key={cat.name} className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium text-black-deep">{cat.name}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{cat.description}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{cat.i3Rule}</td>
                    <td className="p-3 border border-gray-200">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">
                        {cat.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-warning-bg border border-warning-border rounded-lg p-4 text-sm text-warning-text">
            <strong>Importante:</strong> {costCategories.importantNote}
          </div>
        </section>

        {/* I3 rules */}
        <section aria-labelledby="i3-rules" className="mb-12">
          <h2 id="i3-rules" className="text-2xl font-bold text-black-deep mb-3">
            {i3rules.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{i3rules.description}</p>
          <div className="space-y-4">
            {i3rules.rules.map((rule) => (
              <div key={rule.rule} className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-black-deep mb-2">{rule.rule}</h3>
                <p className="text-sm text-gray-700 mb-2">{rule.description}</p>
                <div className="text-xs text-gray-600 mb-2">
                  <strong>Verificación:</strong> {rule.verification}
                </div>
                <div className="bg-warning-bg rounded p-2 text-xs text-warning-text">
                  ⚠️ {rule.warning}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Investment cases */}
        <section aria-labelledby="investment-cases" className="mb-12">
          <h2 id="investment-cases" className="text-2xl font-bold text-black-deep mb-3">
            {investmentCases.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{investmentCases.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {investmentCases.cases.map((c) => (
              <article key={c.id} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-green-primary text-white rounded-full flex items-center justify-center text-sm font-bold" aria-hidden="true">
                    {c.id.split('-')[1]}
                  </span>
                  <span className="text-xs font-bold bg-green-light text-green-primary px-2 py-0.5 rounded uppercase">
                    {c.sector}
                  </span>
                </div>
                <h3 className="font-bold text-black-deep mb-2 text-sm">{c.name}</h3>
                <p className="text-xs text-gray-600 mb-3">{c.description}</p>
                <div className="text-xs mb-2">
                  <span className="font-semibold text-black-deep">WP:</span>{' '}
                  <span className="text-gray-600">{c.workpack}</span>
                </div>
                <div className="mb-3">
                  <div className="text-xs font-semibold text-black-deep mb-1">Valor productivo previsto</div>
                  <ul className="space-y-1">
                    {c.expectedValue.map((v, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                        <span className="text-green-primary" aria-hidden="true">•</span>
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-xs mb-2">
                  <span className="font-semibold text-black-deep">Impacto regional:</span>{' '}
                  <span className="text-gray-600">{c.regionalImpact}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-medium">
                    {c.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Regions */}
        <section aria-labelledby="regions-section" className="mb-12">
          <h2 id="regions-section" className="text-2xl font-bold text-black-deep mb-3">
            {regions.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{regions.description}</p>
          
          {/* Lead region */}
          <div className="bg-green-light border border-green-primary/20 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold bg-green-primary text-white px-2 py-0.5 rounded uppercase">
                Región sede
              </span>
              <span className="text-xs text-gray-600">{regions.leadRegion.classification}</span>
            </div>
            <h3 className="text-xl font-bold text-black-deep">{regions.leadRegion.name}</h3>
            <div className="text-sm text-gray-600 mt-1">
              NUTS2 {regions.leadRegion.nuts2} · {regions.leadRegion.country}
            </div>
            <p className="text-sm text-gray-700 mt-3">{regions.leadRegion.role}</p>
          </div>

          {/* Partner regions */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4">
            <h3 className="font-bold text-black-deep mb-3">Regiones socias (por confirmar)</h3>
            <p className="text-sm text-gray-700 mb-3">{regions.partnerRegions.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-primary">{regions.partnerRegions.minimumRequired.regions}</div>
                <div className="text-xs text-gray-600">Regiones NUTS2 mínimo</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-primary">{regions.partnerRegions.minimumRequired.countries}</div>
                <div className="text-xs text-gray-600">Países mínimo</div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-black-deep mb-2">Criterios de elegibilidad</h4>
              <ul className="space-y-1 text-xs text-gray-700">
                {regions.partnerRegions.criteria.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-primary" aria-hidden="true">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
            <strong>Nota:</strong> {regions.importantNote}
          </div>
        </section>

        {/* Partner roles */}
        <section aria-labelledby="partner-roles" className="mb-12">
          <h2 id="partner-roles" className="text-2xl font-bold text-black-deep mb-3">
            {partnerRoles.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{partnerRoles.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {partnerRoles.roles.map((r) => (
              <div key={r.role} className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-black-deep mb-2">{r.role}</h3>
                <p className="text-xs text-gray-600 mb-3">{r.description}</p>
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-black-deep mb-1">Responsabilidades posibles</h4>
                  <ul className="space-y-1">
                    {r.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                        <span className="text-green-primary" aria-hidden="true">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  {r.assignedTo}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Candidate relationships */}
        <section aria-labelledby="candidates" className="mb-12">
          <h2 id="candidates" className="text-2xl font-bold text-black-deep mb-4">Relaciones institucionales candidatas</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Las siguientes entidades son candidatas a explorar colaboración. No se les atribuye presupuesto, 
            financiación, logos, frases, contactos, consentimientos, cartas de apoyo, compromisos ni marcas como aval.
          </p>
          <div className="bg-warning-bg border border-warning-border rounded-lg p-5">
            <ul className="space-y-2 text-sm text-warning-text">
              <li>• <strong>ACS</strong> — Candidata a explorar, no socia confirmada</li>
              <li>• <strong>Telefónica</strong> — Candidata a explorar, no socia confirmada</li>
              <li>• <strong>Banco Santander</strong> — Candidata a explorar, no socia confirmada</li>
              <li>• <strong>Junta de Extremadura / FUNDECYT-PCTEX</strong> — Candidata a explorar, no socia confirmada</li>
            </ul>
            <p className="text-xs text-warning-text mt-3 italic">
              La composición jurídica del consorcio sigue pendiente. No se publican datos personales ni correos de expedientes.
            </p>
          </div>
        </section>

        {/* Double funding */}
        <section aria-labelledby="double-funding" className="mb-12">
          <h2 id="double-funding" className="text-2xl font-bold text-black-deep mb-3">
            {doubleFunding.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{doubleFunding.description}</p>
          <ul className="space-y-2 mb-4">
            {doubleFunding.principles.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-primary font-bold" aria-hidden="true">✓</span>
                {p}
              </li>
            ))}
          </ul>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
            <strong>Contexto regional:</strong> {doubleFunding.regionalContext}
          </div>
        </section>

        {/* DGX study */}
        <section aria-labelledby="dgx-study" className="mb-12">
          <h2 id="dgx-study" className="text-2xl font-bold text-black-deep mb-3">
            {dgxStudy.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{dgxStudy.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-black-deep mb-2">Naturaleza</h3>
              <p className="text-sm text-gray-700">{dgxStudy.nature}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-black-deep mb-2">Separación del presupuesto I3</h3>
              <p className="text-sm text-gray-700">{dgxStudy.separation}</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-black-deep mb-2">Consideraciones del estudio</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dgxStudy.considerations.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-primary" aria-hidden="true">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-800">
            Estado: {dgxStudy.status}
          </div>
        </section>

        {/* Letter of intent */}
        <section aria-labelledby="loi" className="mb-12">
          <h2 id="loi" className="text-2xl font-bold text-black-deep mb-3">
            {letterOfIntent.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{letterOfIntent.description}</p>
          <div className="space-y-3 mb-4">
            {letterOfIntent.process.map((step, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                <span className="w-8 h-8 bg-green-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-black-deep text-sm">{step.step}</h3>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-warning-bg border border-warning-border rounded-lg p-4 text-sm text-warning-text">
            <strong>{letterOfIntent.warning}</strong>
            <div className="mt-2 text-xs">Estado actual: {letterOfIntent.currentStatus}</div>
          </div>
        </section>

        {/* PYME selection */}
        <section aria-labelledby="pyme-selection" className="mb-12">
          <h2 id="pyme-selection" className="text-2xl font-bold text-black-deep mb-3">
            {pymeSelection.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{pymeSelection.description}</p>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <h3 className="font-semibold text-black-deep mb-3">Criterios objetivos</h3>
            <ul className="space-y-2">
              {pymeSelection.criteria.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-primary font-bold" aria-hidden="true">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-light rounded-lg p-4">
              <h3 className="font-semibold text-black-deep text-sm mb-1">Línea base</h3>
              <p className="text-xs text-gray-700">{pymeSelection.baseline}</p>
            </div>
            <div className="bg-green-light rounded-lg p-4">
              <h3 className="font-semibold text-black-deep text-sm mb-1">Prueba de demanda</h3>
              <p className="text-xs text-gray-700">{pymeSelection.demandProof}</p>
            </div>
          </div>
        </section>

        <nav aria-label="Navegación contextual" className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/tecnologia" className="flex items-center gap-2 text-green-primary font-semibold hover:underline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tecnología
            </Link>
            <Link to="/vision" className="flex items-center gap-2 text-green-primary font-semibold hover:underline">
              Visión industrial
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
