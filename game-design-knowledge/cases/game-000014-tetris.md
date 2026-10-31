---
id: game-000014
title: "Tetris"
aliases: ["俄罗斯方块", "テトリス"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [elektronika_60, 多平台（史上移植最多之一）]
release_year: 1984
creators: ["Alexey Pajitnov（苏联计算中心研究者）", "Dmitry Pavlovsky / Vadim Gerasimov（IBM PC 移植）"]
core_loop: "抽取方块 -> 平移旋转落入井 -> 满行消除 -> 速度与井形态压力递增 -> 顶出即终局"
mechanic_ids: [mechanic-000015]
pattern_ids: [pattern-000010, pattern-000011]
quality_score: 4.95
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Tetris"
    title: "Tetris - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-31"
    source_type: encyclopedia
    evidence_level: B
    supports_claims: ["1984/1985 完成年份口径分歧（Tetris Company 庆祝 1984-06-06）", "Elektronika 60 无图形（括号拼方块）与 pentomino→tetromino 缩减", "ELORG/Rogers/Tengen 诉讼的授权史", "Guideline 标准化全项（hold 暂存 1999、SRS+无限旋转 2001、7-bag 随机器、Tetris DS 2006 计分）", "T-Spin/完美清除等竞技技术", "销量 5.2 亿（2022）与 BBC 口径争议", "CTWC 2010 起与技术演进（hypertapping/rolling）、Willis Gibson 2023 击破 NES kill screen"]
created_at: "2026-10-31"
updated_at: "2026-10-31"
---

> 主题偏离说明（SPEC 第 1 节要求记录）：Tetris 列于周一"经典机制"专题名单，本日以**概率与数值设计/算法轴**切入（7-bag 保底抽样、速度曲线、技术上限），偏离原因：7-bag 是"有记忆的公平随机"的范式样本，直接服务周六专题与 pattern-000010。

# Tetris（game-000014）

## 核心体验
七种四格方块从井口下落，玩家平移旋转嵌入井体，满行即消。压力由两个旋钮合成：下落速度递增与井的"地形"劣化。其四十年生命力来自规则的最小性与"再来一把"的零成本循环。

## 规则与状态转移（含最简伪代码）
- 状态：`(井格 10×20, 当前块, 下一块, hold, 速度等级, score)`；输入：`{左右, 旋转, 软降, 硬降, hold}`。

```text
抽块:  7-bag 随机器——每 7 块为一组，七种 tetromino 各出现一次
       （组内顺序随机；Guideline 标准，Wikipedia 确认"每七块保证全件"）
落定:  SRS 旋转系统（含踢墙表）；硬降即时落定
消除:  满行 -> 整行移除；连消/完美清除有加成分（Tetris DS 2006 计分标准）
失败:  新块无法进入井区（堆顶越界）-> 终局
```

## 输入与输出
- 输入：五键语义（移动/旋转/软降/硬降/暂存）。
- 输出：ghost piece 落点预览、hold 暂存、消除特效、速度等级提示。

## 难度与学习曲线
难度=速度曲线×井形态的复合函数；Guideline 把"每块都会来"变成可规划的期望（7-bag 让玩家能数块），把纯运气从方块流中剥离——这正是 CTWC 竞技成立的前提（hypertapping、rolling 等操作技术的演进、2023 年 Willis Gibson 触达 NES 版 kill screen，Wikipedia）。

## 关联机制与模式
- 机制：mechanic-000015（七袋保底抽样）
- 模式：pattern-000010（保底式随机公平）、pattern-000011（求解器/竞技界定的深度谱——Tetris 以 CTWC 技术上限参与论证）
- 心流关联：SUPPORTED_BY theory-000002（动机理论）——速度递增+能力成长同步是其经典论证场景。

## 设计权衡
- 优点：最小规则（7 形 × 网格 × 消行）生成无穷局面；7-bag 让"运气公平"可被制度化；授权战的复杂历史反证其价值（ELORG/Rogers/Tengen 诉讼史，Wikipedia）。
- 缺陷：kill screen（NES 版速度天花板）长期为技术边界而非设计意图；无 GTA 式现代系统，深度依赖玩家自设目标。
- 反例：纯 iid 随机（对照 game-000015 的 2048）不保证块序——长旱灾期无保底；Tetris 证明把抽样本身设计化是可行的。
- 适用场景：任何"随机资源流+规划"的玩法（塔防刷怪、卡牌抽卡、rogue 刷怪表）。

## 可复现的最小版本与算法
网格状态机 + 7 形位表 + 满行检测 + 7-bag 抽样即可复现；Guideline 细节（SRS 踢墙表、T-Spin 判定）开源实现丰富。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1984/1985 完成年份口径分歧；Elektronika 60 括号拼图 | Wikipedia |
| Guideline：hold（1999）/SRS+无限旋转（2001）/**7-bag**/计分（2006） | Wikipedia |
| ELORG 授权战与 The Tetris Company 成立（1996） | Wikipedia |
| 销量 5.2 亿（2022，含口径争议）；GB 版 3500 万 | Wikipedia |
| CTWC 技术演进与 2023 kill screen 击破 | Wikipedia |

## 推断与未知
- **未知**：NES 初代随机器的具体算法（与 7-bag 不同，社区有分析但本日未核验来源，不臆断）；Guideline 各参数的完整表。
- **推断（分析而非事实）**：7-bag 的本质是**把随机方差制度化地压缩**——8 块窗口内必然齐备，使规划期恰好覆盖一个"完整资源集"；这解释了为何它成为 Guideline 标准而非仅视觉习惯。
- Tetris Company 庆祝的 1984-06-06 与多数来源的 1985 完成年并存，卡内如实双记。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000007：把 7-bag 保底抽样移植到 rogue 掉落/遭遇流。
2. 可变袋长（3-bag/14-bag）作为难度旋钮：袋越短规划越容易——袋长本身可成为数值设计参数。
