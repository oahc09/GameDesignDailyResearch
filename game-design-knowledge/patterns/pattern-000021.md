---
id: pattern-000021
name: "unique_solution_contract（唯一解契约）"
aliases: ["恰一解", "verified solvability"]
related_case_ids: [game-000039, game-000027, game-000016]
related_mechanic_ids: [mechanic-000040, mechanic-000028, mechanic-000017]
confidence: source_reviewed
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

## problem
谜题类玩法最大的公平风险是"多解或无解"——玩家按错误假设走通了游戏，或被不可解局面卡死；设计者若不验证，公平性只是假设。

## context
存在客观判定；状态空间可枚举或可求解（求解器/穷举/表格链）；谜题由生成或手工产出。

## solution
把"恰一解（或可解性）"从假设升级为**被验证的契约**：Sudoku——17 提示数下限经穷举证明、生成器挖洞后唯一解校验（多解回填）；Obra Dinn——设计者用表格链先跑通全部命运链；Minesweeper——生成端验证-回退保证可解（或 Vista 式首击保护）。

## tradeoffs
- 验证成本与状态空间成正比（Sudoku 生成器/Obra Dinn 表格链/Minesweeper 回退各付出不同代价）。
- 唯一解契约排斥"多解即自由"的设计（如 Baba 的开放解法——分析口径）。
- 验证工具本身成为设计依赖（无求解器团队的谜题设计者风险更高）。

## known_uses
- game-000039 Sudoku（穷举级验证：17 提示下限与 6.67×10²¹ 盘面计数）
- game-000027 Return of the Obra Dinn（表格链设计法——Wikipedia 开发条目）
- game-000016 Minesweeper（首击后生成 + 现代变体的可解性回退）

## counterexamples
- game-000006 Baba Is You：规则可变使唯一解契约几乎不可维护（解空间随规则组合爆炸）——开放解法的谜题必须放弃该契约，改用"可撤销+重置"兜底。
