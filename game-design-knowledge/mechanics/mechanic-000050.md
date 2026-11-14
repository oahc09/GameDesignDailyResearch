---
id: mechanic-000050
name: "telegraphed_attack_positioning（预知攻击与推位核心）"
aliases: ["预告系统", "push positioning"]
category: state_transition
inputs: ["回合制移动/攻击/推位"]
state_variables: ["8×8 网格", "机甲（武器/HP/驾驶员）", "敌方攻击预告（一轮）", "电网 HP", "弹药"]
preconditions: ["敌方攻击完全预知（目标+伤害标出一轮）", "民用建筑=电网=机甲动力的共享 HP"]
transition_rules: ["敌方预告 → 玩家回合移动/推位/拦截", "武器位移敌人 → 攻击线改写/落水/互撞", "建筑被击 → 电网受损 → 机甲变弱（共享 HP）", "回合数有限（短战斗设计）", "失败 → 驾驶员时空回溯保留经验"]
feedback: ["攻击预告可视化", "推位位移演出", "电网警报"]
parameters: ["预告轮数=1", "推位距离与方向（武器各异）", "电网与建筑 HP", "回合数上限", "小队/驾驶员表"]
failure_modes: ["预知的解谜化对军事幻想玩家的不适应（分析）", "重玩依赖随机地形/敌组多样性", "推位参数过强使敌人无解"]
related_case_ids: [game-000049]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

把"命中率问题"整体删除（对照 mechanic-000019 的 XCOM 概率调校）：攻击全部命中、目标全部预知，深度全部转移到**位置操作**（推位即武器）。电网=机甲动力把"保护平民"机制化为资源管理——责任被机制化（分析口径）。与 game-000020（STS Intent）同谱系的战术版。
