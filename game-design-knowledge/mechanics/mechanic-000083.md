---
id: mechanic-000083
name: "turn_forced_attention_reset（转向分段与注意力重置）"
aliases: ["转向跑酷", "turn segmentation"]
category: progression
inputs: ["上滑跳/下滑铲/左右滑转向", "倾斜收币"]
state_variables: ["当前跑道方向", "速度", "金币", "追击者距离"]
preconditions: ["路网含强制 T 字路口（不转向即撞墙）", "追击者三段式宽容（碰撞靠近一档）"]
transition_rules: ["自动奔跑；T 路口必须滑动转向", "倾斜收集金币", "碰撞 → 追击者靠近一档；再撞 → 被抓", "速度随距离递增"]
feedback: ["追击者逼近演出", "金币收集", "里程碑"]
parameters: ["拐角密度", "速度递增曲线", "追击距离档位", "金币分值（1/2/3）"]
failure_modes: ["场景重复感（148Apps 批评口径）", "拐角密度过密的反应过载", "宽容档位过宽降低张力"]
related_case_ids: [game-000079]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

拐角是"注意力节拍器"：直道承载收集/倾斜（低带宽操作）、拐角承载反应（高带宽）——节奏交替构成心流结构（分析口径）。追击者三段式失败（碰撞→靠近→再撞被抓）是宽容中间态的完整实现（与 mechanic-000062 割草机同思路）。夫妻团队 4 个月开发破 10 亿下载（与续作合计，Wikipedia）。
