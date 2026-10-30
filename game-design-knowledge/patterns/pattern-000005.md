---
id: pattern-000005
name: "rules_as_manipulable_objects（规则本身作为可操纵对象）"
aliases: ["规则即玩法", "mutable rules"]
related_case_ids: [game-000006]
related_mechanic_ids: [mechanic-000007]
confidence: source_reviewed
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

## problem
固定规则的谜题系统在内容量耗尽后复玩性崩塌；玩家对系统的理解很快追上设计者的出题能力。

## context
规则可以用小词汇表形式化（名词/动词/属性）；关卡是单屏、可全览的；失败可无损回退。

## solution
把规则从引擎常量改为关卡内可操作的实体：玩家推词块改写"什么成立"，解谜单位从"路径"升维到"世界参数"。配套三件：小词表 + 严格语法（可控组合空间）、无强制失败 + 无限撤销（保护探索）、手工关卡控制难度曲线。

## tradeoffs
- 解空间随规则组合爆炸：测试覆盖难、后期难度波动（Baba 媒体批评点，转述）。
- 对内容作者是高门槛：出题者需同时是设计者与逻辑学家。
- 自动求解（Solver）成本急剧上升，可验证性下降（与周四专题的 Solver 路线相反）。

## known_uses
- game-000006 Baba Is You（原型案例；NGJ 2017 起源）

## counterexamples
- 标准 Sokoban：同为推块语义但规则不可变——状态空间可枚举、Solver 友好；说明"推块"与"规则可变"是正交选择，后者才引入复杂度爆炸。
