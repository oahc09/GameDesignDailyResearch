---
id: mechanic-000070
name: "single_axis_jetpack_vehicles（单轴喷气输入与载具动词重置）"
aliases: ["单轴输入", "vehicle verb reset"]
category: input_pattern
inputs: ["按住=喷气上升/松手=下落（连续态，唯一输入）"]
state_variables: ["高度", "垂直速度", "载具状态", "金币/Spin Token", "任务星级"]
preconditions: ["水平速度恒定（玩家不控）", "触碰障碍即死"]
transition_rules: ["按住 → 推力上升；松手 → 重力下落", "触碰电锯/导弹/激光 → 即死（躯体前滚演出）", "载具盒子 → 随机变身（每载具独立动词集）", "任务三星级/Spin Token 老虎机/The Stash"]
feedback: ["恒速滚动", "载具变身演出", "任务星级"]
parameters: ["推力与重力", "障碍生成器", "载具动词表", "任务/老虎机/Stash 三层 meta"]
failure_modes: ["垂直轴单一深度天花板", "载具变身的学习重置期", "死亡高频期的挫败（躯体前滚缓冲）"]
related_case_ids: [game-000066]
related_mechanic_ids: [mechanic-000010]
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

输入语义轴（pattern-000023）"按住"位的第二个实现：Tiny Wings 语义在速度、JJ 语义在高度。载具系统是"动词重置器"——每次变身重置学习曲线而难度继续（分析口径）；躯体前滚演出是严苛规则+幽默演出（与 GOI 旁白同精神）。Barry Steakfries 从 Monster Dash 直接衍生（Wikipedia）——角色复用品牌连续性。
