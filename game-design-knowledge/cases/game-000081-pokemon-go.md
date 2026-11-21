---
id: game-000081
title: "Pokémon Go"
aliases: ["宝可梦 GO（中文通行译名）", "Pokémon GO"]
genres: [simulation, hybrid, strategy]
subgenre_tags: []
platforms: [ios, android]
release_year: 2016
creators: ["Niantic（与 The Pokémon Company、Nintendo 合作；Unity；2025 年游戏业务被 Scopely 以 $3.5B 收购）"]
core_loop: "现实位置移动 → 遇到并投球捕捉宝可梦 → 蛋按步行距离孵化 → Buddy 伴宝可梦产糖 → 道馆三阵营争夺 → 团体战（Raid）→ Community Day 社区活动"
mechanic_ids: [mechanic-000085]
pattern_ids: [pattern-000030]
quality_score: 4.55
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go"
    title: "Pokémon Go - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2016-07-06 澳新美首发（日本 07-22/印度 12-14）；Niantic+TPC+Nintendo/Unity", "玩法全项（GPS 现实移动+投球捕捉 AR、三阵营道馆（Valor/Mystic/Instinct，2017-06 改版）、Raid 2017-07 起传说团体战、蛋按步行距离孵化、Buddy 2016-09 距离产糖、训练家对战 2018-12/Go Battle League 2020-01（Elo 式 Great/Ultra/Master）、Community Day 2018-01 起（首个皮卡丘）、等级 40→50（2020-11）→80（2025-10））", "上线现象（服务器峰值 50 倍预期崩溃、'three-step-glitch' 破坏追踪；Hanke 'we weren't provisioned for what happened'；早期 iOS 全 Google 账户权限争议）", "发行波折（日本因麦当劳赞助泄露推迟/法国因尼斯袭击推迟/韩国与中国大陆地图限制）", "数据（2016-09 破 5 亿下载/2019 初破 10 亿；2018-05 MAU 1.47 亿；首月 ~$206.5M（吉尼斯）；最快达 $500M/$600M；2017-02 破 $1B；2020 底累计 $6.46B；2020 为最大收入年（远程游玩功能助力）；2025 Scopely $3.5B 收购 Niantic 游戏部门）", "健康研究（用户日均多走 194 步；最活跃玩家多走 26%；Vox '可能是史上最大的无意健康潮流'）", "文化（旅游/博物馆/公园受益；事故与扰乱；普及 AR）", "评价（MC 69 'mixed'——社会现象受赞、玩法深度与崩溃受批；Guardian 2/5 'a great experience' 却不是好游戏；IGN 2018 史上第 100）", "世界锦标赛 2022-2024 入选"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Pokémon Go（game-000081）

## 核心体验
现实世界作为游戏内容的极限样本：地图是关卡、步行是资源（蛋孵化/Buddy 产糖）、地标是道馆。它把"走路"变成核心循环的资源输入——健康研究证实用户日均多走 194 步（Wikipedia）。

## 规则与状态转移（含最简伪代码）
- 状态：`(GPS 位置, 宝可梦收藏, 蛋/糖果, 道馆阵营, 活动日历)`；输入：`{现实移动, 投球, 转 Noble/道馆交互}`。

```text
位置:  GPS 驱动遭遇（水系近水域等——环境映射）
孵化:  蛋绑定步行距离（2/5/10km）——步数即资源
Buddy:  伴宝可梦按距离产糖
阵营:  三队道馆争夺 → Raid 团体战（传说级需协作）
活动:  Community Day/Go Fest → 时间地缘节律
```

## 输入与输出
- 输入：现实移动（核心）+ 投球手势（AR 捕捉）。
- 输出：AR 相机叠加、道馆争夺、蛋孵化演出、社区活动。

## 难度与学习曲线
难度不在操作而在**现实规划**（去哪、什么时候去、和谁去）——游戏难度被外置到现实世界（分析口径）。上线现象（服务器 50 倍峰值崩溃、three-step-glitch）证明其社会规模超出了任何测试预案。

## 关联机制与模式
- 机制：mechanic-000085（步行距离经济）
- 模式：pattern-000030（现实世界作为内容——地图/地标/社区三层内容化）
- 对照：与 game-000059（Hades 死亡叙事化）对照——同为"游戏外价值注入"：Hades 注入故事意义、GO 注入健康与社交价值（游戏收益外溢，分析口径）。
- 发行史：服务器崩溃/three-step-glitch/各国推迟（Wikipedia 全表）——现象级发行的工程与地缘档案。

## 设计权衡
- 优点：现实位置绑定使"内容"由真实世界供给（地标/社区/运动）；步数经济的外部性（健康研究正效应）；Community Day 的社区节律；$6.46B 累计收入与 10 亿+ 下载。
- 缺陷：MC 69（玩法深度与崩溃批评——Guardian 2/5 'great experience not a good game'）；权限与数据争议；地缘限制（中国/韩国）。
- 反例：与 game-000048（Subway Surfers 的虚拟 World Tour）对照——同为长线 liveops，GO 的内容来自现实世界轮转、SS 来自虚拟换景；liveops 内容的两种供给侧。
- 适用场景：LBS 游戏；健康行为改变设计。

## 可复现的最小版本与算法
GPS 位置→遭遇表映射+距离计数器+道馆状态机即可复现骨架；AR/地图服务为工程层。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2016-07-06 首发与全球波折 | Wikipedia |
| 玩法全项（孵化/Buddy/道馆/Raid/对战/Community Day） | Wikipedia |
| 上线现象（50 倍峰值/three-step-glitch） | Wikipedia |
| 数据（10 亿+/MAU 1.47 亿/$6.46B/Scopely $3.5B） | Wikipedia |
| 194 步/日健康研究 | Wikipedia |

## 推断与未知
- **未知**：遭遇分布的实时算法细节；道馆战平衡的内部参数。
- **推断（分析而非事实）**：步行距离经济的本质是把"游戏内资源生产"外包给玩家的现实行为——游戏与生活互换资源（分析）。
- MC 69 vs 社会现象的落差证明：评价体系（玩法深度）与产品价值（行为改变）可以完全脱钩（分析）。

## 创新延伸（可验证假设素材）
1. 步行经济的剂量研究（孵化距离 2/5/10km 对实际步行量的影响——194 步研究的扩展）。
2. 远程游玩功能（疫情期）对"现实绑定"设计哲学的冲击评估。
