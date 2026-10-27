---
id: game-000001
title: "Flappy Bird"
aliases: ["flappybird", "Flap Flap（开发期原名）"]
genres: [casual, hybrid]
subgenre_tags: [hypercasual, one_touch]
platforms: [ios, android]
release_year: 2013
creators: ["Dong Nguyen（工作室 .GEARS / dotGEARS）"]
core_loop: "点击 -> 小鸟获得向上脉冲 -> 持续重力下坠 -> 穿过一对管道 +1 分 -> 撞管道/落地 -> 即刻重开"
mechanic_ids: [mechanic-000001, mechanic-000006]
pattern_ids: [pattern-000001]
quality_score: 4.48
confidence: verified
verification_status: code_inspected
original_url: null
play_url: null
repository_url: "https://github.com/nebez/floppybird"
sources:
  - url: "https://en.wikipedia.org/wiki/Flappy_Bird"
    title: "Flappy Bird - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-27"
    source_type: encyclopedia
    evidence_level: B
    supports_claims: ["发行与下架时间线", "作者与开发周期", "计分与奖牌规则", "设计访谈转述（乒乓球灵感、早期版本过易）"]
  - url: "https://github.com/nebez/floppybird"
    title: "nebez/floppybird — HTML5 复刻版源码"
    publisher_or_author: "Nebez Briefkani"
    published_at: null
    accessed_at: "2026-10-27"
    source_type: open_source_repository
    evidence_level: A
    supports_claims: ["重力 0.25、点击脉冲 -4.6、缺口 90px、管宽 52px、每 1400ms 生成管道、60FPS、奖牌阈值 10/20/30/40（复刻口径）"]
  - url: "https://github.com/sourabhv/FlapPyBird"
    title: "sourabhv/FlapPyBird — Python/Pygame 复刻"
    publisher_or_author: "Sourabh V."
    published_at: null
    accessed_at: "2026-10-27"
    source_type: open_source_repository
    evidence_level: A
    supports_claims: ["存在广泛引用的忠实开源复刻（可复现性依据）"]
  - url: "https://slate.com/news-and-politics/2014/02/flappy-bird-dong-nguyen-removes-popular-game-from-app-stores.html"
    title: "Flappy Bird: Dong Nguyen removes popular game"
    publisher_or_author: "Slate"
    published_at: "2014-02-09"
    accessed_at: "2026-10-27"
    source_type: news_article
    evidence_level: B
    supports_claims: ["2014-02-10 下架", "下架前后社会反响"]
created_at: "2026-10-27"
updated_at: "2026-10-27"
---

# Flappy Bird（game-000001）

## 核心体验
玩家用一次点击让小鸟向上弹起，其余时间它在重力下持续坠落；目标是在随机高度的管道缺口间穿行并累计分数。继续玩的动力是"这次一定能更远"的即时重开循环与分数/奖牌的自我比较。

## 规则与状态转移（含最简伪代码）
- 状态：`(y, vy, alive, score, high_score)`；输入集合：`{tap}`；无其他操作。
- 管道对每固定间隔生成，缺口高度随机；通过一对 +1 分；与管道或地面相交即终局。

```text
# 参数为忠实 HTML5 复刻 floppybird 的口径（原版二进制参数未公开核实）
每帧(60FPS): vy += 0.25; y += vy
tap:        vy = -4.6
每 1400ms:  生成一对管道（宽 52px，缺口 90px，缺口位置随机）
死亡判定:   birdBox 与管道矩形/地面相交 -> alive=false -> 立即可重开
计分:       birdBox 右缘越过管道右缘 -> score += 1
奖牌:       10 铜 / 20 银 / 30 金 / 40 白金
```

## 输入与输出
- 输入：单点触控（离散事件，无方向、无长按语义）。
- 输出：小鸟上抛-下坠的连续轨迹、扑翼动画、通过音效、得分跳字、死亡后分数与奖牌结算。

## 难度与学习曲线
新手门槛极低（一次点击即完成教学），但容错窗口极窄：缺口 90px 与重力/脉冲比（0.25 : 4.6）意味着任何一次误按都难以挽救。失败可读性高——死因总能被指认为"早了/晚了"。开发者自述更早的宽松版本"太无聊"，遂收紧难度（Polygon 访谈转述，见 Wikipedia 来源）。

## 关联机制与模式
- 机制：mechanic-000001（脉冲升力对抗持续重力）、mechanic-000006（死亡即重开）
- 模式：pattern-000001（一触短循环+死亡即重开）

## 设计权衡
- 优点：规则一眼看穿；单输入把全部深度押在时机精度上；重开成本趋近于零，挫败即刻转化为再尝试。
- 缺陷：玩法深度有限、易被克隆（下架后约每天 60 款山寨涌入 App Store，Slate 报道）；过窄容错带来强挫败感，评分两极（Metacritic 52/100）。
- 反例/前例：2011 年 Piou Piou vs. Cactus 机制高度相似（Wikipedia），说明该设计的原创性有限、组合与执行才是差异点。
- 适用场景：碎片时间、单指、无教程容忍的移动端超休闲。

## 可复现的最小版本与算法
状态机 + 常量物理即可：上列伪代码即完整规则，无需引擎绑定；上述两个开源复刻（floppybird / FlapPyBird）可直接研读。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| iOS 2013-05-24 / Android 2014-01-30 发行 | Wikipedia |
| 2–3 天开发、原名 Flap Flap | Wikipedia |
| 2014-02-10 双平台下架（02-08 宣布） | Wikipedia、Slate |
| 峰值约 $50,000/天 广告收入 | Wikipedia（转引 The Verge 访谈） |
| 奖牌阈值 10/20/30/40、缺口 90px 等参数 | floppybird 源码（复刻口径） |

## 推断与未知
- **未知**：原版二进制的精确物理参数与管道生成分布；floppybird 参数仅代表社区共识还原。
- **推断（分析而非事实）**：其成瘾性源于"失败可完全归因于自身上一次输入"的归因结构；该判断为设计分析。
- 商业与社会反应（$50k/天、eBay 炒号、下架）为事实层，但与本知识库关注的核心机制无因果结论。

## 创新延伸（可验证假设素材）
1. 重力/缺口随分数自适应缩放，验证"难度保坍缩"是否能延长会话（对照固定参数）。
2. 双鸟镜像操控（一次点击同时作用两只反向小鸟），测试单输入语义下的过载乐趣。
