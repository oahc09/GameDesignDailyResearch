---
id: game-000017
title: "Balatro"
aliases: ["小丑牌（中文通行译名）"]
genres: [hybrid, strategy, hybrid]
subgenre_tags: []
platforms: [pc, nintendo_switch, ps4, ps5, xbox, ios, android]
release_year: 2024
creators: ["LocalThunk（加拿大萨斯喀彻温省匿名独立开发者）", "Playstack（发行）"]
core_loop: "选牌组成扑克牌型 -> 底注(Chips)×倍率(Mult) 结算 -> 用小丑牌重写计分代数 -> 通过小/大/Boss 盲注推进 ante -> 死亡或通关后重开新局"
mechanic_ids: [mechanic-000018]
pattern_ids: []
quality_score: 4.43
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Balatro"
    title: "Balatro - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-31"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["LocalThunk 匿名单人、Playstack 发行", "2024-02-20 发行；Lua/Löve 框架", "玩法：52 张牌组成牌型、Chips×Mult、150 张小丑牌改写规则与数学、ante/盲注结构、非标准牌型（Five of a Kind）", "销量：首 8 小时 $1M、首月 100 万、2025-01 达 500 万（约半数为移动端后）", "GDCA GOTY、TGA 最佳独立/最佳处女作/最佳移动、BAFTA 处女作", "PEGI 18+→12+ 上诉改判与赌博图像争议", "灵感：大老二线上化→受 Luck Be a Landlord 直播启发转向；刻意不玩其他肉鸽卡牌；本人不打扑克"]
created_at: "2026-10-31"
updated_at: "2026-10-31"
---

# Balatro（game-000017）

## 核心体验
把扑克手牌变成一台**可编程的计分机器**：牌型给基础 Chips×Mult，150 张小丑牌（Joker）各自改写规则与数学（触发条件、倍率加成、甚至改变什么是"牌型"）。玩家的成长不是变强，而是把计分公式改装成指数机器。

## 规则与状态转移（含最简伪代码）
- 状态：`(牌组 52±改造, 手牌 8, 出牌次数/弃牌次数, 金钱, 小丑栏 5, ante/盲注)`；输入：`{选牌打出, 弃牌, 商店购买/出售, 小丑排序}`。

```text
出牌结算:
  base = 牌型查表（同花/葫芦/…含改造出的 Five of a Kind）
  chips = base.chips + 面值贡献
  mult  = base.mult
  依序触发小丑与牌面强化（左右序敏感！）：mult += x / mult *= x / chips += y
  score = chips × mult  -> 与盲注目标比较
经济:   盲注奖励 = 基础利息 + 剩余出牌次数加成 -> 商店（小丑/塔罗/星球/行星期）
终局:   打不过 Boss 盲注 -> 局终；打过 ante 8 -> 通关（ endless 继续）
```

## 输入与输出
- 输入：选牌-打出（回合制，时间无限）。
- 输出：计分的逐项弹跳动画（每个加成依序砸入公式）、金钱/利息提示、盲注目标血条。

## 难度与学习曲线
难度自适配的三层：盲注目标按 ante 指数上升；小丑池 150 张（发牌时按稀有度加权——权重数值未核验，标注）；Boss 盲注直接禁用一种打法（去_symmetry）。深度来自**乘法代数的组合爆炸**：同乘区间的两个 ×3 小丑按加法错开顺序即可差出数倍——计分顺序本身成为构筑对象（分析口径，机制事实来自 Wikipedia）。

## 关联机制与模式
- 机制：mechanic-000018（底注×倍率计分代数）
- 模式：暂无新模式卡（概率透明度问题并入 hypothesis 观察；结算动画的逐项反馈是 pattern-000002 的变体，未单开）
- 渊源：大老二线上化 → 受 Luck Be a Landlord 直播启发转向（Wikipedia）——**从"把线下游戏搬上线"到"看别人直播获得组合灵感"** 的当代独立开发路径样本。

## 设计权衡
- 优点：Chips×Mult 的二维结构让"乘法区"成为所有小丑的公共接口——150 张牌无需教程即可互相理解（单接口设计，分析）；整数与利息经济鼓励"省牌"而非滥用；评分动画把公式执行过程变成多巴胺节拍。
- 缺陷：随机性高方差（关键小丑不出现则局难救），肉鸽批评常见（转述于媒体语境，未单列来源——记为社区反应，不作为事实断言）；PEGI 18+ 误判显示扑克语义的社会风险（后上诉改判 12+，Wikipedia）。
- 反例：与 game-000005（Wordle）对照——Balatro 隐藏概率细节（池权重），Wordle 全透明；两者都在 2020s 验证了"随机性的不透明度是设计变量"。
- 适用场景：任何"基础分数×倍率+规则改写器"的构筑玩法（弹幕/塔防/模拟经营皆可套用该代数壳）。

## 可复现的最小版本与算法
52 牌组 + 牌型查表 + chips×mult 结算 + 小丑触发队列（有序）即可复现核心循环；Lua/Löve 实现（Wikipedia）但源码未开源（可复现性按公式文档计）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 匿名单人 + Playstack；2024-02-20；Lua/Löve | Wikipedia |
| Chips×Mult、150 小丑、ante/盲注、Five of a Kind | Wikipedia |
| 销量链：8h $1M → 1 月 100 万 → 2025-01 500 万 | Wikipedia |
| GDCA GOTY / TGA ×3 / BAFTA 处女作 | Wikipedia |
| PEGI 18+→12+ 上诉改判 | Wikipedia |
| 灵感链（大老二→Luck Be a Landlord 直播）与"刻意不玩同类" | Wikipedia |

## 推断与未知
- **未知**：小丑池的稀有度权重与商店刷新算法（源码未公开，社区反编译口径未采信）；"150 张"为发行时口径，后续更新已扩充。
- **推断（分析而非事实）**：Chips×Mult 二维化是本作最重要的数值设计决定——若只有单一分数轴，小丑间的"配合感"会退化为加法堆叠；乘法区提供了组合语义。
- **推断（分析而非事实）**：逐项结算动画不仅是表现——它把"哪个环节贡献了分数"变成可审计信息，玩家据此优化构筑，属于"反馈即教学"。

## 创新延伸（可验证假设素材）
1. 概率透明 UI：在商店显示小丑触发概率的估算面板（从卡组组成实时计算），检验透明化是否降低挫败并提升构筑深度（接 hypothesis-000008 的熵预算思路）。
2. 对手可见性：让敌人（盲注）也用同一 Chips×Mult 公式"出牌"，把纯目标竞速变成对称博弈。
