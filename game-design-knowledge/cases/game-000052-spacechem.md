---
id: game-000052
title: "SpaceChem"
aliases: ["太空化学（中文社区通称）", "SpaceChem"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [pc, ios, android]
release_year: 2011
creators: ["Zachtronics Industries（设计 Zach Barth；编程 Collin Arnold/Keith Holman；七人、约 $4,000 预算、C#/Mono）"]
core_loop: "编程两条 waldo（红蓝同步执行指令带）→ 在 10×8 反应堆内抓取/旋转/键合原子 → 分子从输入区到输出区 → 多反应器管线链式交付 → 按【指令数/循环数/反应器数】排行"
mechanic_ids: [mechanic-000053]
pattern_ids: []
quality_score: 4.90
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/SpaceChem"
    title: "SpaceChem - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at": "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2011-01-01 官网首发→被 Steam 拒→RPS 好评两天后 Valve 主动联系→2011-03-04 上 Steam", "七人团队/约 $4,000 预算/C#/Mono；前作为 Barth 的 Flash 作品 The Codex of Alchemical Engineering；灵感含西雅图 Gas Works Park", "玩法全项（双 waldo 同步指令带/抓取旋转键合/碰撞即程序停摆/多反应器管线/Defense Boss 关）", "排行（按指令数/循环数/反应器数）与沙盒、ResearchNet 用户关卡", "销量（Humble Frozen Synapse 包至少 23 万份；Barth 辞去微软工作）；被英国学校用于编程教学", "MC 84（Eurogamer 9/10；Gamasutra 2011 最佳独立）"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# SpaceChem（game-000052）

## 核心体验
"解法即程序"：两条 waldo 按各自指令带同步执行，抓取原子、旋转、成键/断键，把输入分子变成输出分子——**你的解法就是一个并发程序**，被按效率（指令数/循环数/反应器数）排名。它是"把编程本身做成玩法"的范式样本。

## 规则与状态转移（含最简伪代码）
- 状态：`(10×8 反应堆网格, 两 waldo（指令带/执行头）, 原子与键)`；输入：`{编辑指令带}`（运行期无输入）。

```text
执行:   两 waldo 每循环同步前进一格执行指令（move/grab/drop/rotate/bond+/bond-）
同步:   waldo 可互相等待（同步指令）——并发编排
约束:   碰撞（原子相撞）→ 程序停摆（=失败，须编辑指令带）
胜利:   输出区交付目标分子（化学正确）
排行:   每关按【指令数/循环数/反应器数】三轴独立排行——解法按效率而非成败排序
```

## 输入与输出
- 输入：指令带编辑（运行期零输入——程序跑起来即自证）。
- 输出：双臂舞动的并发可视化、键合反应、排行对比。

## 难度与学习曲线
学习曲线就是**编程学习曲线**：先写出"能跑"的解（正确性），再优化（效率），三轴排行让"优化方向"本身成为决策（省指令 vs 省循环互相冲突）。被英国学校用作编程教学（Wikipedia）——玩法迁移性的直接证据。

## 关联机制与模式
- 机制：mechanic-000053（双 waldo 编程与三轴排行）
- 谱系：Zachtronics 线（Codex of Alchemical Engineering→SpaceChem→TIS-100/Shenzhen I/O/Opus Magnum/EXAPUNKS——导航模板口径，未逐作核验不展开）；与 game-000043（Bejeweled 无失败态）对照——SpaceChem 的"失败"是程序停摆（可即时编辑重来），没有传统 game over。
- 排行三轴与 pattern-000014（确定性社区）呼应：确定性模拟使"效率比较"可能。

## 设计权衡
- 优点：把"优化"变成内容（同一关玩三次是三套最优解）；$4,000 预算×七人的极限小团队；被拒 Steam 后靠 RPS 好评逆转（发行史案例）；编程教学迁移。
- 缺陷：受众窄（编程思维门槛）；可视化并发调试对新手不友好（分析口径）。
- 反例：与 game-000016（Minesweeper 唯一解）对照——SpaceChem 的关卡有多解且按效率排名；唯一解契约（pattern-000021）与优化排行是谜题公平性的两种模式（存在最优但允许多解）。
- 适用场景：编程/自动化谜题；确定性效率排行。

## 可复现的最小版本与算法
双指令带解释器 + 网格原子状态 + 键合规则即可复现核心循环（确定性模拟，求解器与社区优化器生态成熟——pattern-000011 谱系）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2011-01 官网首发；Steam 拒→RPS 逆转→2011-03 上架 | Wikipedia |
| 七人/$4,000/C#/Mono；Codex 前作 | Wikipedia |
| 玩法全项（双 waldo/键合/碰撞停摆/多反应器/三轴排行） | Wikipedia |
| 23 万+ Humble 份；辞微软；学校编程教学 | Wikipedia |

## 推断与未知
- **未知**：排行三轴的权重展示细节；ResearchNet 的关卡数量。
- **推断（分析而非事实）**：三轴互相冲突（省指令常费循环）是设计精髓——它把"更优"变成多目标权衡而非单一分数；这与 pattern-000021 的唯一解契约构成谜题公平的两种模式：唯一解 vs 最优解排行。
- 被拒 Steam 后靠媒体好评逆转（RPS）——2011 年 Steam 绿灯机制前的发行史注记（分析）。

## 创新延伸（可验证假设素材）
1. 编程迁移实验：SpaceChem 玩家的编程概念掌握（并发/循环）对比——教学迁移效应（英国学校案例的系统化验证）。
2. 三轴权重的合成计分：把三轴合成单一分数——检验多目标排行是否优于单分数。
