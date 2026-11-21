---
id: mechanic-000074
name: "aggression_resource_pump（资源泵强制激进——Glory Kill/链锯）"
aliases: ["资源泵", "glory kill economy"]
category: economy
inputs: ["处决（Glory Kill）", "链锯处决", "武器切换"]
state_variables: ["HP", "弹药", "武器/mod", "敌群状态"]
preconditions: ["敌人主动逼近（静止不可行）", "处决资源回报绑定行为"]
transition_rules: ["Glory Kill（削弱敌处决）→ 回血", "链锯处决 → 回弹药", "无装填设计 → 快切武器 meta", "静止/保守 → 资源枯竭 → 被动挨打"]
feedback: ["处决演出", "资源喷涌反馈", "配乐层（Mick Gordon）"]
parameters: ["Glory Kill 回血量", "链锯燃料与回报", "触发条件（削弱阈值）", "处决动画时长（无敌窗）", "敌群压力曲线"]
failure_modes: ["处决动画打断节奏的争议", "资源泵数值失衡（回血过强=无敌）", "被打断的处决挫败"]
related_case_ids: [game-000070]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

资源泵把设计者想要的玩家行为（激进推进）写成生存数学：远距离消极射击=慢性死亡，贴脸处决=回血回弹。Glory Kill 的处决动画是风险倒置设计——最安全的行为变成最冒险的瞬间（无敌但暴露，分析口径）。对照 game-000012（1993 涌现贴脸）：2016 用设计系统刻意复现了 1993 自发涌现的行为——殊途同归（分析）。对照 game-000039（PvZ 太阳泵）：资源泵可以泵任何目标行为。
