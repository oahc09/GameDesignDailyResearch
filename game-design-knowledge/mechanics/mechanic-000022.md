---
id: mechanic-000022
name: "auto_attack_positioning（自动攻击下的走位自由度集中）"
aliases: ["全自动武器", "positioning-only combat"]
category: input_pattern
inputs: ["方向移动（唯一持续操作）", "拾取（接触自动）"]
state_variables: ["位置", "等级/XP", "武器+被动槽", "金币 meta", "会话计时"]
preconditions: ["武器开火策略完全自动（冷却/朝向由表驱动）", "会话有时钟软上限"]
transition_rules: ["武器全自动开火，玩家不控制时机与目标", "XP/金币/血包靠身体接触拾取", "升级三选一（新武器/被动/升级）", "15/20/30 分钟软上限 -> Reaper 收束", "金币跨 run 解锁角色与永久强化"]
feedback: ["满屏弹幕的力量幻想演出", "XP 宝石海洋", "升级三选一决策点"]
parameters: ["武器冷却与朝向策略表", "敌人潮生成曲线", "XP 曲线与三选一池", "时钟上限档位", "meta 定价"]
failure_modes: ["构筑定型后后期空虚", "数值爆炸的性能与可读性压力", "自动化的随机分布产生'运气局'感知"]
related_case_ids: [game-000021]
related_mechanic_ids: [mechanic-000010]
confidence: verified
created_at: "2026-11-01"
updated_at: "2026-11-01"
---

操作负载的**集中转移**：把瞄准/连招/资源管理全部自动化，玩家自由度集中到"走位"这一最高价值维度——与 mechanic-000010（按住下潜）同属"单输入深度"家族，但本机制把省下的操作预算换成了**构筑决策**（升级三选一）。时钟软上限（同 game-000009 谱系）让失败归零、每局都是完整力量幻想弧线。
