---
id: mechanic-000073
name: "dodge_reward_slowtime（闪避奖励式时间减速——Witch Time）"
aliases: ["Witch Time", "闪避奖励"]
category: state_transition
inputs: ["精确闪避（攻击命中前一瞬）"]
state_variables: ["连段状态", "闪避判定窗", "全局时间缩放", "评分"]
preconditions: ["敌攻击有可读的前摇", "全局时间缩放可控"]
transition_rules: ["闪避命中判定 → Witch Time（敌人与世界减速数秒）→ 反击窗口", "连段组合 → Wicked Weave", "评分按时间/连击/受伤"]
feedback: ["减速演出（世界变慢）", "评分点数", "处决装置演出"]
parameters: ["Witch Time 触发窗（帧）", "减速倍率与时长", "评分三轴权重", "难度档（含单键 Very Easy Automatic）"]
failure_modes: ["触发窗过严挫败", "减速过强使战斗失去张力", "辅助模式与评分体系的兼容争议"]
related_case_ids: [game-000069]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

"防御变现为进攻"的动作域范式：闪避成功不缺席（单纯免伤）而是奖励时间（减速反击窗）。与 game-000049（ITB 事前预告）、game-000053（AB 事前弹道）构成信息/时间补偿谱系的第三支——**慢时间**。单键 Very Easy Automatic（Wikipedia）是动作域早期辅助实践（早 Celeste Assist 9 年）。
