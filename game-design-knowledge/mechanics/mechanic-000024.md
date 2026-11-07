---
id: mechanic-000024
name: "ghost_personality_targeting（四幽灵差异化目标格与模式调度）"
aliases: ["幽灵人格 AI", "scatter/chase"]
category: state_transition
inputs: ["幽灵移动 tick（无玩家输入影响幽灵，仅其位置）"]
state_variables: ["四幽灵 (位置, 模式, 目标格)", "全局模式调度表", "玩家位置与朝向", "frightened 计时"]
preconditions: ["网格迷宫（四向、禁掉头）", "目标格寻路为贪心（路口取欧氏最近方向）"]
transition_rules: ["每关 scatter↔chase 交替四次（时长随关卡），后转永久 chase", "模式切换时幽灵强制掉头", "chase 目标格：Blinky=玩家格；Pinky=玩家前 4 格（原版向上溢出 bug 保留）；Inky=以 Blinky 为轴的向量翻倍点；Clyde=距玩家 >8 格同 Blinky、≤8 格切自家 scatter 角", "frightened：反向+随机转向，被吃分值 200/400/800/1600 递增"]
feedback: ["幽灵颜色=算法身份编码", "模式切换掉头的可见呼吸", "能量丸反杀音效与递增分"]
parameters: ["scatter/chase 时长表（随关卡）", "8 格阈值（Clyde）", "前 4 格（Pinky）", "贪心寻路方向优先序", "frightened 时长（随关卡衰减）"]
failure_modes: ["确定性可被完全逆向（高手背谱）", "Pinky 向上 bug 在玩家朝上时目标偏差", "frightened 随机转向削弱追踪人格的展示窗口"]
related_case_ids: [game-000023]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

用一套"目标格函数 × 禁掉头贪心寻路"生成四种人格：算法差异即人格差异，无需行为树。关键洞察有三：① Clyde 的 8 格破缺保证合围永远留活路（分析口径）；② 模式切换的强制掉头是免费信息广播；③ 确定性使游戏可被完全逆向——这正是其竞技文化（完美分、Dossier）存在的先决条件（pattern-000014）。
