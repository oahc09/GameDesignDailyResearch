---
id: game-000018
title: "XCOM: Enemy Unknown"
aliases: ["幽浮：未知敌人", "XCOM EU"]
genres: [strategy, hybrid]
subgenre_tags: []
platforms: [pc, ps3, xbox_360, ios, android, ps_vita]
release_year: 2012
creators: ["Firaxis Games（首席设计 Jake Solomon；发行 2K）"]
core_loop: "带小队进入雾战地图 -> 掩体/监视/瞄准出手 -> 读显示命中率做风险决策 -> 意外脱靶/命中产生叙事 -> 战略层（基地/研究/卫星/恐慌）消化结果"
mechanic_ids: [mechanic-000019]
pattern_ids: [pattern-000010]
quality_score: 4.20
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/XCOM:_Enemy_Unknown"
    title: "XCOM: Enemy Unknown - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-31"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2012-10-09 发行（Firaxis/2K，1994 年 UFO 重构）", "Jake Solomon 首席设计、首个不带 Sid Meier 之名的 Firaxis 作品", "回合战术规则（行动点/监视/掩体/雾战/四职业/铁人模式/永久死亡）", "战略层（基地/研究/卫星/16 国恐慌）", "The Long War 模组与 2K 雇佣其团队", "XCOM 2 2016-02", "MC 89-91 与年度 GOTY 若干", "首月实体 11.4 万份但数字/iPad 成功"]
  - url: "https://www.gamasutra.com/view/news/267606/Jake_Solomon_explains_the_careful_use_of_randomness_in_XCOM_2.php"
    title: "Jake Solomon explains the careful use of randomness in XCOM 2（Gamasutra 采访）"
    publisher_or_author: "Gamasutra / Jake Solomon"
    published_at: "2016-02"
    accessed_at: "2026-10-31"
    source_type: interview
    evidence_level: "B"
    supports_claims: ["显示命中率并非始终等于内部真实概率", "连败补偿：连续 miss 后内部悄悄提升后续射击命中率", "设计立场：真随机在玩家感知中'感觉不公平'，需为感知调校"]
  - url: "https://gaming.stackexchange.com/questions/87535/are-the-hit-percentages-predetermined"
    title: "Are the hit percentages predetermined?（Gaming StackExchange，引开发者口径）"
    publisher_or_author: "Gaming StackExchange 社区"
    published_at: null
    accessed_at: "2026-10-31"
    source_type: community_qa
    evidence_level: "C"
    supports_claims: ["仅作发现线索：连续 miss 触发隐藏 aim bonus 叠加的具体机制口径（与 Gamasutra 采访互证）"]
created_at: "2026-10-31"
updated_at: "2026-10-31"
---

# XCOM: Enemy Unknown（game-000018）

## 核心体验
"95% 也打不中" meme 的缔造者——以及它背后的答案：显示的概率从来不只是物理概率，而是**被设计过的体验概率**。玩家记住的永远是自己 95% 脱靶的那一枪，Firaxis 用隐藏补偿把这种记忆塑造成公平感。

## 规则与状态转移（含最简伪代码）
- 状态：`(小队 1-6 人, 行动点, 命中修正链, 战略层资源/恐慌)`；输入：`{移动, 射击, 监视, 手雷, 技能}`。

```text
射击判定（采访口径）:
  displayed%  = 玩家看到的命中率（基于距离/掩体/高度差等明面修正）
  internal%   = 内部真实概率 = displayed% + f(近期连败/连胜历史)
               # 连续 miss -> 后续内命中率悄悄上调；敌我可能方向不同（具体参数未公开）
  roll < internal% -> 命中
结果不可撤销（铁人模式永久死亡）-> 每次出手都是叙事事件
```

## 输入与输出
- 输入：回合制棋盘操作，无限思考时间。
- 输出：命中率百分比（体验的主要 UI 对象）、命中/脱靶演出、士兵阵亡的永久后果。

## 难度与学习曲线
战术学习（掩体优先、监视网、高打低）之上叠着一门"概率心理学"课程：玩家必须学会 85%≠必中、并接受单局厄运。铁人模式把概率后果变成不可撤销的叙事，是本作情绪强度的来源（分析口径）。

## 关联机制与模式
- 机制：mechanic-000019（显示概率与内部修正分层）
- 模式：pattern-000010（保底式随机公平——本卡是"感知侧"样本：Tetris 7-bag 保证资源下限，XCOM 保证挫败上限）
- 对比：与 game-000005（Wordle）构成随机透明度两极——Wordle 的裁决 100% 如实显示，XCOM 公开承认"显示的数字在对你撒谎"（采访语义）。

## 设计权衡
- 优点：概率感知调校把"厄运"从弃坑原因转化为传说故事（95% miss meme 本身成为传播资产，分析）；永久死亡+隐藏补偿的组合让策略层情绪成本可承受；战略层恐慌系统给失败以外的时间惩罚而非读档惩罚。
- 缺陷：显示概率与内部概率的偏差若被玩家发现，信任成本高于收益（社区长期争论的伦理点，转述）；mod（The Long War）证明硬核层想要"更真实的随机"——2K 雇佣其团队做 XCOM 2 首日 mod（Wikipedia）。
- 反例：竞技 PvP 中"命中显示≠内部值"即作弊——感知调校只适用于 PvE 单机语境。
- 适用场景：含长周期成长+永久损失的战术/模拟玩法。

## 可复现的最小版本与算法
六角/方格回合移动 + 掩体命中修正表 + 连败补偿计数器即可复现；内部参数表未公开（社区数据挖掘口径未采信）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2012-10-09；Firaxis/2K；Solomon 首席设计；1994 重构 | Wikipedia |
| 回合规则全项 + 铁人/永久死亡 | Wikipedia |
| 显示概率≠内部概率；连败补偿；"真随机感觉不公平" | Gamasutra 采访（B）+ StackExchange 线索（C，互证） |
| Long War 模组生态与 2K 收编 | Wikipedia |
| 销量/MC 89-91 | Wikipedia |

## 推断与未知
- **未知**：内部修正的精确公式与参数（各难度差异、敌方是否同样受补偿）未从官方文档核实；"75% 不等于 75%"的完整访谈（Designer Notes 播客 #81）未收听，未登记为已读来源。
- **推断（分析而非事实）**：显示侧"诚实"与内部侧"调校"的组合是本设计的关键平衡——若显示侧也调（显示 95% 实为 90%），玩家可学习的决策模型就塌了；偏差必须藏在 roll 一侧。
- **推断（分析而非事实）**：连败补偿的本质是**有记忆随机**（与 7-bag 同族）：把 iid 的方差重塑为"长厄运被截断"的分布，代价是概率论意义上的"不公平"。

## 创新延伸（可验证假设素材）
1. 透明模式实验：同一游戏提供"真实随机"开关，A/B 测量弃坑率与情绪强度——把伦理争论变成数据问题。
2. 见 hypothesis-000007：把连败补偿与保底袋统一为"记忆型随机"的两种实现，比较玩家感知。
