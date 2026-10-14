import { Link } from 'react-router-dom';
import projectData from '../../data/project.json';

const { securityPillars } = projectData;

export default function Security() {
  return (
    <div>
      <div className="warning-banner mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-lg p-3 text-center" role="alert">
        <p className="font-semibold text-xs sm:text-sm">
          ⚠️ Seguridad en diseño — Los controles descritos son previstos. No se han ejecutado auditorías externas.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-green-primary">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-black-deep font-medium">Seguridad</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-black-deep">Seguridad y gobernanza de IA</h1>
          <p className="text-lg text-gray-600 mt-3">
            Pilares de seguridad previstos para el Hub. Los controles se diseñan desde el inicio, pero 
            su implementación y verificación están pendientes. No se afirma cumplimiento de normativas 
            específicas sin auditoría jurídica.
          </p>
        </header>

        <section aria-labelledby="pillars" className="mb-12">
          <h2 id="pillars" className="text-2xl font-bold text-black-deep mb-6">Pilares de seguridad</h2>
          <div className="space-y-6">
            {securityPillars.map((pillar) => (
              <article key={pillar.name} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-primary text-white rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-black-deep mb-2">{pillar.name}</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">{pillar.description}</p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <span className="text-xs font-semibold text-yellow-800">Estado: </span>
                      <span className="text-xs text-yellow-800">{pillar.status}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="human-oversight" className="mb-12">
          <h2 id="human-oversight" className="text-2xl font-bold text-black-deep mb-4">Supervisión humana obligatoria</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Las decisiones de IA con impacto significativo en personas, operaciones empresariales o cumplimiento 
            normativo requieren intervención humana. Se definen umbrales de confianza por debajo de los cuales 
            el sistema no actúa de forma autónoma.
          </p>
          <div className="bg-green-light border border-green-primary/20 rounded-xl p-6">
            <h3 className="font-semibold text-black-deep mb-3">Principios de intervención humana</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">•</span>
                <span><strong>Decisiones críticas:</strong> siempre revisadas por persona cualificada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">•</span>
                <span><strong>Umbrales de confianza:</strong> configurables por caso de uso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">•</span>
                <span><strong>Registro de intervenciones:</strong> todas las acciones humanas quedan documentadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">•</span>
                <span><strong>Capacidad de detención:</strong> cualquier operador autorizado puede detener procesos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">•</span>
                <span><strong>Transparencia:</strong> las personas afectadas pueden solicitar explicación</span>
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="privacy" className="mb-12">
          <h2 id="privacy" className="text-2xl font-bold text-black-deep mb-4">Privacidad y protección de datos</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El tratamiento de datos personales se rige por principios de minimización, limitación de finalidad 
            y transparencia. Se realizarán evaluaciones de impacto (DPIA) cuando sea preceptivo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-black-deep mb-2">Medidas técnicas previstas</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Cifrado en tránsito (TLS 1.2+)</li>
                <li>• Cifrado en reposo</li>
                <li>• Control de acceso basado en roles (RBAC)</li>
                <li>• Registro de auditoría de accesos</li>
                <li>• Separación de entornos (desarrollo/producción)</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-black-deep mb-2">Medidas organizativas previstas</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Evaluación de impacto (DPIA) cuando aplique</li>
                <li>• Registro de actividades de tratamiento</li>
                <li>• Formación en protección de datos</li>
                <li>• Procedimiento de respuesta a brechas</li>
                <li>• Revisión periódica de accesos</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-warning-bg border border-warning-border rounded-lg p-4">
            <p className="text-sm text-warning-text">
              <strong>Nota:</strong> No se afirma cumplimiento GDPR como certificación. Las medidas descritas son 
              buenas prácticas previstas, sujetas a auditoría jurídica independiente.
            </p>
          </div>
        </section>

        <section aria-labelledby="incident-response" className="mb-12">
          <h2 id="incident-response" className="text-2xl font-bold text-black-deep mb-4">Respuesta a incidentes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Se define un protocolo de respuesta a incidentes de seguridad y funcionamiento. El protocolo 
            cubre detección, contención, erradicación, recuperación y comunicación.
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-black-deep mb-4">Fases del protocolo (previsto)</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-green-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold text-black-deep text-sm">Detección</p>
                  <p className="text-xs text-gray-600">Monitorización continua y alertas automatizadas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-green-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold text-black-deep text-sm">Contención</p>
                  <p className="text-xs text-gray-600">Aislamiento del componente afectado</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-green-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold text-black-deep text-sm">Erradicación</p>
                  <p className="text-xs text-gray-600">Eliminación de la causa raíz</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-green-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold text-black-deep text-sm">Recuperación</p>
                  <p className="text-xs text-gray-600">Restauración del servicio con verificación</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-green-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                <div>
                  <p className="font-semibold text-black-deep text-sm">Comunicación</p>
                  <p className="text-xs text-gray-600">Notificación a afectados y autoridades cuando sea preceptivo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Estado:</strong> Protocolo por definir formalmente. No se han registrado incidentes 
              (el sistema no está en producción).
            </p>
          </div>
        </section>

        <section aria-labelledby="traceability" className="mb-12">
          <h2 id="traceability" className="text-2xl font-bold text-black-deep mb-4">Trazabilidad y registro de decisiones</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Todas las decisiones de IA se registran con procedencia de datos, modelo utilizado, parámetros 
            de entrada, resultado y, cuando aplique, intervención humana. El registro permite auditoría 
            posterior y explicación a personas afectadas.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-black-deep mb-3">Campos del registro (previstos)</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              <li>• Identificador único de la decisión</li>
              <li>• Fecha y hora</li>
              <li>• Modelo y versión utilizados</li>
              <li>• Datos de entrada (referencia, no contenido)</li>
              <li>• Resultado generado</li>
              <li>• Nivel de confianza</li>
              <li>• Intervención humana (si aplica)</li>
              <li>• Justificación de la decisión</li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="compliance" className="mb-12">
          <h2 id="compliance" className="text-2xl font-bold text-black-deep mb-4">Cumplimiento normativo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El proyecto se diseña considerando las obligaciones del Reglamento de Inteligencia Artificial (AI Act) 
            y el Reglamento General de Protección de Datos (GDPR). Sin embargo, 
            <strong> no se afirma cumplimiento como certificación sin auditoría jurídica independiente.</strong>
          </p>
          <div className="bg-warning-bg border border-warning-border rounded-lg p-5">
            <h3 className="font-semibold text-warning-text mb-2">Pendientes de verificación</h3>
            <ul className="text-sm text-warning-text space-y-1">
              <li>• Clasificación de riesgo según AI Act</li>
              <li>• Evaluación de conformidad cuando sea preceptiva</li>
              <li>• Registro público de sistemas de IA de alto riesgo</li>
              <li>• Auditoría jurídica independiente</li>
              <li>• Designación de responsable de cumplimiento</li>
            </ul>
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
