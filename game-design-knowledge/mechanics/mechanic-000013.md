---
id: mechanic-000013
name: "sound_state_machine_ai（声音传播驱动的状态机怪物 AI）"
aliases: ["噪声唤醒", "noise alert AI"]
category: state_transition
inputs: ["玩家枪声/动静（声学事件）", "玩家视线暴露"]
state_variables: ["怪物状态机 ∈ {休眠, 巡查, 追击, 攻击, 疼痛, 死亡}", "sector->soundtarget（声学传播目标）", "reactiontime / threshold", "movedir（8 向）"]
preconditions: ["关卡由扇区+双向线构成（声学可传播）", "怪物带 MF_AMBUSH 等标志可选"]
transition_rules: ["A_Look：休眠怪在 180° 正面扇区发现玩家即激活（MELEERANGE 背后例外；AMBUSH 怪需直接视线）", "P_NoiseAlert：枪声经 P_RecursiveSound 沿双向线递归传播——ML_SOUNDBLOCK 挡一层、关门截断、结果写入 soundtarget 供唤醒", "A_Chase：8 向择向（对角优先+随机换序+扫掠+掉头）；JUSTATTACKED 防连续攻击（nightmare 豁免）", "P_CheckMissileRange：被击中立即反击；无近战怪射程 +128；越近越常开火；各怪有专属射程修正（Vile 14*64 / UNDEAD ≥196 / Cyborg 减半上限 160）", "受伤 -> pain chance 表判定疼痛态；被其他怪所伤 -> 重定向目标（内讧，P_DamageMobj）"]
feedback: ["随机化 seesound（发现玩家的嚎叫=战斗开始的听觉信号）", "不同怪物的攻击前摇与音色"]
parameters: ["声音传播衰减（SOUNDBLOCK 一层）", "reactiontime", "各怪 pain chance / 射程修正表", "skill 等级参数（nightmare 豁免）", "MELEERANGE"]
failure_modes: ["隔门声学衰减仅一层导致'隔墙全醒'", "180° 扇区判定让绕后过于安全", "nightmare 模式靠豁免规则硬调难度", "内讧目标误判（源码中重定向逻辑分散于 p_interaction.c）"]
related_case_ids: [game-000012]
related_mechanic_ids: []
confidence: verified
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

（本卡全部状态转移规则经 Doom GPL 源码 p_enemy.c 逐函数核对，为知识库第二个 code_inspected 机制。）设计精髓在**声音传播是关卡设计工具**：设计师通过扇区几何、SOUNDBLOCK 线与门的摆放控制"枪声叫醒多少怪"——战斗强度由地图声学预先编排，AI 本体只是六态状态机。低成本规则（视线扇区+声音洪泛+随机择向+距离启发）涌现出内讧、连锁唤醒与围压群战。难度=参数（skill 表），内容与难度解耦。
