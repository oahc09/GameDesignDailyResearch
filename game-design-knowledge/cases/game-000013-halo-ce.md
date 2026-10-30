---
id: game-000013
title: "Halo: Combat Evolved"
aliases: ["光晕：战斗进化", "Halo 1", "Halo CE"]
genres: [shooter, action, hybrid]
subgenre_tags: []
platforms: [xbox, pc, mac]
release_year: 2001
creators: ["Bungie（总监 Jason Jones；2000 年被微软收购后成为 Xbox 首发主打）"]
core_loop: "遭遇敌群 -> 读小队角色分工（精英/咕噜人/豺狼/猎人）-> 用双武器限制下的最优组合拆解 -> 护盾回充节奏决定推进与撤退 -> 载具切换战局"
mechanic_ids: [mechanic-000014]
pattern_ids: [pattern-000009]
quality_score: 4.33
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Halo:_Combat_Evolved"
    title: "Halo: Combat Evolved - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-30"
    source_type: encyclopedia
    evidence_level: B
    supports_claims: ["2001-11-15 Xbox 首发", "RTS→第三人称→FPS 的形态演变", "盾-血两段生命与回充规则", "双武器限制/手雷近战常驻/载具第三人称/动态追踪仪", "敌方角色分工（精英回盾/咕噜人失胆逃跑/豺狼臂盾/猎人）与友军行为", "销量（2005-11 破 600 万）与 MC 97", "后期关卡重复的批评"]
  - url: "https://gdcvault.com/play/497/Building-a-Better-Battle-HALO"
    title: "GDC 2008 — Building a Better Battle: HALO 3 AI Objectives（官方演讲页，Damián Isla）"
    publisher_or_author: "GDC Vault / Damián Isla（Bungie）"
    published_at: "2008-03"
    accessed_at: "2026-10-30"
    source_type: official_talk
    evidence_level: A
    supports_claims: ["Halo 系 AI 以 objectives 系统编排大规模遭遇战、平衡设计师控制与涌现行为（演讲为系列方法论源头，针对 Halo 3；本日仅引用其主题范围，内容未逐帧核看——Vault 版为纯音频）"]
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

# Halo: Combat Evolved（game-000013）

## 核心体验
遭遇战的"舞蹈"：每个敌方兵种是一枚可读的战术棋子（咕噜人胆小、豺狼持盾、精英回盾、猎人重甲），玩家在双武器限制下组合拆解顺序；护盾回充把每次交火切成"冒险-喘息"的节拍。

## 规则与状态转移（含最简伪代码）
- 状态：`(护盾值, 生命值, 武器槽×2, 手雷数)`；敌方角色各有独立参数（Wikipedia 确认的分工）。

```text
受击:    伤害先扣护盾；护盾脱战后短暂停顿自动回充；溢出伤害扣生命（仅补给包恢复）
武器:    仅两个槽位；拾取新枪必须替换——战场即武器库
常驻:    手雷与近战不占槽位 -> 任何时刻都有第三种解法
敌方:    精英=回充护盾（拉锯）；咕噜人=头目死则溃逃（士气系统）；
         豺狼=臂盾（要求绕侧/爆头）；猎人=重甲（弱点在前背）
友军:    陆战队员主动交战、可撤退找掩护；误伤过多会反击
载具:    驾驶切第三人称 -> 战场尺度在步行/载具间切换
```

## 输入与输出
- 输入：双摇杆 FPS 标准 + 单键手雷/近战/互动；武器切换一键。
- 输出：护盾条与回充音效（节奏信号）、动态追踪仪（运动信息）、敌方兵种 silhouettes 可读性。

## 难度与学习曲线
难度来自"读阵"：先杀士气锚点（头目）还是先拆盾（豺狼/精英）是每场遭遇的决策。护盾回充把失败成本控制在"这一波"而非整关（与 game-000008 检查点思路同源但更细粒度——按交火节拍回充）。后期关卡重复是主要批评（Wikipedia）。

## 关联机制与模式
- 机制：mechanic-000014（再生护盾与双武器限制的节奏控制）
- 模式：pattern-000009（简单 AI 规则的涌现压力——角色分工版）
- 系谱：GDC 2008 的 Halo 3 AI objectives 演讲（Damián Isla）记录了该系列的 AI 编排方法论——设计师设定目标与舞台，涌现行为填满战斗（官方演讲页；注意其为续作方法论，CE 为起点）。

## 设计权衡
- 优点：两武器限制把"武器构筑"变成持续的空间决策（捡枪=押注未来 5 分钟）；护盾回充让激进推进可被学习而非惩罚；兵种分工让群战可读（对比 game-000012 的混沌群战）。
- 缺陷：角色分工公式化后，后期关卡重复感强（Wikipedia 批评点）；无在线多人（首发时代限制）。
- 反例：竞技 FPS（CS 系）的一枪致死+无回充把节奏交给玩家间博弈——回充护盾是 PvE 节奏设计，不直接迁移 PvP。
- 适用场景：PvE 遭遇战设计；需要"失败可局部消化"的合作射击。

## 可复现的最小版本与算法
护盾-生命两段模型 + 回充计时器 + 双槽库存 + 兵种参数表（士气/护盾/弱点）即可复现核心循环；无开源实现。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2001-11-15 Xbox 首发；RTS→FPS 形态史；微软收购 Bungie | Wikipedia |
| 盾-血规则、双武器、手雷常驻、载具、追踪仪 | Wikipedia |
| 兵种分工（精英/咕噜人/豺狼/猎人）与友军行为 | Wikipedia |
| 600 万份（2005-11）；MC 97；Edge 10/10 | Wikipedia |
| AI objectives 方法论（系列级） | GDC Vault 官方演讲页（Halo 3 主题，标注清楚） |

## 推断与未知
- **未知**：CE 本体的具体 AI 架构文档（决策树/目标系统细节）未直接核到——GDC 演讲为 Halo 3 系统源流，不混用为 CE 事实。
- **推断（分析而非事实）**：咕噜人溃逃是"士气即难度杠杆"的设计：杀头目比杀满编更高效——用行为规则而非数值血量实现战术深度。
- **推断（分析而非事实）**：双武器限制是沙盒的收束器——无限携带会把遭遇退化为"开战前配装"，限制迫使玩家在交火中做武器决策。

## 创新延伸（可验证假设素材）
1. 士气系统显性化：头目血条上方显示"小队士气环"，检验可读溃逃是否提升战斗决策感（对照隐藏士气）。
2. 回充节奏参数化：护盾回充延迟 T 与遭遇波次长度的比值作为难度核心旋钮（替代敌人数值膨胀）。
