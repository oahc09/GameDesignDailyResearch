---
id: pattern-000009
name: "simple_ai_emergent_pressure（简单 AI 规则的涌现压力）"
aliases: ["涌现群战", "emergent combat"]
related_case_ids: [game-000012, game-000013]
related_mechanic_ids: [mechanic-000013, mechanic-000014]
confidence: verified
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

## problem
脚本化遭遇战（导演系统）牺牲涌现换节奏控制，成本高且可预期；低算力或小团队无法负担复杂行为树。

## context
敌人数量多、单兵行为简单；战场结构（几何/声音/兵种）可以承担编排职能。

## solution
用**极少的状态机规则 + 可感知的环境变量**让压力从涌现中产生，设计师只编排环境：Doom 路线——六态状态机+声音传播，压力由地图声学预编排（压力=几何函数）；Halo 路线——兵种角色分工（士气/护盾/弱点）+ 回充节奏，压力由可读的战术棋子组合产生（压力=组合函数）。

## tradeoffs
- 涌现不可完全控制：极端组合可能产出不可解或过于轻松的局面（Doom 的 nightmare 靠参数豁免硬调）。
- 角色公式化会导致后期重复感（Halo 的媒体批评点）。
- 简单规则的破绽是公开的（180° 扇区、隔墙一层衰减）——社区会系统化利用。

## known_uses
- game-000012 Doom（几何/声学编排版；AI 全项经 GPL 源码核验）
- game-000013 Halo CE（角色分工版；系列 AI objectives 方法论有 GDC 官方演讲记录）

## counterexamples
- 脚本化导演系统（如现代僵尸模式 wave director）：精确控制节奏与资源曲线，代价是内容成本与可预期性——两者是"压力来源"的正交选择，不互斥但工程取舍相反。
