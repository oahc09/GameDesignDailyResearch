---
id: game-000032
title: "Getting Over It with Bennett Foddy"
aliases: ["和班尼特福迪一起攻克难关（中文通行译名）", "GOI", "掘地求升"]
genres: [action, hybrid]
subgenre_tags: []
platforms: [pc, ios, android, linux]
release_year: 2017
creators: ["Bennett Foddy（Unity 制作）"]
core_loop: "鼠标控制人锤 -> 钩挂/撑跳/翻转攀山 -> 无检查点（任意失误可归零）-> Foddy 旁白哲学安抚 -> 登顶进入完成者聊天室"
mechanic_ids: [mechanic-000033]
pattern_ids: [pattern-000018]
quality_score: 4.48
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Getting_Over_It_with_Bennett_Foddy"
    title: "Getting Over It with Bennett Foddy - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-13"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2017-10-06 Windows（Humble Monthly，270 万+玩家）/2017-12-06 Steam·iOS/2018 Android/Linux", "玩法全项（Diogenes 大锅+Yosemite 锤、鼠标锤控、无检查点、登顶进入完成者聊天室）", "旁白设计语：原拟讽刺，改为'more or less totally encouraging'（玩家已经够沮丧了）", "灵感：Jazzuo 的 Sexy Hiking（2002，'indie 开发者间的 meme'；Adam Saltsman 称'玩过的最糟游戏'）", "评价（RPS 2017 最佳 PC 之一、Polygon 年度 36、GameSpot '2017 最怪'）", "2018 IGF Nuovo 奖", "'Foddian' 类型命名与后继（Jump King、Only Up!、Foddy 自己的 A Difficult Game About Climbing 2024）；Just Cause 4 彩蛋"]
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

# Getting Over It（game-000032）

## 核心体验
一个坐在锅里的人、一把锤子、一座山、零检查点。失误不是回到检查点，而是回到起点或任何更低处——**失去的威胁本身是游戏**。Foddy 的旁白在你想砸键盘时讨论挫折哲学，原拟讽刺，最终改为"基本上全程鼓励"（Wikipedia 引）。

## 规则与状态转移（含最简伪代码）
- 状态：`(锤尖位置（鼠标）, 锅-人-锤的物理耦合, 当前高度)`；输入：`{鼠标（全向连续量）}`。

```text
锤物理:  鼠标位置即锤尖目标位；锤与地形钩挂 -> 撑/拉/摆
攀爬:    钩住凸起撑起身体；挥锤甩动可短距飞行
失败:    无检查点、无失败画面——下滑就是唯一的"惩罚"，物理自动结算
终点:    登顶 -> 完成者聊天室（非主播玩家唯一的社交终点）
```

## 输入与输出
- 输入：鼠标全向连续输入（不是按键组合，是手腕的物理延展）。
- 输出：锤-地形交互的物理反馈、高度变化（唯一进度）、哲学旁白。

## 难度与学习曲线
无检查点把 game-000008（Celeste）的失败光谱推到极限端：**失败成本=全部已爬距离**。学习=锤-地形的可供性词汇（哪里能钩、哪里会滑）+情绪管理。直播文化把"归零瞬间"变成内容高光——失败的可观赏性是该作传播引擎（分析口径）。

## 关联机制与模式
- 机制：mechanic-000033（锤物理与无检查点归零）
- 模式：pattern-000018（控制即玩法——与 QWOP 同族，本作是"Foddian"类型的命名源头（Wikipedia：Jump King/Only Up! 等后继））
- 失败光谱：与 mechanic-000006（死亡即重开）、mechanic-000008（倒带）、pattern-000004（撤销）对照——本作是"无护栏"端：失败成本最大但学习记忆最深（分析）。
- 渊源：Sexy Hiking（2002，Jazzuo）的致敬重做——"重做一个 meme 游戏"路径（Wikipedia：Saltsman 称原作最糟）。

## 设计权衡
- 优点：单输入（鼠标）承载全部技能空间；无检查点的恐惧感使每次成功都有真实重量；旁白的共情设计（不嘲讽）；IGF Nuovo 与 Twitch 传播双赢。
- 缺陷：情绪设计反噬——非主播玩家的挫败可能无出口（Wired 式批评口径在 Witness 上出现过，本作同理）；完成者聊天室的社交终点对多数玩家不可达。
- 反例：与 game-000016（Minesweeper 首击保护）对照——Minesweeper 用生成端保护开局，GOI 刻意取消一切保护；同为公平设计，方向相反。
- 适用场景：技能型攀爬玩法；直播友好设计；"挫折哲学"主题。

## 可复现的最小版本与算法
锤-身体物理耦合（约束求解）+ 地形碰撞 + 高度计量即可复现；无检查点结构零成本实现——难度全部来自地形设计。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2017-10 Humble Monthly（270 万玩家）/2017-12 Steam | Wikipedia |
| 玩法全项（Diogenes/锤/无检查点/完成者聊天室） | Wikipedia |
| 旁白设计语（讽刺→鼓励） | Wikipedia |
| Sexy Hiking 渊源与 Saltsman 评价 | Wikipedia |
| IGF Nuovo 2018；Foddian 类型后继 | Wikipedia |

## 推断与未知
- **未知**：具体销量（Wikipedia 未载）；地形设计的分段难度表。
- **推断（分析而非事实）**：旁白从讽刺改为鼓励是**情绪设计的关键反转**——rage game 的作者通常站在玩家对面，Foddy 站在玩家这边；这使"惩罚性设计"不变成"敌意设计"。
- **推断（分析而非事实）**：Humble Monthly 的 270 万玩家是"订阅捆绑即发行"的案例——低门槛大规模曝光先于 Steam 定价发行。

## 创新延伸（可验证假设素材）
1. 可调护栏实验：加入"可选检查点"开关（接 pattern-000006 Assist 路线），检验 Foddian 类型能否在不破坏身份的前提下扩大受众。
2. 锤物理×其他场景：同一锤控移植到水下/零重力——检验技能词汇的迁移性。
