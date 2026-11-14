---
id: mechanic-000043
name: "tool_combination_puzzles（工具组合谜题）"
aliases: ["工具箱谜题", "laser connector puzzles"]
category: state_transition
inputs: ["第一人称移动", "拾取/放置工具", "连接操作"]
state_variables: ["场景实体（激光源/接收器/门）", "已放置工具", "徽记进度"]
preconditions: ["工具间存在组合语义（连接器串联/干扰器压制）", "谜题有唯一或约束解"]
transition_rules: ["连接器建立激光链路（可折射分光、串联）", "干扰器暂时压制源/炮塔", "六面体垫脚/风扇起飞/记录仪回放自身时间线", "收集徽记解锁塔层；三结局（顺从/爬塔/独立）"]
feedback: ["激光链路可视反馈", "工具放置残留", "终端文本与 QR 涂鸦"]
parameters: ["工具箱清单", "谜题数（120+）", "解锁节奏", "记录仪时间窗"]
failure_modes: ["组合空间后期同质化", "多工具谜题的歧义解风险", "文本与谜题节奏争夺"]
related_case_ids: [game-000042]
related_mechanic_ids: [mechanic-000008]
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

模块化谜题生产管线：固定工具箱 × 场景约束 → 无限谜题变体（Croteam 射击管线转型样本）。记录仪（回放自身时间线合作）是 Braid 影子世界（game-000007 W4）的独立抽取——时间谱系的第三支（倒带/门控/回放合作）。
