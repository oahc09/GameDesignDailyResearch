---
id: game-000087
title: "Undertale"
aliases: ["传说之下（中文通行译名）", "UT"]
genres: [hybrid, strategy, hybrid]
subgenre_tags: []
platforms: [pc, ps4, ps_vita, nintendo_switch, xbox_one]
release_year: 2015
creators: ["Toby Fox（单人完成全部脚本/程序/音乐；Temmie Chang 主美术）"]
core_loop: "弹幕躲避（心形 soul）→ 每战可选 FIGHT 或 ACT/MERCY → 击杀计 EXP（execution points）与 LOVE（level of violence）→ 三路线（中立/真和平/屠杀）→ 屠杀线永久污染后续和平线"
mechanic_ids: [mechanic-000091]
pattern_ids: [pattern-000031]
quality_score: 4.88
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Undertale"
    title: "Undertale - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2015-09-15 PC 发行与移植谱系", "Fox 单人完成全部（含音乐）；Temmie Chang 主美术", "玩法全项（弹幕+回合混合/ACT/MERCY/EXP=execution points/LOVE=level of violence/三路线/屠杀线需击杀全部可战怪物并永久改变后续和平线/重复 Boss 战对话随前局变化）", "灵感（EarthBound 氛围与 ROM hack 史/Mario & Luigi/Mother/Brandish/Touhou/Moon: Remix RPG/Cave Story/女神转生的对话机制——无 Oscar Wilde 口径）", "众筹（Kickstarter 2013-06-24，目标 $5,000，筹 $51,124/2,398 人——纠误：非 Indiegogo）", "销量（2015 底 Steam 53 万→2016-02 破百万→2025-12 估 500-1000 万）", "评价（MC 92 曾为最高分 PC 游戏；IGF 观众奖/SXSW 文化创新/日本游戏赏优秀奖/IGN 史上第 20）", "Fandom（梗文化/Undertale Yellow 2023 同人/Sans 入 Smash/主播遭骚扰争议；MatPat 赠教皇 2016）", "Deltarune 平行故事（Ch1 2018 免费起，1-4 包 2025-06-04，Ch5 2026-06-24，单结局）"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Undertale（game-000087）

## 核心体验
把 RPG 的"杀怪"变成**可拒绝的道德选项**：每个敌人都能被 ACT 了解、被 MERCY 饶恕——也可以全杀。你的杀戮计数（EXP=execution points、LOVE=level of violence）决定世界与结局，且屠杀线会**永久污染**后续所有和平线。游戏的记忆即你的罪。

## 规则与状态转移（含最简伪代码）
- 状态：`(击杀数/饶恕数, 路线标记, 存档（跨局污染载体）, 弹幕战状态)`；输入：`{弹幕躲避, FIGHT/ACT/MERCY}`。

```text
战斗:  回合制 → 敌人弹幕攻击（心形 soul 躲避）→ 玩家回合选择 FIGHT/ACT/MERCY
饶恕:  ACT 满足条件 or 血量压低 → MERCY 可用 → 免战斗结束
路线:  kill_count=0 → 真和平线；全杀 → 屠杀线（永久改变后续和平线对话/结局）
文本:  对话随杀戮史逐句变化——世界记得你做过什么
```

## 输入与输出
- 输入：弹幕躲避（方向键控 soul）+ 四选项（FIGHT/ACT/ITEM/MERCY）。
- 输出：逐句变化的对话、角色对杀戮史的直接提及、三路线结局。

## 难度与学习曲线
战斗难度可绕过（和平线几乎无战斗），真正的"难度"是**道德一致性**——玩家要顶着"击杀有奖励数值（EXP/LOVE）"的诱惑保持不杀。屠杀线的永久污染是品类最著名的"存档即罪证"设计（分析口径）。

## 关联机制与模式
- 机制：mechanic-000091（杀/饶计数与跨局存档污染）
- 模式：pattern-000031（单人作者全栈——Fox 完成全部脚本/程序/音乐）
- 灵感谱系（Wikipedia）：EarthBound/Moon: Remix RPG/Touhou/女神转生对话——多重谱系交点；与 game-000034（Papers Please 规则道德）对照——PSP 的道德来自规则执行、UT 的道德来自不执行的选项（道德机制两极）。
- 文化：Fandom 规模（梗/同人/争议）独立于销量——玩家共创的极限案例（对照 pattern-000014 社区谱）。

## 设计权衡
- 优点：MERCY 把"RPG 必杀怪"的公理化假设变成可选——品类假设被显式化为道德选择；EXP/LOVE 的命名重定义（execution/level of violence）把数值系统变成叙事；屠杀线的永久污染使存档成为道德档案。
- 缺陷：主播遭遇骚扰（屠杀线直播的文化副作用，Wikipedia）；多路线的内容生产成本（单人完成的极限案例——对照 Barone 五年）。
- 反例：与 game-000034（Papers Please 无豁免的规则执行）对照——PSP 不给玩家"放走所有人"的善终选项（给了会被罚），UT 给了且不罚；规则刚性的两个极端。
- 适用场景：道德选择系统；"数值系统即叙事"设计。

## 可复现的最小版本与算法
弹幕躲避+ACT/MERCY 条件表+全局杀/饶计数+路线判定即可复现核心循环；跨局污染需要存档字段跨 run 持久化。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2015-09-15 发行；Fox 单人全栈/Temmie Chang | Wikipedia |
| 规则全项（EXP/LOVE 定义/三路线/屠杀线永久污染） | Wikipedia |
| Kickstarter $51,124/2,398 人（纠误：非 Indiegogo） | Wikipedia |
| MC 92 曾最高分 PC/IGN 史上 20 | Wikipedia |
| Fandom/Deltarune 谱系 | Wikipedia |

## 推断与未知
- **未知**：路线判定的精确阈值；屠杀线污染的全部对话差异。
- **推断（分析而非事实）**：EXP/LOVE 的重定义是"数值语义反转"——RPG 的升级激励被改写为暴力记录；玩家的升级欲与道德目标冲突即其张力来源（分析）。
- 屠杀线永久污染是把"存档"从便利设施升格为道德档案——存档系统第一次成为叙事主体（分析）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000037：MERCY 可用性对玩家杀戮率的影响（道德选项的剂量效应）。
2. 存档污染的透明度：污染程度是否可见（显示 vs 隐藏）对道德行为的影响。
