---
id: mechanic-000031
name: "body_lengthen_puzzle（蛇身增长作为可变形资源）"
aliases: ["生长谜题", "growing body resource"]
category: state_transition
inputs: ["四向移动（头动身随）", "多条蛇鸟轮流操控"]
state_variables: ["每条蛇鸟的节列表", "剩余果实", "出口状态"]
preconditions: ["逐节重力结算（每节无支撑即坠）", "果实分布被设计为生长即解题"]
transition_rules: ["Snake 式移动：头前进、身体逐节跟随", "每节无支撑 → 下坠（移动决策同时改变多节支撑）", "吃果实 → +1 节（改变可达性与桥接能力）", "胜利：所有蛇鸟同时位于出口格"]
feedback: ["逐节连锁移动反馈", "生长动画", "全员抵达结算"]
parameters: ["关卡网格尺寸", "果实数量与位置", "蛇鸟数量", "重力结算顺序（从头/从尾——实现细节即玩法）"]
failure_modes: ["状态空间不可心算（逐节重力 × 多蛇 × 生长时序）", "结算顺序实现差异改变谜题语义", "难度陡峭劝退（声誉两极）"]
related_case_ids: [game-000030]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-08"
updated_at: "2026-11-08"
---

把"自我"做成可塑材料：变长的身体同时是拖累（下坠风险）与工具（桥/钩/配重）。规则五分钟讲完而状态空间组合爆炸（多蛇 × 逐节重力 × 生长时序），2020 年论文证明解法长度对关卡拓扑高度敏感（Wikipedia 引）。其续作路线（Primer 刻意做易）见 pattern-000017。
