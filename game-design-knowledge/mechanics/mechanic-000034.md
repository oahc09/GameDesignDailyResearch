---
id: mechanic-000034
name: "scale_threshold_growth（尺度阈值增长循环）"
aliases: ["吸积成长", "sticky ball growth"]
category: progression
inputs: ["双摇杆滚动（前推/转向）"]
state_variables: ["球体积", "场景物体清单（各带体积）", "当前可吸附阈值"]
preconditions: ["场景按尺度分层布置（小物区→大物区）", "吸附判定=物体体积 < 球体积"]
transition_rules: ["物体体积 < 球 → 粘附；≥ 球 → 推开", "粘附使半径增长（对数式）→ 阈值解锁更大物", "同一物体可从障碍翻转为食物（尺度翻转）"]
feedback: ["体积阈值跳变的可视化", "球面粘附清单（叙事层）", "新尺度区域的解锁观感"]
parameters: ["物体体积表", "增长曲线（对数底数）", "场景分尺度布置", "时限与目标尺寸"]
failure_modes: ["增长曲线不平滑造成卡关（卡在阈值下）", "吸附判定边缘的边界感挫败", "后期重复（约 10 小时批评口径）"]
related_case_ids: [game-000033]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

进度条=玩家在世界中的相对大小：成长曲线是物理的（体积→阈值），玩家能直观感知成长原因——与抽象数值曲线（经验值）的关键差异（分析口径）。核心玩法获美国专利 7,402,104（Wikipedia）；同一物体从障碍翻转为食物的瞬间是核心情感节拍。
