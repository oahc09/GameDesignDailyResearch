---
id: hypothesis-000012
name: "guaranteed_path_generation（模板保证法量化对比）"
aliases: []
ingredients: [mechanic-000025, mechanic-000017]
related_case_ids: [game-000024, game-000016]
novelty_claim: "把 Spelunky 模板保证法（mechanic-000025：先铺解路径再填模板）与 Minesweeper 式验证-回退法（mechanic-000017 的生成端公平谱系）在房间制 rogue 生成上做受控对比，量化两者的可解性失败率、生成耗时与玩家'新鲜感/可读性'感知差异。未经对比研究不得声称行业首创。"
test_plan: "同一关卡尺寸三臂生成器：A 纯随机房间（基线）；B 模板保证法（先铺路径）；C 验证-回退法（生成后求解验证，失败重来）。离线先行：各生成 10,000 关统计可解率与耗时；再真人测试 ≥20 名玩家各试玩 10 关，采集卡关率、'这次洞和上次不同'自评（7 级）。成功指标：B/C 可解率 100% 且 B 生成耗时显著低于 C；失败判定：B 组玩家模板识别疲劳（新鲜感自评低于 A 且逐关递减）。"
risk: "模板池规模与工程成本的权衡（池小则疲劳快）；解路径铺设约束可能让关卡结构趋同（每关'形状相似'）。"
status: proposed
created_at: "2026-11-07"
updated_at: "2026-11-07"
---
