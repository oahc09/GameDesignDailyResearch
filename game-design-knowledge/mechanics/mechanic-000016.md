---
id: mechanic-000016
name: "iid_tile_spawn（无记忆独立同分布生成）"
aliases: ["iid 随机", "90/10 生成"]
category: randomization
inputs: ["生成请求（每次有效移动后）"]
state_variables: ["网格占用", "score", "won"]
preconditions: ["生成位置从空格均匀选取", "玩家无法从历史推断下一块"]
transition_rules: ["`value = Math.random() < 0.9 ? 2 : 4`（源码逐行）", "开局生成 2 块（startTiles = 2）", "无空格可生成时跳过（由 movesAvailable 判定终局）"]
feedback: ["新块淡入动画", "分数跳字（score += merged.value）"]
parameters: ["p(4) = 0.1", "开局块数 = 2", "网格 4×4"]
failure_modes: ["长旱灾期无保底（连出 2 的方差由玩家消化）", "概率无记忆使'数块'策略不存在", "p(4) 调大会破坏指数成长曲线"]
related_case_ids: [game-000015]
related_mechanic_ids: [mechanic-000015]
confidence: verified
created_at: "2026-10-31"
updated_at: "2026-10-31"
---

（源码核验口径，知识库首个"随机化"类 code_inspected 机制。）无记忆性是设计选择而非偷懒：每局相互独立、学习信号干净、实现 500 行内；代价是方差完全由玩家消化——与 7-bag（mechanic-000015）的正对照构成了"随机是否该被设计"的基本问题。p(4)=0.1 是成长速度旋钮（分析口径，见案例卡推断）。
