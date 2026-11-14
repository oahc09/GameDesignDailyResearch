---
id: mechanic-000056
name: "peg_trajectory_assist_fever（绿靶轨迹辅助与 Fever 庆祝）"
aliases: ["瞄准辅助", "peg fever"]
category: feedback
inputs: ["瞄准（枪口方向）", "发射"]
state_variables: ["靶阵（蓝/橙/紫/绿）", "弹珠数", "得分", "Fever 状态"]
preconditions: ["pachinko 式碰撞反弹（一次反弹后分布不可精确心算）", "绿靶触发各 Master 特技（含轨迹预览）"]
transition_rules: ["发射弹珠反弹清靶", "蓝靶计分；紫靶=本回合奖励球；绿靶=Master 特技（轨迹预览等）", "25 橙靶清完 → Extreme Fever（Ode to Joy + 奖金箱 cascade）", "全清 → Ultra Extreme Fever"]
feedback: ["反弹物理演出", "绿靶轨迹预览（部分未来显式化）", "Fever cascade（随机结果包装为必然庆典）"]
parameters: ["橙靶 25/蓝靶约 100", "弹珠数 10", "Master 特技表", "Fever cascade 结算规则"]
failure_modes: ["运气与技巧边界模糊（成就争议域，分析）", "部分预览仍不可读（概率读识门槛）", "续作创新有限（Nights 仅加 Master）"]
related_case_ids: [game-000055]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

瞄准辅助与概率读识：pachinko 的纯运气被转译为"可读概率"（绿靶轨迹预览把部分未来显式化——只预览下一次反弹而非全程，信息节流保住'读概率'技能，分析口径）；Fever cascade 把随机胜利包装成必然庆典（Ode to Joy 递进）——运气即奖励的情绪设计。渊源 pachinko+bagatelle+Breakout（Wikipedia）。
