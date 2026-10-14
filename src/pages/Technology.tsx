import { Link } from 'react-router-dom';
import projectData from '../../data/project.json';

const { products } = projectData;

export default function Technology() {
  return (
    <div>
      <div className="warning-banner mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-lg p-3 text-center" role="alert">
        <p className="font-semibold text-xs sm:text-sm">
          ⚠️ Estado de madurez no acreditado — Las líneas tecnológicas se describen como propuestas, no como productos verificados.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
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
            de madurez, sin atribuir niveles TRL no demostrados.
          </p>
        </header>

        <section aria-labelledby="archeion" className="mb-12">
          {products.map((product) => (
            <article key={product.name} className="mb-8 bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 id={product.name.toLowerCase()} className="text-2xl font-bold text-black-deep">{product.name}</h2>
                <span className="text-xs font-bold bg-green-light text-green-primary px-3 py-1 rounded-full uppercase">
                  {product.tag}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{product.text}</p>
              <div className="bg-warning-bg border border-warning-border rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-warning-text flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-warning-text text-sm">Estado de madurez:</span>
                    <p className="text-sm text-warning-text mt-1">{product.status}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section aria-labelledby="architecture" className="mb-12">
          <h2 id="architecture" className="text-2xl font-bold text-black-deep mb-4">Arquitectura prevista</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La arquitectura tecnológica se plantea como modular, interoperable y eficiente. Los componentes se integrarán 
            de forma controlada, con pruebas de aceptación y una línea base comparable para los pilotos empresariales.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-black-deep mb-3">Principios de diseño</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">•</span>
                Modularidad: componentes intercambiables con interfaces definidas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">•</span>
                Interoperabilidad: estándares abiertos y formatos documentados
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">•</span>
                Eficiencia: optimización de costes computacionales y latencia
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">•</span>
                Seguridad: controles de privacidad, intervención humana y registro de decisiones
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-primary font-bold">•</span>
                Trazabilidad: procedencia de datos y evidencias auditables
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="trl" className="mb-12">
          <h2 id="trl" className="text-2xl font-bold text-black-deep mb-4">Nivel de madurez tecnológica (TRL)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La convocatoria I3 requiere una solución empresarial con TRL inicial mínimo 6 comprobado. 
            Actualmente no se atribuye este nivel a los componentes propios sin evidencia independiente.
          </p>
          <div className="bg-green-light border border-green-primary/20 rounded-xl p-6">
            <h3 className="font-semibold text-black-deep mb-3">Criterio de la Fase 1</h3>
            <p className="text-sm text-gray-700">
              Se buscará una configuración de IA empresarial de partida con TRL 6 demostrado mediante evidencia 
              independiente. Si la evidencia falta, no se declarará cumplimiento. Los prototipos propios no se 
              presentarán como productos maduros.
            </p>
          </div>
        </section>

        <section aria-labelledby="ip" className="mb-12">
          <h2 id="ip" className="text-2xl font-bold text-black-deep mb-4">Propiedad intelectual y licencias</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La titularidad del software y los servicios es materia de inventario y acuerdos reales. No se obtiene 
            mostrando números en el sitio. Los derechos sobre tecnología propia y ajena se registrarán en la Fase 3 
            con condiciones transparentes.
          </p>
          <div className="bg-warning-bg border border-warning-border rounded-lg p-5">
            <h3 className="font-semibold text-warning-text mb-2">Pendientes de verificación</h3>
            <ul className="text-sm text-warning-text space-y-1">
              <li>• Titularidad no confirmada de componentes previos</li>
              <li>• Licencias de terceros por identificar</li>
              <li>• Acuerdos de confidencialidad (NDA) en revisión</li>
              <li>• Derechos de explotación pendientes de delimitar</li>
            </ul>
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
            <Link to="/inversion" className="flex items-center gap-2 text-green-primary font-semibold hover:underline">
              Inversión y presupuesto
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
