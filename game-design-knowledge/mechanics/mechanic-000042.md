---
id: mechanic-000042
name: "recursive_containment（递归包含关系操作）"
aliases: ["盒中盒", "nested containment"]
category: state_transition
inputs: ["四向推动"]
state_variables: ["嵌套盒树（每盒含一个网格世界）", "玩家盒位置", "目标格"]
preconditions: ["嵌套深度任意（工程上需为任意深度重写）", "推入=缩小装入；推出边缘=放大溢出"]
transition_rules: ["Sokoban 式推盒", "盒推入另一盒 → 缩小装入", "盒推过开放边缘 → 放大溢出", "盒可自含（悖论：推出自外）", "胜利：覆盖全部标记格 + 玩家盒停在自身目标格"]
feedback: ["嵌套缩放动画（进入/溢出的尺度观感）", "层级视图"]
parameters: ["嵌套深度上限", "盒尺寸层级", "关卡数（364+）", "标记格布局"]
failure_modes: ["深层嵌套不可读", "悖论案例的判定歧义", "层级视图的信息过载"]
related_case_ids: [game-000041]
related_mechanic_ids: [mechanic-000037]
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

推块语义的拓扑元层化：操作对象从"物体位置"升维到"包含关系本身"。与 Baba（改规则）、Sokoban（改位置）构成推块谱系的三层（位置/规则/拓扑，分析口径）。递归包含使状态空间成树状嵌套——pattern-000011 求解器谱系的前沿测试案例。
