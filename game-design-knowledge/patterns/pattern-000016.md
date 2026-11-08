---
id: pattern-000016
name: "silent_teaching_by_induction（零文本归纳教学）"
aliases: ["隐形教学", "no tutorial text"]
related_case_ids: [game-000028, game-000029]
related_mechanic_ids: [mechanic-000029, mechanic-000030]
confidence: source_reviewed
created_at: "2026-11-08"
updated_at: "2026-11-08"
---

## problem
文字教程打断心流、依赖本地化、且常被跳过；但规则复杂度又要求系统教学。

## context
规则可以由样例或环境展示；开发预算允许精细的关卡/样例排布；受众接受学习成本。

## solution
把课程做进**信息设计**而非文本，两条实现路线：Portal 路线——试炼舱三拍节奏（隔离引入→组合→反转）+ 环境护栏（Emancipation Grill），语音叙事与教学解耦；Witness 路线——纯样例归纳，规则永不言说，epiphany 即奖励。共同点：教学序列是设计物，玩家察觉不到"被教"。

## tradeoffs
- 归纳路线把学习成本前置——对元游戏玩家是劝退（Witness 的 2/5 vs 10/10 两极，Wikipedia）。
- 样例序列的信息歧义风险（多规则解释同样例会让玩家建立错误模型）。
- 生产成本高：教学序列需要逐项测试（与文字教程的一次性成本相反）。

## known_uses
- game-000029 Portal（三拍节奏 + GLaDOS 语音与教学解耦；'without any explicit instructions'——Wikipedia 口径）
- game-000028 The Witness（纯样例归纳 + 环境谜题）

## counterexamples
- game-000006 Baba Is You：把规则本身做成可操作的词块——规则即 UI，教程与玩法合一；说明"教学载体"有环境/样例/规则本体三种选择，选哪种取决于规则是否应该被玩家改写。
