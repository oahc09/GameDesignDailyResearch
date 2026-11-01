---
id: game-000020
title: "Slay the Spire"
aliases: ["杀戮尖塔（中文通行译名）", "STS"]
genres: [strategy, hybrid]
subgenre_tags: []
platforms: [pc, ps4, nintendo_switch, xbox_one, ios, android]
release_year: 2019
creators: ["Mega Crit（Anthony Giovannetti、Casey Yano，西雅图）"]
core_loop: "分支地图选路 -> 每回合 3 能量 + 新手牌 -> 卡牌既是动作也是资源 -> 敌人 Intent 预告 -> 遗物/药水叠加构筑 -> 爬塔死亡或登顶后 meta 解锁"
mechanic_ids: [mechanic-000021]
pattern_ids: [pattern-000012]
quality_score: 4.53
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Slay_the_Spire"
    title: "Slay the Spire - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-01"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2017 末 EA、2019-01-23 正式版与移植谱系", "Mega Crit 双创始人", "规则全项（每回合 3 能量+新手牌、分支地图 FTL 渊源、Intent 预告系统、遗物/药水、四角色、20 级 Ascension、三钥匙 Act IV）", "每日挑战固定种子", "销量（2018-06 破 100 万、2019-03 150 万）与传播故事（中国主播带动）", "MC 89 与奖项", "开创 roguelike deckbuilder 类型潮流（带 citation-needed 标注）", "续作 II（Godot、2026-03 EA、四人合作）"]
  - url: "https://www.gamedeveloper.com/design/how-i-slay-the-spire-i-s-devs-use-data-to-balance-their-roguelike-deck-builder"
    title: "How Slay the Spire's devs use data to balance their roguelike deck-builder（Game Developer）"
    publisher_or_author: "Game Developer / Anthony Giovannetti, Casey Yano"
    published_at: "2018-02"
    accessed_at: "2026-11-01"
    source_type: analysis_article
    evidence_level: "B"
    supports_claims: ["数据驱动平衡：追踪卡牌选取率/胜率驱动调整", "协同效应（synergy）的度量方法"]
  - url: "https://gdcvault.com/free/gdc-19"
    title: "GDC 2019 免费演讲区（收录 Mega Crit 两场演讲：Metrics Driven Design and Balance / Success through Marketability）"
    publisher_or_author: "GDC Vault"
    published_at: "2019-03"
    accessed_at: "2026-11-01"
    source_type: official_talk
    evidence_level: "A"
    supports_claims: ["两场演讲存在与主题（指标驱动平衡 / 可传播性设计）；本日仅登记存在性，内容未逐帧观看"]
  - url: "https://www.rockpapershotgun.com/how-slay-the-spire-saved-digital-card-games-from-stagnation"
    title: "How Slay The Spire saved digital card games from stagnation（RPS 回顾访谈）"
    publisher_or_author: "Rock Paper Shotgun"
    published_at: "2023-11"
    accessed_at: "2026-11-01"
    source_type: interview
    evidence_level: "B"
    supports_claims: ["对数字卡牌游戏 stagnation 的影响（回顾视角，页面未全文抓取，仅登记标题口径）"]
created_at: "2026-11-01"
updated_at: "2026-11-01"
---

# Slay the Spire（game-000020）

## 核心体验
把卡牌从"收藏品"改造成"动作 + 资源"的双重存在：牌既是你这回合能做的事，也是整个 run 的成长轨迹本身。能量预算把无限手牌的值域压回"3 点能量怎么花"的决策问题，Intent 系统把敌人状态完全摊开——随机性被限制在发牌层，战斗层近乎完全信息。

## 规则与状态转移（含最简伪代码）
- 状态：`(抽牌堆/弃牌堆/手牌, 能量 3, HP, 遗物, 地图节点, meta 解锁)`；输入：`{打出卡, 结束回合, 药水}`。

```text
回合:   抽 5 张 + 能量重置为 3（受遗物/状态修正）
出牌:   消耗能量 -> 攻击/防御/技能效果；牌进入弃牌堆
Intent: 敌方下回合动作图标化预告（攻击数值/防御/buff 全公开）
地图:   分支节点（战斗/精英/篝火/商店/事件/宝箱）——FTL 式路径规划
死亡:   HP 归零 -> run 结束；meta 层解锁卡/角色/Ascension 难度
随机:   每日挑战用固定种子（Wikipedia）——同起点比较成绩
```

## 输入与输出
- 输入：回合制点选，无限思考时间。
- 输出：Intent 图标（信息设计核心）、能量点、构筑状态面板。

## 难度与学习曲线
深度来自**构筑协同的组合空间 × 有限能量预算**：任意卡组合可行性由能量表约束（3 能量使"无限连招"不可能），Intent 全公开使胜负在决策层而非反应层分出。20 级 Ascension 与四角色把学习曲线制度化为可攀爬的 meta 结构。开发侧用数据驱动平衡（选取率/胜率，GameDeveloper 采访）——设计闭环本身是理论样本。

## 关联机制与模式
- 机制：mechanic-000021（回合能量×手牌刷新经济）
- 模式：pattern-000012（共享接口融合——卡=动作∪资源，deckbuilder 与 roguelike 两个核共用"卡"这一接口）
- 动机关联：SUPPORTED_BY theory-000002（SDT：构筑=自主感，Ascension=胜任感）
- 接 hypothesis-000010（能量预算 × Balatro 代数的组合实验）。

## 设计权衡
- 优点：能量+手牌刷新是极简的"决策预算器"；Intent 系统证明完全信息与肉鸽随机可以共存；数据驱动平衡把 100+ 卡的协同空间控制在可测试范围（GameDeveloper）。
- 缺陷：发牌随机仍能造成"没抽到关键牌"的体验方差（设计上以遗物/药水冗余对冲，分析）；卡池膨胀的平衡债（数据方法依赖玩家量）。
- 反例：与 game-000017（Balatro）对照——STS 用能量限制动作频率，Balatro 用盲注目标限制构筑强度；同为肉鸽卡牌，预算器不同。
- 适用场景：任何需要"动作预算"的卡牌/回合玩法；完全信息+随机供给的混合设计。

## 可复现的最小版本与算法
回合状态机 + 能量/手牌池 + Intent 表 + 分支图生成即可复现核心循环；地图生成与卡池数值未开源（可复现性按规则文档计）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2017 EA / 2019-01-23；移植谱系；Mega Crit | Wikipedia |
| 3 能量+抽 5、Intent、FTL 渊源地图、四角色、Ascension 20 | Wikipedia |
| 每日挑战固定种子 | Wikipedia |
| 数据驱动平衡（选取率/胜率） | GameDeveloper（B）+ GDC 演讲存在（A，登记存在性） |
| 销量 100 万（2018-06）/150 万（2019-03） | Wikipedia |

## 推断与未知
- **未知**：地图生成算法与卡池权重细节；GDC 演讲全文（未逐帧观看，仅登记存在与主题）。
- **推断（分析而非事实）**：Intent 系统是 STS 对"肉鸽随机性批评"最系统的回应——把随机的显示与随机的结算分离：发牌随机、战斗确定。
- **推断（分析而非事实）**：3 能量（而非 5）是把"每回合决策"压入工作记忆容量的数值选择——对接理论卡认知负荷视角（theory 未建，登记为延伸方向）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000010：能量预算移植到计分代数类游戏。
2. Intent 系统反哺实时玩法：把"敌方下一步预告"引入动作游戏（预告 0.5s 后的攻击），检验预判乐趣 vs 反应乐趣的替换效果。
