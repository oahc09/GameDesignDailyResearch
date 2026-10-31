---
id: mechanic-000017
name: "first_click_safe_generation（首击后生成与首击安全区）"
aliases: ["首击保护", "generate after first click"]
category: randomization
inputs: ["首次开格点击"]
state_variables: ["雷布局（首击后才生成）", "网格三态", "已开计数"]
preconditions: ["生成时序可反转（先交互后随机）"]
transition_rules: ["首击 -> 布雷生成（避开首击格）", "Vista 起加强：首击八邻均无雷（首点即展开一片 flood-fill）", "此后数字 = 八邻雷数，0 触发连锁展开"]
feedback: ["开局大片展开（正反馈开场）", "数字染色系统"]
parameters: ["首击保护区半径（1 格 / 八邻）", "雷密度（16%/21% 档位）", "生成算法（纯随机 vs 可解性回退）"]
failure_modes: ["纯随机生成仍留 50/50 纯逻辑死角", "可解性回退生成的计算代价随盘面增大", "首击保护过强（更大保护区）会消除开局决策"]
related_case_ids: [game-000016]
related_mechanic_ids: []
confidence: verified
created_at: "2026-10-31"
updated_at: "2026-10-31"
---

随机化时序反转的教科书案例：**先点击、后布雷**——把"随机可能当场杀死你"从游戏第一秒移除，开局从赌博变成礼物（大片展开的正反馈）。Vista 的"八邻无雷"加强说明保护区半径本身是设计参数。它也定义了一个问题家族：现代变体进一步用"生成时保证可解"（生成端解决猜题）回应纯逻辑死角——随机化的公平可以从抽样、时序、生成三个位置注入（分析口径）。
