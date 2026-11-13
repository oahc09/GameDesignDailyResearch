---
id: game-000035
title: "Threes!"
aliases: ["Threes", "小3传奇（中文通行译名）"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [ios, android, xbox_one, pc]
release_year: 2014
creators: ["Sirvo（设计 Asher Vollmer；美术 Greg Wohlwend；作曲 Jimmy Hinson；此前合作 Puzzlejuice）"]
core_loop: "滑动全盘移动一格 -> 1+2 合成 3 -> 同倍数合并翻倍 -> 新块生成有预览 -> 无路可走即终局 -> 按稀有度计分"
mechanic_ids: [mechanic-000036]
pattern_ids: [pattern-000020, pattern-000011]
quality_score: 4.85
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Threes"
    title: "Threes - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-13"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2014-02-06 iOS 与移植谱系（Steam 十周年版 2024-02-06）", "Sirvo 三人组与 Unity", "规则全项（1+2→3、3 的倍数翻倍、全盘一格滑动、下块颜色预览、按稀有度计分、最高标准牌 6144+秘密三角牌结束游戏）", "开发（一夜原型+14 个月迭代；测试过约 24 个主题被否、经 Zach Gage 建议回归数字）", "克隆波（数周内 Fives/1024/2048；团队困惑并批评 2048 设计——'Commander Keen 对 Super Mario'类比）", "45,000 字 postmortem", "MC 92；Apple Design Award 2014；Nicola Salmoria（MAME 作者）写过 AI（TouchArcade 口径）"]
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

# Threes!（game-000035）

## 核心体验
归属核验完成（W44/W45 周报列出的最高优先待办）：Threes! 的合并规则是**非对称特例**——1+2=3 是唯一不同值合并，其余全部同值翻倍（3 的倍数）；计分按牌面稀有度而非面值。这两处非标准设计正是它与 2048 克隆的分水岭。

## 规则与状态转移（含最简伪代码）
- 状态：`(4×4 网格, 生成队列（颜色预览）, score)`；输入：`{四向滑动}`。

```text
滑动:   全盘同向移动一格（能动的都动一格，非滑到底）
合并:   1+2 -> 3（唯一特例）
        3+3 -> 6；6+6 -> 12；…（3×2^n 翻倍）
生成:   每次有效滑动生成一块（低值为主，颜色预览下一块）
计分:   Σ(稀有度权重 × 牌面)   # 按稀有度而非面值——高牌权重设计
彩蛋:   两个 6144 合成秘密三角牌 -> 立即结束游戏
```

## 输入与输出
- 输入：四向滑动（全盘一格制，2048 的滑到底制与之相反）。
- 输出：下一块颜色预览、合并动画与角色语音（牌面人格，独立开发者配音）。

## 难度与学习曲线
一夜原型、14 个月迭代、约 24 个主题被测试后否决（寿司/象棋/怪物/西兰花汤…），经 Zach Gage 建议回归数字（Wikipedia）——内容主题探索的失败率本身就是方法论证据。

## 关联机制与模式
- 机制：mechanic-000036（特例合并与稀有度计分）
- 模式：pattern-000020（克隆波反超原作——Threes→2048 是 KB 内第三次该现象）；pattern-000011（求解器界定的深度谱——Salmoria AI，TouchArcade 口径）
- 对照：与 game-000015（2048）CONTRASTS_WITH——合并规则非对称 vs 纯倍数、计分稀有度 vs 面值、一格 vs 滑到底、生成预览 vs 无预览。

## 设计权衡
- 优点：非对称合并规则创造"3 是种子"的独特节奏；稀有度计分让 768 牌比 1536 牌可能更值钱——决策深度的来源；45,000 字 postmortem 成为公开设计教材。
- 缺陷：14 个月对一夜原型 2048 的市场劣势；付费 $1.99 vs 免费 2048 的商业劣势（团队"puzzled"——Wikipedia）。
- 反例：2048 用更简单的规则+免费+开源反超——设计深度与传播力负相关的著名案例对。
- 适用场景：需要"决策深度而非操作深度"的滑块谜题。

## 可复现的最小版本与算法
网格+非对称合并函数+稀有度计分即可复现；Salmoria AI 存在（求解器谱系，pattern-000011）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2014-02-06 iOS；Sirvo 三人组 | Wikipedia |
| 规则全项（1+2→3 特例/翻倍/一格制/稀有度计分/三角牌彩蛋） | Wikipedia |
| 一夜原型+14 个月+24 主题否决+Zach Gage 建议 | Wikipedia |
| 45,000 字 postmortem；克隆波与批评口径 | Wikipedia |
| MC 92/Apple Design Award 2014/Salmoria AI | Wikipedia |

## 推断与未知
- **未知**：稀有度权重的精确表；生成队列的概率分布（Wikipedia 只确认颜色预览）。
- **推断（分析而非事实）**：1+2 特例的深层作用是**制造不对称的资源语义**（1/2 是原料、3 是第一资产）——2048 取消特例后原料与资产同质，决策变浅但更易学；这是两个作品分岔的设计学解释。
- 团队对克隆"puzzled"与批评（Keen vs Mario 类比）为事实层；其市场结果的反讽为分析层。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000017：稀有度计分 × 面值计分的玩家行为对比。
2. 归属核验闭环：W44 周报列出的"Threes! 归属"待办在此完成——Vollmer/Wohlwend/Hinson 三人组（Wikipedia 确认）。
