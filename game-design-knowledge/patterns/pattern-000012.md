---
id: pattern-000012
name: "fusion_by_shared_interface（以共享接口融合两个玩法核）"
aliases: ["跨类型融合", "genre fusion"]
related_case_ids: [game-000019, game-000020, game-000022]
related_mechanic_ids: [mechanic-000020, mechanic-000021, mechanic-000023]
confidence: source_reviewed
created_at: "2026-11-01"
updated_at: "2026-11-01"
---

## problem
把两个类型拼在一起通常是"小游戏插播"（minigame sandwich）：两个核各玩各的，融合感为零，重复劳动翻倍。

## context
两个玩法核之间存在某个可以**双重赋义**的公共对象（消除结果、卡牌、跳跃键）；两核的节奏兼容（同回合或同输入帧）。

## solution
选定公共接口并让它同时承担两个语义：Puzzle Quest 的消除结果=法力/伤害（资源桥）；Downwell 的跳跃键=攻击键（输入桥）；Slay the Spire 的卡=动作∪资源（对象桥）。判据：接口在两个核里都**不可缺**，去掉任何一侧语义游戏都塌。

## tradeoffs
- 融合深度越高，平衡自由度越低（PQ 的法术直接改棋盘，RPG 数值会侵蚀三消技巧）。
- 双语义输入（Downwell）对新手有误触发学费。
- 接口选择错误（小游戏只是计分器）= 插播感。

## known_uses
- game-000019 Puzzle Quest（资源桥，2007 奠基）
- game-000020 Slay the Spire（对象桥：卡=动作∪资源，deckbuilder×roguelike）
- game-000022 Downwell（输入桥：跳=射）

## counterexamples
- game-000017 Balatro：只有计分代数被改写，没有第二个玩法核——它是"规则改写融合"而非"双核融合"，说明融合不止一条路，但双核融合的判据（接口不可缺）不适用。
