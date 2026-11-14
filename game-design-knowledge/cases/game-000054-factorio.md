---
id: game-000054
title: "Factorio"
aliases: ["异星工厂（中文通行译名）"]
genres: [simulation, strategy, hybrid]
subgenre_tags: []
platforms: [pc, nintendo_switch]
release_year: 2020
creators: ["Wube Software（布拉格；主创 Michal Kovařík 'kovarex' 与 Tomáš Kozelek；2012 年中开工；灵感来自 Minecraft 模组 IndustrialCraft/BuildCraft）"]
core_loop: "采矿 → 手搓 → 自动化（传送带/机械臂/火车）→ 研究解锁 → 污染吸引虫群 → 吞吐优化无限循环 → 发射火箭（胜利后继续玩）"
mechanic_ids: [mechanic-000055]
pattern_ids: []
quality_score: 4.63
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Factorio"
    title: "Factorio - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["Wube（布拉格）/Kovařík+Kozelek；2012 年中开工；灵感 IndustrialCraft/BuildCraft", "众筹（Indiegogo 2013 €21,626 超 €17,000 目标）→Steam EA 2016-02-25 →正式版 2020-08-14（提前自 09-25 以避开 Cyberpunk 2077）", "玩法全项（工厂模拟+RTS 生存要素、研究至火箭发射胜利后可继续、污染吸引 biter/spitter/worm 且随时间进化、蓝图可复用设计+公共库共享、电路网络复杂自动化、多人服务器、友军误伤默认开启）", "Mod 用 Lua+官方 mod portal+游戏内管理器", "销量（2020 初 200 万→2022-02 310 万→2022-12 确认 350 万，约 50 万/年）", "Space Age 资料（2024-10-21）+免费 2.0 更新（流体重做/新地形生成）；2026-06 宣布 2.1 为最后一个大版本", "MC 90 (PC)；'Cracktorio' 戏称；Shopify 联合创始人 Lütke 允许员工报销购买"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# Factorio（game-000054）

## 核心体验
"物流即计算"：工厂是一台由你组装的计算机——传送带是数据总线、机械臂是函数、电路网络组合器是逻辑门。优化的对象是吞吐量，且永远"差一点"——被戏称 'Cracktorio' 的成瘾结构来自**下一个瓶颈永远可见**。

## 规则与状态转移（含最简伪代码）
- 状态：`(资源矿/工厂实体/物流网络, 电力网, 研究树, 虫群威胁)`；输入：`{建造/拆除/供电/配方/电路}`。

```text
物流:  采矿机 → 传送带 → 组装机（配方）→ 中间产物 → ...
吞吐:  各环节速率失配 = 瓶颈（玩家测量、诊断、重构）
电路:  组合器网络 = 逻辑门/寄存器（社区造出图灵完备计算——DF 同款涌现，分析）
虫群:  污染扩散吸引攻击且随时间进化（外部压力）
胜利:  发射火箭；蓝图库把"我的解"变成可分享资产（公共库 UGC）
```

## 输入与输出
- 输入：建造/拆除/配方编辑/电路布线（自由度极高的沙盒）。
- 输出：吞吐率可视化、污染云图、虫群进攻波、火箭发射。

## 难度与学习曲线
难度=**系统诊断能力**（瓶颈识别）而非反应或知识记忆；蓝图库让"解法资产化"（别人的工厂可导入）——UGC 直接成为内容供给。EA 众筹→十年持续更新→1.0→Space Age 的发行史本身是 EA 模式教科书（Wikipedia）。

## 关联机制与模式
- 机制：mechanic-000055（蓝图物流网络与吞吐模拟）
- 谱系：Minecraft 工业模组（IndustrialCraft/BuildCraft）→ Factorio →（影响）Satisfactory/Dyson Sphere Program 等工厂系；与 game-000026（DF）同属"模拟即内容"的工厂分支（蓝图=可分享的"工厂史"）。
- circuit networks 的图灵完备社区实践与 game-000026 的 DF 计算机呼应（分析口径）。

## 设计权衡
- 优点：瓶颈可见性使优化循环自驱（永远知道下一个问题在哪）；蓝图 UGC 把玩家解法变成官方内容库；EA 十年不打折的高信任发行（社区口碑驱动的超常生命周期，MC 90 口径）。
- 缺陷：开工量巨大（新手数小时的"手搓地狱"——社区共识，标注为社区反应）；虫群战争与工厂优化的注意力争夺（和平模式选项存在，Wikipedia）。
- 反例：与 game-000052（SpaceChem 固定关卡优化排行）对照——Factorio 是开放沙盒无排行（自设目标），SpaceChem 是关卡制效率排行；优化玩法的两种框架。
- 适用场景：物流/自动化玩法；EA 长线发行研究。

## 可复现的最小版本与算法
资源节点+配方树+传送带吞吐模型+瓶颈检测即可复现"优化循环"骨架；全游戏规模不可复现也无需。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| Wube/布拉格/Kovařík+Kozelek；Mod 渊源 | Wikipedia |
| Indiegogo €21,626 → EA 2016 → 1.0 2020-08-14（避 Cyberpunk 提前） | Wikipedia |
| 玩法全项（研究/虫群进化/蓝图公共库/电路网络/多人） | Wikipedia |
| 销量（350 万 2022-12；Space Age 首周 40 万+） | Wikipedia |
| MC 90；'Cracktorio'；Lütke 报销轶事 | Wikipedia |

## 推断与未知
- **未知**：内部吞吐基准与优化指南（社区 wiki 口径未核验）；"no-discount 政策"（页面明确未载——不采信）。
- **推断（分析而非事实）**：搬前发行日避开 Cyberpunk 2077（Wikipedia 明载）是 EA 模式的发行政治样本——避开声量碰撞对小团队的生存重要性。
- 蓝图公共库是"玩家解法资产化"的成熟形态——把 UGC 从"内容"升为"策略资产"（分析）。

## 创新延伸（可验证假设素材）
1. 瓶颈提示系统：自动检测吞吐瓶颈并高亮——检验诊断辅助是否削弱"发现瓶颈"的乐趣。
2. 蓝图 UGC 生态：带吞吐评级的蓝图库——把优化排行（pattern-000014/000011）引入沙盒。
