import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { initialWorkspace, pilotDefinitions, safeUrl, STORAGE_KEY, validWorkspace, type Workspace, type Pilot, type TaskState } from '../features/pilots/model';

function load(): { data: Workspace; warning: string } {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return { data: initialWorkspace(), warning: '' };
    const data: unknown = JSON.parse(saved);
    if (validWorkspace(data)) return { data, warning: '' };
    return { data: initialWorkspace(), warning: 'El borrador guardado tiene un formato incompatible. No se sobrescribirá hasta que guardes un cambio.' };
  } catch { return { data: initialWorkspace(), warning: 'No se pudo leer el borrador local. Puedes trabajar y exportar una copia.' }; }
}
const input = 'block w-full border border-gray-300 rounded-lg px-3 py-2 mt-2 bg-white';
const button = 'px-4 py-2 rounded-lg bg-green-primary text-white font-semibold';

export default function Pilots() {
  const { pilotId } = useParams();
  const [loaded] = useState(load);
  const [data, setData] = useState(loaded.data);
  const [message, setMessage] = useState(loaded.warning);
  const [title, setTitle] = useState('');
  const [evidenceTitle, setEvidenceTitle] = useState('');
  const [url, setUrl] = useState('');
  const [note, setNote] = useState('');
  const definition = pilotDefinitions.find(p => p.id === pilotId);
  const pilot = data.pilots.find(p => p.id === pilotId);
  function save(next: Workspace) {
    setData(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); setMessage('Borrador guardado en este navegador. No se ha publicado ni enviado.'); }
    catch { setMessage('Cambio conservado solo en memoria: no se pudo guardar. Exporta una copia antes de cerrar.'); }
  }
  function update(next: Pilot) { save({ ...data, pilots: data.pilots.map(p => p.id === next.id ? next : p) }); }
  function exportData() {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const objectUrl = URL.createObjectURL(blob); const a = document.createElement('a');
    a.href = objectUrl; a.download = 'montemolin-aihub-pilotos.json'; a.click();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    setMessage('Copia JSON preparada para descargar. Conserva el archivo para trasladar tu borrador.');
  }
  async function importData(file?: File) {
    if (!file) return;
    if (file.size > 1000000) { setMessage('Archivo rechazado: máximo 1 MB.'); return; }
    try {
      const value: unknown = JSON.parse(await file.text());
      if (!validWorkspace(value)) { setMessage('Archivo rechazado: formato o enlaces no válidos. El borrador actual se conserva.'); return; }
      if (!window.confirm('¿Sustituir el borrador local por este archivo? Exporta primero si necesitas conservarlo.')) return;
      save(value);
    } catch { setMessage('No se pudo importar el JSON. El borrador actual se conserva.'); }
  }
  return <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
    <nav aria-label="Migas de pan"><Link to="/" className="underline text-green-primary">Inicio</Link> / <Link to="/pilotos" className="underline text-green-primary">Pilotos</Link></nav>
    <h1 className="text-3xl sm:text-4xl font-bold mt-5">{definition ? `Piloto: ${definition.name}` : pilotId ? 'Piloto no encontrado' : 'Cartera de pilotos propuestos'}</h1>
    <div className="warning-banner rounded-xl p-4 mt-5"><p>Espacio de planificación. Los nombres proceden de una captura facilitada por el promotor: no acreditan acuerdos, participación, financiación ni resultados. No se han conectado los repositorios de los pilotos.</p></div>
    <p className="mt-4 text-gray-700">Borrador local de trabajo: tus cambios se guardan únicamente en este navegador, sin sincronización ni envío. No introduzcas datos personales, secretos o documentos confidenciales. El avance de tareas no acredita la validación del piloto.</p>
    <div className="flex flex-wrap gap-4 items-center mt-5"><button type="button" className={button} onClick={exportData}>Exportar borrador JSON</button><label className="font-semibold">Importar copia JSON<input type="file" accept=".json,application/json" className="block mt-2 max-w-full" onChange={e => { void importData(e.target.files?.[0]); e.target.value = ''; }} /></label></div>
    <p role="status" aria-live="polite" className="mt-4 text-sm text-gray-700">{message}</p>
    {!pilotId && <div className="grid sm:grid-cols-2 gap-5 mt-8">{pilotDefinitions.map(def => {
      const p = data.pilots.find(p => p.id === def.id)!; const done = p.tasks.filter(t => t.state === 'Hecha').length;
      return <article key={def.id} className="border border-gray-200 rounded-xl p-6"><p className="text-sm text-warning-text">Propuesto · participación sin acreditar</p><h2 className="text-xl font-bold mt-2">{def.name}</h2><p className="mt-3 text-gray-600">{p.objective || 'Objetivo específico pendiente de documentación.'}</p><p className="mt-3 text-sm">Tareas registradas como hechas: {done}/{p.tasks.length} · Referencias aportadas: {p.evidence.length}</p><Link className="inline-block mt-4 underline text-green-primary font-semibold" to={`/pilotos/${def.id}`}>Abrir ficha de {def.name}</Link></article>;
    })}</div>}
    {pilotId && !pilot && <p className="mt-8">Este identificador no pertenece a la cartera. <Link className="underline text-green-primary" to="/pilotos">Volver a los cuatro pilotos</Link></p>}
    {definition && pilot && <>
      <section className="mt-8" aria-labelledby="scope"><h2 id="scope" className="text-2xl font-bold">Ficha y objetivo</h2><p className="mt-3">Estado documental: propuesta sin validación. Responsable, alcance, calendario, presupuesto, autorizaciones y criterios de aceptación: pendientes.</p>{definition.note && <p className="mt-3 text-warning-text">{definition.note}</p>}<label className="block mt-4 font-semibold">Objetivo de trabajo (borrador)<textarea className={input} rows={4} maxLength={4000} value={pilot.objective} onChange={e => update({ ...pilot, objective: e.target.value })} /></label></section>
      <section className="mt-8" aria-labelledby="tasks"><h2 id="tasks" className="text-2xl font-bold">Tareas y seguimiento local</h2><ul className="mt-4 space-y-3">{pilot.tasks.map(task => <li key={task.id} className="border border-gray-200 rounded-lg p-4"><label className="block">{task.title}<select className={input} aria-label={`Estado de ${task.title}`} value={task.state} onChange={e => update({ ...pilot, tasks: pilot.tasks.map(t => t.id === task.id ? { ...t, state: e.target.value as TaskState } : t) })}>{['Pendiente', 'En curso', 'Hecha'].map(state => <option key={state}>{state}</option>)}</select></label><button className="mt-3 underline text-green-primary" type="button" onClick={() => { if (window.confirm('¿Eliminar esta tarea del borrador local?')) update({ ...pilot, tasks: pilot.tasks.filter(t => t.id !== task.id) }); }}>Eliminar tarea: {task.title}</button></li>)}</ul>
      <form className="mt-5" onSubmit={e => { e.preventDefault(); if (title.trim() && pilot.tasks.length < 100) { update({ ...pilot, tasks: [...pilot.tasks, { id: crypto.randomUUID(), title: title.trim(), state: 'Pendiente' }] }); setTitle(''); } }}><label className="font-semibold">Nueva tarea<input className={input} required maxLength={500} value={title} onChange={e => setTitle(e.target.value)} /></label><button disabled={pilot.tasks.length >= 100} className={`${button} mt-3`} type="submit">Añadir tarea local</button></form></section>
      <section className="mt-8" aria-labelledby="evidence"><h2 id="evidence" className="text-2xl font-bold">Referencias y evidencias aportadas</h2><p className="mt-3 text-gray-600">Registrar una URL no verifica su contenido. Todas las referencias permanecen sin revisar; la aplicación no las descarga ni las certifica.</p>
      {pilot.evidence.length === 0 && <p className="mt-3">No hay evidencias aportadas.</p>}<ul className="space-y-3 mt-4">{pilot.evidence.map(e => <li key={e.id} className="border border-gray-200 rounded-lg p-4"><a href={e.url} target="_blank" rel="noopener noreferrer" className="underline text-green-primary font-semibold">{e.title}</a><p className="text-sm mt-2">Sin revisar · {e.note}</p><button className="underline text-green-primary mt-3" type="button" onClick={() => { if (window.confirm('¿Eliminar esta referencia del borrador local?')) update({ ...pilot, evidence: pilot.evidence.filter(item => item.id !== e.id) }); }}>Eliminar referencia: {e.title}</button></li>)}</ul>
      <form className="mt-5 space-y-4" onSubmit={e => { e.preventDefault(); if (!safeUrl(url)) { setMessage('Utiliza una URL http o https sin credenciales.'); return; } if (pilot.evidence.length >= 100) return; update({ ...pilot, evidence: [...pilot.evidence, { id: crypto.randomUUID(), title: evidenceTitle.trim(), url, note }] }); setEvidenceTitle(''); setUrl(''); setNote(''); }}><label className="block font-semibold">Título de la referencia<input className={input} required maxLength={500} value={evidenceTitle} onChange={e => setEvidenceTitle(e.target.value)} /></label><label className="block font-semibold">URL de la fuente<input className={input} type="url" required maxLength={2000} value={url} onChange={e => setUrl(e.target.value)} /></label><label className="block font-semibold">Qué documenta (sin datos confidenciales)<textarea className={input} maxLength={4000} value={note} onChange={e => setNote(e.target.value)} /></label><button className={button} disabled={pilot.evidence.length >= 100} type="submit">Registrar referencia sin verificar</button></form></section>
    </>}
  </div>;
}
