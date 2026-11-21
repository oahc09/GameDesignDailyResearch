---
id: mechanic-000077
name: "fill_in_deduction（填空叙述与逐段锁定）"
aliases: ["填空演绎", "keyword slots"]
category: feedback
inputs: ["Exploring 点选收集关键词", "Thinking 模式填词"]
state_variables: ["场景关键词集", "叙述空槽", "锁定段落集"]
preconditions: ["叙述有唯一正解（设计者验证）", "错误段落即时标红（局部反馈）"]
transition_rules: ["探索收集关键词入词库", "空槽填词 → 正确段落锁定；错误标红", "11 案跨案人物网串联", "DLC/Redux 提示系统扩展"]
feedback: ["段落锁定/标红的即时局部反馈", "手绘场景检视"]
parameters: ["空槽结构", "关键词词库", "反馈粒度（逐段）", "提示系统（Redux）"]
failure_modes: ["猜词批评（线索晦涩——Adventure Gamers 3/5 口径）", "受限填空削弱开放推理感", "跨案人物的记忆负荷"]
related_case_ids: [game-000073]
related_mechanic_ids: [mechanic-000028]
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

演绎反馈密度谱的"逐段即时"位：Her Story（零反馈多义）→ Obra Dinn（3 批量确认）→ Golden Idol（逐段填空即时锁定）——同一演绎玩法的反馈经济学三兄弟（对照 mechanic-000028，分析口径）。填空化是演绎的向下兼容（受限槽位保证可完成，对照 Obra Dinn 自由填写的精英路线，分析）。
