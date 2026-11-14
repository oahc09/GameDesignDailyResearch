---
id: mechanic-000045
name: "paddle_angle_segments（八段拍面角度与缺陷保留）"
aliases: ["八段反射", "paddle segments"]
category: state_transition
inputs: ["拍移动（一维连续量）"]
state_variables: ["拍位置", "球位置/速度矢量", "比分"]
preconditions: ["球触拍按触点分八段", "拍不可达屏幕顶部（保留缺陷）"]
transition_rules: ["触拍 → 按触点八段决定反射角度（离散角度表）", "长回合 → 球速递增", "漏球 → 对方得分（11 分制）"]
feedback: ["球轨迹的角度反馈", "比分"]
parameters: ["八段角度表", "加速条件（长回合）", "拍可达范围（顶部死角）", "目标分 11"]
failure_modes: ["死角球无法救回（设计保留）", "离散角度的可预测性（可背谱）", "连续角度替代方案的深度争议"]
related_case_ids: [game-000044]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

模拟到数字的第一次手感工程：连续物理被离散成可学习的角度表（八段）。顶部不可达的电路缺陷被有意保留为难度限制器——pattern-000022 的首个样本（缺陷即特性）。一维输入×离散角度表=足够的对战深度（双人对称设计）。
