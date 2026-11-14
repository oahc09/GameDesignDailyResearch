---
id: mechanic-000052
name: "item_identity_bones_files（物品身份学习与骨头文件跨局传承）"
aliases: ["身份学习", "bones files", "YASD culture"]
category: progression
inputs: ["物品使用（试错）", "鉴定手段（卷轴/祭坛）", "死亡事件"]
state_variables: ["物品身份表（逐局重随机）", "角色/宠物", "骨头文件队列", "死亡排名"]
preconditions: ["同类物品共用乱码标签", "死亡逐局携带可配置（公共服务器）"]
transition_rules: ["乱码外观 → 试错或鉴定卷轴 → 确认终身有效（本局）", "交互矩阵数千组合被预先编码（TDTTOE）", "玩家死亡层 → 骨头文件随机插入他人游戏（带诅咒遗物）", "permadeath + 排名 + 'Do you want your possessions identified?'", "YASD 自嘲文化；save-scumming 判定为作弊"]
feedback: ["死亡排名与物品鉴定提示", "社区 YASD/攻略叙事", "锦标赛排行榜"]
parameters: ["交互矩阵规模", "标签重随机种子", "骨头文件插入率", "诅咒/祝福概率", "飞升条件"]
failure_modes: ["知识门槛劝退（ASCII+矩阵）", "刷档侵蚀 permadeath 契约（社区判定为作弊）", "骨头文件携带诅咒的争议"]
related_case_ids: [game-000051]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

"死亡即知识"的最长历史实践：乱码标签逐局重随机（身份学习不可继承）、骨头文件（你的死亡成为他人的关卡内容——异步社交的最早实践之一，分析口径）、YASD 文化与 TDTTOE 承诺（每种组合都有答案）。影响链：Diablo/Minecraft/Spelunky/Mystery Dungeon（Wikipedia）；Meta AI 的 NetHack Learning Environment 使其成为 AI 基准（NeurIPS 2021）。
