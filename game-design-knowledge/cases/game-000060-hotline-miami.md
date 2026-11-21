---
id: game-000060
title: "Hotline Miami"
aliases: ["迈阿密热线（中文通行译名）", "HM"]
genres: [action, hybrid]
subgenre_tags: []
platforms: [pc, ps3, ps_vita, ps4, nintendo_switch, xbox_one]
release_year: 2012
creators: ["Dennaton Games（瑞典双人：Jonatan Söderström 程序/叙事 + Dennis Wedin 美术；Devolver 发行；GameMaker、九个月）"]
core_loop: "接电话接单 → 闯入建筑一击双杀（自己也是一击死）→ 即刻重开重排策略 → 连锁击杀计分 → 面具 perk 改变玩法 → 审视暴力叙事"
mechanic_ids: [mechanic-000064]
pattern_ids: []
quality_score: 4.55
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Hotline_Miami"
    title: "Hotline Miami - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2012-10-23 Windows（纠误：非 10-22）与移植谱系", "Dennaton 双人/GameMaker/九个月；源自 2004 年被弃原型 Super Carnage（原题 Cocaine Cowboy）——非 game jam 起源（纠误）", "规则全项（俯视一击双杀/即刻重开/面具 perk/连锁击杀计分/19 章/后期 Biker 限刀）", "MC 85 (PC)；IGN 最佳 PC 音效/Machinima 最具原创", "销量（七周 13 万→2015-05 150 万→系列合计 500 万+）", "2010s 独立浪潮燃料、synthwave 推广、Devolver 立厂之作；Payday 2/Dead Cells 联动客串", "续作 HM2（2015-03-10）"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Hotline Miami（game-000060）

## 核心体验
一击双杀的俯视动作：你与敌人都一击即死，失败即秒重开——**节奏不是活着打，而是反复重排一次完美的死亡清理**。80 年代迈阿密霓虹+电子乐把暴力包装成迷幻，再用叙事把玩家拉回审视。

## 规则与状态转移（含最简伪代码）
- 状态：`(玩家/敌人位置与朝向, 武器（一次性拾取）, 连锁计分计时)`；输入：`{移动, 攻击, 锁定/投掷}`。

```text
一击:   玩家/敌人均一发即死 → 即刻重开（mechanic-000006 谱系的极端化）
连锁:   快速连续击杀 → combo 计分倍增（风格奖励）
面具:   每面具一个 perk（快速处决/视野增强…）→ 同关不同玩法
武器:   地面拾取、有限弹药、可投掷（击晕后补刀）
```

## 输入与输出
- 输入：双摇杆（移动/瞄准）+ 锁定（不精确瞄准——锁定即朝向敌人自动出手）。
- 输出：霓虹像素、一击死亡的快速反馈、synthwave 原声（IGN 最佳 PC 音效）。

## 难度与学习曲线
难度=关卡内**规划**（路线/武器选择/顺序）而非反应：每关是一份要背的"清理谱"。死读快——秒重开使迭代密度极高（分析口径，机制事实来自 Wikipedia）。

## 关联机制与模式
- 机制：mechanic-000064（一击双杀与秒重开规划循环）
- 对照：与 game-000006（死亡即重开）同源但用途不同——HM 的重开是"规划迭代工具"；与 game-000032（GOI 无检查点）对照——同为高挫败，HM 秒重开、GOI 保留滑落（失败光谱两支）。
- 谱系：Devolver 立厂之作（与 game-000022 Downwell 同发行商）；Jacket 客串 Payday 2/Dead Cells（Wikipedia）——独立游戏互文文化。

## 设计权衡
- 优点：一击双杀+秒重开的迭代密度；面具 perk 的低成本玩法扩展；原声与叙事反差的文化影响力（130 万七周→500 万系列）。
- 缺陷：主机控制批评（MC 口径）；暴力叙事的争议与讽刺解读分歧（叙事层，不展开）。
- 反例：与 game-000013（Halo 回充护盾的宽容）对照——HM 用零宽容换高密度规划乐趣；宽容/严苛是节奏选择。
- 适用场景：需要"规划-重排"循环的俯视动作；风格化叙事包装。

## 可复现的最小版本与算法
网格/自由移动+单向命中判定+连锁计分计时器即可复现核心循环；无复杂物理。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2012-10-23 发行；Dennaton 双人/GameMaker/九个月 | Wikipedia |
| Super Carnage（2004）原型起源（非 game jam——纠误） | Wikipedia |
| 规则全项（一击双杀/秒重开/面具/连锁计分） | Wikipedia |
| 销量与评价口径 | Wikipedia |

## 推断与未知
- **未知**：combo 计时的精确窗口；各面具 perk 全表。
- **推断（分析而非事实）**：锁定的"不精确瞄准"是关键简化——把射击从精度问题变成顺序问题（与 pattern-000023 输入语义轴的"锁定语义"延伸）。
- 原型弃置 8 年后被搭档重新发现——独立游戏的"原型考古"路径（分析）。

## 创新延伸（可验证假设素材）
1. 秒重开 vs 检查点：同关卡的迭代密度与挫败对照（失败光谱采样）。
2. 面具 perk 系统×roguelike 随机化（ HM 结构的肉鸽化）。
