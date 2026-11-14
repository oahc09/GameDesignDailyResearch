---
id: pattern-000023
name: "input_semantics_axis（输入语义轴——触屏时代的五种输入语义）"
aliases: ["输入语义谱系", "input vocabulary"]
related_case_ids: [game-000001, game-000009, game-000046, game-000047, game-000048]
related_mechanic_ids: [mechanic-000001, mechanic-000010, mechanic-000047, mechanic-000048, mechanic-000049]
confidence: source_reviewed
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

## problem
超休闲与触屏玩法的设计首先是一个输入问题：同样"控制一个角色"，不同输入语义产生完全不同的技能结构、受众与表达上限。

## context
触屏设备（多点采样/加速度计/无实体按键）；单指或双手操作；碎片会话。

## solution
把输入按**语义类型**选择而非按"简单/复杂"选择（知识库内五位的对照谱）：
① 离散事件（点击=速度重置，Flappy）——时机技能；
② 持续态（按住=下潜，Tiny Wings）——节奏预判；
③ 倾斜连续量（Doodle Jump）——体感校准；
④ 轨迹（Fruit Ninja 滑刀）——形状与并行表达；
⑤ 方向滑动+强度（Subway Surfers 四向+速度计分）——空间决策。
选择判据：想表达哪种技能（时机/节奏/体感/轨迹形状/空间），就选哪个语义位。

## tradeoffs
- 各语义位的表达上限与受众宽度互为反比（轨迹最丰富、点击最普适）。
- 体感位（倾斜）受环境噪声影响（移动场景不可靠）。
- 轨迹输入有多指并行维度（触屏独有——鼠标时代不存在的表达）。

## known_uses（知识库内完整谱系）
- game-000001 Flappy Bird（离散点击）
- game-000009 Tiny Wings（持续态按压）
- game-000046 Doodle Jump（倾斜连续量）
- game-000047 Fruit Ninja（滑动轨迹）
- game-000048 Subway Surfers（方向滑动+速度强度）

## counterexamples
- game-000031 QWOP：把五位的"简单"假设全部推翻——按键也可以极繁化（分肢体差分）；说明该轴是"语义选择谱"而非"简单到复杂"的阶梯。
