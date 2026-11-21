---
id: mechanic-000067
name: "act_structure_mechanic_flip（幕结构机制翻转）"
aliases: ["幕翻转", "act flip"]
category: session_structure
inputs: ["前幕通关/解谜触发"]
state_variables: ["幕进度", "当前美术与机制集", "卡费/规则表（逐幕更换）", "元叙事层"]
preconditions: ["各幕机制可独立成立", "翻转时机对玩家完全不可预测"]
transition_rules: ["前幕通关 → 幕翻转（美术/机制/视角全部更换）", "机制随幕重定义（卡费系统能量→血→骨头/宝石）", "败局产出素材（死亡卡）跨幕可用", "元叙事层（ARG/found-footage）贯穿三幕"]
feedback: ["幕翻转的视觉语言切换", "新规则的教学隐嵌于首场对局"]
parameters: ["幕数（3）", "各幕机制表", "翻转触发条件", "跨幕资源继承规则"]
failure_modes: ["后期幕质量下滑（PC Gamer 69/Destructoid 7.5 批评口径）", "重玩价值集中单幕（Kaycee's Mod 即回应）", "幕间机制断层的学习成本"]
related_case_ids: [game-000063]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

把"惊喜"做成结构：幕翻转使玩家无法预测游戏下一形态（meta 叙事的机制化）。配套 Kaycee's Mod（最受喜爱幕独立成模式）证明翻转结构的服务化路径——把最受喜爱的幕独立成模式是翻转结构的 DLC 解法（分析口径）。LD43 原型（Sacrifices Must Be Made）→ Inscryption 为 jam 管道第七链（pattern-000027）。
