---
id: game-000037
title: "Candy Crush Saga"
aliases: ["糖果粉碎传奇（中文通行译名）", "CCS"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [web_facebook, ios, android, windows]
release_year: 2012
creators: ["King（Riccardo Zacconi 领导；Sebastian Knutsson 提出 Saga 化并任创意开发）"]
core_loop: "交换相邻糖果三消 -> 级联连锁计分 -> 四连+生成特殊糖果 -> 完成关卡目标（步数限制）-> 章节地图推进 -> 生命耗尽等待/购买/索取"
mechanic_ids: [mechanic-000038]
pattern_ids: []
quality_score: 4.20
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Candy_Crush_Saga"
    title: "Candy Crush Saga - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-13"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2012-04-12 浏览器（Facebook 首发仅 65 关）/2012-11-14 iOS/2012-12-14 Android", "King 与 Zacconi/Knutsson；原版 Candy Crush（2011 King.com）源自 Miner Speed（借自 Bejeweled）", "玩法全项（三消/级联/四连+特殊糖果/步数限制/星级/生命半小时回一枚/章节 15 关/Dreamworld 已移除）", "货币化（免费 97.7% vs 付费 2.3%；金条；2013 起纯 IAP 无广告）", "数据（峰值日产近 $1M；93M+ 玩家 2014；三个月 $493M；2014 IAP $1.33B；系列下载 27 亿+；终身收入 $20B 2023-09 口径）", "人口画像（58% 女性/46% Gen X）与 All Stars 锦标赛（$1M 奖池，2024 年 1500 万人参赛）", "商标争议（CandySwipe/Banner Saga 均和解）与英国公平交易局对未成年人机制的审查", "MC 79 (iOS)"]
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

# Candy Crush Saga（game-000037）

## 核心体验
Match-3 的工业化样本：级联连锁提供观赏性，特殊糖果提供组合深度，生命回充与章节地图把"玩"与"付"耦合——它的研究价值不在机制原创性（源自 Bejeweled 系），而在**货币化与难度的耦合工程**（97.7% 免费玩家养出 $20B 终身收入）。

## 规则与状态转移（含最简伪代码）
- 状态：`(棋盘, 步数, 目标（果冻/配料）, 生命, 章节/地图进度)`；输入：`{相邻交换}`。

```text
三消:   相邻交换成行/列 ≥3 -> 消除 + 上方下落（级联递增计分）
特殊:   四连+ -> 特殊糖果（行/列/区域清除；组合未在 Wikipedia 详述）
关卡:   步数限制内完成目标；星级按分数
生命:   5 上限；耗尽半小时回一枚；可向好友索取或购买
地图:   15 关一章；Episode 推进（曾可付费跳章）
```

## 输入与输出
- 输入：相邻交换（单指）。
- 输出：级联计分跳字、特殊糖果演出、生命倒计时 UI、章节地图。

## 难度与学习曲线
难度由**步数限制 × 关卡设计**决定（King 有内部难度建模的说法为社区口径，Wikipedia 未载——不采信）；生命经济把挫败货币化（卡关→等 30 分钟→或付费）。97.7% 免费率说明其收入模型靠极小份额的高付费（Wikipedia 数据）。

## 关联机制与模式
- 机制：mechanic-000038（生命实时回充与货币化耦合）
- 渊源：King.com Candy Crush（2011）← Miner Speed ← Bejeweled——Match-3 谱系的商业末端；与 game-000003（Suika 物理合并）对照：同为三消变体，一个走向物理随机、一个走向货币化工程。
- 商业对照：2.3% 付费率（Wikipedia）与 pattern-000010 的保底抽卡异化讨论衔接。

## 设计权衡
- 优点：级联计分与特殊糖果的组合空间成熟（Bejeweled 系遗产）；章节地图把长线进程可视化；数据规模证明生命经济模型的商业有效性。
- 缺陷：MC 79——原创性弱、付费墙批评、商标争议（CandySwipe/Banner Saga 均和解）、英国 OFT 对未成年人机制审查（Wikipedia）。
- 反例：与 game-000005（Wordle）对照——同为每日/限时结构，Wordle 零货币化靠稀缺传播，CCS 用生命墙货币化挫败。
- 适用场景：F2P 长线运营三消；货币化工程研究样本。

## 可复现的最小版本与算法
三消棋盘+级联计分+特殊糖果+生命计时器即可复现核心循环；关卡设计工具与难度建模为 King 内部能力（未公开）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2012-04/11 发行；King/Zacconi/Knutsson；Miner Speed 渊源 | Wikipedia |
| 玩法全项（级联/特殊糖果/步数/生命半小时/章节 15 关） | Wikipedia |
| 货币化数据（97.7%/2.3%；$20B 终身；$1.33B 年 IAP） | Wikipedia |
| 商标争议与 OFT 审查 | Wikipedia |

## 推断与未知
- **未知**：King 内部难度建模/ML 细节（社区与行业报道口径，Wikipedia 未载，不采信）；特殊糖果组合的完整表。
- **推断（分析而非事实）**：半小时生命回充周期是精心选择的"挫败冷却窗口"——短到让人回流、长到制造付费动机；这是时间货币化的基准参数（可参数化研究）。
- 97.7%/2.3% 的免费/付费比是 F2P 行业常引数据（Wikipedia 载），但" whales 模型"的内部细节未知。

## 创新延伸（可验证假设素材）
1. 生命周期参数实验（15/30/60 分钟回充）对回流与付费的剂量效应——货币化参数化研究。
2. 级联计分 × pattern-000002 的可见连锁奖励对照（同为"连锁"但用途不同：观赏 vs 货币化）。
