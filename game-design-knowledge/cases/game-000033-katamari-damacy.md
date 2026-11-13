---
id: game-000033
title: "Katamari Damacy（塊魂）"
aliases: ["块魂", "Katamari"]
genres: [action, puzzle, hybrid]
subgenre_tags: []
platforms: [ps2, 多平台重制]
release_year: 2004
creators: ["Keita Takahashi（高橋慶太，导演）", "Namco（Digital Hollywood Game Laboratory，约 20 人 + Now Production）"]
core_loop: "滚动粘球 -> 吸附小于当前体积的物体 -> 体积增长解锁更大物体（图钉→建筑→山）-> 双摇杆控制 -> 重造被父王毁掉的星辰"
mechanic_ids: [mechanic-000034]
pattern_ids: [pattern-000019]
quality_score: 4.53
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Katamari_Damacy"
    title: "Katamari Damacy - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-13"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2004-03-18 日本 PS2（约 ¥4,000，大作的 2/3 价）/2004-09-21 北美；欧洲从未发行", "Takahashi 导演；预算不足 $1M（约 Namco 大作 1/10）；20 人 + Now Production", "玩法全项（粘球吸附阈值随体积、双摇杆、成长解锁大物、宇宙王设定、Hoshino 家副线）", "模式（Make a Star 限时/收集变体/分数战/永恒模式/分屏对战）", "核心玩法获美国专利 7,402,104", "销量（日本首周 3.2 万、2004 底 15.5 万 vs 50 万预期；北美 12 万+）——sleeper hit（零售商低估后全国售罄）", "MC 86（IGN 9/Eurogamer 9/Famitsu 31/40；批评：约 10 小时偏短且重复）", "GDCA Excellence in Game Design 2005；Good Design Award（首个游戏）；MoMA 永久收藏 2012", "We Love Katamari（2005）；Reroll（2018 Switch/PC）；影响 Donut County"]
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

# Katamari Damacy（game-000033）

## 核心体验
滚一颗有粘性的球，把比它小的东西粘上来——球越大，能粘的东西越大。**空间尺度本身就是进度条**：从图钉到建筑到岛屿，世界的"相对尺寸"随你成长而不断翻转。

## 规则与状态转移（含最简伪代码）
- 状态：`(球体积, 球位置/速度, 场景物体清单)`；输入：`{双摇杆（前推/转向）, 快速横移/跳跃}`。

```text
吸附:   物体体积 < 球体积 -> 粘附；>= 球体积 -> 碰撞推开
增长:   粘附使球半径增长（对数式）-> 阈值解锁更大可吸附物
        （图钉 → 铅笔 → 猫 → 人 → 车 → 房屋 → 树 → 山）
失败:   基本无死（时限与目标尺寸是唯一压力——时钟封顶谱系）
```

## 输入与输出
- 输入：双摇杆同步滚动（同时按=冲刺）——输入语义与"滚球"物理同构。
- 输出：体积增长的可视化阈值跳变、吸附的物体清单（球面叙事）、BGM 事件。

## 难度与学习曲线
难度不在操作而在**尺度规划**：先滚哪片区域、何时离开小物区。成长曲线的平滑度决定"粘到新尺度"的节拍——这是数值设计直接生成乐趣的样本（核心玩法获美国专利 7,402,104，Wikipedia）。

## 关联机制与模式
- 机制：mechanic-000034（尺度阈值增长循环）
- 模式：pattern-000019（尺度即进程——进度条=玩家在世界中的相对大小）
- 渊源与影响：不足 $1M 预算的实验项目成为 sleeper hit；影响 Donut County（Wikipedia）——"吸积成长"谱系源头。
- 失败光谱：基本无死（时钟封顶+目标尺寸），与 game-000009/000021 同谱系。

## 设计权衡
- 优点：一个机制（吸附阈值）+ 尺度增长生成完整的进程系统，无需经验值/升级树；荒诞叙事（父王醉毁星辰）与玩法同构（重造秩序=滚球整理世界）；低价策略（日版 2/3 价）助推实验作品触达。
- 缺陷：约 10 小时偏短且后期重复（MC 批评口径）；吸附判定边缘的挫败（"明明小于球"的边界感，社区常见讨论，未入库来源，标注）。
- 反例：与 RPG 经验值曲线对照——Katamari 的成长曲线是**物理的**（体积→阈值），玩家能直观感知成长原因；抽象数值曲线无此直觉。
- 适用场景：任何"收集→成长→解锁更大收集目标"的玩法（吸积类、合并类）。

## 可复现的最小版本与算法
物体体积表 + 吸附阈值判定 + 对数增长曲线 + 场景分尺度布置即可复现核心循环；专利 7,402,104 覆盖核心玩法（复现需注意专利状态——分析提示）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2004-03-18 日本 PS2；低价策略；欧洲未发行 | Wikipedia |
| 团队/预算（<$1M，大作 1/10）与专利 7,402,104 | Wikipedia |
| 玩法全项（吸附阈值/双摇杆/模式） | Wikipedia |
| sleeper hit 数据（15.5 万 vs 50 万预期；售罄） | Wikipedia |
| GDCA 设计奖/Good Design/MoMA | Wikipedia |

## 推断与未知
- **未知**：增长曲线的精确公式（对数底数与阈值表）；Takahashi 对系列态度的后续表述（Wikipedia 未载，不采信社区口径）。
- **推断（分析而非事实）**：阈值设计使"尺寸翻转"成为叙事——同一物体从障碍变食物的瞬间是游戏的核心情感节拍（分析）。
- **推断（分析而非事实）**：日版定价 2/3 是实验作品的发行策略样本——用价格对冲品类陌生（与 Sleeper hit 结果互证）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000016：吸积阈值 × Suika 合并阶链的跨类型组合。
2. 尺度倒序关：从巨大开始只能粘"更小"（缩小 katamari），检验成长方向的对称性。
