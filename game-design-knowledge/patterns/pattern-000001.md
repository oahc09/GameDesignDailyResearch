---
id: pattern-000001
name: "one_tap_retry_loop（一触短循环 + 死亡即重开）"
aliases: ["一触即玩失败即重开"]
related_case_ids: [game-000001, game-000002, game-000004]
related_mechanic_ids: [mechanic-000001, mechanic-000002, mechanic-000004, mechanic-000006]
confidence: source_reviewed
created_at: "2026-10-27"
updated_at: "2026-10-27"
---

## problem
碎片时间场景下，如何让玩家在数秒内完成一次完整的「尝试-反馈-学习」循环，并主动立刻再来一次。

## context
移动端；单指操作；无教程容忍度；会话时长以秒计；与熟人分数榜/世界榜并置。

## solution
三件套缺一不可：① 单一输入语义（规则一眼看穿）；② 失败即离线重开（终局到重开仅一次输入，mechanic-000006）；③ 分数即唯一进度（high_score 承载全部长期动机）。

## tradeoffs
- 易上手但深度受限于单一技能轴，玩家可被更快迁移到同类竞品。
- 重开循环易产生 tilt 连败与麻木刷局。
- 规则可一眼看穿 = 可被一眼克隆（Flappy Bird 下架后约每天 60 款山寨，Slate 报道）——该模式的护城河在执行与发行，不在规则。

## known_uses
- game-000001 Flappy Bird（连续脉冲变体）
- game-000002 Crossy Road（离散格跳变体 + 反驻留）
- game-000004 Stack（时机切割变体）

## counterexamples
- game-000005 Wordle：刻意每日限量、拒绝重开——用稀缺换回访天数而非会话数，说明该模式不是休闲留存的唯一解，两种引擎不可混用于一局之内（会互相稀释）。
