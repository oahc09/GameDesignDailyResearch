---
id: mechanic-000038
name: "lives_time_gate_monetization（生命实时回充与货币化耦合）"
aliases: ["生命墙", "lives economy"]
category: economy
inputs: ["关卡开始（扣一条生命）", "失败判定", "好友索取/购买"]
state_variables: ["生命余量（上限 5）", "回充计时器", "金条/货币", "章节地图进度"]
preconditions: ["关卡失败有明确判定（步数用尽未达标）", "生命回充周期固定"]
transition_rules: ["失败扣一条生命", "半小时回充一枚（Wikipedia 口径）", "好友索取/金条购买即时回充", "章节推进（曾可付费跳章）"]
feedback: ["生命倒计时 UI（挫败的可见计时器）", "金条商店", "章节地图推进"]
parameters: ["生命上限 5", "回充周期 30 分钟", "生命价格", "步数限制（难度杠杆）", "章节跳章定价"]
failure_modes: ["挫败与付费墙的伦理张力（英国 OFT 审查案例）", "回充周期过短削弱付费动机", "过长的冷却造成流失（回流窗口设计）"]
related_case_ids: [game-000037]
related_mechanic_ids: [mechanic-000019]
confidence: verified
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

货币化的时间闸门：把"挫败后的等待"变成货币化触点（回充计时器=可见的付费动机）。与 mechanic-000019（XCOM 显示概率）同为"体验参数的商业化"家族但方向相反：XCOM 调校体验不收费，Candy Crush 把体验缺口明码标价。97.7%/2.3% 的免费/付费比（Wikipedia）说明模型依赖小额高频或 whale 结构（细节未公开）。
