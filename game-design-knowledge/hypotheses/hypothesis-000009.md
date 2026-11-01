---
id: hypothesis-000009
name: "merge_chain_mana（物理合并链×回合资源引擎）"
aliases: []
ingredients: [mechanic-000003, mechanic-000020]
related_case_ids: [game-000003, game-000019]
novelty_claim: "把 Suika 的物理合并链（mechanic-000003）接入 Puzzle Quest 式资源转译（mechanic-000020）：合并产出的阶位转译为法力点数，回合制战斗消耗法力释放技能，技能再反写物理盘（移动障碍/改变重力方向）。检验'物理产出作为回合资源'能否同时保留两核的乐趣。未经对比研究不得声称行业首创。"
test_plan: "HTML5 原型 A/B：A 组纯合并计分（Suika 基线）；B 组合并链+回合制技能消耗（阶位=法力，技能=盘面干预）。各招募 ≥20 名玩家 15 分钟，采集：主动规划合并的频次（对照 A 的被动堆叠）、技能使用分布、'两核互相打断'自评。成功指标：B 组主动规划率显著提升且两核干扰自评 ≤ 中位；失败判定：B 组出现'攒法力不合并'的死锁策略。"
risk: "物理的连续节奏与回合制的停顿互相打断（节奏不兼容）；技能干预盘面后合并链的涌现性受损；双核学习成本叠加。"
status: proposed
created_at: "2026-11-01"
updated_at: "2026-11-01"
---
