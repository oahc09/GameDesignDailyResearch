---
id: hypothesis-000007
name: "bag_randomizer_for_drops（袋式保底抽样移植掉落系统）"
aliases: []
ingredients: [mechanic-000015, pattern-000010]
related_case_ids: [game-000014, game-000018, game-000015]
novelty_claim: "把 7-bag 的有记忆抽样（mechanic-000015）用于幸存者/roguelite 的掉落与遭遇流：把 iid 掉落表改为'每 N 次掉落保证每种关键资源一次'，与 XCOM 式连败补偿（mechanic-000019）互为供给侧/体验侧两种保底，检验保底是否提升感知公平而不消除刷取乐趣。未经对比研究不得声称行业首创（gacha 软保底为商业异化先例，仅作参照）。"
test_plan: "幸存者原型 A/B/C：A 组 iid 掉落基线；B 组袋式保底（N=8）；C 组连败补偿（连续 20 只无掉落则提升概率）。各招募 ≥30 名玩家 20 分钟，采集：自评公平感（7 级）、主动刷怪时长占比、弃玩率、'记住掉落规律'正确率。成功指标：B/C 公平感显著高于 A 且刷怪时长不降；失败判定：B 组玩家发现并利用计数把刷怪退化为打工（乐趣→工作）。"
risk: "袋式保底使掉落可预测，破坏惊喜回路（与 dopamine 的可变比率原理冲突，行为主义口径）；保底+N 太短会让资源经济通胀，需联动定价。"
status: proposed
created_at: "2026-10-31"
updated_at: "2026-10-31"
---
