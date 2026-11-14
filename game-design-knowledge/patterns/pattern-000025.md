---
id: pattern-000025
name: "deterministic_preview_design（确定性预览设计——把未来预先展示）"
aliases: ["预览谱系", "show the future"]
related_case_ids: [game-000053, game-000055, game-000049, game-000020]
related_mechanic_ids: [mechanic-000054, mechanic-000056, mechanic-000050, mechanic-000021]
confidence: source_reviewed
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

## problem
基于物理/规则的玩法存在"看不见的未来"——新手无法理解决策与结果的因果链，学习只能靠试错。

## context
未来结果可计算（物理确定或规则确定）；信息展示存在"辅助-挑战"滑杆；受众含大量新手。

## solution
把"未来"按**剂量**预先展示：Angry Birds 全程弹道虚线（移动大众取向）；Peggle 只预览下一次反弹（信息节流保住读概率技能）；Into the Breach 预告一轮敌攻（战术完全信息）；Slay the Spire 的 Intent（同谱系卡牌位）。共同契约：预览必须与实际结算一致（确定性前提，接 pattern-000021）。

## tradeoffs
- 预览剂量越足，门槛越低但"猜"的乐趣越少（AB 全程预览使弹道学习近乎零——对其受众是正确的）。
- 预览与结算不一致即信任崩塌（浮点漂移/隐形修正都会破坏契约——接 hypothesis-000004 的透明度谱）。
- UI 成本：预览可视化本身是渲染与设计负担（Peggle 需一次反弹的轨迹计算）。

## known_uses
- game-000053 Angry Birds（全程弹道虚线——移动端范式）
- game-000055 Peggle（绿靶轨迹预览——部分未来）
- game-000049 Into the Breach（敌方攻击预告一轮）
- game-000020 Slay the Spire（Intent 图标）

## counterexamples
- game-000018 XCOM：刻意隐藏真实概率并把"95% miss"做成叙事——预览谱系的完全反例；与 game-000051 NetHack（涌现不可预知）一起说明：预览是可选设计而非义务。
