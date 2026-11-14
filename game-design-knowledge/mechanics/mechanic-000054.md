---
id: mechanic-000054
name: "trajectory_preview_slingshot（弹道虚线预览弹弓）"
aliases: ["弹道预览", "trajectory preview"]
category: feedback
inputs: ["拖拽拉弓（距离+角度=初速度矢量）"]
state_variables: ["拉距/角度", "场景刚体（木材/冰/石）", "猪", "剩余鸟数", "星级"]
preconditions: ["物理引擎确定（同初速恒同弹道）", "预览从初速度采样计算"]
transition_rules: ["拉距+角度 → 初速度矢量 → 虚线抛物线预览", "发射 → 冲量碰撞 → 结构应力连锁倒塌", "星级 1-3 按分数（剩余鸟/破坏量）"]
feedback: ["虚线弹道预览（移动端确定性预览范式）", "物理破坏链演出", "星级结算"]
parameters: ["预览采样长度", "刚体材质强度表", "鸟类能力差异", "星级分数阈值"]
failure_modes: ["预览过强消除弹道学习", "物理引擎浮点漂移导致预览与实飞偏差", "关卡深度在数百关内耗尽"]
related_case_ids: [game-000053]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

移动端"确定性预览设计"（pattern-000025）的范式样本：虚线弹道=从发射速度计算的抛物线预览（Wired 物理分析口径）——把"猜弹道"变成"读弹道再微调"，抛体物理学习门槛降到零。预览长度是"辅助-挑战"滑杆（分析口径）。
