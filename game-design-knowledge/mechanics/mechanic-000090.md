---
id: mechanic-000090
name: "gesture_puzzle_box_eyepiece（触摸手势机关盒与目镜显影）"
aliases: ["机关盒", "puzzle box gestures"]
category: input_pattern
inputs: ["触摸手势全集（旋转/缩放/拖动/拨动——拟真机关动作）"]
state_variables: ["盒子机关状态", "目镜显影层", "信件收集"]
preconditions: ["手势=真实机关动作（拟真映射）", "无失败态（试错零成本）"]
transition_rules: ["旋转/缩放检视 → 手势操作机关 → 打开新 compartment", "目镜透镜 → 显影隐藏 Null 元素 → 归位成符文获取密码", "信件碎片推进叙事"]
feedback: ["机关联动演出", "目镜显影层", "信件文本"]
parameters: ["机关联动图", "手势映射表", "目镜隐藏层设计", "信件节奏"]
failure_modes: ["PC 移植手感损失（MC 73 vs iOS 88 口径）", "叙事极简的碎片化取舍", "手势歧义（哪个凸起能拨）"]
related_case_ids: [game-000086]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

触觉拟真的机关盒：手势=真实机关动作（移动端独有输入优势——鼠标/键盘无法复刻，PC 版 MC 73 为负证据）。目镜显影是"隐藏层"设计——同一盒子两套信息（肉眼层/目镜层），探索纵深翻倍而美术只增一层纹理（分析口径）。六名前 Criterion（Burnout）开发者 £16 万成本 → iPad 年度游戏+BAFTA 最佳英国游戏——外包美术团队转自研的转型样本。
