import { Link } from 'react-router-dom';
import projectData from '../../data/project.json';

const { products, architecture, evidenceModel, acceptanceCriteria, thirdPartyModels } = projectData;

const maturityColors: Record<string, string> = {
  concepto: 'bg-blue-100 text-blue-800',
  prototipo: 'bg-yellow-100 text-yellow-800',
  demostrado: 'bg-green-100 text-green-800',
  implementado: 'bg-emerald-100 text-emerald-800',
  comercial: 'bg-purple-100 text-purple-800',
};

export default function Technology() {
  return (
    <div>
      <div className="warning-banner mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-lg p-3 text-center" role="alert">
        <p className="font-semibold text-xs sm:text-sm">
          ⚠️ Estado de madurez no acreditado — Las líneas tecnológicas se describen como propuestas, no como productos verificados.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-green-primary">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-black-deep font-medium">Tecnología</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-black-deep">Ecosistema tecnológico</h1>
          <p className="text-lg text-gray-600 mt-3">
            Líneas de trabajo del Hub para capacidades de IA empresarial. Cada componente se describe con su estado real 
            de madurez, sin atribuir niveles TRL no demostrados. La tecnología financiada debe partir de TRL 6 como 
            condición, no como situación ya acreditada.
          </p>
        </header>

        {/* Maturity legend */}
        <section aria-labelledby="maturity-legend" className="mb-10">
          <h2 id="maturity-legend" className="text-lg font-bold text-black-deep mb-3">Escala de madurez editorial</h2>
          <p className="text-sm text-gray-600 mb-4">
            Cada componente se etiqueta con una de estas categorías. Ninguna implica certificación externa sin evidencia documentada.
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(maturityColors).map(([key, color]) => (
              <span key={key} className={`${color} px-3 py-1 rounded-full text-xs font-semibold uppercase`}>
                {key}
              </span>
            ))}
          </div>
        </section>

        {/* Product cards */}
        <section aria-labelledby="products-section" className="mb-14">
          <h2 id="products-section" className="text-2xl font-bold text-black-deep mb-6">Componentes del ecosistema</h2>
          <div className="space-y-6">
            {products.map((product) => (
              <article key={product.name} className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-black-deep">{product.name}</h3>
                  <span className="text-xs font-bold bg-green-light text-green-primary px-3 py-1 rounded-full uppercase">
                    {product.tag}
                  </span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${maturityColors[product.maturity] || 'bg-gray-100 text-gray-700'}`}>
                    {product.maturityLabel}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{product.text}</p>
                
                {/* Capabilities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-black-deep mb-2">Capacidades previstas</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-primary mt-1" aria-hidden="true">•</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Third-party dependencies */}
                <div className="mb-4 bg-gray-50 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-black-deep mb-1">Dependencias de terceros</h4>
                  <p className="text-xs text-gray-600">{product.thirdPartyDeps}</p>
                </div>

                {/* Evidence status */}
                <div className="bg-warning-bg border border-warning-border rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-warning-text flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold text-warning-text text-sm">Estado de evidencia:</span>
                      <p className="text-sm text-warning-text mt-1">{product.evidenceStatus}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section aria-labelledby="architecture-section" className="mb-14">
          <h2 id="architecture-section" className="text-2xl font-bold text-black-deep mb-3">
            {architecture.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{architecture.description}</p>
          
          {/* Visual architecture diagram */}
          <div className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 overflow-x-auto" role="img" aria-label="Diagrama de arquitectura de cinco capas: datos, recuperación RAG, razonamiento, supervisión y entrega">
            <ArchitectureDiagram />
          </div>

          {/* Layer details */}
          <div className="space-y-4">
            {architecture.layers.map((layer, i) => (
              <details key={layer.id} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-black-deep list-none">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-green-primary text-white rounded-full flex items-center justify-center text-sm font-bold" aria-hidden="true">
                      {i + 1}
                    </span>
                    <span>{layer.name}</span>
                  </div>
                  <svg className="w-5 h-5 text-green-primary group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 border-t border-gray-100">
                  <p className="text-sm text-gray-700 mt-3 mb-3">{layer.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs">
                    <div>
                      <span className="font-semibold text-black-deep">Estado:</span>{' '}
                      <span className="text-gray-600">{layer.status}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-black-deep">Componentes:</span>{' '}
                      <span className="text-gray-600">{layer.components}</span>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* TRL condition */}
        <section aria-labelledby="trl-condition" className="mb-14">
          <h2 id="trl-condition" className="text-2xl font-bold text-black-deep mb-4">
            TRL 6 como condición, no como situación acreditada
          </h2>
          <div className="bg-green-light border border-green-primary/20 rounded-xl p-6 mb-4">
            <p className="text-gray-700 leading-relaxed">
              La convocatoria I3 exige una solución empresarial con TRL inicial mínimo 6 comprobado. 
              <strong> Esto es un requisito que debe cumplirse, no una situación ya lograda.</strong> Los componentes 
              propios (ARCHEION, SAE, JOULE) no tienen TRL 6 acreditado. Se buscará una configuración de partida 
              con TRL 6 demostrado mediante evidencia independiente, posiblemente integrando productos comerciales 
              maduros de terceros con personalización local en Extremadura.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-black-deep mb-2">Diferenciación: producto maduro vs. personalización local</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-green-light rounded-lg p-3">
                <p className="font-semibold text-green-primary mb-1">Producto comercial maduro (terceros)</p>
                <p className="text-gray-700">LLM, embeddings y servicios cloud con TRL 6+ documentado por el proveedor. Licencia empresarial vigente.</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3">
                <p className="font-semibold text-yellow-800 mb-1">Personalización local (Extremadura)</p>
                <p className="text-gray-700">Adaptación, integración y supervisión humana desarrolladas en el Hub. Estado de madurez en validación.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence model */}
        <section aria-labelledby="evidence-model" className="mb-14">
          <h2 id="evidence-model" className="text-2xl font-bold text-black-deep mb-3">
            {evidenceModel.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{evidenceModel.description}</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <caption className="sr-only">Campos requeridos para acreditar TRL 6 o superior</caption>
              <thead>
                <tr className="bg-green-light">
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Campo</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Descripción</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200" scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                {evidenceModel.fields.map((field) => (
                  <tr key={field.name} className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium text-black-deep">{field.name}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{field.description}</td>
                    <td className="p-3 border border-gray-200">
                      <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-medium">
                        {field.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">
            Todos los campos están vacíos. Se completarán cuando exista documentación publicable verificable.
          </p>
        </section>

        {/* Acceptance criteria */}
        <section aria-labelledby="acceptance" className="mb-14">
          <h2 id="acceptance" className="text-2xl font-bold text-black-deep mb-3">
            {acceptanceCriteria.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">{acceptanceCriteria.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {acceptanceCriteria.items.map((item) => (
              <div key={item.criterion} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold bg-green-light text-green-primary px-2 py-0.5 rounded uppercase">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{item.criterion}</p>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Third-party models */}
        <section aria-labelledby="third-party" className="mb-14">
          <h2 id="third-party" className="text-2xl font-bold text-black-deep mb-3">
            {thirdPartyModels.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">{thirdPartyModels.description}</p>
          <p className="text-sm text-warning-text bg-warning-bg border border-warning-border rounded-lg p-3 mb-6">
            {thirdPartyModels.note}
          </p>
          
          <div className="space-y-4">
            {thirdPartyModels.categories.map((cat) => (
              <div key={cat.type} className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-black-deep mb-2">{cat.type}</h3>
                <p className="text-sm text-gray-700 mb-2">{cat.description}</p>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                  {cat.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Performance note */}
        <section aria-labelledby="performance" className="mb-14">
          <h2 id="performance" className="text-2xl font-bold text-black-deep mb-4">Rendimiento y eficiencia</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La optimización de recursos computacionales es un objetivo del proyecto. Sin embargo, 
            <strong> no se publican cifras de reducción de costes, latencia o consumo energético sin pruebas externas verificadas.</strong> Las 
            recomendaciones de rendimiento se basan en buenas prácticas de ingeniería, no en resultados medidos.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-black-deep mb-2">Prácticas previstas</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Perfilado continuo de consumo de recursos</li>
              <li>• Selección de modelos según relación coste/capacidad</li>
              <li>• Caché y reutilización de inferencias frecuentes</li>
              <li>• Monitorización de latencia y tasa de error</li>
              <li>• Evaluación periódica de alternativas más eficientes</li>
            </ul>
          </div>
        </section>

        {/* Computing note */}
        <section aria-labelledby="computing" className="mb-14">
          <h2 id="computing" className="text-2xl font-bold text-black-deep mb-4">Equipamiento computacional</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La posible incorporación de equipamiento de alto rendimiento (como NVIDIA DGX B200 o equivalente) se presenta 
            exclusivamente como un <strong>estudio de coste y viabilidad</strong>. No se ha adquirido ni instalado ningún 
            hardware de este tipo en Montemolín.
          </p>
          <div className="bg-warning-bg border border-warning-border rounded-lg p-5">
            <p className="text-sm text-warning-text">
              <strong>Aviso:</strong> No se muestran imágenes de servidores, racks o equipamiento como si fueran 
              instalaciones existentes. Cualquier visual de infraestructura corresponde a diagramas conceptuales de arquitectura.
            </p>
          </div>
        </section>

        {/* IP risks */}
        <section aria-labelledby="ip-risks" className="mb-14">
          <h2 id="ip-risks" className="text-2xl font-bold text-black-deep mb-4">Riesgos de propiedad intelectual</h2>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <span className="text-warning-text font-bold text-lg" aria-hidden="true">⚠</span>
              <div>
                <p className="font-semibold text-black-deep text-sm">Titularidad no confirmada</p>
                <p className="text-xs text-gray-600">Los derechos sobre componentes previos están en revisión</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <span className="text-warning-text font-bold text-lg" aria-hidden="true">⚠</span>
              <div>
                <p className="font-semibold text-black-deep text-sm">Licencias de terceros</p>
                <p className="text-xs text-gray-600">Por identificar y documentar conforme a uso real</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <span className="text-warning-text font-bold text-lg" aria-hidden="true">⚠</span>
              <div>
                <p className="font-semibold text-black-deep text-sm">Confidencialidad y NDA</p>
                <p className="text-xs text-gray-600">Acuerdos en revisión; no se publica documentación protegida</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <span className="text-warning-text font-bold text-lg" aria-hidden="true">⚠</span>
              <div>
                <p className="font-semibold text-black-deep text-sm">Derechos de explotación</p>
                <p className="text-xs text-gray-600">Pendientes de delimitar entre desarrollo propio y ajeno</p>
              </div>
            </div>
          </div>
        </section>

        <nav aria-label="Navegación contextual" className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/" className="flex items-center gap-2 text-green-primary font-semibold hover:underline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
            <div className="flex gap-4">
              <Link to="/seguridad" className="text-green-primary font-semibold hover:underline">
                Seguridad →
              </Link>
              <Link to="/inversion" className="text-green-primary font-semibold hover:underline">
                Inversión →
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <svg viewBox="0 0 600 340" className="w-full max-w-2xl mx-auto" role="img" aria-label="Diagrama de arquitectura de cinco capas">
      <title>Arquitectura de referencia: cinco capas de datos a entrega</title>
      
      {/* Layer 1: Data */}
      <rect x="20" y="20" width="560" height="50" rx="8" fill="#E8F5E9" stroke="#006B3F" strokeWidth="2" />
      <text x="300" y="50" textAnchor="middle" className="text-sm" fill="#1A1A1A" fontWeight="bold">Capa de datos — Ingesta, normalización, almacenamiento</text>
      
      {/* Arrow */}
      <path d="M300 70 L300 85" stroke="#006B3F" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Layer 2: Retrieval */}
      <rect x="20" y="85" width="560" height="50" rx="8" fill="#E8F5E9" stroke="#006B3F" strokeWidth="2" />
      <text x="300" y="115" textAnchor="middle" fill="#1A1A1A" fontWeight="bold">Capa de recuperación (RAG) — Indexación y búsqueda semántica</text>
      
      {/* Arrow */}
      <path d="M300 135 L300 150" stroke="#006B3F" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Layer 3: Reasoning */}
      <rect x="20" y="150" width="560" height="50" rx="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
      <text x="300" y="180" textAnchor="middle" fill="#1A1A1A" fontWeight="bold">Capa de razonamiento — LLM de terceros + personalización local</text>
      
      {/* Arrow */}
      <path d="M300 200 L300 215" stroke="#006B3F" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Layer 4: Supervision */}
      <rect x="20" y="215" width="560" height="50" rx="8" fill="#E8F5E9" stroke="#006B3F" strokeWidth="2" />
      <text x="300" y="245" textAnchor="middle" fill="#1A1A1A" fontWeight="bold">Capa de supervisión — Control humano, registro, evaluación</text>
      
      {/* Arrow */}
      <path d="M300 265 L300 280" stroke="#006B3F" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Layer 5: Delivery */}
      <rect x="20" y="280" width="560" height="50" rx="8" fill="#E8F5E9" stroke="#006B3F" strokeWidth="2" />
      <text x="300" y="310" textAnchor="middle" fill="#1A1A1A" fontWeight="bold">Capa de entrega — APIs, dashboards, integraciones empresariales</text>
      
      {/* Arrowhead marker */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#006B3F" />
        </marker>
      </defs>
      
      {/* Side labels */}
      <text x="10" y="175" fill="#525252" fontSize="10" transform="rotate(-90, 10, 175)">Flujo de datos</text>
    </svg>
  );
}
