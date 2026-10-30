---
id: game-000008
title: "Celeste（含 Celeste Classic 起源）"
aliases: ["蔚蓝（中文通行译名）", "Celeste Classic（PICO-8 原型）"]
genres: [action, puzzle, hybrid]
subgenre_tags: []
platforms: [pc, nintendo_switch, ps4, xbox_one]
release_year: 2018
creators: ["Maddy Thorson", "Noel Berry", "Lena Raine（音乐）", "Maddy Makes Games（发行）"]
core_loop: "观察单屏平台挑战 -> 精确跳跃/八向冲刺/攀墙 -> 失败回到检查点 -> 借助输入宽恕窗口逐步复现意图 -> 登顶收集草莓（可选高风险）"
mechanic_ids: [mechanic-000009]
pattern_ids: [pattern-000006]
quality_score: 4.43
confidence: verified
verification_status: source_reviewed
original_url: "https://maddymakesgamesinc.itch.io/celeste"
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Celeste_(video_game)"
    title: "Celeste (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-30"
    source_type: encyclopedia
    evidence_level: B
    supports_claims: ["2018-01-25 发行", "PICO-8 原型 2015-08 约 3 天（初名 Everest）", "八向冲刺与绿宝石回复", "土狼时间+跳跃预输入+角落修正等输入宽恕", "Assist Mode 内容与 Cuphead 争论背景、Cheat Mode 命名被否", "难度哲学『difficult yet fair』『匹配意图而非完美执行』", "销量与获奖"]
  - url: "https://maddymakesgamesinc.itch.io/celeste"
    title: "Celeste — itch.io 官方页（实际访问经 302 重定向自 mattmakesgames.itch.io）"
    publisher_or_author: "Maddy Makes Games Inc."
    published_at: null
    accessed_at: "2026-10-30"
    source_type: official_page
    evidence_level: A
    supports_claims: ["官方页确认 $19.99、700+ 屏挑战、操作为 jump/air-dash/climb 三件套"]
  - url: "https://www.lexaloffle.com/bbs/?pid=11722"
    title: "Celeste Classic — PICO-8 BBS 页"
    publisher_or_author: "Lexaloffle BBS（PICO-8 官方社区）"
    published_at: "2016"
    accessed_at: "2026-10-30"
    source_type: official_page
    evidence_level: A
    supports_claims: ["Celeste Classic 在 PICO-8 官方 BBS 发布（URL 来自检索结果引用，页面未单独抓取，浏览器可玩性待核）"]
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

# Celeste（game-000008）

## 核心体验
单屏精度的硬核平台跳跃：跳跃、八向空中冲刺、攀墙三件套，配合检查点与草莓收集。其设计核心不是"难"而是"公平"——土狼时间、跳跃预输入、角落修正等隐藏宽恕让系统默默向玩家意图对齐；Assist Mode 则把难度本身变成可选项。

## 规则与状态转移（含最简伪代码）
- 状态：`(位置, 速度, dash 可用数, 攀附状态)`；输入：`{move, jump, dash(八向), grab}`。

```text
jump():  if on_ground or in_coyote_window: vy = jump_v      # 离地后短暂窗口内仍可跳
预输入:  落地前 ~k 帧按下的 jump 在落地瞬间执行
dash():  if dash_count > 0: 速度置为八向单位向量*dash_v; dash_count -= 1
         on_ground/green_gem: dash_count = max
grab():  攀附墙面; 体力限制持续攀爬
失败:    出屏/触刺 -> 回最近检查点（秒级）；Assist Mode: 游戏速度/无限冲刺/无敌可调
```

## 输入与输出
- 输入：双摇杆语义（方向 + 三键），全键位可配置（itch 官方页确认）。
- 输出：像素级单屏挑战、冲刺轨迹残影、草莓收集反馈、B/C 面解锁进程。

## 难度与学习曲线
设计目标为"difficult yet fair"，优先匹配玩家意图而非完美执行，刻意移除"不公平的难"（Wikipedia 转述设计哲学）。输入宽恕（土狼时间/预输入/角落修正）把"我按了但没反应"这类系统性挫败从难度中剥离，只保留真实的空间挑战。Assist Mode（降速、无限冲刺、无敌等）在开发后期加入，背景是 Cuphead 难度争论，且否决了" Cheat Mode"命名——命名即设计立场（Wikipedia）。

## 关联机制与模式
- 机制：mechanic-000009（输入宽恕窗口）
- 模式：pattern-000006（难度可选的尊重式辅助）
- 对比：与 game-000007（Braid 倒带）构成失败处理光谱两端：Celeste 保留死亡、用隐藏宽恕+检查点压低成本；Braid 消灭死亡本身。
- 渊源：Celeste Classic（PICO-8，2015-08，约 3 天原型，初名 Everest）→ 3 年扩展为商业版——Game Jam 原型到商业作品的管道样本（Wikipedia）。

## 设计权衡
- 优点：三键输入支撑 700+ 屏挑战（itch 官方页），机制经济学极佳；输入宽恕不可见地校准归因（"死了怪自己"在硬核域成立）；Assist Mode 扩大受众而不稀释默认难度表达。
- 缺陷：单屏检查点结构对开放探索类不适用；隐藏宽恕需要大量手感调参（参数未公开，推断存在大量隐性调优）。
- 反例：Assist Mode 的成就争议——部分玩家认为无敌通关贬值挑战（社区争论，未采信为结论，标注为讨论存在）。
- 适用场景：精确操作类玩法；希望把"可访问性"与"难度表达"同时保住的设计。

## 可复现的最小版本与算法
平台物理 + 八向 dash + 三个宽恕参数（土狼窗口 k₁、预输入窗口 k₂、角落修正阈值）即可复现手感骨架；NoelFB/Celeste 源码存在于 GitHub（检索命中，未逐行核对）。Celeste Classic 可经 PICO-8 浏览器游玩（Lexaloffle BBS，见来源注记）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2018-01-25/26 多平台发行 | Wikipedia |
| PICO-8 原型 2015-08 约 3 天（Everest） | Wikipedia |
| 土狼时间/预输入/角落修正存在 | Wikipedia |
| Assist Mode 内容、Cuphead 背景、Cheat Mode 命名被否 | Wikipedia |
| "difficult yet fair"、匹配意图 | Wikipedia |
| 销量：2018 底 50 万 → 2020-03 约 100 万 → 2025-01 170 万 | Wikipedia |
| TGA 2018 Games for Impact + Best Independent | Wikipedia |

## 推断与未知
- **未知**：土狼/预输入的具体帧数参数未从官方渠道核实（社区反编译口径存在但未采信）；Celeste Classic 的 Lexaloffle 页面未单独抓取。
- **推断（分析而非事实）**：其"公平感"主要来自宽恕窗口而非检查点密度——同样的关卡去掉宽恕窗口会在不改变结构的情况下显著提高挫败（可作为假设检验）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000004：把宽恕窗口显式移植到一触超休闲，检验"隐形辅助"在极简玩法中的收益。
2. Assist Mode 的进度分层：辅助通关与标准通关分开记录且互不贬值——检验争议是否可被结构性化解。
