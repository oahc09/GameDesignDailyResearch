---
id: mechanic-000010
name: "hold_dive_terrain（按住下潜-释放起飞的持续态输入）"
aliases: ["蓄力下潜", "hold to dive"]
category: input_pattern
inputs: ["按住（持续态，非事件）", "释放"]
state_variables: ["按住状态布尔", "速度矢量", "地形接触/滑翔相位", "日夜进度", "得分倍率"]
preconditions: ["程序化起伏地形提供势能", "无撞杀失败条件"]
transition_rules: ["按住 -> 停止振翅、贴地下潜，重力沿坡面分量加速", "释放 -> 恢复振翅；速度足够时沿坡切线抛出进入滑翔", "滑翔落地时按住则再次下潜（链条衔接）", "会话由昼夜时钟封顶而非死亡"]
feedback: ["坡面加速的速度感", "perfect slide 提示", "倍率跳字与日夜光线"]
parameters: ["坡面摩擦/重力分量", "起飞速度阈值", "地形起伏幅度与生成算法", "昼夜时长", "倍率曲线"]
failure_modes: ["过早释放导致失速坠落损失速度", "过晚释放错过波峰", "地形过陡造成不可维持的速度链", "无死亡结构下挑战感不足"]
related_case_ids: [game-000009]
related_mechanic_ids: [mechanic-000001]
confidence: source_reviewed
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

与离散点击（mechanic-000001）相对的**持续态输入**：输入是"状态"而非"事件"，一次按住可以跨越多个物理阶段。地形把操作转译为势能管理——深度来自释放时机的提前量预判而非反应速度。其失败条件设计同样反向：用昼夜时钟封顶会话，错误只损失速度不终止会话，与死亡即重开（mechanic-000006）构成"会话如何结束"的两个相反答案。
