---
id: game-000002
title: "Crossy Road"
aliases: ["天天过马路（中文社区通称）"]
genres: [casual, hybrid]
subgenre_tags: [hypercasual, endless_hopper, one_touch]
platforms: [ios, android, windows_phone, tvos]
release_year: 2014
creators: ["Hipster Whale（Matt Hall、Andy Sum；美术 Ben Weatherall）"]
core_loop: "点击/滑动 -> 前跳一格或横移 -> 车流/河流/铁轨威胁滚动 -> 前进格数计分 -> 被撞/被冲走/被鹰抓 -> 即刻重开"
mechanic_ids: [mechanic-000002, mechanic-000006]
pattern_ids: [pattern-000001]
quality_score: 4.38
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Crossy_Road"
    title: "Crossy Road - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-27"
    source_type: encyclopedia
    evidence_level: B
    supports_claims: ["发行时间与平台", "团队与引擎（Unity）", "道路/河流/铁轨玩法", "免费+广告+角色解锁模式", "3 个月 $10M+ 与 50M+ 下载", "『无尽版 Frogger』评价"]
  - url: "https://gdcvault.com/play/1021897/Crossy-Road-A-Whale-of"
    title: "GDC 2015 — Crossy Road: A Whale of a Time（官方演讲页）"
    publisher_or_author: "GDC Vault / Andy Sum, Matt Hall"
    published_at: "2015-03"
    accessed_at: "2026-10-28"
    source_type: official_talk
    evidence_level: A
    supports_claims: ["12 周开发的免费模式实验", "病毒式 #1 热门作品（官方演讲摘要口径）"]
  - url: "https://www.polygon.com/2015/3/3/8142247/crossy-road-earnings-10-million-gdc-2015/"
    title: "Crossy Road earns $10M... (GDC 2015 报道)"
    publisher_or_author: "Polygon"
    published_at: "2015-03-03"
    accessed_at: "2026-10-28"
    source_type: news_article
    evidence_level: B
    supports_claims: ["GDC 2015 期间公布的 $10M 收入口径（页面当日抓取失败，数字以搜索摘要为据，待复核）"]
  - url: "https://mobiledevmemo.com/crossy-road-a-case-study-in-mobile-ad-monetization/"
    title: "Crossy Road: A case study in mobile ad monetization"
    publisher_or_author: "Mobile Dev Memo"
    published_at: "2015-04"
    accessed_at: "2026-10-27"
    source_type: analysis_article
    evidence_level: B
    supports_claims: ["广告变现设计为研究样本"]
  - url: "https://www.thenewdaily.com.au/life/tech/2015/01/20/became-app-millionaires"
    title: "How we became app millionaires（Andy Sum / Matt Hall 访谈）"
    publisher_or_author: "The New Daily"
    published_at: "2015-01-20"
    accessed_at: "2026-10-27"
    source_type: interview
    evidence_level: B
    supports_claims: ["开发者对免费下载模式的自述", "2015-01 时 25M+ 下载口径"]
  - url: "https://crossyroad.fandom.com/wiki/Eagle"
    title: "Eagle - Crossy Road Wiki (Fandom)"
    publisher_or_author: "Fandom 社区"
    published_at: null
    accessed_at: "2026-10-28"
    source_type: community_wiki
    evidence_level: C
    supports_claims: ["仅作发现线索：驻留过久或后退 3 次触发鹰抓"]
created_at: "2026-10-27"
updated_at: "2026-10-27"
---

# Crossy Road（game-000002）

## 核心体验
玩家以点击/滑动操控角色（默认小鸡）在一格格车道间向前穿越无尽的道路、河流与铁轨。威胁按车道滚动，前进一格分数+1；驻留过久或过度后退会被一只鹰抓走。继续玩的动力是"再往前一格"的节奏压力与角色收集。

## 规则与状态转移（含最简伪代码）
- 状态：`(row, col, threats_per_lane, idle_timer, back_count, score)`；输入：`{tap_forward, swipe_side/back}`。
- 威胁系统按车道时间表滚动（车、木头/荷叶、火车各有节律）；判定为瞬时相遇。

```text
tap_forward: row += 1; score = max(score, row); idle_timer = 0
swipe:       col ±= 1（或 row -= 1 且 back_count += 1）
idle_timer > T 或 back_count >= 3: 鹰抓 -> 终局   # 阈值 T 为社区口径，官方数值未知
与移动威胁相遇 / 河面无承载物 -> 终局 -> 立即可重开
```

## 输入与输出
- 输入：点击（前跳）、滑动（横移/后退）；单指即可完成全部操作。
- 输出：逐格前移的镜头滚动、车道威胁的可读节律（车灯、火车预告）、得分随最大前进行数。

## 难度与学习曲线
威胁密度与车速随进程上升（推断——来源未给出精确曲线）。鹰机制把"驻留观望"从合法策略中剔除，强制玩家在信息不完整时持续决策；后退虽被容忍但有次数惩罚，保留"重排一步"的掌控感同时防止刷安全位。

## 关联机制与模式
- 机制：mechanic-000002（离散格跳与反驻留压力）、mechanic-000006（死亡即重开）
- 模式：pattern-000001（一触短循环+死亡即重开）

## 设计权衡
- 优点：把 Frogger 的关卡结构改成无尽推进，规则零教学；反驻留（鹰）解决无尽类"龟缩"问题；体素美术+角色收集给重复循环加长期目标。
- 缺陷：随机车道分布可能产生不可解局面（死亡归因部分外移给运气）；单局深度依赖威胁节律记忆而非规划。
- 反例：对比 game-000001 的连续脉冲输入，离散格跳的每次输入都可短暂停顿评估——深度来源不同（节奏 vs 时机）。
- 适用场景：移动端碎片会话；需要"强制性节奏"的无尽玩法。

## 可复现的最小版本与算法
网格状态机 + 每车道环形威胁调度器即可复现核心循环；鹰机制仅需空闲计时器与后退计数两个标量。无需物理引擎。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| iOS 2014-11-20 / Android 2014-12-23 | Wikipedia |
| Hipster Whale（Hall/Sum，美术 Weatherall），Unity | Wikipedia |
| 3 个月 $10M+、50M+ 下载 | Wikipedia |
| 免费+广告+角色解锁（受 Dota 2 模式启发） | Wikipedia |
| 12 周开发的免费模式实验 | GDC Vault 官方演讲页（摘要） |
| 鹰：驻留过久/后退 3 次触发 | Fandom 社区 Wiki + BlueStacks 指南（二级，见"未知"） |

## 推断与未知
- **未知**：鹰的精确触发阈值与车道难度曲线参数未获官方数值来源；本卡仅引用社区口径并如实标注。
- **推断（分析而非事实）**：反驻留机制把"等待"重新定义为高风险选择，是该作区别于同类无尽玩法的核心压力来源。
- Polygon GDC 报道页面当日抓取失败（ECONNRESET），$10M 口径暂以搜索摘要为据，已列入失败项待复核。

## 创新延伸（可验证假设素材）
1. 车道威胁节律由程序化难度曲线生成，并用可解性检查（逐行至少一条可行路径）保证"死了怪自己"。
2. 见 hypothesis-000001：把 mechanic-000003 的合并链嫁接到格跳上。
