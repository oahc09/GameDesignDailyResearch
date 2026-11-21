---
id: hypothesis-000031
name: "resource_pump_aggression_quantify（资源泵强度的站位量化）"
aliases: []
ingredients: [mechanic-000074]
related_case_ids: [game-000070, game-000012]
novelty_claim: "Doom 2016 的资源泵（mechanic-000074：Glory Kill 回血/链锯回弹药）把玩家站位从保守推向激进——量化检验：资源泵回血倍率（×0.5/×1/×2）对玩家平均站位距离与生存时间的剂量曲线，验证'泵强度=激进度'的设计公式。未经对比研究不得声称行业首创。"
test_plan: "同一竞技场原型三臂（被试内随机，各 20 名玩家各玩 10 分钟）：A 无泵（固定医疗包）；B 标准泵（Glory Kill 回血 ×1）；C 双倍泵（×2）。遥测采集：与最近敌人的平均站位距离、处决频次、生存时间。成功指标：泵强度与站位距离显著负相关（剂量曲线单调）；失败判定：C 组出现'为泵而泵'的无脑冲锋（难度感知崩塌，玩家不再评估风险）。"
risk: "玩家技能差异混淆站位遥测；竞技场设计影响泵的可触达性；三臂的敌方 AI 必须同分布。"
status: proposed
created_at: "2026-11-21"
updated_at: "2026-11-21"
---
