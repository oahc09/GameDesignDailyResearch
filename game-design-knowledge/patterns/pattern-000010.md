---
id: pattern-000010
name: "guaranteed_random_fairness（保底式随机公平）"
aliases: ["记忆型随机", "faire randomness"]
related_case_ids: [game-000014, game-000018]
related_mechanic_ids: [mechanic-000015, mechanic-000019, mechanic-000017]
confidence: source_reviewed
created_at: "2026-10-31"
updated_at: "2026-10-31"
---

## problem
纯 iid 随机产生长旱灾期与长厄运期；玩家感知的"不公平"（85% 也该命中）与概率论的正确性直接冲突，成为弃坑与传播 meme 的来源。

## context
随机资源/判定高频出现；玩家长期留存依赖对系统的信任；单机 PvE（无公平性监管）。

## solution
给随机加**记忆**，从三个注入点任选其一：① 供给侧保底——7-bag 保证 N 块内资源齐备（Tetris）；② 时序侧保护——先交互后生成、首击安全区（Minesweeper/Vista）；③ 体验侧补偿——连败悄悄提升内部概率（XCOM，显示层保持诚实）。共同承诺：方差被压缩到"不会连续摧毁体验"的带宽内。

## tradeoffs
- 记忆让高手获得额外信息（可数袋）或让概率论玩家感到"被操纵"（XCOM 的长期伦理争论，转述）。
- 保底稀释稀有感——gacha 经济反其道用"假保底"（软保底）做生意，是该模式的商业化异化（未入库样本，分析口径）。
- 实现复杂度与参数泄露风险（数据挖掘时代隐藏修正易被拆穿）。

## known_uses
- game-000014 Tetris（7-bag，Guideline 制度化）
- game-000018 XCOM（连败补偿，显示层诚实）
- game-000016 Minesweeper（首击安全生成——时序侧变体）

## counterexamples
- game-000015 2048：刻意保持 iid 无记忆——移动频率极高、单块方差小，且无记忆让学习信号干净；证明该模式不是默认项，而是"方差代价 vs 学习纯净度"的取舍。
