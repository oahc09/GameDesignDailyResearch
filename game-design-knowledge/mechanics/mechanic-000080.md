---
id: mechanic-000080
name: "population_driven_acceleration（存活数驱动的自然加速）"
aliases: ["渲染加速", "population speedup"]
category: progression
inputs: ["击杀（减少存活对象）"]
state_variables: ["存活侵略者数", "移动方向", "掩体侵蚀", "分数"]
preconditions: ["渲染性能随对象数变化（硬件特性）", "设计者选择保留而非修复"]
transition_rules: ["5×11 阵列横移 → 触边下降反向", "存活越少 → 渲染帧越快 → 移动越快（意外保留）", "掩体可被上下方向打穿侵蚀", "侵略者触底/生命尽 → 终局"]
feedback: ["行进音随加速变急（Jaws 式）", "掩体侵蚀可视化", "UFO 奖励音"]
parameters: ["阵列 5×11", "下降步长", "渲染加速系数（硬件原生）", "UFO 出现概率"]
failure_modes: ["终局极快导致不可玩（街机翻台经济的意图）", "加速曲线不可调（硬件绑定）", "克隆潮（未及时专利）"]
related_case_ids: [game-000076]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

"意外机制保留"（pattern-000022）的最强历史证据：渲染帧效应被 Nishikado 刻意保留为难度机制——终局自然指数加速无法作弊（公开可测）。街机经济学推断：加速=翻台率（分析口径）。行进音（556 定时器，Jaws 式）把加速转化为听觉张力。
