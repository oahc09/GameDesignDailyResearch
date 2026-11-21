---
id: pattern-000028
name: "indirect_control_spectrum（直接-间接控制谱系）"
aliases: ["间接控制谱", "indirect vs direct"]
related_case_ids: [game-000072, game-000067, game-000059, game-000002]
related_mechanic_ids: [mechanic-000076, mechanic-000071, mechanic-000063, mechanic-000002]
confidence: source_reviewed
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

## problem
"控制角色"不是二元的（直接控 vs 完全不控）——控制权可以按粒度、对象与方式连续分配，而分配方式决定玩法的技能结构与受众。

## context
存在可自动化的执行层（角色行走/战斗/球体弹跳）；存在设计者想让玩家负责的决策层（技能分配/世界布局/资源）。

## solution
按**控制权分配**定位设计：直接控制个体（Crossy Road 一只）→ 间接控制群体（Lemmings 分配技能）→ 控制环境（Helix 转塔、Loop Hero 放地形牌）→ 只控制元层（Cookie Clicker 飞升决策）。判据：玩家失败时应归因于哪一层的决策。

## tradeoffs
- 间接层越高，新手挫败越小但"操作爽感"越弱（Lemmings 无法救任何一只的无力感 vs Crossy 的即时反馈）。
- 归因模糊风险（转塔失败是塔的问题还是手的问题——mechanic-000071 的 failure_mode）。
- 间接控制是 RTS 的谱系源头（Lemmings 启发魔兽——Bob Fitch 口径，Wikipedia）。

## known_uses
- game-000072 Lemmings（群体技能分配——间接控制奠基）
- game-000067 Helix Jump（控制环境：转塔不转球）
- game-000065 Loop Hero（控制世界生成：地形牌）
- game-000068 Cookie Clicker（只控元层：飞升决策）
- game-000059 Hades（局内直接、死亡后 meta 层间接——混合谱）

## counterexamples
- game-000002 Crossy Road / game-000044 Pong：直接控制个体的一端样本——证明直接控制在碎片休闲与对称对战中的不可替代性（即时反馈=公平对战的前提）。
