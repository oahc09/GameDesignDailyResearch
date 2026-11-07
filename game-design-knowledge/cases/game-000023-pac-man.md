---
id: game-000023
title: "Pac-Man"
aliases: ["吃豆人", "パックマン", "Puck Man（日版名）"]
genres: [puzzle, action, hybrid]
subgenre_tags: []
platforms: [arcade, 多平台移植]
release_year: 1980
creators: ["Toru Iwatani（岩谷彻，Namco）"]
core_loop: "吃豆丸推进 -> 四幽灵以不同目标规则合围 -> 能量丸短暂反杀 -> 幽灵人格组合迫使路线记忆 -> 走完迷宫进入下一关（速度递增）"
mechanic_ids: [mechanic-000024]
pattern_ids: [pattern-000014]
quality_score: 4.95
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Pac-Man"
    title: "Pac-Man - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-07"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1980-05-22 街机发行（Namco，美版 Midway 10 月）", "Iwatani 设计动机（非暴力、吸引女性；披萨缺口只讲对一半——1986 自述）", "四幽灵人格概述（Blinky 直追 / Pinky·Inky 前置包抄 / Clyde 距离切换）", "能量丸反杀与递增分值", "第 256 关整数溢出 kill screen", "完美分 3,333,360（Billy Mitchell 1999；2018 争议与 2020 吉尼斯复权）", "40 万台（1982）/累计约 $14B（2016 口径）", "Ms. Pac-Man（GCC 1982）"]
  - url: "https://www.gamedeveloper.com/design/the-pac-man-dossier"
    title: "The Pac-Man Dossier（Jamey Pittman，Pac-Man Dossier 在线版）"
    publisher_or_author: "Jamey Pittman / Game Developer"
    published_at: "2009"
    accessed_at: "2026-11-07"
    source_type: technical_analysis
    evidence_level: "A"
    supports_claims: ["scatter/chase 双模式与调度（每关四次 scatter 后转永久 chase）", "各幽灵目标格规则：Blinky=玩家格、Pinky=前 4 格、Inky=经 Blinky 的向量翻倍、Clyde=距玩家 8 格内切回 scatter 角", "幽灵目标格寻路仅允许向上/左/下/右且不许掉头", "frightened 模式与点数递增表（本卡仅登记与幽灵 AI 相关项，全文 46 页未逐节核对）"]
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

> 主题偏离说明（SPEC §1）：Pac-Man 列于周一"经典机制"专题谱系，本日以**确定性 AI 算法轴**切入（四幽灵差异化目标格与 scatter/chase 调度），偏离原因：它是"极简规则涌现人格"与 pattern-000014（确定性解锁社区）的范式样本，直接服务周六专题。

# Pac-Man（game-000023）

## 核心体验
四只幽灵 = 四种追踪算法。玩家面对的不是"更快的敌人"，而是一个**可学习的人格组合**：Blinky 永远直追、Pinky 埋伏在你前方四格、Inky 用 Blinky 位置做向量包抄、Clyde 一靠近就害羞撤退。掌握了算法，迷宫就从随机威胁变成可背谱的舞曲。

## 规则与状态转移（含最简伪代码）
- 状态：`(迷宫网格, 玩家位置/朝向, 四幽灵位置/模式/目标格, 关卡计时)`；输入：`{四向转向}`。

```text
# Pac-Man Dossier 口径（Jamey Pittman）
模式调度:  每关 scatter <-> chase 交替四次，时长随关卡变化，后转永久 chase
           （scatter：各幽灵奔向自家角落外的固定目标格；chase：执行追击规则）
寻路约束:  交叉路口按"目标格欧氏最近"选向；不允许掉头（除模式切换强制反转）
chase 目标格:
  Blinky: 玩家当前格
  Pinky:  玩家前方 4 格（含原版向上溢出 bug——Dossier 口径）
  Inky:   以 Blinky 为轴心，取玩家前方 2 格的向量翻倍点
  Clyde:  距玩家 > 8 格时同 Blinky；≤ 8 格切回自家 scatter 角（"害羞"）
frightened: 能量丸后反向 + 随机转向，被吃分值 200/400/800/1600 递增
```

## 输入与输出
- 输入：四向转向（单摇杆）。
- 输出：幽灵颜色=算法身份的可读编码、模式切换的强制掉头、能量丸反杀分值递增。

## 难度与学习曲线
学习曲线的实质是**逆向工程四个算法**：社区把幽灵行为总结成可背诵的走法谱（Dossier 本身即这一文化的产物）。确定性使"完美通关"成为可证明事件（3,333,360 完美分，含吃掉全部奖励水果），也使 kill screen（第 256 关右缓冲区溢出）成为可解释的系统事实而非玄学。

## 关联机制与模式
- 机制：mechanic-000024（四幽灵差异化目标格与模式调度）
- 模式：pattern-000014（确定性解锁涌现社区——完美分文化、背谱攻略、Dossier 本身）
- 对比：与 game-000012（Doom 声音状态机 AI）同属"简单规则涌现压力"，但 Pac-Man 确定无随机、Doom 引入声音传播与随机择向——确定性光谱两端（未建 CONTRASTS 边，登记于本卡）。
- 渊源：Spelunky（game-000024）明言受 Pac-Man 幽灵行为影响（Wikipedia）——算法谱系的直接传承。

## 设计权衡
- 优点：四种人格用同一套"目标格+禁掉头寻路"即涌现，无需行为树；确定性让难度成为记忆/技巧问题，为竞速与完美攻略文化奠基；人格差异化让新手也能感知"它们不一样"。
- 缺陷：确定性可被完全逆向——高手局中游戏"解"了（低关卡背谱走法）；随机性缺席使长线留存依赖关卡速度递增。
- 反例：Pinky 的前 4 格含原版向上偏移 bug（Dossier）——bug 成为人格的一部分并被保留，与"修复一切 bug"的现代标准相反。
- 适用场景：需要"可读敌人"的追逐玩法；确定性模拟设计。

## 可复现的最小版本与算法
网格 + 模式调度表 + 四个目标格函数 + 禁掉头贪心寻路即可复现（Dossier 完整披露，无未知算法）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1980-05-22 发行；Iwatani 设计动机两说 | Wikipedia |
| 四幽灵人格与 scatter/chase 调度、目标格规则全项 | Pac-Man Dossier（A，在线版） |
| kill screen 256；完美分 3,333,360 及争议史 | Wikipedia |
| 40 万台/$14B 口径；Ms. Pac-Man 渊源 | Wikipedia |

## 推断与未知
- **未知**：Dossier 全文 46 页未逐节核对（本卡仅登记幽灵 AI 相关项）；各关卡模式时长精确表未抄录。
- **推断（分析而非事实）**：Clyde 的 8 格规则是四人组里最精妙的设计——它让"合围"永远有一个缺口，保证玩家永远有理论活路；纯包围会无解。
- **推断（分析而非事实）**：模式切换时的强制掉头是给玩家的"呼吸阀"——广播状态变化等于免费信息。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000011：幽灵人格移植敌潮玩法。
2. 第五幽灵实验：加入"Clyde 反相"（远追近逃的反向规则），检验四人组对称破缺是否已是最优人数。
