---
id: mechanic-000009
name: "input_forgiveness_window（输入宽恕窗口）"
aliases: ["土狼时间", "coyote time", "跳跃预输入", "jump buffering", "角落修正"]
category: input_pattern
inputs: ["跳跃（可带 k₂ 帧预输入）", "移动/冲刺（八向）", "攀附"]
state_variables: ["离地时刻计时器（土狼窗口）", "未消费的跳跃预输入", "dash 可用数", "角落接近量"]
preconditions: ["确定性平台物理", "帧率稳定使窗口帧数可调"]
transition_rules: ["离地后 k₁ 帧内跳跃仍生效（土狼时间）", "落地前 k₂ 帧内按下的跳跃在落地瞬间执行（预输入）", "接近角落时位置微调以避免边缘碰撞（角落修正）", "攀墙位置宽容判定"]
feedback: ["无显式反馈——宽恕必须隐形，玩家只感到『跟手』"]
parameters: ["土狼窗口 k₁（帧）", "预输入窗口 k₂（帧）", "角落修正阈值", "攀墙吸附容差", "（Assist 变体：游戏速度/无限冲刺/无敌）"]
failure_modes: ["窗口过宽让高手感到失控/吞输入", "窗口过窄宽恕无效", "与精确平台判定冲突（宽恕改变了有效碰撞体）", "不可见导致玩家不知情而归因错误"]
related_case_ids: [game-000008]
related_mechanic_ids: []
confidence: source_reviewed
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

一组不改变关卡结构的隐形判定放宽：设计目标是"匹配玩家意图而非完美执行"（Celeste 设计哲学，Wikipedia 转述）。其本质是把系统性挫败（"我按了但角色没反应"）从难度中剥离，只保留真实空间挑战——从而让"死了怪自己"的归因结构在硬核精度玩法中依然成立。参数为帧级调参，需逐窗口校准；宽恕必须不可见，显式化会改变玩家对难度的感知契约。
