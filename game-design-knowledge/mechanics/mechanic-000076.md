---
id: mechanic-000076
name: "indirect_control_skill_assignment（间接控制：只赋能不能操纵）"
aliases: ["间接控制", "skill assignment"]
category: input_pattern
inputs: ["点选旅鼠+点技能图标（分配，非操纵）"]
state_variables: ["旅鼠群（自动行走）", "技能配额（每关每种有限）", "出口/地形", "计时"]
preconditions: ["旅鼠自动行走赴死（无干预即团灭）", "技能配额有限"]
transition_rules: ["分配技能 → 该旅鼠获得能力（8 种：攀爬/漂浮/爆破/阻挡/建造/挖掘/凿矿/铲行）", "Blocker 站住转向后来者（拥堵管理）", "救援达规定百分比 → 过关（限时）", "nuke → 全员变炸弹（放弃并清理）"]
feedback: ["旅鼠自动行走与死亡", "技能施放演出", "救援百分比"]
parameters: ["技能配额表", "关卡地形", "百分比目标", "限时", "四难度组"]
failure_modes: ["配额浪费（技能给错对象）", "Blocker 的不可逆（原版不可取消）", "群体管理的认知过载"]
related_case_ids: [game-000072]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

间接控制的奠基机制（启发魔兽 RTS——Bob Fitch 口径，Wikipedia）：你无法直接救任何一只旅鼠，只能创造"让它们自救的环境"。Blocker 的不可逆是最早的承诺资源设计之一（分析口径）。判定 NP-hard→PSPACE-complete（Cormode/Viglietta）——与 Sokoban 并列数学背书。起源：Dailly 的 8×8 像素小人动画触发 "There's a game in that!"（Wikipedia）。
