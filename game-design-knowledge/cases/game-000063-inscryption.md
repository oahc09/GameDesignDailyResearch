---
id: game-000063
title: "Inscryption"
aliases: ["邪恶冥刻（中文通行译名）"]
genres: [puzzle, strategy, hybrid]
subgenre_tags: []
platforms: [pc, ps4, ps5, nintendo_switch, xbox]
release_year: 2021
creators: ["Daniel Mullins Games（Daniel Mullins 单人；前作 The Hex/原型 Sacrifices Must Be Made（LD43 2018））", "Devolver Digital（发行）"]
core_loop: "卡牌对局（天平齿计伤）→ 输局转化为死亡卡素材 → 解谜密室推进 → 幕结构翻转（三幕各换美术与机制：木屋第一人称/像素 RPG/机器人工厂）→ 元叙事 ARG 层"
mechanic_ids: [mechanic-000067]
pattern_ids: []
quality_score: 4.63
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Inscryption"
    title: "Inscryption - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2021-10-19 PC 发行与移植谱系", "Mullins 单人/Devolver；前作 The Hex 与 LD43 原型 Sacrifices Must Be Made（免费 itch.io）；Leshy 出自斯拉夫神话", "玩法全项（网格卡牌+天平齿计伤/败局转化为死亡卡/三幕各换呈现——木屋密室×Leshy→像素 RPG 四 Scrybes→P03 机器人工厂肉鸽；卡费四系（能量/血祭/骨头/宝石）；对局间木屋解谜）", "元叙事（found-footage 风格：Luke Carder 'The Lucky Carder' 主播发现软盘；内嵌 ARG 可解密彩蛋延伸到游戏外）", "销量（2022-01 破 100 万）", "获奖（GDCA 22 年度游戏；IGF 2022 Seumas McNally 大奖+设计/叙事/音频三项——首个同届双冠；BAFTA 游戏设计；Polygon 2021 年度；TGA 仅提名）", "批评（Destructoid 7.5/PC Gamer 69 批评后期幕）", "Kaycee's Mod（免费扩展：第一幕肉鸽无尽，2021-12 beta→2022-03-17 正式）"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Inscryption（game-000063）

## 核心体验
元叙事卡牌游戏：第一幕是阴森木屋里与 Leshy 的牌局+密室解谜，打赢后游戏"逃出"成像素 RPG、再逃成机器人工厂——**幕结构本身就是叙事**（你在一层层剥开这个游戏）。Mullins 前作 Pony Island/The Hex 一脉的"游戏揭穿游戏"方法论（Wikipedia 载前作谱系）。

## 规则与状态转移（含最简伪代码）
- 状态：`(卡牌盘, 天平齿差, 资源（能量/血/骨头/宝石）, 幕进度, 解谜状态)`；输入：`{出牌, 解谜交互}`。

```text
对局:  网格出牌 → 攻防 → 天平齿差 ≥ 阈值 → 胜负
败局:  输掉对局 → 己方生物转化为"死亡卡"素材（失败可消耗）
幕:    三幕各换美术与卡费系统（血祭→能量→骨头/宝石…）——机制即幕
解谜:  对局间的木屋解谜推进 → 幕翻转
ARG:   游戏外可解密彩蛋（叙事延伸到游戏边界之外）
```

## 输入与输出
- 输入：出牌/解谜点选。
- 输出：三幕视觉语言翻转、天平齿演出、死亡卡生成、ARG 线索。

## 难度与学习曲线
难度=卡牌构筑×解谜混合；后期幕的批评真实存在（PC Gamer 69/Destructoid 7.5——Wikipedia 口径），Kaycee's Mod（第一幕无尽肉鸽）是对该批评的直接回应——**把最受喜爱的幕独立成模式**（分析口径）。

## 关联机制与模式
- 机制：mechanic-000067（幕结构机制翻转）
- 谱系：LD43 原型 Sacrifices Must Be Made → Inscryption——jam 管道再证（pattern-000027 第七链）；Mullins 三部曲（Pony Island/The Hex/Inscryption）的"meta 游戏方法论"。
- 对照：与 game-000006（Baba 规则元层）对照——Baba 翻转的是关卡规则、Inscryption 翻转的是游戏本身（幕级元层）。

## 设计权衡
- 优点：幕翻转把"惊喜"做成结构（玩家无法预测下一幕形态）；败局转化让失败产出素材（失败资源化）；GDCA 年度+IGF 大奖+设计/叙事/音频三项（Wikipedia：首个同届双冠）。
- 缺陷：后期幕质量下滑的批评（Wikipedia 明确口径）；meta 结构导致重玩价值集中在一幕（Kaycee's Mod 即回应）。
- 反例：与 game-000029（Portal 三小时单机制）对照——两者都是"短而完整"，但 Portal 用单一机制深挖、Inscryption 用幕翻转换形态；时长与形态的设计取舍。
- 适用场景：meta 叙事游戏；幕结构化惊喜设计。

## 可复现的最小版本与算法
卡牌盘+天平结算+幕状态机+解谜触发器即可复现骨架；三幕内容为人工层。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2021-10-19 发行；Mullins/Devolver；LD43 原型 | Wikipedia |
| 三幕结构与四系卡费；败局转化死亡卡 | Wikipedia |
| ARG 与 Luke Carder 元叙事 | Wikipedia |
| GDCA 年度+IGF 首个同届双冠+BAFTA | Wikipedia |
| 100 万销量与后期幕批评 | Wikipedia |

## 推断与未知
- **未知**：ARG 的完整解密链；死亡卡的生成规则细节。
- **推断（分析而非事实）**：败局转化（死亡卡）是"失败意义化"的机制级实现——输掉的 run 变成构筑资源（与 game-000059 死亡叙事化、game-000051 骨头文件同谱系第三支：失败变资产）。
- Kaycee's Mod 是"社区最爱即官方 DLC"的回应式开发（Wikipedia 口径），与 Bejeweled 教程转正（玩家行为改写设计）同精神（分析）。

## 创新延伸（可验证假设素材）
1. 幕翻转的预期管理：玩家对幕数量的先验（告知"有幕" vs 完全隐藏）对惊喜与挫败的影响。
2. 死亡卡经济的平衡研究（失败产出对难度曲线的扰动）。
