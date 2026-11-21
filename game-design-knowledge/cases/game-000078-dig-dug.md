---
id: game-000078
title: "Dig Dug"
aliases: ["挖地虎（中文社区通称）", "Dig Dug"]
genres: [action, puzzle, hybrid]
subgenre_tags: []
platforms: [arcade, nes, 多平台移植]
release_year: 1982
creators: ["Namco（设计 Masahisa Ikegami，Galaga 创作者 Yokoyama 协助；程序 Fukatani/Sakai + 硬件 Ishimura；音乐 Yuriko Keino；美术 'Mr. Dotman' Ono；运行 Namco Galaga 基板）"]
core_loop: "挖掘地道 → 泵气胀爆敌人（Pooka/Fygar）→ 或引落巨石压碎 → 敌人可穿土幽灵化逼近 → 最后一只逃向地表 → 255 关 kill screen"
mechanic_ids: [mechanic-000082]
pattern_ids: []
quality_score: 4.60
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Dig_Dug"
    title: "Dig Dug - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1982-02-20 日本街机（欧 04-19/北美 04 Atari）", "设计 Ikegami + Yokoyama 协助（纠误：非 Nobuo/Sakurai）；程序 Fukatami/Sakai + Ishimura；音乐 Yuriko Keino；美术 Ono 'Mr. Dotman'；Galaga 基板", "规则全项（挖地道/泵气胀爆（Pooka 红球/Fygar 喷火龙）/巨石压碎（可压玩家）/敌人可穿土幽灵化（无敌减速再固化）/最后一只逃向地表出口/255 关 kill screen 出 Pooka 在玩家头顶）", "商业（1982 日本街机毛收第 2 仅次于 Pole Position；北美 Atari 22,228 台 $46.3M）", "评价（AllGame 5/5 'arcade and NES classic'；Eurogamer 8/10；Gamest 史上最伟大街机之一——'打破 dot-eater 传统'；KLOV 史上第 6 受欢迎）", "挖掘游戏潮（Mr. Do!/Anteater/Boulder Dash 对照）与续作谱系（Dig Dug II 1985→Deeper 2001→Digging Strike 2005→Island 2008）；主角 Taizo Hori 为 Mr. Driller 父亲；Wreck-It Ralph/Smash Bros. 客串"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Dig Dug（game-000078）

## 核心体验
地形即武器的始祖：你在地下挖出整个关卡（地道由你创造），用泵把敌人胀爆、或挖到巨石下引落压碎——而敌人也能"幽灵化"穿土直追你。**玩家自己挖掘的关卡**（player-dug levels）是其签名。

## 规则与状态转移（含最简伪代码）
- 状态：`(土层网格（挖开/未挖）, 敌人（实体/幽灵态）, 巨石, 泵气进度)`；输入：`{四向挖掘, 泵气}`。

```text
挖掘:  四向挖出土层 → 开辟通道（关卡=玩家挖掘的产物）
泵气:  泵管连击 → 敌人充气膨胀 → 爆破
巨石:  挖空其下 → 巨石坠落压碎敌人（也可压死玩家）
幽灵:  敌人化为眼睛穿土逼近（无敌减速）→ 在空处固化
逃亡:  最后一只敌人 → 逃向地表边缘（限时压力）
kill screen:  256 关 8 位溢出 → Pooka 刷在玩家头顶
```

## 输入与输出
- 输入：四向挖掘+泵气（Pong/SI 同款极简）。
- 输出：挖掘的地形改变、充气膨胀演出、巨石坠落、Keino 音乐。

## 难度与学习曲线
难度=**挖掘路线的风险规划**：把敌人引到巨石下（地形杀）vs 直接泵爆（时间暴露）；幽灵化敌人使"安全通道"不安全——地图不能固守。深度=玩家自建关卡与敌人追击的动态平衡（分析口径）。

## 关联机制与模式
- 机制：mechanic-000082（玩家挖掘关卡+幽灵化追击）
- 模式：对照 game-000024（Spelunky 可破坏地形）——地形交互的先祖（1982 就有可挖地形+落石）；对照 game-000050（FTL 追击）——"最后一只逃跑"的终局压力变体。
- 演化链：SI（射击）→ Galaga（编队）→ Dig Dug（挖掘+物理）—— Namco 街机的机制变异谱（pattern-000029 每代一变异）。
- kill screen：255 关溢出与 Pac-Man/Galaga 同族（pattern-000022 关联）。

## 设计权衡
- 优点：玩家挖掘关卡=内容自生成（每局地形由玩家创造）；泵气的处决演出+巨石的地形杀双击杀手段；幽灵化打破"挖好就安全"的守势；Gamest '打破 dot-eater 传统'（Wikipedia 口径）。
- 缺陷：早期移植质量差（Apple II/Atari 8-bit 批评，Wikipedia）；泵气连击的节奏在高密度敌群下紧张（分析）。
- 反例：与 game-000016（Minesweeper 固定网格推理）对照——同网格，Dig Dug 的网格是玩家自己挖出来的（动态）；静态/动态网格谜题分岔。
- 适用场景：地形即武器的挖掘玩法（Mr. Driller 谱系源头）。

## 可复现的最小版本与算法
土层网格+挖掘+泵气计数+幽灵态切换+落石判定即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1982-02-20 发行；Ikegami 设计 + Yokoyama 协助（纠误） | Wikipedia |
| 玩法全项（泵气胀爆/巨石/幽灵化/最后一只逃亡/255 kill screen） | Wikipedia |
| 商业（1982 日本第 2/北美 $46.3M） | Wikipedia |
| 谱系（Mr. Driller/客串）与挖掘潮 | Wikipedia |

## 推断与未知
- **未知**：幽灵化的相移频率与速度参数；各深度分值表。
- **推断（分析而非事实）**：幽灵化是"反龟缩"机制——它使静态防守不可能，强迫玩家持续挖掘新空间（与 game-000039 反驻留同精神：反静态策略，分析）。
- 音乐家 Keino（Namco 早期女性作曲）的动态音乐为当时先锋（事实注记）。

## 创新延伸（可验证假设素材）
1. 幽灵化频率对"挖掘规划深度"的影响（反龟缩参数化）。
2. 巨石地形杀的确认机制（预测 vs 反应——物理谜题化）。
