---
id: game-000029
title: "Portal"
aliases: ["传送门（中文通行译名）"]
genres: [puzzle, action, hybrid]
subgenre_tags: []
platforms: [pc, xbox_360, ps3, mac, linux, nintendo_switch]
release_year: 2007
creators: ["Valve（项目负责人 Kim Swift；编剧 Erik Wolpaw、Chet Faliszek）"]
core_loop: "GLaDOS 语音引导进入试炼舱 -> 传送枪开双联传送门 -> 动量守恒（flinging）跨越空间 -> 方块/按钮/炮塔组合解谜 -> 结局反叛 -> 网络梗文化外溢"
mechanic_ids: [mechanic-000030]
pattern_ids: [pattern-000016]
quality_score: 4.53
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Portal_(video_game)"
    title: "Portal (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-08"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2007-10-10 橙盒发行与移植谱系", "Swift 项目负责、Wolpaw/Faliszek 编剧", "起源：DigiPen 学生作品 Narbacular Drop（2005 免费）→Robin Walker 招聘会看中→Gabe Newell 全组雇入（'they had actually carried the concept through'）", "玩法全项（蓝橙双联传送门、动量守恒 flinging、传送门不可放的表面、方块/按钮/Emancipation Grill/炮塔）", "教学设计：'chambers gently introduce the concept of flinging without any explicit instructions'（零显式教学）", "GLaDOS（Ellen McLain 配音）与蛋糕梗；Companion Cube 文化现象", "MC 90；GDCA 2008 年度游戏+创新奖+最佳游戏设计；2007 Eurogamer 年度第一", "零售 400 万+（2011，不含 Steam 数字）", "Portal 2（2011-04-19，加合作）；Portal with RTX（2022）"]
created_at: "2026-11-08"
updated_at: "2026-11-08"
---

# Portal（game-000029）

## 核心体验
一把传送枪 + 空仓库般的试炼舱，三小时讲完一个"学习如何思考传送"的故事。它的教学是隐形的：试炼舱"在没有任何显式指令的情况下温柔地引入 flinging 概念"（Wikipedia 口径）——每个新概念先隔离出现，再组合，再反转。

## 规则与状态转移（含最简伪代码）
- 状态：`(玩家位置/速度, 双联传送门对, 可放置表面, 场景实体)`；输入：`{移动, 跳, 蓝/橙门}`。

```text
传送门:  蓝/橙两门成对；穿门保持速度矢量（动量守恒 = flinging）
限制:    玻璃/移动表面不可放置；门不可互相穿过；Emancipation Grill 清除门与方块
教学节奏: 新概念隔离引入（仅传送门）-> 与已有概念组合（方块+门）->
          反直觉应用（flinging：跳入深渊以飞跃）——无任何文字提示
叙事:    GLaDOS 指令与谎言构成元层（cake 承诺），试炼=服从的游戏
```

## 输入与输出
- 输入：FPS 双摇杆 + 单键开门色切换。
- 输出：传送门视觉对（互视渲染）、flinging 的速度感、GLaDOS 语音层、炮塔的拟人化哀鸣。

## 难度与学习曲线
教学设计是本卡的真正研究对象：**单一概念隔离 → 组合 → 反直觉应用**的三拍节奏，配合"临床极简环境使谜题元素易辨认"（Wikipedia：灵感 The Island）。玩家以为自己在解谜，实际在被编排列学习一门空间物理课。三小时时长被批短、也被赞完美（节奏无赘肉）。

## 关联机制与模式
- 机制：mechanic-000030（零文本试炼舱节奏）
- 模式：pattern-000016（零文本归纳教学——Portal 用环境引导实现，Witness 用纯样例实现，Baba 用显式词块反例）
- 渊源：Narbacular Drop（DigiPen 学生作品）→ Valve 全组雇入——"学生原型→商业作品"管道的教科书法（与 Baba/Celeste/SUPERHOT/Downwell 同谱系，本管道第五次被证实）；Wikipedia 引 Newell："they had actually carried the concept through"。

## 设计权衡
- 优点：单机制（双联门）+ 动量守恒生成无穷组合空间；教学隐形使学习即游戏；叙事与机制同构（GLaDOS 的指令本身就是教学 UI）；Companion Cube 证明极简道具可承载情感投射（文化现象，Wikipedia）。
- 缺陷：时长短（有意为之）；传送门渲染的互视成本（工程）；机制被后续作品反复致敬导致新鲜度衰减（分析）。
- 反例：与 game-000028（Witness）对照——Portal 有 AI 声音引导（教学的"有声层"），Witness 全静默；两者都算零文本教学但信息密度设计完全不同。
- 适用场景：空间推理玩法；"教学即叙事"的融合设计。

## 可复现的最小版本与算法
双联传送门（相对姿态变换）+ 动量守恒 + 可放置表面标记即可复现核心循环；Source 引擎的互视渲染是工程难点但与玩法规则无关。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2007-10-10 橙盒；Swift/Wolpaw/Faliszek | Wikipedia |
| Narbacular Drop 起源与 Valve 雇佣链（Newell 语） | Wikipedia |
| 玩法全项（flinging/限制面/方块/炮塔/Emancipation Grill） | Wikipedia |
| 零显式教学口径（'gently introduce…without any explicit instructions'） | Wikipedia |
| MC 90；GDCA 2008 三奖；零售 400 万+（2011） | Wikipedia |

## 推断与未知
- **未知**：试炼舱的完整教学序列表（哪些概念在哪些舱引入——社区有分析但本日未核验 URL）；Valve 内部测试迭代数据。
- **推断（分析而非事实）**：Emancipation Grill（清除门与方块）是教学系统的隐形护栏——防止玩家把解法带出设计者的"课程"，物理规则与课程边界重合。
- **推断（分析而非事实）**：三小时时长是教学密度的函数：每个新概念只用 2-3 舱，塞满而不拖沓——"短"是节奏正确的证明而非缺陷。

## 创新延伸（可验证假设素材）
1. 试炼舱节奏参数化：把"概念引入→组合→反转"三拍做成可配置教学引擎，检验其泛化性（hypothesis-000014 的姊妹方向）。
2. flinging×其他守恒律：传送门+角动量（旋转 flinging）——检验新守恒律能否再生同等深度的组合空间。
