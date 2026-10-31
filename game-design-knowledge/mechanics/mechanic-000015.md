---
id: mechanic-000015
name: "seven_bag_randomizer（七袋保底抽样）"
aliases: ["7-bag", "bag system", "袋式抽样"]
category: randomization
inputs: ["方块抽取请求（每落定一块触发）"]
state_variables: ["当前袋剩余集合", "袋内随机顺序队列"]
preconditions: ["资源种类有限且已知（七种 tetromino）", "玩家可观察当前块与下一块"]
transition_rules: ["袋空 -> 重填全部 7 种并随机排序", "每次抽取从袋中移除一件", "Guideline 口径：每 7 块保证七种各出现一次"]
feedback: ["next 预览（通常预览 1-6 块）", "可数性：玩家可对袋内余量计数"]
parameters: ["袋长 N=7", "预览数量", "（变体）袋长本身可调 3/7/14 作为难度旋钮"]
failure_modes: ["袋内顺序仍可产生短期恶局（同形相邻）", "可数性让高手获得信息优势（新手-高手感知差）", "若资源种类增长（>10），袋长线性变长、保底感稀释"]
related_case_ids: [game-000014]
related_mechanic_ids: []
confidence: verified
created_at: "2026-10-31"
updated_at: "2026-10-31"
---

把 iid 随机改为**有记忆的抽样**：方差被制度化压缩——N 块窗口内资源必然齐备，玩家的规划期恰好覆盖一个完整资源集（分析口径）。与 mechanic-000016（iid 生成）构成随机化两极；与 mechanic-000019（内部概率修正）同属"记忆型随机"家族但实现相反（前者保证下限、后者截断厄运上界）。NES 早期随机器并非 7-bag（具体算法本日未核验，见案例卡未知项）。
