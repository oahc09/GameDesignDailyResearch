---
id: pattern-000008
name: "time_as_currency（时间即行动货币）"
aliases: ["时间即资源", "time as resource"]
related_case_ids: [game-000011]
related_mechanic_ids: [mechanic-000012]
confidence: source_reviewed
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

## problem
实时玩法默认所有玩家共享时间流——思考时间与行动时间互相挤压，策略型玩家被手速轴排除。

## context
单机（或回合制可控）；玩家的动作集合可以映射为"时间消耗事件"；失败后果可以极轻（快速重开）。

## solution
把 time_scale 绑定到玩家运动：移动=消费时间，静止=囤积时间。思考免费、行动付费。配套两件：**失败必须极廉价**（一发即死+关卡重开，否则时间货币被死亡惩罚双重计价）；**威胁必须在冻结时完全可读**（子弹轨迹可见，规划才有依据）。

## tradeoffs
- 冻结状态可能被"步进式无敌"利用——需用敌人数量、初始站位与武器易碎度压迫玩家。
- 时间货币让玩家体验高度分层：无限思考新手 vs 秒算高手，节奏感知完全不同。
- 不适用于任何共享时间流的对抗场景（多人 PvP 公平性被破坏）。

## known_uses
- game-000011 SUPERHOT（范式样本；VR 版把"移动=时间"具身为身体位移，成为品类定义级变体）

## counterexamples
- game-000007 Braid：同样操控时间但方向相反（倒带修改过去 vs 门控现在）——时间操控手法正交于"是否作为货币"，两者不可混为一谈（CONTRASTS_WITH 关系已建）。
