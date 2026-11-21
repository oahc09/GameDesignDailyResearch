---
id: mechanic-000078
name: "keyword_database_narrative（关键词检索的数据库叙事）"
aliases: ["数据库玩法", "search narrative"]
category: input_pattern
inputs: ["关键词文本检索", "播放剪辑"]
state_variables: ["已观看剪辑集", "关键词历史"]
preconditions: ["剪辑不可顺序播放（只能检索发现）", "真相多义（不作官方裁决）"]
transition_rules: ["关键词 → 匹配剪辑列表", "观看剪辑 → 发现新关键词 → 迭代检索", "特定搜索达成 → 聊天窗确认结束（单一结局序列）"]
feedback: ["FMV 剪辑（Seifert 表演）", "检索结果列表", "观看计数器"]
parameters: ["剪辑总量（271）", "检索匹配算法", "完成判定搜索", "多义叙事设计"]
failure_modes: ["检索不到关键词即卡关（无引导硬门槛）", "单一演员观感局限", "多义叙事的解读分歧管理"]
related_case_ids: [game-000074]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

数据库玩法的确立样本（Barlow 独立开发，TGA 最佳叙事+IGF 大奖+BAFTA 三奖——Wikipedia）：约束本身是设计——"剪辑不可顺序观看"使检索成为唯一叙事入口（若可顺序播放，检索即失去意义，分析口径）。演绎反馈密度谱的零反馈位（对照 Obra Dinn/Golden Idol）。
