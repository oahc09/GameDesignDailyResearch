---
id: game-000011
title: "SUPERHOT"
aliases: ["燥热（中文通行译名）"]
genres: [shooter, puzzle, hybrid]
subgenre_tags: []
platforms: [pc, xbox_one, ps4, nintendo_switch, vr]
release_year: 2016
creators: ["Superhot Team（波兰，导演 Piotr Iwanicki）"]
core_loop: "观察全场敌人方位 -> 移动=时间流动 / 静止=时间近停 -> 在时间薄冰上规划路线 -> 一发即死 -> 关卡即刻重来"
mechanic_ids: [mechanic-000012]
pattern_ids: [pattern-000008]
quality_score: 4.75
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Superhot"
    title: "Superhot - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-30"
    source_type: encyclopedia
    evidence_level: B
    supports_claims: ["2013 7DFPS 原型起源（Iwanicki，灵感 Time4Cat 与 Bad Motherfucker MV）", "2013-09 浏览器 Demo 与 5 天最快 Greenlight", "Kickstarter 2014-05 一日达标 >$230k", "各平台发行时间线", "核心规则『Time Moves Only When You Move』", "一发即死/武器易碎/夺械/AI 躲弹", "波兰小团队 Unity", "MCD 2020 roguelite 续作", "销量与评价"]
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

# SUPERHOT（game-000011）

## 核心体验
时间只在玩家移动时流动——静止时世界近乎冻结，子弹悬停半空可见轨迹。射击游戏的"反应速度"被整体替换为"路线规划"：每一步移动都要回答"这段时间花得值不值"。

## 规则与状态转移（含最简伪代码）
- 状态：`(世界时间缩放, 玩家运动状态, 手中武器耐久, 生命=1)`；输入：`{移动, 射击, 投掷, 夺械}`。

```text
time_scale = f(player_motion)   # 移动 -> ≈1；静止 -> ≈0（近乎冻结）
被弹: 一发即死 -> 本关立即重开（无血量、无护甲）
武器: 弹药有限、易碎（打空/久用即坏）-> 必须夺械或用环境物
敌人: AI 会躲玩家子弹；投掷物可击落敌方子弹（网络检索细节仅登记于来源，未深测）
胜利: 清空本波敌人 -> 下一关
```

## 输入与输出
- 输入：移动/射击/投掷/夺械（运动本身即"时间输入"）。
- 输出：红 crystalline 敌人、悬停子弹的轨迹线、时间流动的视觉呼吸、被击杀后的即时重开。

## 难度与学习曲线
难度=规划粒度：静止时无限思考，移动的每一帧都是消耗。失败可读性极高（一发即死+子弹轨迹可见），死亡即重开（mechanic-000006 同构）但每关极短——学习循环密度接近超休闲，深度来自空间路线组合。

## 关联机制与模式
- 机制：mechanic-000012（运动耦合时间缩放）
- 模式：pattern-000008（时间即行动货币）
- 对比：与 game-000007（Braid）构成时间操控哲学两极（已建 CONTRASTS_WITH）：Braid 让时间倒回过去修改历史，SUPERHOT 让时间停驻现在等待决策；前者解放重试，后者解放思考。
- 渊源：7DFPS Game Jam 原型（2013）→ 浏览器 Demo 病毒传播 → Kickstarter 一日达标 → 商业版——又一个 jam 管道样本（与 game-000006/000008 呼应）。

## 设计权衡
- 优点：单句规则即完整教学；把"手速轴"整体移除后，FPS 拥抱了策略玩家；VR 版（时间随身体真实移动）成为品类定义级作品（DICE Immersive Reality GOTY）。
- 缺陷：内容量受"每关一波"结构限制（MCD 用 roguelite 化补内容，Wikipedia）；高手可利用时间冻结做到"步进式无敌"，需用敌人数量与位置压迫破解（推断）。
- 反例：传统竞技 FPS 的时间公平性（所有人共享时间流）被本作打破——它是纯单机谜题化改写，不适用于对抗场景。
- 适用场景：任何"思考时间与行动时间共享同一资源"的玩法重构。

## 可复现的最小版本与算法
全局 time_scale = 运动检测的连续函数（速度→缩放）+ 单发死亡 + 关卡重置即可复现核心循环；无开源实现核对（伪代码直接可写）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 7DFPS 2013 原型；浏览器 Demo 2013-09；5 天最快 Greenlight | Wikipedia |
| Kickstarter 2014-05（非 2013），一日达标 >$230k | Wikipedia |
| Win 2016-02-25 / Xbox 2016-05-03 / PS4 2017-07-21 / Switch 2019-08-19 | Wikipedia |
| 核心规则、一发即死、夺械、AI 躲弹 | Wikipedia |
| VR 商业表现（2017 年 PC VR 收入第一 $2.56M；800k+ 份） | Wikipedia |

## 推断与未知
- **未知**：time_scale 的具体曲线（线性/分段/有下限）未从官方渠道核实。
- **推断（分析而非事实）**：一发即死在本作中是必要件而非难度选择——若无死亡惩罚，静止无限观察会把游戏变成纯解谜，"时间货币"的稀缺感消失。
- **推断（分析而非事实）**：武器易碎是防止"冻结时间+精准点射"退化的平衡杠杆。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000006：运动耦合时间移植到平台跳跃，与 Braid 倒带对照。
2. 多人异步版：双方轮流在同一关卡"步进"行动——把单机谜题改为回合制的实时残局。
