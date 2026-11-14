---
id: mechanic-000051
name: "pausable_realtime_systems（可暂停实时与子系统连锁）"
aliases: ["实时暂停", "ship simulation"]
category: state_transition
inputs: ["电力分配", "目标系统选择", "暂停/恢复", "扇区图跳跃"]
state_variables: ["舰船系统与电力", "乘员位置", "炮台充能", "船体/氧气/火灾", "追击舰队距离"]
preconditions: ["实时推进+暂停下单（下单不回溯时间）", "追击舰队提供地图时间压力"]
transition_rules: ["系统电力分配（护盾/武器/引擎/氧气/医疗）", "武器命中 → 系统损伤/破口漏气/火灾 → 乘员调配", "每跳追击舰队推进；舰队信标=精英战", "0 船体或全员死亡 → 删档"]
feedback: ["火灾/漏气演出", "乘员舱内移动", "追击阴影逼近地图"]
parameters: ["电力总量", "系统损伤/连锁表", "舰队推进节律", "扇区/信标生成分布", "删档规则"]
failure_modes: ["事件方差的死亡螺旋批评", "新手引导薄弱（分析口径）", "暂停下单的节奏两极（手速玩家 vs 思考玩家）"]
related_case_ids: [game-000050]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

可暂停实时是"实时压力"与"回合思考"的兼容解：暂停时下单（不回溯时间），恢复后看着它执行/失控。子系统连锁（火→氧气→乘员→失能）使每次命中都有涌现后果；追击舰队把 roguelike 地图从自由探索改为有限预算（与 game-000021 时钟封顶同构但作用在地图层，分析口径）。'roguelite' 称谓推广三作之一（Wikipedia）。
