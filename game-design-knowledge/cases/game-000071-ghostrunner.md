---
id: game-000071
title: "Ghostrunner"
aliases: ["幽灵行者（中文通行译名）", "GR"]
genres: [action, hybrid]
subgenre_tags: []
platforms: [pc, ps4, ps5, xbox_one, xbox_series, nintendo_switch]
release_year: 2020
creators: ["One More Level + Slipgate Ironworks 共研（3D Realms 制作；505 Games 与 All in! Games 发行）"]
core_loop: "第一人称一击双杀 → 冲刺/跳跃/跑墙/钩索/滑铲穿关卡 → Sensory Boost 空中减速偏转子弹 → 死亡即刻重来（检查点高频）→ 四格升级盘构筑"
mechanic_ids: [mechanic-000075]
pattern_ids: []
quality_score: 4.35
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Ghostrunner"
    title: "Ghostrunner - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2020-10-27 PS4/PC/Xbox（Switch 2020-11-10/PS5·XSX 2021-09-28）", "One More Level + Slipgate Ironworks 共研/3D Realms 制作/505+All in! 发行（纠误：无 3D Clouds）", "玩法全项（第一人称动作平台：dash/jump/wall-run/grapple/slide；玩家与敌人一击双杀；Sensory Boost 空中减速偏转子弹；升级为四格拼块式网格）", "MC 81 (PC)/78/76/73；OpenCritic 82% 推荐；IGN 8/Destructoid 8.5/Edge 5", "销量（2021-05 破 60 万；2023-09 达 250 万）", "Project Hel 扩展（2022-03-03）；Ghostrunner 2（2023-10-26，'generally favorable'）"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Ghostrunner（game-000071）

## 核心体验
第一人称的一击双杀：你一刀死、敌人一发也让你死——全部内容是"如何在不被碰到的情况下到达终点"。Sensory Boost 让空中减速偏转弹幕，高频检查点把"一击死"的挫败控制在秒级。

## 规则与状态转移（含最简伪代码）
- 状态：`(位置/姿态, dash/grapple 冷却, 升级四格盘, 检查点)`；输入：`{移动, dash, Sensory Boost, 攻击}`。

```text
一击:   玩家/敌人一发即死 → 检查点高频（秒级重来）
机动:   dash/jump/wall-run/grapple/slide 的组合穿越
慢时:   Sensory Boost → 空中时间减速偏转子弹（空中生存手段）
构筑:   升级为四格拼块式网格（相邻放置产生加成——分析：拼图约束）
```

## 输入与输出
- 输入：FPS 全操作（dash/boost 键入动作集）。
- 输出：赛博朋克塔攀爬、一击死亡的瞬间重开、升级网格。

## 难度与学习曲线
难度=**路线记忆+机动组合**的肌肉记忆（一击死要求全关零失误）；高频检查点使失败窗口可控（与 game-000032 GOI 无检查点对照——同为 Foddian-adjacent，检查点策略相反，分析口径）。

## 关联机制与模式
- 机制：mechanic-000075（一击双杀+高频检查点+空中减速）
- 对照：与 game-000060（Hotline 一击双杀俯视）对照——同为一击双杀，HM 规划重排、GR 路线肌肉记忆；与 game-000032（GOI）对照——检查点策略相反。与 pattern-000026 呼应：一击双杀谱系的第三实现（俯视/第一人称/横版各有）。
- 拼块升级网格（Wikipedia："tetromino-style grid"）是构筑的空间化——升级物品互相挤压摆放（分析）。

## 设计权衡
- 优点：一击双杀的纯粹紧张感+高频检查点的挫败控制；Sensory Boost 把减速做成空中技能（与 Bayonetta Witch Time 同谱系的第一人称位）；250 万销量（2023-09）。
- 缺陷：MC 81 与 Edge 5/10 的两极（检查点重来的挫败 vs 纯粹性）；叙事薄弱（口径未入库，标注）。
- 反例：与 game-000032（GOI 无检查点）对照——同为攀爬一击死，GOI 无检查点卖挫败、GR 高频检查点卖流畅重试；同一机制的两种挫败管理。
- 适用场景：第一人称跑酷动作；一击双杀谱系。

## 可复现的最小版本与算法
FPS 机动集（dash/wall-run/grapple）+一击判定+检查点+升级网格即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2020-10-27 发行；One More Level+Slipgate/3D Realms/505（纠误） | Wikipedia |
| 玩法全项（一击双杀/Sensory Boost/四格升级盘） | Wikipedia |
| 销量（60 万→250 万）与 GR2（2023） | Wikipedia |
| MC 81 与 Edge 5 两极 | Wikipedia |

## 推断与未知
- **未知**：Sensory Boost 的时间缩放系数；四格盘的升级全表。
- **推断（分析而非事实）**：四格拼块盘是"构筑的空间约束"——升级物品的摆放本身成为小型谜题（与 mechanic-000041 恰好一次计数的空间化同思路，分析）。
- 高频检查点与一击死的组合证明：Foddian 身份不是机制必需——同一"一击死"可用检查点密度调节挫败（分析）。

## 创新延伸（可验证假设素材）
1. 检查点密度实验（GOI 无检查点 vs GR 高频——挫败光谱采样）。
2. 拼块升级盘的推广研究（升级空间化的通用框架）。
