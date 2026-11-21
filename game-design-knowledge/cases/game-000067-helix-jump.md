---
id: game-000067
title: "Helix Jump"
aliases: ["螺旋跳塔（中文社区通称）"]
genres: [action, hybrid]
subgenre_tags: [hypercasual]
platforms: [ios, android]
release_year: 2018
creators: ["Voodoo（发行）× H8Games（开发）"]
core_loop: "球弹跳下坠 → 滑动旋转塔身（转塔不转球）→ 从缺口坠落穿层 → 落红段即败 → 连穿层累计 → 过关 smash 底座"
mechanic_ids: [mechanic-000071]
pattern_ids: []
quality_score: 3.85
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://apps.apple.com/us/app/helix-jump/id1345968745"
    title: "Helix Jump — App Store 官方页"
    publisher_or_author: "Voodoo / H8Games"
    published_at: "2018-02-10"
    accessed_at: "2026-11-21"
    source_type: official_page
    evidence_level: "C"
    supports_claims: ["2018-02-10 发行（商店口径）", "玩法描述：旋转螺旋塔引导球从缺口下落，红色危险段即败（官方页+Sensor Tower 口径；**Wikipedia 无独立条目（404）——本卡来源为应用商店 C 级与搜索摘要，无 B 级百科佐证，如实标注**）"]
  - url: "https://play.google.com/store/apps/details?id=com.h8games.helixjump"
    title: "Helix Jump — Google Play 官方页"
    publisher_or_author: "H8Games / Voodoo"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: official_page
    evidence_level: "C"
    supports_claims: ["Android 发行存在与玩法自述（与 App Store 互证）"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Helix Jump（game-000067）

## 核心体验
超休闲的"反向操作"样本：球自动弹跳下坠，玩家不控球而是**旋转塔身**——把传统的"移动角色躲障碍"翻转为"移动世界"。单指滑动、红色段即败、连穿层的爽感。

## 规则与状态转移（含最简伪代码）
- 状态：`(球位置/弹跳, 塔身角度, 层数进度)`；输入：`{滑动（旋转塔身）}`。

```text
弹跳:  球落平台 → 弹起（自动）
旋转:  滑动 → 塔身旋转（球不动）→ 缺口对位即穿层
危险:  落红段 → 失败
过关:  抵达底座 → smash 连穿演出结算
```

## 输入与输出
- 输入：单指滑动（塔身角度——间接控制：操作世界而非角色）。
- 输出：3D 螺旋塔旋转、穿层演出、smash 底座结算。

## 难度与学习曲线
难度=对位预判（旋转速度×缺口位置的提前量）；"转世界不转角色"消除直接操作误差、引入间接控制的学习（分析口径）。

## 关联机制与模式
- 机制：mechanic-000071（转塔不转球的间接控制）
- 对照：与 game-000023（Pac-Man 转角决策）对照——同为"引导体穿过结构"，Pac-Man 玩家移动、Helix 玩家转结构（操作对象反转谱系）。
- 来源诚实注记：Wikipedia 无独立条目——本卡来源为 C 级商店页，证据等级全库最低之一（如实标注）。

## 设计权衡
- 优点：间接控制的新鲜感+单指极简（超休闲范式）；2018 年超休闲爆款的代表作之一（Voodoo 崛起节点，搜索口径）。
- 缺陷：深度极浅（关卡制+简单物理）；证据等级低（无百科条目——研究价值受限，诚实标注）。
- 反例：与 game-000046（Doodle Jump 倾斜+弹跳）对照——同为弹跳玩法，Doodle Jump 无尽+自由转向、Helix 关卡制+转塔；超休闲的两种结构化方式。
- 适用场景：超休闲单指玩法；间接控制设计。

## 可复现的最小版本与算法
螺旋塔网格+旋转输入+弹跳物理+红段判定即可复现（超小体量）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2018-02-10 发行（商店口径） | App Store/Sensor Tower（C 级） |
| 玩法（转塔不转球/红段败/关卡制） | 商店页互证（C 级） |
| 无独立百科条目（诚实注记） | 检索确认（404） |

## 推断与未知
- **未知**：Voodoo 与 H8Games 的确切分工；下载量官方口径。
- **推断（分析而非事实）**：转塔设计的本质是"减少玩家责任"——角色不可控使失败归因于"塔的时机"而非"手滑"（超休闲的挫败最小化策略，分析）。
- 红段即败是唯一失败条件——单失败条件的极简设计（分析）。

## 创新延伸（可验证假设素材）
1. 转塔 vs 转球对照（间接/直接控制的超休闲对照——接 hypothesis-000021）。
2. 层间难度螺旋参数化。
