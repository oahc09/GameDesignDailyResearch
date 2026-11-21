---
id: game-000083
title: "Katana ZERO"
aliases: ["武士零（中文通行译名）", "KZ"]
genres: [action, puzzle, hybrid]
subgenre_tags: []
platforms: [pc, nintendo_switch, xbox_one, ps4, ios, android]
release_year: 2019
creators: ["Askiisoft（Justin Stander 设计/程序；GameMaker Studio 2；六年开发（2013 起，McGill 大学期间）；预算约 $60,000；Devolver 发行）"]
core_loop: "横版一击双杀 → 有限子弹时间计量 → 死亡即快进回放重来 → 关间实时对话树（可打断 NPC）→ 剧本重写约 30 次的元叙事"
mechanic_ids: [mechanic-000087]
pattern_ids: []
quality_score: 4.48
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Katana_Zero"
    title: "Katana Zero - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2019-04-18 macOS/Switch/Windows（纠误：非 2016-10-17）；Xbox One 2020-10；Netflix 移动 2024-05", "Askiisoft/Stander/GameMaker Studio 2/六年/$60,000/Devolver；freeware 前作 Tower of Heaven", "玩法全项（横版 2D 平台斩击；玩家与敌人一击双杀；有限子弹时间计量；检查点重开；**关间为实时对话树且玩家可打断 NPC**——本卡按源修正玩法口径）", "开发（剧本重写约 30 次；电影影响 Sin City/John Wick/Oldboy/Drive；预算 $60,000）", "销量（首周 10 万+；一年内 50 万份约 $5M 营收）", "MC 83/OpenCritic 87%；16-bit 视觉与 synthwave 配乐（Bill Kiley/LudoWic）受赞；可打断对话系统受赞；剧情分歧与戛然而止的结局受批", "TGA 2019 最佳独立提名/SXSW Gamer's Voice/IGF 设计提名/BAFTA 首作提名；Stander Forbes 2020 30 Under 30；免费 DLC 开发中"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Katana ZERO（game-000083）

## 核心体验
横版一击双杀+子弹时间计量+**可打断的实时对话树**：行动是"试错到完美"（死亡快进回放重来），叙事是"抢话改变对话"——两个系统共享同一个设计语法：**玩家的中断即内容**。

## 规则与状态转移（含最简伪代码）
- 状态：`(横版平台状态, 子弹时间计量, 对话树节点)`；输入：`{移动/攻击/闪避/子弹时间, 对话选择/打断}`。

```text
一击:  玩家/敌人一发即死 → 死亡即"快进回放"重来（重试不重复看过场）
慢时:  有限子弹时间计量（躲避弹幕窗口）
对话:  实时对话树——玩家可打断 NPC（抢话改变对话走向）
关卡:  检查点重开；完成后回放"完美版"
```

## 输入与输出
- 输入：横版动作+子弹时间+对话打断。
- 输出：16-bit 视觉+synthwave 配乐、死亡快进演出、可打断对话。

## 难度与学习曲线
难度=关卡试错（一击死+快进回放——与 game-000060 秒重开同族但加"回放完美版"演出）；对话可打断系统被评家赞为创新（Wikipedia 口径）。

## 关联机制与模式
- 机制：mechanic-000087（可打断对话树）
- 对照：与 game-000060（Hotline 一击双杀俯视）、game-000032（GOI 锤控）对照——一击双杀谱系的横版位；与 game-000011（SUPERHOT 时间随行动）对照——KZ 用计量子弹时间（有限资源化），SUPERHOT 用运动耦合（无穷但绑定移动）——时间操控的资源化 vs 耦合化。
- 谱系：Stander 前作 Tower of Heaven（freeware）→ 六年/$60k → Devolver；剧本重写 30 次——叙事打磨的量化档案（Wikipedia）。

## 设计权衡
- 优点：可打断对话树的创新（Wikipedia 口径受赞）；死亡快进回放的试错节奏；剧本重写 30 次的打磨密度；首周 10 万+。
- 缺陷：戛然而止的结局与剧情分歧批评（Wikipedia 口径）；六年开发周期。
- 反例：与 game-000011（SUPERHOT）对照——时间操控的资源化（计量）vs 耦合化（运动）；两者都把时间做成有限资源但实现相反。
- 适用场景：一击双杀横版；可打断对话叙事。

## 可复现的最小版本与算法
横版平台+一击判定+子弹时间计量+快进回放+可打断对话状态机即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2019-04-18 发行（纠误）；Stander/GameMaker 2/六年/$60k | Wikipedia |
| 玩法口径修正（横版一击双杀+子弹时间+可打断对话树——非 plan-phase 口径） | Wikipedia |
| 销量（首周 10 万/一年 50 万约 $5M） | Wikipedia |
| 剧本重写 30 次/电影影响清单 | Wikipedia |

## 推断与未知
- **未知**：子弹时间计量的恢复规则；对话打断的全分支覆盖度。
- **推断（分析而非事实）**："死亡快进回放"是死亡叙事化的反面——它把死亡压缩成加速跳过（对照 game-000059 的死亡扩展叙事）；两个方向都服务"重试不痛苦"（分析）。
- 剧本重写 30 次 vs 原型一夜（2048）——叙事打磨与机制打磨的时间分布不同（分析）。

## 创新延伸（可验证假设素材）
1. 可打断对话的分支覆盖度 vs 玩家打断率（内容生产的边际收益研究）。
2. 快进回放 vs 慢速重放的死亡呈现对照（接 hypothesis-000022 失败呈现谱）。
