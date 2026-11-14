---
id: pattern-000024
name: "perfect_information_tactics（完美信息战术）"
aliases: ["完全信息战术", "telegraphed tactics"]
related_case_ids: [game-000049, game-000020]
related_mechanic_ids: [mechanic-000050, mechanic-000021]
confidence: source_reviewed
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

## problem
回合制战术的挫败最大来源是隐藏掷骰（miss/flank crit）——"我明明做对了却输了"（XCOM 概率问题的原型，game-000018）。

## context
敌方意图可以建模为有限选项并提前展示；玩家的乐趣在空间决策而非概率赌博。

## solution
把敌方下一行动**完全预先展示**（Intent/预告），把随机性限制在供给侧（发牌/地图），战斗结算完全确定。配套两件：位置操作成为主武器（推位/拦截——从"躲"变成"改写攻击线"）；资源惩罚承接确定性失误（电网 HP/护盾流失）。

## tradeoffs
- 完全信息可被求解——重玩依赖随机供给侧的多样性（地图/敌组/发牌）。
- 概率赌博的戏剧性丧失（XCOM 的"95% miss 传说"在本范式下不可能发生——见 pattern-000018 的 XCOM 侧）。
- 预告信息的 UI 成本（可读性决定成败）。

## known_uses
- game-000049 Into the Breach（敌方攻击预告一轮 + 推位核心——TGA 最佳策略）
- game-000020 Slay the Spire（Intent 系统：发牌随机、战斗确定）

## counterexamples
- game-000018 XCOM：刻意保留掷骰并把隐藏概率作为情绪设计——两范式是信息光谱的两端，选择取决于"失败应归因于决策还是运气"的设计立场。
