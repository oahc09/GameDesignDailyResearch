---
id: game-000026
title: "Dwarf Fortress"
aliases: ["矮人要塞（中文通行译名）", "DF"]
genres: [simulation, strategy, hybrid]
subgenre_tags: []
platforms: [windows, linux, mac（经典版）；steam 版多平台]
release_year: 2006
creators: ["Tarn Adams & Zach Adams（Bay 12 Games 兄弟）", "Kitfox Games（Steam 版发行与美术）"]
core_loop: "生成世界（地理/文明/数百年历史）-> 建立要塞 -> 七矮人自治模拟（人格/需求/情绪/怪癖）-> 事件涌现（ tantrum/怪癖造物/围攻）-> 要塞终将陷落 -> Legends 浏览器读史 -> 再来一塔"
mechanic_ids: [mechanic-000027]
pattern_ids: [pattern-000015]
quality_score: 4.43
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Dwarf_Fortress"
    title: "Dwarf Fortress - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-07"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2002-10 开发始、2006-08-08 首个公开 alpha；Bay 12 兄弟；前身 Armok II", "捐赠免费模式（2011 年拒绝 $300k 授权与工作邀约）", "三模式（Fortress 无胜利条件 / Adventurer 回合肉鸽 / Legends 史书浏览器）", "世界生成：地理/生物群系/文明/战争/数百年历史", "个体模拟：随机人格/偏好/关系/神祇；压力致暴动或疯狂；Strange Mood 造神器", "社区格言 'Losing is Fun!'；Boatmurdered(2006) 连载要塞史与 Gemclod 影响 RimWorld（Tynan Sylvester 自述）", "Steam 版 2022-12-06（Kitfox，像素美术）；首日超 16 万两月预估、首周 30 万、2022 底 50 万、2025-04 破百万；2023-01 收入超 $7.2M", "MC 93；DICE 2023 策略/模拟年度；MoMA 2012 展出；影响 Minecraft/RimWorld/Terraria/Prison Architect/Project Zomboid；社区在游戏内造出图灵完备 8 位计算机"]
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

# Dwarf Fortress（game-000026）

## 核心体验
"模拟即内容"的极限样本：世界不是关卡，而是**先模拟出数百年历史再开始玩**。每个矮人有随机人格、关系与神祇；每个要塞终将陷落；陷落本身变成 Legends 里可检索的历史。玩家消费的不是设计者写的故事，而是模拟自己长出来的故事。

## 规则与状态转移（含最简伪代码）
- 状态：`(世界史层, 要塞模拟层: 矮人个体×N, 物品/事件日志)`；输入：`{要塞建造指令 / 冒险者行动}`。

```text
世界生成: 地理/生物群系 -> 文明史/战争/英雄/神器（ centuries 模拟）
           -> 全部写入 Legends 数据库
要塞层:    每矮人 = 人格 + 需求 + 关系 + 记忆；压力累积 -> tantrum/疯狂
           Strange Mood -> 个体进入造物状态 -> 神器（带名字与传说）
涌现:      个体模拟的交互产生无脚本事件链（玩家与社区事后叙述）
终局:      要塞陷落必然发生（"Losing is Fun"）——失败是内容而非终点
```

## 输入与输出
- 输入：建造/管理指令（Fortress）或行动指令（Adventurer）。
- 输出：ASCII/像素化的模拟投影、事件文本流、Legends 史书。

## 难度与学习曲线
学习曲线是**逆向工程一个模拟系统**：玩家掌握的不是操作而是"系统如何思考"（什么会引发 tantrum、什么会引来围攻）。失败可读性被社区文化消化——"Losing is Fun"把必然的失败重定义为内容消费的一部分。

## 关联机制与模式
- 机制：mechanic-000027（涌现历史模拟：世界生成+个体人格+事件日志）
- 模式：pattern-000015（模拟即内容——涌现叙事替代手工内容）
- 影响链（Wikipedia 直接证据）：Minecraft、RimWorld（Sylvester 自述受 Boatmurdered 启发）、Terraria、Prison Architect、Project Zomboid——本作是模拟谱系的源头节点。

## 设计权衡
- 优点：模拟深度即内容生产力（20 年免费更新、玩家故事自增殖）；失败设计哲学把最大缺陷（必败）转化为最大特征；Legends 模式让模拟产物可检索、可分享。
- 缺陷：ASCII 界面 20 年劝退（Steam 版用像素美术+音乐解决，首日即超 16 万两月预估——Wikipedia）；复杂度无上限导致优化债与知识门槛陡峭。
- 反例：与 game-000019（PQ 手工内容+机制融合）对照——DF 把内容生产外包给模拟，代价是控制力（无法保证每个玩家遇到"该有的故事"）。
- 适用场景：长期运营的模拟玩法；UGC 叙事生态目标。

## 可复现的最小版本与算法
世界史生成（文明 tick + 事件日志）+ 个体人格/需求模型 + Legends 查询即可复现"模拟即内容"骨架；DF 全系统规模不可复现（也无需）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2002 始/2006-08 alpha；Bay 12 兄弟；拒绝 $300k | Wikipedia |
| 三模式与世界生成全项；个体人格/压力/神器 | Wikipedia |
| Boatmurdered 与 RimWorld 影响链（Sylvester 自述） | Wikipedia |
| Steam 版商业数据（首日超两月预估/百万套/月收 $7.2M） | Wikipedia |
| MC 93/DICE 2023/MoMA/影响谱系 | Wikipedia |

## 推断与未知
- **未知**：模拟系统内部参数（情绪方程、历史生成算法细节）；GDC 演讲未在 Wikipedia 提及（Tarn Adams 有多次演讲的社区口径，本日未核验 URL，不引用）。
- **推断（分析而非事实）**："Losing is Fun"不是安慰语而是**设计契约**：游戏把"终局必然"写进模拟（要塞迟早崩），玩家预期被预先对齐——这是对 mechanic-000006/失败光谱的哲学级延伸：失败不是要避免的状态，而是要体验的内容。
- **推断（分析而非事实）**：Legends 模式是把"模拟产物可检索化"的关键——涌现内容若不可检索分享，就不构成社区叙事（Boatmurdered 正是可分享性的产物）。

## 创新延伸（可验证假设素材）
1. 涌现叙事的"可分享性接口"：为模拟玩法设计一键导出"本局史书"（含关键事件时间线），检验可分享性是否显著提升 UGC 叙事产量。
2. 历史层的轻量化：把 DF 式世界史压缩为 10 分钟生成、仅保留影响玩法的事件——检验"历史深度感"与生成时长的权衡。
