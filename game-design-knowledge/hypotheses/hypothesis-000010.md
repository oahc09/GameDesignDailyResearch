---
id: hypothesis-000010
name: "energy_budgeted_scoring（能量预算移植计分代数）"
aliases: []
ingredients: [mechanic-000021, mechanic-000018]
related_case_ids: [game-000020, game-000017]
novelty_claim: "给 Balatro 式计分代数（mechanic-000018）加上 STS 的能量预算（mechanic-000021）：小丑触发与重掷消耗能量、每回合能量有限，检验'动作预算'能否把分数游戏的构筑从'堆叠最优'转向'预算内取舍'。未经对比研究不得声称行业首创。"
test_plan: "原型 A/B：A 组无能量（Balatro 基线：出牌次数为限）；B 组能量制（出牌/弃牌/重掷各计能量，回合刷新）。各招募 ≥25 名玩家 20 分钟，采集：构筑多样性（出现的小丑组合熵）、无效出牌率、自评决策压力（7 级）。成功指标：B 组构筑组合熵显著更高且决策压力不超容忍；失败判定：能量惩罚使玩家放弃高风险构筑（方差回避），构筑熵反降。"
risk: "能量是负反馈，与'指数分数爽感'直接冲突（Balatro 的多巴胺来自无预算的爆炸）；双预算（出牌次数+能量）冗余增加认知负荷。"
status: proposed
created_at: "2026-11-01"
updated_at: "2026-11-01"
---
