---
id: mechanic-000026
name: "lockstep_command_stream（确定性锁步与指令流同步）"
aliases: ["锁步同步", "deterministic lockstep"]
category: state_transition
inputs: ["玩家指令流（建造/训练/移动/攻击）"]
state_variables: ["本地全量模拟状态", "全局 tick 计数", "指令等待队列", "周期校验和"]
preconditions: ["模拟完全确定性（定点数、受管随机、无浮点跨机漂移）", "各机同版本逻辑"]
transition_rules: ["时间切为固定 tick；tick t 的指令在所有机器到齐后统一执行", "同起点+同指令序列 => 所有机器状态恒等", "网络零状态传输（只传指令）", "定期校验和比对，不一致即 desync 处理"]
feedback: ["本地即时画面（各机自绘）", "等待迟到的提示（tick 卡顿）", "desync 断线报错"]
parameters: ["tick 长度", "指令等待超时", "校验和频率", "定点数精度", "同步随机种子策略"]
failure_modes: ["一人高延迟全场卡顿（lockstep 固有）", "确定性税：全代码库禁浮点/受管随机，任何疏漏成 desync", "desync 调试极难（需逐 tick 对账）", "版本差异引发系统性 desync"]
related_case_ids: [game-000025]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

网络模型的范式支点：带宽与单位数解耦（状态零传输），代价是"确定性税"由全部游戏逻辑承担。被低估的红利是**指令流即录像**——回放/观战/反作弊免费获得，电子竞技的回放文化在 RTS 上率先成型与此直接相关（分析口径）。与状态同步模型（FPS 系）构成网络设计光谱两端。文献："1500 Archers on a 28.8"（Bettner & Terrano，GDC 2001；被引 160+）。
