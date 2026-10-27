---
id: game-000004
title: "Stack"
aliases: ["Ketchapp Stack"]
genres: [casual]
subgenre_tags: [hypercasual, stacking, one_touch]
platforms: [ios, android]
release_year: null
creators: ["Ketchapp（开发/发行，© KCHLAB）"]
core_loop: "滑块往复移动 -> 点击使其落定 -> 对齐则整块保留、偏差则切掉悬空部分 -> 平台渐窄 -> 完全落空 -> 结束 -> 即刻重开"
mechanic_ids: [mechanic-000004, mechanic-000006]
pattern_ids: [pattern-000001, pattern-000002]
quality_score: 4.05
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://apps.apple.com/us/app/stack/id1080487957"
    title: "Stack on the App Store（官方页面）"
    publisher_or_author: "Apple App Store / Ketchapp"
    published_at: null
    accessed_at: "2026-10-27"
    source_type: official_page
    evidence_level: A
    supports_claims: ["官方描述『Stack up the blocks as high as you can!』", "免费+内购模式", "用户评价转述：钢琴音、连击完美数、滑块反向不直接判负"]
  - url: "https://www.ketchappgames.com/game-stack"
    title: "Ketchapp 官网 Stack 页"
    publisher_or_author: "Ketchapp"
    published_at: null
    accessed_at: "2026-10-27"
    source_type: official_page
    evidence_level: A
    supports_claims: ["Ketchapp 为发行方（超休闲发行商，亦发行 2048 移动版）"]
  - url: "https://www.148apps.com/stack/stack-guide-how-to-build-a-great-tower/"
    title: "Stack Guide: How to Build a Great Tower"
    publisher_or_author: "148Apps"
    published_at: "2016"
    accessed_at: "2026-10-27"
    source_type: analysis_article
    evidence_level: B
    supports_claims: ["玩法为『秒学难精』的时机堆叠", "悬空切割规则"]
created_at: "2026-10-27"
updated_at: "2026-10-27"
---

# Stack（game-000004）

## 核心体验
一块方块在塔顶左右往复滑动，玩家在移动中点击使其落定：与下方平台对齐的部分保留，悬空部分被切落，剩余面积成为新平台。完美对齐触发升调钢琴音与连击。平台一次比一次窄，直到完全落空。乐趣是"手稳"被直接听见、看见。

## 规则与状态转移（含最简伪代码）
- 状态：`(slider_pos, slider_axis, platform_rect(w×d), combo, height)`；输入：`{tap}`（唯一输入）。

```text
每帧: slider_pos 沿当前轴往返移动（速度随塔高上升——推断口径）
tap:
  overlap = platform ∩ slider
  if overlap 为空 -> 终局 -> 立即可重开
  else:
    悬空部分切割坠落；platform = overlap；height += 1
    if |slider_pos - platform_pos| <= ε:   # 完美判定
        combo += 1; 平台宽度按连击规则回增（社区口径）; 音阶 +1 调
    else: combo = 0
```

## 输入与输出
- 输入：单击（唯一操作；唯一直接败因是"完全错过"，放走滑块只会反向往返——App Store 评价转述）。
- 输出：切割块坠落动画、钢琴音（音高随连击上升）、色带渐变、高度计数。

## 难度与学习曲线
难度自平衡：平台宽度就是剩余容错。完美连击的"回增宽度"奖励（社区口径）给了高手一条主动拓宽容错的路径，使曲线不单调收紧。失败可读性极高——切割面积就是上一次输入的误差可视化。

## 关联机制与模式
- 机制：mechanic-000004（对齐保全/偏差切割）、mechanic-000006（死亡即重开）
- 模式：pattern-000001（一触短循环+死亡即重开）、pattern-000002（可见的连锁与接近奖励）

## 设计权衡
- 优点：把"误差"变成可看见、可听见的实体（切走的块、升调的音）；零输入歧义；切割规则天然生成难度曲线，无需外置关卡。
- 缺陷：深度仍集中于单一时机技能，玩法上限有限；超休闲同质化严重、依赖发行与买量（Ketchapp 模式）。
- 反例：对比 Tetris——同样堆叠，但 Tetris 的决策在"选块与放位"，Stack 的决策只在"何时停"；时机化是超休闲压缩深度的典型手段。
- 适用场景：等待/通勤等秒级会话；任何需要"把操作精度做成反馈"的时机玩法。

## 可复现的最小版本与算法
矩形求交 + 往复运动 + 计时器即可；无物理引擎（切割块坠落仅为表现动画）。上列伪代码即全部规则。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| Ketchapp 出品、免费+内购（去广告 $3.99 等） | App Store 官方页 |
| 官方玩法描述『Stack up the blocks as high as you can!』 | App Store 官方页 |
| 滑块反向往返、唯一败因是完全错过 | App Store 用户评价转述（二手） |
| 完美放置钢琴音、连击追踪 | App Store 评价 + 148Apps 指南 |

## 推断与未知
- **未知**：官方首发日期（官方页与检索到的二手来源均未给出，released_year 置空）；完美连击回增宽度的精确规则与音阶映射参数未从代码核实。
- **推断（分析而非事实）**：滑块"不会因放走而判负"是有意为之的容错设计——把失败唯一归因于"错过平台"，简化归因模型（App Store 评价间接支持，标为分析）。

## 创新延伸（可验证假设素材）
1. 双轴交替堆叠（切剩的形状同时约束两个方向），验证复杂度提升是否仍保住"秒学"。
2. 切割残片成为可收集资源（风险收益：故意留窄换资源），见 hypothesis-000002 的每日种子变体。
