---
id: mechanic-000075
name: "one_hit_fps_checkpoints（第一人称一击双杀与高频检查点）"
aliases: ["一击双杀 FPS", "sensory boost"]
category: state_transition
inputs: ["移动/dash/攻击", "Sensory Boost（空中减速偏转）"]
state_variables: ["位置/姿态", "dash/boost 冷却", "升级四格拼块盘", "检查点"]
preconditions: ["玩家与敌人一发即死", "检查点高频（秒级重来）"]
transition_rules: ["玩家/敌被击 → 即死 → 回检查点", "dash/wall-run/grapple/slide 组合穿越", "Sensory Boost → 空中减速偏转子弹", "死亡 → 升级盘（四格拼块摆放产生加成）"]
feedback: ["赛博塔攀爬演出", "一击死亡瞬间重开", "拼块升级网格"]
parameters: ["机动集参数", "敌人布置", "检查点密度", "四格盘规则"]
failure_modes: ["路线肌肉记忆的重复挫败", "Edge 5/10 两极评价口径（纯粹性 vs 挫败）", "拼块盘的认知负荷"]
related_case_ids: [game-000071]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

一击双杀谱系的第三实现（俯视 HM/横版 GOI/第一人称 GR）——检查点密度可调节同一机制的挫败（GOI 无检查点卖挫败、GR 高频检查点卖流畅重试，分析口径）。Sensory Boost 是慢时间谱系（mechanic-000073 Witch Time）的第一人称位。四格拼块升级盘是"构筑的空间约束"（摆放即小谜题，分析）。
