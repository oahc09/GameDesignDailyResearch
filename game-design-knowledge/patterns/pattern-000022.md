---
id: pattern-000022
name: "kept_defect_as_feature（保留缺陷为特性）"
aliases: ["缺陷即特性", "kept bug"]
related_case_ids: [game-000044, game-000023]
related_mechanic_ids: [mechanic-000045, mechanic-000024]
confidence: source_reviewed
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

## problem
实现缺陷（bug/硬件限制）通常必须修复——但某些缺陷意外产生了有价值的行为，修复会消灭玩法。

## context
缺陷行为稳定可复现（非闪烁随机 bug）；缺陷与玩法核心兼容甚至增强；团队有能力识别"这是特性"。

## solution
识别缺陷的行为价值并**有意保留、纳入设计叙事**：Pong 的拍不可达顶部（电路缺陷被 Alcorn 保留为难度限制器）；Pac-Man 的 Pinky 向上目标偏移（bug 成为人格的一部分）。

## tradeoffs
- 缺陷保留的边界难判：与"修不了的懒"只有一线之隔（需设计叙事支撑）。
- 现代测试文化会把这类缺陷判死——需要明确的设计评审例外流程。
- 移植/重制时的 faithful 争议（保留缺陷还是修复）。

## known_uses
- game-000044 Pong（顶部死角——Wikipedia：Alcorn 保留为难度限制器）
- game-000023 Pac-Man（Pinky 前 4 格的向上偏移 bug——Dossier 口径，成为人格一部分）

## counterexamples
- game-000045 Breakout：Wozniak 的 44 芯片原型无法量产、Atari 自建 100 芯片版——同一时代"天才缺陷"未被保留的对照（制造可行性压倒设计个性）。
