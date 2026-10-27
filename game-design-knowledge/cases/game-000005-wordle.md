---
id: game-000005
title: "Wordle"
aliases: []
genres: [casual, puzzle, hybrid]
subgenre_tags: [word, wordle_like, hypercasual]
platforms: [web]
release_year: 2021
creators: ["Josh Wardle"]
core_loop: "读上一轮颜色反馈 -> 提交 5 字母猜测 -> 逐位裁决上色（绿/黄/灰）-> 6 次内猜中或失败 -> 次日全球同题重来"
mechanic_ids: [mechanic-000005]
pattern_ids: [pattern-000003]
quality_score: 4.65
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: "https://www.nytimes.com/games/wordle/index.html"
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Wordle"
    title: "Wordle - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-27"
    source_type: encyclopedia
    evidence_level: B
    supports_claims: ["规则全项（6 次/5 字母/三色/重复封顶/Hard Mode）", "词表 2,309 与筛选史", "每日一题与『稀缺感』自述", "emoji 分享的社区起源", "NYT 收购与增长数据", "高对比度无障碍模式"]
  - url: "https://www.nytimes.com/games/wordle/index.html"
    title: "Wordle — The New York Times（官方页面）"
    publisher_or_author: "The New York Times"
    published_at: null
    accessed_at: "2026-10-28"
    source_type: official_page
    evidence_level: A
    supports_claims: ["官方规则摘要『Get 6 chances to guess a 5-letter word』", "现为 NYT Games 旗下每日玩法"]
  - url: "https://boingboing.net/2022/01/24/six-things-wordles-creator-got-right.html"
    title: "Six things Wordle's creator got right"
    publisher_or_author: "Boing Boing"
    published_at: "2022-01-24"
    accessed_at: "2026-10-27"
    source_type: analysis_article
    evidence_level: B
    supports_claims: ["Mastermind 式线索结构的类比", "设计决策分析"]
created_at: "2026-10-27"
updated_at: "2026-10-27"
---

# Wordle（game-000005）

## 核心体验
每天全球玩家猜同一个五字母词，6 次机会，每次提交后逐位翻出绿（位置对）/黄（字母在词中位置错）/灰（不在词中）。它把"解谜的智力快感 + 每天只来一次的稀缺 + 结果可炫耀"压进两分钟的会话里。

## 规则与状态转移（含最简伪代码）
- 状态：`(guess_history, colors_history, remaining, keyboard_state)`；输入：`{5 字母提交}`（须在合法词表内）。
- 重复字母封顶：黄/绿标记数不超过答案中该字母出现次数，多余显示灰（Wikipedia 例：robot 中的 o）。
- Hard Mode：已揭示的绿/黄线索必须在后续猜测中沿用。

```text
feedback(guess, answer):            # 可完全形式化的确定性裁决函数
  result = [grey × 5]; count = Counter(answer)
  for i in 0..4: if guess[i] == answer[i]: result[i] = green; count[guess[i]] -= 1
  for i in 0..4: if result[i] != green and count[guess[i]] > 0:
      result[i] = yellow; count[guess[i]] -= 1
  return result
win:  第 n 次 guess == answer
lose: 第 6 次未中；次日新词（全球同题）
```

## 输入与输出
- 输入：键盘/屏幕键盘提交五字母词。
- 输出：逐位翻牌、键盘键位染色、结果统计；分享产物为无剧透 emoji 方格。

## 难度与学习曲线
难度不由程序调节而由词表与玩家词汇决定；答案库 2,309 词由创始人之友 Palak Shah 从约 13,000 词中筛出常见词（Wikipedia）。失败可读性极高（信息每轮单调递增），且失败不惩罚——次日再来。可访问性：深色主题 + 高对比度模式（橙/蓝替代绿/黄，服务色觉障碍玩家）（Wikipedia）。

## 关联机制与模式
- 机制：mechanic-000005（限次颜色裁决）
- 模式：pattern-000003（每日稀缺+无剧透分享）
- 对比：与 game-000001 构成留存引擎的两极——无限重开 vs 每日限量。

## 设计权衡
- 优点：确定性反馈函数完全可形式化；每日同题把私人成绩变成公共谈资，分享产物自带传播力（2021-12 底 Twitter 病毒式扩散，Wikipedia）；零内容消耗（词表一次备好）。
- 缺陷：每日一次封顶压制重度会话；错过感（FOMO）与挫败在每日限 1 次下被放大；词表维护与内容合规成本真实存在（NYT 收购后移除敏感词，Wikipedia）。
- 反例：同结构的每日数独早已有之——其爆发更多来自分享产物的社交设计而非规则原创（Boing Boing 分析，Mastermind 血统）。
- 适用场景：答案含信息量、结果可编码的谜题；用户基数重叠于同一社交网络的场景。

## 可复现的最小版本与算法
上列 `feedback()` 即全部核心逻辑（确定性、可单测）；再需要一份答案词表与合法猜测词表、一个按日期取词的种子函数。无需任何游戏引擎。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2021-10 公开（此前自用；2013 原型 "Mr. Bugs' Wordy Nugz"） | Wikipedia |
| 规则全项（含重复封顶与 Hard Mode） | Wikipedia + NYT 官方页 |
| 答案库 2,309；词表筛选史 | Wikipedia |
| 每日一题全球同题，"sense of scarcity"（Wardle 自述） | Wikipedia |
| emoji 分享源自新西兰玩家、2021-12 病毒传播 | Wikipedia |
| 2022-01-31 NYT 收购（low seven figures） | Wikipedia |
| 增长：90 人（2021-11-01）→ 30 万+ → 200 万+；2023 年 48 亿次游玩 | Wikipedia |
| 高对比度无障碍模式 | Wikipedia |

## 推断与未知
- **未知**：NYT 接手后词表与裁决实现的私有变更细节；原始前端源码未在本次检索中定位到可靠仓库（未登记，避免编造）。
- **推断（分析而非事实）**："全球同题"是分享行为成立的前提——非同题则炫耀性比较失效，传播链条断裂。

## 创新延伸（可验证假设素材）
1. 反馈介质替换：把颜色换成几何/音高，测试非语言领域的同构传播力。
2. 见 hypothesis-000002：每日种子 + 结果编码嫁接到时机类玩法。
