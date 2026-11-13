---
id: game-000031
title: "QWOP"
aliases: ["QWOP 跑步"]
genres: [puzzle, action, hybrid]
subgenre_tags: []
platforms: [web, ios, android]
release_year: 2008
creators: ["Bennett Foddy（牛津哲学家，自修游戏设计）"]
core_loop: "Q/W 控大腿、O/P 控小腿 -> 布娃娃物理下寻找步态节奏 -> 倒地即失败（可爬回起点继续）-> 自设目标（5 米/100 米）"
mechanic_ids: [mechanic-000032]
pattern_ids: [pattern-000018]
quality_score: 4.73
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/QWOP"
    title: "QWOP - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-13"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2008-11 浏览器版（Flash/HTML5）、iOS 2010-12-13、Android 2013（Noodlecake）", "Foddy 为牛津哲学家（论文拖延中自修游戏设计）", "规则全项（Q/W 大腿、O/P 小腿、R 重开；移动版拇指菱形盘）", "难度评价（Kotaku：'may not be fun in the traditional sense'）", "Foddy 设计语：'people like to set their own goals in a game'（有人 5 米就觉得赢）", "30M 站点点击（2011-08）与 MoMA 展出（2011 Kill Screen Arcade）", "吉尼斯纪录 51 秒 100 米（Roshan Ramachandra 2013）", "2QWOP 双人版（2012）与 GIRP/CLOP 谱系、后作 Getting Over It"]
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

# QWOP（game-000031）

## 核心体验
把"走路"拆成四个按键（两条大腿、两条小腿各归一键），布娃娃物理下没有现成的步态——玩家要先**发明**怎么跑，再学会怎么跑。控制本身即玩法（control-as-gameplay）。

## 规则与状态转移（含最简伪代码）
- 状态：`(布娃娃骨架各关节角度/角速度, 身体姿态, 已跑距离)`；输入：`{Q, W, O, P}`。

```text
Q: 左/右大腿肌肉驱动（按下/松开切换力矩方向）
W: 另一条大腿
O/P: 两条小腿
物理:  布娃娃关节+地面摩擦；摔倒仅允许爬起继续（无传统失败画面）
目标:  100 米（自设：5 米也可庆祝——Foddy 语）
```

## 输入与输出
- 输入：四键（每键=一组肌肉的开关，非方向语义）。
- 输出：布娃娃的滑稽跌倒、米数计数（ memes 的计量单位）、距离里程碑。

## 难度与学习曲线
学习曲线的本质是**运动技能的再发明**：先探索（哪些键序能前进），再优化（节奏化跑动）。Foddy 的设计哲学明确反对把失败做成惩罚——"人们喜欢在游戏里自设目标"（Wikipedia 引），倒地不算死，5 米也是胜利。

## 关联机制与模式
- 机制：mechanic-000032（分肢体差分控制）
- 模式：pattern-000018（控制即玩法——把"难操作"本身作为主题）
- 谱系：Foddy 一系（GIRP/CLOP/Getting Over It）与后继 "Foddian" 类型；与 game-000009（Tiny Wings）同为"输入语义实验"，但方向相反——Tiny Wings 极简化，QWOP 极繁化（登记为对照）。

## 设计权衡
- 优点：四键布娃娃生成的涌现喜剧与挑战；自设目标结构把挫败转化为个人叙事（30M 点击的传播燃料）；"不.fun 但难忘"（Kotaku）证明乐趣定义可被拓宽。
- 缺陷：传统意义不可玩（Kotaku 批评口径）；步态发现期的挫败可能无产出（乱按期）。
- 反例：与 game-000008（Celeste 输入宽恕）完全对立——Celeste 把系统性笨拙藏起来，QWOP 把系统性笨拙做成全部内容；两者都成立，取决于笨拙是否被承认为主题。
- 适用场景：物理技能玩法；"失败喜剧"内容向设计。

## 可复现的最小版本与算法
布娃娃关节（铰链+力矩开关）+ 距离计量即可复现；Foddy 有多份设计演讲（本日未核验 URL，不引用）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2008 浏览器版/2010 iOS；Foddy 哲学家背景 | Wikipedia |
| 规则全项（Q/W 大腿、O/P 小腿） | Wikipedia |
| 设计语（自设目标/5 米庆祝） | Wikipedia |
| 30M 点击/MoMA/吉尼斯 51 秒 | Wikipedia |

## 推断与未知
- **未知**：布娃娃关节的精确力矩参数；移动版菱形盘的映射细节。
- **推断（分析而非事实）**：Q/W 与 O/P 的分工（大腿-小腿两级）是"复杂度刚好超出手协调能力"的取值——三键太简单、六键无法玩；这是控制复杂度设计的黄金分割点（分析）。
- 米数作为 meme 计量单位：传播由"可比较的个人失败数字"驱动——与 pattern-000014（确定性社区）同机制（分析）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000015：分肢体控制的双人差分协作版。
2. 步态记录器：录制并分享自己的键序（"我的步法"）——检验控制式玩法的 UGC 分享（接 pattern-000014）。
