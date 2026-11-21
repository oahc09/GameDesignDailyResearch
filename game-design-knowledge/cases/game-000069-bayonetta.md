---
id: game-000069
title: "Bayonetta"
aliases: ["蓓优妮塔（中文通行译名）", "猎天使魔女"]
genres: [action, hybrid]
subgenre_tags: []
platforms: [ps3, xbox_360, wii_u, pc, nintendo_switch]
release_year: 2009
creators: ["PlatinumGames（导演/编剧 Hideki Kamiya——鬼泣原作者；团队名 Team Little Angels 致敬 DMC 的 Team Little Devils；美术 Mari Shimazaki 超一年打磨主角形象）", "Sega（发行）"]
core_loop: "连段攻击 → 精确闪避触发 Witch Time（敌人减速）→ 处决与 Torture Attack → 章节内按时间/连击/受伤评分配点 → 五难度（含单键 Very Easy Automatic）"
mechanic_ids: [mechanic-000073]
pattern_ids: []
quality_score: 4.63
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Bayonetta_(video_game)"
    title: "Bayonetta (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2009-10-29 日本 PS3/X360 发行（北美 2010-01-05）；2007-01 开工", "Kamiya 导演编剧；Team Little Angels 命名口径；Scandinavian 神话命名；DMC4 调研；'sexiness' 主题与 Shimazaki 一年多的形象设计", "玩法全项（Witch Time：闪避成功敌人减速以反击；Wicked Weave 攻击；Torture Attack 处决装置；发召恶魔；变身解锁；五难度含单键 Very Easy Automatic；章节内 arena 排名按时间/连击/受伤）", "MC 90 (X360/PC)/87 (PS3)；Famitsu 40/40 (X360)；'史上最伟大'口径", "销量（日本首日 13.8 万；2010-03 全球 135 万；PC 一个月 17 万+；Switch 2022-12 达 124 万）", "续作谱系（Bayonetta 2 2014 任天堂发行/3 2022/Origins 2023）与动画电影"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Bayonetta（game-000069）

## 核心体验
"防御即进攻"的动作天花板：精确闪避触发 Witch Time（世界减速），防御成功直接转化为进攻窗口——回避技术被奖励为伤害输出。单键"Very Easy Automatic"模式（Wikipedia）证明 pattern-000006 辅助谱在动作品类的早期实践。

## 规则与状态转移（含最简伪代码）
- 状态：`(连段状态, 闪避时机窗, 魔力资源, 评分)`；输入：`{攻击连段, 闪避, 处决}`。

```text
闪避:  敌攻击命中前一瞬闪避成功 → Witch Time（全局减速数秒）→ 反击窗口
连段:  攻击键组合 × 蓄力 → Wicked Weave 大型攻击
处决:  削弱后 → Torture Attack（场景装置演出）
评分:  每章按时间/连击/受伤打分配点（纯技术排行——无概率）
辅助:  Very Easy Automatic（单键自动连段）——辅助谱系动作域早期样本
```

## 输入与输出
- 输入：多键连段+精确闪避（帧窗判定）。
- 输出：Witch Time 减速演出、处决装置、评分点数。

## 难度与学习曲线
难度=闪避时机窗的掌握（Witch Time 的触发即奖励——防御技术直接变现为进攻时间）。Very Easy Automatic 把"自动连段"做成最低难度（Wikipedia）——辅助谱系的动作域早期实践（对照 Celeste Assist，2009 早 9 年）。

## 关联机制与模式
- 机制：mechanic-000073（Witch Time 闪避奖励减速）
- 对照：与 game-000039（Hades 冲刺）对照——同为闪避判定，Bayonetta 奖励减速窗口、Hades 奖励位移；闪避的两种回报结构。与 game-000049（ITB 预告）对照——Witch Time 是"事后奖励式"的信息补偿，ITB 是"事前预告式"（信息光谱的第三支：慢时间）。
- 谱系：Kamiya（DMC 原作者）→ Bayonetta（Team Little Angels 致敬 Team Little Devils，Wikipedia）——作者谱系的直接传承。

## 设计权衡
- 优点：闪避→Witch Time 把防御变现为进攻（主动防御设计）；评分制（时间/连击/受伤）的纯技术排行（pattern-000014 谱系）；Very Easy Automatic 的早期辅助实践。
- 缺陷：故事与 QTE 批评（MC 口径）；'sexiness' 主题的时代争议（设计史层，不展开）。
- 反例：与 game-000039（Hades 冲刺位移）对照——闪避回报可以是时间（减速）或空间（位移）；两者决定战斗节奏结构。
- 适用场景：高技能天花板动作；闪避奖励设计。

## 可复现的最小版本与算法
连段状态机+闪避判定窗+全局时间缩放+评分器即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2009-10-29 发行；Kamiya/Team Little Angels | Wikipedia |
| Witch Time（闪避减速）/Very Easy Automatic 单键模式 | Wikipedia |
| MC 90/Famitsu 40/40 | Wikipedia |
| 销量（Switch 124 万）与续作谱系 | Wikipedia |

## 推断与未知
- **未知**：Witch Time 的精确触发窗帧数；各武器与 Wicked Weave 的完整表。
- **推断（分析而非事实）**：Very Easy Automatic（2009）比 Celeste Assist（2018）早 9 年——尊重式辅助（pattern-000006）的动作域先例；但命名与包装的"尊重度"不如 Celeste（分析）。
- 'dodge-offset' 为社区/教程常用词但 Wikipedia 本页未载——不作为机制卡断言（诚实注记）。

## 创新延伸（可验证假设素材）
1. Witch Time 触发窗剂量（帧数）对掌握曲线的影响。
2. 自动连段辅助对新手留存 vs 老玩家感知的影响（辅助透明度谱 hypothesis-000025 的动作域延伸）。
