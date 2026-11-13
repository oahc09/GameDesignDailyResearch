---
id: mechanic-000033
name: "hammer_no_checkpoint（锤物理与无检查点归零）"
aliases: ["无护栏攀爬", "foddian hammer"]
category: session_structure
inputs: ["鼠标全向连续输入（锤尖目标位）"]
state_variables: ["锤尖位置", "锅-人-锤物理耦合", "当前高度"]
preconditions: ["物理耦合可解（锤-地形约束求解）", "地形设计允许'任何高度都可能掉到任何更低处'"]
transition_rules: ["锤尖=鼠标位置；钩挂→撑/拉/摆", "无检查点、无失败画面——下滑由物理自动结算", "登顶 → 完成者专属聊天室"]
feedback: ["锤-地形交互的物理反馈", "高度（唯一进度）", "鼓励式哲学旁白（非讽刺）"]
parameters: ["锤-锅-人质量与约束", "地形分段难度", "钩挂判定容差", "旁白触发点"]
failure_modes: ["非主播玩家的挫败无出口", "归零瞬间的情绪过载（放弃率高）", "物理穿透/卡死的边界 bug"]
related_case_ids: [game-000032]
related_mechanic_ids: [mechanic-000006, mechanic-000008]
confidence: verified
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

失败光谱的"无护栏"端点：无检查点使失败成本=全部已爬距离（对比：死亡即重开=本局、倒带=可撤销）。配套的情绪设计关键反转：旁白从讽刺改为鼓励——惩罚性设计 ≠ 敌意设计（分析口径，Wikipedia 引设计语）。"'Foddian' 类型"以其命名（Jump King/Only Up! 等后继）。
