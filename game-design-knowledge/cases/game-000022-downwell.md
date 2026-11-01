---
id: game-000022
title: "Downwell"
aliases: ["下降井", "枪靴井"]
genres: [action, hybrid]
subgenre_tags: [hypercasual]
platforms: [pc, ios, android, ps4, ps_vita, nintendo_switch]
release_year: 2015
creators: ["Moppin（Ojiro Fumoto 单人，GameMaker: Studio；音乐 Eirik Suhrke）", "Devolver Digital（发行）"]
core_loop: "纵井下坠 -> 空中按压跳键=向下射击 -> 落地自动装填 -> 三段一关卡选择强化 -> 宝石换商店道具 -> 血量归零或坠机即终局"
mechanic_ids: [mechanic-000023]
pattern_ids: [pattern-000012]
quality_score: 4.20
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Downwell_(video_game)"
    title: "Downwell (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-01"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["iOS 2015-10-14 / PC 2015-10-15 / 移植谱系；Moppin 单人 + Devolver；GameMaker 制作", "玩法全项（Welltaro、空中按压跳=向下射击、落地自动装填、踩杀/射杀分工、三段一关、timevoid 与地藏商店、宝石交易）", "起源：2014-03 始、退学后开发、game-a-week 理念第 13 作、原名 Fall or Well、Twitter GIF 被 Devolver 发现（Cara Ellison 文章触发）", "MC 91 (iOS)/88 (Switch)；Destructoid 10/10；TGA 2015 最佳移动/掌机提名与 IGF 学生展提名", "灵感 Spelunky + Cave Story 视觉对比、手机化设想"]
created_at: "2026-11-01"
updated_at: "2026-11-01"
---

# Downwell（game-000022）

## 核心体验
两个动作轴焊死成一根：**下落就是射击，着陆就是装填**。跳键在空中是扳机、在地面是跳跃。玩家用"永远在往下掉"这个约束换来了移动与攻击的双绑定——节奏、弹道、装填窗口全部从这一个融合里涌现。

## 规则与状态转移（含最简伪代码）
- 状态：`(位置, 速度, 弹药, HP, 宝石, 组合)`；输入：`{左/右移动, 跳键（地面=跳/空中=下射）}`。

```text
空中按跳:  向正下方射击（速度与下坠叠加）
落地:      自动装填（弹匣重置）；射击/踩杀维持组合
敌我:      多数敌人可射可踩，少数抗踩必须射 -> 轴融合保留决策残余
关卡:      三段一关 -> 段末三选一强化（武器/道具）；timevoid 藏宝石/商店
经济:      宝石 -> 地藏商店交易（枪/护甲/辅助）
终局:      HP 归零（含坠机伤害）-> 单局结束
```

## 输入与输出
- 输入：方向 + 单键（语义随接地状态翻转——同一输入键两种语义是本作的机制签名）。
- 输出：竖屏下坠速度感、弹道与装填节拍、组合计数、红白黑三色限定的视觉系统。

## 难度与学习曲线
学习=把"两个动作共用一根手指"练成肌肉记忆：空中射击会减速下坠（悬停战术）、落地装填迫使玩家主动规划接地节奏（在敌人上方还是空地着地）。段末三选一提供构筑层，单局 5-10 分钟完整闭合（分析口径——规则事实来自 Wikipedia）。

## 关联机制与模式
- 机制：mechanic-000023（下落=射击、着陆=装填的轴融合）
- 模式：pattern-000012（共享接口融合——跳跃键即攻击键，移动轴与攻击轴共用一个输入接口）
- 渊源：game-a-week 第 13 作（Fumoto 退学后、Rami Ismail 理念触发），Twitter GIF 被 Devolver 发现——又一个 jam/实验管道样本（与 game-000006/000008/000011 呼应，为周报的管道论证再加一例）。

## 设计权衡
- 优点：单键双语义把操作密度压到最低而决策密度拉满；"下落=攻击"让速度本身成为武器与风险（越快越强越难控）；三色限定的视觉系统在弹幕密度下保持可读（Destructoid 10/10 称"worlds presented intelligently"，Wikipedia）。
- 缺陷：轴融合不留后路——新手误按即开火浪费弹药；纵深单一下行方向的空间多样性有限（timevoid/商店做调剂）。
- 反例：与 game-000010（Ikaruga）对照——Ikaruga 的融合发生在"资源语义层"（弹=资源），Downwell 的融合发生在"输入轴层"（跳=射）；融合接口可以选在系统的不同层。
- 适用场景：单指移动端；需要"速度即武器"的下坠类玩法。

## 可复现的最小版本与算法
下落物理 + 接地状态机 + 空中向下弹道 + 装填窗口即可复现核心循环；游戏制作引擎为 GameMaker（Wikipedia），玩法与引擎无关。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2015-10 发行谱系；Moppin 单人；GameMaker；Devolver | Wikipedia |
| 玩法全项（空中跳=下射/落地装填/三段一关/timevoid 地藏商店） | Wikipedia |
| 起源（game-a-week 第 13 作、Fall or Well 原名、Twitter GIF 发现链） | Wikipedia |
| MC 91 (iOS)；Destructoid 10/10；TGA/IGF 提名 | Wikipedia |
| 灵感（Spelunky + Cave Story 视觉 + 手机化设想） | Wikipedia |

## 推断与未知
- **未知**：装填弹匣容量与各武器参数表；组合（combo）系统在 Wikipedia 中未提及（本库记忆存在但来源未证——不写入事实层）。
- **推断（分析而非事实）**：空中射击减速下坠的物理副作用把"进攻"变成"刹车"——攻击动作天然携带空间控制语义，这是轴融合的红利。
- **推断（分析而非事实）**：Devolver 的发现链（GIF→社交媒体→发行）显示 jam 时代后独立发行的新管道：动图即预告片。

## 创新延伸（可验证假设素材）
1. 轴融合再进一步：把"射击"与"移动"互换语义（着陆=开火、空中=走位），检验融合方向的对称性是否等价。
2. 见 hypothesis-000009 的资源引擎方向：下落深度作为货币（越深宝石价值越高）。
