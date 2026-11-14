---
id: game-000048
title: "Subway Surfers"
aliases: ["地铁跑酷（中文通行译名）", "SS"]
genres: [action, hybrid]
subgenre_tags: [hypercasual, endless_runner]
platforms: [ios, android, windows, web（Poki）]
release_year: 2012
creators: ["SYBO Games & Kiloo（丹麦双公司共研；导演 Christian Balazs）"]
core_loop: "四向滑动躲避列车/路障 -> 硬币收集与角色/滑板解锁 -> hoverboard 30 秒免死 -> 周期猎捕与每日词猎 -> World Tour 约三周一换景"
mechanic_ids: [mechanic-000049]
pattern_ids: [pattern-000023]
quality_score: 4.30
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Subway_Surfers"
    title: "Subway Surfers - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at": "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2012-05-24 发行（Kiloo 发行至 2020-02-13 后 SYBO 自行发行；Miniclip 2022 拟收购 SYBO）", "规则全项（四向滑动、更快的滑动得分更高、碰撞即败可用钥匙/广告复活、hoverboard 双击开启约 30 秒、金币/钥匙/磁铁/超级鞋/x2/神秘盒/弹簧跳、18 角色 17 滑板、每日词猎与赛季猎捕）", "World Tour：2013-01 起约三周一换景（季节节日为四周）", "下载记录（2018-03 首个破 10 亿的 Google Play 游戏；2018-05 破 20 亿；2019-12 达 27 亿且为 App Annie 口径 2012-2019 最多下载手游）", "Unity 制作；动画剧集（2018-06 SYBO 频道 11 集）；Tag 衍生（Apple Arcade 2022）；续作 Subway Surfers City（2026-02-26）", "MC 71（评价两极：视觉/打磨受赞、操作与重复性受批；Webby 提名）；TikTok 'sludge content' 现象"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# Subway Surfers（game-000048）

## 核心体验
四向滑动的无尽跑酷+长线 liveops：跑、跳、滚、换道四动作构成全部输入；滑板 30 秒免死提供"宽容资源"；World Tour 约三周一换景维持十余年更新节律——它是"下载量神话与评分平庸"共存的样本（27 亿下载 vs MC 71）。

## 规则与状态转移（含最简伪代码）
- 状态：`(车道位置, 硬币/钥匙, 滑板状态, 复活资源, World Tour 景点)`；输入：`{上跳/下滚/左换道/右换道}`。

```text
滑动:  四向语义（跳/滚/左/右）；更快滑动得分更高（滑动速度也是输入）
免死:  hoverboard 双击开启约 30 秒（宽容资源）；碰撞即败可钥匙/广告复活
收集:  硬币/磁铁/超级鞋/x2/神秘盒 → 角色与滑板解锁（18 角色/17 滑板）
liveops: 每日词猎（Word Hunt）+ 赛季猎捕 + World Tour 约三周一换景
```

## 输入与输出
- 输入：四向滑动（滑动速度=得分系数——输入强度作为输入维度）。
- 输出：换景演出（World Tour）、角色滑板收集、复活/滑板 UI。

## 难度与学习曲线
难度曲线平坦（MC 71 的"重复性"批评口径），留存靠 liveops 节律（每日词猎/三周一换景）而非难度——长线运营结构替代难度曲线的样本（分析口径）。

## 关联机制与模式
- 机制：mechanic-000049（四向滑动+hoverboard 宽容资源+World Tour 节律）
- 模式：pattern-000023（输入语义轴——"四向滑动"位，且滑动速度作为输入强度是其特色）
- 对照：与 game-000002（Crossy Road）同属 Frogger 无尽化谱系——Crossy 是格跳离散、SS 是滑动连续（分析）。

## 设计权衡
- 优点：滑动速度计分把"怎么滑"纳入技能；hoverboard 免死资源+广告/钥匙复活构成多层宽容（失败光谱中间态的完整工程）；World Tour 节律十余年维持内容新鲜（27 亿下载的运营侧证据）。
- 缺陷：评分平庸（MC 71）——重复性与操作批评（Wikipedia 口径）；复活广告的广告化批评（推断——结合复活机制与行业常态，标注为分析）。
- 反例：与 game-000002（Crossy Road 付费单次 $2.99 一次性买断+跨屏）对照——同为无尽过街/跑酷，商业路线完全不同（免费 liveops vs 买断）。
- 适用场景：长线 liveops 跑酷；宽容资源的完整工程样本。

## 可复现的最小版本与算法
车道滑动状态机+障碍生成器+hoverboard/复活状态机即可复现核心循环；World Tour 为内容与运营层。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2012-05-24 发行；SYBO/Kiloo 双公司；导演 Balazs | Wikipedia |
| 规则全项（四向滑动/滑动速度计分/hoverboard 30 秒/复活） | Wikipedia |
| World Tour 约三周一换景（2013-01 起） | Wikipedia |
| 下载记录（10 亿→20 亿→27 亿；2012-2019 最多下载） | Wikipedia |
| MC 71 与批评口径；TikTok 现象 | Wikipedia |

## 推断与未知
- **未知**：SYBO 创始人名单（Wikipedia 明确不载——不采信）；收入数据（未载）；Android 确切发行日。
- **推断（分析而非事实）**：滑动速度计分（"faster swiping yields more points"——Wikipedia）把输入强度变成分数维度——罕见的"输入努力度计分"设计（多数游戏只认结果）。
- 三周一换景的 World Tour 节律是 liveops 内容通胀的行业基准线（分析）。

## 创新延伸（可验证假设素材）
1. 滑动速度计分剥离实验：移除速度系数，检验其对参与感的影响（输入强度作为维度的验证）。
2. World Tour 节律参数：换景周期（2/3/4 周）与回流的剂量效应（liveops 参数化）。
