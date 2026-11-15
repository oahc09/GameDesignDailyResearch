---
id: game-000057
title: "Super Mario Kart"
aliases: ["超级马力欧卡丁车（中文通行译名）", "Mario Kart（系列起点）"]
genres: [action, strategy, hybrid]
subgenre_tags: []
platforms: [snes, 多平台移植]
release_year: 1992
creators: ["Nintendo EAD（导演 Tadashi Sugiyama & Hideki Konno；监制 Shigeru Miyamoto；程序 Masato Kimura；音乐 Soyo Oka）"]
core_loop: "卡丁竞速（圈数制）→ 道具箱随机强化 → 金币提速与护体 → 漂移蓄力 → 车手属性差异 → 战斗模式气球战"
mechanic_ids: [mechanic-000061]
pattern_ids: []
quality_score: 4.73
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Super_Mario_Kart"
    title: "Super Mario Kart - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-15"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1992-08-27 日本 SNES（北美 09-01/欧 1993-01-21）", "EAD（导演 Sugiyama/Konno、监制 Miyamoto、程序 Kimura、音乐 Oka）", "规则全项（八角色属性差异、道具箱随机强化——龟壳/香蕉/星星无敌/金币提速护体、漂移蓄力与跳跃、20 赛道四杯 50/100/150cc、Time Trial、战斗模式气球战、Mode 7 伪 3D 与 DSP-1）", "评价（GameRankings 94%；Guinness 50 佳主机第一；名人堂 2019）", "销量 876 万（SNES 第四），卡丁车子品类创造口径", "Mario Kart 8（2014）/Deluxe（2017）为各自平台最畅销但 Wikipedia 未给 60.94M 数字"]
created_at: "2026-11-15"
updated_at: "2026-11-15"
---

# Super Mario Kart（game-000057）

## 核心体验
把道具随机性注入竞速：领先者拿到的是香蕉/绿龟，落后者拿到的是红龟/星星——**道具箱的随机分布使"领先"成为一种可被挑战的临时状态**。它创造了卡丁车（kart racing）子品类。

## 规则与状态转移（含最简伪代码）
- 状态：`(名次, 车速, 道具持有, 金币, 圈数)`；输入：`{转向, 漂移蓄力, 道具使用}`。

```text
道具箱:  赛道固定点位 → 随机强化（龟壳/香蕉/星星/金币…）
金币:    提升极速并吸收一次伤害（收集即微进程）
漂移:    蓄力小 turbo（技术层）
战斗:    独立气球战模式（道具语义复用）
```

## 输入与输出
- 输入：转向/漂移/道具（点按与持续混合）。
- 输出：Mode 7 伪 3D 赛道、道具演出、名次实时显示。

## 难度与学习曲线
难度=道具时机的博弈（何时吃、何时用、留不留给下一圈）+ 漂移技术。**橡皮带（rubber-banding）机制与道具概率研究在 Wikipedia 本页未讨论**——本卡如实标注：该机制的存在与参数为社区研究议题（待核验来源，不采信口径）。

## 关联机制与模式
- 机制：mechanic-000061（道具箱随机强化）
- 模式：与 pattern-000010（保底式随机公平）同问题域——竞速版的位置感知随机（领先者弱化/落后者强化）是否被使用为社区长期议题（分析口径，Wikipedia 未载）。
- 对照：与 game-000018（XCOM 隐藏概率调校）同属"概率感知调校"家族——竞速版的调校对象是道具分布（待核验）。

## 设计权衡
- 优点：随机道具把竞速从纯技能变为"技能+时机博弈"，扩大受众（876 万销量、子品类创造、名人堂——Wikipedia）；战斗模式复用道具语义；IP 与机制的互相成就。
- 缺陷：随机道具的胜负争议（领先者被翻盘的挫败——社区长期讨论，未入库来源，标注为社区反应）；Wikipedia 本页未讨论橡皮带——不采信任何具体分布。
- 反例：与 game-000044（Pong 对称物理）对照——Pong 双方共享同一物理，Mario Kart 的道具分布刻意不对称（领先/落后差异化）；对称与不对称是对战设计的根本分岔。
- 适用场景：竞速+道具混合；需要"翻盘可能性"的对抗设计。

## 可复现的最小版本与算法
名次感知的道具分布表 + 漂移蓄力 + 金币经济即可复现核心循环；道具概率表为设计参数（官方数值未知）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1992-08-27 SNES；EAD 团队 | Wikipedia |
| 规则全项（道具箱/金币/漂移/战斗模式/Mode 7） | Wikipedia |
| 876 万销量/子品类创造/名人堂 2019 | Wikipedia |
| MK8/Deluxe 最畅销（无具体数字口径） | Wikipedia |

## 推断与未知
- **未知**：橡皮带机制是否存在于初代及后续作品（Wikipedia 本页未讨论——不采信社区研究）；道具概率表。
- **推断（分析而非事实）**：道具箱"按名次随机"的分布设计（若存在）是"落后者补偿"的竞速版——与 pattern-000010 同家族；**但必须先有数据证据**（hypothesis 方向：采集道具箱分布数据）。
- 战斗模式复用道具语义证明道具系统的"词汇表"可跨模式（分析）。

## 创新延伸（可验证假设素材）
1. 道具分布数据采集与透明化（接 pattern-000010/hypothesis-000013 的确认门槛研究）。
2. 漂移蓄力×其他载具玩法（漂移作为通用技术层的移植研究）。
