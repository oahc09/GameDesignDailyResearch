---
id: mechanic-000071
name: "rotate_world_indirect_control（转塔不转球的间接控制）"
aliases: ["间接控制", "rotate the world"]
category: input_pattern
inputs: ["单指滑动（旋转塔身角度）"]
state_variables: ["球位置/弹跳", "塔身角度", "层数进度"]
preconditions: ["球自动弹跳（不可直接控制）", "红段=唯一失败条件"]
transition_rules: ["滑动 → 塔身旋转（球不动）", "缺口对位 → 球穿层", "落红段 → 失败", "抵达底座 → smash 结算"]
feedback: ["3D 螺旋塔旋转", "穿层演出", "smash 底座结算"]
parameters: ["塔层数与缺口分布", "旋转灵敏度", "红段密度", "弹跳节奏"]
failure_modes: ["对位预判的提前量学习", "间接控制的挫败归因模糊（塔 vs 手）", "深度极浅"]
related_case_ids: [game-000067]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

操作对象反转：移动世界而非角色（转塔不转球）——把"移动角色躲障碍"翻转为"移动障碍结构给角色让路"。失败归因部分模糊化（塔的时机 vs 手滑）是超休闲挫败最小化策略（分析口径）。来源为 C 级商店页（无独立百科条目）——全库证据等级最低样本之一，如实标注。
