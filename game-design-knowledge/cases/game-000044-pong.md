---
id: game-000044
title: "Pong"
aliases: ["乓（中文通行译名）"]
genres: [action, hybrid]
subgenre_tags: []
platforms: [arcade, home]
release_year: 1972
creators: ["Allan Alcorn（Atari 工程师，Nolan Bushnell 布置的训练作业）"]
core_loop: "双人对拍 -> 拍面八段决定回球角度 -> 长回合加速 -> 对方漏球得分 -> 11 分制"
mechanic_ids: [mechanic-000045]
pattern_ids: [pattern-000022]
quality_score: 4.78
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Pong"
    title: "Pong - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1972-11-29 北美发行；Alcorn 训练作业；Bushnell 概念源自 Magnavox Odyssey 乒乓球演示（1972-05）", "设计细节（拍面八段控制回球角度、长回合加速、拍不可达屏幕顶部——无法修复的电路缺陷被 Alcorn 保留为难度限制器）", "11 分制", "商业（首台街机电子游戏成功；单台日收 $35-40 约为其他机器四倍；1973 年 2500 台订单、1974 底 8000+ 台）", "原型在 Andy Capp's Tavern 因集币箱满溢损坏", "克隆潮（Atari 未及时申请专利；Ramtek/Sega Pong Tron/Taito Elepong 等；Atari 份额不足三分之一；Bushnell 称对手 'Jackals'）", "Magnavox 诉讼（1974-04 起诉；1976-06 和解，Atari 成为被许可人 $1.5M 八期）", "家用版（1975，'Darlene' LSI 单芯片，Sears Tele-Games 独占 $98.95，假日季 15 万台）", "地位（电子游戏行业的创立者口径；Smithsonian 永久收藏；名人堂 2015）"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# Pong（game-000044）

## 核心体验
整个行业的起点：两块拍、一颗球、11 分制。它的机制研究价值在两处被保留的"不完美"——八段拍面（离散角度控制）与拍不可达顶部的电路缺陷（被有意保留为难度限制器）。

## 规则与状态转移（含最简伪代码）
- 状态：`(拍位置, 球位置/速度矢量, 比分)`；输入：`{拍上下移动}`。

```text
回球:  球触拍 -> 按触点所在八段决定反射角度（离散角度表）
加速:  长回合球速递增
限制:  拍不可达屏幕顶部（电路缺陷保留为难度限制器——顶部是玩家的死角）
胜利:  先得 11 分
```

## 输入与输出
- 输入：旋钮/拍上下（一维连续量）。
- 输出：球的物理轨迹、比分。

## 难度与学习曲线
难度自平衡：八段角度表给玩家"打角度"的主动技能（不是等球而是打角度）；长回合加速制造张力；顶部死角让高手也有失误空间。三者叠加使 11 分制下的对局始终有悬念（分析口径——机制事实来自 Wikipedia）。

## 关联机制与模式
- 机制：mechanic-000045（八段拍面角度与缺陷保留）
- 模式：pattern-000022（保留缺陷为特性——与 Pac-Man Pinky 向上 bug 同族）
- 谱系：Breakout（game-000044）承其拍-球物理；竞速/体育对战的一切"角度控制"玩法源头。

## 设计权衡
- 优点：一维输入×八段角度=足够的技能深度；缺陷保留的成本为零（比修复便宜且更好玩）；双人对称设计（同一物理双方共享）。
- 缺陷：未及时申请专利 → 克隆潮吞掉市场份额（Atari 不足 1/3——Wikipedia）；单机无聊（双人设计）。
- 反例：与 game-000034（Papers Please 单人）对照——Pong 的乐趣全部来自对称双人（社交来源），单人无意义；"对战对称性"设计的第一课。
- 适用场景：任何"角度控制+回合加速"的对战玩法。

## 可复现的最小版本与算法
八段反射表 + 线性加速 + 11 分制即可复现（数十行级）；模拟物理即可。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1972-11-29 发行；Alcorn 训练作业；Odyssey 演示渊源 | Wikipedia |
| 八段角度/长回合加速/顶部缺陷保留 | Wikipedia |
| 商业数据（单台日收四倍/8000 台 1974） | Wikipedia |
| Magnavox 诉讼与 $1.5M 和解 | Wikipedia |
| 家用版 Darlene/Sears 15 万台 | Wikipedia |

## 推断与未知
- **未知**：八段角度表的精确值；Alcorn 修复顶部缺陷的技术细节（Wikipedia 只说"unfixable"）。
- **推断（分析而非事实）**：八段离散化是"模拟到数字"的第一次手感工程——连续物理被离散成可学习的角度表（现代格斗游戏的输入缓冲同思路）。
- 克隆潮未及时专利保护的教训直接促成后来 Atari 的专利策略（分析）。

## 创新延伸（可验证假设素材）
1. 缺陷保留的 A/B：修复顶部 vs 保留顶部（hypothesis 素材——检验缺陷差异化的留存效应）。
2. 八段→连续角度：现代实现的连续角度是否比八段更有深度（离散可学习的辩护研究）。
