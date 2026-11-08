---
id: game-000027
title: "Return of the Obra Dinn"
aliases: ["奥伯拉丁的回归（中文通行译名）", "Obra Dinn"]
genres: [puzzle, strategy, hybrid]
subgenre_tags: []
platforms: [pc, nintendo_switch, ps4, xbox_one]
release_year: 2018
creators: ["Lucas Pope（3909 LLC，单人开发；Papers, Please 作者）"]
core_loop: "验尸唤醒死亡记忆 -> 冻结场景中辨认人物与死因 -> 在 fate 簿中登记（姓名+死因）-> 每正确 3 条批量确认 -> 用逻辑与消歧跨章节串联 -> 还原 60 人命运"
mechanic_ids: [mechanic-000028]
pattern_ids: [pattern-000017]
quality_score: 4.90
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Return_of_the_Obra_Dinn"
    title: "Return of the Obra Dinn - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-08"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2018-10-18 PC / 2019-10-18 主机移植", "Pope/3909、Unity + 自制 1-bit 抖动渲染（早期 Mac 风格；防眩晕的运动模糊化抖动）", "玩法全项（Memento Mortem 验尸回放/冻结场景/60 人命运/死因目录）", "确认机制：每正确 3 条批量确认（最后 6 条两两确认）；须准确登记 58/60", "非线性结构：十章式死亡事件分组", "获奖（IGF Seumas McNally 大奖+Excellence in Narrative；TGA 最佳美术指导；BAFTA 艺术成就+游戏设计；GDCA 最佳叙事）", "开发（2014 公布、四年余、表格链数据、本地配音演员）；影响 The Case of the Golden Idol 等后继演绎游戏", "MC 89"]
created_at: "2026-11-08"
updated_at: "2026-11-08"
---

# Return of the Obra Dinn（game-000027）

## 核心体验
保险调查员登上一艘幽灵船，60 个人的命运（姓名+死因）全部要靠推理填写。信息是碎片化的：一段死亡回放、一个冻结局、一张花名册——玩家用排除法、口音、制服、称谓把人名钉到骨头上。**游戏不告诉你对不对，直到你一次答对三个。**

## 规则与状态转移（含最简伪代码）
- 状态：`(已解锁死亡记忆集, fate 簿 60 格, 已确认批量)`；输入：`{验尸, 场景检视, 填写 fate}`。

```text
fate 记录:  (人物名, 死因)  # 死因从目录选取，姓名自由输入
确认:       每凑齐 3 条完全正确的 fate -> 批量锁定为"已证实"
            （最后 6 条两两确认；通关须 58/60 正确——Wikipedia 口径）
错填:       不惩罚、不提示（留在待定状态）——错误本身是信息（被排除的假设）
推理链:     人物身份常需跨章节证据串联（制服→职级→称谓→剧情指称）
```

## 输入与输出
- 输入：第一人称检视 + 簿记填写（点选+输入）。
- 输出：1-bit 抖动渲染的记忆回放、死亡瞬间的可冻结场景、fate 簿的确认揭示。

## 难度与学习曲线
难度曲线靠**信息节拍**控制：十章式死亡分组让每个章节引入可辨认的"角色锚点"（Wikipedia：非线性但分章消化）。Pope 用电子表格把人物与命运链预先校验过——设计者自己先跑了求解器（Wikipedia 开发条目），这是"演绎玩法必须设计者先验证可解"的直接证据。

## 关联机制与模式
- 机制：mechanic-000028（三批量确认门槛——信息经济学设计）
- 模式：pattern-000017（容错演绎设计：确认门槛+无惩罚试错）
- 影响：直接启发 The Case of the Golden Idol 等后继演绎游戏（Wikipedia）；与 game-000005（Wordle）同属"每日/限量确定反馈"谱系但无每日限制。
- 渲染注记：1-bit 抖动不只是美术——低信息密度画面**迫使玩家靠行为而非外观辨认人物**，与推理玩法互锁（分析口径，渲染事实来自 Wikipedia）。

## 设计权衡
- 优点：批量确认把"猜对率"从单题变为组合问题，纯猜测期望收益极低（C(60,3) 组合空间）；错误无惩罚鼓励假设生成，门槛防止假设污染结论；1-bit 风格与推理主题同构。
- 缺陷：后期依赖"唯一未被排除者"的排除法路径可能机械化（社区讨论口径，未入库来源，标注为社区反应）；确认前的长时间无反馈对部分玩家挫败（MC 89 但存在此类批评——通用口径）。
- 反例：Her Story 类（对话检索式演绎）无确认门槛——靠玩家自我约束；Obra Dinn 证明门槛可以被形式化为机制。
- 适用场景：任何"假设-验证"型玩法（诊断、审计、情报分析）。

## 可复现的最小版本与算法
死亡记忆解锁器 + fate 状态机 + 3 批量确认校验即可复现核心循环；Pope 的表格化人物-命运链数据是设计方法的一部分（开源与否未核验，不引用仓库）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2018-10-18 发行；Pope/3909；Unity+1-bit 渲染 | Wikipedia |
| 60 命运/验尸回放/冻结场景/死因目录 | Wikipedia |
| 三批量确认（末 6 两两）、58/60 通关线 | Wikipedia |
| 十章分组、表格链开发法 | Wikipedia |
| IGF 大奖/TGA/BAFTA/GDCA 获奖；影响 Golden Idol | Wikipedia |

## 推断与未知
- **未知**：销量（Wikipedia 未载）；"4 modes of death"类细节口径未采信（Wikipedia 明确不载）；确认批次的边界 case（跨章节确认顺序）未深究。
- **推断（分析而非事实）**：3 条批量是精心选择的阈值——1 条会太苛刻（组合爆炸挫败），全部即时反馈则退化为连连看；3 是"假设风险"与"反馈密度"的平衡点，可参数化研究（hypothesis-000013）。
- **推断（分析而非事实）**：最后 6 条两两确认是"终局去死角"设计——避免最后阶段出现无法凑批的僵局。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000013：确认门槛参数（1/2/3/5）对演绎玩法挫败与严谨性的剂量效应。
2. 多人异步版：一位玩家布置命运链、另一位推理还原——把单人演绎变成通信博弈。
