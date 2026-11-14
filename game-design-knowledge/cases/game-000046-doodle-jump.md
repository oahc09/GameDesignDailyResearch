---
id: game-000046
title: "Doodle Jump"
aliases: ["涂鸦跳跃（中文通行译名）"]
genres: [action, hybrid]
subgenre_tags: [hypercasual]
platforms: [ios, android, 多平台移植]
release_year: 2009
creators: ["Igor & Marko Pušenjak 兄弟（Lima Sky——纽约/克罗地亚异地协作）"]
core_loop: "竖向无尽弹跳 -> 加速度计倾斜转向（左右穿屏 wrap）-> 点按射击怪物 -> 道具（喷气/火箭/弹簧）与平台层级推进 -> 坠落/怪物/黑洞/UFO 终局"
mechanic_ids: [mechanic-000047]
pattern_ids: [pattern-000023]
quality_score: 4.50
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Doodle_Jump"
    title: "Doodle Jump - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2009-03 iOS 发行与移植谱系（Kinect 2013/3DS 2013 等）", "Pušenjak 兄弟异地协作（纽约/克罗地亚）", "规则全项（加速度计倾斜转向、左右穿屏 wrap、点按射击、道具清单、怪物/UFO/黑洞终局、主题换肤清单）", "销量（连续四个月日销 2.5 万；2011-12 破 1000 万）", "评价（GameRankings 85%；Pocket Gamer 'unbelievably addictive'）", "续作 Doodle Jump 2（2020）与街机版（ICE/Raw Thrills 2012）、Skillz 电竞合作（2016）", "文化（《生活大爆炸》Sheldon 提及助推破百万下载）"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# Doodle Jump（game-000046）

## 核心体验
竖向无尽弹跳 + 体感转向：倾斜手机=移动 Doodler，左右边缘穿越（wrap）——屏幕边界不是墙而是传送带。它填补了知识库输入语义轴的关键一环：**倾斜（连续模拟量转向）**。

## 规则与状态转移（含最简伪代码）
- 状态：`(位置, 速度, 朝向, 平台列表)`；输入：`{倾斜转向（连续）, 点按射击}`。

```text
弹跳:  触平台 → 竖向弹起（自动）
转向:  加速度计倾斜 → 水平加速度
wrap:  左右出屏 → 对侧进入（边界即通道）
威胁:  怪物/UFO/黑洞 → 终局；可点按射击或跳踩
道具:  弹簧/蹦床/喷气帽/火箭/护盾 → 分层速度爆发
```

## 输入与输出
- 输入：倾斜（连续模拟量）+ 点按（离散射击）。
- 输出：涂鸦手绘风格、高度计量、主题换肤（圣诞/万圣/太空/忍者/海盗…）。

## 难度与学习曲线
倾斜输入的精度低于拖拽（无绝对位置参照）——其学习曲线是**体感校准**（玩家学会自己的手的倾角映射）。wrap 边界消除"出界即死"的惩罚，把左右两个方向变成纯自由度（分析口径）。

## 关联机制与模式
- 机制：mechanic-000047（倾斜转向+穿屏 wrap）
- 模式：pattern-000023（输入语义轴——KB 五种输入语义的对照谱系，本卡补"倾斜"位）
- 文化口径：Big Bang Theory 提及助推破百万下载（Wikipedia）——跨媒介曝光的传播样本。

## 设计权衡
- 优点：体感转向的"手就是控制器"直觉；wrap 边界消除惩罚；兄弟异地两人团队与 1000 万销量（2011）——超小团队样本。
- 缺陷：倾斜精度在嘈杂环境（移动中）下降；射击点按与倾斜同时操作的协调冲突（分析）。
- 反例：与 game-000009（Tiny Wings 持续态按压）对照——同为体感类，Doodle Jump 是连续位置语义、Tiny Wings 是持续态语义；输入语义轴的两个体感位。
- 适用场景：需要"身体直觉"转向的竖向玩法。

## 可复现的最小版本与算法
加速度计映射 + 弹跳物理 + 平台生成器 + wrap 即可复现；平台类型多样性为内容层（Wikipedia 未详列——不展开）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2009-03 iOS；Pušenjak 兄弟异地协作 | Wikipedia |
| 规则全项（倾斜/wrap/点按射击/道具） | Wikipedia |
| 销量（四个月日销 2.5 万/2011-12 破 1000 万） | Wikipedia |
| 文化（Big Bang Theory/广告/Doodler 客串） | Wikipedia |

## 推断与未知
- **未知**：平台类型完整清单（Wikipedia 明确未详列）；倾斜灵敏度参数；灵感来源（未提及 Plot 19 口径）。
- **推断（分析而非事实）**：wrap 边界与"出界即死"的取舍是该类型的分水岭——wrap 增加自由度但降低空间记忆价值（分析）。
- 兄弟异地（纽约/克罗地亚）协作模式是小团队分布开发的早期样本（事实层的文化注记）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000021：倾斜 vs 触摸转向对照。
2. wrap 对称性实验：上下也 wrap（环形世界）——检验边界语义对竖向结构的扰动。
