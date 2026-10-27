---
id: mechanic-000006
name: "instant_restart（死亡即重开）"
aliases: ["即时重开", "one-more-try reset"]
category: session_structure
inputs: ["终局事件（系统触发）", "单次输入（重开确认）"]
state_variables: ["全局状态 ∈ {会话中, 结束}", "high_score（唯一跨会话保留量）", "最近一局分数"]
preconditions: ["单局状态量少且可整体重置", "无内购/进度依赖绑定在单局上"]
transition_rules: ["终局 → 单屏内展示分数与重开入口", "输入 → 全部瞬时状态重置，回到初始态", "会话目标时长 < 30s（分析口径）"]
feedback: ["分数与最佳对照", "轻量庆祝/挫败反馈（避免过重）"]
parameters: ["终局到可重开的延迟（趋近 0）", "挫败反馈强度", "插屏广告频率（商业化的破坏变量）"]
failure_modes: ["重开过快助长 tilt 连败与麻木刷局", "失败反馈过强造成情绪退出", "广告打断重开循环（流失主因之一，分析）"]
related_case_ids: [game-000001, game-000002, game-000004]
related_mechanic_ids: []
confidence: source_reviewed
created_at: "2026-10-27"
updated_at: "2026-10-27"
---

超休闲留存的第一引擎：把"再来一局"的成本压到一次输入。它成立的隐含契约是**单局是完整的学习单元**（失败可归因、可立刻用新理解重试）。反例是 game-000005（Wordle）的每日限量——两种留存引擎互斥：重开循环买"会话数"，稀缺循环买"回访天数"。
