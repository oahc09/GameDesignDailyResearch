---
id: game-000089
title: "Journey"
aliases: ["风之旅人（中文通行译名）", "Journey"]
genres: [puzzle, action, hybrid]
subgenre_tags: []
platforms: [ps3, ps4, pc, ios]
release_year: 2012
creators: ["thatgamecompany（导演 Jenova Chen；制作人 Robin Hunicke；作曲 Austin Wintory——首个格莱美提名游戏配乐；团队 7→18 人；开发三年余，最后阶段公司破产）"]
core_loop: "长袍旅人向远山行进 → 围巾符文充能飞行 → 歌声唱活灰布成桥 → 匿名旅伴（仅以吟唱沟通，结账前无名）→ 三小时线性朝圣 → 字幕揭示全程旅伴真名"
mechanic_ids: [mechanic-000093]
pattern_ids: []
quality_score: 4.80
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Journey_(2012_video_game)"
    title: "Journey (2012 video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2012-03-13 北美 PSN 发行（PS4 2015-07-21/PC·iOS 2019 Annapurna）", "thatgamecompany/Chen 导演/Hunicke 制作/Wintory 配乐", "玩法全项（长袍旅人向远山线性行进、围巾符文充能飞行、红布充能机制、唱活灰布成桥、匿名 drop-in 多人——只能吟唱不能文字，名字在字幕才显示；约 2-3 小时）", "开发（Flower 后 2009 起、三年余（Sony 预期一年）、7→18 人、最后阶段公司破产、部分开发者未获报酬）", "叙事（Joseph Campbell 单一神话结构；沙漠融合中东/阿拉伯/中国/西藏影响）", "音乐（Wintory 单主题构建——大提琴=玩家（Tina Guo 演奏）；马其顿 Radio 交响乐团录制；首个格莱美提名游戏配乐 2013）", "MC 92 (PS3/PS4)；北美/欧洲最快销售 PSN 游戏", "奖项（IGN/GameSpot/GDC Choice/DICE 八项/五项 BAFTA 含游戏设计与原创音乐）；批评：时长短与刻意节奏", "Guardian 21 世纪百佳第 48"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Journey（game-000089）

## 核心体验
匿名旅伴设计：你与一位陌生人同行整段朝圣，只能用吟唱沟通（无文字/无 ID），名字在片尾字幕才揭示——**匿名使合作纯粹**（Wikipedia：drop-in 多人不可语言）。三小时的沙漠朝圣，Campbell 单一神话结构，首个格莱美提名游戏配乐。

## 规则与状态转移（含最简伪代码）
- 状态：`(位置/围巾充能符文, 红布状态, 旅伴配对)`；输入：`{移动, 吟唱}`。

```text
围巾:  符文充能 → 飞行时长（红布附近自动充能；光符延长围巾）
歌声:  唱活灰布 → 变红成桥/开路（协作解谜——双人合唱更强）
旅伴:  匿名 drop-in 配对 → 只能吟唱沟通 → 字幕揭示真名
时长:  约 2-3 小时线性朝圣
```

## 输入与输出
- 输入：移动+吟唱（两键极简）。
- 输出：沙丘滑翔、围巾符文光效、Wintory 大提琴主题（跟随玩家状态变奏）。

## 难度与学习曲线
无失败态与无文字——难度=**非语言协作默契**（何时吟唱、如何互相充能）。约 2-3 小时短评被"刻意节奏"辩护（Wikipedia 批评口径与荣誉并载）。

## 关联机制与模式
- 机制：mechanic-000093（匿名吟唱旅伴）
- 对照：与 game-000064（Stanley 旁白博弈）对照——同为"沟通设计"：Journey 移除文字沟通、Stanley 用文字制造不可沟通；沟通设计的两极。与 pattern-000016（零文本教学）同域——Journey 把"零文本"从教学扩展到协作。
- 谱系：thatgamecompany 的 flow/Flower→Journey——"情绪优先"设计谱（Chen 口径）。

## 设计权衡
- 优点：匿名+吟唱的合作纯度（无身份焦虑/无对错评价）；单一神话结构的朝圣叙事；Wintory 单主题变奏的音乐架构（首个格莱美提名）；MC 92 + 五项 BAFTA + DICE 八项。
- 缺陷：时长短与刻意节奏批评（Wikipedia 并载）；最后阶段公司破产（Chen 自述，Wikipedia）——情绪优先的生存代价。
- 反例：与 game-000044（Pong 对称竞技）对照——同为双人，Pong 的沟通是对抗本身、Journey 的沟通是陪伴本身；双人设计的对抗/陪伴分岔。
- 适用场景：情绪优先的协作玩法；匿名社交设计。

## 可复现的最小版本与算法
围巾充能+吟唱判定+匿名配对系统即可复现核心循环；情感密度来自美术/音乐的执行（Wintory 单主题变奏法）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2012-03-13 PSN 发行；Chen/Hunicke/Wintory | Wikipedia |
| 玩法全项（围巾符文/唱活灰布/匿名旅伴/2-3 小时） | Wikipedia |
| 开发（三年余/破产/7→18 人） | Wikipedia |
| 格莱美首提/MC 92/五项 BAFTA/DICE 八项 | Wikipedia |

## 推断与未知
- **未知**：旅伴配对的匹配算法细节；吟唱的音高组合全表。
- **推断（分析而非事实）**：匿名+音乐沟通剥离了身份与语言——合作不再有"评价"与"误解"，只剩节奏配合；这是对 toxic 多人文化的设计回答（分析）。
- 公司破产与'未获报酬开发者'（Wikipedia）证明情绪优先的商业代价——艺术成就与生存的张力是该模式的永恒命题（分析）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000038：匿名 vs 实名旅伴的协作行为对照。
2. 单主题音乐变奏的复现研究（Wintory 架构的程序化实现）。
