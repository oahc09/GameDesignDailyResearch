---
id: game-000068
title: "Cookie Clicker"
aliases: ["饼干点点乐（中文社区通称）", "Cookie Clicker"]
genres: [simulation, hybrid]
subgenre_tags: []
platforms: [web, pc, ios, android, 主机]
release_year: 2013
creators: ["Julien 'Orteil' Thiennot（法国程序员；'一个晚上写成'发布到 4chan，数小时 5 万玩家）"]
core_loop: "点击大饼干 → 购买建筑（光标/奶奶/工厂/银行…）自动产出 → 造价每买一次 +15% → 金饼干随机增益 → 飞升（ascension）换天界芯片+声望 → 数十年 legacy 更新（Grandmapocalypse 剧情线）"
mechanic_ids: [mechanic-000072]
pattern_ids: []
quality_score: 4.30
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Cookie_Clicker"
    title: "Cookie Clicker - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2013-08-08 浏览器上线（'一个晚上'写成发 4chan，数小时 5 万玩家）；Android 2020-10；Steam 版（Playsaurus 发行，C418 配乐）2021-09-01（6 万+ 同时在线）；主机 2025-05-22", "玩法全项（点击产饼干/建筑自动产出/造价 +15%/金饼干随机 buff/飞升重置换 heavenly chips 与声望（+1% 每级）/wrinklers/Krumblor 龙方糖解锁小游戏；637 成就；RTA 日本速通赛）", "品类地位（IGN：少数确立 idle/incremental 品类的游戏；The Kernel：品类最知名作品）", "评价（IGN Davis 'greatest Idle Game'；Destructoid '进步的幻觉，无实质前进'；Bogost 称粉丝 obsessive；学界分析其对自动化与资本主义的评论）", "前作讽刺与反讽（Bogost 2011 Cow Clicker 讽刺作——Cookie Clicker 被称'Cow Clicker 的逻辑结论'——讽刺变成了现象）", "Orteil 其他作品（Idle Game Maker/AdventureQuest Dragons/NeverEnding Legacy）"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Cookie Clicker（game-000068）

## 核心体验
Idle/增量品类的确立者之一（IGN 口径）：点击产饼干、买建筑自动化、指数成本与飞升重置——Destructoid 的批评句点出其全部设计："进步的幻觉，无实质前进"。**幻觉本身即玩法**。

## 规则与状态转移（含最简伪代码）
- 状态：`(饼干数, 每秒产量 CPS, 建筑清单, 飞升芯片/声望, 剧情进度)`；输入：`{点击, 购买, 飞升}`。

```text
点击:  +1 饼干/次
建筑:  购买 → CPS 增加；造价 = 基价 × 1.15^已购数（指数成本）
金饼干: 随机出现 → 限时 buff
飞升:  重置进度 → 换 heavenly chips（+1% 产出/级）——跨局声望
剧情:  Grandmapocalypse 等 decade 级更新线
```

## 输入与输出
- 输入：点击/购买/飞升（三类，全部可选——不点击也能靠建筑产出）。
- 输出：数字滚动（指数增长的数值演出）、成就（637 个）、剧情事件。

## 难度与学习曲线
"难度"是**指数规划**：何时买哪栋建筑、何时飞升——指数成本与线性收益的优化问题（可完全形式化——求解器友好，pattern-000011 谱系）。

## 关联机制与模式
- 机制：mechanic-000072（指数成本与飞升重置）
- 反讽谱系：Bogost 的 Cow Clicker（2011 讽刺作）→ Cookie Clicker 被称"其逻辑结论"（Wikipedia）——讽刺被当作玩法采纳（pattern-000020 的文化层变体：不是克隆反超，是讽刺转正）。
- 对照：与 game-000059（Hades 死亡重置换叙事）对照——同为"重置换取"，Hades 换故事、Cookie Clicker 换声望倍率；飞升是"重置的意义化"的数值版。

## 设计权衡
- 优点：指数增长数值演出的天然多巴胺；飞升系统把"重置"从惩罚转为收益（对 mechanic-000006 的数值版回答）；一个晚上写成→十余年更新→全平台（独立长青案例）。
- 缺陷：Destructoid 批评口径（幻觉进步）；学界对其成瘾性的批判（Bogost "obsessive"——Wikipedia）。
- 反例：与 game-000052（SpaceChem 优化排行）对照——同为数值优化，SpaceChem 排行竞争、Cookie Clicker 纯自设目标+声望；优化玩法的社交/独处分岔。
- 适用场景：idle/incremental 设计；指数经济。

## 可复现的最小版本与算法
CPS 模型+指数成本+金饼干随机 buff+飞升公式即可复现（数值游戏百行级）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2013-08-08 上线；一晚写成/4chan/5 万玩家 | Wikipedia |
| 规则全项（+15% 成本/金饼干/飞升声望/637 成就） | Wikipedia |
| 品类确立口径（IGN/The Kernel） | Wikipedia |
| Cow Clicker 反讽谱系 | Wikipedia |
| Steam 6 万同时在线/主机 2025 | Wikipedia |

## 推断与未知
- **未知**：各建筑的精确产出表（社区 wiki 口径未核验）；Grandmapocalypse 的完整事件链。
- **推断（分析而非事实）**：飞升系统是 idle 品类的"重置意义化"——把 Destructoid 批评的"幻觉进步"再包装一层真实进步（声望永久加成）；批评催生了系统（分析）。
- 学界的资本主义评论（Wikipedia 载）与游戏机制（自动化/复利）同构——主题与机制同构的罕见案例（分析）。

## 创新延伸（可验证假设素材）
1. 飞升周期的最优解 vs 玩家实际行为对照（指数规划的偏差研究）。
2. "进步幻觉"的情绪测量：Destructoid 批评的可实证化（接 hypothesis-000020 的情绪量表）。
