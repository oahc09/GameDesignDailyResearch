---
id: game-000088
title: "Stardew Valley"
aliases: ["星露谷物语（中文通行译名）", "Stardew"]
genres: [simulation, strategy, hybrid]
subgenre_tags: []
platforms: [pc, ps4, xbox_one, nintendo_switch, ps_vita, ios, android, switch_2]
release_year: 2016
creators: ["Eric 'ConcernedApe' Barone（单人五年：程序/像素美术/音乐/音效全部自制；曾任职西雅图 Paramount 剧院引座员（纠误：非医护）；华盛顿大学塔科马分校计算机 2011 毕）", "Chucklefish（早期发行，Barone 后收回发行权至 2022 全部自发行）"]
core_loop: "继承爷爷的荒废农场 → 五技能（耕种/采集/钓鱼/采矿/战斗）四季循环 → 镇民关系与 12 位可婚对象 → 社区中心 bundles vs Joja 超市路线抉择 → 开放式无终局"
mechanic_ids: [mechanic-000092]
pattern_ids: [pattern-000031]
quality_score: 4.78
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Stardew_Valley"
    title: "Stardew Valley - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2016-02-26 PC 发行与全平台移植谱系（Switch 2 2025-12-25）", "Barone 单人五年（程序/美术/音乐/音效自制）；2011 UW Tacoma 计算机毕业后任剧院引座员（纠误：非医护）", "玩法全项（继承爷爷农场/五技能/12 位可婚对象不分性别/社区中心 bundles vs Joja 路线——被评家称'反资本主义'）", "发行（Chucklefish 中途加入→Barone 2022 年前收回全部发行权自发行）", "销量（首两周 42.5 万→两个月破百万→2017 底 350 万→2026-02 超 5000 万：PC 2600 万/Switch 790 万）", "1.6 大更新（2024-03，主机/移动 2024-11；IGN 事后重评满分 10/10）", "奖项（2016 金摇杆 Breakthrough；BAFTA 最佳游戏提名/TGA 最佳独立提名/GDCA 最佳首作提名/IGF Seumas McNally 提名/2017 Steam 奖）", "MC 89 (PC)/87 (Switch)；OpenCritic 99% 推荐；批评：教程薄弱/操作/简单战斗", '开创现代 farming/cozy 游戏复兴口径']
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Stardew Valley（game-000088）

## 核心体验
单人五年全栈（程序/美术/音乐/音效）的"cozy 品类复兴"起点：农场只是容器，四季循环里的种植/钓鱼/采矿/社交互相供养，社区中心 vs Joja 超市的抉择把"反资本主义"做成可玩选项。2026-02 突破 5000 万套。

## 规则与状态转移（含最简伪代码）
- 状态：`(农场布局, 五技能等级, 社交好感, 金币, 季节/日期, 路线标记（社区中心/Joja）)`；输入：`{耕种/采集/钓鱼/ mining/战斗/社交}`。

```text
四季:  作物季节性（春/夏/秋/冬各有限定）→ 年度规划
社交: 送礼/对话 → 好感心 → 12 位可婚（不分性别）
抉择:  社区中心 bundles（收集）vs Joja（付费买断）→ 城镇走向分岔
无终局: 开放式——爷爷的评价是唯一"评分"（分析口径）
```

## 输入与输出
- 输入：点选耕种/采集/社交（单指+工具切换）。
- 输出：四季视觉循环、镇民关系演出、小镇随路线变化。

## 难度与学习曲线
无传统难度——困难全部来自**时间管理**（一天体力有限、季节不等人）与规划；教程薄弱批评（MC 口径）与其开放度互为因果。

## 关联机制与模式
- 机制：mechanic-000092（四季时间管理与路线抉择）
- 模式：pattern-000031（单人作者全栈——Barone 五年全自制）
- 发行史：Chucklefish 早期发行→Barone 收回全部发行权（2022 前）——独立开发者收回控制权的标杆案例（Wikipedia）。
- 对照：与 game-000026（DF 模拟即内容）对照——Stardew 把"cozy 品类"从 Harvest Moon 谱系现代化（开创复兴口径，Wikipedia）。

## 设计权衡
- 优点：五技能×四季×社交的三维时间管理（一天体力=预算）；社区中心 vs Joja 的价值观路线（反资本主义叙事可玩化——评家口径）；十年持续免费更新（1.6 后 IGN 重评满分）；5000 万套（2026-02）。
- 缺陷：教程薄弱/操作/简单战斗批评（MC 口径）；单人维护 5000 万用户的可持续性（1.6 后移交节奏——分析口径）。
- 反例：与 game-000044（Pong 单物理）对照——Stardew 是系统数量最大化的反例（多维时间管理）；极简与极繁都是完整设计。
- 适用场景：farm sim/cozy 品类；单人长线更新模式。

## 可复现的最小版本与算法
日历状态机+五技能成长+好感表+路线标记即可复现骨架；内容量为人工层（五年单人制作的证据）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2016-02-26 发行；Barone 单人五年全栈（纠误：引座员非医护） | Wikipedia |
| 玩法全项（五技能/12 可婚/bundles vs Joja） | Wikipedia |
| 销量（2026-02 超 5000 万：PC 2600 万/Switch 790 万） | Wikipedia |
| 1.6 更新与 IGN 重评满分 | Wikipedia |
| Chucklefish→自发行控制权收回 | Wikipedia |

## 推断与未知
- **未知**：好感数值表与婚后事件全清单；1.6 后的更新路线细节。
- **推断（分析而非事实）**：收回发行权（2022）+ IGN 满分重评（2024）构成"独立控制权→长期信任"的正循环——与 pattern-000031 的作者全栈谱互证（分析）。
- 社区中心 vs Joja 是"价值观即玩法"的样本——反资本主义叙事不用过场而用可玩路线分岔表达（分析）。

## 创新延伸（可验证假设素材）
1. 路线抉择的价值观测量（社区中心 vs Joja 玩家的自评差异——反资本主义叙事的可玩化实证）。
2. 单人长线更新的可持续性模型（对照 1.6 后移交节奏）。
