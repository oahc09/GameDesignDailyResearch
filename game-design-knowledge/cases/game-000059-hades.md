---
id: game-000059
title: "Hades"
aliases: ["哈迪斯（中文通行译名）", "Hades"]
genres: [action, hybrid, strategy]
subgenre_tags: []
platforms: [pc, nintendo_switch, ps4, ps5, xbox, ios（Netflix，2025-07 移除）]
release_year: 2020
creators: ["Supergiant Games（设计/编剧 Greg Kasavin；作曲/配音 Darren Korb；美术 Jen Zee；约 20 人；引擎自 C#/XNA 重写为 C++（The Forge））"]
core_loop: "逃出冥界（四区域随机房间）→ 死亡回冥府之家 → 与 NPC 关系推进（对话链跨局续写）→ 镜子/武器形态 meta 进度 → 再逃 → 完成 Persephone 故事线"
mechanic_ids: [mechanic-000063]
pattern_ids: []
quality_score: 4.48
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Hades_(video_game)"
    title: "Hades (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-15"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["EA 2018-12（TGA 公布为 Epic 限时独占；Steam 2019-12-10）→正式版 2020-09-17（macOS/Windows/Switch）；PS/Xbox 2021-08-13；iOS Netflix 2024-03-19（2025-07 移除）", "Supergiant 团队（Kasavin 编剧/Rao/Simon/Gorinstein/Lai；Jen Zee 美术；Korb 作曲并配 Zagreus）", "玩法全项（四区域随机房间+Boss、主攻击/特殊/投掷/冲刺/召唤、Olympian Boons 主题增益、死亡回 House of Hades、obols 损失但其他货币购买永久升级、武器解锁/形态升级、NPC 关系含 Megaera/Thanatos 罗曼线、任务、Pact of Punishment 胜后 heat 自定难度、God Mode 无障碍选项）", "叙事持续（对话链跨局推进；约 10 小时对话绑定分支事件；NPC 对反复死亡与逃脱做出反应；Persephone 缺席的故事经多次通关与 epilogue 宴会解决）", "EA 结构化用于玩家反馈；原名 'Minos' 主角为 Theseus，Kasavin 因 Hades 在神话中被低估而转向 Zagreus；roguelike 结构解决了 Pyre 的分支叙事重玩问题；引擎重写 C++（The Forge）", "销量（EA 70 万份；正式版三天再加 30 万→破百万）", "获奖（TGA 2020 最佳独立+最佳动作；BAFTA 年度游戏+游戏设计+叙事+艺术成就+Logan Cunningham 配角；DICE/GDC/SXSW/NYGA/Gayming；星云奖最佳游戏写作；首个 Hugo Award 2021）", "MC 93 'universal acclaim'；速通社区；2023-08 玩家完成曾被视为不可能的 64-Heat"]
created_at: "2026-11-15"
updated_at: "2026-11-15"
---

# Hades（game-000059）

## 核心体验
把 roguelike 的"死亡回重开"改写成**叙事推进器**：每次死亡回冥府之家，NPC 对你的死亡做出反应、关系推进、故事只在多次通关后才完整——死亡不是重置，是剧情的下一幕。Kasavin 明言这是对 Pyre 问题（玩家不重玩分支叙事）的解法（Wikipedia）。

## 规则与状态转移（含最简伪代码）
- 状态：`(run 内状态（房间/Boons/HP）, meta 层（货币/武器/关系/任务）, 对话队列)`；输入：`{攻击/冲刺/投掷/召唤, 对话选择}`。

```text
run:   四区域随机房间 → Boss → （胜）逃出 / （败）回 House of Hades
boons: Olympian 主题增益（run-only——局内随机构筑）
meta:  其他货币购买永久升级/武器形态/关系推进（死亡不白费）
叙事:  对话队列跨局推进——NPC 对你的死亡与逃脱逐次反应；约 10 小时对话绑定分支事件
难度:  Pact of Punishment（胜后 heat 自定）；God Mode 无障碍选项
```

## 输入与输出
- 输入：hack-and-slash 操作（攻击/冲刺/投掷/召唤）+ 对话选择。
- 输出：Jen Zee 美术、Korb 的约 2.5 小时音乐（设计为"经得起数百小时"——Wikipedia 口径）、NPC 关系演出。

## 难度与学习曲线
难度=构筑决策（Boons 随机）+ 热度自调（Pact）；叙事进度把"死亡挫败"转写为"回家看剧情"——挫败与奖励交替的节律是留存核心（分析口径）。64-Heat 全禁用挑战被社区完成（2023）——热度系统的深挖上限被玩家实证。

## 关联机制与模式
- 机制：mechanic-000063（死亡叙事持续——NPC 反应与对话链跨局推进）
- 模式：与 pattern-000003（每日稀缺）、pattern-000006（尊重式辅助——God Mode 选项）对照；与 game-000021（VS 时钟封顶）、game-000032（GOI 无检查点）同属"失败处理"谱系的叙事分支：**死亡被赋予意义而非被消除**。
- EA 方法论：结构化 EA 更新（玩家反馈驱动）+ 原名 Minos→Zagreus 转向（Wikipedia）——EA 作为设计工具而非营销工具的样本。

## 设计权衡
- 优点：死亡叙事化解决了肉鸽"死亡=重置无意义"的问题（约 10 小时对话的消费需求反过来驱动重玩）；MC 93 + 雨果奖（文学界首个游戏奖）双认证；EA 管线（70 万 EA 销量+结构化反馈）。
- 缺陷：叙事内容的生产成本巨大（10 小时对话——一次性写入不可生成）；通关后的叙事耗尽（分析口径）。
- 反例：与 game-000051（NetHack 骨头文件——死亡内容由社区叙事承载）对照：Hades 由官方叙事承载死亡意义、NetHack 由玩家文化承载；两条"死亡意义化"路线。
- 适用场景：叙事×肉鸽融合；需要"失败有意义"的循环设计。

## 可复现的最小版本与算法
对话队列+死亡事件触发器+meta 货币+关系状态机即可复现"死亡叙事化"骨架；对话内容为人工写作层（不可生成，10 小时的成本即证据）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| EA 2018-12 → 1.0 2020-09-17；70 万+30 万销量 | Wikipedia |
| 玩法全项（Boons/Pact/God Mode/关系与罗曼线） | Wikipedia |
| 叙事持续（10 小时对话/NPC 反应死亡/Persephone 线） | Wikipedia |
| Pyre 问题与结构化 EA（Kasavin 口径） | Wikipedia |
| 获奖全表（TGA/BAFTA 年度/星云/Hugo 首个） | Wikipedia |

## 推断与未知
- **未知**：对话队列的完整触发条件表（10 小时内容的设计文档未公开）；Mirror/Keeepsakes 名称（检索文本未确认——不使用专有名词断言）。
- **推断（分析而非事实）**：God Mode（Wikipedia 确认存在）是 pattern-000006（尊重式辅助）在 roguelike 的落地——辅助在肉鸽里的难点是"辅助是否污染 run 内随机构筑"（分析）。
- 引擎重写（C#→C++ The Forge，约 20 人）证明 EA 期间的技术投入与内容更新并行（事实层）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000027：死亡叙事密度剂量实验。
2. 关系推进×构筑耦合：NPC 好感解锁 Boons 变体——检验叙事进度与构筑随机性的耦合是否削弱构筑多样性。
