---
id: hypothesis-000019
name: "difficulty_grading_correlation（生成器难度分级与人类感知的相关性）"
aliases: []
ingredients: [mechanic-000040]
related_case_ids: [game-000039, game-000016]
novelty_claim: "Sudoku 生成器的难度分级（Wayne Gould 六年开发的评级程序为先例，Wikipedia 口径）通常基于推理链深度等机器指标——检验机器分级指标（naked/hidden single 比例、推理链长度、分支因子）与人类玩家感知难度的相关系数，寻找可用的分级代理指标。未经对比研究不得声称行业首创（分级程序先例存在，本假设为相关性验证）。"
test_plan: "离线先行：用同一生成器产出 500 题，机器指标全量记录（提示数/候选剪枝步数/技巧层级分布）。真人测试：招募 ≥60 名不同水平玩家每人解 10 题，采集：解题用时、求助率、放弃率、主观难度（7 级）。统计机器指标与主观难度的 Spearman 相关。成功指标：至少一个机器指标与主观难度 Spearman ρ ≥ 0.6 且跨玩家水平稳健；失败判定：相关性随玩家水平分裂（新手/高手对'难'的定义不同——分级须分人群）。"
risk: "玩家词汇差异（技巧知识）混淆难度感知；用时受打字速度影响；样本分层成本高。"
status: proposed
created_at: "2026-11-14"
updated_at: "2026-11-14"
---
