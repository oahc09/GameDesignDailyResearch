---
id: mechanic-000061
name: "item_box_random_powerups（道具箱随机强化与位置博弈）"
aliases: ["道具箱", "item boxes"]
category: economy
inputs: ["吃到道具箱（赛道固定点位）", "道具使用时机"]
state_variables: ["名次", "持有道具", "金币（提速/护体）", "圈数"]
preconditions: ["道具箱生成点固定", "道具随机分布（按名次/位置的分布口径待核验——Wikipedia 本页未讨论）"]
transition_rules: ["吃箱 → 随机道具（龟壳/香蕉/星星/金币…）", "金币 → 提极速并吸收一次伤害", "漂移蓄力 → 小 turbo", "战斗模式：道具语义复用为气球战"]
feedback: ["道具演出", "名次实时显示", "Mode 7 伪 3D 赛道"]
parameters: ["道具表与概率（待核验）", "箱点位", "金币上限与提速系数", "车手属性差异", "杯速档（50/100/150cc）"]
failure_modes: ["随机道具的胜负争议（领先者被翻盘挫败——社区长期讨论口径）", "橡皮带机制争议（Wikipedia 本页未讨论——不采信具体分布）", "道具时机博弈的认知负荷"]
related_case_ids: [game-000057]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-15"
updated_at: "2026-11-15"
---

把随机道具注入竞速：领先者与落后者拿到不同道具的"位置感知随机"使其成为可挑战的临时状态——创造卡丁车子品类（876 万销量/名人堂 2019）。**橡皮带与道具概率的具体分布在 Wikipedia 本页未讨论**：本卡不采信任何社区研究口径，将其列为 hypothesis 方向（采集道具箱分布数据）。与 pattern-000010 同问题域（位置感知随机 vs 保底）。
