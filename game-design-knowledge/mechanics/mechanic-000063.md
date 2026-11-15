---
id: mechanic-000063
name: "death_narrative_persistence（死亡叙事持续——NPC 反应与对话链跨局推进）"
aliases: ["死亡叙事化", "narrative on death"]
category: progression
inputs: ["run 结束事件（死亡/逃脱）", "对话选择"]
state_variables: ["对话队列（跨局推进）", "NPC 关系/任务状态", "meta 货币与升级", "Boons（run-only）"]
preconditions: ["NPC 拥有对死亡/逃脱的可反应台词（约 10 小时对话绑定分支事件）", "死亡回 hub 而非直接重开"]
transition_rules: ["死亡 → 回 House of Hades（hub）→ NPC 反应 + 对话推进", "obols 损失但其他货币购买永久升级（meta 不白费）", "Boons 随机构筑 run-only", "关系/罗曼线/任务跨局推进", "Pact of Punishment 胜后 heat 自定难度；God Mode 无障碍选项"]
feedback: ["NPC 对死亡的逐次反应（叙事节律）", "关系推进演出", "meta 进度面板"]
parameters: ["对话总量（约 10 小时）", "NPC 反应触发条件", "meta 经济表", "heat 项与倍率", "God Mode 参数"]
failure_modes: ["对话内容生产成本巨大（不可生成——人工写作层）", "通关后叙事耗尽", "meta 进度稀释 run 内随机构筑"]
related_case_ids: [game-000059]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-15"
updated_at: "2026-11-15"
---

把 roguelike 的"死亡回重开"改写为叙事推进器：NPC 对每次死亡逐次反应、Persephone 线多次通关才完整——死亡被赋予意义而非被消除（与 game-000051 骨头文件的社区承载对照：Hades 官方承载、NetHack 玩家承载）。Kasavin 明言 roguelike 结构解决了 Pyre 的分支叙事重玩问题（Wikipedia）。God Mode 确认存在——pattern-000006 在肉鸽的落地（辅助与随机构筑的兼容性为分析要点）。
