---
id: pattern-000006
name: "respectful_difficulty_opt_out（尊重式难度可选）"
aliases: ["辅助模式", "assist mode"]
related_case_ids: [game-000008]
related_mechanic_ids: [mechanic-000009]
confidence: source_reviewed
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

## problem
难度即表达的游戏（硬核平台、弹幕等）用同一难度门槛排斥了大量玩家；降低默认难度会稀释设计表达。

## context
挑战来自可分解的负担（执行精度/反应速度/容错）；开发资源允许维护多难度参数；社区对"廉价化"敏感。

## solution
把难度负担做成可选、可组合的开关（降速/无限资源/无敌等），并**以中性命名呈现**——Celeste 用 "Assist Mode" 并明确否决 "Cheat Mode"（Wikipedia：命名即立场）。默认难度保持完整表达；辅助路径不设羞辱性标记。

## tradeoffs
- 成就/荣誉体系可能被"辅助通关是否算数"的争议分裂（社区争论存在，未见定论，不采信为结论）。
- 开发与测试成本：每个开关都扩大状态空间（Celeste 的 Assist 为后期加入，Wikipedia）。
- 隐藏宽恕（mechanic-000009）与本模式互补：前者无感调参，后者显式开关——两者边界要一致，否则玩家感知割裂。

## known_uses
- game-000008 Celeste（Assist Mode：降速、无限冲刺、无敌等）

## counterexamples
- 隐藏宽恕路线：Celeste 自身的土狼时间/预输入不设开关、全员默认享受——说明宽恕可以完全隐形；显式 Assist 服务的是超出隐形宽恕覆盖度的需求（如动作障碍玩家）。
