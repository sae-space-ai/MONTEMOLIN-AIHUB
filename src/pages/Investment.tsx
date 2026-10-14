import { Link } from 'react-router-dom';
import projectData from '../../data/project.json';

const { meta } = projectData;

function formatEUR(value: number): string {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 1 }).format(value);
}

export default function Investment() {
  return (
    <div>
      <div className="warning-banner mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-lg p-3 text-center" role="alert">
        <p className="font-semibold text-xs sm:text-sm">
          ⚠️ Cifras de escenario — Los importes son previsiones de planificación, no financiación concedida ni compromisos firmados.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-green-primary">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-black-deep font-medium">Inversión</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-black-deep">Inversión y presupuesto</h1>
          <p className="text-lg text-gray-600 mt-3">
            Desglose del escenario presupuestario del proyecto. Todas las cifras son estimaciones de planificación 
            sujetas a verificación con el texto vigente de la convocatoria y costes elegibles correctamente clasificados.
          </p>
        </header>

        <section aria-labelledby="budget-overview" className="mb-12">
          <h2 id="budget-overview" className="text-2xl font-bold text-black-deep mb-6">Resumen presupuestario</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-light rounded-xl p-6 border border-green-secondary/20">
              <div className="text-sm font-medium text-green-primary uppercase tracking-wide">Presupuesto total escenario</div>
              <div className="text-3xl font-bold text-black-deep mt-2">{formatEUR(meta.budgetScenarioEUR)}</div>
              <div className="text-sm text-gray-600 mt-2">Horizonte: {meta.durationMonths} meses</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Aportación europea teórica</div>
              <div className="text-3xl font-bold text-black-deep mt-2">{formatEUR(meta.euContributionIllustrativeEUR)}</div>
              <div className="text-sm text-gray-600 mt-2">70 % — no concedida</div>
            </div>
            <div className="bg-warning-bg rounded-xl p-6 border border-warning-border">
              <div className="text-sm font-medium text-warning-text uppercase tracking-wide">Cofinanciación</div>
              <div className="text-3xl font-bold text-black-deep mt-2">{formatEUR(meta.cofinancingNotCommittedEUR)}</div>
              <div className="text-sm text-warning-text mt-2">No comprometida</div>
            </div>
          </div>
        </section>

        <section aria-labelledby="investment-rules" className="mb-12">
          <h2 id="investment-rules" className="text-2xl font-bold text-black-deep mb-4">Reglas de inversión I3</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La convocatoria I3 establece umbrales mínimos de inversión empresarial y gasto regional que deben verificarse 
            con el texto vigente. Los porcentajes citados son reglas a comprobar, no certificaciones.
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-black-deep mb-2">70 % de costes directos elegibles</h3>
              <p className="text-sm text-gray-600">
                Destinados a inversiones empresariales. Los importes de terceros no son financiación comprometida sin prueba.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-black-deep mb-2">50 % de costes elegibles en regiones menos desarrolladas</h3>
              <p className="text-sm text-gray-600">
                Extremadura (ES43) está clasificada como región menos desarrollada. El gasto territorial debe ser trazable.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="budget-categories" className="mb-12">
          <h2 id="budget-categories" className="text-2xl font-bold text-black-deep mb-4">Categorías presupuestarias</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La diferenciación entre depreciación, gastos elegibles, indirectos y financiación es esencial para la 
            elegibilidad. Las cifras concretas por categoría están pendientes de consolidación en la Fase 0.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-light">
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200">Categoría</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200">Estado</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200">Observación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Equipamiento e infraestructura</td>
                  <td className="p-3 border border-gray-200"><span className="text-warning-text font-medium">Pendiente</span></td>
                  <td className="p-3 border border-gray-200 text-gray-600">Incluye estudio de viabilidad de DGX B200 como escenario de coste</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Personal (FTE)</td>
                  <td className="p-3 border border-gray-200"><span className="text-warning-text font-medium">Objetivo: 25 FTE</span></td>
                  <td className="p-3 border border-gray-200 text-gray-600">Meta de planificación, no empleos creados</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Subcontratación</td>
                  <td className="p-3 border border-gray-200"><span className="text-warning-text font-medium">Pendiente</span></td>
                  <td className="p-3 border border-gray-200 text-gray-600">Sujeto a reglas de elegibilidad</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Costes indirectos</td>
                  <td className="p-3 border border-gray-200"><span className="text-warning-text font-medium">Pendiente</span></td>
                  <td className="p-3 border border-gray-200 text-gray-600">Según reglas de la convocatoria</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="computing" className="mb-12">
          <h2 id="computing" className="text-2xl font-bold text-black-deep mb-4">Computación: estudio de viabilidad</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La posible incorporación de equipamiento de alto rendimiento (como NVIDIA DGX B200 o equivalente) se presenta 
            como un estudio de coste y viabilidad, nunca como equipamiento instalado o adquirido.
          </p>
          <div className="bg-green-light border border-green-primary/20 rounded-xl p-6">
            <h3 className="font-semibold text-black-deep mb-2">Criterio de transparencia</h3>
            <p className="text-sm text-gray-700">
              Cualquier referencia a hardware específico corresponde a un escenario de inversión por evaluar. 
              No se presenta como infraestructura disponible ni como resultado del proyecto.
            </p>
          </div>
        </section>

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
