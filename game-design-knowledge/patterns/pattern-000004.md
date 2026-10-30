---
id: pattern-000004
name: "rewind_as_forgiveness（撤销即宽恕）"
aliases: ["无限撤销", "undo as forgiveness"]
related_case_ids: [game-000007]
related_mechanic_ids: [mechanic-000008]
confidence: source_reviewed
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

## problem
需要精确执行的游戏中，重复劳动（重走已解部分）放大挫败，压低高难度设计的可触达人口。

## context
状态可整体快照/重放；失败多为过程性错误而非理解性错误；单局连续性有价值（长解法链）。

## solution
提供低成本（按住即用）的无限撤销/倒带，把"重试成本"清零、保留"学习成本"；死亡降级为可撤销事件而非终局。若撤销会稀释挑战，用世界级约束（免疫物、时间规则变体）重新注入限制。

## tradeoffs
- 死亡与错误贬值，需持续设计新约束防止玩法平庸化（Braid 六世界即约束堆叠，分析口径）。
- 与"死亡即重开"（mechanic-000006）的廉价重置哲学冲突：前者保连续性，后者保干净状态——同一产品混用需明确切换边界。
- 快照/重放的工程成本与状态序列化风险。

## known_uses
- game-000007 Braid（按住倒带 + 死后仍可倒带）
- game-000006 Baba Is You 的 UNDO（谜题域轻量变体：步进撤销）

## counterexamples
- game-000008 Celeste：拒绝撤销，用检查点 + 隐藏输入宽恕压低失败成本——证明宽恕可以不经过撤销实现，且保住死亡的意义。
