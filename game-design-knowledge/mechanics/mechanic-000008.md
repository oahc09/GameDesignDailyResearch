---
id: mechanic-000008
name: "time_rewind_snapshot（无限时间倒带快照）"
aliases: ["时间倒带", "rewind undo"]
category: state_transition
inputs: ["按住倒带（持续量输入）"]
state_variables: ["世界状态快照环形缓冲", "当前回放位置", "世界时间修饰器（免疫物/移动时间/影子/时滞/倒流）"]
preconditions: ["世界状态可整体快照与恢复", "快照频率支持流畅倒放"]
transition_rules: ["每帧 push 快照", "按住倒带 -> pop 并恢复，形成时间倒流", "死亡后仍可倒带（无强制失败态）", "免疫对象在恢复时跳过回退；影子世界回放被倒带覆盖的动作序列"]
feedback: ["时间倒流视像", "死亡瞬间不进入失败屏，仅提示可倒带"]
parameters: ["快照频率", "缓冲上限（本作实践为无感知上限）", "各世界时间修饰规则", "倒带速率"]
failure_modes: ["倒带使死亡失去意义，需每世界追加新约束维持挑战", "状态不可完全序列化时快照失效", "倒带期间物理判定歧义", "缓冲内存开销"]
related_case_ids: [game-000007]
related_mechanic_ids: []
confidence: source_reviewed
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

把"撤销"从菜单动作升级为连续时间操作：学习成本与重试成本解耦——玩家保留全部理解，清零全部重复劳动。其结构性代价是死亡贬值，因此 Braid 用六个世界规则变体（免疫物、移动时间、影子、时滞环、倒流）不断给倒带加约束。实现上等价于状态快照缓冲或命令模式逆向重放，与 mechanic-000006（死亡即重开）构成失败处理光谱的两端。
