---
id: game-000010
title: "Ikaruga（斑鳩）"
aliases: ["斑鸠", "Ikaruga"]
genres: [shooter, hybrid]
subgenre_tags: []
platforms: [arcade, dreamcast, gamecube, xbox_360, pc, nintendo_switch, ps4]
release_year: 2001
creators: ["Treasure（导演/作曲 Hiroshi Iuchi；制作人 Masato Maegawa；美术 Yasushi Suzuki；程序 Atsutomo Nakagawa；G.rev 协助 3 人）"]
core_loop: "观察弹幕颜色分布 -> 切换机体黑白极性 -> 吸收同色弹蓄能 / 吞掉异色弹即死 -> 三连同色击破叠倍率 -> 以吸收-释放的节奏换取生存与分数"
mechanic_ids: [mechanic-000011]
pattern_ids: [pattern-000007]
quality_score: 4.90
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Ikaruga"
    title: "Ikaruga - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-30"
    source_type: encyclopedia
    evidence_level: B
    supports_claims: ["发行时间线（街机 2001-12-20 起）", "团队名单与 Radiant Silvergun 渊源", "极性规则全项（吸收/致死/半伤/能量反噬）", "三连链公式（100 起倍增至 25,600）", "无拾取设计", "销量与评价"]
  - url: "https://store.steampowered.com/app/426680/Ikaruga/"
    title: "Ikaruga — Steam 官方页"
    publisher_or_author: "Treasure / Nicalis"
    published_at: "2014-02-18"
    accessed_at: "2026-10-30"
    source_type: official_page
    evidence_level: A
    supports_claims: ["官方口号『Shoot! Dodge! and... Get Hit!?』（被打到反而是机制）", "极性玩法官方描述", "Steam 发行日期"]
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

# Ikaruga（game-000010）

## 核心体验
纵版弹幕射击的规则反转：与机体同色的敌方子弹**不是威胁而是资源**——吸收它们蓄满追踪激光；异色弹一发即死。躲避让位于"该以哪种颜色面对这波弹幕"。官方口号 "Shoot! Dodge! and... Get Hit!?"（Steam 页）直白概括了这一反转。

## 规则与状态转移（含最简伪代码）
- 状态：`(极性 polarity ∈ {黑,白}, 吸收能量 energy ∈ [0,12], chain 计数, 分数)`；输入：`{移动, 射击, 极性切换}`。

```text
被弹判定:
  enemy_bullet.color == polarity: 吸收; energy = min(energy+1, 12)
                                   # 每 10 发提升激光等级（最高 12 级）
  enemy_bullet.color != polarity: 即死
激光释放: energy 转为追踪激光，强度 = 10 × 标准弹
击破:
  enemy.polarity == my.polarity: 只受半伤；击破同色敌 -> 掉落可吸收能量
                                 （若刚切换极性过快，该能量反而致命）
  连锁: 连续击破 3 个同色敌 -> 奖励分从 100 起、每次翻倍、上限 25,600；
        链断即重置
无拾取/无火力道具：成长全部来自玩家对极性的管理
```

## 输入与输出
- 输入：移动、射击、极性切换（三轴，均为瞬时操作）。
- 输出：弹幕黑白分明着色、吸收时的能量闪光、激光等级提示、链倍率跳字。

## 难度与学习曲线
难度不在反应速度而在"谜题式"的极性管理（Wikipedia 转述评论）：读一整波弹幕的颜色构成、规划吸收路径、在能量与生存间做交换。对弹幕新手构成门槛（批评点）；无拾取设计使失败完全可归因于极性决策。

## 关联机制与模式
- 机制：mechanic-000011（同色吸收/异色致死的极性风险经济）
- 模式：pattern-000007（吸收优于闪避——迎弹玩法）
- 对比：与 game-000001（Flappy Bird）构成"迎弹 vs 避弹"的对照（已建 CONTRASTS_WITH）：Flappy 的一切危险都是纯威胁，Ikaruga 的一半危险被定义为资源。

## 设计权衡
- 优点：单规则（二值颜色）生成整局博弈；吸收-释放节奏把弹幕从"反应测试"改写为"路线规划"；链式计分奖励颜色规划的一致性。
- 缺陷：二值系统对色觉障碍玩家不友好（原生缺乏 pattern-000006 式辅助）；极性学习曲线对系列新人陡峭（媒体批评）。
- 反例：传统弹幕（如东方/雷电系）中一切弹幕皆为威胁——Ikaruga 证明把"威胁定义权"交给玩家可重造整个品类。
- 适用场景：需要"读弹幕"而非"躲弹幕"的射击设计；风险收益交换要成为主循环的玩法。

## 可复现的最小版本与算法
二值弹幕 + 碰撞着色判定 + 能量计 + 链公式（100×2^n 封顶 25,600）即可复现核心循环；规则完全可形式化（本日形式化样本）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 街机 2001-12-20 / DC 2002-09-05 / Steam 2014-02-18 / Switch 2018-05-29 | Wikipedia |
| 极性规则全项（含 10 发升级/12 级上限/激光 10×） | Wikipedia |
| 链公式 100 起翻倍至 25,600 | Wikipedia |
| 团队（Iuchi 导演等 5+3 人）、Radiant Silvergun 精神续作 | Wikipedia |
| 官方口号与极性描述 | Steam 官方页 |

## 推断与未知
- **未知**：吸收能量反噬判定的精确帧窗（"切换过快"的具体容差）未见公开数值。
- **推断（分析而非事实）**：半伤规则（同色敌只受一半伤害）是把"吸收路线"与"击杀路线"强行互斥的设计杠杆——玩家不能既要又要。
- **推断（分析而非事实）**：链公式指数封顶（25,600）让"维持链"的价值在高手局远超基础击破分，分数榜因此分层。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000005：把弹色吸收移植到幸存者类双摇杆玩法。
2. 三色极性（三元互克）测试认知负荷上限——对照二值的"秒懂"优势。
