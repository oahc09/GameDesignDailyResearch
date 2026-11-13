---
id: pattern-000019
name: "scale_as_progression（尺度即进程）"
aliases: ["吸积成长", "size growth"]
related_case_ids: [game-000033]
related_mechanic_ids: [mechanic-000034]
confidence: source_reviewed
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

## problem
经验值/等级等抽象进程缺少直觉——玩家无法"看见"自己为什么变强；进程与游戏世界脱节。

## context
玩法对象有可排序的物理尺度（体积/长度/重量）；世界可按尺度分层布置；成长曲线可设计为平滑解锁。

## solution
把进程条写进物理世界：玩家载体的尺度决定"能交互的物体范围"（Katamari：小于球→可粘）。成长即尺度翻转——同一物体从障碍变食物。配套：场景按尺度分层布置（小物区→大物区）+ 增长曲线平滑到阈值解锁有节拍。

## tradeoffs
- 尺度跨度需要巨大内容量（各尺度层都要有可玩内容）。
- 增长曲线不平滑时卡关（阈值下的干涸期）。
- 抽象加成（装备/技能）与物理尺度混用会削弱直觉性。

## known_uses
- game-000033 Katamari Damacy（范式样本；核心玩法获美国专利 7,402,104）

## counterexamples
- game-000015 2048：同为"数值增长解锁"，但 2048 的增长在网格内部（合并阶链），世界不按尺度分层——尺度作为进程需要"世界分层"这一前提，纯盘面玩法不适用。
