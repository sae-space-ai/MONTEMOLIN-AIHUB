import { Link } from 'react-router-dom';
import projectData from '../../data/project.json';

const { meta, nonClaims, sources } = projectData;

export default function Transparency() {
  return (
    <div>
      <div className="warning-banner mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-lg p-3 text-center" role="alert">
        <p className="font-semibold text-xs sm:text-sm">
          ⚠️ Página de transparencia — Toda afirmación está condicionada a su estado de verificación.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-green-primary">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-black-deep font-medium">Transparencia</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-black-deep">Transparencia del proyecto</h1>
          <p className="text-lg text-gray-600 mt-3">
            Distinción entre lo documentado, propuesto, pendiente y verificado. Cada dato tiene un estado 
            explícito y una fuente de referencia cuando existe.
          </p>
        </header>

        <section aria-labelledby="status" className="mb-12">
          <h2 id="status" className="text-2xl font-bold text-black-deep mb-4">Estado general del proyecto</h2>
          <div className="bg-green-light border border-green-primary/20 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-green-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold text-black-deep">{meta.status}</p>
                <p className="text-sm text-gray-700 mt-1">
                  Convocatoria de referencia: {meta.call}. Este sitio tiene carácter demostrativo y no constituye 
                  comunicación oficial de financiación concedida.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="non-claims" className="mb-12">
          <h2 id="non-claims" className="text-2xl font-bold text-black-deep mb-4">Lo que este proyecto NO afirma</h2>
          <ul className="space-y-3">
            {nonClaims.map((claim, i) => (
              <li key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                <svg className="w-5 h-5 text-green-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-700 text-sm">{claim}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="data-status" className="mb-12">
          <h2 id="data-status" className="text-2xl font-bold text-black-deep mb-4">Estado de los datos publicados</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-light">
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200">Dato</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200">Estado</th>
                  <th className="text-left p-3 font-semibold text-black-deep border border-gray-200">Fuente / Observación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Presupuesto 14 M€</td>
                  <td className="p-3 border border-gray-200"><span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">Escenario</span></td>
                  <td className="p-3 border border-gray-200 text-gray-600">Planificación interna</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Aportación UE 9,8 M€</td>
                  <td className="p-3 border border-gray-200"><span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">Teórica</span></td>
                  <td className="p-3 border border-gray-200 text-gray-600">70 % teórico, no concedido</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Cofinanciación 4,2 M€</td>
                  <td className="p-3 border border-gray-200"><span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-medium">Pendiente</span></td>
                  <td className="p-3 border border-gray-200 text-gray-600">No comprometida</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">12 pymes objetivo</td>
                  <td className="p-3 border border-gray-200"><span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">Meta</span></td>
                  <td className="p-3 border border-gray-200 text-gray-600">No confirmadas</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">3 casos de inversión</td>
                  <td className="p-3 border border-gray-200"><span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">Propuesto</span></td>
                  <td className="p-3 border border-gray-200 text-gray-600">Pendientes de acuerdos</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">240 personas alcance</td>
                  <td className="p-3 border border-gray-200"><span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">Estimación</span></td>
                  <td className="p-3 border border-gray-200 text-gray-600">Previsión de planificación</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">25 FTE</td>
                  <td className="p-3 border border-gray-200"><span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">Meta</span></td>
                  <td className="p-3 border border-gray-200 text-gray-600">Objetivo, no empleos creados</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">TRL 6 ARCHEION/SAE/JOULE</td>
                  <td className="p-3 border border-gray-200"><span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-medium">No acreditado</span></td>
                  <td className="p-3 border border-gray-200 text-gray-600">Sin evidencia independiente</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Socios institucionales</td>
                  <td className="p-3 border border-gray-200"><span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-medium">Pendiente</span></td>
                  <td className="p-3 border border-gray-200 text-gray-600">Candidatos a explorar, no confirmados</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="sources-section" className="mb-12">
          <h2 id="sources-section" className="text-2xl font-bold text-black-deep mb-4">Fuentes públicas</h2>
          <ul className="space-y-3">
            {sources.map((source) => (
              <li key={source.url} className="bg-white border border-gray-200 rounded-lg p-4">
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

        <section aria-labelledby="editorial" className="mb-12">
          <h2 id="editorial" className="text-2xl font-bold text-black-deep mb-4">Política editorial</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-sm text-gray-700">
            <p>
              Este sitio web tiene carácter demostrativo. No constituye una solicitud de subvención, 
              un portal de reservas, una tienda ni un acceso a infraestructura en producción.
            </p>
            <p>
              No se publican datos personales, correos electrónicos privados, domicilios, teléfonos 
              ni información de expedientes UE (PIC, borradores privados).
            </p>
            <p>
              No se utilizan analítica invasiva, cookies no necesarias ni trackers no consentidos. 
              No hay dependencias externas que expongan automáticamente a los visitantes.
            </p>
            <p>
              No se hacen afirmaciones de cumplimiento GDPR o AI Act como certificación sin auditoría jurídica. 
              Las referencias a normativa son informativas, no constituyen asesoramiento legal.
            </p>
            <p>
              No se utilizan logotipos institucionales de la Unión Europea, la Junta de Extremadura u otras 
              entidades sin autorización documental explícita.
            </p>
          </div>
        </section>

        <section aria-labelledby="pending" className="mb-12">
          <h2 id="pending" className="text-2xl font-bold text-black-deep mb-4">Asuntos pendientes de verificación</h2>
          <div className="bg-warning-bg border border-warning-border rounded-xl p-6">
            <ul className="space-y-2 text-sm text-warning-text">
              <li>• <strong>Nombre de entidad promotora</strong> — pendiente de confirmación jurídica</li>
              <li>• <strong>Fechas de hitos</strong> — sujetas a aprobación del consorcio</li>
              <li>• <strong>Derechos de propiedad intelectual</strong> — inventario en revisión</li>
              <li>• <strong>Nivel TRL</strong> — pendiente de evidencia independiente</li>
              <li>• <strong>Socios del consorcio</strong> — composición por definir</li>
              <li>• <strong>Costes elegibles</strong> — clasificación por verificar con texto de convocatoria</li>
              <li>• <strong>Dominio web</strong> — no registrado aún</li>
              <li>• <strong>Acuerdos con terceros</strong> — sin firmas ni compromisos</li>
            </ul>
          </div>
        </section>

        <nav aria-label="Navegación contextual" className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/vision" className="flex items-center gap-2 text-green-primary font-semibold hover:underline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Visión
            </Link>
            <Link to="/" className="flex items-center gap-2 text-green-primary font-semibold hover:underline">
              Volver al inicio
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
