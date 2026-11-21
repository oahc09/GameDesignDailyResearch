---
id: mechanic-000072
name: "exponential_cost_ascension（指数成本与飞升重置）"
aliases: ["飞升系统", "idle economy"]
category: economy
inputs: ["点击", "购买建筑", "飞升决策"]
state_variables: ["饼干数", "CPS", "建筑清单", "飞升芯片/声望"]
preconditions: ["造价指数增长（×1.15/次）", "飞升重置换永久加成"]
transition_rules: ["点击 +1；建筑自动产出 CPS", "造价 = 基价 × 1.15^n（指数成本）", "金饼干随机 buff", "飞升 → 重置换 heavenly chips（+1%/级永久）", "decade 级更新（Grandmapocalypse 剧情线）"]
feedback: ["数值滚动演出", "637 成就", "剧情事件"]
parameters: ["建筑产出表", "成本系数 1.15", "金饼干概率与 buff", "飞升公式", "成就集"]
failure_modes: ["'进步幻觉'批评（Destructoid 口径）", "成瘾性批判（Bogost 'obsessive'）", "飞升时机不可读（新手策略缺失）"]
related_case_ids: [game-000068]
related_mechanic_ids: [mechanic-000006]
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

idle 品类的确立样本（IGN 口径）：飞升系统是"重置意义化"的数值版——把"进步幻觉"（Destructoid 批评）再包装一层真实进步（永久声望加成）；批评催生了系统（分析口径）。与 mechanic-000006 对照：同为重置，Hades 换故事、Cookie Clicker 换倍率。Cow Clicker 讽刺转正（Wikipedia Bogost 语）——pattern-000020 的文化层变体。
