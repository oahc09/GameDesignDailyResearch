---
id: game-000065
title: "Loop Hero"
aliases: ["循环勇者（中文通行译名）", "Loop Hero"]
genres: [strategy, hybrid]
subgenre_tags: [roguelite]
platforms: [pc, nintendo_switch, xbox, 移动端]
release_year: 2021
creators: ["Four Quarters（俄罗斯工作室）", "Devolver Digital（发行；移动端 Playdigious）"]
core_loop: "远征阶段（英雄自动走闭环+自动战斗）→ 玩家出牌在路径旁空格放置地形（山脉/草原/森林…）→ 地形规则改变世界与敌人 → 建营装备 → 循环加速 → 撤退或败亡结算资源"
mechanic_ids: [mechanic-000069]
pattern_ids: []
quality_score: 4.50
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Loop_Hero"
    title: "Loop Hero - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2021-03-04 PC 发行（纠误：非 2020）；Switch 2021-12-09/Xbox 2023-04-04/移动 2024-04-30", "Four Quarters（俄罗斯）/Devolver（移动 Playdigious）", "玩法全项（远征与建造两阶段交替；英雄自动走随机闭环路径+自动战斗；玩家在路径旁空格放置地形牌（山/草原/森林等）塑造世界并触发效果；地形邻接规则（3×3 山脉=山峰，加血+新敌）；失败扣 70% 远征资源；远离营火扣 40%；装备掉落；放置表满出 Boss；三职业（战士/死灵/盗贼））", "起源（2019 'zero-player games' 讨论 → Ludum Dare 2019-10 'Start with nothing' 主题原型 → 打磨 → Devolver 签下）", "MC 82 (PC)/84 (Switch)；TGA 2021 最佳独立提名+三项 DICE 提名；2025 Pégases 最佳外国移动游戏"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Loop Hero（game-000065）

## 核心体验
"zero-player game"讨论的产物（Wikipedia：起源）：英雄自动走环、自动战斗，玩家唯一的操作是**放置地形牌塑造世界**——你玩的是世界生成器，不是英雄。地形邻接规则（3×3 山=山峰）让"布局"成为核心策略。

## 规则与状态转移（含最简伪代码）
- 状态：`(闭环路径, 地形牌盘, 英雄属性/装备, 放置计量表, 营地资源)`；输入：`{出牌放置, 撤退决策}`。

```text
远征:  英雄自动走闭环+自动战斗（玩家不可微操）
出牌:  路径旁空格放置地形 → 邻接规则触发组合（3×3 山=山峰）
风险:  放置表满 → Boss；失败扣 70% 资源；远离营火撤退扣 40%
职业:  战士/死灵法师/盗贼（不同资源与装备逻辑）
```

## 输入与输出
- 输入：出牌放置 + 撤退时机决策（零微操）。
- 输出：地形生成演出、战斗自动结算、装备掉落、像素 80s 风格。

## 难度与学习曲线
难度=**地形邻接规则的空间规划**（牌怎么摆产生什么世界）+ 撤退时机的风险决策（70%/40% 损耗权衡——Wikipedia 口径）。零微操设计把"策略"完全压到布局与决策层（分析口径）。

## 关联机制与模式
- 机制：mechanic-000069（地形牌邻接规则塑造世界）
- 谱系：LD 2019 "Start with nothing" 原型 → 打磨 → Devolver——jam 管道再证（pattern-000027 第八链）；与 game-000026（DF 涌现历史）对照——Loop Hero 把涌现压缩为可读的邻接规则（玩家可学习的涌现）。
- 对照：与 game-000059（Hades 微操+叙事）对照——同为肉鸽，操作密度两极（零微操 vs hack-and-slash）。

## 设计权衡
- 优点：零微操的"可挂机可深玩"双轨（注意力自选）；邻接规则使地形生成可学习（涌现的可读化）；失败损耗分级的公平设计（70%/40% 按距离——死亡成本与选择相关）；TGA 提名与 Pégases 获奖口径。
- 缺陷：后期卡牌多样性批评（Wikipedia 口径）；自动战斗使战斗表现力让位于数值。
- 反例：与 game-000011（SUPERHOT 时间随动）对照——同为"注意力再分配"设计：SUPERHOT 把注意力集中到时机、Loop Hero 把注意力集中到布局。
- 适用场景：注意力分级玩法；地形生成器作为策略层。

## 可复现的最小版本与算法
闭环路径生成器+地形牌邻接规则+自动战斗结算+损耗公式即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2021-03-04 PC 发行（纠误：非 2020） | Wikipedia |
| 玩法全项（两阶段/邻接规则/损耗 70%/40%/三职业） | Wikipedia |
| 起源（zero-player 讨论→LD 2019 原型→Devolver） | Wikipedia |
| MC 82/84 与 TGA 提名/Pégases 获奖 | Wikipedia |

## 推断与未知
- **未知**：邻接规则全表；各地形牌的效果数值；"Loop Hero 2"是否公布（Wikipedia 未载——不采信）。
- **推断（分析而非事实）**：损耗分级（败=70%、远撤=40%）是"撤退也是决策"的设计——把放弃做成有价格的选项（与 pattern-000026 的取舍精神一致，分析）。
- zero-player 起源（Wikipedia）证明其设计出发点即"自动化+玩家只做高阶决策"——与 idle 品类的分界在于策略深度保留（分析）。

## 创新延伸（可验证假设素材）
1. 邻接规则的可读化实验（组合预告面板）——检验涌现可读化对新手的收益。
2. 损耗率参数化（50/70/90%）对撤退决策的影响。
