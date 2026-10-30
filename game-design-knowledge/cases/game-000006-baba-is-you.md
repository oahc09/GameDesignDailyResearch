---
id: game-000006
title: "Baba Is You"
aliases: ["BABA IS YOU", "巴巴是你"]
genres: [puzzle, hybrid]
subgenre_tags: [one_touch]
platforms: [pc, nintendo_switch, ios, android]
release_year: 2019
creators: ["Arvi Teikari（Hempuli / Hempuli Oy，芬兰）"]
core_loop: "观察词块拼出的现行规则 -> 推动词块改写规则 -> 规则重定义对象属性与胜负条件 -> 在新规则下移动到达 WIN 对象"
mechanic_ids: [mechanic-000007]
pattern_ids: [pattern-000005]
quality_score: 4.75
confidence: verified
verification_status: source_reviewed
original_url: "https://www.hempuli.com/games/games.php?title=baba"
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Baba_Is_You"
    title: "Baba Is You - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-30"
    source_type: encyclopedia
    evidence_level: B
    supports_claims: ["NGJ 2017 冠军与 ICE IS NOT MELT 起点故事", "词块语法（名词/IS/HAS/AND/NOT/属性词）与 3+ 对齐成规则", "改写与锁定规则（ROCK IS FLAG / ROCK IS ROCK）", "无 IS YOU 时只能撤销或重开", "发行时间线与 481 关", "获奖记录与销量档位", "MMF2+Lua 技术栈"]
  - url: "https://www.hempuli.com/games/games.php?title=baba"
    title: "Hempuli 官网 Baba Is You 页"
    publisher_or_author: "Arvi Teikari"
    published_at: null
    accessed_at: "2026-10-30"
    source_type: official_page
    evidence_level: A
    supports_claims: ["官方页面存在与开发者身份（检索命中，页面未全文抓取）"]
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

# Baba Is You（game-000006）

## 核心体验
每一关的规则以词块形式摆在棋盘上（如 `BABA IS YOU`、`WALL IS STOP`、`FLAG IS WIN`），玩家推动这些词块重新拼组规则——改变"我操纵谁"（X IS YOU）、"什么挡路"（X IS STOP）、"什么算赢"（X IS WIN）。解谜的单位不是"怎么走"，而是"世界按什么规则运行"。

## 规则与状态转移（含最简伪代码）
- 状态：`(网格内对象集合, 词块布局, 现行规则集, 操纵对象集合)`；输入：四方向推（Sokoban 式移动语义）。

```text
parse_rules(grid):
  rules = {}
  for 每行/每列的连续词块段:
    if 段形如 [NOUN (AND NOUN)* (IS|HAS) (PROPERTY|NOUN)+]:
        rules += 该规则
  # 无效断句不生效；固定词块可锁死规则
apply(rules):
  每个 NOUN 类对象获得规则赋予的属性（YOU=可操纵, STOP=阻挡, WIN=胜利物, SINK/DEFEAT=毁灭…）
  NOUN IS NOUN（如 ROCK IS FLAG）→ 全体变形；ROCK IS ROCK → 锁定不可变形
win:  存在对象同时具有 YOU 与 WIN（或重叠）
lose: 无强制失败——失去全部 YOU 对象时仅能 UNDO/RESET（MOVE/SHIFT 可临时断开 IS YOU）
```

## 输入与输出
- 输入：方向推块（单步、可撤销）。
- 输出：现行规则高亮显示、属性变化即时反映在对象外观、UNDO/RESET 两级回退。

## 难度与学习曲线
上手即懂"推词块改规则"，深度来自规则间组合的**解空间爆炸**：481 关（231 本体 + 88 Museum + 162 New Adventures，Wikipedia）靠手工设计控制复杂度曲线。后期难度波动是主要批评点（Game Informer/GameSpot，转述）。失败几乎不存在——UNDO 无限次，把"试错成本"压到零，难度全部来自"想不到"。

## 关联机制与模式
- 机制：mechanic-000007（词块规则重写）
- 模式：pattern-000005（规则本身作为可操纵对象）
- 对比：Sokoban 同为推块语义，但其规则不可变——Baba 把"规则的固定性"本身变成了可变状态（CONTRASTS_WITH 关系留待 Sokoban 入库后补建）。

## 设计权衡
- 优点：单一机制（词块语法）生成几乎无限的谜题空间；开发者自述起点只是一句 `ICE IS NOT MELT`（NGJ 2017 主题 "Not There"）；"对象无默认属性"的设计决定让规则成为唯一事实源。
- 缺陷：解空间大意味着测试覆盖难——后期难度不可控；语法系统对内容作者是高门槛（需同时是设计者与逻辑学家）。
- 反例：固定规则谜题（如标准 Sokoban）可以用 Solver 穷举；Baba 的规则可变性使状态空间按规则集指数扩张，自动求解成本急剧上升。
- 适用场景：需要"啊哈"密度高于操作密度的谜题；规则系统本身就希望成为玩具的场景。

## 可复现的最小版本与算法
词块语法解析器（正则可表达）+ 网格推块 + 属性表即可复现核心循环；上列伪代码即全部规则骨架。开发栈为 Multimedia Fusion 2 + Lua（Wikipedia），引擎无关性成立。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| NGJ 2017 冠军；主题 "Not There"；`ICE IS NOT MELT` 起点 | Wikipedia |
| 词块语法与 3+ 对齐成规则；变形与锁定 | Wikipedia |
| Steam/Switch 2019-03-13；移动端 2021-06-22；编辑器更新 2021-11-17 | Wikipedia |
| 481 关构成；MMF2+Lua | Wikipedia |
| IGF 2018 Best Student Game + Excellence in Design；GDCA Best Design + Innovation | Wikipedia |
| Metacritic 84 (Switch) / 87 (PC) | Wikipedia |

## 推断与未知
- **未知**：官方页面全文未抓取（检索命中后未深读）；游戏内部解法搜索器是否存在未查证；销量精确数字仅有"发售月最畅销之一"的档位描述。
- **推断（分析而非事实）**：UNDO 无限次与"无失败"设计使该作把难度全部押在洞察上，这与 pattern-000004（撤销即宽恕）在谜题域同构，但 Baba 的 UNDO 是导航工具而非核心机制。

## 创新延伸（可验证假设素材）
1. 词块规则 × 物理合并（hypothesis-000004 备选方向）：让部分词块受重力影响，规则在物理坍缩中动态生灭。
2. 每日一题（pattern-000003 嫁接）：全球同题的 Baba 关卡 + 解法步数方格分享。
