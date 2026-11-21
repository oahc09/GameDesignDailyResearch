---
id: mechanic-000066
name: "rads_mutations_loop（辐射尘变异构筑与 loop 难度）"
aliases: ["变异构筑", "loop difficulty"]
category: progression
inputs: ["击杀拾取辐射尘", "升级四选一变异", "切枪"]
state_variables: ["角色", "变异集", "双枪（五弹药类）", "rads", "楼层/loop"]
preconditions: ["击杀产出 rads（经验货币）", "Throne 可重复挑战并 loop"]
transition_rules: ["rads 满 → 四选一变异（10 级 ultra 变异）", "五弹药类限制两枪位（武器组合即构筑）", "打赢 Throne → loop 回起点（难度大增、无限）", "死亡全 reset（特殊武器/皇冠除外）"]
feedback: ["变异面板", "loop 跳变演出", "弹幕密度升级"]
parameters: ["变异表与权重", "五弹药类容量", "loop 难度倍率", "角色 ultra 变异", "walker 生成规则"]
failure_modes: ["难度陡峭", "变异 synergy 不可读（构筑学习的黑箱期）", "4:3 画幅争议（保留至 2025 的美学决定）"]
related_case_ids: [game-000062]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

loop 是对"通关即终"的解法——把肉鸽的胜利转为难度签证（无限循环，Wikipedia 口径）。rads 四选一与 game-000021（VS 升级三选一）同族（构筑随机的升级供给）。起源为 Mojam 48h 慈善 jam（Wasteland Kings）——jam 管道再证；walker 生成系统与 game-000061 手工房间为肉鸽关卡供给两路线。
