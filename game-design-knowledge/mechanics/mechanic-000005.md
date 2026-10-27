---
id: mechanic-000005
name: "capped_color_feedback（限次颜色裁决与重复封顶）"
aliases: ["绿黄灰反馈", "mastermind feedback"]
category: feedback
inputs: ["定长字符串提交（须在合法词表内）"]
state_variables: ["历史猜测与颜色行", "剩余次数", "键盘键位染色状态", "当日答案（全局同题）"]
preconditions: ["每日一词、全球同题", "固定尝试次数（6）与词长（5）"]
transition_rules: ["先标绿并扣减答案字母计数；再把剩余量标黄；其余标灰（重复封顶）", "第 n 次 guess == answer → 胜；第 6 次未中 → 败", "Hard Mode：已揭示绿/黄位必须在后续猜测沿用"]
feedback: ["逐位翻牌动画", "键盘染色累积信息", "结果 emoji 方格（无剧透分享产物）"]
parameters: ["次数 6", "词长 5", "答案库 2,309 词", "合法猜测词表（大于答案库）", "重复封顶规则"]
failure_modes: ["重复字母误读（最常见的裁决误判）", "合法词表拒词的挫败", "连败挫败感被每日限 1 次放大", "词表更新引发的地域/合规争议"]
related_case_ids: [game-000005]
related_mechanic_ids: []
confidence: verified
created_at: "2026-10-27"
updated_at: "2026-10-27"
---

Mastermind 血统的离散裁决函数，关键增量是**重复封顶**（标记数不超过答案中该字母的出现次数）——它让裁决成为可完全形式化、可单测的确定性函数。配套两个非裁决件：键盘染色（把历史信息物化到输入界面）与 emoji 方格（把对局状态编码为可传播产物）。裁决函数与传播产物共同构成该玩法可复制性的全部。
