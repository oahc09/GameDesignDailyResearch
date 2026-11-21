---
id: game-000085
title: "Opus Magnum"
aliases: ["奥术大师（中文社区通称）", "Opus Magnum"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [pc, nintendo_switch]
release_year: 2017
creators: ["Zachtronics（Zach Barth 主设计/主程；EA 2017-10-19→正式 2017-12-08）"]
core_loop: "六边形网格上编程炼金机械（多机械臂+轨道+符文键合/析盐/嬗变铅为金）→ 按【循环数/成本/占地】排行 → 完成机器可导出为动画 GIF 分享 → Steam Workshop 上传自制关卡（须附可解证明）"
mechanic_ids: [mechanic-000089]
pattern_ids: [pattern-000027, pattern-000014]
quality_score: 4.78
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Opus_Magnum"
    title: "Opus Magnum - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2017-12-08 正式版（EA 2017-10-19 起；Switch Complete Edition 2026-03-17 + De Re Metallica DLC 三前传章 17 关）", "Zach Barth 主设计/主程", "玩法全项（六边形 transmutation engine/机械臂 grab/drop/rotate/pivot/extend/retract+轨道/符文键合/析盐/嬗变铅为金/每臂独立指令集并行运行/原子或臂碰撞即停机/排行按 cycles-cost-area 三轴/完成机器可导出动画 GIF 分享）", "关卡编辑器+Steam Workshop 上传（须附可解证明）", "起源：Barth 2008 Flash 游戏 The Codex of Alchemical Engineering（含 Magnum Opus Challenge 扩展）的精炼重制；GIF 友好循环设计为刻意开发优先项", "MC 90 'universal acclaim'；IGF Excellence in Design 得奖+Seumas McNally 提名；金摇杆两项提名", "GOG 初拒（疑与手游雷同）→ 2018-01-31 因玩家反弹撤回决定"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Opus Magnum（game-000085）

## 核心体验
SpaceChem 的六边形精炼重制（Barth 2008 年 Flash 作品 Codex of Alchemical Engineering 的官方 remake——Wikipedia 明载）：多机械臂并行编程炼金，**完成机器可导出为 GIF**——GIF 友好循环被列为刻意开发优先项。优化排行按循环数/成本/占地三轴（与 SpaceChem 三轴同族但把"反应器数"换成了"占地"）。

## 规则与状态转移（含最简伪代码）
- 状态：`(六边形网格, 多机械臂（独立指令集/轨道）, 元素与键, 排行记录)`；输入：`{编辑各臂指令带}`。

```text
执行:  每臂独立指令集并行运行（grab/drop/rotate/pivot/extend/retract + 轨道移动）
符文:  bond/unbond/calcify/transmute（铅→金等）
约束:  原子或臂碰撞 → 停机
排行:  cycles / cost / area 三轴（社区有非官方 sum 合成指标）
分享:  完成机器导出 GIF；Workshop 上传关卡须附可解证明
```

## 输入与输出
- 输入：指令带编辑（运行期零输入）。
- 输出：机械臂并行舞动、炼金结果、**GIF 导出**（刻意设计的分享产物）。

## 难度与学习曲线
与 SpaceChem 同构但更易读（六边形+可视臂轨迹）；Workshop 的"须附可解证明"把关卡 UGC 的质量问题前置到上传端——UGC 质量的制度化样本（对照 pattern-000021 唯一解契约的上游化）。

## 关联机制与模式
- 机制：mechanic-000089（六边形炼金机械编程+GIF 导出）
- 谱系：The Codex of Alchemical Engineering（2008 Flash）→ SpaceChem（2011）→ Opus Magnum（2017，官方 remake）——Zachtronics 自我 remake 的谱系闭环（与 game-000052 对照：三轴排行从"指令/循环/反应器"演化为"循环/成本/占地"——排行轴随机制语言演化）。
- 模式：pattern-000014（确定性社区）+ pattern-000027（原型管道的官方 remake 变体）。

## 设计权衡
- 优点：GIF 导出把"解法可视化"做成传播产物（刻意优先项——Wikipedia 明载）；Workshop 可解证明前置 UGC 质量控制；MC 90 + IGF 设计奖；GOG 拒审反转案例（玩家反弹→撤回决定）。
- 缺陷：优化深度的受众天花板（Zachtronics 系共性，分析）；炼金叙事的轻量（对照 SpaceChem 的剧情线，分析）。
- 反例：与 game-000052（SpaceChem）对照——同一作者的两次尝试：SpaceChem 三轴含"反应器数"（硬件规模）、Opus 换"占地"（平面密度）；排行轴的演化反映机制语言变化。
- 适用场景：编程炼金谜题；"解法可分享"设计。

## 可复现的最小版本与算法
六边形网格+多臂并行解释器+符文效果+三轴排行+GIF 导出即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2017-12-08 正式（EA 2017-10-19）；Barth 主设计 | Wikipedia |
| 玩法全项（六边形/多臂并行/三轴排行/GIF 导出） | Wikipedia |
| Codex of Alchemical Engineering 官方 remake；GIF 刻意优先 | Wikipedia |
| Workshop 须附可解证明 | Wikipedia |
| MC 90/IGF 设计奖/GOG 拒审反转 | Wikipedia |

## 推断与未知
- **未知**：销量数字（页面未载）；"sum" 合成指标的具体公式（社区口径未核验）。
- **推断（分析而非事实）**：GIF 导出是"确定性模拟→可分享产物"链条的最短实现——解法即动画，无需录制（与 pattern-000014 的 AoE 指令流录像同源：确定性使分享免费，分析）。
- Workshop 的可解证明要求把 pattern-000021 从设计者义务扩展为上传者义务（分析）。

## 创新延伸（可验证假设素材）
1. GIF 导出对传播的量化（有/无导出按钮的社区分享率对照）。
2. 多目标排行 UI 的演化研究（SpaceChem→Opus 的排行轴变化的玩家感知）。
