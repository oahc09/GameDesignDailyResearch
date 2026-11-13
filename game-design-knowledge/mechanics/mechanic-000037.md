---
id: mechanic-000037
name: "push_only_deadlock（只推不拉与死锁设计）"
aliases: ["仓库番规则", "push-only irreversibility"]
category: state_transition
inputs: ["四向单格移动"]
state_variables: ["网格", "玩家位置", "箱子集合", "目标格集合"]
preconditions: ["箱前方为空才可推", "无拉取手段"]
transition_rules: ["玩家单格移动；前方为箱且箱前为空 → 推箱", "箱前为墙/箱 → 不动", "箱入不可逆位（角落/贴墙互锁）→ 局面不可解，需撤销/重开", "全部箱上目标格 → 胜利"]
feedback: ["推箱即时反馈", "死锁的自明可见性（失败可读性极高）"]
parameters: ["网格尺寸", "箱/目标数量", "关卡拓扑", "（变体）撤销层数"]
failure_modes: ["角角落死锁（新手必修课）", "双箱互锁", "死锁挫败（撤销为后来补丁）", "NP/PSPACE 复杂度使生成器难保证趣味性"]
related_case_ids: [game-000036, game-000006]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

"不可逆承诺"的最小实现：只推不拉同时造出死锁（挫败）与多步规划（深度）。可解性判定 PSPACE-complete（Culberson 1997/Hearn 2006）、求解器谱系 90 关全解（Festival/FESS）——规则五句、数学上极难、机器可解的三重身份使其成为 pattern-000011 的最强样本。与 Baba Is You（mechanic-000007）同为推块语义：Sokoban 规则固定（可 Solver），Baba 规则可变（Solver 成本爆炸）。
