import { Link } from 'react-router-dom';
import projectData from '../../data/project.json';

const { commercialOffer, revenueCategories, unitEconomics, marketLaunch, backgroundIP, ipTypes, ipTargets, hypotheticalCases, adoptionMetrics, licensingGuidelines } = projectData;

export default function Commercial() {
  return (
    <div>
      <div className="warning-banner mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-lg p-3 text-center" role="alert">
        <p className="font-semibold text-xs sm:text-sm">
          ⚠️ Oferta hipotética — Los servicios, precios y casos descritos son previsiones de planificación. No constituyen oferta vinculante ni reflejan ventas realizadas.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-green-primary">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-black-deep font-medium">Comercialización</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-black-deep">Mercado y monetización</h1>
          <p className="text-lg text-gray-600 mt-3">
            Oferta comercial prevista, modelo de precios hipotético y control de propiedad intelectual. 
            Toda la información es orientativa y está sujeta a validación de mercado.
          </p>
        </header>

        {/* Commercial offer */}
        <section aria-labelledby="commercial-offer" className="mb-14">
          <h2 id="commercial-offer" className="text-2xl font-bold text-black-deep mb-3">
            {commercialOffer.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{commercialOffer.description}</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm text-yellow-800">
            <strong>Aviso:</strong> {commercialOffer.warning}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commercialOffer.services.map((service) => (
              <article key={service.name} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold bg-green-light text-green-primary px-2 py-0.5 rounded uppercase">
                    {service.category}
                  </span>
                  <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded uppercase">
                    {service.maturity}
                  </span>
                </div>
                <h3 className="font-bold text-black-deep mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <div className="text-xs mb-2">
                  <span className="font-semibold text-black-deep">Modelo de precio:</span>{' '}
                  <span className="text-gray-600">{service.pricingModel}</span>
                </div>
                <div className="text-xs mb-3">
                  <span className="font-semibold text-black-deep">Rango:</span>{' '}
                  <span className="text-gray-600">{service.priceRange}</span>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-medium">
                    {service.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Revenue categories */}
        <section aria-labelledby="revenue-categories" className="mb-14">
          <h2 id="revenue-categories" className="text-2xl font-bold text-black-deep mb-3">
            {revenueCategories.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{revenueCategories.description}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <caption className="sr-only">Clasificación de posibles fuentes de ingresos</caption>
              <thead>
                <tr className="bg-green-light">
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Categoría</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Descripción</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                {revenueCategories.categories.map((cat) => (
                  <tr key={cat.name} className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium text-black-deep">{cat.name}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{cat.description}</td>
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
        </section>

        {/* Unit economics */}
        <section aria-labelledby="unit-economics" className="mb-14">
          <h2 id="unit-economics" className="text-2xl font-bold text-black-deep mb-3">
            {unitEconomics.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{unitEconomics.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {unitEconomics.components.map((comp) => (
              <div key={comp.name} className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-black-deep text-sm mb-2">{comp.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{comp.description}</p>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                  {comp.status}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-warning-bg border border-warning-border rounded-lg p-4 text-sm text-warning-text">
            <strong>Importante:</strong> {unitEconomics.warning}
          </div>
        </section>

        {/* Market launch */}
        <section aria-labelledby="market-launch" className="mb-14">
          <h2 id="market-launch" className="text-2xl font-bold text-black-deep mb-3">
            {marketLaunch.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{marketLaunch.description}</p>
          <div className="bg-green-light border border-green-primary/20 rounded-xl p-6 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {marketLaunch.targetMonth}
              </div>
              <div>
                <div className="font-bold text-black-deep">{marketLaunch.targetDescription}</div>
                <div className="text-xs text-gray-600">{marketLaunch.status}</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-black-deep mb-3">Prerrequisitos</h3>
            <ul className="space-y-2">
              {marketLaunch.prerequisites.map((prereq, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-primary font-bold" aria-hidden="true">✓</span>
                  {prereq}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Background IP */}
        <section aria-labelledby="background-ip" className="mb-14">
          <h2 id="background-ip" className="text-2xl font-bold text-black-deep mb-3">
            {backgroundIP.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{backgroundIP.description}</p>
          <div className="space-y-4">
            {backgroundIP.assets.map((asset) => (
              <div key={asset.name} className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-black-deep">{asset.name}</h3>
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded uppercase">
                    {asset.type}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-semibold text-black-deep">Titular:</span>{' '}
                    <span className="text-gray-600">{asset.holder}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black-deep">Protección:</span>{' '}
                    <span className="text-gray-600">{asset.protection}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black-deep">Componentes de terceros:</span>{' '}
                    <span className="text-gray-600">{asset.thirdPartyComponents}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black-deep">Restricciones de reutilización:</span>{' '}
                    <span className="text-gray-600">{asset.reuseRestrictions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-warning-bg border border-warning-border rounded-lg p-4 text-sm text-warning-text">
            <strong>Advertencia:</strong> {backgroundIP.warning}
          </div>
        </section>

        {/* IP types */}
        <section aria-labelledby="ip-types" className="mb-14">
          <h2 id="ip-types" className="text-2xl font-bold text-black-deep mb-3">
            {ipTypes.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{ipTypes.description}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <caption className="sr-only">Diferencias entre formas de protección de propiedad intelectual</caption>
              <thead>
                <tr className="bg-green-light">
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Tipo</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Descripción</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Duración</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Estado actual</th>
                </tr>
              </thead>
              <tbody>
                {ipTypes.types.map((type) => (
                  <tr key={type.name} className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium text-black-deep">{type.name}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{type.description}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{type.duration}</td>
                    <td className="p-3 border border-gray-200">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">
                        {type.currentStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* IP targets */}
        <section aria-labelledby="ip-targets" className="mb-14">
          <h2 id="ip-targets" className="text-2xl font-bold text-black-deep mb-3">
            {ipTargets.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{ipTargets.description}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
            {ipTargets.targets.map((target) => (
              <div key={target.type} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-primary">{target.target}</div>
                <div className="text-xs text-gray-600 mt-1">{target.type}</div>
                <div className="text-xs text-gray-500 mt-2 italic">{target.note}</div>
              </div>
            ))}
          </div>
          <div className="bg-warning-bg border border-warning-border rounded-lg p-4 text-sm text-warning-text">
            <strong>Nota:</strong> {ipTargets.warning}
          </div>
        </section>

        {/* Hypothetical cases */}
        <section aria-labelledby="hypothetical-cases" className="mb-14">
          <h2 id="hypothetical-cases" className="text-2xl font-bold text-black-deep mb-3">
            {hypotheticalCases.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{hypotheticalCases.description}</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm text-yellow-800">
            <strong>Importante:</strong> {hypotheticalCases.warning}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hypotheticalCases.cases.map((c) => (
              <article key={c.id} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded uppercase">
                    {c.sector}
                  </span>
                  <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                    SIMULADO
                  </span>
                </div>
                <h3 className="font-bold text-black-deep mb-2 text-sm">{c.title}</h3>
                <p className="text-xs text-gray-600 mb-3">{c.scenario}</p>
                <div className="text-xs mb-3">
                  <span className="font-semibold text-black-deep">Resultado esperado:</span>{' '}
                  <span className="text-gray-600">{c.expectedOutcome}</span>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-xs text-yellow-800 italic">{c.disclaimer}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Adoption metrics */}
        <section aria-labelledby="adoption-metrics" className="mb-14">
          <h2 id="adoption-metrics" className="text-2xl font-bold text-black-deep mb-3">
            {adoptionMetrics.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{adoptionMetrics.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {adoptionMetrics.metrics.map((metric) => (
              <div key={metric.name} className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-black-deep mb-2">{metric.name}</h3>
                <p className="text-xs text-gray-600 mb-3">{metric.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-black-deep">Objetivo:</span>{' '}
                    <span className="text-gray-600">{metric.target}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black-deep">Actual:</span>{' '}
                    <span className="text-gray-600">{metric.current}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-warning-bg border border-warning-border rounded-lg p-4 text-sm text-warning-text">
            <strong>Advertencia:</strong> {adoptionMetrics.warning}
          </div>
        </section>

        {/* Licensing guidelines */}
        <section aria-labelledby="licensing-guidelines" className="mb-14">
          <h2 id="licensing-guidelines" className="text-2xl font-bold text-black-deep mb-3">
            {licensingGuidelines.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{licensingGuidelines.description}</p>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <h3 className="font-semibold text-black-deep mb-3">Principios orientativos</h3>
            <ul className="space-y-2">
              {licensingGuidelines.principles.map((principle, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-primary font-bold" aria-hidden="true">•</span>
                  {principle}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
            <strong>Aviso legal:</strong> {licensingGuidelines.warning}
            <div className="mt-2 text-xs">Estado: {licensingGuidelines.status}</div>
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
