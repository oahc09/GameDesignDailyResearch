---
id: mechanic-000064
name: "one_hit_both_planning_loop（一击双杀与秒重开规划循环）"
aliases: ["一击双杀", "one-hit both ways"]
category: state_transition
inputs: ["移动/攻击/锁定投掷"]
state_variables: ["玩家/敌人位置与朝向", "武器（一次性拾取）", "连锁计分计时"]
preconditions: ["玩家与敌人均一发即死", "秒级重开（无载入）"]
transition_rules: ["任一方被击 → 即死 → 秒重开", "快速连续击杀 → combo 计分倍增", "面具 perk 改变玩法参数"]
feedback: ["一击死亡的快速反馈", "combo 计分", "关卡清理完成演出"]
parameters: ["敌人布置", "武器弹药", "combo 窗口", "面具 perk 表"]
failure_modes: ["规划失败期的重复挫败", "连杀节奏的运气扰动", "暴力叙事的接受度分化"]
related_case_ids: [game-000060]
related_mechanic_ids: [mechanic-000006]
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

死亡即重开（mechanic-000006）的极端化：把重开延迟压到亚秒级，使"每关"变成可无限快速迭代的规划题——乐趣从生存转为重排（分析口径）。锁定机制省去精确瞄准，把射击从精度问题变成顺序问题。
