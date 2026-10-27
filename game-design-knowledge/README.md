# game-design-knowledge — 游戏设计研究知识库

由 Game Design Research Agent 按 `../Game_Design_Research_Agent_SPEC.md`（唯一规范来源，具有约束力）维护：
持续研究经典与创新游戏玩法，沉淀可追溯、可去重的结构化知识，供后续 Game Design Skill / AI Agent 检索与复用。

- **规范与调度**：见 `../Game_Design_Research_Agent_SPEC.md`（每日 23:10 Asia/Shanghai；周日加周报；月末周日加月审）
- **Markdown 为可读主记录，JSONL 为可检索索引**；索引由各实体卡 frontmatter 派生，两处不得出现互相矛盾的事实
- **归档规则**：日报按计划研究日期归档至 `reports/daily/YYYY/MM/YYYY-MM-DD/`，补跑不另建目录

## 目录

| 路径 | 内容 |
|---|---|
| `config/` | 调度与评分（research.yaml）、分类（taxonomy.yaml）、别名与归并规则（aliases.yaml） |
| `cases/` | 游戏案例卡（每例一份 Markdown + YAML frontmatter，`game-NNNNNN`） |
| `mechanics/` | 原子机制卡（`mechanic-NNNNNN`） |
| `patterns/` | 通用设计模式卡（`pattern-NNNNNN`） |
| `theories/` | 理论条目与原始参考 |
| `hypotheses/` | 创新组合与可检验假设（`status: proposed` 起） |
| `indices/` | cases/mechanics/patterns/relations JSONL 索引 |
| `reports/` | 日报（daily）、周报（weekly）、月审（monthly） |
| `backlog/` | 未入选但有价值候选，避免重复从零检索 |
| `state/` | 研究状态与运行历史 |
| `validation/` | 校验记录 |

## 当前状态（2026-10-27 首日初始化）

- 案例 5 · 机制 6 · 模式 3 · 理论 1 · 假设 2
- 首日专题：休闲与超休闲（周二）
- 详见 `reports/daily/2026/10/2026-10-27/report.md`
