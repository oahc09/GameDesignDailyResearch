---
id: game-000064
title: "The Stanley Parable"
aliases: ["史丹利的寓言（中文通行译名）", "Stanley Parable"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [pc, mac, linux, ios, 主机]
release_year: 2013
creators: ["Davey Wreden（编剧，2011 Source mod 原创）", "William Pugh（美术，2013 重制合作；Galactic Cafe；旁白 Kevan Brighting）"]
core_loop: "旁白叙述 Stanley 的行动 → 玩家服从或违背 → 旁白即兴应对（第四面墙）→ 结局重置 → 无失败态（选择只改叙事）"
mechanic_ids: [mechanic-000068]
pattern_ids: []
quality_score: 4.48
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/The_Stanley_Parable"
    title: "The Stanley Parable - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2011-07-31 免费 HL2 mod（Wreden 自学 Source；旁白 Brighting 一次录制；六结局；两周 9 万+ 下载）→ 2013-10-17 重制（Pugh 加入合作两年；'interpolation'非复刻——重制旧结局+新增十+结局；Greenlight 2012-10 通过）", "玩法全项（员工 427 屏幕 blank→探索无人的办公楼；旁白说'走左边'玩家可走右边——不服从被编织进叙事；旁白适应/拉回/破第四面墙；结局重置；无真正失败态——选择只改叙事与结局）", "评价（重制 MC 88；Kuchera：选择常无效果'让你觉得自己比实际更有控制力'；IGF 观众奖；BAFTA/DICE 提名；三日 10 万+、一年破百万）", "Ultra Deluxe（2022-04-27，Crows Crows Crows/Unity；新环境/结局/桶改变结局/Memory Zone 旁白面对差评/'The Stanley Parable 2' 元序列；MC 90 PC/Destructoid 10/10；24 小时 10 万+）"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# The Stanley Parable（game-000064）

## 核心体验
"选择"的祛魅装置：旁白说 Stanley 走左门，你可以走右门——然后旁白即兴应对，故事分岔，直到你意识到**所有选择都已被写好**。无战斗、无失败态：唯一机制是"服从/不服从"与旁白的实时博弈。

## 规则与状态转移（含最简伪代码）
- 状态：`(当前位置, 旁白脚本节点, 结局计数)`；输入：`{移动/交互}`。

```text
旁白:  脚本节点播报 Stanley 的"既定行动"
违背:  玩家行动 ≠ 脚本 → 旁白分支应对（适应/讽刺/拉回/破墙）
结局:  触发结局 → 重置到开头（结局计数收集）
失败:  不存在——所有选择只改变叙事（无 fail state）
```

## 输入与输出
- 输入：第一人称移动/交互（无战斗）。
- 输出：旁白配音（Brighting 一次录制的干幽默——Wikipedia 口径）、环境叙事、结局重置。

## 难度与学习曲线
无传统难度；"难度"是**元认知挑战**（你能不能看穿选择的结构）。Kuchera 的洞察（Wikipedia）是本卡的分析核心：选择无效果是为了让你意识到控制感的幻觉。

## 关联机制与模式
- 机制：mechanic-000068（旁白-玩家博弈与无失败态）
- 谱系：HL2 mod（2011）→ 重制（2013）→ Ultra Deluxe（2022）——mod 管道样本（对照 game-000029 Narbacular Drop→Portal）；与 game-000034（Papers Please 规则叙事）对照——PSP 让规则成为叙事，Stanley 让叙事规则成为玩法。
- Ultra Deluxe 的桶/Memory Zone/'The Stanley Parable 2' 序列（Wikipedia）是 meta 设计的续作扩展样本。

## 设计权衡
- 优点：旁白分支脚本的一次性录制质量（Brighting）；"无失败态+结局重置"让探索零惩罚；meta 批评的行业对话价值（一年百万销量）。
- 缺陷：选择幻觉本身可被看穿（结构暴露后重复价值降低——Ultra Deluxe 用新内容续命）；脚本量的生产成本（Ultra Deluxe 新脚本超原作全脚本——Wikipedia）。
- 反例：与 game-000059（Hades NPC 反应死亡）对照——同样"系统对玩家行为的应答"，Hades 是随机构筑×固定对话树、Stanley 是固定脚本×自由移动；应答系统的两种参数轴。
- 适用场景：meta 叙事；"选择幻觉"主题实验。

## 可复现的最小版本与算法
旁白脚本状态机 + 违背检测 + 结局触发器即可复现骨架；脚本内容为人工层。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2011 mod（六结局/两周 9 万+）→ 2013 重制 | Wikipedia |
| 玩法全项（旁白博弈/无失败态/结局重置） | Wikipedia |
| Kuchera 控制感引语与 MC 88/90 | Wikipedia |
| Ultra Deluxe 内容（桶/Memory Zone/SP2 序列） | Wikipedia |

## 推断与未知
- **未知**：旁白分支的完整节点图（社区整理未核验）；各结局的精确触发条件表。
- **推断（分析而非事实）**：'The Stanley Parable 2' 序列（Wikipedia）把续作本身做成游戏内的笑话——meta 作品的自我引用递归是其签名手法（分析）。
- 六结局 mod → 十+结局重制的扩展路径证明：meta 脚本的可扩展性取决于旁白的即兴能力设定（分析）。

## 创新延伸（可验证假设素材）
1. 旁白违背容忍度：旁白对连续违背的应对上限（玩家故意全违背的极限测试）。
2. 选择幻觉的自省测量：玩家在多久后察觉"选择无效果"（元认知实验）。
