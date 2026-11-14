---
id: mechanic-000047
name: "tilt_steer_wrap（倾斜转向与左右穿屏）"
aliases: ["体感转向", "accelerometer steering"]
category: input_pattern
inputs: ["加速度计倾斜（连续模拟量转向）", "点按射击"]
state_variables: ["位置", "速度", "朝向", "平台列表"]
preconditions: ["竖向弹跳主进程", "左右边界为 wrap（穿屏非死亡）"]
transition_rules: ["倾斜 → 水平加速度", "触平台 → 竖向弹起", "左右出屏 → 对侧进入", "怪物/UFO/黑洞/坠落 → 终局"]
feedback: ["涂鸦视觉", "高度计量", "道具速度爆发演出"]
parameters: ["倾斜灵敏度", "弹跳初速", "平台间距生成分布", "wrap 边界"]
failure_modes: ["嘈杂环境下倾斜精度下降", "倾斜与点按的同时协调冲突", "wrap 降低空间记忆价值"]
related_case_ids: [game-000046]
related_mechanic_ids: [mechanic-000010]
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

输入语义轴的"倾斜（连续模拟量）"位：转向精度低于绝对位置参照（拖拽），学习曲线是体感校准。wrap 边界消除"出界即死"惩罚、把左右变成纯自由度（分析口径）。与 mechanic-000010（持续态按压）同为体感家族的两个位。
