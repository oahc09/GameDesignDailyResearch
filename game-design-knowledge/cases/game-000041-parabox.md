---
id: game-000041
title: "Patrick's Parabox"
aliases: ["帕特里克的悖论盒（中文社区通称）", "Parabox"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [pc, nintendo_switch, ps5]
release_year: 2022
creators: ["Patrick Traynor（独立开发兼发行）"]
core_loop: "推动盒子 -> 盒可包含世界（递归嵌套）-> 推盒进入另一盒（缩小装入）/推出边缘（放大溢出）-> 覆盖全部目标格且站上自身目标格"
mechanic_ids: [mechanic-000042]
pattern_ids: []
quality_score: 4.60
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Patrick%27s_Parabox"
    title: "Patrick's Parabox - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2022-03-29 PC（Linux/macOS/Windows）/2023-07-26 Switch/PS5；Demo 2020-06-16", "Traynor 一人开发兼发行（Unity；音乐 Priscilla Snow）", "规则全项（盒推入另一盒缩小装入/推出边缘放大溢出/盒可自含——'pushing a box outside of itself'悖论；玩家角色即一个盒；364 关+可选挑战；覆盖全部标记格并站上自身目标格获胜）", "起源（UCSD 游戏开发俱乐部、最初为双人合作 Sokoban 潜行构想、四年后重写为任意嵌套深度；受 juner 的 Sokosoko 启发）", "获奖（IndieCade 2019 Developer Choice；IGF 2020 Excellence in Design——条目列为获奖）", "MC 84（Eurogamer 'morish, captivating'；RPS 'infinitely pleasing'）"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# Patrick's Parabox（game-000041）

## 核心体验
Sokoban 谱系的递归极限：盒子可以包含世界、包含自己、被推出自己之外。每次推动都在改写"什么在什么里面"——玩家操作的不是物体，是**包含关系本身**。

## 规则与状态转移（含最简伪代码）
- 状态：`(嵌套盒树: 每盒含一个网格世界, 玩家盒位置, 目标格)`；输入：`{四向推动}`。

```text
推动:  Sokoban 式推盒
嵌套:  盒推入另一盒 -> 缩小装入（被包含的世界视图）
       盒推过开放边缘 -> 放大溢出（升维）
悖论:  盒可自含/推出自外（递归状态空间，深度任意）
胜利:  覆盖全部标记格 + 玩家盒停在自身目标格
```

## 输入与输出
- 输入：四向推动（唯一输入集）。
- 输出：嵌套缩放动画（进入/溢出的尺度观感）、层级视图。

## 难度与学习曲线
难度=在**任意嵌套深度**上维持状态一致性——人类要同时追踪"我在哪个盒里/这个盒在哪个盒里"。Traynor 的实现是为任意嵌套深度重写代码（Wikipedia）——工程与设计同步扩张。

## 关联机制与模式
- 机制：mechanic-000042（递归包含关系操作）
- 谱系：Sokoban（game-000036）推块语义 → Sokosoko（juner，itch.io，Wikipedia 引）→ Parabox；与 game-000006（Baba 词块规则）同为"推块语义的元层化"但方向不同——Baba 改规则、Parabox 改拓扑（分析口径）。
- 求解器视角：递归包含使状态空间形成树状嵌套——pattern-000011 的前沿测试案例（分析）。

## 设计权衡
- 优点：单一机制（推+嵌套）生成 364 关不重复；悖论案例（推盒出自外）是规则的自我指涉玩具；IGF 设计奖背书。
- 缺陷：嵌套深度不可读时挫败陡增（MC 84——评价低于 Sokoban/SSR 的谱系同伴，分析）；视觉上需要强力的层级指示（推断）。
- 反例：与 game-000029（Portal 空间传送）对照——两者都改写"空间包含"，Portal 用 3D 物理实现局部捷径，Parabox 用 2D 网格实现全域递归。
- 适用场景：拓扑/递归谜题；作为"空间元层"设计的教学样本。

## 可复现的最小版本与算法
嵌套盒树 + 推动结算（缩小/溢出）+ 目标判定即可复现核心循环；任意深度实现为工程核心（Wikipedia 确认为重写重点）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2022-03-29 发行；Traynor 一人开发兼发行 | Wikipedia |
| 规则全项（嵌套/缩小装入/溢出/自含悖论/364 关） | Wikipedia |
| 起源（UCSD 俱乐部/Sokosoko 启发/任意深度重写） | Wikipedia |
| IndieCade Developer Choice + IGF 2020 设计奖 | Wikipedia |

## 推断与未知
- **未知**：364 关的难度曲线分布；嵌套深度上限的具体数值。
- **推断（分析而非事实）**：递归嵌套是 Sokoban 死锁概念的**对偶**——Sokoban 制造不可逆（悔恨），Parabox 制造可逆的全局重排（一切包含关系都可再推）；谱系的两个极点。
- Traynor 从"双人合作潜行 Sokoban"演变而来（Wikipedia）——又一个"原构想被机制发现取代"的案例（分析）。

## 创新延伸（可验证假设素材）
1. 嵌套深度 × 可读性实验：同一谜题在不同视图辅助（层级高亮/迷你地图）下的求解表现。
2. 递归×物理：嵌套盒接入重力（Parabox 无重力——Wikipedia 未载重力，为留白方向）。
