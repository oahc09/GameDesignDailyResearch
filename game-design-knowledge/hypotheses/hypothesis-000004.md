---
id: hypothesis-000004
name: "forgiveness_window_in_one_touch（宽恕窗口移植一触玩法）"
aliases: []
ingredients: [mechanic-000009, mechanic-000004]
related_case_ids: [game-000008, game-000004]
novelty_claim: "把 Celeste 式隐形宽恕（mechanic-000009）移植到时机类超休闲：Stack 完美判定 ε 在平台中心经过后的 k 帧内临时放宽，或 Flappy 缺口入口提供 k 帧贴边宽容。检验隐形辅助在极简玩法中能否提升新手留存而不被高手察觉。未经对比研究不得声称行业首创。"
test_plan: "原型内 A/B：A 无宽恕基线；B k=6 帧宽恕窗口（新手前 20 局内生效，之后淡出）。追踪：中位单局时长、前 20 局流失率、.perfect 判定率分布、高手（自报）盲测感知问卷（『手感是否有异』）。成功指标：B 新手流失率显著下降且盲测感知率 ≤ 猜测水平（25%）；失败判定：高手感知显著（手感缩水感）或新手流失无改善。"
risk: "隐形辅助与『误差可视化』（mechanic-000004 的切块反馈）矛盾：切掉量与手感不一致会被察觉；动态 ε 使高手练习的肌肉记忆失效；淡出机制本身制造不公平感。"
status: proposed
created_at: "2026-10-30"
updated_at: "2026-10-30"
---
