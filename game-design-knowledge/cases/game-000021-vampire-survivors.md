---
id: game-000021
title: "Vampire Survivors"
aliases: ["吸血鬼幸存者", "VS"]
genres: [action, hybrid]
subgenre_tags: [hypercasual]
platforms: [pc, xbox, ios, android, nintendo_switch, ps4, ps5, meta_quest]
release_year: 2022
creators: ["Luca 'poncle' Galante（单人也独立开发发行，曾失业期间开发；前博彩业经历启发宝箱动画）"]
core_loop: "海量敌潮涌来 -> 武器全自动攻击 -> 玩家只做走位与拾取 -> 击杀掉落 XP 宝石 -> 升级三选一构筑 -> 武器进化组合 -> 15/20/30 分钟软上限收束会话"
mechanic_ids: [mechanic-000022]
pattern_ids: [pattern-000013]
quality_score: 4.65
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Vampire_Survivors"
    title: "Vampire Survivors - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-01"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["poncle 2020 年失业期开发、EA 约一年、成本约 £1,100（素材/美术/音乐）", "itch.io 先行→Steam 2021（EA 2021-12）、1.0 为 2022-10-20 与移植谱系", "玩法全项（武器全自动、XP 宝石、floor chicken、宝箱 1/3/5 件、武器进化、15/20/30 分钟软上限与 Reaper）", "金矿/金币 meta 解锁", "病毒传播（2022-01 3 万同时在线→2 月 7 万，YouTube 带动）", "Sunday Times 估算 poncle 2024-08 身家 £40M", "DLC 谱系（Moonspell/Castlevania/Among Us/Balatro 联动等）", "BAFTA 2023 最佳游戏+游戏设计等获奖（TGA 2022 最佳处女作为提名未获奖）", "灵感 Magic Survival(2019)+恶魔城+UO 服务器管理经验", "衍生 Vampire Crawlers(2026) 与 2026-06 更名 First Survivaton、真人电影等"]
created_at: "2026-11-01"
updated_at: "2026-11-01"
---

# Vampire Survivors（game-000021）

## 核心体验
操作负载的反转实验：把"射击、瞄准、技能管理"全部交给自动系统，玩家唯一的自由度是**走位与拾取**——在数百只怪的海洋里挤出一条路径。半小时内从一只孤狼变成满屏特效的弹幕神，会话由时钟封顶（15/20/30 分钟）而非死亡。

## 规则与状态转移（含最简伪代码）
- 状态：`(位置, 等级/XP, 武器+被动槽, 金币 meta, 会话计时)`；输入：`{移动（唯一持续操作）, 拾取自动}`。

```text
武器:   全自动开火（按冷却/方向策略各表），玩家不控制时机与目标
拾取:   XP 宝石/金币/鸡 靠身体接触；携带上限与磁铁被动改写拾取半径
升级:   XP 满 -> 三选一（新武器/被动/升级），构筑树至武器进化组合
会话:   15/20/30 分钟软上限 -> Reaper 出现收束（时钟封顶，同 Tiny Wings 谱系）
meta:   金币 -> 角色与永久强化（跨 run 成长）
```

## 输入与输出
- 输入：方向移动（单指/单摇杆），无攻击键。
- 输出：满屏弹幕与数值爆炸的"力量幻想"演出、XP 宝石海洋、升级三选一。

## 难度与学习曲线
难度自适配于构筑：前期靠走位躲弹幕（动作轴），后期靠构筑强度碾压（策略轴）——玩家在 30 分钟内亲历从"难"到"易"再到"新难度"的完整循环。学习曲线的实质是**构筑知识**（组合表）而非操作。

## 关联机制与模式
- 机制：mechanic-000022（自动攻击下的走位集中自由度）
- 模式：pattern-000013（操作负载自动化——把玩家自由度集中到最高价值维度）
- 会话结构：时钟封顶与 game-000009（Tiny Wings）同谱系（失败处理光谱的"无失败"端延伸）
- 渊源：Magic Survival（2019 手游）灵感 + £1,100 成本 + itch.io 起步——极低成本病毒传播样本（Wikipedia）。

## 设计权衡
- 优点：自动化把动作游戏门槛拆掉（瞄准/连招/资源管理全部移除），单输入语义下保留走位深度；时钟封顶让"再来一局"零挫败；升级三选一提供 pattern-000002 式持续决策点；低成本高传染（30k→70k 同时在线）。
- 缺陷：构筑定型后后期空虚（力量幻想饱和）；数值爆炸对性能与视觉可读性构成压力（DLC 用主题皮肤续命，分析）。
- 反例：与 game-000013（Halo）对照——Halo 把每个输入都交给玩家，VS 把"哪些输入值得玩家做"这个问题本身产品化。
- 适用场景：移动端碎片会话；"力量幻想"型会话玩法；单输入上叠构筑深度的设计。

## 可复现的最小版本与算法
敌人潮生成器 + 自动武器冷却表 + XP/升级三选一 + 会话计时器即可复现核心循环；进化组合表为内容层（分析）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| poncle 失业期开发、£1,100 成本、前博彩业经历 | Wikipedia |
| itch.io→Steam（EA 2021-12）→1.0（2022-10-20）谱系 | Wikipedia |
| 玩法全项（全自动武器/XP 宝石/进化/时钟软上限/Reaper） | Wikipedia |
| 传播数据（3 万→7 万同时在线）与 £40M 估算 | Wikipedia |
| BAFTA 2023 最佳游戏+游戏设计 | Wikipedia |
| 灵感链 Magic Survival + 恶魔城 | Wikipedia |

## 推断与未知
- **未知**：具体售价（文章仅"very low cost"/IGN 标题 "$3" 口径——不写死数字）；Sales 精确份数（仅 £40M 身家估算）；"gold/XP vacuum"为本库对拾取磁铁类机制的概括词，非官方术语。
- **推断（分析而非事实）**：15/20/30 分钟三段软上限是"会话自洽设计"：每段都是完整的力量幻想弧线，时钟封顶同时是内容节奏器与服务器性能护栏（推断）。
- **推断（分析而非事实）**：宝箱开箱动画借鉴博彩业经历——其反馈强度与赌场感官设计同构，这是控制论层面的"juice"来源之一（分析，非指控）。

## 创新延伸（可验证假设素材）
1. 自动化谱系实验：把"自动攻击"逐步还给人手（自动→半自动→手动），检验力量幻想与操作投入的弹性换算。
2. 见 hypothesis-000009 的姊妹方向：VS 的 XP 宝石海洋 × Ikaruga 弹色吸收——拾取物颜色二值化，走位本身成为风险经济。
