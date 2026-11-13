---
id: game-000038
title: "Plants vs. Zombies"
aliases: ["植物大战僵尸（中文通行译名）", "PvZ"]
genres: [strategy, hybrid]
subgenre_tags: [one_touch]
platforms: [pc, mac, ios, android, 多平台移植]
release_year: 2009
creators: ["George Fan（设计）", "PopCap Seattle（Laura Shigihara 音乐；Tod Semple 程序；Rich Werner 美术）"]
core_loop: "车道化草坪布防 -> 太阳双源经济（向日葵+掉落收集）-> 植物冷却与阳光成本约束 -> 僵尸波次推进 -> 割草机最后防线 -> 五章环境变体（昼/夜/泳池/雾/屋顶）"
mechanic_ids: [mechanic-000039]
pattern_ids: []
quality_score: 4.53
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Plants_vs._Zombies_(video_game)"
    title: "Plants vs. Zombies (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-13"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2009-05-05 PC/Mac；PopCap Seattle；Fan/Shigihara/Semple/Werner；开发 3.5 年", "玩法全项（5 车道/泳池 6 车道、割草机最后防线、太阳双源经济、49 植物/26 僵尸、昼/夜/泳池/雾/屋顶五章、20 小游戏/Vasebreaker/I, Zombie/Zen Garden、Zomboss 终战）", "设计谱系：Insaniquarium（2001）的防御向改造、Warcraft III TD 模组、MTG（种子包设计）、Swiss Family Robinson、Tapper；工作名 Weedlings→Lawn of the Dead（被 Romero 拦下）", "教程刻意简单嵌入玩法以平衡休闲与硬核", "MC 87 (PC)/92-93 (iOS)；RPS 批评难度'sometimes felt artificial'；GamesRadar'30 goddamn hours'非休闲口径", "销量（PopCap 最快/最高销量作品；iOS 9 天 30 万份 $1M；2016-04 九百万下载）", "获奖（金摇杆 2010 下载年度+策略年度；IMGA 最佳休闲；EA 称 30+ 年度奖）", "EA 2011-07 以 $750M 收购 PopCap；2012-08 Fan 在 50 人裁员中离开（McMillen 传闻因反对 PvZ2 内购；Fan 确认反对 freemium 但否认与裁员关联；前同事称属大裁员）", "Octogeddon（2018）与 Replanted（2025-10）"]
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

# Plants vs. Zombies（game-000038）

## 核心体验
车道化塔防的教科书：五条车道、双源太阳经济（向日葵产能+掉落收集）、植物冷却成本。教程刻意简单并**嵌入玩法**（Wikipedia：平衡休闲与硬核）——第一关不教界面，直接教"为什么需要向日葵"。

## 规则与状态转移（含最简伪代码）
- 状态：`(车道网格, 太阳存量, 种子冷却表, 割草机余量, 波次进度)`；输入：`{选种, 种植, 铲除, 收集太阳}`。

```text
太阳:   双源——向日葵产能 + 场景掉落点击（收集行为本身是微操作）
布防:   植物各有阳光成本与独立冷却（同卡不可连种）
防线:   每车道一次性命（割草机）——溃败一线仍可挽回
环境:   五章变体改写经济与规则（夜=无天然日、泳池=6 车道/荷叶、雾=视野、屋顶=斜面需花盆）
```

## 输入与输出
- 输入：点选种植/收集/铲除（单指全操作）。
- 输出：波次推进提示、僵尸种群的可读分类（路障/铁桶=血量档位可视化）、Zen Garden 长线养成。

## 难度与学习曲线
教学为"嵌入玩法"的典范（Wikipedia 口径）：休闲与硬核的平衡靠教程前置于首关。难度曲线的批评存在（RPS："sometimes felt artificial"——人工感，与 game-000016 的可解性预算同问题域：难度曲线的"设计感外露"）。GamesRadar："easy to grasp but nothing casual about 30 hours"——上手/深度分离。

## 关联机制与模式
- 机制：mechanic-000039（车道防线与太阳双源经济）
- 谱系：Insaniquarium（Fan 前作）防御向改造 → Warcraft III TD 模组 → MTG 种子包——跨类型融合的又一管道样本（pattern-000012 的补充案例，未建边——本卡谱系以文字登记）；与 game-000002（Crossy Road 反驻留）对照：PvZ 用"波次与割草机"控节奏。
- 离职事件（Wikipedia 全口径）：EA $750M 收购 → Fan 反对 PvZ2 freemium（确认）但否认关联裁员（前同事称大裁员）——独立设计者与收购方路线冲突的档案样本；"30+ GOTY"与后续商业对照。

## 设计权衡
- 优点：车道结构把塔防的空间决策压缩为可读的五线谱；太阳双源经济让"产能投资 vs 即时战力"成为每秒的微决策；环境变体改写经济规则（夜/雾/屋顶）作为内容供给。
- 缺陷：难度人工感批评；PvZ2 freemium 化的方向分歧（Fan 离职档案）。
- 反例：与 game-000025（AoE 全局经济）对照——车道化把资源管理压缩到"线"，牺牲战略纵深换取可读性（塔防休闲化的关键取舍）。
- 适用场景：车道塔防；休闲化的资源决策设计。

## 可复现的最小版本与算法
车道网格+太阳双源经济+冷却表+波次生成器即可复现核心循环；僵尸波次表与植物数值为内容层。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2009-05-05 发行；四人团队 3.5 年 | Wikipedia |
| 玩法全项（车道/太阳双源/49 植物 26 僵尸/五章/割草机） | Wikipedia |
| 设计谱系（Insaniquarium/MTG 种子包/Tapper）与教程嵌入 | Wikipedia |
| 销量与获奖（金摇杆双奖/30+ GOTY 口径） | Wikipedia |
| EA 收购与 Fan 离职全口径（传闻/确认/前同事说法分层） | Wikipedia |

## 推断与未知
- **未知**：太阳经济的数值表；波次生成算法；EA 收购后 PvZ2 设计决策的内部文档。
- **推断（分析而非事实）**：太阳双源（产能+掉落）是"投资-回报"与"主动操作"的耦合——纯向日葵经济会退化为放置游戏，掉落点击保留玩家在防守间隙的参与度。
- **推断（分析而非事实）**：割草机是"宽容的最后防线"设计——它把一次失误的惩罚从"重开"降为"失去一线"，与输入宽恕（mechanic-000009）同属隐形容错家族但作用在阵型层。

## 创新延伸（可验证假设素材）
1. 双源经济参数化：掉落太阳占比 0/50/100% 三档对玩家参与度的影响（放置化 vs 微操作）。
2. 割草机经济学：把最后防线做成可购买补给——检验宽容资源化的商业与体验影响。
