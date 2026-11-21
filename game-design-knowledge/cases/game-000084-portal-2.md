---
id: game-000084
title: "Portal 2"
aliases: ["传送门2（中文通行译名）", "Portal 2"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [pc, ps3, xbox_360, nintendo_switch]
release_year: 2011
creators: ["Valve（制作人 Gabe Newell；总监 Joshua Weier；编剧 Erik Wolpaw/Jay Pinkerton/Chet Faliszek；EA 零售分发）"]
core_loop: "单人与合作双战役 → 新机制渐进（凝胶三色/光桥/激光/漏斗/弹射板）→ Wheatley 反叛线 → Cave Johnson 录音叙事 → 双机器人 Atlas/P-Body 合作教学"
mechanic_ids: [mechanic-000088]
pattern_ids: []
quality_score: 4.83
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Portal_2"
    title: "Portal 2 - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2011-04-18 PC 数字版全球发行（零售 04-20/22；Linux 2014-02 beta/Switch 2022-06-28 Companion Collection）", "Valve/Newell 制作/Weier 总监/Wolpaw+Pinkerton+Faliszek 编剧；EA 零售", "新机制全项（凝胶三色：orange 推进/blue 弹跳/white 可放门——源自学生作品 Tag: The Power of Paint；Hard Light Bridges/激光/Excursion Funnels/Aerial Faith Plates）", "合作战役（Atlas 与 P-Body 双机器人、分屏或在线跨平台；GLaDOS 最终令机器人被销毁）", "叙事（Chell 苏醒/Wheatley 意外激活 GLaDOS 后背叛/Cave Johnson 录音与月尘中毒/Caroline 背景——页面未载柠檬台词）", "长度（Wolpaw 估每战役约六小时，全游戏约为初代五倍）", "MC 95；2011 金摇杆 Ultimate Game of the Year/2012 GDCA 最佳叙事+音频+游戏设计；'史上最伟大'常列", "销量（2011-06-22 破 300 万；2012-05 出货 400 万+；Portal 系合计 800 万+）"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Portal 2（game-000084）

## 核心体验
把初代的单机制扩展为**机制家族**：凝胶三色（源自学生作品 Tag: The Power of Paint 的吸收——又一个"学生作品被收编"案例）、光桥/激光/漏斗，再以合作战役把"教学"重构为"双人依赖"。六小时×两战役，约为初代五倍长度（Wikipedia Wolpaw 口径）。

## 规则与状态转移（含最简伪代码）
- 状态：`(传送门对, 凝胶涂层表面, 光桥/激光链, 合作机器人同步)`；输入：`{双门, 凝胶涂布, 合作指令}`。

```text
凝胶:  orange=加速 / blue=弹跳 / white=可放门（源自 Tag: The Power of Paint——Wikipedia 明载来源）
光桥:  Hard Light Bridge 可被凝胶改变附着
合作:  双机器人分屏/在线——一人开门一人通行（教学=依赖）
叙事:  Wheatley 反叛线 + Cave Johnson 录音（50 年代 Aperture 口述史）
```

## 输入与输出
- 输入：双门/凝胶涂布/合作指令（单人+双人双轨）。
- 输出：凝胶物理、光桥链、合作同步演出、Wheatley/Cave 叙事层。

## 难度与学习曲线
初代的三拍教学（引入→组合→反转）扩展为**双轨**：单人战役教学新机制家族，合作战役教"双人依赖"——两种教学各自完整（Wikipedia 长度口径：单战役约 6 小时）。

## 关联机制与模式
- 机制：mechanic-000088（凝胶三色与机制家族扩展）
- 谱系：初代 Portal（game-000029）→ Portal 2——每代一变异（pattern-000029）的机制家族变体：初代变异了一维（动量）、二代变异了介质（凝胶表面）；Tag: The Power of Paint（学生作品）→ Valve 收编凝胶——学生作品管道第二次确认（对照 Narbacular Drop）。
- 对照：与 game-000084（Factorio 蓝图）对照——同为"玩家资产"，Portal 2 的合作依赖是实时同步、Factorio 是资产导入。

## 设计权衡
- 优点：机制家族扩展保住"三拍教学"结构（每个新凝胶走完同一节拍）；合作战役把"依赖"设计成玩法；MC 95 与 GDCA 三奖；300 万销量（一个月）。
- 缺陷：长度扩张（五倍）的节奏风险被双战役结构化解（分析口径）；EA 分发与 Valve 数字的双轨发行复杂度。
- 反例：与初代 Portal（game-000029）对照——续作没有加"更多传送门"，而是给传送门加"可作用的介质"（凝胶/表面）；机制扩展的正确轴是介质而非数量。
- 适用场景：机制家族续作；合作依赖设计。

## 可复现的最小版本与算法
传送门对+凝胶表面属性表+光桥/激光链+合作同步状态机即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2011-04-18 PC 数字（纠误：非 04-19） | Wikipedia |
| 凝胶源自 Tag: The Power of Paint（学生作品收编第二例） | Wikipedia |
| 玩法全项（凝胶三色/光桥/漏斗/合作双机器人） | Wikipedia |
| MC 95/金摇杆 Ultimate/GDCA 三奖 | Wikipedia |
| 销量（300 万一个月/系合计 800 万+） | Wikipedia |

## 推断与未知
- **未知**：柠檬台词（Cave Johnson 名梗）在本页未载——不引用原文；合作关卡的同步设计文档。
- **推断（分析而非事实）**：凝胶三色的"吸收学生作品"路径证明：学生游戏的专业机制可被收编为 AAA 机制家族的成员（与 Narbacular Drop 的全组雇佣对照——收编机制 vs 收编团队，两条管道）。
- 合作战役的"双人依赖"教学是独立于单人的第二课程表（分析）。

## 创新延伸（可验证假设素材）
1. 凝胶家族扩展实验（第四种凝胶：重力反转？）——机制家族的可扩展性研究。
2. 合作依赖梯度：从"一人开门"到"严格同步"的合作教学曲线。
