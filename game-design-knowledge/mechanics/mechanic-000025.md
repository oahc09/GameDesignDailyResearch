---
id: mechanic-000025
name: "template_level_generation（模板法关卡生成：保证解路径+模板池+细节随机）"
aliases: ["房间模板生成", "Spelunky method"]
category: state_transition
inputs: ["关卡生成请求（进入新层）"]
state_variables: ["房间网格（约 4×4）", "解路径序列", "模板池选取记录", "模板内随机细节"]
preconditions: ["手工模板池覆盖各功能房间", "入口/出口/关键节点位置已知"]
transition_rules: ["先铺解路径：入口→出口间挑选可通行房间序列", "非关键房间从模板池随机抽取填充", "模板内部细节再随机（宝物/敌人/可破坏方块）", "生成顺序不可反（先填后验成本高，分析口径）"]
feedback: ["每层视觉主题递进", "可破坏地形让玩家可'改写'生成结果"]
parameters: ["网格尺寸", "模板池规模与类型分布", "解路径约束（可通行性）", "细节随机概率表"]
failure_modes: ["模板池耗尽（老玩家认出房间）", "解路径与模板边界不匹配的缝合漏洞", "细节随机破坏模板内既有解法"]
related_case_ids: [game-000024]
related_mechanic_ids: [mechanic-000017]
confidence: source_reviewed
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

程序生成设计史的方法论分水岭：在"纯随机（不可解风险）"与"手工关卡（内容有限）"之间开辟第三条路——**约束先行**（先保证可通，再填充变化）。与 mechanic-000017（Minesweeper 生成时序公平）同属"生成端公平"家族但手段不同：前者验证-回退，本机制结构化铺设。模板池规模决定新鲜度上限，是内容债的主要形态。
