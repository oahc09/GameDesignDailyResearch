# 校验记录

## 2026-10-28（补跑，实际执行于 2026-10-30 23:13 Asia/Shanghai）

- 工具：`validation/validate.mjs`
- 结果：**ERRORS 0 / WARNINGS 0**
- 覆盖：JSONL 12 文件 / 204 条记录；实体 cases=13, mechanics=14, patterns=9, theories=1, hypotheses=6（共 43）；relations 52 条端点与类型全部合法；三个 run.json（10-27/28/30）解析通过；索引与实体集合一致。
- 重点去重核查：mechanic-000012（运动耦合时间）vs mechanic-000008（倒带）语义比对确认非重复，CONTRASTS_WITH 固化；game-000010~13 与既有 9 案例三级去重无重复。
- 引用真实性：DOOM 怪物 AI 全部事实来自 GPL 源码 p_enemy.c 逐函数核对（A 级）；GDC Vault 页为纯音频，仅引用主题范围并注明；无编造 URL。
- 幂等注记：2026-10-30 23:13 为当日重复触发，先幂等处理（审计记录 49602dc），再补跑缺口日 10-28（本节），归档未占用 10-30 目录。

## 2026-10-30（周五 · 独立与实验玩法）

- 工具：`validation/validate.mjs`（本日起 run.json 检查升级为全量扫描所有日报的 run.json）
- 结果：**ERRORS 0 / WARNINGS 0**
- 覆盖：JSONL 10 文件 / 147 条记录；实体 cases=9, mechanics=10, patterns=6, theories=1, hypotheses=4（共 30）；relations 34 条端点与类型全部合法；两个 run.json（10-27、10-30）解析通过；索引与实体集合一致。
- 去重核查：新增 4 实体案例与既有 5 案例做三级去重（URL/实体/机制语义），无重复；预登记 mechanic-000009 与未来 hitstop 类机制的语义边界。
- 诚实注记：Lexaloffle BBS、Hempuli 官网、Illiger 官网为检索命中但未全文抓取，已在 sources.jsonl 与案例卡注明；无编造 URL。

## 2026-10-27（首日运行，归档收尾实际执行于 2026-10-28 凌晨 Asia/Shanghai）

- 工具：`validation/validate.mjs`（node validation/validate.mjs，后续每日运行复用）
- 结果：**ERRORS 0 / WARNINGS 0**（全部通过）

| 检查项 | 结果 | 说明 |
|---|---|---|
| JSONL 可解析（8 文件 / 85 条） | pass | 含 indices 4 个、daily 报告 3 个、backlog 1 个 |
| 实体 ID 全局唯一（17 个实体） | pass | cases=5, mechanics=6, patterns=3, theories=1, hypotheses=2 |
| 文件名与 ID 一致 | pass | 均以 `<id>-slug` 命名 |
| relations.jsonl 端点存在、类型合法（23 条） | pass | 无悬空引用；类型均在 taxonomy.yaml 允许清单内 |
| 案例卡必填字段（id/core_loop/sources/verification_status/confidence） | pass | 5/5 |
| 案例卡 mechanic_ids / pattern_ids 指向存在实体 | pass | 无悬空 |
| 索引（cases/mechanics/patterns.jsonl）与实体集合一致 | pass | 首次运行曾报不一致，为脚本 Windows 路径分隔符缺陷（`\` vs `/`），修复脚本后通过；数据本身无问题 |
| run.json 可解析 | pass | |

- 修复过程中发现并更正的问题：
  1. `sources.jsonl` 两处 JSON 缺冒号（`supports_claims`），已修复后通过解析。
  2. `backlog/candidates.jsonl` 2048 条目曾误填未核验 URL，已改为置空并注明"下次运行须核验后登记"。
- 写入顺序说明：实体卡 → 索引 → 日报/来源/候选 → run.json/state；索引最后生成，中途中断不会留下互相矛盾的索引（可由实体卡 frontmatter 重新派生）。
- 引用真实性：全部 URL 来自当日检索命中或实际抓取；未核验地址一律 `null` 并注明（Wordle 原始源码仓库未定位到，未登记）。2 个来源抓取失败（ECONNRESET），其内容未用于支撑结论，详见日报"来源索引与失败项"。

- 2026-10-30 23:13 重复触发复核：validate.mjs 重跑通过（0 错误 0 警告），当日内容无变更，按 SPEC §9 幂等处理并留审计记录。

## 2026-10-31（周六 · 理论与算法）

- 工具：`validation/validate.mjs`；结果：**ERRORS 0 / WARNINGS 0**（修复后复验）。
- 覆盖：JSONL 12 文件 / 244 条记录；实体 cases=18, mechanics=19, patterns=11, theories=3, hypotheses=8（共 59）；三个 run.json 解析通过（现为 10-27/28/31 三份）。
- 过程异常：backlog 追加命令尾部被截断，末行 Klondike JSON 损坏（Unterminated string）——校验捕获，head+append+mv 原子修复后复验通过。
- 主题偏离：Tetris/2048 属周一名单，本日按 SPEC §1 以概率/算法轴切入并已在案例卡与 run.json 记录偏离原因。
- 引用真实性：2048 生成概率经 game_manager.js 逐行核对；XCOM 内部参数、Balatro 小丑权重、NES 随机器算法均标未知不采信社区口径。

## 2026-11-01（周日 · 知识归纳与创新 + 首份周报）

- 工具：`validation/validate.mjs`；结果：**ERRORS 0 / WARNINGS 0**。
- 覆盖：JSONL 16 文件；实体 cases=22, mechanics=23, patterns=13, theories=3, hypotheses=8+2=10；四份 run.json（10-27/28/31/11-01）解析通过；周报 2026-W44.md 生成。
- 过程异常：Downwell 首次抓取命中消歧义页（Downwelling），改用 Downwell_(video_game) 重试成功；backlog 用 node 解析-修补-重命名做原子状态迁移（3 项 selected）。
- 归档路径：11-01 起月份目录切换为 reports/daily/2026/11/。
