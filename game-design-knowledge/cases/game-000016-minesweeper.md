---
id: game-000016
title: "Minesweeper（扫雷）"
aliases: ["扫雷", "Microsoft Minesweeper"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [windows]
release_year: 1990
creators: ["Robert Donner", "Curt Johnson（Microsoft，1990 Windows Entertainment Pack）"]
core_loop: "首点开启安全区 -> 读数字推理雷位 -> 标旗或直接开格 -> 遇纯逻辑死角被迫概率猜测 -> 开完全部非雷格即胜"
mechanic_ids: [mechanic-000017]
pattern_ids: [pattern-000011]
quality_score: 4.65
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Minesweeper_(video_game)"
    title: "Minesweeper (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-31"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1990 Windows Entertainment Pack（Donner/Johnson）", "玩法全项（数字=八邻雷数、零格 flood-fill、右键标旗、chording）", "Vista 起首击保证无相邻雷", "标准难度（9×9/10、16×16/40、30×16/99）", "Kaye 2000 一致性问题 NP-complete（Mathematical Intelligencer，SAT 归约）", "保证一致版为 co-NP-complete（Scott/Stege/van Rooij 2011）", "约 25% 雷密度相变；无限扫雷图灵完备", "Windows 8 移除内置于商店下载", "竞速技术与纪录"]
created_at: "2026-10-31"
updated_at: "2026-10-31"
---

# Minesweeper（game-000016）

## 核心体验
纯信息游戏：没有操作精度、没有资源，只有"已知约束下的推理"。它的深度被数学正式定价——判定盘面一致性是 NP-complete 的（Kaye 2000），这意味着难度下限由计算复杂性理论背书，而非设计者的手感。

## 规则与状态转移（含最简伪代码）
- 状态：`(网格三态 {未开/已开/标旗}, 雷布局, 已开计数)`；输入：`{左键开, 右键旗, 双键 chording}`。

```text
开局:  首击后生成雷布局；Vista 起"首击及其八邻均无雷"
       （生成时序反转——先点击、后布雷，是随机化服务公平的教科书操作）
开格:  数字 = 八邻雷数；0 -> flood-fill 连锁展开
chording: 已开数字周围旗数匹配 -> 一键开其余邻格
胜利:  已开数 = 总格数 - 雷数；失败: 开到雷
雷密度: 初/中/高 = 10/64 ≈ 16%、40/256 ≈ 16%、99/480 ≈ 21%
        （低于 Kaye 相变点 ~25%，故标准难度大部分局面可纯逻辑解出——分析口径）
```

## 输入与输出
- 输入：三态点击语义（开/旗/chord），全鼠标。
- 输出：数字染色（1 蓝 2 绿 3 红…竞速者读色不读数）、计时器（唯一分数）、失败雷盘揭示。

## 难度与学习曲线
学习=模式库积累（1-2-1、1-1-2 边角定式）+ 计数优化（竞速者不标旗、用 1.5 click）。理论侧：一致性判定 NP-complete、保证一致版 co-NP-complete、无限扫雷图灵完备、~25% 密度相变（Wikipedia 引 Kaye 2000 等）——"猜"不是设计失误而是复杂度边界（分析口径）。

## 关联机制与模式
- 机制：mechanic-000017（首击后生成/首击安全区）
- 模式：pattern-000011（求解器/理论界定的深度谱——本卡是"复杂度类背书难度"的样本）
- 渊源争议：Mined-Out（1983, ZX Spectrum）与 Mines（1987, SunOS）的先后之争，Microsoft 版作者否认抄袭 Mined-Out（Wikipedia 转述）——起源存疑处如实登记。

## 设计权衡
- 优点：信息完全透明（无隐藏属性、无付费变量），失败可完全归因于推理或概率死角；三难度=雷密度数值设计；作为 Office 系办公软件的" smuggled 教学"成就了史上最大规模谜题人口（推断）。
- 缺陷：纯逻辑死角（50/50 猜）是体验污点——现代变体以"保证可解生成"回应（生成端解决而非显示端）；雷主题引发 2001 年国际抵制运动、Vista 出花雷皮肤（Wikipedia）——主题语义会反噬玩法传播。
- 反例：与 game-000005（Wordle）对照——Wordle 的"猜"被每日一次制度化，扫雷的"猜"被竞速者视为失败；同为随机死角，社会评价相反。
- 适用场景：约束传播类谜题；需要"难度有数学下限"的设计。

## 可复现的最小版本与算法
首击后布雷 + 八邻计数 + flood-fill 即全部逻辑（百行级）；可解性生成器需额外 solver 循环（生成→验证→回退），NP-complete 意味着大图验证代价需控制（分析）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1990 WEP（Donner/Johnson）；起源之争（Mined-Out 1983 / Mines 1987） | Wikipedia |
| Vista 起首击无相邻雷；标准三难度 | Wikipedia |
| Kaye 2000 NP-complete；co-NP-complete（2011）；~25% 相变；图灵完备 | Wikipedia |
| Windows 8 移除内置；竞速纪录与 2025 世锦赛 | Wikipedia |

## 推断与未知
- **未知**：现代"保证可解"变体的具体生成算法（逐雷回退 vs 全局求解）未逐一核验；Windows XP 及以前版本首击是否保证安全（Wikipedia 仅确认 Vista 起加强）。
- **推断（分析而非事实）**：雷密度刻意低于 25% 相变点是"可解性预算"的设计——把猜题率压到长尾，竞速才成立；此为合理推断而非官方声明。
- **推断（分析而非事实）**：首击后生成（mechanic-000017）是"随机化让位于玩家体验"的最早主流案例之一，比保底抽卡早了十余年。

## 创新延伸（可验证假设素材）
1. 可解性显示：生成时即标注"本盘 100% 可解/含 1 个猜点"，检验透明化猜点是否改善挫败归因（接 hypothesis-000008 的熵预算思路）。
2. 负难度曲线：把雷密度沿盘面从 25% 渐变到 0，做成"越玩越安全"的反向压力实验。
