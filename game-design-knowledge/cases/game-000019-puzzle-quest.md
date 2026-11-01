---
id: game-000019
title: "Puzzle Quest: Challenge of the Warlords"
aliases: ["战神的挑战", "PQ"]
genres: [puzzle, strategy, hybrid]
subgenre_tags: []
platforms: [nintendo_ds, psp, 多平台移植]
release_year: 2007
creators: ["Infinite Interactive（设计 Steve Fawkner；1st Playable 协助 DS 版）", "D3 Publisher（发行）"]
core_loop: "回合制对垒 -> 交换宝石三消 -> 消除结果即战斗资源（法力/骷髅伤害/额外回合）-> 施法与攻击 -> 升级/抓捕/建造的 RPG 外环"
mechanic_ids: [mechanic-000020]
pattern_ids: [pattern-000012]
quality_score: 4.68
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Puzzle_Quest:_Challenge_of_the_Warlords"
    title: "Puzzle Quest: Challenge of the Warlords - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-01"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2007-03-16 DS/PSP 发行与移植谱系", "Fawkner 设计、Infinite Interactive", "融合规则全项（消除=法力/骷髅伤害、四连额外回合、四职业/抓捕/建造）", "授权衍生（Marvel PQ、MTG PQ）", "商业意外成功（NA DS 首批 4 万一周售罄）与团队扩至约 70 人", "评价（MC 82-87）与获奖（互动成就奖可下载游戏年度）"]
created_at: "2026-11-01"
updated_at: "2026-11-01"
---

# Puzzle Quest（game-000019）

## 核心体验
跨类型融合的奠基样本：三消不是小游戏，它**就是**战斗系统——消除的宝石变成法力、骷髅变成伤害、四连送出额外回合。RPG 的成长（职业/法术/装备）反过来决定你在同一块棋盘上"看得见哪些消除路线"。两个类型核共享一块资源接口。

## 规则与状态转移（含最简伪代码）
- 状态：`(8×8 宝石盘, 双方法力池, HP, 施法库, RPG 进度)`；输入：`{相邻宝石交换}`。

```text
swap:  相邻交换 -> 三连及以上消除
消除 -> 资源转译:
  红黄蓝绿宝石 -> 对应法力 +n（施法消耗四系法力）
  骷髅 -> 直接伤害
  金币/星 -> 经验与金钱（RPG 外环）
四连+ : 额外回合（同玩家继续行动）
施法:  消耗法力改变棋盘（移除整行/转化宝石色/直接伤害）
       ——RPG 层反写三消层的棋盘状态
RPG 外环: 战斗胜利 -> 经验/装备/抓捕敌人学法术 -> 法术库改变棋盘操作词汇
```

## 输入与输出
- 输入：相邻交换（与原版 Bejeweled 完全同构的输入面）。
- 输出：法力/伤害/金币的转译动画、法术演出、RPG 数值成长。

## 难度与学习曲线
学习曲线是双层的：三消的路线规划 × RPG 的资源规划（何时攒法力放哪张法术）。AI 对手的"完美消除"倾向使防守型消除（不给对手喂骷髅）成为独有技巧（分析口径——规则事实来自 Wikipedia，策略分析为本库推断）。

## 关联机制与模式
- 机制：mechanic-000020（消除→战斗资源的转译经济）
- 模式：pattern-000012（以共享接口融合两个玩法核——本卡为奠基案例）
- 谱系：授权衍生 Marvel PQ / MTG PQ 证明接口可移植到任意 IP（Wikipedia）；接 hypothesis-000009（合并链×资源引擎）。

## 设计权衡
- 优点：零输入学习成本进入 RPG 深度（三消玩家秒懂战斗层）；消除→资源的转译让"好棋"与"好回合"统一，避免小游戏插播感；抓捕/锻造等 minigame 外环延长留存。
- 缺陷：AI 棋力靠完美消除作弊感明显（社区长期讨论，未入库来源，记为社区反应）；RPG 数值膨胀可能压过棋盘技巧。
- 反例：Bejeweled 原型（纯三消）没有资源转译——融合的关键不在"有三消"而在"消除结果有第二语义"。
- 适用场景：任何"小游戏产出即主系统资源"的融合设计。

## 可复现的最小版本与算法
8×8 三消内核 + 颜色→资源映射表 + 法术=棋盘变换函数，即可复现核心循环（RPG 外环可后挂）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2007-03-16 DS/PSP；Fawkner；移植谱系 | Wikipedia |
| 融合规则全项（法力/骷髅/四连额外回合/抓捕/建造） | Wikipedia |
| 首批 4 万一周售罄；团队扩至 ~70 人 | Wikipedia |
| 授权衍生与获奖 | Wikipedia |

## 推断与未知
- **未知**：法术池与 AI 棋力的具体参数；Steve Fawkner 设计动机的一手访谈（本日未检索，缺口登记）。
- **推断（分析而非事实）**：四连给额外回合是该设计最锋利的一笔——它把"规划"从单步提升为多步，让三消层首次拥有 tempo 概念。
- 商业上"意外"（ 发行方预期低）说明融合品类在 2007 年无市场先例——创新无同类可比（分析）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000009：把物理合并链（Suika）接入本资源引擎。
2. 双人对称版：双方在同一棋盘轮流消除、共享资源语义——检验转译经济在对抗下的平衡性。
