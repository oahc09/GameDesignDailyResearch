---
id: pattern-000011
name: "solver_bounded_depth（求解器界定的深度谱）"
aliases: ["可解性光谱", "solver as ceiling"]
related_case_ids: [game-000015, game-000016, game-000005]
related_mechanic_ids: [mechanic-000016, mechanic-000017, mechanic-000005]
confidence: source_reviewed
created_at: "2026-10-31"
updated_at: "2026-10-31"
---

## problem
"这游戏有多深"通常靠社区口碑回答，无法比较、无法证伪；设计者也不知道自己的难度上限在哪。

## context
规则可完全形式化（确定性或可枚举随机）；存在可计算的决策函数或复杂性结果。

## solution
用求解器/复杂性理论给深度**定量定位**，形成谱系：① 求解器可达界——expectimax AI 把 2048 推到 32768（单调性/平滑度启发），人类策略（角固定）位于其下；② 复杂性类背书——Minesweeper 一致性判定 NP-complete、无限版图灵完备，"难度有数学下限"；③ 熵度量——Wordle 的信息熵求解器把"好猜测"变成可计算的期望信息增益。三者共同回答：深度来自决策分支宽度、隐藏信息量还是随机方差。

## tradeoffs
- 求解器存在即剧透：最优开局/最优策略公开后，发现乐趣坍缩（Wordle 的 SALET/TARES 之争）。
- 复杂性结果只保证"存在难局面"，不保证"玩家会遇到"（NP-complete ≠ 好玩，分析口径）。
- 高方差随机玩法（Balatro）难以建立求解器——深度证明缺口（见 counterexamples）。

## known_uses
- game-000015 2048（expectimax 社区谱系：ov3y 起源 → 32768 到达率 80%+ 的后继实现）
- game-000016 Minesweeper（Kaye 2000 NP-complete；~25% 雷密度相变）
- game-000005 Wordle（3Blue1Brown 信息熵方法：期望信息增益选猜测）

## counterexamples
- game-000017 Balatro：规则可形式化但**构筑空间的随机遭遇**使静态求解不实用——深度由"代数接口的可组合性"而非可解性承载；提示：深度证明不止求解器一条路。
