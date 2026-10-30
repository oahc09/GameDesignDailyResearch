---
id: game-000012
title: "Doom（1993）"
aliases: ["毁灭战士", "DOOM"]
genres: [shooter, action, hybrid]
subgenre_tags: []
platforms: [ms_dos, 多平台移植]
release_year: 1993
creators: ["id Software（John Carmack 引擎；John Romero 设计；Sandy Petersen 后期设计；Tom Hall 初期设计；Adrian Carmack / Kevin Cloud 美术；Dave Taylor 程序）"]
core_loop: "探索关卡寻找钥匙卡 -> 与成群怪物交战（听声辨位）-> 管理血量/护甲/弹药 -> 选择武器应对威胁组合 -> 到达出口"
mechanic_ids: [mechanic-000013]
pattern_ids: [pattern-000009]
quality_score: 4.50
confidence: verified
verification_status: code_inspected
original_url: null
play_url: null
repository_url: "https://github.com/id-Software/DOOM"
sources:
  - url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    title: "Doom (1993 video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-30"
    source_type: encyclopedia
    evidence_level: B
    supports_claims: ["1993-12-10 午夜 FTP 发行", "shareware 模式（第一章免费、正价约 $40）", "团队与 Doom Bible 历史", "武器/道具/关卡结构", "怪物 AI 概述（看见或听见即追击）", "deathmatch 命名与 WAD 生态", "源码 1997 非商用→1999 GPL", "销量（1999 底 350 万份、两年 1-2 千万玩家）"]
  - url: "https://github.com/id-Software/DOOM"
    title: "id-Software/DOOM — 官方开源仓库（GPL）"
    publisher_or_author: "id Software"
    published_at: "1997"
    accessed_at: "2026-10-30"
    source_type: open_source_repository
    evidence_level: A
    supports_claims: ["官方源码仓库存在，可代码级核验"]
  - url: "https://raw.githubusercontent.com/id-Software/DOOM/master/linuxdoom-1.10/p_enemy.c"
    title: "linuxdoom-1.10/p_enemy.c — 怪物 AI 源码（已逐函数核对）"
    publisher_or_author: "id Software"
    published_at: "1997"
    accessed_at: "2026-10-30"
    source_type: source_code
    evidence_level: A
    supports_claims: ["A_Look：休眠怪 180° 正面扇区发现玩家（MELEERANGE 例外），MF_AMBUSH 需直接视线", "P_NoiseAlert/P_RecursiveSound：声音沿双向线在扇区递归传播（ML_SOUNDBLOCK 挡一层、关门即断），经 sector->soundtarget 唤醒怪物", "A_Chase：reactiontime/threshold、8 向 P_NewChaseDir 随机择向、JUSTATTACKED 防连续攻击（nightmare 除外）", "P_CheckMissileRange：MF_JUSTHIT 立即反击、距离启发（无近战怪更爱开火、越近越常开火、Cyborg/蜘蛛/骷髅距离减半、Vile 14*64 上限）", "A_Pain + pain chance 表；内讧（infighting）经 MF_JUSTHIT/soundtarget 重定向、完整逻辑在 P_DamageMobj"]
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

# Doom（game-000012）

## 核心体验
在火星基地的迷宫里与成群怪物作战：听见远处一声嚎叫就知道战斗已开始。它的深层设计是**把声音做成关卡设计工具**——怪物 AI 的唤醒机制让"听到什么"与"遇到什么"由地图与声学结构预先编排。

## 规则与状态转移（含最简伪代码）
- 状态（怪物侧，源码核验）：`(状态机 ∈ {休眠, 巡查, 追击, 攻击, 疼痛, 死亡}, target, reactiontime, threshold, movedir)`。

```text
# 以下为 p_enemy.c 逐函数核验口径（linuxdoom-1.10）
A_Look:      休眠怪仅在 180° 正面扇区发现玩家（P_LookForPlayers(actor,false)；
             MELEERANGE 内背后也察觉）；MF_AMBUSH 怪需 P_CheckSight 直接视线；
             发现后播放随机化 seesound -> seestate
P_NoiseAlert: 枪声/动静经 P_RecursiveSound 沿双向线在扇区递归传播；
             ML_SOUNDBLOCK 线阻挡一层；关门（openrange<=0）截断传播；
             传播目标写入 sector->soundtarget，A_Look 据此唤醒
A_Chase:     reactiontime 递减（期间禁止攻击）；threshold 控制攻击节律；
             P_NewChaseDir 以 8 向表 + 随机（对角优先/随机换序/顺逆时针扫掠/掉头）择向；
             MF_JUSTATTACKED 防止连续两轮主动攻击（nightmare/快速模式豁免）
P_CheckMissileRange: MF_JUSTHIT -> 立即反击；无近战态的怪射击距离 +128；
             越近越常开火（P_Random() < dist 则不发）；Vile 射程上限 14*64、
             UNDEAD 最小 196、Cyborg/蜘蛛/骷髅距离减半、上限 200（Cyborg 160）
疼痛:        A_Pain 播放 painsound；pain chance 存于 mobjinfo 表（每怪各异）
内讧:        被其他怪物所伤 -> 经 MF_JUSTHIT/soundtarget 重定向目标
             （完整赋值逻辑在 p_interaction.c 的 P_DamageMobj）
```

- 玩家侧：血量/护甲/弹药三资源管理；武器谱（手枪/霰弹/链锯/等离子/BFG 9000 等）对应不同风险收益场景。

## 输入与输出
- 输入：移动/射击/使用（开门）；轴辐式单角色操作。
- 输出：怪物嚎叫与枪声的空间定位、不同怪物的攻击前摇、伤害闪烁与护甲吸收反馈。

## 难度与学习曲线
难度由**怪物组合与声学布局**而非脚本编排：同一张图，玩家用霰弹还是火箭、先唤醒哪个房间的怪，产生完全不同的战斗。skill 等级直接改写 AI 参数（nightmare 豁免 JUSTATTACKED 限制、reactiontime 收紧——源码可见），是"难度=参数而非内容"的早期范本。

## 关联机制与模式
- 机制：mechanic-000013（声音传播驱动的状态机怪物 AI）
- 模式：pattern-000009（简单 AI 规则的涌现压力，与 game-000013 共享）
- 对比：与 game-000013（Halo CE）的角色化小队 AI 对照——Doom 用最简状态机造混沌群战，Halo 用角色分工造可读"舞蹈"（同入 pattern-000009）。

## 设计权衡
- 优点：状态机+声音传播的成本极低，涌现出内讧、连锁唤醒、怪海策略等组合行为（源码证实）；声音把关卡几何变成战斗难度调节器；WAD 数据/引擎分离成就 30 年 mod 生态。
- 缺陷：180° 视线扇区与穿墙音（隔门衰减仅一层）在现代标准下简陋（设计取舍而非缺陷，分析）；难度陡增的 nightmare 模式靠豁免规则硬调。
- 反例：脚本化 scripted encounter（后来 FPS 的导演系统）牺牲涌现换节奏控制——两种压力来源各有代价。
- 适用场景：群战压力玩法；需要"声音即信息"的空间设计；低算力下的可信敌人。

## 可复现的最小版本与算法
栅格/扇区声学 flood-fill（P_RecursiveSound 直译）+ 六态状态机 + 8 向择向表即可复现；官方 GPL 源码（linuxdoom-1.10）为最高等级参考实现——本日唯一 code_inspected 案例。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1993-12-10 午夜 FTP；shareware 模式；<$1M 开发成本 | Wikipedia |
| 团队与 Doom Bible 历史 | Wikipedia |
| 武器/资源/道具结构；deathmatch 命名 | Wikipedia |
| 怪物 AI 全项（视线扇区/声音传播/择向/反击启发/疼痛/内讧） | p_enemy.c 源码逐函数核对（A 级） |
| 源码 1997 非商用→1999 GPL；销量 350 万份（1999） | Wikipedia + GitHub 官方仓库 |

## 推断与未知
- **未知**：pain chance 等具体数值表在 mobjinfo（info.c）中，本次仅核对 p_enemy.c，未逐值登记。
- **推断（分析而非事实）**：P_NoiseAlert 的"关门截断"使关门动作本身成为战术——这是声学系统反哺空间玩法（设计意图无法从代码确证，但机制事实成立）。
- **推断（分析而非事实）**：越近越开火的距离启发 + 随机择向共同制造"怪物围上来"的压迫感，而非各自精确卡位——低 AI 成本换来高行为可读性。

## 创新延伸（可验证假设素材）
1. 声音传播作为玩家可见层（声波扩散可视化）——检验"把隐藏声学系统显性化"是否提升新手空间学习。
2. 现代重制对照：Doom(2016/Eternal) 的 arena 封闭设计与 1993 涌现群战的压力来源差异（Doom Eternal 已入 backlog 作对照样本）。
