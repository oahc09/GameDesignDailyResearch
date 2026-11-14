---
id: mechanic-000044
name: "swap_cascade_match（交换式三消与级联）"
aliases: ["交换三消", "match-3 swap"]
category: state_transition
inputs: ["相邻交换（无效交换回退）"]
state_variables: ["宝石网格", "score"]
preconditions: ["交换后至少成三连才有效", "消除后上方下落补位"]
transition_rules: ["相邻交换成行/列 ≥3 同色 → 消除", "无效交换 → 回退（试探零成本）", "消除后下落 → 新三连连锁（级联）"]
feedback: ["级联消除演出", "分数跳字"]
parameters: ["网格尺寸", "宝石色数", "最小连数=3"]
failure_modes: ["经典模式无失败态（深度依赖自设目标）", "死局（无可行交换）的罕见出现"]
related_case_ids: [game-000043, game-000037]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

Match-3 品类的奠基机制（PopCap）："无效交换回退"是试探零成本的关键件（与推箱死锁相反）；级联是 pattern-000002 连锁奖励的谱系源头。谱系下游：Miner Speed → Candy Crush（game-000037）；融合下游：Puzzle Quest（game-000019）。历史注记：无计时模式起源自教程、被玩家正反馈推为定义模式（Wikipedia）——教程即玩法。
