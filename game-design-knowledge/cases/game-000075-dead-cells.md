---
id: game-000075
title: "Dead Cells"
aliases: ["死亡细胞（中文通行译名）", "DC"]
genres: [action, hybrid]
subgenre_tags: [roguelite]
platforms: [pc, nintendo_switch, ps4, xbox_one, ios, android]
release_year: 2018
creators: ["Motion Twin（法国波尔多工人合作社；设计 Sébastien Bénard/Mathieu Capdegelle；无游戏总监署名——集体决策）"]
core_loop: "run 制 roguevania → 死亡失去 run 内物品与未消费 Cells → Cells 在地牢末端换永久升级 → Power Scrolls 三系成长 → Runes 从精英怪解锁能力 → Boss Cells 五级加难"
mechanic_ids: [mechanic-000079]
pattern_ids: []
quality_score: 4.63
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Dead_Cells"
    title: "Dead Cells - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2018-08-07 多平台发行（EA 2017-05-10 起；移动 Playdigious；Netflix 版 2023-10-31；PS5 2023-06-29）", "Motion Twin 波尔多工人合作社（Die2Nite 后续——剥离合作塔防要素；设计 Bénard/Capdegelle；无总监署名——集体决策；灵感 TF2 Engineer 与 Isaac）", "Evil Empire 2019 年前后分拆共研更新 DLC，Dead Cells 团队保持 8-10 人", "EA 反馈贡献最终特性的约 40-50%（Bénard 口径）", "玩法全项（'roguevania' permadeath/约 50 武器（设计期）/Power Scrolls 三系/Runes 顺序解锁/Boss Cells 五级加难（Rise of the Giant）/程序生成自预设区段）", "叙事（Prisoner 'the Beheaded' 即国王本人——Rise of the Giant 揭示；Queen and the Sea 灯塔结局）", "DLC 谱系（Rise of the Giant 免费 2019/Bad Seed 2020/Fatal Falls 2021/Queen and the Sea 2022/Return to Castlevania 2023-03-06 Konami 授权）", "第 35 补丁（2024-08-19）为新创意工作终点（Motion Twin 转 Windblown、Evil Empire 转自有作）；2026-02 两工作室合研 Castlevania: Belmont's Curse（Konami 授权）", "销量（EA 73 万/2019-05 200 万/2021-03 500 万/2023-06 超 1000 万）", "MC 89-91；TGA 2018 最佳动作/金摇杆最佳独立", "批评：叙事模糊"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Dead Cells（game-000075）

## 核心体验
"roguevania"（roguelike+metroidvania）：run 内 permadeath、run 外 Cells 换永久解锁——死亡不白费但也不放水。工人合作社（无老板）集体决策与 EA 反馈驱动（40-50% 特性来自玩家反馈，Bénard 口径）是其开发组织的签名。

## 规则与状态转移（含最简伪代码）
- 状态：`(run 内状态（武器/变异/HP）, meta 层（Cells 花费/Runes/Boss Cells）, 程序生成区段图)`；输入：`{攻击/翻滚/技能}`。

```text
run:   程序生成区段图 → 收 Cells/武器/变异 → Boss
死亡:  失去 run 物品与未消费 Cells → 地牢末端消费过的不丢
meta:  Cells → 永久升级；Runes（精英怪）→ 能力解锁（metroidvania 层）
难度:  Boss Cells 五级（层层加难——反向难度曲线）
```

## 输入与输出
- 输入：动作操作（攻击/翻滚/技能）。
- 输出：像素战斗演出、Cells 结算、Boss Cells 加难提示。

## 难度与学习曲线
难度=run 内随机武器/变异的组合适应 + Boss Cells 的自我选择加难（与 game-000059 Pact of Punishment 同族——自选难度在肉鸽的实践）。无总监的合作社决策使设计由共识驱动（事实口径）。

## 关联机制与模式
- 机制：mechanic-000079（Cells meta 经济与 Boss Cells 反向难度）
- 对照：与 game-000021（VS 自动攻击）对照——同为法国系肉鸽（Motion Twin/poncle 均法系语境不同），DC 保留完整操作；与 game-000024（Spelunky）对照——程序生成区段 vs 手工房间（生成谱系两支）。
- 组织样本：Motion Twin（合作社）与 Evil Empire（分拆续研）的拆分协作——2026-02 合研 Castlevania 新作（Wikipedia 口径）。

## 设计权衡
- 优点：Cells meta 经济使 permadeath 不白费；Boss Cells 反向难度（玩家自选加难）；EA 反馈管线制度化；1000 万销量 + TGA/金摇杆。
- 缺陷：叙事模糊批评（MC 口径）；无总监的共识成本（分析口径）。
- 反例：与 game-000024（Spelunky 手工房间）对照——DC 程序生成区段（自预设 sections）；生成谱系的实现差异。
- 适用场景：roguevania；工人合作社开发组织研究。

## 可复现的最小版本与算法
程序生成区段图+Cells 经济+永久升级树+Boss Cells 难度层即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2018-08-07 发行；Motion Twin 合作社/无总监署名 | Wikipedia |
| EA 反馈 40-50% 特性（Bénard 口径） | Wikipedia |
| 玩法全项（roguevania/Cells/Runes/Boss Cells 五级） | Wikipedia |
| 销量（1000 万 2023-06）与 DLC/新作谱系 | Wikipedia |
| 2026-02 合研 Castlevania: Belmont's Curse | Wikipedia |

## 推断与未知
- **未知**：Evil Empire 分拆的内部细节（Wikipedia 明确未载争端——不采信社区传闻口径）；各区段生成规则。
- **推断（分析而非事实）**：Boss Cells 是"反向难度曲线"——难度不随进度自动上升，而由玩家自我贴标（与 hypothesis-000033 的自选难度谱互证，分析）。
- 合作社组织与"集体设计"可能解释其无总监、EA 重反馈的开发风格（分析）。

## 创新延伸（可验证假设素材）
1. Boss Cells 采用率研究（自选加难的分层留存）。
2. 合作社 vs 传统的开发决策速度对照（组织研究）。
