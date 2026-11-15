---
id: mechanic-000062
name: "boost_car_ball_physics（助推经济与车载球物理）"
aliases: ["车球物理", "boost economy"]
category: state_transition
inputs: ["油门/转向", "跳跃/翻滚", "助推（垫/全充）"]
state_variables: ["车辆（位置/姿态/助推量）", "球物理", "比分", "计时 5 分钟+加时"]
preconditions: ["车与球为刚体物理（任意部位可击球）", "助推垫/全充点分布固定"]
transition_rules: ["助推消耗 → 超速与空中机动", "跳跃+助推 → 空中击球（高阶）", "碰撞击球 → 球物理响应", "漏球 → 对方得分；5 分钟+突然死亡加时"]
feedback: ["助推火焰", "球物理轨迹", "进球爆炸（装饰层）"]
parameters: ["助推垫/全充分布与充能", "车辆操控参数", "球物理参数", "赛制时长", "装饰经济"]
failure_modes: ["技能阶梯陡峭（新手被碾压）", "'floaty physics' 手感批评（Wikipedia 口径）", "助推经济的优化深不可测（竞技化后）"]
related_case_ids: [game-000058]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-15"
updated_at: "2026-11-15"
---

物理体育的跨类型融合：足球攻防+火箭车空中物理（组合上限即深度，规则可五句讲完——与 game-000030 同构）。SARPBC（2008）失败 → RL 成功的三改：改名去术语化、五分钟赛制压缩、跨平台合并受众（分析口径）。F2P 次日百万同时在线（Wikipedia）为受众扩容路线标杆；助推垫经济与 game-000039 太阳双源经济同构（产能+捡拾）。
