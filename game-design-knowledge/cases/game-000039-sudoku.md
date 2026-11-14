---
id: game-000039
title: "Sudoku（数独）"
aliases: ["数独", "Number Place（Dell 原名）", "ナンプレ"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [报纸/杂志, web, 多平台]
release_year: 1979
creators: ["Howard Garns（退休建筑师，匿名设计）", "Maki Kaji（鍜治真起，Nikoli 社长——命名与推广）"]
core_loop: "读行列宫约束 -> 约束传播与假设回溯 -> 填满 9×9 且唯一解 -> 难度由提示数与推理链深度决定"
mechanic_ids: [mechanic-000040]
pattern_ids: [pattern-000021]
quality_score: 4.80
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Sudoku"
    title: "Sudoku - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1979 Dell 'Number Place'（Garns；Will Shortz 2005 确认归属）", "Nikoli 1984 '数字は独身に限る'→1986 缩为 sudoku（Maki Kaji）", "规则（9×9 行列宫三重约束；唯一解为'良构'；无算术——符号可任意替换）", "数学（广义 n²×n² NP-complete——Yato & Seta 2003；拉丁方与图着色框架）", "最少提示数 17（McGuire/Tugemann/Civario 2014）；总盘面 6.67×10²¹；本质不同盘 5,472,730,538", "传播（Wayne Gould 1997 东京见→六年开发生成/难度评级程序→The Times 2004-11-12；WSC 2006 起）", "App Store 上线两周内近 30 款数独应用"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# Sudoku（game-000039）

## 核心体验
无算术的纯约束谜题（符号可任意替换——Wikipedia 明确）：三重约束（行/列/宫）下用约束传播与假设回溯收敛到唯一解。它是"规则即全部玩法"的极限——没有叙事、没有操作技巧、没有随机性。

## 规则与状态转移（含最简伪代码）
- 状态：`(9×9 候选集网格, 已填数字)`；输入：`{填入数字}`。

```text
约束:  每行/每列/每 3×3 宫各含 1–9 恰一次
传播:  每次填入 -> 候选集沿行/列/宫剪枝 -> 单候选格链式确定
判定:  良构谜题恰一解；最少提示数 17（McGuire 2014 穷举证明）
生成:  先生成完整盘面（6.67×10²¹ 之一）-> 按对称挖洞 -> 唯一解校验（多解则回填）
复杂度: 广义 n²×n² 判定 NP-complete（Yato & Seta 2003）
```

## 输入与输出
- 输入：填入数字（无操作技巧）。
- 输出：候选集的自然显隐（纸笔时代靠铅笔标记）。

## 难度与学习曲线
难度不是规则复杂度而是**推理链深度**：从 naked/hidden single 到 X-Wing 等高阶技巧。Wayne Gould 的生成+难度评级程序（六年开发）证明难度分级可工程化——生成器先产盘、再评级、再定商业分级（Wikipedia），与 game-000016（Minesweeper 生成端公平）同属"生成即设计"家族。

## 关联机制与模式
- 机制：mechanic-000040（三重约束传播与唯一解生成）
- 模式：pattern-000021（唯一解契约——Sudoku 17 提示下限穷举证明 + Obra Dinn 表格链自证 + Minesweeper 生成校验，三案例同谱系）
- 数学关联：拉丁方/图着色（Wikipedia）；与 game-000036（Sokoban PSPACE）构成复杂性谱系两点（NP-complete vs PSPACE-complete——均"规则极简"）。

## 设计权衡
- 优点：零学习语义门槛（数字只是符号）；唯一解契约使公平性可数学证明；生成器自动化使内容无限且分级可控。
- 缺陷：无主题/叙事空间（纯符号）；难度分级与人类感知的映射仍需工程调校（Gould 六年的代价即证据）。
- 反例：与 game-000005（Wordle）对照——Wordle 有公开词表与每日同题的社交层，Sudoku 无社交层仍达史上最大谜题人口；说明唯一解契约独立成立。
- 适用场景：任何约束满足型谜题；生成器驱动的玩法供给。

## 可复现的最小版本与算法
约束传播器 + 唯一解校验 + 挖洞器即全部（生成器难在分级而非实现）；McGuire 17 提示穷举为研究级结果。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1979 Garns/Dell；Shortz 归属确认 | Wikipedia |
| Nikoli/Kaji 命名史 | Wikipedia |
| NP-complete（Yato & Seta 2003）；17 提示下限（2014） | Wikipedia |
| 传播链（Gould→The Times 2004）与 WSC | Wikipedia |

## 推断与未知
- **未知**：Gould 难度评级程序的具体算法；Nikoli 30+ 提示数惯例（Wikipedia 未载——不采信）。
- **推断（分析而非事实）**：其全球爆发的真正触发点是**报纸的每日一次结构**（The Times 2004）——即 pattern-000003 每日稀缺在谜题上的先行实践，比 Wordle 早 17 年。
- 17 提示数下限（穷举证明）提示：提示数是难度与唯一解之间的硬约束界面（分析）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000019：难度分级指标与人类感知的相关性。
2. 约束可变体：把宫约束换成对角线/骑士步（现变体众多）——检验"约束扰动"对难度谱的敏感性。
