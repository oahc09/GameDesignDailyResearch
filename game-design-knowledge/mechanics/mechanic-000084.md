---
id: mechanic-000084
name: "atmosphere_cycle_progression（氛围循环推进——昼夜/天气/光照）"
aliases: ["氛围循环", "atmosphere cycles"]
category: progression
inputs: ["点按跳/按住空中翻转"]
state_variables: ["位置/速度", "翻转状态", "combo", "任务三联", "昼夜/天气"]
preconditions: ["程序生成地形（坡面连续）", "光照/天气系统循环切换"]
transition_rules: ["自动滑行；点按跳/空中按住后空翻", "翻转落地成功 → combo 计分", "180 目标池三任务并行", "翼装后期解锁（改变空中玩法）", "昼夜光照+天气循环（无内容更新的氛围保鲜）"]
feedback: ["光照/天气/动画细节（TouchArcade 'tiny details' 口径）", "combo 计分", "任务面板"]
parameters: ["目标池 180", "翻转判定", "combo 规则", "昼夜周期", "天气触发表"]
failure_modes: ["玩法原创性批评（Wikipedia 口径）", "氛围投入的边际成本", "翻转失败的中断感"]
related_case_ids: [game-000080]
related_mechanic_ids: [mechanic-000070]
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

氛围循环是"无内容更新的内容保鲜"：光照/天气变化让同一坡面在不同时段产生新观感（低成本氛围供给，分析口径）。MC 92 + "玩法缺乏原创"批评的组合证明：超休闲评审权重中氛围可占大头（与 game-000067 机制极简路线对照——超休闲的两条路线）。与 mechanic-000070 同为"按住"语义（翻转 vs 上升）。
