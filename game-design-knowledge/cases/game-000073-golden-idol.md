---
id: game-000073
title: "The Case of the Golden Idol"
aliases: ["黄金偶像案件（中文社区通称）", "Golden Idol"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [pc, nintendo_switch, xbox, ps, 移动端（Netflix）]
release_year: 2022
creators: ["Color Gray Games（拉脱维亚兄弟 Ernests & Andrejs Kļaviņš）", "Playstack（发行）"]
core_loop: "凝视死亡冻结场景（Exploring 模式收集关键词）→ Thinking 模式在事件叙述的空槽中填词 → 正确段落锁定、错误段落标红 → 十一案横跨 Cloudsley 家族五十年 → 超自然 Golden Idol 传说线"
mechanic_ids: [mechanic-000077]
pattern_ids: []
quality_score: 4.63
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/The_Case_of_the_Golden_Idol"
    title: "The Case of the Golden Idol - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2022-10-13 PC/macOS 发行（纠误：非 2021）；Switch 2023-05-25/Netflix 移动 2024-06-11/主机 2024-07", "Color Gray Games（拉脱维亚兄弟 Kļaviņš）/Playstack 发行（纠误：非 Plug In Digital）", "玩法全项（Exploring 收集关键词 → Thinking 填空叙述；正确锁定、错误标红；11 案横跨约 50 年；Cloudsley 家族/秘密结社/Order Party；Lazarus Herst 为返老的 Edmund Cloudsley）", "DLC（Spider of Lanka 2023-05/Lemurian Vampire 2023-08 各三案）；Redux 免费更新（2024-10-10：提示系统/UI/本地化/Unity 移植）", "续作 The Rise of the Golden Idol（TGA 2023 公布，2024-11-12，1970s）", "MC 84 (PC)/93 (Switch)；Guardian 5/5；批评（guesswork/线索晦涩——Adventure Gamers 3/5）", "获奖（IGF Excellence in Design 得奖；Seumas McNally 提名；BAFTA Debut 提名）"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# The Case of the Golden Idol（game-000073）

## 核心体验
演绎推理的"填空化"：死亡场景的关键词被你逐个拾取，事件叙述的空格等你填入——正确锁定、错误标红。Obra Dinn（game-000027）影响的直接后继（Wikipedia 影响口径），把"自由填写"改为"受限填空"，把演绎的可读性推到极致。

## 规则与状态转移（含最简伪代码）
- 状态：`(场景关键词集, 叙述空槽, 锁定段落集)`；输入：`{Exploring 点选收集, Thinking 填词}`。

```text
探索:  冻结场景点选 → 关键词入词库
思考:  叙述空槽填词 → 正确段落锁定；错误段落标红（即时局部反馈）
案件:  11 案 + DLC 六案；跨案人物/家族串联（长线演绎）
```

## 输入与输出
- 输入：点选收集+填词（无操作技巧）。
- 输出：手绘 90s 冒险游戏视觉、填空锁定反馈、跨案人物网。

## 难度与学习曲线
难度=关键词→叙述的映射推理；即时局部反馈（锁定/标红）把 Obra Dinn 的"批量确认"改成了**逐段确认**——反馈密度更高、猜测惩罚更低（对照 mechanic-000028 三批量确认——hypothesis-000013 的剂量谱再添一位）。

## 关联机制与模式
- 机制：mechanic-000077（填空叙述与逐段锁定）
- 谱系：Obra Dinn 影响链下游（Wikipedia 明载影响）；与 game-000027 的确认门槛对照构成演绎反馈的剂量谱两端（Obra Dinn 3 条一批 vs Golden Idol 逐段即时）。
- 纠误：发行商为 Playstack（非 Plug In Digital）；发行 2022-10-13（非 2021）。

## 设计权衡
- 优点：填空化把演绎的反馈循环做到最密（即时锁定反馈）；11 案的长线人物网；IGF 设计奖 + Switch MC 93。
- 缺陷：猜词批评（线索晦涩——Adventure Gamers 3/5，Wikipedia 口径）；受限填空削弱开放推理感（对照 Obra Dinn 自由填写）。
- 反例：与 game-000027（Obra Dinn 批量确认+自由填写）对照——同一演绎玩法的两种反馈经济学：宽松输入+严苛确认 vs 受限输入+即时确认。
- 适用场景：演绎玩法；反馈密度设计研究。

## 可复现的最小版本与算法
关键词收集+叙述槽+段落判定器即可复现（填空逻辑可完全形式化）；案件内容为人工层。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2022-10-13 发行（纠误）；兄弟团队/Playstack（纠误） | Wikipedia |
| 玩法全项（两模式/锁定标红/11 案） | Wikipedia |
| IGF 设计奖/BAFTA 提名/MC 84/93 | Wikipedia |
| Redux 提示系统与续作（2024-11-12） | Wikipedia |

## 推断与未知
- **未知**：Redux 提示系统的具体算法；各案关键词全表。
- **推断（分析而非事实）**：填空化是演绎玩法的"向下兼容"——它承认玩家词库有限，用受限槽位保证演绎可完成（对照 Obra Dinn 的自由填写精英路线）；两种方案分别服务不同受众（分析）。
- Switch MC 93 高于 PC 84——点选玩法在掌机上的适配优势（分析）。

## 创新延伸（可验证假设素材）
1. 反馈密度对照实验（接 hypothesis-000013 的批量/逐段连续谱）。
2. Redux 提示系统的效果研究（提示对完成率与成就感的影响）。
