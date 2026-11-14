---
id: mechanic-000046
name: "brick_band_difficulty（色带分值与阶梯难度）"
aliases: ["色带阶梯", "brick bands"]
category: progression
inputs: ["拍移动"]
state_variables: ["拍位置/宽度", "球位置/速度", "砖阵剩余", "回合数"]
preconditions: ["砖阵八排色带分值公开（1/3/5/7）", "阶梯加速条件全公开"]
transition_rules: ["击砖得分按色带（黄1/绿3/橙5/红7 自下而上）", "第 4/12 击、触橙排、触红排 → 球速阶梯上升", "红排击破 → 拍宽减半", "漏球扣回合（3 回合 × 2 屏）"]
feedback: ["色带分值的视觉引导", "球速变化", "拍宽变化的压力"]
parameters: ["色带分值表", "加速阶梯（4/12 击+色带触发）", "拍宽减半触发（红排）", "回合数与屏数"]
failure_modes: ["后期对新手近乎不可玩（街机投币经济的意图）", "内容量有限（2 屏）", "角度策略的单一化"]
related_case_ids: [game-000045]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

"难度=公开参数表"的最早完整样本：色带分值、加速阶梯、拍宽减半全部公开可考（Wikipedia 全项）——可穷举满分 896 的存在证明 pattern-000014 确定性社区的街机前身。"风险前置"结构（高分=先入高难）是街机投币经济下的最优难度组织（分析口径）。
