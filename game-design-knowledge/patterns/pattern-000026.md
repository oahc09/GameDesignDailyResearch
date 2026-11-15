---
id: pattern-000026
name: "player_discovered_mechanics（玩家发现的机制转正）"
aliases: ["bug 转正", "emergent canonization"]
related_case_ids: [game-000056]
related_mechanic_ids: [mechanic-000060]
confidence: verified
created_at: "2026-11-15"
updated_at: "2026-11-15"
---

## problem
深度对抗玩法的机制上限受设计者想象力限制；而玩家社区在长时间高强度游玩中会发现设计者未知的行为。

## context
确定性系统（行为可复现）；社区规模足以覆盖状态空间；设计者愿意把涌现行为纳入正式规则。

## solution
识别涌现行为的价值并**转正为正式系统**：SFII 的连击由汽车奖励关 bug 检查发现（Funamizu："punch timing 期间可追加第二击"）→ 留作隐藏特性 → 成为系列与品类的标准系统。转正的关键动作：不修复 + 在续作中显式化（Super Turbo 的 Super Combos）+ 修订平衡。

## tradeoffs
- 涌现行为可能破坏平衡（需版本修订吸收）。
- "bug 转正"的边界：与"修不了的懒"需设计叙事区分（SFII 有 Funamizu 的明确发现记录——Wikipedia 口径）。
- 转正后的知识门槛（帧谱文化对新手不友好）。

## known_uses
- game-000056 Street Fighter II（连击 bug 转正——品类标准的起源，Wikipedia Funamizu 引语）

## counterexamples
- game-000044 Breakout：Atari 无法量产 Wozniak 的 44 芯片原型——工程层的"天才方案"不可转正与玩法层的转正是两个维度；对比显示转正的前提是**行为可复制且服务设计目标**。
