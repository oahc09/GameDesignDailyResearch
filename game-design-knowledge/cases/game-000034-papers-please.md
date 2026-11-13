---
id: game-000034
title: "Papers, Please"
aliases: ["请出示证件（中文通行译名）"]
genres: [simulation, puzzle, hybrid]
subgenre_tags: []
platforms: [pc, ios, ps_vita, android]
release_year: 2013
creators: ["Lucas Pope（3909，单人；前 Naughty Dog/Uncharted，2010 年离职移居日本埼玉）"]
core_loop: "每日规则手册更新 -> 逐份核对证件（护照/签证/印章/指纹/体重）-> 盖章批准或拒绝 -> 罚单与家庭预算（房租/伙食/取暖）-> EZIC 组织与道德抉择 -> 家人存亡"
mechanic_ids: [mechanic-000035]
pattern_ids: []
quality_score: 4.80
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Papers,_Please"
    title: "Papers, Please - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-13"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2013-08-08 PC（Linux 2014-02/iPad 2014-12/Vita 2017/移动 2022）", "Pope 单人/3909；前 Naughty Dog（Uncharted）；移居埼玉；2012-11 开工、预期数周实为约 9 个月；Haxe/NME（后 Unity）", "灵感：护照检查员的重复性（'they're just doing it over and over again'）与 Argo/Bourne 系列；Arstotzka 模仿东欧集团（柏林墙/东西德）", "玩法全项（规则逐日增严、盖章/审讯/指纹/体检/逮捕、家庭预算与罚单、EZIC 政变线、20 结局、Obristan 逃亡、无尽模式）", "获奖（IGF 2014 Seumas McNally 大奖+叙事+设计；GDCA 创新+最佳下载游戏；BAFTA 2014 策略与模拟；2021 Peabody 互动叙事奖）", "销量（2014-03 破 50 万→2016-08 180 万→2023 十周年 500 万）", "MC 85 (PC)/92 (iOS)；'empathy game'/游戏即艺术讨论；节奏枯燥批评（某评者'days 之间无聊'）", "2018 授权真人短片（11 分钟俄语，导演 Tkach/Ordynskiy，Pope 授权）"]
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

# Papers, Please（game-000034）

## 核心体验
1982 年，Arstotzka 边境检查员。你的全部操作是：核对证件、盖章。但规则手册每天变厚，家里的取暖费每天要付，EZIC 的传单塞进窗口——**官僚程序的重复性本身成为道德剧场**。

## 规则与状态转移（含最简伪代码）
- 状态：`(当日规则集, 当前申请人证件, 罚单计数, 家庭预算/健康)`；输入：`{检查动作, 批准章, 拒绝章}`。

```text
规则流:  每日新增条款（新证件类型/新禁令/新城市封锁）
         -> 规则集单调增严 => 合法判定越来越难
结算:    违规一次 -> 罚单扣钱；收入=按处理人数
家庭:    预算分配（房租/食物/取暖/药）-> 家人健康/存亡
道德层:  EZIC 途径/贿赂/特情申请——与规则冲突即抉择（20 结局）
```

## 输入与输出
- 输入：点选+盖章（全部操作在一张桌面完成）。
- 输出：证件的细节差异、罚单传真、家人的存亡通知、审批队列的日常人流。

## 难度与学习曲线
难度=规则复杂度的单调增 + 时间压力；学习=把规则内化为检查直觉（流程优化的乐趣本身是玩法——Pope 的灵感正是"检查员只是不断重复做它"，Wikipedia 引）。失败可读性高：罚单明示违规条目。枯燥的批评存在（MC 收录口径）——但枯燥是**主题的一部分**（分析）。

## 关联机制与模式
- 机制：mechanic-000035（规则手册漂移+家庭预算压力）
- 模式：暂无新模式卡（"empathy game"叙事设计属叙事-机制关系研究，登记为延伸方向）
- 作者谱系：Pope —— game-000027（Obra Dinn）同一作者：从官僚模拟到保险演绎，两作共享"桌面化职业模拟+信息核对"的方法论（SUPPORTED_BY theory-000001 关联可选，暂不建）。

## 设计权衡
- 优点：规则的"单调增严"是零成本的内容供给（规则即关卡）；预算压力把正确执行变成生存必需（不是分数而是家人的取暖费）；道德困境嵌入日常操作而非过场动画；500 万套证明"重复劳动"可以成为艺术载体（Peabody 奖，Wikipedia）。
- 缺陷：枯燥批评真实存在；无实体版时代的单机独立定价与传播依赖口碑。
- 反例：与 game-000003（Suika 物理随机）对照——Papers Please 零随机（全信息确定判定），乐趣全部来自规则内化与道德张力。
- 适用场景：职业模拟；规则学习型玩法；"制度批判"主题。

## 可复现的最小版本与算法
证件结构体 + 规则集版本化（每日 diff）+ 判定器 + 预算状态机即可复现核心循环；EZIC 剧情层为内容层。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2013-08-08 发行；Pope/3909/前 Naughty Dog | Wikipedia |
| 玩法全项（规则逐日增严/家庭预算/EZIC/20 结局） | Wikipedia |
| 开发（9 个月/Haxe/护照检查员灵感） | Wikipedia |
| 获奖全表（IGF/GDCA/BAFTA/Peabody） | Wikipedia |
| 销量（50 万→180 万→500 万） | Wikipedia |

## 推断与未知
- **未知**：规则手册的逐日完整清单（社区有整理，本日未核验 URL）；各结局触发条件细节。
- **推断（分析而非事实）**："规则单调增严"是该作最锋利的设计决定——它让玩家亲历"制度如何一步步把人变成机器"，无需任何过场说教；规则本身即叙事。
- **推断（分析而非事实）**：罚单与预算把"正确性"从抽象美德变成具体生存——道德困境的重量来自机制的 coupling 而非文本。

## 创新延伸（可验证假设素材）
1. 规则漂移×其他职业模拟（医院分诊/海关缉私），检验"单调增严规则+预算压力"结构的泛化性。
2. 多人版：一名玩家当规则制定者、一名当检查员——把官僚压力变成通信博弈（接 hypothesis-000013 的确认门槛研究）。
