---
id: game-000086
title: "The Room"
aliases: ["未上锁的房间（中文通行译名）", "The Room"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [ios, android, pc, nintendo_switch]
release_year: 2012
creators: ["Fireproof Games（英国工作室——六名前 Criterion Games（Burnout 系列）开发者组成；曾外包 LittleBigPlanet/DJ Hero/Split/Second/Blur 美术；Unity 制作，iPad 版成本约 £160,000）"]
core_loop: "旋转/缩放检视华丽机关盒 → 触摸屏手势开锁（转钥匙/拨开关/移动视角）→ 目镜透镜显影隐藏的 Null 元素符号并归位 → 信件叙事（作者疯狂史）→ 打开盒子"
mechanic_ids: [mechanic-000090]
pattern_ids: []
quality_score: 4.58
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/The_Room_(video_game)"
    title: "The Room (video game) - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2012-09-12 iOS 发行（纠误：非 06 月）；Android 2013-03（Humble Bundle）/PC 2014-07-28/Switch 2018-10-18（Team17 发行）", "Fireproof Games——六名前 Criterion（Burnout）开发者；曾外包 LBP/DJ Hero 等美术；Unity；iPad 版成本约 £160,000；目标'做最好的 iOS 游戏，而非把主机大作搬到 iOS'；名字来自 Media Molecule 技术演示代号", "玩法全项（触摸手势开华丽机关盒/目镜透镜显影隐藏 Null 元素并归位成符文获取密码/极简叙事——作者信件疯狂史）", "商业（首周回本；2013-03 iPad 版 140 万；2016-10 系列超 650 万；系列合计 1150 万+）", "奖项（Apple iPad Game of the Year 2012/BAFTA 最佳英国游戏（纠误：非 British Debut，亦无 Apple Design Award 记载）/GDCA 最佳掌机移动/TIGA 最佳游戏设计/NY 评论家最佳移动）", "MC 88 (iOS)/80 (Switch)/73 (PC)", "续作（Room Two 2013-12/Three 2015-11/Old Sins 2018-01/VR: A Dark Matter 2020-03）"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# The Room（game-000086）

## 核心体验
"机关盒"品类的确立作（对照 game-000016 迷你锁具逻辑与 game-000011 触觉谱）：一个华丽的三维机关盒，所有交互都是**触摸手势**（转钥匙/拨开关/滑动视角），目镜透镜显影隐藏层——触觉拟真是全部玩法语言。六名前 Criterion（Burnout）开发者用约 £16 万做出 iPad 年度游戏。

## 规则与状态转移（含最简伪代码）
- 状态：`(盒子各面/机关状态, 目镜显影层, 信件收集)`；输入：`{触摸手势（旋转/缩放/拖动/拨动）}`。

```text
检视:  旋转/缩放盒子（3D 触摸视角）
机关:  手势操作（转钥匙/拨开关/拉抽屉）→ 打开新 compartment
目镜:  透镜显影隐藏 Null 元素 → 归位成符文 → 获取密码
叙事:  信件碎片（作者疯狂史）
```

## 输入与输出
- 输入：触摸手势全集（拟真操作——每个手势对应真实机关动作）。
- 输出：机关联动演出、目镜显影的隐藏层、信件文本。

## 难度与学习曲线
难度=机关观察与手势联想（"这个凸起能拨吗"）；无失败态——试错零成本（对照 pattern-000021 的唯一解契约：机关盒的解唯一但探索自由）。触觉拟真（手势=真实动作）是移动端独有的输入优势（分析口径）。

## 关联机制与模式
- 机制：mechanic-000090（触摸手势机关盒与目镜显影）
- 谱系：前 Criterion 团队转型（Burnout 美术外包→独立）——"外包美术团队转自研"的转型样本；名字来自 Media Molecule 技术演示代号（Wikipedia——彩蛋层）。
- 对照：与 game-000073（Golden Idol 点选演绎）对照——同为移动解谜，机关盒是"手势拟真"、Golden Idol 是"词库演绎"；触屏输入的两个方向。
- 系列谱系：Room Two（2013）/Three（2015）/Old Sins（2018）/VR（2020）——机关盒品类的可持续性证明。

## 设计权衡
- 优点：触摸手势拟真（手势=机关动作）的直觉性；目镜显影的"隐藏层"设计（一层视觉拆成两层信息）；£16 万成本→iPad 年度游戏+BAFTA（小成本标杆）；系列 1150 万+。
- 缺陷：PC 版 MC 73——触觉拟真移植到鼠标/键盘的手感损失（平台差异的负面证据，Wikipedia 口径）；叙事极简（信件碎片的碎片化叙事取舍）。
- 反例：与 game-000046（JJ 单轴输入）对照——同为移动极简，JJ 用"最少输入语义"、The Room 用"最拟真输入手势"；极简的两条路线（减少 vs 拟真）。
- 适用场景：触屏机关谜题；小团队转型自研样本。

## 可复现的最小版本与算法
机关状态机+手势映射+目镜显影层即可复现核心循环；美术质感（华丽机关盒）为投入重心。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2012-09-12 iOS 发行（纠误）；Fireproof 六人前 Criterion | Wikipedia |
| 玩法全项（手势机关/目镜 Null 显影/信件叙事） | Wikipedia |
| £160,000 成本与"best iOS game"目标口径 | Wikipedia |
| Apple iPad GOTY 2012/BAFTA 最佳英国游戏（纠误：非 Debut） | Wikipedia |
| 销量（140 万 iPad→系列 1150 万+）与续作谱系 | Wikipedia |

## 推断与未知
- **未知**：各机关的联动图；Null 主题的世界观全貌（系列展开）。
- **推断（分析而非事实）**：目镜显影是"隐藏层"设计——同一盒子两套信息（肉眼层/目镜层），双层信息使探索纵深翻倍而美术成本只增一层纹理（分析）。
- 前 Criterion 的美术外包基因使机关盒质感成为核心竞争力——团队基因决定转型方向（分析）。

## 创新延伸（可验证假设素材）
1. 手势拟真 vs 图标操作的机关盒对照（触觉拟真的贡献量化）。
2. 目镜双层信息密度实验（显影层信息量 vs 探索时长）。
