import data from '../../data/project.json';

export default function Modules() {
  const modules = data.modules;
  
  return (
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto'}}>
      <h1 style={{color: '#006B3F', fontSize: '32px', marginBottom: '20px'}}>
        {modules.title}
      </h1>
      
      <p style={{fontSize: '18px', color: '#666', marginBottom: '30px'}}>
        {modules.description}
      </p>

      <div style={{backgroundColor: '#FEF3C7', border: '2px solid #F59E0B', padding: '15px', marginBottom: '30px', borderRadius: '8px'}}>
        <strong style={{color: '#92400E'}}>⚠️ Módulos en definición.</strong>
        <p style={{color: '#92400E', marginTop: '5px'}}>
          Los objetivos, tareas y evidencias están por completar.
        </p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
        {modules.items.map((mod) => (
          <div key={mod.id} style={{border: '2px solid #006B3F', borderRadius: '8px', padding: '20px', backgroundColor: 'white'}}>
            <h2 style={{color: '#006B3F', fontSize: '24px', marginBottom: '10px'}}>
              {mod.name}
            </h2>
            <p style={{color: '#666', fontSize: '14px', marginBottom: '5px'}}>
              📍 {mod.location}
            </p>
            <p style={{color: '#006B3F', fontWeight: 'bold', marginBottom: '15px'}}>
              {mod.focus}
            </p>
            
            <p style={{color: '#333', marginBottom: '15px'}}>
              {mod.description}
            </p>

            <div style={{marginBottom: '15px'}}>
              <h3 style={{fontSize: '16px', marginBottom: '10px', color: '#333'}}>
                ✅ Objetivos ({mod.objectives.length})
              </h3>
              <ul style={{paddingLeft: '20px'}}>
                {mod.objectives.map((obj, i) => (
                  <li key={i} style={{marginBottom: '5px', fontSize: '14px', color: '#555'}}>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{marginBottom: '15px'}}>
              <h3 style={{fontSize: '16px', marginBottom: '10px', color: '#333'}}>
                📋 Tareas ({mod.tasks.length})
              </h3>
              <ul style={{paddingLeft: '20px'}}>
                {mod.tasks.map((task, i) => (
                  <li key={i} style={{marginBottom: '5px', fontSize: '14px', color: '#555'}}>
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{marginBottom: '15px'}}>
              <h3 style={{fontSize: '16px', marginBottom: '10px', color: '#333'}}>
                📊 Evidencias ({mod.evidence.length})
              </h3>
              {mod.evidence.map((ev, i) => (
                <div key={i} style={{backgroundColor: '#f5f5f5', padding: '10px', marginBottom: '8px', borderRadius: '4px'}}>
                  <strong style={{fontSize: '14px'}}>{ev.type}</strong>
                  <p style={{fontSize: '12px', color: '#666', margin: '5px 0'}}>
                    {ev.description}
                  </p>
                  <span style={{fontSize: '12px', color: '#F59E0B'}}>
                    Estado: {ev.status}
                  </span>
                </div>
              ))}
            </div>

            <div style={{backgroundColor: '#E8F5E9', padding: '15px', borderRadius: '4px'}}>
              <h3 style={{fontSize: '16px', marginBottom: '10px', color: '#006B3F'}}>
                📈 Seguimiento
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '14px'}}>
                <div>
                  <strong>Estado:</strong> {mod.tracking.status}
                </div>
                <div>
                  <strong>Progreso:</strong> {mod.tracking.progress}
                </div>
                <div>
                  <strong>Próximo Hito:</strong> {mod.tracking.nextMilestone}
                </div>
                <div>
                  <strong>Última Actualización:</strong> {mod.tracking.lastUpdate}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop: '40px', textAlign: 'center'}}>
        <a href="#/" style={{color: '#006B3F', textDecoration: 'none', fontWeight: 'bold', marginRight: '20px'}}>
          ← Volver al inicio
        </a>
        <a href="#/tecnologia" style={{color: '#006B3F', textDecoration: 'none', fontWeight: 'bold'}}>
          Ir a Tecnología →
        </a>
      </div>
    </div>
  );
}
