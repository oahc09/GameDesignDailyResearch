---
id: game-000025
title: "Age of Empires"
aliases: ["帝国时代", "AoE"]
genres: [strategy, hybrid]
subgenre_tags: []
platforms: [windows]
release_year: 1997
creators: ["Ensemble Studios（创始人 Tony Goodman；设计 Bruce Shelley、Rick Goodman、Brian Sullivan、Rick Sullivan）", "Microsoft（发行）"]
core_loop: "采集四资源（食物/木材/金/石）-> 升时代解锁兵种科技 -> 训练军团作战 -> 地图资源 finite 逼迫扩张 -> 12 文明差异化加成"
mechanic_ids: [mechanic-000026]
pattern_ids: [pattern-000014]
quality_score: 4.63
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Age_of_Empires_(video_game)"
    title: "Age of Empires (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-07"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1997-10-13/23 发行；Ensemble/微软；Genie Engine；25 人两年半", "玩法全项（12 文明、四资源不再生、四时代、四战役、随机地图与最多 8 人联机）", "销量（1997 底 65 万、2000 年 300 万份与 $1.2 亿）与获奖（与 StarCraft 并列 AIAS 策略年度）", "Definitive Edition 2018 与 Return of Rome DLC 2023", "批评（微操负担、50 人口上限）"]
  - url: "https://zoo.cs.yale.edu/classes/cs538/readings/papers/terrano_1500arch.pdf"
    title: "\"1500 Archers on a 28.8: Network Programming in Age of Empires and Beyond\"（GDC 2001 论文 PDF，Yale 课程镜像）"
    publisher_or_author: "Paul Bettner & Mark Terrano（Ensemble Studios）"
    published_at: "2001-03"
    accessed_at: "2026-11-07"
    source_type: technical_paper
    evidence_level: "A"
    supports_claims: ["确定性锁步（deterministic lockstep）模型：网络只传玩家指令流，不传状态", "模拟确定性工程：定点数运算（规避浮点跨机不一致）、校验和检测 desync", "带宽削减技术（1500 弓箭手经 28.8k 调制解调器同步）", "注意：常被误归于 Matt Pritchard——论文作者为 Bettner 与 Terrano（Pritchard 为 Ensemble 图形/优化工程师）"]
  - url: "https://www.gamedeveloper.com/programming/1500-archers-on-a-28-8-network-programming-in-age-of-empires-and-beyond"
    title: "1500 Archers on a 28.8（Game Developer 文章版）"
    publisher_or_author: "Game Developer / Paul Bettner & Mark Terrano"
    published_at: "2001"
    accessed_at: "2026-11-07"
    source_type: technical_paper
    evidence_level: "A"
    supports_claims: ["论文的公开发表版本（与 PDF 镜像互证）"]
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

# Age of Empires（game-000025）

## 核心体验
对 1997 年的家用网络来说，实时同步数百个单位近乎不可能。Ensemble 的答案是**把网络传输量降到零状态**：只传"谁在何时下了什么指令"，每台机器自己跑同一套确定性模拟。这个工程决策反过来定义了整个 RTS 网络范式。

## 规则与状态转移（含最简伪代码）
- 状态：`(本地全量模拟状态, 指令队列)`；输入：`{玩家指令（建造/训练/移动/攻击）}`。

```text
# "1500 Archers" 论文口径
锁步:  时间切为固定 tick；tick t 的指令在所有机器到齐后才一起执行
       （指令包迟到 -> 全体等待该 tick；延迟敏感）
确定性: 同起点+同指令序列 => 所有机器状态恒等
       工程手段: 定点数（不用浮点）、禁随机数跨机漂移、
       定期校验和比对（检测 desync 并断线处理）
带宽:  状态零传输；指令带宽与单位数无关 -> 1500 弓箭手走 28.8k
代价:  模拟必须完全可复现（任何浮点/迭代顺序差异都成 desync 源）
       "确定性税"由全部游戏逻辑承担
```

## 输入与输出
- 输入：鼠标指令流（RTS 标准）。
- 输出：本地模拟画面（各机自绘）、desync 报错。

## 难度与学习曲线
玩法学习（资源/时代/文明加成）之外，本卡关注工程侧：确定性约束是**全代码库级别的设计决定**——任何系统性随机都必须用同步种子，任何浮点都可能毁掉联机。它把"可复现性"从测试需求升格为架构原则。

## 关联机制与模式
- 机制：mechanic-000026（确定性锁步与指令流同步）
- 模式：pattern-000014（确定性解锁涌现社区——AoE 的回放/录像文化、后世 RTS 与 MOBA 的锁步传承；与 2048 每日种子、Wordle 全球同题同谱系）
- 渊源：论文被引 160+ 次（Semantic Scholar 口径），是 RTS/MOBA 网络的奠基文献。

## 设计权衡
- 优点：带宽与单位数解耦（规模化免费）；回放与观战天然免费获得（指令流即录像）；反作弊面小（状态不传输）。
- 缺陷：确定性税（全逻辑禁浮点、随机受管）；lockstep 对延迟敏感（一人掉线全场等待）；desync 一旦出现极难调试。
- 反例：状态同步模型（Quake 系 FPS）传输状态、容忍非确定——适合低单位高实时；锁步适合高单位低带宽。两者是网络模型光谱的两端。
- 适用场景：单位规模大、带宽紧、需要回放/观战的对抗模拟。

## 可复现的最小版本与算法
固定 tick 指令队列 + 定点数模拟 + 校验和即可复现锁步骨架；论文公开全部关键决策。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1997-10 发行；Ensemble/微软；Genie Engine | Wikipedia |
| 玩法全项（12 文明/四资源 finite/四时代/8 人联机） | Wikipedia |
| 锁步模型/定点数/校验和/带宽技术全项 | "1500 Archers" 论文（A，PDF+文章版互证） |
| 销量 300 万（2000）；AIAS 并列 StarCraft | Wikipedia |

## 推断与未知
- **未知**：Genie Engine 内部实现细节（论文聚焦网络层）；AoE2 及后继是否沿用同模型的细节差异。
- **推断（分析而非事实）**：锁步的"指令流=录像"副产品是其最被低估的红利——电子竞技的回放/转播生态在 RTS 上率先成型与此直接相关。
- **推断（分析而非事实）**：作者归属的常见误传（Pritchard vs Bettner/Terrano）提示：引用技术文献时应回溯原始 PDF——本次已核。

## 创新延伸（可验证假设素材）
1. 锁步×现代物理：把确定性锁步用于含物理引擎的对抗玩法（物理浮点→定点移植），检验"确定性税"在今天是否仍可承受。
2. 指令流回放×教学：把 AoE 式指令流做成新手"影子回放"（看高手指令流学习），检验策略游戏的可学习性提升。
