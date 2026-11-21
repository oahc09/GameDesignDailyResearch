---
id: game-000077
title: "Galaga"
aliases: ["小蜜蜂（中文社区通称）", "Galaga"]
genres: [shooter, hybrid]
subgenre_tags: []
platforms: [arcade, nes, 多平台移植]
release_year: 1981
creators: ["Namco（导演 Shigeru Yokoyama；程序 Toru (Tetsu) Ogawa；美术 Hiroshi Ono；音乐 Nobuyuki Ohnogi）"]
core_loop: "敌人编排 loop 飞入阵型 → 俯冲攻击 → Boss Galaga 牵引波俘虏我机 → 射杀俯冲 Boss 救回 → 双机并编（火力翻倍、判定变大）→ 每 4 关挑战关（不射击纯表演计分）"
mechanic_ids: [mechanic-000081]
pattern_ids: [pattern-000029]
quality_score: 4.73
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Galaga"
    title: "Galaga - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1981-09 日本/1981-11 北美（Midway）", "导演 Yokoyama/程序 Ogawa/美术 Ono/音乐 Ohnogi；Galaxian（1979）续作（Gaplus 为 1984 后续——纠误）", "玩法全项（编排 loop 入阵/俯冲攻击/Boss Galaga 两击+牵引波俘虏我机→射杀俯冲 Boss 救回→双机并编（火力翻倍判定变大）/阵内杀 Boss 则被俘机敌化/挑战关每 3 与其后每 4 关（不射击纯计分，灵感 Pac-Man 幕间与 Rally-X）/255 关 kill screen）", "对照 Space Invaders（敌人俯冲变攻击模式而非静态横移）", "开发（双机灵感来自'被环形激光捕获的飞船'电影；16×16 sprite 限制的巧妙设计；位置测试表现不佳→高管要求提高难度；Nakamura 社长亲自关注、Iwatani 反馈）", "商业（1981 日本街机毛收第 6/1982 第 3/RePlay 榜 1980-1987；1983 美国前十）", "移植（NES Demons of Death/7800 首发作/XBLA 2006 排行榜/Arcade Archives 2023/NES Classic）与续作（Gaplus/Galaga '88/Legions/Tekken Edition）；Boss Galaga 入 Smash Bros.；动画 Galaga Chronicles 开发中"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Galaga（game-000077）

## 核心体验
固定射击的机制变异样本：敌人不再静态横移，而是**编排俯冲**（loop 入阵+攻击 dives）；Boss Galaga 的牵引波会**俘虏你的战机**——射杀俯冲的 Boss 救回它，与本体并成双机（火力翻倍但判定变大）。风险-救援-强化的完整循环。

## 规则与状态转移（含最简伪代码）
- 状态：`(阵型（编排飞行中的敌人+阵内敌人）, 被俘状态, 双机状态, 挑战关计数)`；输入：`{横移, 射击}`。

```text
入阵:   敌人以编排 loop 从顶/侧飞入 → 编队
俯冲:   阵内敌人周期性 dive 攻击（随进程更凶）
俘虏:   Boss Galaga 牵引波捕获我机 → 该机敌化（阵内射杀 Boss 时）
救援:   俯中的 Boss 被射杀 → 释放我机 → 与本体并成双机（火力×2/判定×2）
挑战关:  每 3 及其后每 4 关 → 敌人纯飞行表演计分（不射击）
kill screen: 第 255 关 → 8 位溢出 → 第 0 关（bug 状态）
```

## 输入与输出
- 输入：横移+射击（Pong/SI 同款两键）。
- 输出：编排飞行的编舞感、牵引波演出、双机并编的奖励视觉。

## 难度与学习曲线
难度=俯冲读识与救援时机（何时让 Boss 抓走你、何时救——**主动被俘**是本作最深的决策：故意被俘换取双机）。位置测试"玩家一枚币走太远"→高管要求提高难度（Wikipedia）——街机经济直接改写难度参数的档案。

## 关联机制与模式
- 机制：mechanic-000081（俘虏-救援双机循环）
- 模式：pattern-000029（每代一变异：Galaxian 变异移动→Galaga 变异俘虏）
- kill screen：255 关溢出（Wikipedia）与 Pac-Man（game-000023）、Dig Dug（game-000078）同族——8 位时代的集体记忆（pattern-000022 关联）。
- 对照：与 game-000076（SI 静态阵列）对照——固定射击演化链的第一跳（移动变异+俘虏变异）。

## 设计权衡
- 优点：俘虏-救援的"主动被俘"决策深度（自愿风险换火力）；挑战关把表演计分引入射击（不射击纯计分——节奏调剂，灵感 Pac-Man 幕间）；编排飞行的编舞美感。
- 缺陷：双机判定变大（风险内置——高手权衡）；早期测试→加难的发行史（街机经济学干预设计）。
- 反例：与 game-000076（SI 意外加速）对照——Galaga 的难度提升是**有意的参数干预**（位置测试后高管下令）；SI 保留意外、Galaga 主动加难——两种难度来源（分析）。
- 适用场景：固定射击演化研究；"主动被俘"类风险决策。

## 可复现的最小版本与算法
编排飞行路径表+阵型+牵引俘虏状态机+双机判定即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1981-09 发行；Yokoyama 导演（Galaxian 续作） | Wikipedia |
| 玩法全项（俘虏-救援/挑战关/255 kill screen） | Wikipedia |
| 位置测试→高管加难；Nakamura/Iwatani 参与 | Wikipedia |
| 商业与移植/续作全谱 | Wikipedia |

## 推断与未知
- **未知**：牵引波捕获判定细节；挑战关的计分表全项。
- **推断（分析而非事实）**：双机"火力翻倍判定翻倍"是对称设计——风险与收益同源（被俘机叠在旁边=更大的被击面）；现代 roguelite 的"强力但笨重"武器同思路（分析）。
- 位置测试→加难是"数据驱动的难度干预"街机先例（对照 STS 数据平衡 game-000020，分析）。

## 创新延伸（可验证假设素材）
1. 主动被俘决策的采用率研究（玩家是否学会故意被俘）。
2. 双机判定的风险感知（玩家是否意识到判定变大）。
