---
id: game-000074
title: "Her Story"
aliases: ["她的故事（中文通行译名）"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [pc, ios, android]
release_year: 2015
creators: ["Sam Barlow（独立；前 Climax——Silent Hill: Origins/Shattered Memories 编剧；Indie Fund 众筹+Steam Greenlight；Unity）"]
core_loop: "在 L.O.G.I.C. 数据库中输入关键词 → 检索 271 段警方审讯剪辑（不可整段观看）→ 拼凑 1994 年丈夫失踪案 → 发现 Hannah/Eve 双重身份线索 → 对话窗确认结束"
mechanic_ids: [mechanic-000078]
pattern_ids: []
quality_score: 4.63
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Her_Story_(video_game)"
    title: "Her Story (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2015-06-24 iOS/OS X/Windows（纠误：非 2016-02）；Android 2016-06", "Barlow 独立开发（离开 Climax；Indie Fund 众筹；Greenlight 通过；Unity）", "玩法全项（interactive movie；L.O.G.I.C. 数据库关键词检索 271 段七次警方访谈剪辑（Viva Seifert 饰 Hannah）；访谈不可整段观看——碎片化发现；Reversi 小游戏与观看计数器）", "叙事（'Hannah' 或为双胞胎 Hannah/Eve 共用身份；真相刻意多义——双胞胎骗局/编造/解离性身份障碍；结局揭示玩家角色为 Sarah，Eve 之女；单一结局序列——聊天窗问是否完成）", "评价与奖项（MC 91 iOS/86 PC；TGA 2015 最佳叙事+最佳表演；IGF 2016 Seumas McNally 大奖+叙事奖；BAFTA 三奖；GDCA 三奖；Golden Joystick 突破奖；Polygon 2015 年度）", "销量（2015-08 破 10 万：Win 6 万/iOS 4 万）", "续作 Telling Lies（2019，Annapurna）"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Her Story（game-000074）

## 核心体验
检索即玩法：271 段审讯剪辑只能靠关键词检索（且不可顺序播放）——你输入什么词，决定你看见什么故事。真相刻意多义（双胞胎/编造/DID 三种解读并存），而玩家角色身份（Sarah）在结局才揭晓。

## 规则与状态转移（含最简伪代码）
- 状态：`(已观看剪辑集, 关键词历史)`；输入：`{输入关键词, 播放剪辑}`。

```text
检索:  关键词 → 匹配剪辑列表（按含词剪辑返回）
约束:  剪辑不可按序播放（只能检索发现）→ 信息结构由玩家自建
完成:  特定搜索达成 → 聊天窗"你完成了吗？" → 结局（单一序列）
真相:  多义并置（不作官方裁决）
```

## 输入与输出
- 输入：关键词文本检索（唯一核心输入）。
- 输出：FMV 剪辑（Seifert 表演）、检索结果列表、观看计数器。

## 难度与学习曲线
难度=**检索词汇的想象力**（用什么词搜决定发现什么）——设计者用剪辑的台词分布控制可发现性。多义叙事使"完成"是玩家自定义（分析口径）。

## 关联机制与模式
- 机制：mechanic-000078（关键词检索的数据库叙事）
- 谱系：与 game-000027（Obra Dinn）、game-000073（Golden Idol）构成演绎三兄弟——反馈密度谱（无反馈多义 vs 3 批量确认 vs 逐段填空锁定）；Barlow 后作 Telling Lies（2019）。
- 演出：Seifert 表演获 TGA 最佳表演（Wikipedia）——单人演员 FMV 的可行性证明。

## 设计权衡
- 优点：数据库检索的结构把"侦探工作"完整模拟（不可顺序观看=真实办案的碎片性）；多义叙事的解读自由；奖项横跨 TGA/IGF/BAFTA/GDCA 全线（Wikipedia）。
- 缺陷：检索不到关键词即卡关（无引导的硬门槛）；单一演员的观感局限。
- 反例：与 game-000073（Golden Idol 填空锁定）对照——Her Story 的反馈密度为零（无对错提示）→ Golden Idol 逐段反馈；演绎谱系的反馈密度三兄弟（Her Story→Obra Dinn→Golden Idol）。
- 适用场景：FMV 叙事；数据库玩法。

## 可复现的最小版本与算法
剪辑元数据索引+关键词检索+完成判定即可复现骨架；FMV 内容为人工拍摄层。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2015-06-24 发行（纠误：非 2016-02）；Barlow 独立 | Wikipedia |
| 玩法全项（271 剪辑/关键词检索/不可顺序） | Wikipedia |
| 多义叙事与单一结局序列 | Wikipedia |
| 奖项全表（TGA/IGF/BAFTA/GDCA） | Wikipedia |
| Telling Lies 续作 | Wikipedia |

## 推断与未知
- **未知**：271 剪辑的检索匹配算法细节；多义性的官方意图分层。
- **推断（分析而非事实）**："不可顺序观看"是数据库玩法的灵魂——若可顺序播放，检索即失去意义；约束本身是设计（分析）。
- 结局的聊天窗（"你完成了吗？"）把结束权交给玩家——与 game-000064（Stanley 结局重置）同为"玩家定义完成"（分析）。

## 创新延伸（可验证假设素材）
1. 检索引导的剂量研究（提示常用词 vs 全自由检索的完成率）。
2. 多义叙事的解读分布研究（玩家社区对真相的分裂——接 pattern-000014 文化层）。
