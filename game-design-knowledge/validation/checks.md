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

## 2026-11-07（周六 · 理论与算法第二轮：确定性模拟与程序生成）

- 工具：`validation/validate.mjs`；结果：**ERRORS 0 / WARNINGS 0**。
- 覆盖：实体 cases=26, mechanics=27, patterns=15, theories=3, hypotheses=12（共 83）；五份 run.json（10-27/28/31/11-01/11-07）解析通过；relations 99 条全合法。
- 调度异常：本会话收到三条排队触发（宿主离线数日）；11-02~11-06 与 10-29 登记为缺口，未补造；缺口积压建议专项补跑批次。
- 引用真实性：Pac-Man Dossier（A，幽灵 AI 相关项已核）、1500 Archers 论文 PDF+文章版双互证（A）；Derek Yu 原博文与 Tarn Adams 演讲 URL 未命中即不登记。

## 2026-11-08（周日 · 知识归纳与创新/缺口研究轴 + 周报 W45）

- 工具：`validation/validate.mjs`；结果：**ERRORS 0 / WARNINGS 0**。
- 覆盖：实体 cases=30, mechanics=31, patterns=17, theories=3, hypotheses=14（共 95）；六份 run.json（10-27/28/31/11-01/07/08）解析通过；relations 111 条全合法；周报 W45 生成。
- 引用真实性：Snakebird Steam 页/ThinkyGames 页为检索命中未全文抓取（已注明）；Witness 规则族清单不采信未核验社区库。
- 缺口研究注记：本日案例取自 backlog 预排（益智/策略轴），10-29 调度缺口仍记录在案。

## 2026-11-13（周五 · 独立与实验玩法）

- 工具：`validation/validate.mjs`；结果：**ERRORS 0 / WARNINGS 0**。
- 覆盖：实体 cases=34, mechanics=35, patterns=19, theories=3, hypotheses=16（共 107）；relations 123 条全合法。
- 引用真实性：全部 4 来源为 Wikipedia（文献日）；Foddy 演讲/Papers 逐日规则/Katamari 公式未核验即标未知。

## 2026-11-09（补跑，实际执行于 2026-11-13 23:40）

- 工具：`validation/validate.mjs`；结果：**ERRORS 0 / WARNINGS 0**。
- 覆盖：实体 cases=38, mechanics=39, patterns=20, theories=3, hypotheses=18（共 118）；relations 136 条全合法；七份 run.json 解析通过。
- 纠误：Sokoban 关卡数口径（商业版 20 关，50 关属 Sokoban 2）——W44 周报原口径有误，案例卡与 run.json 已记录。
- backlog 账目回填：game-000015（2048）状态条目修正（内容无修订）。

## 2026-10-29（补跑，实际执行于 2026-11-14 10:45）

- 工具：`validation/validate.mjs`；结果：**ERRORS 0 / WARNINGS 0**。
- 覆盖：实体 cases=42, mechanics=43, patterns=21, theories=3, hypotheses=19（共 128）；relations 145 条全合法；八份 run.json 解析通过。
- 纠误：Parabox 发行商口径（Traynor 一人开发兼发行）。
- pattern-000021（唯一解契约）收编既有案例 Sudoku/Obra Dinn/Minesweeper 为 known_uses。

## 2026-11-02（补跑，实际执行于 2026-11-14 11:10）

- 工具：`validation/validate.mjs`；结果：**ERRORS 0 / WARNINGS 0**。
- 覆盖：实体 cases=45, mechanics=46, patterns=22, theories=3, hypotheses=20（共 136）；relations 153 条全合法；九份 run.json 解析通过。
- 纠误：Bejeweled 改名口径（Diamond Mines 相似，非诉讼）与三创始人口径（无 Steve Roughon 讹传）。
- EVOLVES_FROM 关系边首次使用（Candy Crush→Bejeweled 谱系）。

## 2026-11-03（补跑，实际执行于 2026-11-14 11:35）

- 工具：`validation/validate.mjs`；结果：**ERRORS 0 / WARNINGS 0**。
- 覆盖：实体 cases=48, mechanics=49, patterns=23, theories=3, hypotheses=22（共 145）；relations 165 条全合法；十份 run.json 解析通过。
- 合成产出：pattern-000023 输入语义轴（收编既有五案例）；Fruit Ninja 设计者纠误（Luke Muscat）。
- 失败项：Subway Surfers 首抓撞并发限制，重试成功。

## 2026-11-05（补跑，实际执行于 2026-11-14 12:05）

- 工具：`validation/validate.mjs`；结果：**ERRORS 0 / WARNINGS 0**。
- 覆盖：实体 cases=51, mechanics=53, patterns=24, theories=3, hypotheses=23（共 154）；relations 161 条全合法；十一份 run.json 解析通过。
- 纠误：FTL Advanced Edition 日期（2014-04-03，非 2018）；Subset 联创名（Jay Ma，Wikipedia infobox 口径）。
- 合成产出：pattern-000024 完美信息战术（收编 game-000020 STS，game-000018 XCOM 为反例）。

- 2026-11-05 补录：报告三文件随追加提交补齐；state mechanics 计数修正（53→52）。

## 2026-11-14（周六 · 理论与算法第三轮：算法即玩法）

- 工具：`validation/validate.mjs`；结果：**ERRORS 0 / WARNINGS 0**。
- 覆盖：实体 cases=55, mechanics=56, patterns=25, theories=3, hypotheses=25（共 164）；relations 185 条全合法；十二份 run.json 解析通过。
- 合成产出：pattern-000025 确定性预览设计（收编 ITB/STS，立 XCOM/NetHack 反例——预览剂量谱与 pattern-000021/000006/000006 关联声明）。
- README 未提交修订随本提交入库（上批次收尾遗漏，如实补记）。

## 2026-11-15（周日 · 知识归纳与创新 + 周报 W46）

- 工具：`validation/validate.mjs`；结果：**ERRORS 0 / WARNINGS 0**。
- 覆盖：实体 cases=59, mechanics=60, patterns=26, theories=3, hypotheses=27（共 175）；relations 197 条全合法；十三份 run.json 解析通过；W46 周报生成。
- 合成产出：pattern-000026 玩家发现机制转正（SFII 连击 bug 起源，Funamizu 引语）。
- 诚实注记：Mario Kart 橡皮带机制 Wikipedia 本页未讨论（不采信社区口径）；SFII 帧表与 Hades 对话全表标未知。

## 2026-11-04（补跑，实际执行于 2026-11-21 20:40）——ERRORS 0 / WARNINGS 0；纠误 HM/NT 三条；pattern-000027 成谱。

## 2026-11-06（补跑，实际执行于 2026-11-21 21:05）——ERRORS 0 / WARNINGS 0；Loop Hero 发行日纠误；紧凑日 3 案例。

## 2026-11-10（补跑，实际执行于 2026-11-21 21:35）——ERRORS 0 / WARNINGS 0；JJ 发行日纠误；Helix Jump C 级来源诚实标注。

## 2026-11-11（补跑，实际执行于 2026-11-21 22:00）——ERRORS 0 / WARNINGS 0；纠误四条（Doom/Willits/flame belch/Ghostrunner）。

## 2026-11-12（补跑，实际执行于 2026-11-21 22:30）——ERRORS 0 / WARNINGS 0；演绎反馈密度谱成轴；纠误四条（Lemmings/Golden Idol/Her Story）。

## 2026-11-16（补跑，实际执行于 2026-11-21 22:55）——ERRORS 0 / WARNINGS 0；Dig Dug/Galaga 口径纠误两条；pattern-000029 成谱。
