import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';
const source = readFileSync(new URL('../src/features/pilots/model.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { initialWorkspace, validWorkspace, safeUrl } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
test('four independent drafts survive a JSON round trip', () => {
 const w = initialWorkspace(); w.pilots[0].tasks[0].state = 'Hecha';
 assert.equal(w.pilots[1].tasks[0].state, 'Pendiente');
 assert.ok(validWorkspace(JSON.parse(JSON.stringify(w))));
 assert.equal(w.pilots.length, 4);
});
test('rejects unsafe reference schemes and embedded credentials', () => {
 for (const u of ['javascript:alert(1)', 'data:text/html,x', 'https://user:password@example.org', 'not-a-url']) assert.equal(safeUrl(u), false);
 assert.equal(safeUrl('https://example.org/evidence'), true);
});
test('rejects incomplete, duplicate and oversized imported data', () => {
 assert.equal(validWorkspace(null), false);
 assert.equal(validWorkspace({ version: 2, pilots: [] }), false);
 const missing = initialWorkspace(); missing.pilots.pop(); assert.equal(validWorkspace(missing), false);
 const duplicate = initialWorkspace(); duplicate.pilots[1] = duplicate.pilots[0]; assert.equal(validWorkspace(duplicate), false);
 const large = initialWorkspace(); large.pilots[0].objective = 'x'.repeat(4001); assert.equal(validWorkspace(large), false);
 const tasks = initialWorkspace(); tasks.pilots[0].tasks.push(tasks.pilots[0].tasks[0]); assert.equal(validWorkspace(tasks), false);
});
test('rejects malicious evidence inside otherwise valid workspace', () => {
 const w = initialWorkspace(); w.pilots[0].evidence.push({ id: 'test', title: 'ref', url: 'javascript:alert(1)', note: '' });
 assert.equal(validWorkspace(w), false);
});
