---
id: game-000043
title: "Bejeweled"
aliases: ["宝石迷阵（中文通行译名）", "Diamond Mine（原名）"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [web, pc, 多平台移植]
release_year: 2000
creators: ["PopCap Games（设计 Jason Kapalka；编程 Brian Fiete；商务 John Vechey——三创始人）"]
core_loop: "交换相邻宝石成三连 -> 消除与级联下落 -> 无效交换回退 -> 无限游玩（无失败态的经典模式）"
mechanic_ids: [mechanic-000044]
pattern_ids: []
quality_score: 4.75
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Bejeweled_(video_game)"
    title: "Bejeweled (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2000 以 Diamond Mine 名义网页发行→MSN Games 改名 Bejeweled（因与 Diamond Mines 相似——非商标诉讼口径，纠误）", "三创始人 Kapalka/Fiete/Vechey；原名 Sexy Action Cool→PopCap（因家庭受众定位）", "玩法全项（相邻交换三连/级联下落/无效交换回退）", "无计时模式起源自教程、因玩家正反馈成为定义模式", "Deluxe 2001-05-30 与移植谱系；续作谱系（Bejeweled 2/Twist/Blitz/3/Stars）", "销量（2008 年 1.5 亿下载、Deluxe 1000 万；2010 三作合计 5000 万）", "开创休闲游戏行业（十年内 $3B 市场值）与三消品类（Puzzle Quest/Candy Crush/Gardenscapes 谱系；2014 年 App Store 三消超 2200 款）", "世界电子游戏名人堂 2020（首个手机游戏）", "评价（初期因技能门槛低被评测忽视；CGW 年度最佳解谜+名人堂——除 Tetris 外唯一）"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# Bejeweled（game-000043）

## 核心体验
Match-3 品类的商业奠基者：交换相邻宝石成三连、级联下落。它的历史意义在"无失败态"——经典模式没有 Game Over，只有持续的高分追求，这与 Tetris 的死亡压力相反（CGW 把它当作除 Tetris 外唯一的解谜名人堂成员）。

## 规则与状态转移（含最简伪代码）
- 状态：`(宝石网格, score)`；输入：`{相邻交换}`。

```text
交换:   相邻宝石互换；成行/列 ≥3 同色 → 消除
        无效交换 → 回退（无惩罚试探——与推箱死锁相反）
级联:   消除后上方下落 → 新三连连锁（pattern-000002 谱系源头）
模式:   计时模式为默认；无计时模式起源自教程、因玩家正反馈成为定义模式
终局:   经典模式无 Game Over（无失败态——休闲设计的奠基决定）
```

## 输入与输出
- 输入：相邻交换（单指拖拽）。
- 输出：级联消除的视觉与音效、分数跳字。

## 难度与学习曲线
学习曲线近零（一次交换即完成教学）。难度全在"高分优化"（自设目标）。初期被评测忽视的理由（技能门槛低）与后来的行业地位构成认知反差——CGW 名人堂（除 Tetris 外唯一解谜）。

## 关联机制与模式
- 机制：mechanic-000044（交换式三消与级联）
- 谱系：Miner Speed/Candy Crush（game-000037）承其衣钵——pattern-000020 克隆/衍生的上游；Puzzle Quest（game-000019）为其融合下游——本卡把 KB 内两条谱系线正式接通。
- 模式变体：无计时模式起源自教程（Wikipedia）——"教程即玩法"的意外案例（与 pattern-000016 的教学设计对照：Bejeweled 的教程是被玩家投票选中的玩法）。

## 设计权衡
- 优点：无失败态 + 级联的"禅"模式开创休闲行业（十年 $3B，Wikipedia）；无效交换回退=试探零成本；三消规则的普适输入（单指）。
- 缺陷：深度上限有限（无计时模式下高分优化空间浅，分析）；原创性争议（交换三消的发明归属——Wikipedia 未提 Shariki，本卡不展开）。
- 反例：与 game-000036（Sokoban 死锁）对照——同为网格谜题，Bejeweled 取消失败态、Sokoban 把死锁做成核心；休闲/硬核的两个极点。
- 适用场景：休闲三消的一切变体（PQ/CCS/Gardenscapes 谱系上游）。

## 可复现的最小版本与算法
网格+交换判定+级联下落即可复现（百行级）；"无效交换回退"是零成本试探的关键件。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2000 Diamond Mine→Bejeweled 改名（Diamond Mines 相似） | Wikipedia |
| 三创始人（Kapalka/Fiete/Vechey）与 PopCap 更名史 | Wikipedia |
| 无计时模式起源自教程 | Wikipedia |
| 1.5 亿下载（2008）/5000 万套（2010） | Wikipedia |
| 休闲行业奠基（$3B/十年）与名人堂 2020 | Wikipedia |

## 推断与未知
- **未知**：交换三消机制的首创归属（Wikipedia 未载 Shariki 或更早先例——不展开）；Blitz freemium 细节（Wikipedia 本页未载）。
- **推断（分析而非事实）**："教程成为定义模式"是玩家行为改写设计的罕见案例——设计者的默认（计时）被玩家的自发选择推翻；倾听行为数据即设计（与 STS 数据驱动平衡 game-000020 同精神）。
- 无失败态与级联的组合是其"禅"感的机制来源（分析）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000020：无计时/计时模式的行为差异量化。
2. 回退试探设计：Sokoban 式谜题加入"无效交换回退"（试探零成本）的对照研究。
