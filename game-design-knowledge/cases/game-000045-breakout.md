---
id: game-000045
title: "Breakout"
aliases: ["打砖块（中文通行译名）"]
genres: [action, hybrid]
subgenre_tags: []
platforms: [arcade, atari_2600]
release_year: 1976
creators: ["设计 Nolan Bushnell & Steve Bristow（项目经理 Al Alcorn）", "原型 Steve Wozniak（受雇于 Steve Jobs，44 芯片 breadboard）"]
core_loop: "拍面反弹球 -> 击碎八排色带砖（黄1/绿3/橙5/红7 分）-> 球速阶梯上升（4/12 击与触橙红排）-> 红排击破后拍面减半 -> 漏球扣回合（3 回合 2 屏）"
mechanic_ids: [mechanic-000046]
pattern_ids: []
quality_score: 4.68
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Breakout_(video_game)"
    title: "Breakout (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1976-05-13 北美街机发行（Namco 同月日本）；2600 版 1978-11-09", "设计 Bushnell/Bristow（Alcorn 项目管理）；Wozniak 原型故事（$750+省芯片奖金、44 芯片 breadboard、Jobs 私留 $5000 奖金、Wozniak 只得 $350 且以为约 $700——Wikipedia 口径）；Atari 无法量产 Woz 设计，自建约 100 芯片版", "规则全项（八排色带砖 1/3/5/7 分、漏球扣回合 3 回合 2 屏、红排后拍面减半、4/12 击与触橙红排后加速、单人满分 896——双人记忆 quirk 理论 1344）", "街机柜画主题为越狱", "谱系（前有 Ramtek Clean Sweep 1974；启发 Arkanoid 1986 与 Space Invaders 1978——Nishikado 口径）", "商业（1976 美日 Top5 街机；2600 版 1983 年 1,650,336 卡带；亚洲约 4 万台雅库茨克盗版损害 Atari-Namco 关系）", "Atari v. Oman 版权案（Ginsburg 维持可版权性）", "Wozniak 称 Breakout 影响 Apple II 设计；Guardian 1970s 第四佳", "后续（Super Breakout 1978/Breakout: Recharged 2022/Breakout Beyond 2025）；iPod Classic 与 Google 图片彩蛋"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# Breakout（game-000045）

## 核心体验
把 Pong 的拍-球物理反转成单人破坏：八排色带砖按分值分层（越上越贵），球速与拍宽随进度阶梯变化。**难度阶梯是可完全枚举的**——4 击加速、12 击再加速、触红排加速、红排后拍减半，全部参数公开可考。

## 规则与状态转移（含最简伪代码）
- 状态：`(拍位置/宽度, 球位置/速度, 砖阵, 回合数)`；输入：`{拍移动}`。

```text
砖阵:  8 排色带（黄1/绿3/橙5/红7——自下而上分值递增）
加速:  第 4 击、第 12 击、触橙排、触红排 -> 球速阶梯上升
拍面:  红排被击破后拍宽减半（终局压力）
回合:  3 回合 × 2 屏；漏球扣回合
满分:  单人 896（双人 quirk 理论 1344——Wikipedia）
```

## 输入与输出
- 输入：拍移动（一维连续量——Pong 同款）。
- 输出：砖块崩碎、分值色带的视觉引导、球速变化。

## 难度与学习曲线
难度阶梯全部可枚举（Wikipedia 全项）——这是"难度=公开参数表"的最早完整样本（对照 game-000016 的生成端公平、game-000036 的求解器验证）。学习=击球角度控制（打侧面进洞的经典策略）+ 风险选择（先打高分红排会加速球）。

## 关联机制与模式
- 机制：mechanic-000046（色带分值与阶梯难度）
- 谱系：Pong（game-000044）拍-球物理的反转（对战→单人破坏）；启发 Arkanoid 与 Space Invaders（Nishikado 口径，Wikipedia）——块破坏（block kuzushi）品类创始人。
- 人力史：Wozniak 44 芯片原型（Jobs 私留 $5000 奖金——Wikipedia 口径）→ Atari 无法量产自建 100 芯片版——"天才原型 ≠ 可量产设计"的工程案例。

## 设计权衡
- 优点：分值色带给"打哪里"的持续决策（分 vs 风险）；阶梯难度公开可考；四人团队级成本的街机爆款（1976 Top5）。
- 缺陷：球速阶梯使后期对新手近乎不可玩（设计意图——街机的投币经济）；内容量有限（2 屏）。
- 反例：与 game-000037（Candy Crush 阶段化）对照——Breakout 的难度阶梯是全局连续的，CCS 是关卡离散的；街机投币经济与手游生命经济的时代对照。
- 适用场景：破坏类玩法；"公开参数表"的难度设计。

## 可复现的最小版本与算法
色带砖阵+阶梯参数表+拍-球物理即可复现（全部参数本卡已列）——本日可形式化样本。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1976-05-13 发行；Bushnell/Bristow/Alcorn | Wikipedia |
| Wozniak 44 芯片原型与 Jobs 奖金故事 | Wikipedia |
| 规则全项（色带分值/阶梯加速/拍减半/满分 896） | Wikipedia |
| 谱系（Arkanoid/Space Invaders 启发） | Wikipedia |
| 商业（1976 Top5/2600 版 165 万卡带） | Wikipedia |

## 推断与未知
- **未知**：Wozniak 原型的电路细节（Wikipedia 有概述）；阶梯加速的具体速度值。
- **推断（分析而非事实）**：色带自下而上分值递增+红排触发拍减半的组合，是"风险前置"设计——想拿高分就必须先进入高难状态；这是街机投币经济下的最优难度结构（分析）。
- 满分 896 的存在（Wikipedia）证明其分数系统可被穷举优化——pattern-000014 确定性社区的街机前身。

## 创新延伸（可验证假设素材）
1. 色带重排实验：分值梯度反转（上低下高），检验风险前置结构是否为乐趣必需。
2. 拍宽阶梯的剂量：减半时机对挫败/兴奋的影响（参数化研究）。
