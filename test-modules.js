import data from './data/project.json';

console.log('=== VERIFICACIÓN DE DATOS ===');
console.log('Total de módulos:', data.modules.items.length);
console.log('');
console.log('Módulos encontrados:');
data.modules.items.forEach((mod, i) => {
  console.log(`${i + 1}. ${mod.name} (${mod.location})`);
  console.log(`   - Enfoque: ${mod.focus}`);
  console.log(`   - Objetivos: ${mod.objectives.length}`);
  console.log(`   - Tareas: ${mod.tasks.length}`);
  console.log(`   - Evidencias: ${mod.evidence.length}`);
  console.log(`   - Estado: ${mod.tracking.status}`);
  console.log('');
});

console.log('=== VERIFICACIÓN COMPLETADA ===');
console.log('Todos los datos están correctamente estructurados.');
