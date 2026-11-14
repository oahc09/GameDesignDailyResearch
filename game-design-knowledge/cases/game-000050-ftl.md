---
id: game-000050
title: "FTL: Faster Than Light"
aliases: ["超越光速（中文通行译名）", "FTL"]
genres: [strategy, hybrid]
subgenre_tags: []
platforms: [pc, ipad]
release_year: 2012
creators: ["Subset Games（Justin (Jay) Ma 与 Matthew Davis——前 2K Games 上海员工）"]
core_loop: "跳跃推进 → 追击舰队步步逼近 → 舰船模拟（实时可暂停：电力分配/乘员分派/子系统瞄准）→ 火/破口/系统损伤连锁 → 死亡即删档 → 分支扇区图重来"
mechanic_ids: [mechanic-000051]
pattern_ids: []
quality_score: 4.53
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/FTL:_Faster_Than_Light"
    title: "FTL: Faster Than Light - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2012-09-14 PC/Mac/Linux；iPad 2014-04-03", "Subset 两人（前 2K Shanghai）", "玩法全项（八个程序生成扇区的信标跳跃、可暂停实时：电力分配/乘员分派/子系统瞄准、系统损伤/破口漏气/火灾连锁、0 船体或全员死亡即毁、追击舰队每跳推进——进入舰队信标触发精英遭遇、分支扇区图、permadeath 删档）", "Kickstarter 目标 $10k 筹得 $200k+（超募用于专业美术/Ben Prunty 音乐/Tom Jubert 与 Avellone 文案）", "品类定位（与 Spelunky/The Binding of Isaac 一同推广 'roguelite' 称谓）", "Advanced Edition 免费更新 2014-04-03（Lanius 种族/克隆舱/黑客/精神控制/Hard 模式）", "MC 84 (PC)/88 (iPad)；IGF Excellence in Design + 观众奖；GDCA Best Debut；'absurdly, cruelly difficult' 评价口径"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# FTL: Faster Than Light（game-000050）

## 核心体验
可暂停实时+舰船系统模拟：火会蔓延、破口会漏气、乘员会死——你永远在"暂停下单"与"看着它失控"之间。追击舰队每跳推进，把 roguelike 的地图从"可自由探索"变成"被追赶的逃亡"。

## 规则与状态转移（含最简伪代码）
- 状态：`(舰船系统与电力, 乘员位置, 炮台充能, 船体/氧气/火灾, 扇区图, 追击舰队距离)`；输入：`{电力分配, 目标系统, 暂停/恢复, 图上跳跃}`。

```text
实时+暂停:  世界在实时推进；暂停时下指令（下单不回溯时间）
子系统:     护盾/武器/引擎/氧气/医疗舱各耗电力——分配即战术
连锁:       武器命中 → 系统损伤/破口漏气/火灾 → 乘员调配灭火修理
追击:       每跳舰队推进一格；舰队信标=精英战（时间压力不可解除）
失败:       0 船体或全员死亡 → 删档（permadeath）
```

## 输入与输出
- 输入：点选+分配（暂停时无限思考）。
- 输出：火光/漏气演出、乘员小人在舱室内移动、追击舰队逼近的地图阴影。

## 难度与学习曲线
难度来自**连锁失控**（火→氧气→乘员→失能）与追击舰队的强制节律；"absurdly, cruelly difficult"（Wikipedia 转述评价）与 IGF 设计奖并存——残酷被承认为设计。

## 关联机制与模式
- 机制：mechanic-000051（可暂停实时+子系统连锁）
- 模式：分支扇区图（Wikipedia：FTL）→ game-000020（STS 明言受其启发）——地图谱系边；'roguelite' 称谓推广三作之一（Wikipedia，与 game-000024 Spelunky/Binding of Isaac 并列）。
- 与 game-000036（Sokoban）对照：FTL 的地图是随机生成的（不可手工验证全解），Sokoban 是手工设计（可全解）——生成端与设计端在策略域的分工。

## 设计权衡
- 优点：可暂停实时让"实时压力"与"回合制思考"兼容（下单不回溯时间的张力）；子系统连锁使每次命中都有涌现后果；Kickstarter $10k→$200k 的众筹发行案例。
- 缺陷：残酷难度与随机事件方差（"抽到烂事件就死"的批评域，分析）；新手引导薄弱（分析口径）。
- 反例：与 game-000021（Vampire Survivors 时钟封顶）对照——同为时间压力，FTL 是追击舰队（空间压力）、VS 是日暮（时钟压力）。
- 适用场景：舰船/基地模拟的肉鸽化；"被追赶"的地图压力设计。

## 可复现的最小版本与算法
系统电力模型+连锁事件表+暂停缓冲+扇区图+追击推进即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2012-09-14 发行；Subset 两人前 2K Shanghai | Wikipedia |
| 玩法全项（可暂停实时/子系统/连锁/追击舰队/删档） | Wikipedia |
| Kickstarter $10k→$200k+ | Wikipedia |
| 'roguelite' 推广三作口径 | Wikipedia |
| Advanced Edition 2014-04-03（纠误：非 2018） | Wikipedia |

## 推断与未知
- **未知**：事件池的完整清单与加权；追击舰队推进的精确节律表。
- **推断（分析而非事实）**：追击舰队的本质是"地图时间预算"——它把 roguelike 的无限探索改成有限预算，与 game-000021 时钟封顶同构但作用在地图层（分析）。
- Advanced Edition 免费更新（Wikipedia）是"众筹超募→免费内容回馈"的案例（分析）。

## 创新延伸（可验证假设素材）
1. 追击节律实验：舰队推进速度作为难度核心旋钮（对照固定节律）。
2. 见 hypothesis-000023 的姊妹方向：可暂停实时与完全信息的组合（ITB+FTL 杂交——暂停下单但无预知）。
