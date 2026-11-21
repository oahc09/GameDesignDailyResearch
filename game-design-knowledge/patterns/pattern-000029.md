---
id: pattern-000029
name: "one_mutation_per_sequel（每代一变异——品类的机制演化链）"
aliases: ["机制演化链", "sequel mutation"]
related_case_ids: [game-000076, game-000077, game-000078]
related_mechanic_ids: [mechanic-000080, mechanic-000081, mechanic-000082]
confidence: source_reviewed
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

## problem
续作常常堆叠机制（更多武器/更多系统），稀释原作的核心身份；或完全重做导致粉丝流失。

## context
原品类的核心循环清晰可辨；存在未被探索的单一机制维度；玩家对原作的肌肉记忆有价值。

## solution
每一代只**变异一个机制维度**，保留其余：Space Invaders（静态阵列+意外加速）→ Galaxian（敌人离阵俯冲——移动变异）→ Galaga（俘虏救援双机——关系变异）→ Dig Dug（挖掘地形+幽灵化——空间变异）。品类的"演化树"由此可读：每条新机制的来源可追溯到上一代的某一维度。

## tradeoffs
- 单变异的增量可能太小（Gaplus 口径的'变化不够'风险，分析口径）。
- 变异维度选择错误会破坏原作身份（战斗游戏改叙事即反例域）。
- 演化树深了之后新人入门成本累积（Galaga 88 等的断层）。

## known_uses
- game-000076 Space Invaders → Galaxian → game-000077 Galaga（移动变异+俘虏变异）
- game-000078 Dig Dug（射击→挖掘的空间变异；Namco 街机谱系）
- Namco 街机谱系整体（Wikipedia 各条目互相引用的演化口径）

## counterexamples
- game-000037 Candy Crush Saga：Saga 化走的是"内容+货币化堆叠"而非机制变异——商业上同样成立；说明该模式是**品类身份管理**策略而非唯一成功路径。
