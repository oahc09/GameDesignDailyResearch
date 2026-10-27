---
id: mechanic-000004
name: "align_or_slice（对齐保全，偏差切割）"
aliases: ["时机切割", "perfect stack slicing"]
category: state_transition
inputs: ["单次点击：在滑块移动中冻结其位置"]
state_variables: ["滑块位置与速度", "当前平台矩形（宽×深）", "combo 连击数", "塔高 height"]
preconditions: ["滑块沿固定轴往返，放走不判负（会反向重来）"]
transition_rules: ["点击 → 冻结滑块", "与平台重叠部分保留，悬空部分切割消失", "重叠为空 → 终局", "|偏差| ≤ ε → 完美：combo += 1，平台宽度回增（社区口径），否则 combo = 0"]
feedback: ["切割块坠落动画（误差可视化）", "钢琴音、音高随连击上升", "色带渐变随塔高变化"]
parameters: ["滑块速度（随塔高上升，推断口径）", "完美判定阈值 ε", "连击回增步长（社区口径）", "平台初始宽深"]
failure_modes: ["抢拍/迟拍", "平台过窄后容错消失（不可逆收紧）", "速度上升导致手感突变", "完美判定过严使回增路径失效"]
related_case_ids: [game-000004]
related_mechanic_ids: [mechanic-000006]
confidence: source_reviewed
created_at: "2026-10-27"
updated_at: "2026-10-27"
---

把操作误差**实体化**：切走的块就是上次输入误差的可视化，音高就是连击的可听化。平台宽度同时充当进度、难度与容错三重变量——难度曲线由玩法规则自身生成，无需外置关卡。回增规则（连击拓宽）给熟练者一条主动对抗收紧的路径，是"精度奖励"设计的关键件。
