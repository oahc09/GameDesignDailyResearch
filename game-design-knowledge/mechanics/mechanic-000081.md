---
id: mechanic-000081
name: "capture_rescue_dual_fighter（俘虏-救援双机循环）"
aliases: ["俘虏救援", "dual fighter"]
category: state_transition
inputs: ["横移/射击"]
state_variables: ["阵型与编排飞行敌人", "被俘状态", "双机状态", "挑战关计数"]
preconditions: ["Boss Galaga 具牵引波", "俯中 Boss 可被射杀释放我机"]
transition_rules: ["Boss 牵引波捕获我机 → 被俘机敌化（若阵内杀 Boss）", "射杀俯中 Boss → 释放我机 → 与本体并成双机", "双机：火力×2/判定×2", "每 3 及其后每 4 关 → 挑战关（不射击纯计分）", "255 关 kill screen"]
feedback: ["牵引波演出", "双机并编奖励视觉", "编排飞行编舞"]
parameters: ["Boss 生命=2", "牵引波判定", "双机火力/判定倍率", "挑战关节奏", "kill screen 关数=255"]
failure_modes: ["双机判定变大的隐性风险", "救援失败的挫败（被俘机永久损失）", "kill screen 的进度毁灭"]
related_case_ids: [game-000077]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

"主动被俘"的风险决策：故意让 Boss 抓走你、再射杀俯中的 Boss 救回——换取双机火力（判定也翻倍的风险内置对称设计，分析口径）。位置测试后高管要求加难（Wikipedia）是街机经济直接干预难度的档案；255 kill screen 与 Pac-Man/Dig Dug 同族（8 位溢出的集体记忆）。
