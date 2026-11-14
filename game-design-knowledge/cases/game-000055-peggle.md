---
id: game-000055
title: "Peggle"
aliases: ["幻幻球（中文社区通称）"]
genres: [puzzle, action, hybrid]
subgenre_tags: []
platforms: [pc, xbox_360, ios, 多平台移植]
release_year: 2007
creators: ["PopCap Games（工作室总监 Sukhbir Sidhu 构想，灵感来自 pachinko；程序员 Brian Rothstein——前五个月合作开发；两年周期）"]
core_loop: "发射弹珠 → 清除 25 个橙色靶（约 100 个蓝靶辅助）→ 紫靶奖励球 / 绿靶触发 Peggle Master 特技（含轨迹预览）→ 全橙达成触发 Extreme Fever（贝多芬《欢乐颂》）→ 奖金箱结算"
mechanic_ids: [mechanic-000056]
pattern_ids: [pattern-000025]
quality_score: 4.25
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Peggle"
    title: "Peggle - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2007-02-27 Windows XBLA 口径纠误（XBLA 为 2009-03-11）；PopCap Framework", "Sidhu 构想（pachinko 灵感+bagatelle；早期融合 Breakout 元素后放弃快速射击/移动靶）", "玩法全项（10 球/约 100 蓝靶/25 橙靶/紫靶奖励球/绿靶各 Master 特技——含轨迹预览/清橙触发 Extreme Fever（Ode to Joy，无歌词内容）/奖金箱与 Ultra Extreme Fever；Adventure 55 关/挑战/Duel 排名/Peg Party 四人）", "Peggle Nights（2008-09）；Peggle 2（2013 E3 公布）；Peggle Blast 移动；Peggle Extreme 捆 Orange Box；WoW 插件版", "销量（2009-02 前 50M+ 下载）；IGN XBLA 史上第 10（2010）；GDCA 2007 三项提名；MSNBC 'Top 5 最上瘾游戏'"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# Peggle（game-000055）

## 核心体验
弹珠机+弹弓：25 个橙靶藏在约 100 个蓝靶中，10 球内清完即触发《欢乐颂》的 Extreme Fever。它的研究价值是**瞄准辅助的算法与呈现**——绿靶触发的轨迹预览等特技，把"物理运气"变成"读得懂的概率"。

## 规则与状态转移（含最简伪代码）
- 状态：`(靶阵（蓝/橙/紫/绿）, 弹珠数, 得分, Fever 状态)`；输入：`{瞄准（枪口方向）, 发射}`。

```text
发射:  单向弹珠 → pachinko 式碰撞反弹
目标:  清除 25 橙靶；蓝靶计分；紫靶=本回合奖励球；绿靶=Master 特技
特技:  各 Master 不同（额外球/轨迹预览/加长接球斗…）
Fever: 清完橙靶 → Extreme Fever（Ode to Joy + 奖金箱 cascade 结算）
```

## 输入与输出
- 输入：瞄准+发射（两自由度，单指拖动）。
- 输出：弹珠反弹的物理演出、绿靶特技（轨迹预览）、Fever cascade（Ode to Joy 递进）。

## 难度与学习曲线
难度=对碰撞概率的读识（一次反弹后的分布不可精确心算）——绿靶轨迹预览把"部分未来"显式化（pattern-000025 谱系）；Fever cascade 把随机结果包装成确定庆祝（运气即奖励——分析口径）。

## 关联机制与模式
- 机制：mechanic-000056（绿靶轨迹辅助与 Fever 庆祝）
- 模式：pattern-000025（确定性预览设计——Peggle 的"一次反弹预览"是 AB 全程弹道的姊妹实现）
- 渊源：pachinko+bagatelle+Breakout 元素（Wikipedia）——与 game-000045（Breakout）同谱系对照；WoW 插件版（Wikipedia）的跨游戏渗透。

## 设计权衡
- 优点：把"纯运气"（pachinko）转译为"可读概率"（预览+紫靶奖励球机制让运气可被部分管理）；Fever 的 Ode to Joy cascade 是奖励演出的行业标杆（MSNBC 最上瘾口径）；50M+ 下载（2009-02）。
- 缺陷：运气与技巧的边界模糊（成就争议域——分析口径）；续作创新有限（Nights 仅加 Master）。
- 反例：与 game-000053（AB 全程弹道预览）对照——AB 预览覆盖全程轨迹、Peggle 只给一次反弹（部分预览）；同一设计语言的不同剂量。
- 适用场景：概率读识玩法；奖励演出设计。

## 可复现的最小版本与算法
靶阵+碰撞物理+预览射线计算+Fever 结算即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2007-02-27 PC（XBLA 2009 纠误）；Sidhu/Rothstein 两年开发 | Wikipedia |
| 规则全项（25 橙/100 蓝/紫/绿特技含轨迹预览/Fever） | Wikipedia |
| pachinko/bagatelle/Breakout 渊源与"放弃快速射击"的取舍 | Wikipedia |
| 50M+ 下载与评价口径 | Wikipedia |

## 推断与未知
- **未知**：Zen Ball 分级瞄准辅助的算法细节（Wikipedia 仅列"轨迹预览"为一项 Master 特技——"Zen Ball"名称口径未在本源确认，本卡不使用该专有名词）；各 Master 特技全表。
- **推断（分析而非事实）**：只预览"下一次反弹"而非全程（绿靶特技）是刻意的信息节流——预览太多则橙靶清除退化成排版任务；部分预览保持"读概率"的技能（分析）。
- Fever 的《欢乐颂》递进把随机胜利包装成必然庆典——情绪设计与概率游戏的结合样本（分析）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000025：瞄准辅助层级的透明度对照。
2. Fever cascade 的情绪峰值测量（对照无 Fever 版的留存）。
