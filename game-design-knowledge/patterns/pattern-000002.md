---
id: pattern-000002
name: "visible_chain_reward（可见的连锁与接近奖励）"
aliases: ["连锁奖励", "误差可视化奖励"]
related_case_ids: [game-000003, game-000004]
related_mechanic_ids: [mechanic-000003, mechanic-000004]
confidence: source_reviewed
created_at: "2026-10-27"
updated_at: "2026-10-27"
---

## problem
无关卡、无剧情的无限玩法如何让玩家感知"这一把有进展"，而不只是分数累计。

## context
玩法本身存在连续量（堆叠高度、合并链、容错面积），且单次操作与结果之间有可展示的因果瞬间。

## solution
把"接近程度"做成可感知实体并给予超预期奖励：① 误差可视化（切走的块=上次误差，mechanic-000004）；② 连锁成段呈现（合并爆浆+得分跳字，mechanic-000003）；③ 超预期表现升级反馈（完美连击升调钢琴音并回增容错宽度——奖励本身就是下一段操作的资源）。

## tradeoffs
- 反馈越强，之后失败的落差越刺痛。
- 连锁含物理/随机成分时，奖励可能归因于运气，稀释技巧感（Suika 的连锁既是乐趣也是归因模糊源）。
- 奖励-资源耦合（回增宽度）会拉大新手/高手体验差距。

## known_uses
- game-000003 Suika Game（合并链 + 物理挤压的持续反馈）
- game-000004 Stack（连击升调 + 宽度回增）

## counterexamples
- game-000001 Flappy Bird：过程反馈刻意极简（只有 +1 与扑翼动画），靠分数与奖牌里程碑（10/20/30/40）承载进展感——说明该模式是可选件而非必需件；极简反馈在"归因清晰"玩法中已足够。
