---
id: mechanic-000091
name: "mercy_route_tracking（杀/饶计数与跨局存档污染）"
aliases: ["MERCY 系统", "route pollution"]
category: progression
inputs: ["弹幕躲避（心形 soul）", "FIGHT/ACT/MERCY 选项"]
state_variables: ["击杀数/饶恕数", "路线标记（中立/真和平/屠杀）", "存档（跨局污染载体）"]
preconditions: ["每个敌人可被饶恕（ACT 满足条件）", "存档字段跨 run 持久化"]
transition_rules: ["击杀 → EXP（execution points）与 LOVE（level of violence）累积", "杀戮全满 → 屠杀线（永久改变后续和平线对话与结局）", "零杀 → 真和平线", "重复 Boss 战对话随前局变化"]
feedback: ["对话逐句随杀戮史变化", "角色直接提及玩家的杀戮史", "三路线结局"]
parameters: ["路线判定阈值", "屠杀线触发条件（全杀可战怪物）", "跨局污染字段", "对话变体量"]
failure_modes: ["主播直播屠杀线的文化副作用（Wikipedia 载骚扰事件）", "多路线内容生产成本（单人完成极限）", "污染的存档不可逆争议"]
related_case_ids: [game-000087]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

把 RPG 的"杀怪必然"变成可选：EXP 重定义为 execution points、LOVE 重定义为 level of violence——数值系统被语义反转成暴力记录。屠杀线的跨局存档污染使"存档"从便利设施升格为道德档案（分析口径）。MERCY 选项与 game-000034（PSP 无豁免的规则刚性）构成道德机制两极。
