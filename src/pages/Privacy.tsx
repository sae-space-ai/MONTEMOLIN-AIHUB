import { Link } from 'react-router-dom';
export default function Privacy() {
  return <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
    <h1 className="text-3xl font-bold">Privacidad y contacto</h1>
    <p className="mt-4 text-gray-600">Información sobre esta versión del sitio · 24 de octubre de 2026.</p>
    <section className="mt-8 space-y-4" aria-labelledby="collection"><h2 id="collection" className="text-2xl font-bold">Datos y navegación</h2>
      <p>La aplicación no incluye formulario de contacto, cuentas de usuario ni pagos. El módulo Pilotos permite guardar tareas, objetivos y referencias en localStorage e importar una copia JSON que se procesa en el navegador sin subirse a un servidor. No incorpora analítica, publicidad ni cookies desde su código. Los enlaces externos se abren solo cuando decides visitarlos.</p>
      <p>El alojamiento en Vercel puede tratar datos técnicos de conexión, como dirección IP, agente de navegador y registros de acceso. Esta página no garantiza ausencia de tratamiento por el proveedor ni sustituye la información completa del responsable.</p>
      <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="inline-block underline text-green-primary">Información de privacidad del proveedor de alojamiento</a>
    </section>
    <section className="mt-8 space-y-4" aria-labelledby="local"><h2 id="local" className="text-2xl font-bold">Borradores locales de pilotos</h2><p>Los borradores permanecen en este navegador hasta que borres los datos del sitio. No se comparten entre dispositivos o usuarios y no son una base de datos central ni un registro de auditoría. Puedes exportar una copia JSON e importar otra; la importación sustituye el borrador con confirmación. Evita datos personales, secretos y contenido confidencial. La pérdida de datos del navegador elimina el borrador salvo que conserves una exportación.</p></section>
    <section className="mt-8 space-y-4" aria-labelledby="activation"><h2 id="activation" className="text-2xl font-bold">Antes de habilitar la recogida de solicitudes</h2>
      <p>El canal de contacto permanece inactivo. No se ha comprobado un destinatario ni la recepción de mensajes y no existe un aviso de envío correcto que pueda inducir a error.</p>
      <ul className="list-disc pl-6 space-y-2"><li>Identificar y confirmar al responsable, sus datos de contacto y la vía para ejercer derechos.</li><li>Documentar finalidad, base jurídica, destinatarios, conservación y transferencias aplicables.</li><li>Configurar el canal, la seguridad y la protección frente a abuso.</li><li>Realizar una prueba de envío y confirmar recepción antes de publicar el formulario.</li></ul>
      <p>La denominación del proyecto no acredita personalidad jurídica, titularidad de software ni representación de una entidad. Estos extremos permanecen pendientes de documentación.</p>
    </section>
    <Link to="/empresas" className="inline-block mt-8 underline text-green-primary">Volver a la propuesta para empresas</Link>
  </div>;
}
