---
id: game-000049
title: "Into the Breach"
aliases: ["陷阵之间（中文社区通称）", "ITB"]
genres: [strategy, hybrid]
subgenre_tags: []
platforms: [pc, nintendo_switch, ios, android]
release_year: 2018
creators: ["Subset Games（两人工作室：Jay Ma 与 Matthew Davis——FTL 之后第二作；编剧 Chris Avellone；音乐 Ben Prunty）"]
core_loop: "8×8 战术棋盘 -> 敌方下回合攻击全部预先标出 -> 移动/推位改写攻击线 -> 三机甲共享电网（民用建筑=电网=HP）-> 弹药有限、时间步数有限 -> 失败送驾驶员时空回溯（保留经验重开）"
mechanic_ids: [mechanic-000050]
pattern_ids: [pattern-000024]
quality_score: 4.80
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Into_the_Breach"
    title: "Into the Breach - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2018-02-27 PC/2018-08 Switch 与移植谱系（iOS/Android 2022 由 Netflix 发行）", "Subset 两人工作室（Jay Ma/Matthew Davis）与 Avellone/Prunty", "规则全项（8×8、三机甲、敌方攻击预先标示一轮、推位改写攻击线、民用建筑维持电网供能、弹有限、失败时间回溯保留经验）", "设计哲学（短战斗有限回合数——对照 XCOM 小时级战斗；附带伤害灵感来自 Man of Steel/Pacific Rim 的电影反应）", "Chess 式评价（'less about overpowering... maintaining position control and sacrificing units'）", "MC 90 (PC)——2018 年最高评分 PC 游戏；TGA 2018 最佳策略/DICE 策略年度/GDC 最佳设计/BAFTA 原创属性", "Advanced Edition 免费更新（2022-07-19，新小队/驾驶员/敌人/Unfair 难度）"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# Into the Breach（game-000049）

## 核心体验
把"打不打得中"从战斗里删掉（敌方攻击全部预先标出一轮），把全部深度押在"**被打了怎么办**"：移动、推位、拦截——机甲的武器不是炮弹而是位置。被 Chess 式评价（Wikipedia 引：'maintaining position control and sacrificing units'）。它是 game-000018（XCOM 隐藏概率）的**信息对称反题**。

## 规则与状态转移（含最简伪代码）
- 状态：`(8×8 网格, 三机甲（武器/HP/驾驶员）, Vek 攻击预告, 电网 HP, 弹药)`；输入：`{移动/攻击/推位}`。

```text
预告:  敌方下回合攻击目标与伤害全部标出（完全信息）
推位:  武器位移敌人 → 攻击线改写/落水/互撞（位置即武器）
电网:  民用建筑=电网=机甲动力（被击建筑 → 机甲变弱——共享 HP 设计）
回合:  回合数有限（短战斗设计——对照 XCOM 长战）
失败:  送驾驶员时空回溯 → 保留经验重开（meta 层唯一延续）
```

## 输入与输出
- 输入：回合制点选（完全信息下无反应速度需求）。
- 输出：攻击预告的可视化（信息设计核心）、推位位移演出、电网警报。

## 难度与学习曲线
难度=预知的压力而非未知的风险：每回合都是一道**完全信息的解谜题**（解存在，找不找得到在你）。Advanced Edition 加 Unfair 难度（Wikipedia）。与 game-000020（STS Intent 系统）同谱系——"发牌随机、战斗确定"的战术版。

## 关联机制与模式
- 机制：mechanic-000050（预知攻击与推位核心）
- 模式：pattern-000024（完美信息战术——ITB 与 STS 收编，XCOM 为反例）
- 对照：与 game-000018（XCOM 概率分层）构成信息设计光谱两端（CONTRASTS 边登记于本卡）。
- 谱系：Subset 两人（FTL→ITB）；Avellone 编剧跨组。

## 设计权衡
- 优点：完全信息把挫败归因 100% 内化（"死了怪自己"的战术版）；推位系统让"位移"从辅助变成主武器；电网共享 HP 把保护平民变成机制而非叙事任务；TGA/DICE/GDC/BAFTA 四奖（Wikipedia）。
- 缺陷：完全信息使重玩依赖随机地形与敌方组合的多样性；解谜化的战术对"军事幻想"玩家可能不适应（分析口径）。
- 反例：与 game-000018 对照（信息隐藏 vs 完全公开）；与 game-000030（Snakebird 状态爆炸）对照——同为网格策略，ITB 用预知压缩状态空间。
- 适用场景：需要"归因内化"的战术玩法；完全信息解谜化设计。

## 可复现的最小版本与算法
网格+预告结构+推位结算+电网 HP 即可复现核心循环；规则可完全形式化——求解器友好（pattern-000011 谱系）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2018-02-27 发行；Subset 两人（Jay Ma/Davis） | Wikipedia |
| 规则全项（预告一轮/推位/电网/时间回溯） | Wikipedia |
| 设计哲学（短战斗/附带伤害电影反应） | Wikipedia |
| MC 90 与四奖；Advanced Edition 2022 | Wikipedia |

## 推断与未知
- **未知**：各小队的数值表；时间回溯的 meta 经济细节；销量（Wikipedia 未载）。
- **推断（分析而非事实）**：电网=机甲动力是本作最锋利的耦合——保护平民从叙事义务变成资源管理（打掉建筑=自己变弱），把"责任"机制化（分析）。
- 联创名（Jay vs Justin Ma）以 Wikipedia infobox 口径为准（Jay Ma）。

## 创新延伸（可验证假设素材）
1. 预知轮数实验（hypothesis-000023）：预知一轮 vs 两轮 vs 无预知。
2. 推位武器化×其他网格玩法：把推位作为主武器移植到塔防/弹幕（接 pattern-000012 融合）。
