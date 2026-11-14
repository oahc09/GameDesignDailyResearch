---
id: mechanic-000040
name: "constraint_propagation_unique_solution（三重约束传播与唯一解生成）"
aliases: ["约束传播", "sudoku constraints"]
category: state_transition
inputs: ["填入数字（或铅笔候选标记）"]
state_variables: ["候选集网格", "已填数字", "解计数（生成期）"]
preconditions: ["三重约束（行/列/宫）", "谜题须良构（恰一解）"]
transition_rules: ["填入 → 候选集沿行/列/宫剪枝", "单候选格链式确定（naked/hidden single）", "生成：完整盘面 → 挖洞 → 唯一解校验（多解回填）"]
feedback: ["候选集（纸笔时代靠铅笔标记）", "完成确认"]
parameters: ["提示数（下限 17）", "挖洞对称性", "难度分级指标（推理链深度）"]
failure_modes: ["多解（良构失败）", "高阶技巧依赖（X-Wing 等）使分级与人类感知脱节", "提示数过少无法唯一"]
related_case_ids: [game-000039]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

唯一解契约的数学基准样本：广义 n²×n² 判定 NP-complete（Yato & Seta 2003）、最少提示数 17（McGuire 2014 穷举）、总盘面 6.67×10²¹——谜题公平性可被穷举/数学证明（pattern-000021）。生成器的难点在分级而非实现（Wayne Gould 六年开发生成+难度评级程序为证）。
