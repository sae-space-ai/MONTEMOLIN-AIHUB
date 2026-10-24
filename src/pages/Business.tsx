import { Link } from 'react-router-dom';

const services = [
  { title: 'Inteligencia documental', detail: 'Organizar documentos, localizar información y construir trazabilidad de evidencias.', evidence: 'Piloto propuesto: tiempo de búsqueda, exactitud y revisión humana de una muestra.' },
  { title: 'Automatización empresarial', detail: 'Definir flujos para presupuestos, tareas y atención a clientes con supervisión.', evidence: 'Piloto propuesto: tiempos de proceso, errores y capacidad de revertir acciones.' },
  { title: 'Gobernanza y supervisión de IA', detail: 'Inventariar sistemas, documentar riesgos y diseñar controles de intervención humana.', evidence: 'Entregables propuestos: inventario, matriz de controles y plan de seguimiento; sin certificación automática.' },
  { title: 'Eficiencia y capacitación', detail: 'Evaluar costes y latencia de aplicaciones y formar a sus responsables.', evidence: 'Piloto propuesto: línea base, medición comparable y evaluación de aprendizaje.' },
];
export default function Business() {
  return <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
    <h1 className="text-3xl sm:text-4xl font-bold">IA para empresas, con alcance verificable</h1>
    <p className="mt-4 text-lg text-gray-600">Propuesta dirigida a pymes, autónomos y organizaciones que necesitan transformar una necesidad concreta en un proceso medible. El Hub está en preparación; esta página no implica disponibilidad inmediata ni un contrato de servicio.</p>
    <section className="mt-10" aria-labelledby="services"><h2 id="services" className="text-2xl font-bold">Líneas de servicio propuestas</h2>
      <div className="grid sm:grid-cols-2 gap-5 mt-5">{services.map(s => <article key={s.title} className="border border-gray-200 rounded-xl p-6"><p className="text-sm text-warning-text">Propuesta pendiente de validación</p><h3 className="font-bold text-xl mt-2">{s.title}</h3><p className="mt-3 text-gray-700">{s.detail}</p><p className="mt-3 text-sm text-gray-600">{s.evidence}</p></article>)}</div>
    </section>
    <section className="mt-10" aria-labelledby="process"><h2 id="process" className="text-2xl font-bold">Cómo se prepararía una colaboración</h2>
      <ol className="list-decimal pl-6 mt-4 space-y-3"><li>Definir la necesidad, el proceso actual y un responsable.</li><li>Acordar datos permitidos, alcance, costes y criterios de aceptación.</li><li>Validar capacidad técnica, derechos y condiciones jurídicas antes del piloto.</li><li>Ejecutar y medir el piloto; decidir continuidad con resultados documentados.</li></ol>
      <p className="mt-4 text-gray-600">Modelo de ingresos propuesto: diagnóstico con alcance cerrado, implantación por hitos y mantenimiento opcional. Precios por determinar; sin ventas, clientes ni retornos económicos acreditados en esta web.</p>
    </section>
    <section className="mt-10 bg-green-light rounded-xl p-6" aria-labelledby="contact"><h2 id="contact" className="text-2xl font-bold">Contacto: canal pendiente de habilitación</h2>
      <p className="mt-3">El sitio no recoge solicitudes ni envía mensajes. Antes de activar un formulario se verificará el destinatario, la recepción real y la información de privacidad del responsable. No hay reservas ni inscripciones abiertas.</p>
      <p className="mt-3">Para preparar una futura consulta: actividad de la empresa, necesidad, alcance y plazo orientativo. No incluyas datos personales sensibles ni documentos confidenciales.</p>
      <Link to="/privacidad" className="inline-block mt-4 underline text-green-primary font-semibold">Consultar privacidad y condiciones de activación</Link>
    </section>
    <Link to="/transparencia" className="inline-block mt-8 underline text-green-primary">Ver estado de la candidatura y evidencias pendientes</Link>
  </div>;
}
