// 知识库结构校验（SPEC 第 3.6.2 节）——每日运行后执行：node validation/validate.mjs
// 检查：JSONL 可解析、ID 全局唯一、关联无悬空、案例必填字段、索引与实体一致、run.json 可解析。
import { globSync } from 'node:fs';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [], warnings = [];

// 1. JSONL 解析
const jsonlFiles = globSync('**/*.jsonl', { root, cwd: root }).map(f => f.replace(/\\/g, '/'));
const parsed = {};
for (const f of jsonlFiles) {
  const lines = [];
  readFileSync(join(root, f), 'utf8').split('\n').forEach((line, i) => {
    const s = line.trim();
    if (!s) return;
    try { lines.push(JSON.parse(s)); }
    catch (e) { errors.push(`${f}:${i + 1} JSON 解析失败: ${e.message}`); }
  });
  parsed[f] = lines;
}
console.log(`JSONL 文件 ${jsonlFiles.length} 个，记录 ${Object.values(parsed).reduce((a, v) => a + v.length, 0)} 条`);

// 2. frontmatter ID 收集
function fmOf(p) {
  const m = readFileSync(join(root, p), 'utf8').match(/^---\s*\n([\s\S]*?)\n---/);
  if (!m) { errors.push(`${p}: 缺少 frontmatter`); return null; }
  return m[1];
}
function collect(dir) {
  const out = {};
  for (const p of globSync(`${dir}/*.md`, { root, cwd: root })) {
    const fm = fmOf(p);
    if (!fm) continue;
    const id = fm.match(/^id:\s*(\S+)/m);
    if (!id) { errors.push(`${p}: frontmatter 缺 id`); continue; }
    out[id[1]] = p;
  }
  return out;
}
const cases = collect('cases'), mechs = collect('mechanics'), pats = collect('patterns'),
      theo = collect('theories'), hyps = collect('hypotheses');
const all = { ...cases, ...mechs, ...pats, ...theo, ...hyps };
console.log(`实体: cases=${Object.keys(cases).length} mechanics=${Object.keys(mechs).length} patterns=${Object.keys(pats).length} theories=${Object.keys(theo).length} hypotheses=${Object.keys(hyps).length}`);

// 3. ID 唯一性与文件名一致
const seen = {};
for (const [id, p] of Object.entries(all)) {
  if (seen[id]) errors.push(`ID 重复 ${id}: ${seen[id]} 与 ${p}`);
  seen[id] = p;
  if (!p.split(/[\\/]/).pop().startsWith(id)) warnings.push(`${p}: 文件名未以 ${id} 开头`);
}

// 4. 关系：类型合法、端点存在
const validTypes = new Set(['USES_MECHANIC','EXEMPLIFIES_PATTERN','EVOLVES_FROM','COMBINES_WITH','CONTRASTS_WITH','SUPPORTED_BY','TESTS_HYPOTHESIS']);
for (const r of parsed['indices/relations.jsonl'] ?? []) {
  for (const k of ['from', 'type', 'to']) if (!(k in r)) errors.push(`relations.jsonl 缺字段 ${k}: ${JSON.stringify(r)}`);
  if (!validTypes.has(r.type)) errors.push(`非法关系类型: ${r.type}`);
  for (const k of ['from', 'to']) if (r[k] && !(r[k] in all)) errors.push(`悬空关联 ${k}=${r[k]}`);
}

// 5. 案例卡必填字段与引用
for (const [id, p] of Object.entries(cases)) {
  const fm = fmOf(p);
  for (const [field, pool] of [['mechanic_ids', mechs], ['pattern_ids', pats]]) {
    const m = fm.match(new RegExp(`^${field}:\\s*\\[(.*?)\\]`, 'm'));
    if (m) for (const ref of m[1].split(',').map(s => s.trim()).filter(Boolean))
      if (!(ref in pool)) errors.push(`${p}: 悬空引用 ${field} -> ${ref}`);
  }
  for (const req of ['core_loop:', 'sources:', 'verification_status', 'confidence']) {
    if (!fm.includes(req)) errors.push(`${p}: 缺必填字段 ${req}`);
  }
}

// 6. 索引与实体一致
const idxIds = f => new Set((parsed[f] ?? []).map(r => r.id));
for (const [f, pool] of [['indices/cases.jsonl', cases], ['indices/mechanics.jsonl', mechs], ['indices/patterns.jsonl', pats]]) {
  const a = [...idxIds(f)].sort(), b = Object.keys(pool).sort();
  if (a.join() !== b.join()) errors.push(`${f}: 索引(${a}) 与实体(${b}) 不一致`);
}

// 7. run.json 可解析
try { JSON.parse(readFileSync(join(root, 'reports/daily', '2026/10/2026-10-27/run.json'), 'utf8')); }
catch (e) { errors.push(`run.json 解析失败: ${e.message}`); }

console.log(`ERRORS: ${errors.length}`);
errors.forEach(e => console.log('  ✗', e));
console.log(`WARNINGS: ${warnings.length}`);
warnings.forEach(w => console.log('  ⚠', w));
process.exit(errors.length ? 1 : 0);
