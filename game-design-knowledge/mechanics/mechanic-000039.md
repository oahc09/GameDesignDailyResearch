---
id: mechanic-000039
name: "lane_sun_dual_economy（车道防线与太阳双源经济）"
aliases: ["车道塔防", "sun economy"]
category: economy
inputs: ["选种", "种植（车道格）", "铲除", "太阳收集点击"]
state_variables: ["车道网格（5/6 车道）", "太阳存量", "种子冷却表", "割草机余量（每车道一次）", "波次进度"]
preconditions: ["太阳双源：向日葵产能 + 场景掉落", "每植物独立冷却"]
transition_rules: ["种植消耗太阳并进入该卡冷却", "向日葵产能 vs 掉落点击（投资 vs 微操作）", "僵尸按车道推进；遇植物啃食", "割草机：车道被突破时清线一次（宽容最后防线）", "五章环境变体改写经济与规则（夜/泳池/雾/屋顶）"]
feedback: ["波次提示", "僵尸血量档位可视化（路障/铁桶）", "割草机触发演出"]
parameters: ["植物成本表", "冷却时间", "太阳产出速率", "波次生成表", "割草机数量=车道数"]
failure_modes: ["纯产能化的放置化退化（只种向日葵）", "难度人工感（RPS 批评口径）", "车道数过少使策略扁平"]
related_case_ids: [game-000038]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

车道化把塔防的空间决策压缩为可读的"五线谱"；太阳双源经济耦合"产能投资"与"主动微操作"（纯产能会退化为放置，分析口径）。割草机是阵型层的隐形容错（宽容最后防线，与输入宽恕同族异层）。设计谱系：Insaniquarium 防御向改造 + MTG 种子包 + Tapper（Wikipedia）——跨类型融合的管道样本。
