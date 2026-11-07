---
id: game-000024
title: "Spelunky"
aliases: ["洞穴探险", "Spelunky HD"]
genres: [action, hybrid]
subgenre_tags: []
platforms: [pc, xbox_360, ps3, ps4, nintendo_switch]
release_year: 2008
creators: ["Derek Yu（Mossmouth；HD 版编程 Andy Hull；GameMaker 制作）"]
core_loop: "下洞 -> 探索程序生成关卡（模板法保证可通）-> 收集宝藏/营救人质/搜刮商店 -> 轰炸与绳索应对地形 -> 死亡即从头（permadeath）"
mechanic_ids: [mechanic-000025]
pattern_ids: [pattern-000012, pattern-000014]
quality_score: 4.53
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Spelunky"
    title: "Spelunky - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-07"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2008-12-21 免费版 / 2009-12-25 源码（非商用许可）/ HD 2012-07-04 XBLA 与移植谱系", "Derek Yu/Mossmouth、Andy Hull 编程、GameMaker", "玩法全项（四区域程序生成、宝藏/人质/商店/偷窃敌对、炸弹绳索、Tunnel Man）", "融合定位（roguelike 概念 × 平台跳跃；NetHack 式可破坏地形 + Mario 手感；灵感含 Pac-Man 幽灵行为、Spelunker、La-Mulana、Cave Story）", "MC 87-90 与媒体榜（Eurogamer 10/10、PC Gamer UK 2013 GOTY、Guardian 21 世纪 50 佳第 36）", "销量（Steam 首周 61,408 / 终身 577,185；2016 年破百万）", "Spelunky 2（2020-09）与 2024 Amazon Secret Level 改编"]
  - url: "https://www.gamedeveloper.com/business/road-to-the-igf-derek-yu-s-i-spelunky-i-"
    title: "Road to the IGF: Derek Yu's Spelunky（Game Developer 访谈）"
    publisher_or_author: "Game Developer"
    published_at: "2009"
    accessed_at: "2026-11-07"
    source_type: interview
    evidence_level: "B"
    supports_claims: ["关卡生成作为核心创新点的开发者口径（页面未全文抓取，仅登记标题口径）"]
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

# Spelunky（game-000024）

## 核心体验
"roguelite"这个词的发明现场：把 NetHack 的程序生成、可破坏地形、永久死亡塞进马里奥的手感里。其真正的方法论贡献是**模板法关卡生成**——不是把砖块随机撒，而是把手工设计的房间模板按约束拼装，使"每一洞都新鲜"且"每一洞都可通"。

## 规则与状态转移（含最简伪代码）
- 状态：`(关卡房间网格, 玩家/实体, 掉落物理, 宝藏/人质, 炸弹绳索计数)`；输入：`{移动, 跳, 攻击(鞭), 项}`。

```text
# 模板法生成（Derek Yu 方法，检索核验口径；原始 TIGSource 博文已存档、URL 未直接命中——见"未知"）
生成:
  1) 关卡划分为房间网格（约 4×4）
  2) 先铺"保证解路径"：入口->出口之间挑选可通行房间序列
  3) 非关键房间从手工模板池随机抽取填充
  4) 模板内部细节再随机（宝物位置/敌人配置/可破坏方块）
  => 保证可通 + 消除纯随机的不可解死局
游玩:  NetHack 式交互地形（炸弹可炸穿一切）× 马里奥物理；商店可偷（店主变敌）
终局:  死亡即 permadeath（无存档点）
```

## 输入与输出
- 输入：方向+跳+攻击+道具（平台跳跃全输入集）。
- 输出：每次不同的洞窟、物理连锁（炸药撞尖刺撞石头）、偷窃的即时后果。

## 难度与学习曲线
Yu 刻意让前期箭头陷阱高发以传递"死亡是预期的"（Wikipedia）。学习=洞窟语法（模板池的词汇）+ 物理直觉（连锁反应）+ 风险决策（偷不偷商店）。死亡可读性高：几乎每个死法都能归因到"我碰了什么"。

## 关联机制与模式
- 机制：mechanic-000025（模板法关卡生成：保证解路径+模板池+细节随机）
- 模式：pattern-000012（融合判据样本：随机生成与平台跳跃通过"可破坏地形"共享接口）；pattern-000014（确定性…——本例为"可复现文化"的近亲：每日挑战/种子社区的谱系前身，关系登记于本卡）
- 渊源：明言受 Pac-Man 幽灵行为影响（Wikipedia）——与 game-000023 构成算法谱系传承；反过来影响整个 roguelite 品类命名（"first games to blend roguelike ideas with side-scrolling platforming"，Wikipedia）。

## 设计权衡
- 优点：模板法在"纯随机不可解"与"手工关卡 finite"之间找到第三条路；源码开放（非商用许可）培育社区变体；融合定位开创品类。
- 缺陷：模板池规模决定新鲜度上限（老玩家开始认出房间）；HD 版对免费版社区的重发行摩擦（未深究，登记）。
- 反例：与 game-000016（Minesweeper 生成端可解性回退）同族——Spelunky 用"先铺解路径"结构化解决，Minesweeper 用"验证-回退"解决；两种生成端公平方案。
- 适用场景：任何需要"无限新鲜且保证可玩"的关卡流玩法。

## 可复现的最小版本与算法
房间网格+解路径铺设+模板池+细节随机化四步即可复现生成器；2008 版源码存在（非商用许可，GitHub 未登记具体仓库——未核验 URL 不引用）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2008 免费/2009 源码/2012 HD 时间线；团队与引擎 | Wikipedia |
| 玩法全项与融合定位（含 Pac-Man 幽灵灵感） | Wikipedia |
| 模板法四步（网格/解路径/模板池/细节随机） | 检索核验口径（二手描述一致；原博文存档） |
| 销量与媒体榜 | Wikipedia |

## 推断与未知
- **未知**：Derek Yu 原始 TIGSource 博文与 GDC 2013 演讲的直接 URL（检索命中描述但未命中原文页，不编造地址）；模板池的具体清单。
- **推断（分析而非事实）**："先铺解路径再填模板"的顺序不可反转——先填后验的成本高且失败率高；这是 PGG 设计里"约束先行"的范式时刻。
- **推断（分析而非事实）**：商店可偷（店主变敌）是"道德风险实体化"——把经济违规变成即时物理威胁，比数值惩罚更符合物理玩法语言。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000012：模板保证法移植到任意 rogue 房间生成，量化可解性失败率差异。
2. 房间模板"玩家可投稿"：UGC 模板池+社区评分——检验内容生态能否替代官方模板扩充。
