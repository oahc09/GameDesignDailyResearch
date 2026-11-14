---
id: mechanic-000048
name: "swipe_slice_budget_miss（滑动轨迹切割与累计漏果）"
aliases: ["轨迹切割", "swipe slicing"]
category: input_pattern
inputs: ["滑动轨迹（多点采样——形状/速度/多指并行）"]
state_variables: ["空中实体列表", "连击", "漏果累计", "分数/生命"]
preconditions: ["轨迹与实体相交判定（线段-凸体）", "漏果预算（经典=3 枚）"]
transition_rules: ["轨迹相交水果 → 切开（连续轨迹输入）", "一划多果 → combo 加分；多指 → 多刀并行", "切中炸弹 → 经典即败 / 街机扣分", "累计漏 3 枚 → 经典即败（预算化失败）"]
feedback: ["切割演出（果肉/汁液）", "combo 计分", "刀具皮肤"]
parameters: ["漏果预算=3", "炸弹密度", "投掷生成分布", "combo 加分表"]
failure_modes: ["炸弹的随机性争议", "轨迹采样的输入延迟", "深度上限（无策略层）"]
related_case_ids: [game-000047]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

输入语义轴的"轨迹"位：轨迹本身是输入（形状/速度/多指都是信息）——比方向滑动（mechanic-000049）多一个表达维度。累计漏果把失败从单事件改为预算管理（与 mechanic-000035 预算压力同构，分析口径）；三模式（经典/街机/Zen）覆盖失败光谱三档。
