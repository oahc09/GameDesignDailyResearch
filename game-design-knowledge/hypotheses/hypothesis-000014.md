---
id: hypothesis-000014
name: "daily_rule_induction_puzzle（每日规则归纳谜题）"
aliases: []
ingredients: [mechanic-000029, pattern-000003]
related_case_ids: [game-000028, game-000005]
novelty_claim: "把 The Witness 的面板规则归纳（mechanic-000029）与每日稀缺+分享（pattern-000003）组合：每日一块'规则未知'的面板，玩家从 3 个样例归纳隐藏规则并解出，结果以归纳轮次编码分享。检验'学规则'能否成为每日谜题的可持续内容形态。未经对比研究不得声称行业首创（NYT 规则类每日题存在先例，仅作参照）。"
test_plan: "网页原型：规则生成器从规则库抽取单规则+自动生成样例序列（保证可归纳性由求解器验证）。内测 30 名玩家 × 14 天，采集：首猜归纳成功率、每日完成率、分享点击率、'今日规则有意思'自评。成功指标：D7 回流 ≥40% 且分享率 ≥10%（对照 Wordle 早期口径趋势）；失败判定：样例歧义导致归纳失败率 >20%（规则语言设计不成熟）。"
risk: "规则库的歧义控制是核心工程难题（mechanic-000029 的 failure_modes）；归纳失败无反馈会放大挫败；每日一规则的库存消耗速度（需生成器而非人工题库）。"
status: proposed
created_at: "2026-11-08"
updated_at: "2026-11-08"
---
