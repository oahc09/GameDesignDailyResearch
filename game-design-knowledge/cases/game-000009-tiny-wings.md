---
id: game-000009
title: "Tiny Wings"
aliases: ["小小翅膀", "Tiny Wings HD（高清版）"]
genres: [casual, hybrid]
subgenre_tags: [hypercasual, one_touch]
platforms: [ios, appletv, apple_arcade]
release_year: 2011
creators: ["Andreas Illiger（德国，独立开发）"]
core_loop: "按住=收翅下潜加速 -> 沿下坡蓄能 -> 释放=振翅 -> 从波峰抛出滑翔 -> 落点选择下一次下潜 -> 昼夜循环内尽可能远"
mechanic_ids: [mechanic-000010]
pattern_ids: []
quality_score: 3.88
confidence: verified
verification_status: source_reviewed
original_url: "https://www.andreasilliger.com"
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Tiny_Wings"
    title: "Tiny Wings - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-30"
    source_type: encyclopedia
    evidence_level: B
    supports_claims: ["2011-02-18 iOS 发行", "按住下潜/释放起飞的核心操作", "灵感来自 Nathan McCoy 的 Wavespark", "程序化生成的『每天不同』视觉", "任务-巢穴-倍率系统与竞速模式", "10.5M iPhone + 1.8M iPad 销量（Game Center 口径）", "iPhone Game of the Year 2011 与 WWDC 2011 演示", "未提及 Apple Design Award"]
  - url: "https://www.andreasilliger.com"
    title: "Andreas Illiger 官网"
    publisher_or_author: "Andreas Illiger"
    published_at: null
    accessed_at: "2026-10-30"
    source_type: official_page
    evidence_level: A
    supports_claims: ["『one button』街机游戏官方定位（检索命中，页面未全文抓取）"]
  - url: "https://apps.apple.com/us/app/tiny-wings/id1574882204"
    title: "Tiny Wings+ — App Store（Apple Arcade 版）"
    publisher_or_author: "Apple App Store"
    published_at: null
    accessed_at: "2026-10-30"
    source_type: official_page
    evidence_level: A
    supports_claims: ["官方描述：用山丘做跳台——下滑、振翅、起飞，重力带回地面"]
  - url: "https://www.macworld.com"
    title: "Tiny Wings 评测（Macworld，2011-06）"
    publisher_or_author: "Macworld"
    published_at: "2011-06-20"
    accessed_at: "2026-10-30"
    source_type: review
    evidence_level: B
    supports_claims: ["按住=停振翅下潜、释放=恢复振翅的操作对应关系"]
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

# Tiny Wings（game-000009）

## 核心体验
一只飞不高的鸟，用山丘当跳台：按住屏幕收翅下潜（重力沿坡加速），在波峰前释放振翅抛入空中。一次完美的"下潜-释放"链在丘陵间画出正弦轨迹。全部操作只有一个语义：按住还是松开。

## 规则与状态转移（含最简伪代码）
- 状态：`(位置, 速度, 是否按住, 飞行相位, 日夜进度, 倍率)`；输入：`{press, release}`（二元持续量）。

```text
按住:   振翅停止 -> 贴地，沿坡重力分量加速（下坡加速、上坡减速）
释放:   振翅恢复；若速度足够且在坡面 -> 沿坡切线抛出，进入滑翔相位
滑翔:   重力抛体；触地时按住则再次下潜（衔接成链）
进程:   昼夜循环计时；任务升级巢穴与得分倍率； islands 程序化生成（"每天不同"）
失败:   无撞杀——落后于日落节奏即自然结束（会话由时钟而非死亡封顶）
```

## 输入与输出
- 输入：按住/释放（与 Flappy 的离散点击不同，这是**持续态输入**——按住是一个状态而非事件）。
- 输出：速度感（坡面加速、抛物线滑翔）、"perfect slide"提示、日夜光线变化、倍率跳字。

## 难度与学习曲线
零失败撞杀（没有死亡，只有日落收尾）——与今日知识库既有案例全部相反：其会话结束由时间而非错误触发。深度来自释放时机的预判（提前量）与速度链维持。开发者自述以"1.5 岁孩子能否玩"为测试标准（Wikipedia 转述），可访问性是显式设计目标。

## 关联机制与模式
- 机制：mechanic-000010（按住下潜-释放起飞的持续态输入）
- 模式：暂无独立模式卡（填补缺口 #1 的"非点击输入"样本，与 mechanic-000001 离散点击构成输入语义对照）
- 渊源：核心机制灵感来自 Nathan McCoy 的 Wavespark（Wikipedia）——再次印证"组合与执行优先于原创"的观察。

## 设计权衡
- 优点：单输入语义下做出"蓄力-释放"节奏深度；无失败设计让挫败归零、心流密度高；程序化地形 + 每日变化的低成本内容保鲜（Wikipedia）。
- 缺陷：深度上限受二元输入限制；无死亡意味着无"再来一次"的强钩子，留存靠节奏与倍率（推断）。
- 反例：与 game-000001（Flappy Bird，同年杀出的死亡驱动单触）对比——同年、同为 iOS 单触爆款，失败处理哲学完全相反。
- 适用场景：追求心流与放松感而非挑战的会话型玩法；低龄/泛用户受众。

## 可复现的最小版本与算法
正弦丘陵生成 + 坡面重力分量滑动 + 抛体滑翔 + 二元输入即可复现；地形参数与倍率公式未公开（研究重构口径）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2011-02-18 iOS；HD 2012-07-12；Apple Arcade 2021-10-15 | Wikipedia |
| 按住下潜/释放振翅；Wavespark 灵感 | Wikipedia |
| 程序化"每天不同"视觉；任务-巢穴-倍率；竞速模式 | Wikipedia |
| 10.5M iPhone + 1.8M iPad（Game Center 口径）；iPhone GOTY 2011 | Wikipedia |
| 官方"one button"定位 | andreasilliger.com（检索命中） |

## 推断与未知
- **未知**：首发价格未核实；Apple Design Award 传闻未获来源支持（不采信）；地形生成算法与倍率公式未公开。
- **推断（分析而非事实）**：其"无失败"结构与超休闲"死亡即重开"（mechanic-000006）是同一问题（会话如何结束）的两个相反答案——时钟封顶 vs 错误封顶。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000004 的对照方向：持续态输入的宽恕窗口（如临近波峰 0.1s 内释放自动视为 perfect）是否提升新手留存。
2. 昼夜循环作为会话计时的结构可与每日稀缺（pattern-000003）嫁接：日落 = 今日结束，次日地形不同。
