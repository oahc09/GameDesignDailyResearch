---
id: mechanic-000041
name: "exact_once_cook_counter（恰好一次计数谜题）"
aliases: ["烤面计数", "exact-once state"]
category: state_transition
inputs: ["四向移动（推/翻/叉串香肠）"]
state_variables: ["每根香肠的朝向与各面烤制计数", "叉子状态", "玩家位置"]
preconditions: ["每面恰好一次（>1 烧焦、终局有 0 欠烤均败）", "一步撤销可用"]
transition_rules: ["推动 → 香肠滚动/平移（朝向变化）", "接触烤架格 → 接触面计数 +1", "叉串 → 空间自由度扩展（章节解锁）", "烧焦/落水/人落水 → 败"]
feedback: ["烤面焦痕可视化", "一步撤销/重开按钮"]
parameters: ["香节数与布置", "烤架位置", "面计数上限=1", "撤销层数"]
failure_modes: ["六维状态超出心算容量", "欠烤的终局才发现（隐性失败）", "叉串机制引入后的组合爆炸"]
related_case_ids: [game-000040]
related_mechanic_ids: [mechanic-000037]
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

Sokoban 死锁概念的方向性扩展：从"不可逆位置"到"不可逆状态计数"（恰好一次 vs 至多一次）——状态空间与失败可见性同步升级。内置一步撤销（与 Sokoban 原版死锁不可撤销对照）证明该谱系已自我修正宽恕问题。
