---
id: mechanic-000030
name: "silent_test_chamber_cadence（零文本试炼舱节奏）"
aliases: ["试炼舱三拍", "chamber cadence"]
category: progression
inputs: ["玩家解舱推进（线性课程结构）"]
state_variables: ["当前舱号", "已引入概念集", "组合层数"]
preconditions: ["每个新概念可被物理环境单独展示", "环境极简使谜题元素易辨认"]
transition_rules: ["三拍节奏：新概念隔离引入（仅它）→ 与已有概念组合 → 反直觉应用（如 flinging 跳入深渊）", "零文字——语音叙事层与教学层解耦（GLaDOS 的指令同时是课程表）", "Emancipation Grill 防止解法/道具跨舱带出（课程边界=物理规则）"]
feedback: ["舱门开启", "GLaDOS 语音层（叙事即 UI）", "flinging 的速度感"]
parameters: ["每概念舱数（2-3，分析口径）", "组合层数曲线", "环境元素密度", "课程总长（~3 小时）"]
failure_modes: ["概念组合爆炸超出三小时课纲", "语音叙事与教学节拍互相干扰", "物理规则与课程边界不一致时护栏失效"]
related_case_ids: [game-000029]
related_mechanic_ids: []
confidence: source_reviewed
created_at: "2026-11-08"
updated_at: "2026-11-08"
---

课程式玩法设计（curriculum design）的标杆：三拍节奏（引入→组合→反转）+ 零文字 + 叙事层与教学层同构（GLaDOS 的命令本身就是课程表）。Emancipation Grill 是隐形护栏的范例——防止玩家把上一课的解法带进下一课，物理边界与教学边界重合。三小时时长是教学密度的函数而非内容缺陷（分析口径）。
