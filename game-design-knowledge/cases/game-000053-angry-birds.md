---
id: game-000053
title: "Angry Birds"
aliases: ["愤怒的小鸟（中文通行译名）", "AB"]
genres: [puzzle, action, hybrid]
subgenre_tags: [hypercasual]
platforms: [ios, android, 多平台全铺]
release_year: 2009
creators: ["Rovio Entertainment（芬兰；设计师 Jaakko Iisalo——概念草图作者）"]
core_loop: "弹弓拉距定角度与力度 → 虚线弹道预览 → 物理撞击破坏猪堡 → 计分与星级（1-3 星）→ 下一关"
mechanic_ids: [mechanic-000054]
pattern_ids: [pattern-000025]
quality_score: 4.43
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Angry_Birds"
    title: "Angry Birds - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2009 系列首作（Iisalo 概念草图；Rovio 当时只够资金做一款游戏）", "物理玩法灵感来自 Flash 游戏 Crush the Castle（2009）", "品类（物理破坏谜题；'无飞行能力拟人鸟'vs 绿猪）", "续作谱系（Seasons 2010/Rio 2011/Space·Star Wars 2012/Bad Piggies 2012/Angry Birds 2 2015）", "Guinness：最多下载的手游系列；2014-01 破 40 亿下载（本卡以该口径为准）", "Sega 2023-08 以 $776M 收购 Rovio", "电影（2016 全球 $3.52M 亿口径：$352M 全球/$73M 预算；2019 续作 ~$148M；2026 第三部）", "MC 80 (iOS)；'史上最伟大游戏之一'口径与名人堂入选"]
  - url: "https://www.wired.com/2010/10/physics-of-angry-birds/"
    title: "Slingshot Science: The Physics in Angry Birds（Wired 物理分析）"
    publisher_or_author: "Wired / Rhett Allain"
    published_at: "2010-10"
    accessed_at: "2026-11-14"
    source_type: analysis_article
    evidence_level: "B"
    supports_claims: ["弹弓拉距/角度决定抛物线（物理可建模）", "虚线弹道预览=从发射速度计算的抛物线路径（玩家可据此学习抛体物理）"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# Angry Birds（game-000053）

## 核心体验
把抛物线物理做成大众玩法：拉弹弓（距离+角度=初速度矢量）、看虚线预览、观察物理破坏链。Wired 的物理分析证明其弹道可被真实抛体模型逆向——它是"用玩具教物理"的样本。

## 规则与状态转移（含最简伪代码）
- 状态：`(弹弓拉距/角度, 场景刚体（木材/冰/石）, 猪, 剩余鸟数)`；输入：`{拉弹弓（拖拽=矢量输入）}`。

```text
发射:  拉距+角度 → 初速度矢量（虚线=抛物线预览）
破坏:  碰撞冲量 → 结构应力 → 连锁倒塌（物理引擎模拟）
星级:  1-3 星按分数（剩余鸟/破坏量）——可重复优化目标
```

## 输入与输出
- 输入：拖拽矢量（拉距+角度两自由度——单指）。
- 输出：虚线弹道预览、物理破坏链、星级结算。

## 难度与学习曲线
学习=抛体物理的直觉内化（拉距→高度/距离的映射）；虚线预览是"确定性预览设计"（pattern-000025）的移动端范式——它把"猜弹道"变成"读弹道再微调"，大幅降低新手门槛（Wired 分析口径）。

## 关联机制与模式
- 机制：mechanic-000054（弹道预览弹弓）
- 模式：pattern-000025（确定性预览设计——与 Peggle 绿靶轨迹/ITB 预告/STS Intent 同谱系）
- 渊源：Crush the Castle（2009 Flash）——又一个"衍生超越原作"案例（pattern-000020 的商业级样本：40 亿下载 vs 原作小众）。

## 设计权衡
- 优点：单指矢量输入+物理破坏链的直觉乐趣；虚线预览把抛体学习门槛降到零；角色 IP 化的传播（40 亿下载/Sega $776M 收购/电影三部曲）。
- 缺陷：玩法深度有限（物理破坏的组合空间在数百关内耗尽——续作靠新鸟能力扩展，分析）；MC 80 与"玩法平庸"批评域（通用口径，标注）。
- 反例：与 game-000052（SpaceChem 排行优化）对照——AB 的星级是"达标制"（1-3 星即完美），无效率排行；休闲物理与硬核优化的受众分岔。
- 适用场景：物理破坏谜题；"预览辅助"的移动端范式。

## 可复现的最小版本与算法
刚体物理引擎（冲量/应力）+ 抛物线预览（初速度→路径采样）+ 星级结算即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| Iisalo 草图起源；Crush the Castle 渊源；"只够做一款游戏" | Wikipedia |
| 物理可建模与弹道预览 | Wired 分析（B） |
| 40 亿下载（2014-01 口径）；Sega $776M 收购 | Wikipedia |
| 电影三部曲与 IP 化 | Wikipedia |

## 推断与未知
- **未知**：首作确切发行日（Wikipedia 未给精确日期）；虚线预览的采样长度参数。
- **推断（分析而非事实）**：虚线预览长度是"辅助-挑战"的滑杆——全程预览降门槛、半程预览保挑战；AB 的选择偏全程（移动大众市场取向下取）（分析）。
- Crush the Castle 渊源再证 pattern-000020（衍生反超原作）：原作为 Flash 小众、衍生为 40 亿下载 IP（分析）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000024：弹道预览深度剂量实验。
2. 物理教学的迁移验证：AB 玩家对抛体物理题的直觉优势（Wired 分析的系统化验证）。
