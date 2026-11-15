---
id: game-000058
title: "Rocket League"
aliases: ["火箭联盟（中文通行译名）", "RL", "前作 SARPBC"]
genres: [action, hybrid, strategy]
subgenre_tags: []
platforms: [ps4, pc, xbox_one, nintendo_switch, ios]
release_year: 2015
creators: ["Psyonix（创始人 Dave Hagewood；前作 Supersonic Acrobatic Rocket-Powered Battle-Cars 2008——'下载 200 万+但被认为失败，几乎无营销'）"]
core_loop: "火箭车足球（4v4）→ 助推经济（小垫/全充）→ 空中控制与击球 → 五分钟赛制+突然死亡加时 → 排位/赛季/RLCS 电竞"
mechanic_ids: [mechanic-000062]
pattern_ids: []
quality_score: 4.58
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Rocket_League"
    title: "Rocket League - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-15"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2015-07-07 PS4/PC（Xbox 2016-02-17/macOS·Linux 2016-09-08（在线支持 2020-03 停止）/Switch 2017-11-14）", "Psyonix/Hagewood；前作 SARPBC（2008）'下载 200 万+但被认为失败，几乎无营销'", "玩法全项（火箭车踢球、最多 8 人 4v4、五分钟+突然死亡加时、排位/休闲/赛季模式、跳起空中击球、装饰跨 painted cars/exotic wheels/goal explosions；助推垫经济未在本页详述——标注）", "跨平台先驱（Sony 坚持至 2019-02 才全平台跨玩）", "电竞（RLCS 2016 首届决赛 $55k 奖池；ESL/MLG/NBC/ELEAGUE/X Games/大学联赛）", "Epic 2019-05 收购；F2P 2020-09-23（跨平台进度+Legacy 状态）→次日即破百万同时在线", "衍生（Sideswipe 移动 2021/Rocket Racing Fortnite 模式 2023-12）", "MC 85-87 'generally favorable'；'史上最伟大游戏之一'口径；BAFTA/DICE/GDCA 获奖；2018 初 1050 万销量与 4000 万+ 玩家"]
created_at: "2026-11-15"
updated_at: "2026-11-15"
---

# Rocket League（game-000058）

## 核心体验
"车+球"的跨类型融合：把足球的团队攻防换成火箭车的空中物理（跳跃/翻滚/助推击球）。前作 SARPBC 被认为失败，重做后成为"史上最伟大游戏之一"（Wikipedia 口径）——融合设计的学习成本控制样本。

## 规则与状态转移（含最简伪代码）
- 状态：`(车辆（位置/姿态/助推量）, 球物理, 比分, 计时 5 分钟+加时)`；输入：`{油门/转向/跳跃/翻滚/助推}`。

```text
助推:  助推垫（小量）与全充点 → 空中机动与超速
击球:  车身任意部位击球（物理碰撞）——空中控制是高阶技能
赛制:  五分钟+突然死亡加时（会话结构紧凑）
电竞:  RLCS 锦标赛体系（2016 起）
```

## 输入与输出
- 输入：油门/转向/跳跃/翻滚/助推（双摇杆+键的全操作集——高阶空中控制）。
- 输出：车球物理演出、助推火焰、进球爆炸（goal explosion 装饰）。

## 难度与学习曲线
技能阶梯极陡：地面击球 → 空中击球 → 空中姿态调整（flip aerial）——物理组合上限即深度（分析口径）。跨平台先驱（Sony 至 2019-02 才加入全跨玩）与 F2P 次日百万同时在线（Wikipedia）证明受众扩容路线。

## 关联机制与模式
- 机制：mechanic-000062（助推经济与车载球物理）
- 谱系：SARPBC（2008 失败作）→ Rocket League（2015 成功）——"同一机制的正确包装"案例（重命名+会话压缩+跨平台）；pattern-000012（融合）的体育样本。
- 对照：与 game-000030（Snakebird 状态爆炸但规则极简）同构——车球物理的组合上限高而规则可五句讲完。

## 设计权衡
- 优点：物理融合的纯技能天花板（无抽卡/无随机道具——纯物理竞技）；F2P 转换次日百万同时在线（受众扩容路线）；跨平台先驱；装饰物经济（goal explosion 等收藏）。
- 缺陷：技能门槛高（新手被老玩家碾压——'floaty physics' 批评与上手难并存，Wikipedia）；助推垫经济的细节未在 Wikipedia 详述（标注）。
- 反例：与 game-000044（Pong 对称一维）对照——同为对战体育，Pong 一维输入即可玩、RL 十二维姿态控制；物理融合的深度即门槛。
- 适用场景：物理竞技体育；失败光谱的光谱外——"纯技能对称竞技"。

## 可复现的最小版本与算法
车辆刚体+球物理+助推经济+进球判定即可复现核心循环；空气动力学细节为调参层。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2015-07-07 发行；Psyonix/Hagewood/SARPBC 史 | Wikipedia |
| 玩法全项（4v4/五分钟+加时/排位/赛季/空中） | Wikipedia |
| F2P 2020-09-23 → 次日百万同时在线 | Wikipedia |
| Epic 收购与 RLCS/衍生 | Wikipedia |
| 1050 万销量+4000 万玩家（2018 初） | Wikipedia |

## 推断与未知
- **未知**：助推垫的分布与充能数值（Wikipedia 未详述）；装饰经济的定价结构。
- **推断（分析而非事实）**：SARPBC 失败 → RL 成功的关键三改：改名（去术语化）、五分钟赛制（会话压缩）、跨平台（受众合并）——重做设计的教科书（分析）。
- 助推垫经济是"资源在地图上"的竞速版（对照 game-000039 太阳双源经济——同构：产能+捡拾，分析）。

## 创新延伸（可验证假设素材）
1. 助推垫经济实验：拆垫/满充比例对空战频率的影响。
2. 会话压缩对照：5 分钟 vs 10 分钟赛制的竞技完整性研究。
