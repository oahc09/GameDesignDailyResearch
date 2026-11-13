---
id: mechanic-000032
name: "limb_differential_control（分肢体差分控制）"
aliases: ["分肢控制", "QWOP controls"]
category: input_pattern
inputs: ["Q/W：两条大腿肌肉驱动", "O/P：两条小腿", "R：重置"]
state_variables: ["布娃娃骨架各关节角度/角速度", "身体姿态", "已跑距离"]
preconditions: ["布娃娃物理（铰链关节+力矩开关）", "无预设步态动画——步态必须被发明"]
transition_rules: ["按键=对应肌肉力矩开关（非方向语义）", "倒地可爬起继续（无传统失败态）", "距离计量持续推进"]
feedback: ["布娃娃跌倒的物理喜剧", "米数计数（个人失败/成功的可比较数字）"]
parameters: ["关节力矩", "地面摩擦", "键-肢体映射（两腿两键+两小腿两键）"]
failure_modes: ["发现期挫败无产出（乱按阶段）", "步态一旦发明即固化（解被找到）", "键位协调超过手指容量时无法玩"]
related_case_ids: [game-000031]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

控制复杂度的刻意极繁化：把日常动作（走路）拆到肌肉级并交给四键。与输入宽恕（mechanic-000009）完全对立——笨拙即主题。关键取值是"复杂度刚好超出手协调能力"（四键=刚好难，分析口径）；Foddy 的自设目标哲学（"人们喜欢自设目标"）使失败不构成惩罚。
