---
id: game-000079
title: "Temple Run"
aliases: ["神庙逃亡（中文通行译名）", "Temple Run"]
genres: [action, hybrid]
subgenre_tags: [hypercasual, endless_runner]
platforms: [ios, android, wp, 街机]
release_year: 2011
creators: ["Imangi Studios（夫妻团队 Keith Shepherd & Natalia Luckyanova + 美术 Kiril Tchangov；4 个月开发；前作 Max Adventure 失败后开工）"]
core_loop: "自动奔跑 → 上滑跳/下滑铲/左右滑转向 → 倾斜收金币 → 拐弯错即撞墙 → 猴形守护者追击 → 碰撞/坠落/被抓终局"
mechanic_ids: [mechanic-000083]
pattern_ids: []
quality_score: 4.30
confidence: verified
verification_status: source_reviewed
original_url: null
play_url": null
repository_url": null
sources:
  - url: "https://en.wikipedia.org/wiki/Temple_Run"
    title: "Temple Run - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2011-08-04 iOS（原价 $0.99 后转 freemium）；Imangi 夫妻团队 + Tchangov；4 个月开发（纠误：非两年）；前作 Max Adventure 失败后开工", "规则全项（上跳/下滑/左右转/倾斜收币、金币 1/2/3 分、碰撞/坠落/被猴抓终局）", "下载（Android 三天 100 万；2014-06 与续作合计破 10 亿）", "MC 80（Gamezebo 'instant iPhone classic'；148Apps 批评场景重复）", "2013 Kids' Choice Favorite App；仿品泛滥（Apple 因素材抄袭下架部分）", "谱系（Brave 2012/2 2013/Oz/VR/Apple Arcade/Temple Run 3 2025-10）；华纳电影洽谈 2013"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Temple Run（game-000079）

## 核心体验
第一代 swipe 跑酷爆款：转向是唯一的高阶技能——**拐弯错即撞墙**，把"注意力重置"设计进路网（每个拐角都是一次注意力打断）。夫妻团队 4 个月开发，与续作合计破 10 亿下载。

## 规则与状态转移（含最简伪代码）
- 状态：`(当前跑道方向, 速度, 金币, 追击者距离)`；输入：`{上滑跳, 下滑铲, 左右滑转向, 倾斜收币}`。

```text
滑动:  上=跳/下=铲/左右=转向（T 字路口必须滑对）
倾斜:  收集金币（体感第二输入）
追击:  猴形守护者——碰撞后靠近一档，再撞即被抓（宽容中间态）
终局:  撞墙/坠落/被抓
```

## 输入与输出
- 输入：四向滑动+倾斜（pattern-000023 的方向滑动位+体感位混合）。
- 输出：阿兹特克神庙滚动场景、追击者逼近演出、金币收集。

## 难度与学习曲线
难度=拐弯的反应窗口（速度递增后窗口缩短）；追击者的"靠近一档"是宽容中间态（第一次碰撞不死，与 mechanic-000062 割草机同思路，分析口径）。

## 关联机制与模式
- 机制：mechanic-000083（转向分段——路网拐角强制注意力重置）
- 谱系：与 game-000048（Subway Surfers 四向滑动+hoverboard）对照——同为 swipe 跑酷，Temple Run 的核心动词是"转向"、SS 的核心是"变道"；Temple Run 2 与 SS 的世纪竞争（10 亿 vs 27 亿下载）。
- 失败谱系：追击者接近=宽容中间态 → 第二次碰撞被抓（三段式失败，分析口径）。

## 设计权衡
- 优点：转向动词的注意力设计（拐角=节奏打断）；夫妻团队 4 个月→10 亿下载的极小团队样本； freemium 转型（$0.99→免费+IAP）的时机案例。
- 缺陷：场景重复批评（148Apps 口径）；题材被无限模仿（Apple 下架抄袭者——Wikipedia）。
- 反例：与 game-000022（Downwell 垂直下落）对照——同为自动进程跑酷，方向轴（水平转向）vs 重力轴（垂直下落）；自动跑酷的轴向选择决定动词集。
- 适用场景：转向跑酷；注意力节奏设计。

## 可复现的最小版本与算法
分段跑道生成器（T 路口强制转向）+四向滑动+追击距离状态即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2011-08-04 iOS；夫妻团队 4 个月（纠误：非两年） | Wikipedia |
| 规则全项（四向滑动/倾斜/追击者三段式） | Wikipedia |
| 10 亿下载（2014-06 与续作合计） | Wikipedia |
| 仿品下架与电影洽谈 | Wikipedia |

## 推断与未知
- **未知**：速度递增曲线；追击者的精确触发距离。
- **推断（分析而非事实）**：拐角是"注意力节拍器"——直道给收集/倾斜、拐角给反应，节奏交替构成心流结构（分析）。
- freemium 转型（$0.99→F2P）发生在爆发期前——定价时机即发行（分析）。

## 创新延伸（可验证假设素材）
1. 拐角密度的注意力节奏研究（T 字路口频率 vs 心流）。
2. 追击者宽容档位的参数化（对照 GOI 漏果预算）。
