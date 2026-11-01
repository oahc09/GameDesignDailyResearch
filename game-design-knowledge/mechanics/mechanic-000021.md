---
id: mechanic-000021
name: "energy_hand_refresh（回合能量×手牌刷新经济）"
aliases: ["能量预算", "3 energy draw 5"]
category: state_transition
inputs: ["打出卡牌（消耗能量）", "结束回合", "药水（一次性）"]
state_variables: ["抽牌堆/弃牌堆/手牌", "能量 3", "HP", "遗物", "地图节点"]
preconditions: ["卡牌是唯一动作载体（无快捷键技能）", "手牌每回合整体刷新（旧牌进弃牌堆）"]
transition_rules: ["回合开始：抽 5 + 能量重置 3（受遗物修正）", "出牌消耗能量执行效果，牌进弃牌堆", "Intent：敌方下回合动作全公开", "HP 归零 -> run 结束（meta 解锁延续）"]
feedback: ["Intent 图标（信息设计核心）", "能量点显示", "构筑面板"]
parameters: ["能量=3", "抽牌=5", "手牌上限 10", "卡池数值", "地图分支结构", "Ascension 20 难度表"]
failure_modes: ["发牌方差（关键牌没来）需遗物/药水冗余对冲", "卡池膨胀的平衡债", "能量过大使无限连招可行"]
related_case_ids: [game-000020]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-01"
updated_at: "2026-11-01"
---

把"每回合能做多少事"变成显式预算：能量限动作、手牌限选择、Intent 限信息不对称——发牌保留随机，战斗近乎完全信息。3 能量的取值把决策压入工作记忆容量（分析口径）。数据驱动平衡（选取率/胜率）是维持 100+ 卡协同空间的工程手段（GameDeveloper 采访口径）。
