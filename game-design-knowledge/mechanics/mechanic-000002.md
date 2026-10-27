---
id: mechanic-000002
name: "lane_grid_hop（离散格跳与反驻留压力）"
aliases: ["格跳", "endless hopper"]
category: state_transition
inputs: ["点击：前进一格", "滑动：横移/后退一格"]
state_variables: ["网格坐标 (row, col)", "各车道威胁集合与滚动节律", "空闲计时 idle_timer", "后退计数 back_count", "score（最大前进行数）"]
preconditions: ["威胁按车道时间表自走，玩家移动不推进世界", "判定为瞬时相遇（格对格/物对格）"]
transition_rules: ["一次输入 → 沿方向移动一格", "row 增加 → score = max(score, row)", "idle_timer > T 或 back_count ≥ 3 → 强制终局（鹰抓）", "与移动威胁相遇 / 无承载物 → 终局"]
feedback: ["镜头逐格前移的行进感", "车道威胁的可读节律（车灯、火车预告）", "逼近威胁的占位提示"]
parameters: ["车道滚动周期", "空闲阈值 T（社区口径，官方数值未知）", "后退计数上限（社区口径 3）", "威胁密度随 row 上升（推断）"]
failure_modes: ["贪进被撞", "横移卡进车道死角", "驻留被反驻留惩罚", "随机分布产生不可解局面（归因外移）"]
related_case_ids: [game-000002]
related_mechanic_ids: [mechanic-000006]
confidence: source_reviewed
created_at: "2026-10-27"
updated_at: "2026-10-27"
---

把 Frogger 的关卡格跳去掉关卡边界即得此机制。关键增量是**反驻留**（idle 阈值 + 后退计数）：把"等待观望"从合法策略改成高风险选择，强制玩家在信息不完整时持续决策，同时保留有限后退的掌控感。证据标注：反驻留参数来自社区来源（Fandom/攻略），官方数值未核实。
