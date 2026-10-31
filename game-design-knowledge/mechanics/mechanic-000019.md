---
id: mechanic-000019
name: "displayed_vs_internal_probability（显示概率与内部修正分层）"
aliases: ["概率调校", "streak breaker", "命中补偿"]
category: randomization
inputs: ["射击/判定请求", "近期命中历史（连败/连胜计数）"]
state_variables: ["displayed%（明面修正计算）", "internal%（= displayed% + f(历史)）", "连败/连胜计数", "难度档位"]
preconditions: ["PvE 单机（PvP 中即作弊）", "玩家以 displayed% 为决策依据"]
transition_rules: ["roll < internal% -> 命中", "连续 miss -> internal% 悄悄上调（aim bonus 叠加）", "连续命中 -> 反向下调（含敌方侧，口径未完全公开）", "铁人模式：结果不可撤销"]
feedback: ["displayed% 直接显示（决策接口诚实）", "命中/脱靶演出（情绪接口）"]
parameters: ["补偿步长与上限（未公开）", "历史窗口长度", "各难度档修正差异（未公开）", "敌方是否同样补偿（未公开）"]
failure_modes: ["偏差被发现则信任成本高于收益（社区长期伦理争论）", "补偿过度使真实概率技能失效", "数据挖掘时代隐藏参数易被拆穿"]
related_case_ids: [game-000018]
related_mechanic_ids: [mechanic-000015]
confidence: source_reviewed
created_at: "2026-10-31"
updated_at: "2026-10-31"
---

概率的**双层结构**：显示层保持诚实（玩家可学习的决策模型不被破坏），roll 层按历史悄悄调校（连败补偿截断厄运）。与 7-bag（mechanic-000015）同属"有记忆随机"家族：7-bag 保证资源下限（供给侧），本机制截断挫败上界（体验侧）。设计立场来自 Gamasutra 采访——"真随机在玩家感知中感觉不公平"。伦理边界：PvE 单机专属；参数透明度是长期争论点。
