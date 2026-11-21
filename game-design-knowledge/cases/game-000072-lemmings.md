---
id: game-000072
title: "Lemmings"
aliases: ["旅鼠（中文社区通称）", "Lemmings"]
genres: [puzzle, strategy, hybrid]
subgenre_tags: []
platforms: [amiga, 多平台（史上移植最广之一）]
release_year: 1991
creators: ["DMA Design（设计 David Jones；程序员 Jones/Russell Kay/Mike Dailly；美术 Timmons；发行 Psygnosis）"]
core_loop: "旅鼠自动行走（无视一切，坠崖/陷阱即死）→ 玩家分配 8 技能（攀爬/漂浮/爆破/阻挡/建造/挖掘/凿矿/铲行）→ 救出规定百分比 → 限时 → 四难度组"
mechanic_ids: [mechanic-000076]
pattern_ids: [pattern-000028]
quality_score: 4.88
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Lemmings_(video_game)"
    title: "Lemmings (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1991-02-14 Amiga 发行（Psygnosis/DMA Design）", "设计 David Jones（纠误：非 Gary Timmons——Timmons 为美术）；程序员 Jones/Kay/Dailly", "起源（Dailly 在 Deluxe Paint 里做的 8×8 像素小人动画——'There's a game in that!'，Kay 起名 lemmings；移动机制来自 Blood Money 的武器概念）", "规则全项（8 技能/钢不可破坏/限时/nuke 全员爆破/四难度组 Fun-Tricky-Taxing-Mayhem/20 关双鼠标对战）", "判定复杂性：过关判定 NP-hard（Cormode 2004）、后证 PSPACE-complete（Viglietta）——与 Sokoban 同列", "销量（Amiga 首日 5.5 万；2006 估 1500 万/口径 2000 万+；Jones 在移植 20 平台后停止计数）", "影响（间接控制启发魔兽 RTS——Bob Fitch 口径；The Humans/Pingus 克隆）", "评价（Amstrad Action 97%；NG 1996 史上第 8'仅次于 Tetris'）", "Sony 1993 收购 Psygnosis 获 IP；Royal Mail 邮票 2020/Dundee 铜像 2013"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Lemmings（game-000072）

## 核心体验
间接控制的奠基者：旅鼠们像泰迪熊一样自动行走赴死，你唯一能做的是**分配技能**（挖/建/炸/挡…）改写它们的命运。你不控制任何一只旅鼠——你控制的是"赋予能力"。它被公认为 RTS 间接控制的直接前驱（启发魔兽，Wikipedia 口径）。

## 规则与状态转移（含最简伪代码）
- 状态：`(旅鼠群（各自动走）, 技能配额（每关每种有限）, 出口/地形, 计时)`；输入：`{对选中旅鼠分配技能}`。

```text
自动:  旅鼠行走/坠落/死亡（无干预即团灭）
技能:  8 种（Climber/Floater/Bomber/Blocker/Builder/Basher/Miner/Digger）
       Blocker = 站住转向后来者（拥堵管理）
       Builder = 造斜坡阶梯（向上的路）
目标:  救出规定百分比（限时）；nuke = 全员变炸弹（放弃并清理）
```

## 输入与输出
- 输入：点选旅鼠+点技能图标（群体管理而非个体控制）。
- 输出：旅鼠的自动行走与死亡、技能施放演出、救援百分比。

## 难度与学习曲线
难度=**间接控制的规划**：你的技能配额有限（每关每种次数固定），分配给谁、何时分配是全部策略。判定复杂性 NP-hard→PSPACE-complete（Cormode/Viglietta，Wikipedia）——与 Sokoban 并列数学背书谜题。

## 关联机制与模式
- 机制：mechanic-000076（间接控制：只赋能不能操纵）
- 模式：pattern-000028（间接控制——RTS 的谱系源头）
- 对照：与 game-000015（2048 单输入）对照——同为极简输入，Lemmings 的输入是"分配决策"（面向群体的管理语义）；pattern-000023 输入语义轴的群体管理扩展位。
- 起源：8×8 像素小人动画（Dailly）→ "There's a game in that!"——像素动画触发玩法设计的经典案例（pattern-000027 jam/原型管道变体）。

## 设计权衡
- 优点：间接控制的诞生（RTS 谱系源头——Bob Fitch 称启发魔兽）；群体管理语义的全新输入词汇；数学背书 + 史上移植最广之一（20+ 平台）。
- 缺陷：后期移植陈旧（Wikipedia 批评口径）；旅鼠死亡的道德喜剧的两极解读。
- 反例：与 game-000002（Crossy Road 直接控一只）对照——同为"引导小角色过障碍"，Crossy 直接控一个、Lemmings 间接控一群；直接/间接控制谱系的定义案例（pattern-000028）。
- 适用场景：群体管理玩法；RTS 教学史。

## 可复现的最小版本与算法
行走 AI + 技能施放 + 出口判定即可复现核心循环；求解器可作难度度量（PSPACE 谱系）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1991-02-14 Amiga；Jones 设计（纠误口径） | Wikipedia |
| 起源（8×8 像素动画→"There's a game in that!"） | Wikipedia |
| 8 技能/四难度组/nuke | Wikipedia |
| NP-hard→PSPACE-complete | Wikipedia |
| 销量（1500 万-2000 万）与影响（启发魔兽） | Wikipedia |

## 推断与未知
- **未知**：各关卡技能配额表；PSPACE-complete 证明细节（Viglietta 论文未读）。
- **推断（分析而非事实）**：间接控制的两难是其深度根源——你无法直接救任何一个旅鼠，只能创造"让它们自救的环境"；这与 pattern-000026（玩家发现机制）相反：Lemmings 的深度是设计给定的。
- Blocker 的不可逆（变阻挡后无法取消——原版口径）是最早的"承诺资源"设计之一（分析）。

## 创新延伸（可验证假设素材）
1. 技能配额可视化的学习加速实验。
2. 间接控制×现代肉鸽（技能配额作为 run 内资源）。
