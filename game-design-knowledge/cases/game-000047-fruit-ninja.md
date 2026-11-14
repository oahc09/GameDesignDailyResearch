---
id: game-000047
title: "Fruit Ninja"
aliases: ["水果忍者（中文通行译名）"]
genres: [action, hybrid]
subgenre_tags: [hypercasual]
platforms: [ios, android, 多平台移植（含 Kinect）]
release_year: 2010
creators: ["Halfbrick Studios（澳大利亚；设计 Luke Muscat）"]
core_loop: "挥刀切割抛起的水果 -> 一划多切连击计分 -> 切中炸弹即败（经典）/扣分（街机）-> 累计漏三果即败（经典）-> 刀具/道具/模式分层"
mechanic_ids: [mechanic-000048]
pattern_ids: [pattern-000023]
quality_score: 4.50
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Fruit_Ninja"
    title: "Fruit Ninja - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2010-04-20 iOS（Halfbrick 澳大利亚；设计 Luke Muscat——纠误：非 Phil Larsen）", "玩法全项（滑刀切果/切炸弹即败/累计漏三果即败/一划多切 combo/多指同切；Classic/Arcade/Zen 三模式；Gutsu's Cart 道具系统——杨梅爆/桃倍/炸弹偏转）", "销量（首月 20 万→三月 100 万→2012-05 3 亿→2015 年 10 亿下载）", "Fruit Ninja Kinect（2011-08-10，首款用 Kinect 的 XBLA 游戏；AIAS 休闲年度）", "MC 75 (iOS)/GameRankings 87%（IGN 8.5 'instantly pleasurable'；Time 2011 年 50 佳 iPhone 应用）"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# Fruit Ninja（game-000047）

## 核心体验
把触摸屏变成刀：水果抛起、一刀挥过、切成两半——操作的快感（swipe feedback）就是全部。它填补输入语义轴的"滑动/挥划"位：**轨迹本身是输入**（不只是点或方向）。

## 规则与状态转移（含最简伪代码）
- 状态：`(空中实体列表, 连击, 漏果累计, 生命/分数)`；输入：`{滑动轨迹（多点采样）}`。

```text
切割:  轨迹与水果相交 → 切开（轨迹是连续输入，非离散方向）
连击:  一划多果 → combo 加分；多指 → 多刀同划
炸弹:  切中 → 经典即败 / 街机扣 10 分
漏果:  累计漏 3 枚 → 经典即败（宽容的中间态——非即时失败）
道具:  Gutsu's Cart（杨梅爆/桃倍/炸弹偏转，星果购买）
```

## 输入与输出
- 输入：滑动轨迹（多点采样——切割形状、速度、多指都是信息）。
- 输出：切割演出（果肉分离/汁液飞溅）、combo 计分、刀具皮肤。

## 难度与学习曲线
难度=轨迹规划（多果同切的最优一刀）与风险读识（炸弹混入果群）。累计漏果（三枚）是失败光谱的中间态：既非即时失败（街机扣分）也非无失败（Zen 无炸弹）——三模式本身就是失败光谱的三个档位（分析口径）。

## 关联机制与模式
- 机制：mechanic-000048（滑动轨迹切割与累计漏果）
- 模式：pattern-000023（输入语义轴——"轨迹输入"位）
- 谱系：Halfbrick 后续 Jetpack Joyride 等；Kinect 版把轨迹输入扩展到全身（2011 首款 Kinect XBLA，Wikipedia）。

## 设计权衡
- 优点：滑动反馈的爽感即玩法（"instantly pleasurable"——IGN 口径）；多指多切的并行操作深度；三模式覆盖失败光谱三档。
- 缺陷：MC 75 相对低（深度有限——切水果没有策略层，分析）；炸弹惩罚的随机性争议。
- 反例：与 game-000001（Flappy 离散点击）对照——同为超休闲，Fruit Ninja 的输入是连续轨迹（技能表达丰富），Flappy 是单点时机；输入语义决定技能表达的上限。
- 适用场景：触屏轨迹玩法；体感扩展（Kinect）。

## 可复现的最小版本与算法
轨迹采样 + 相交判定（线段-凸体）+ 抛物线投掷生成器即可复现；累计漏果计数器为失败逻辑核心件。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2010-04-20 iOS；Halfbrick/Luke Muscat（纠误） | Wikipedia |
| 规则全项（切炸弹败/漏三果败/combo/三模式/道具） | Wikipedia |
| 销量阶梯（20 万→3 亿→10 亿） | Wikipedia |
| Kinect 版与 AIAS 休闲年度 | Wikipedia |

## 推断与未知
- **未知**：水果抛掷的生成分布参数；"Halfbrick Friday" 原型文化（Wikipedia 未载——不采信）；刀具解锁清单（"iron blade"口径未证实）。
- **推断（分析而非事实）**：累计漏三果而非即漏即败，是把"失败"从单事件改为预算——玩家对漏果产生"预算管理"心态（与 mechanic-000035 预算压力同构，分析）。
- 多指同切支持的并行轨迹是触屏独有的输入维度（鼠标时代不存在——分析）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000022：累计漏果 vs 即时失败的挫败对比。
2. 轨迹形状计分：切割路径本身画出图案（艺术分）——轨迹输入的表现力扩展。
