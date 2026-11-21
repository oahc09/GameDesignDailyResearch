---
id: mechanic-000068
name: "narrator_disobedience_game（旁白-玩家博弈与无失败态）"
aliases: ["旁白博弈", "narrator game"]
category: input_pattern
inputs: ["第一人称移动/交互（无战斗）"]
state_variables: ["旁白脚本节点", "玩家实际行为", "结局计数"]
preconditions: ["旁白脚本覆盖主要分支（含即兴应对节点）", "无失败态——选择只改叙事"]
transition_rules: ["旁白播报既定行动", "玩家行为 ≠ 脚本 → 旁白分支应对（适应/讽刺/拉回/破第四面墙）", "触发结局 → 重置开头（结局收集）"]
feedback: ["旁白配音（干幽默）", "环境叙事", "结局重置"]
parameters: ["分支脚本量", "违背容忍上限", "结局数（mod 6 → 重制十+）", "重置规则"]
failure_modes: ["结构暴露后重复价值降低", "脚本生产成本（Ultra Deluxe 新脚本超原作全脚本）", "分支盲区的旁白失语"]
related_case_ids: [game-000064]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

"选择"的祛魅装置：旁白-玩家博弈把服从/不服从做成唯一玩法，Kuchera 洞察（Wikipedia）——选择无效果是为了让你意识到控制感的幻觉。mod→重制→Ultra Deluxe 的扩展证明 meta 脚本可随旁白即兴设定扩展。
