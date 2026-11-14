---
id: mechanic-000055
name: "blueprint_logistics_network（蓝图物流网络与吞吐模拟）"
aliases: ["物流即计算", "factory logistics"]
category: state_transition
inputs: ["建造/拆除", "配方编辑", "电路布线", "蓝图粘贴"]
state_variables: ["实体/物流网络", "电力网", "研究树", "虫群威胁", "蓝图库"]
preconditions: ["吞吐速率可测量（各环节速率失配=瓶颈）", "蓝图可跨玩家共享（公共库）"]
transition_rules: ["采矿→传送带→组装机→中间产物链", "瓶颈可见性：各环节速率失配可诊断", "电路组合器网络=逻辑门/寄存器（社区图灵完备实践）", "污染扩散→虫群进化攻击", "火箭发射胜利后可继续"]
feedback: ["吞吐可视化", "污染云图", "虫群进攻波", "火箭发射"]
parameters: ["配方树", "物流速率表", "虫群进化阈值", "蓝图库规则", "研究树"]
failure_modes: ["开工量巨大（新手手搓期，社区共识口径）", "虫群战争与工厂优化的注意力争夺", "吞吐诊断门槛"]
related_case_ids: [game-000054]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

"物流即计算"的工厂系样本：瓶颈永远可见使优化循环自驱（发现→诊断→重构）；蓝图公共库把"玩家解法"升为"可分享的策略资产"——UGC 从内容层升为策略资产层（分析口径）。电路网络的社区图灵完备实践与 DF（game-000026）呼应。发行史（Indiegogo→EA 十年→1.0 避 Cyberpunk 提前）本身是 EA 模式教科书。
