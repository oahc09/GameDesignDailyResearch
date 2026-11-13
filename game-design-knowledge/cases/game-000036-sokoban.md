---
id: game-000036
title: "Sokoban（仓库番）"
aliases: ["仓库番", "推箱子（中文社区通称）"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [nec_pc-8001, 多平台移植]
release_year: 1982
creators: ["Hiroyuki Imabayashi（今林宏行，Thinking Rabbit）"]
core_loop: "仓库管理员逐格移动 -> 只能推不能拉 -> 把全部箱子推上目标格 -> 死锁即不可解（需撤销）-> 关卡即谜题谱系"
mechanic_ids: [mechanic-000037]
pattern_ids: [pattern-000011]
quality_score: 4.95
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Sokoban"
    title: "Sokoban - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-13"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1981 年为 NEC PC-8001 创作（文本图形）；1982-12 商业发行（Thinking Rabbit；另有 1983 口径）", "业余版 5 关→商业版 20 关（Sokoban 2 1984 加 50 关+编辑器——'50 原版关'口径不成立，本卡纠误）", "规则全项（单格移动、只推不拉、一次一箱、墙/箱阻挡、死锁不可解需撤销）", "计算复杂性：可解性判定 NP-hard 且 PSPACE-complete（Culberson 1997、Hearn 2006；Dor & Zwick 1999 运动规划口径）", "20×20 迷宫搜索空间约 10^98；XSokoban 解长度 97–674 推", "求解器谱系（Rolling Stone 59/90 → Sokolution 81 → Takaken 86 → Festival/FESS 首次全解 90）", "销量 410 万+（2018）；MSX 版独 40 万+", "影响（Zelda、Adventures of Lolo、Resident Evil 2、Sokobond 与无数克隆）"]
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

# Sokoban（game-000036）

## 核心体验
规则五句话讲完的谜题祖师：**只能推、不能拉**。这四字设计决定了全部深度——推错的箱子永远卡死，每个死锁都是玩家亲手制造且不可撤销的承诺。它的难度下限有数学背书：可解性判定 PSPACE-complete（Culberson 1997）。

## 规则与状态转移（含最简伪代码）
- 状态：`(网格, 玩家位置, 箱子集合, 目标格集合)`；输入：`{四向移动}`。

```text
移动:   玩家单格移动；前方为箱时尝试推箱
推箱:   箱前方为空 -> 箱进一格；为墙/箱 -> 不动
约束:   只推不拉；一次一箱
死锁:   箱入角落/贴墙不可逆位 -> 局面不可解（需撤销/重开）
胜利:   全部箱子位于目标格
```

## 输入与输出
- 输入：四向单格移动（唯一输入集）。
- 输出：箱子推动的即时反馈、死锁的自明可见性（失败可读性极高）。

## 难度与学习曲线
学习=死锁模式的预防性识别（角落死锁/双箱互锁）。求解器谱系（Rolling Stone→Sokolution→Takaken→Festival 全解 90 关）证明：**人类可解 ⊂ 机器可解**的边界被持续外推——20×20 空间 10^98 的搜索规模与"全部可解"的结果并存，说明启发式（死锁剪枝+目标匹配）有效（pattern-000011 的经典样本）。

## 关联机制与模式
- 机制：mechanic-000037（只推不拉与死锁设计）
- 模式：pattern-000011（求解器界定的深度谱——本卡为复杂性理论+求解器谱系双证据的最强样本）
- 谱系：Zelda/Lolo/RE2/Sokobond 均承其机制（Wikipedia）；Baba Is You（game-000006）同为推块语义但规则可变（pattern-000005 的反例已注明）；hypothesis-000018（推/拉不对称量化）从本卡出发。
- 纠误：W44 周报与 backlog 曾载"50 原版关"口径——Wikipedia 确认商业版为 20 关、50 关属 1984 年 Sokoban 2（本卡已纠）。

## 设计权衡
- 优点：规则极简与计算复杂性并存（五句规则 vs PSPACE-complete）；死锁可见性使失败归因完美；关卡即内容（社区关数十万计）。
- 缺陷：死锁挫败对新手不友好（撤销机制为后来补丁）；主题换皮空间有限（Wikipedia 批评口径：续作缺变化）。
- 反例：与 game-000024（Spelunky 模板生成）对照——Sokoban 关卡是手工设计的（生成器无法保证趣味性），证明"生成"与"设计"在谜题域的分工。
- 适用场景：网格推拉谜题的一切变体；作为"规则最小、深度最大"的教学基准。

## 可复现的最小版本与算法
网格+推箱判定+死锁检测即可复现（百行级）；求解器算法谱系公开（FESS 等），可作难度度量工具。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1981 创作/1982-12 商业（Imabayashi/Thinking Rabbit） | Wikipedia |
| 规则全项（只推不拉/死锁/撤销） | Wikipedia |
| NP-hard + PSPACE-complete（Culberson/Hearn/Dor-Zwick） | Wikipedia |
| 求解器谱系（59→81→86→90 全解） | Wikipedia |
| 销量 410 万+；影响谱系 | Wikipedia |

## 推断与未知
- **未知**：Imabayashi 的设计动机一手资料（1981 年创作语境细节）；各求解器算法细节（FESS 论文未读）。
- **推断（分析而非事实）**：只推不拉是"不可逆承诺"的最小实现——它同时造出死锁（挫败）与深度（规划多步）；拉的存在会消灭死锁类谜题（hypothesis-000018 检验此点）。
- "Go/Shogi 级思维量"的媒体比较（Wikipedia 转述）属评价层，非机制事实。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000018：推/拉不对称的解空间量化对比。
2. 死锁教学器：实时高亮"这一步造成不可逆死锁"——检验死锁可视化的学习加速效应。
