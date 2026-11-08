---
id: game-000030
title: "Snakebird"
aliases: ["蛇鹈鸟（中文通行译名）"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [pc, ios, android, nintendo_switch]
release_year: 2015
creators: ["Noumenon Games（瑞典）"]
core_loop: "格上移动蛇鸟 -> 吃水果使身体变长 -> 身体本身成为桥/钩/配重 -> 全员抵达出口 -> 53 关难度曲线陡峭"
mechanic_ids: [mechanic-000031]
pattern_ids: [pattern-000017]
quality_score: 4.53
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Snakebird_(video_game)"
    title: "Snakebird (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-08"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2015-05-04 PC（iOS/Android 2016-07-21）发行", "Noumenon Games（瑞典，自发行）", "规则全项（2D 网格、Snake 式移动+重力、吃果变长、全员到出口、53 关）", "难度声誉（Kotaku 'wolf in sheep's clothing'、Pocket Gamer 'the Dark Souls of puzzle games'、Touch Arcade 5/5）", "Snakebird Primer（2019-02，70 关刻意更易）与 Snakebird Complete（Switch 2023-11-24/PC 2023-12-29，Astra Logical 发行，Eurogamer 赞非线性地图）", "Baba Is You 作者 Teikari 称 Snakebird 是对其设计影响最大的作品", "2020 研究论文：关卡的微小改动可剧烈改变解法长度"]
created_at: "2026-11-08"
updated_at: "2026-11-08"
---

# Snakebird（game-000030）

## 核心体验
把经典 Snake 接上重力：蛇鸟每节身体都受重力下坠，吃水果变长——**变长的身体同时是拖累与工具**（桥、钩、配重）。规则五分钟能讲完，难度却让 Pocket Gamer 称之为"解谜界的黑魂"。

## 规则与状态转移（含最简伪代码）
- 状态：`(网格, 每条蛇鸟的节列表, 果实剩余, 出口)`；输入：`{四向移动}`。

```text
移动:   Snake 式——头前进，身体逐节跟随
重力:   每节无支撑即下坠（移动决策同时改变多节的支撑状态）
生长:   吃果实 -> 该蛇鸟 +1 节（变长改变可达性与桥接能力）
胜利:   所有蛇鸟同时位于出口格
```

## 输入与输出
- 输入：四向移动（轮流操控多条蛇鸟）。
- 输出：逐节移动的连锁反馈（一节动，全身动）、生长动画、全员抵达的结算。

## 难度与学习曲线
规则极简但**状态空间组合爆炸**（多蛇鸟 × 逐节重力 × 变长时序）；2020 年研究论文发现关卡的微小改动可剧烈改变解法长度（Wikipedia）——难度对关卡拓扑高度敏感。其"可爱外表/地狱难度"反差成为传播符号。

## 关联机制与模式
- 机制：mechanic-000031（蛇身增长作为可变形资源）
- 模式：pattern-000017（难度重定位续作——Primer 刻意做易，触达更广受众）
- 谱系：Baba Is You 作者自述 Snakebird 是对其设计影响最大的作品（Wikipedia）——与 game-000006 构成影响链；与 Sokoban（未入库）同属网格推拉家族。
- 无障碍对照：Primer（续作做易）与 Celeste 的 Assist Mode（同作内开关，game-000008）是"难度可及"的两条路线（pattern-000017 vs pattern-000006）。

## 设计权衡
- 优点：单规则（重力 Snake + 生长）生成深度谜题；身体作为资源的设计把"自我"变成可塑材料；续作易化而非原作降难，保住了核心受众的挑战契约。
- 缺陷：难度陡峭劝退大众（两极口碑即证据）；状态空间的不可读性（重力逐节结算在脑内难以全演——这正是难度来源，也部分是不可读来源）。
- 反例：与 game-000015（2048）对照——Snakebird 的状态空间同样可形式化，但逐节重力使其远难于心算；同为网格谜题，可读性差距即受众差距。
- 适用场景：网格谜题的"身体即工具"变体；需要教学续作分离的设计。

## 可复现的最小版本与算法
逐节移动+逐节重力结算+生长规则即可复现（百行级）；2020 论文（Wikipedia 引）证明其解法长度对拓扑敏感——可作为求解器难度度量的研究对象。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2015-05-04 发行；Noumenon（瑞典） | Wikipedia |
| 规则全项（Snake 移动+重力/吃果变长/全员出口/53 关） | Wikipedia |
| 难度声誉三来源（Kotaku/Pocket Gamer/Touch Arcade） | Wikipedia |
| Primer（2019，刻意做易）与 Complete（2023） | Wikipedia |
| Teikari（Baba 作者）影响力自述；2020 论文 | Wikipedia |

## 推断与未知
- **未知**：各关的最优解长度分布（2020 论文的具体结论未读原文）；Primer 的具体教学改动清单。
- **推断（分析而非事实）**："难"并非设计失误而是身份：其难度声誉本身成为传播资产（黑魂类比免费营销）；Primer 的存在证明作者清楚这一点——挑战契约与可及性被拆到两个产品里。
- **推断（分析而非事实）**：逐节重力的结算顺序（从尾到头/从头到尾）会改变谜题语义——实现细节即玩法（这是网格物理谜题的共同陷阱，分析口径）。

## 创新延伸（可验证假设素材）
1. 身体资源的对偶实验：蛇鸟"变短"（吃果缩短）作为新维度——检验"失去"能否比"获得"产生更好的谜题。
2. 求解器辅助教学：实时显示"距离可解还有几步"（接 pattern-000011 熵度量路线）。
