---
id: mechanic-000029
name: "panel_rule_induction（面板规则归纳语言）"
aliases: ["归纳式规则", "witness panels"]
category: input_pattern
inputs: ["面板画线（唯一动作）", "岛屿探索（发现面板与环境线索）"]
state_variables: ["面板网格", "当前激活规则集", "区域进度"]
preconditions: ["每条新规则有可平凡归纳的样例序列", "规则族互不歧义（同一样例集唯一可归纳）"]
transition_rules: ["画线须起终点连通；经过的符号触发对应规则判定", "规则族：黑白分离/Tetris 形/斜方块/消除点/对称双线/环境投影", "教学序列：平凡样例 → 复合 → 反直觉应用（零文字）", "失败即面板重置（零惩罚即时重试）"]
feedback: ["判定通过的面板反馈", "环境谜题的视觉揭示", "规则演化的无文字呈现"]
parameters: ["规则族清单", "样例序列长度", "面板分布密度", "复合层数上限"]
failure_modes: ["归纳歧义（多规则解释同样例）导致玩家走错路", "无引导劝退（两极评价的结构性风险）", "统一输入使规则族辨识全靠符号可读性"]
related_case_ids: [game-000028]
related_mechanic_ids: []
confidence: source_reviewed
created_at: "2026-11-08"
updated_at: "2026-11-08"
---

把"教学"本身做成玩法：规则永不言说，靠样例序列的**信息设计**驱动归纳（epiphany 时刻即奖励）。与显式规则路线（mechanic-000007 词块）构成教学光谱两极。约 80 小时的长度是归纳步长的函数——每条规则需要足够样例才能被可靠归纳，教学密度是核心可调参数（分析口径）。
