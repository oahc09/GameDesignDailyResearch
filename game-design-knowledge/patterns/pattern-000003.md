---
id: pattern-000003
name: "daily_scarcity_share（每日稀缺 + 无剧透分享）"
aliases: ["每日一题", "daily puzzle loop"]
related_case_ids: [game-000005]
related_mechanic_ids: [mechanic-000005]
confidence: source_reviewed
created_at: "2026-10-27"
updated_at: "2026-10-27"
---

## problem
强随机或强技巧玩法如何在不持续产出内容的前提下维持长期回访，并把玩家成绩转化为传播。

## context
答案/结果本身含信息量（词、路径、塔形）；玩家群体重叠于同一社交网络；单局成本低。

## solution
三件套：① 全局同题每日一次（Wardle 自述制造 "sense of scarcity"）；② 结果编码为无剧透可分享产物（emoji 方格，社区发明被官方采纳）；③ 历史战绩统计承载长期身份。三者缺一：非同题则比较失效，可剧透则分享伤人，无稀缺则无谈资。

## tradeoffs
- 错过焦虑（FOMO）与"今天没玩"的违约感是留存动力也是压力源。
- 每日一次封顶压制重度会话，与超休闲重开习惯直接冲突。
- 词表/答案库成为持续运营与合规成本（NYT 移除敏感词，Wikipedia）。

## known_uses
- game-000005 Wordle（原型案例）

## counterexamples
- 无尽休闲（game-000001 等）依赖 mechanic-000006 即刻重开而非稀缺——同一玩家群体中两种引擎并存于不同产品，但在同一产品内混用会互相稀释（重开欲被"明天再来"截断，稀缺感被无限重开消解）。
