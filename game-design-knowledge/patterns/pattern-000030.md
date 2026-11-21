---
id: pattern-000030
name: "real_world_as_content（现实世界作为内容供给）"
aliases: ["LBS 内容化", "location content"]
related_case_ids: [game-000081, game-000065, game-000026]
related_mechanic_ids: [mechanic-000085, mechanic-000069, mechanic-000027]
confidence: source_reviewed
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

## problem
liveops 内容由开发团队持续生产，成本线性增长且必然耗尽团队想象力；玩家也无法在游戏之外获得真实收益。

## context
玩家携带移动设备；现实位置/行为可作为输入（GPS/步行/照片）；社区在同一真实空间活动。

## solution
把内容供给外包给现实：Pokémon GO 的地图/地标/社区节律（步行经济——蛋与 Buddy 绑定现实步行，健康研究外溢 194 步/日）；Loop Hero 把"世界生成"交给玩家出牌；DF 把"历史"交给模拟。共同点：**内容生产的外包对象依次为现实→玩家→系统**。

## tradeoffs
- 现实供给不可控（地缘限制/安全事件/数据争议——GO 的中国/韩国限制与权限争议，Wikipedia）。
- 玩家供给需要工具（Loop Hero 的邻接规则、DF 的 Legends 接口——涌现可读化是前置工程）。
- 评价脱钩风险（MC 69 vs 社会现象——玩法评价与产品价值可完全脱钩）。

## known_uses
- game-000081 Pokémon Go（现实位置+步行经济+社区节律）
- game-000065 Loop Hero（玩家出牌生成世界）
- game-000026 Dwarf Fortress（模拟生成历史）

## counterexamples
- game-000048 Subway Surfers：虚拟 World Tour 换景（约三周一换）——虚拟供给侧的对照样本；两者是 liveops 内容的两种供给侧（现实绑定 vs 团队生产）。
