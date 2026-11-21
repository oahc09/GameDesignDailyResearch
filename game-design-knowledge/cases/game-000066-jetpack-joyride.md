---
id: game-000066
title: "Jetpack Joyride"
aliases: ["疯狂喷气机（中文通行译名）", "JJ", "开发名 Machine Gun Jetpack"]
genres: [action, hybrid]
subgenre_tags: [hypercasual, endless_runner]
platforms: [ios, android, ps4, psp, 多平台]
release_year: 2011
creators: ["Halfbrick Studios（Barry Steakfries IP——Age of Zombies/Monster Dash 直接衍生）"]
core_loop: "按住喷气上升/松手下坠（只控垂直轴，水平恒速）→ 躲避电锯/导弹/激光 → 触碰即死（躯体前滚演出）→ 载具盒子变身 → 任务/老虎机/The Stash 装饰"
mechanic_ids: [mechanic-000070]
pattern_ids: []
quality_score: 4.60
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Jetpack_Joyride"
    title: "Jetpack Joyride - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2011-09-01 iOS（纠误：非 09-08）；开发名 Machine Gun Jetpack；移植谱系（Flash 2012/PS4 2016/KaiOS 2021）", "规则全项（按住=上升松手=下落、只控垂直轴、触碰即死、载具清单 Lil Stomper/Profit Bird/Bad As Hog/Mr. Cuddles/Crazy Freaking Teleporter/Gravity Suit/Wave Rider/Sleigh of Awesome + 活动载具（DeLorean/Ecto-1）与 S.A.M. 机甲；Spin Token 老虎机；The Stash 装饰与 gadget；科学家仅作击掌任务目标）", "Barry Steakfries IP 谱系（Age of Zombies/Monster Dash 直接衍生）", "MC 90 (iOS)/IGN 9 'Halfbrick 继 Fruit Ninja 后最上瘾'；Apple Design Award 2012", "Jetpack Joyride 2（2022-08-19 Apple Arcade 独占，此前软启动后撤回）；Lucky Duck 桌游改编"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Jetpack Joyride（game-000066）

## 核心体验
"按住=上升，松手=下落"——把无尽跑酷压缩到一个垂直轴输入。玩家不控水平速度（恒速自走），全部技能在升降的微操与载具切换（Lil Stomper 等 9+ 载具每辆一套新动词）。

## 规则与状态转移（含最简伪代码）
- 状态：`(高度, 垂直速度, 载具状态, 金币/Spin Token, 任务星级)`；输入：`{按住（连续态输入——与 Tiny Wings 同族）}`。

```text
按住:  喷气推力上升；松手 → 重力下落
死:    触碰电锯/导弹/激光 → 即死（躯体前滚演出——死亡的喜剧缓冲）
载具:  载具盒子 → 随机变身（每载具独立动词集：跳/下砸/吸收…）
任务:  三星级任务（含'与科学家击掌'类趣味目标）
```

## 输入与输出
- 输入：单键连续态（按住/松手）——垂直轴唯一自由度。
- 输出：水平恒速滚动、载具变身演出、任务星级。

## 难度与学习曲线
难度=垂直微操的节奏（导弹预警与激光窗口）；载具系统是"动词重置器"——每次变身重置学习曲线而难度继续（分析口径）。

## 关联机制与模式
- 机制：mechanic-000070（单轴喷气输入与载具动词重置）
- 对照：与 game-000009（Tiny Wings 按住下潜）对照——同为"按住"语义：Tiny Wings 语义在速度、JJ 语义在高度（输入语义轴 pattern-000023 的"按住"位的两个实现）；与 game-000047（Fruit Ninja，同厂 Halfbrick）构成手感谱系。
- IP 谱系：Barry Steakfries 从 Monster Dash 直接衍生（Wikipedia）——角色复用的品牌连续性。

## 设计权衡
- 优点：单轴输入的入门零门槛 + 载具动词重置的内容扩展；MC 90 + Apple Design Award 2012（Halfbrick 双响——与 Fruit Ninja 同年）；任务/老虎机/The Stash 三层 meta。
- 缺陷：水平恒速使深度天花板固定（垂直轴单一，分析）；科学家目标仅在任务层（Wikipedia 未载其为致命障碍——纠常见记忆）。
- 反例：与 game-000002（Crossy Road 四向滑动）对照——同为无尽跑酷，JJ 用单轴+恒速、Crossy 用四向+步进；输入自由度 vs 决策密度的取舍。
- 适用场景：单轴跑酷；载具系统的动词重置设计。

## 可复现的最小版本与算法
恒速滚动+垂直推力+障碍生成器+载具状态机即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2011-09-01 iOS（纠误）；Machine Gun Jetpack 开发名 | Wikipedia |
| 规则全项（单轴/载具清单/老虎机/Stash） | Wikipedia |
| MC 90/IGN 9/Apple Design Award 2012 | Wikipedia |
| JJ2 Apple Arcade（2022-08-19，撤回后独占） | Wikipedia |

## 推断与未知
- **未知**：下载总量（Wikipedia 未载——不采信"数亿"口径）；各载具动词表细节。
- **推断（分析而非事实）**：载具系统是"学习曲线重置器"——死亡后重新开始的挫败被"下局可能变身"的期待对冲（与 pattern-000010 保底随机同精神，分析）。
- 躯体前滚演出（Wikipedia："body tumbles forward"）是死亡喜剧化的细节实现——严苛规则+幽默演出（与 GOI 旁白同精神，分析）。

## 创新延伸（可验证假设素材）
1. 载具变身频率对留存的影响（每 30s/60s/90s 一次的对照）。
2. 恒速 vs 可控水平轴的深度对比（单轴设计的辩护/挑战研究）。
