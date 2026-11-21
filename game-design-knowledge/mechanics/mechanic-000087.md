---
id: mechanic-000087
name: "interruptible_dialogue_plan_rewind（可打断对话树与死亡快进回放）"
aliases: ["可打断对话", "interrupt dialogue"]
category: feedback
inputs: ["横版动作（攻击/闪避/子弹时间）", "对话选择/打断"]
state_variables: ["横版平台状态", "子弹时间计量", "对话树节点"]
preconditions: ["玩家与敌人一发即死", "对话树支持被打断的分支"]
transition_rules: ["一击双杀 → 死亡即'快进回放'重来（不重复看过场）", "有限子弹时间计量（躲避弹幕窗口）", "关间实时对话树——玩家可打断 NPC（抢话改变走向）"]
feedback: ["死亡快进演出", "16-bit 视觉与 synthwave 配乐", "可打断对话的叙事节奏"]
parameters: ["子弹时间计量恢复", "检查点密度", "对话树覆盖度", "剧本重写次数（约 30）"]
failure_modes: ["戛然而止的结局批评（Wikipedia 口径）", "可打断对话的分支生产成本", "一击死的试错密度（与 HM 同）"]
related_case_ids: [game-000083]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

可打断对话树是叙事系统的创新（Wikipedia 口径受赞）：对话不再锁定输入——抢话即分支，与动作游戏"中断即控制"的语言同构。死亡快进回放把重试压缩为加速跳过（与 game-000059 死亡扩展叙事相反方向——重试不痛苦的两条路，分析口径）。时间操控的资源化（计量子弹时间）与 game-000011 运动耦合相反实现。六年/$60k/剧本重写 30 次（Wikipedia）为打磨密度档案。
