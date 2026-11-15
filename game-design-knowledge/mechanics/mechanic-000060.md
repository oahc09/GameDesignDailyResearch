---
id: mechanic-000060
name: "input_motion_frame_data（指令输入必杀技与帧级判定）"
aliases: ["指令输入", "frame data"]
category: input_pattern
inputs: ["八向摇杆", "六攻击键（轻/中/重拳踢）", "指令输入序列（如 ↓↘→+拳）"]
state_variables: ["双方 HP/位置/硬直帧", "指令缓冲", "回合计数"]
preconditions: ["帧级判定确定（60FPS 口径的逐帧结算）", "技能帧表公开可测（社区帧谱文化）"]
transition_rules: ["指令缓冲判定 → 必杀技帧表启动（startup/active/recovery）", "命中 → hitstun（受击硬直）——硬直内可追加攻击（连击）", "三局两胜回合制"]
feedback: ["帧级反馈（硬直/无敌帧可视）", "必杀演出", "连击计数"]
parameters: ["每招帧表（startup/active/recovery）", "指令缓冲窗", "hitstun 帧数", "伤害/晕值表", "版本修订（CE/Turbo/Super/Super Turbo）"]
failure_modes: ["指令输入门槛（新手劝退）", "帧表不透明时的学习黑箱（社区帧谱自发解决）", "版本修订打破既有肌肉记忆"]
related_case_ids: [game-000056]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-15"
updated_at: "2026-11-15"
---

帧级判定的完全公开化是格斗品类的社区根基：每招的 startup/active/recovery 可被社区逐帧逆向并整理成公开帧谱——与 pattern-000014（确定性社区）直接呼应。连击机制的起源是 bug 转正（Funamizu 语：奖励关 bug 检查发现可追加第二击——先留作隐藏特性后成品类标准，Wikipedia）——pattern-000026 最强证据。
