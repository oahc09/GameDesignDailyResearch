---
id: game-000028
title: "The Witness"
aliases: ["见证者（中文通行译名）"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [ps4, pc, xbox_one, ios, mac]
release_year: 2016
creators: ["Jonathan Blow（Thekla, Inc.；Braid 作者）"]
core_loop: "探索开放岛屿 -> 遇到画线面板 -> 从样例归纳本区规则（无任何文字）-> 规则逐步复合 -> 环境本身也是谜题（隐藏面板）-> 山顶终极挑战"
mechanic_ids: [mechanic-000029]
pattern_ids: [pattern-000016]
quality_score: 4.58
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/The_Witness_(2016_video_game)"
    title: "The Witness (2016 video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-08"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2016-01-26 PS4/PC 发行与移植谱系", "Thekla/Blow、约七年开发、预算 $800k→自投约 $4M（Braid 收入）→负债→最终近 $6M", "玩法全项（开放岛屿 11 区域、约 650 画线面板、规则集演进——黑白方块/对称/环境线索、规则从不用文字解释、平均约 80 小时、可选限时 Challenge 与隐藏环境谜题的替代结局）", "销量（首周 10 万份约 $5M，接近 Braid 首年）", "MC 87 与两极评价（IGN/Destructoid 10/10；USgamer 2/5、Eurogamer 批评叙事自我沉溺、Wired 警告无引导致劝退）", "$39.99 一次性买断、拒绝 DRM", "Edge 史上最佳第 22；2022 恶搞作 The Looker"]
created_at: "2026-11-08"
updated_at: "2026-11-08"
---

# The Witness（game-000028）

## 核心体验
650 块画线面板，没有一句教程。每块面板都是一条**待归纳的规则**：为什么这条线过不去？观察相邻面板的成败样例，自己提出假设、测试、修正——规则语言（黑白方块/对称/ Tetris 形/环境投影）从未被言说。岛屿本身就是最大的谜题面板。

## 规则与状态转移（含最简伪代码）
- 状态：`(面板网格, 当前激活的规则集, 区域进度)`；输入：`{在面板上画线}`。

```text
面板判定:   画线须从起点到终点；逐格经过的符号触发对应规则判定
规则族:     黑白方块分离 / Tetris 形区域匹配 / 斜方块对 / 消除点 /
            对称双线 / 环境投影线索（无文字——全部由样例归纳）
教学:       每条新规则先给"只有它"的平凡样例 -> 复合 -> 反直觉应用
失败:       判定不过 -> 面板重置（零惩罚、即时重试）
环境谜题:   岛屿景观本身按面板规则"作画"——发现即解
```

## 输入与输出
- 输入：面板画线（唯一动作）+ 岛屿行走。
- 输出：面板判定反馈、环境谜题的视觉揭示、无文字的规则演化。

## 难度与学习曲线
难度=归纳能力本身。教学完全靠**样例序列的信息设计**（每条规则从可平凡归纳入手），Blow 估算平均 80 小时（Wikipedia）。失败零惩罚即时重试使归纳循环密度极高。两极评价的核心正在于此：无引导既是成就（IGN/Destructoid 10/10）也是劝退（USgamer 2/5；Wired 警告）。

## 关联机制与模式
- 机制：mechanic-000029（面板规则归纳语言）
- 模式：pattern-000016（零文本归纳教学）
- 对比：与 game-000006（Baba Is You）构成规则教学的两个极端——Baba 把规则**显式化为词块**，Witness 把规则**藏进样例**（CONTRASTS 边已建）。Baba 作者 Teikari 自述受 Snakebird（game-000030）影响最深（Wikipedia，Snakebird 条目）——谱系闭环。
- 渊源：Blow 七年开发、$6M 自筹负债——独立制作的成本极限样本（与 game-000007 Braid 的 $200k 对比：同作者的成本量级跃迁）。

## 设计权衡
- 优点：规则归纳把"学"本身变成乐趣（epiphany 时刻）；零文本让规则语言跨语言传播；环境谜题把"看"变成解谜。
- 缺陷：无引导的两极评价是结构性风险（Wired 的劝退警告）；线面板的统一输入使规则族的可视差异化承担全部认知分辨（黑白数量多的面板在低分辨率下难读，社区口径，标注）。
- 反例：Portal（game-000029）用 GLaDOS 语音+环境引导——同为无文本但保留叙事声音；Witness 连声音也弃用（除录音散落）。
- 适用场景：规则归纳型谜题；任何想把"教学"做成"玩法"的设计。

## 可复现的最小版本与算法
面板网格+规则族判定器+样例序列生成器即可复现教学结构（650 面板的内容层不可也不需复现）；开放岛屿渲染与玩法无关。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2016-01-26 发行；七年开发；成本 $800k→$4M→近 $6M | Wikipedia |
| ~650 面板、规则集演进、无文字、约 80 小时 | Wikipedia |
| 首周 10 万份（~$5M） | Wikipedia |
| MC 87 与两极评价（10/10 vs 2/5） | Wikipedia |
| $39.99 买断、拒绝 DRM | Wikipedia |

## 推断与未知
- **未知**：规则族的完整清单与各区域面板分布（社区有完整解法库，本日未核验 URL 不引用）；隐藏环境谜题总数。
- **推断（分析而非事实）**：约 80 小时的长度不是内容量而是**归纳步长的函数**——每条新规则需要足够样例才能被可靠归纳，样例不足则规则不可学；这使"教学密度"成为可调参数（hypothesis-000014 的立论点）。
- **推断（分析而非事实）**：两极评价的本质是归纳教学把"学习成本"前置——它对元游戏玩家（期望被教）是冒犯，对解谜玩家是尊重。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000014：每日规则归纳谜题（Witness 面板语言 × 每日稀缺）。
2. 归纳教学 API：把样例序列设计器做成工具（规则→自动生成教学序列），检验能否降低归纳谜题的内容生产门槛。
