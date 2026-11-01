---
id: mechanic-000020
name: "gem_swap_resource_transmute（消除→战斗资源的转译经济）"
aliases: ["消除转译", "match-3 combat economy"]
category: state_transition
inputs: ["相邻宝石交换（三消输入面）"]
state_variables: ["宝石盘 8×8", "四系法力池", "HP", "施法库", "RPG 进度"]
preconditions: ["消除结果的每种宝石有第二语义（颜色→法力、骷髅→伤害、金币→钱）"]
transition_rules: ["三连消除 -> 按颜色转译为资源", "四连+ -> 额外回合（tempo 奖励）", "法术消耗法力并反写棋盘（移除行/转化色/直接伤害）", "战斗胜利 -> RPG 外环成长 -> 法术库扩展棋盘操作词汇"]
feedback: ["资源转译动画", "法术演出", "RPG 数值成长"]
parameters: ["颜色→资源映射表", "四连额外回合规则", "法术费用表", "AI 消除策略"]
failure_modes: ["喂给对手骷髅（防守型消除成为必修技巧）", "AI 完美消除作弊感", "RPG 数值膨胀压过棋盘技巧"]
related_case_ids: [game-000019]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-01"
updated_at: "2026-11-01"
---

跨类型融合的奠基接口：**每种消除结果都有第二语义**——三消的产出直接是 RPG 的输入（法力/伤害/经验），RPG 的法术又反写三消的棋盘。融合成功的判据不是"有个小游戏"，而是"消除结果有第二语义"。四连额外回合把三消第一次引入 tempo 概念（分析口径）。
