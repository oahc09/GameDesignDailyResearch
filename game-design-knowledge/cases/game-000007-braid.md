---
id: game-000007
title: "Braid"
aliases: ["时空幻境（中文通行译名）"]
genres: [puzzle, action, hybrid]
subgenre_tags: []
platforms: [xbox_360, pc, ps3, nintendo_switch]
release_year: 2008
creators: ["Jonathan Blow（Number None）", "David Hellman（美术）"]
core_loop: "平台跳跃尝试 -> 失误 -> 按住倒带回到任意过去时刻 -> 用世界专属时间规则重构解法 -> 收集拼图碎片推进叙事"
mechanic_ids: [mechanic-000008]
pattern_ids: [pattern-000004]
quality_score: 4.38
confidence: verified
verification_status: source_reviewed
original_url: "http://braid-game.com/"
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Braid_(video_game)"
    title: "Braid (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-30"
    source_type: encyclopedia
    evidence_level: B
    supports_claims: ["2008-08-06 XBLA 发行", "Blow 自筹约 $200k、历时三年", "六个世界各自的时间规则（含 World 1 时间倒流）", "销量与收入（首周 55k、2012 年 450k、2015 年约 $6M）", "Metacritic 93 (X360)", "周年版 2024-05-14 及后续动态"]
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

# Braid（game-000007）

## 核心体验
平台跳跃的全部失误都可以按住一个键倒带撤销——死亡不重置关卡，只回到你想回到的任何时刻。六个世界各自叠加一条时间规则（免疫物、移动即时间、影子回放、时滞环、倒流时间），把"跳平台"改造成"在时间维度上摆放自己"。

## 规则与状态转移（含最简伪代码）
- 状态：`(当前世界状态快照环形缓冲, 各世界时间修饰器)`；输入：`{move, jump, rewind(按住)}`。

```text
每帧: push snapshot(world_state)           # 无上限快照缓冲
rewind(按住): pop 并恢复快照；死亡后仍可倒带（World 2 起的基础规则）
世界修饰器:
  W2 免疫物（绿光）: 恢复快照时跳过这些对象的位置回退
  W3 移动时间: time_scale = f(player.vx)（右行正放/左行倒放/静止暂停）
  W4 影子: 录制并回放最近一次 rewind 覆盖的动作序列为"幽灵"
  W5 时滞环: 环附近 time_scale < 1
  W1 倒流世界: 时间默认反向，rewind 反而恢复"正向"
死亡: 不进入失败态，仅提示可倒带（无强制重置）
```

## 输入与输出
- 输入：移动/跳跃 + 按住倒带（连续量输入）。
- 输出：倒带的时间倒流视像、各世界时间规则的可视化（绿光/影子/环）、拼图碎片收集。

## 难度与学习曲线
难度从"手速"转移到"理解"：倒带把执行错误清零后，剩余难度全部是"看懂这个世界的时间规则如何作用"。学习曲线由六个世界的规则叠加自然构成，无需难度数值曲线（推断——分析口径）。

## 关联机制与模式
- 机制：mechanic-000008（无限时间倒带快照）
- 模式：pattern-000004（撤销即宽恕）
- 对比：与 game-000001 的死亡即重开（mechanic-000006）构成失败处理的两极——倒带保留连续尝试语境，重开提供干净重置（已建 CONTRASTS_WITH 关系）。

## 设计权衡
- 优点：撤销把挫败从"重复劳动"中剥离；世界级规则变体（同一基础机制的六种修饰）是机制复用的高密度样本；单人三年 + $200k 自筹完成（Wikipedia）证明该结构的可独立交付性。
- 缺陷：倒带削弱死亡的意义，需要每世界引入新约束才不至于平庸（六个世界本身就是补丁堆叠，分析口径）；叙事-机制耦合争议（解法被评家认为先于文本存在，未深究，存疑）。
- 反例：Celeste（game-000008）选择完全相反路径——不撤销、用输入宽恕与检查点，保留死亡但压低单次失败成本；两者对比是"失败处理光谱"的关键样本对。
- 适用场景：解谜密度高的平台游戏；任何希望"死亡廉价化"但保留连续性的玩法。

## 可复现的最小版本与算法
状态快照环形缓冲（或命令模式逆向重放）+ 每帧 push 即可实现基础倒带；世界修饰器为独立的时间缩放/回放层。无开源实现核对（可复现性按算法可得性计）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2008-08-06 XBLA；Number None；Hellman 美术 | Wikipedia |
| $200k 自筹、三年开发 | Wikipedia |
| 六世界时间规则全表（含 W1 倒流） | Wikipedia |
| 首周 55k 份；2012-04 累计 450k；2015 年收入约 $6M（资助 The Witness） | Wikipedia |
| Metacritic 93 (X360)；周年版 2024-05-14 | Wikipedia |

## 推断与未知
- **未知**：快照频率与缓冲上限等实现参数未公开核对（未读到源码/技术演讲原文，不臆断）。
- **推断（分析而非事实）**：倒带的设计本质是把"学习成本"与"重试成本"解耦——前者保留，后者清零；这是其作为 pattern-000004 原型案例的根据。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000003：把倒带限量植入超休闲一触玩法，与即刻重开正面对比。
2. 影子系统（W4）单独抽出：你的上次尝试成为本次的幽灵队友——合作玩法的时间维度变体。
