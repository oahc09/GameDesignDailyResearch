---
id: mechanic-000036
name: "pair_merge_bias（特例合并与稀有度计分）"
aliases: ["1+2=3", "rarity scoring"]
category: state_transition
inputs: ["四向滑动（全盘移动一格制）"]
state_variables: ["4×4 网格", "生成队列（颜色预览）", "score（稀有度加权）"]
preconditions: ["生成分布偏向低值", "下一块颜色预览可见"]
transition_rules: ["1+2 → 3（唯一异值合并特例）", "3+3 → 6 → 12 → …（3×2^n 同值翻倍）", "全盘滑动一格（非滑到底）", "计分 = Σ(稀有度权重 × 牌面)——非面值直加", "双 6144 → 秘密三角牌并立即结束（彩蛋）"]
feedback: ["下块颜色预览", "牌面人格语音（独立开发者配音）", "合成动画"]
parameters: ["稀有度权重表", "生成分布", "预览数量", "网格 4×4"]
failure_modes: ["无路可走终局（与 2048 同）", "特例规则的新手误读（1+2 之外的异值不合）", "一格制使棋盘更早满（与滑到底制对比）"]
related_case_ids: [game-000035, game-000015]
related_mechanic_ids: [mechanic-000016]
confidence: verified
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

与 2048（mechanic-000016）的三处关键分岔：① 1+2 特例制造不对称资源语义（原料/资产分离）；② 稀有度计分让"牌面值≠得分贡献"，决策深度加深；③ 全盘一格制+预览保留规划性。规则可完全形式化；一夜原型+14 个月迭代+24 主题否决的开发史（Wikipedia）是内容探索成本的一手样本。
