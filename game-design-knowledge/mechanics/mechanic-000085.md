---
id: mechanic-000085
name: "walking_distance_economy（步行距离经济——蛋孵化与 Buddy 产糖）"
aliases: ["步行经济", "walking economy"]
category: economy
inputs: ["现实世界移动（GPS 验证）", "投球捕捉", "道馆/补给站交互"]
state_variables: ["GPS 位置", "宝可梦收藏", "蛋与孵化距离", "糖果", "道馆阵营", "活动日历"]
preconditions: ["游戏内资源生产绑定现实步行距离", "现实世界地标作为交互节点（道馆/补给站）"]
transition_rules: ["蛋孵化绑定步行距离（2/5/10km）", "Buddy 伴宝可梦按距离产糖", "三阵营道馆争夺 → Raid 团体战", "Community Day/Go Fest 时间地缘节律", "等级 40→50→80 长线"]
feedback: ["AR 相机叠加", "蛋孵化演出", "Community Day 社区活动"]
parameters: ["孵化距离档（2/5/10km）", "Buddy 产糖距离", "遭遇分布（环境映射）", "Raid 难度分层", "活动日历"]
failure_modes: ["MC 69 玩法深度批评（Guardian 2/5 口径）", "现实安全问题与扰乱（Wikipedia 载）", "权限与数据争议", "地缘限制（中国/韩国）"]
related_case_ids: [game-000081]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

把"游戏内资源生产"外包给玩家的现实行为——步行=资源（蛋/糖），地标=内容（道馆/补给站），社区=活动（Community Day）。健康研究外溢（日均多走 194 步，Wikipedia）证明游戏收益可以外溢到生活。MC 69 vs 社会现象的落差证明：玩法评价与产品价值可以完全脱钩（分析口径）。
