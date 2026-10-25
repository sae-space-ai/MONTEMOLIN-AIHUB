export const STORAGE_KEY = 'montemolin-aihub.pilots.v1';
export const pilotDefinitions = [
  { id: 'iren-badajoz', name: 'IA IREN Badajoz' },
  { id: 'innovacion-territorial', name: 'Innovación Territorial C…', note: 'Nombre truncado en la captura; denominación completa pendiente.' },
  { id: 'lusitanus-merida', name: 'Lusitanus Mérida' },
  { id: 'merlin-edged', name: 'Merlin Edged Montemolín', note: 'La ubicación y la denominación completa requieren documentación.' },
];
export type TaskState = 'Pendiente' | 'En curso' | 'Hecha';
export type Task = { id: string; title: string; state: TaskState };
export type Evidence = { id: string; title: string; url: string; note: string };
export type Pilot = { id: string; objective: string; tasks: Task[]; evidence: Evidence[] };
export type Workspace = { version: 1; pilots: Pilot[] };
export function initialWorkspace(): Workspace {
  return { version: 1, pilots: pilotDefinitions.map(p => ({ id: p.id, objective: '', evidence: [], tasks: [
    { id: `${p.id}-scope`, title: 'Documentar alcance y objetivo del piloto', state: 'Pendiente' },
    { id: `${p.id}-rights`, title: 'Acreditar interlocución y autorización de participación', state: 'Pendiente' },
    { id: `${p.id}-baseline`, title: 'Definir línea base y criterios de aceptación', state: 'Pendiente' },
  ] })) };
}
export function safeUrl(value: string): boolean {
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password; } catch { return false; }
}
export function validWorkspace(value: unknown): value is Workspace {
  if (!value || typeof value !== 'object') return false;
  const w = value as Workspace;
  const text = (v: unknown, max: number): v is string => typeof v === 'string' && v.length <= max;
  return w.version === 1 && Array.isArray(w.pilots) && w.pilots.length === pilotDefinitions.length &&
    pilotDefinitions.every(def => w.pilots.filter(p => p?.id === def.id).length === 1) &&
    w.pilots.every(p => text(p.objective, 4000) && Array.isArray(p.tasks) && p.tasks.length <= 100 &&
      new Set(p.tasks.map(t => t?.id)).size === p.tasks.length && p.tasks.every(t => t && text(t.id, 100) && text(t.title, 500) && ['Pendiente', 'En curso', 'Hecha'].includes(t.state)) &&
      Array.isArray(p.evidence) && p.evidence.length <= 100 && new Set(p.evidence.map(e => e?.id)).size === p.evidence.length &&
      p.evidence.every(e => e && text(e.id, 100) && text(e.title, 500) && text(e.note, 4000) && text(e.url, 2000) && safeUrl(e.url)));
}
