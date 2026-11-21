---
id: mechanic-000069
name: "terrain_card_adjacency（地形牌邻接规则塑造世界）"
aliases: ["地形牌", "adjacency rules"]
category: state_transition
inputs: ["出牌放置（路径旁空格）", "撤退决策"]
state_variables: ["闭环路径", "地形牌盘", "英雄属性/装备", "放置计量表", "营地资源"]
preconditions: ["英雄自动走环+自动战斗（零微操）", "邻接规则公开可学习（3×3 山=山峰）"]
transition_rules: ["放置地形 → 触发效果与敌人生成", "邻接规则 → 组合地形（山峰/村庄转化等）", "放置表满 → Boss", "失败扣 70% 资源；远离营火撤退扣 40%"]
feedback: ["地形生成演出", "自动战斗结算", "装备掉落"]
parameters: ["地形牌表与邻接规则", "损耗分级（70%/40%）", "Boss 触发计量", "职业差异（战士/死灵/盗贼）"]
failure_modes: ["后期卡牌多样性批评（Wikipedia 口径）", "自动战斗的数值化观感", "邻接组合的隐藏性（新手不可读）"]
related_case_ids: [game-000065]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

"zero-player game"讨论的产物（Wikipedia 起源口径）：英雄自动化后，玩家策略全部压到地形布局与撤退决策——涌现（邻接组合）被压缩为可学习的规则。损耗分级（败 70%/远撤 40%）使"放弃"成为有价格的决策（分析口径）。LD 2019 "Start with nothing" 原型——jam 管道第八链（pattern-000027）。
