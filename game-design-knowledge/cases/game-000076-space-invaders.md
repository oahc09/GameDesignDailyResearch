---
id: game-000076
title: "Space Invaders"
aliases: ["太空侵略者（中文通行译名）", "Space Invaders"]
genres: [shooter, hybrid]
subgenre_tags: []
platforms: [arcade, atari_2600, 多平台]
release_year: 1978
creators: ["Taito（设计/程序 Tomohiro Nishikado 一人独力约一年，自制开发工具；Midway 北美发行）"]
core_loop: "横移 Laser Base → 射击 5×11 侵略者阵列 → 阵列越少移动越快（意外保留为难度）→ 神秘 UFO 奖励 → 母舰掩体被侵蚀 → 侵略者到底即败"
mechanic_ids: [mechanic-000080]
pattern_ids: [pattern-000022, pattern-000029]
quality_score: 4.88
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Space_Invaders"
    title: "Space Invaders - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1978-07 日本大量发行（Midway 北美 1978-11）；Nishikado 一人一年自制工具", "规则全项（5×11 阵列横移下降/掩体侵蚀/神秘 UFO/侵略者到底即败）", "**加速是意外**：侵略者越少渲染帧越快——Nishikado 保留为难度机制而非修复（本日最重要机制发现）", "起源（回应 Breakout；避免人类目标——'射击人不受欢迎'；Yamato/Star Wars 引导太空主题；异形来自 War of the Worlds 章鱼+鱿鱼螃蟹）", "商业（1978 日末 10 万台/1979 全球 75 万；1982 毛收 $3.8B——当时最畅销游戏与最高毛收娱乐产品；黄金时代开启）", "2600 版（1980）使主机销量四倍——首个 killer app 与首个官方街机-主机授权；百余款克隆（'Invader game' 成通称）", "影响（Miyamoto/Kojima/Tajiri/Romero/Carmack/Jarvis；YMO Computer Game；Unicode 外星人 emoji 2017；Nagoya 打法/Wall of Death 漏洞策略）", "荣誉（首个 Arcade Awards；名人堂 2016；Times 2007 '最具影响力游戏'）", "续作/重制谱系（Part II 1979→Extreme 2008→Frenzy 2017→Counter Attack 2020）"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Space Invaders（game-000076）

## 核心体验
固定射击的品类原点：5×11 侵略者阵列横移下降，越打越少**越快**——这来自帧渲染的意外（剩余对象少渲染快），Nishikado 保留为难度机制。一个被保留的硬件缺陷成为史上最著名的难度曲线之一（pattern-000022 再添最强证据）。

## 规则与状态转移（含最简伪代码）
- 状态：`(阵列（行×列存活）, 移动方向, 掩体侵蚀, 分数)`；输入：`{横移, 射击}`。

```text
阵列:  5×11 横移 → 触边下降一行 → 反向
加速:  存活数减少 → 渲染帧快 → 移动快（意外机制保留——Nishikado 决定不修）
掩体:  可侵蚀掩体（上下皆可被打穿）
UFO:   顶部随机穿越 → 奖励分
败:    生命尽 or 侵略者触底
```

## 输入与输出
- 输入：横移+射击（两键）。
- 输出：阵列行进音（556 定时器做的 Jaws 式行进声——Kamei 口径）、掩体侵蚀、UFO 奖励音。

## 难度与学习曲线
难度曲线是**意外的自然指数**：剩余越少越快——玩家在终局面对"最后一个侵略者极速横飞"的紧张（Nagoya 打法/Wall of Death 漏洞策略由此而生，Wikipedia）。设计者拒绝修复意外，因为"这样更好玩"（Wikipedia 口径）——缺陷保留（pattern-000022）的街机时代奠基案例。

## 关联机制与模式
- 机制：mechanic-000080（存活数驱动的渲染加速难度）
- 模式：pattern-000022（保留缺陷——本卡是最强历史证据）、pattern-000029（每代一变异——SI→Galaxian→Galaga 的固定射击演化链）
- 影响（Wikipedia 全表）：Miyamoto/Kojima/Tajiri/Romero/Carmack/Jarvis；2600 版首个 killer app；黄金时代开启。

## 设计权衡
- 优点：意外难度的自然性（无法作弊的终局紧张）；掩体侵蚀的持久地形（后来射击的掩体/护盾机制源头——Wikipedia）；一人一年自研工具的极限开发样本。
- 缺陷：未及时专利 → 克隆百余款（'Invader game' 成通称——对照 pattern-000020）；内容极简。
- 反例：与 game-000018（XCOM 隐藏概率）对照——SI 的加速是公开可测的物理事实（玩家可计算），XCOM 是隐参数；透明谱的历史两端。
- 适用场景：固定射击的一切变体；"意外机制保留"研究。

## 可复现的最小版本与算法
阵列移动+渲染驱动的自然加速（或模拟）+掩体侵蚀即可复现（含意外机制的忠实还原——保留缺陷）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1978-07 发行；Nishikado 一人一年 | Wikipedia |
| **加速意外保留**（渲染帧效应不修） | Wikipedia |
| $3.8B/黄金时代/2600 killer app | Wikipedia |
| 影响人物全表/文化现象全表 | Wikipedia |

## 推断与未知
- **未知**：每帧侵略者渲染的加速常数；掩体侵蚀的位图细节。
- **推断（分析而非事实）**：保留加速的深层原因可能是街机经济学——加速缩短高手局时长=提高翻台率；"更好玩"与"更赚钱"在此同向（分析）。
- 避免人类目标的道德自省（Nishikado）是早期游戏主题选择的文化证据（分析）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000033：意外加速 vs 线性加速的对照（保留 vs 修复的实证）。
2. 掩体侵蚀的持久地形在现代射击的复兴研究（Fortnite 建筑破坏对照）。
