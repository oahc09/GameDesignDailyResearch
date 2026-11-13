---
id: hypothesis-000017
name: "rarity_vs_value_scoring（稀有度计分×面值计分对比）"
aliases: []
ingredients: [mechanic-000036, mechanic-000016]
related_case_ids: [game-000035, game-000015]
novelty_claim: "Threes 的稀有度计分（mechanic-000036）与 2048 的面值直加计分（mechanic-000016）在合并玩法上产生不同的决策结构：稀有度计分让'何时合成'比'合成什么'更重要。检验两种计分对玩家策略分布与深度感知的差异。未经对比研究不得声称行业首创。"
test_plan: "同一 4×4 合并原型双臂：A 面值直加计分（2048 口径：score += merged.value）；B 稀有度加权计分（Threes 口径：权重×牌面）。离线先行：求解器（expectimax，参考 ov3y 谱系）对两计分函数求最优策略差异。真人测试各 ≥25 名玩家 15 分钟，采集：合成时序分布（早合/晚合）、'分数与牌面不一致'的感知率、深度自评。成功指标：B 组合成时序显著推迟（计分奖励保留低牌）且深度自评更高；失败判定：B 组玩家无法感知计分差异（权重设计不可读）。"
risk: "稀有度权重不透明导致玩家无法学习计分逻辑（挫败）；两臂规则不同导致的难度差异混淆计分效应（需同合并规则对照）。"
status: proposed
created_at: "2026-11-13"
updated_at: "2026-11-13"
---
