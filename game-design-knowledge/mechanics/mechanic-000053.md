---
id: mechanic-000053
name: "waldo_programming_leaderboards（双 waldo 编程与三轴排行）"
aliases: ["解法即程序", "solution-as-program"]
category: input_pattern
inputs: ["指令带编辑（运行期零输入）"]
state_variables: ["10×8 反应堆网格", "两 waldo（指令带/执行头）", "原子与键", "排行记录"]
preconditions: ["运行确定性（同指令带恒同结果）", "三轴排行（指令数/循环数/反应器数）"]
transition_rules: ["两 waldo 每循环同步执行一格指令（move/grab/drop/rotate/bond±）", "waldo 同步指令可互相等待（并发编排）", "原子碰撞 → 程序停摆", "输出区交付目标分子 → 过关", "多反应器管线链式交付（Boss Defense 关定时投递）"]
feedback: ["双臂并发可视化", "键合反应", "排行对比（三轴独立）"]
parameters: ["网格 10×8", "指令集", "碰撞=停摆", "目标分子表", "排行轴（指令/循环/反应器）"]
failure_modes: ["并发死锁/碰撞的调试挫败", "三轴互斥（省指令常费循环）", "编程思维门槛"]
related_case_ids: [game-000052]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

"解法即程序"的范式样本：解法是一个确定性并发程序，被按效率三轴（指令/循环/反应器）独立排名——三轴互相冲突（省指令常费循环），把"更优"变成多目标权衡而非单一分数（分析口径）。与 pattern-000021（唯一解契约）构成谜题公平的两种模式：唯一解 vs 最优解排行。被英国学校用于编程教学（Wikipedia）——迁移性直接证据。
