---
id: mechanic-000088
name: "gel_surface_mechanic_family（凝胶三色与机制家族扩展）"
aliases: ["凝胶机制", "gel family"]
category: state_transition
inputs: ["双门/凝胶涂布/合作指令"]
state_variables: ["传送门对", "凝胶涂层表面", "光桥/激光链", "合作机器人同步"]
preconditions: ["凝胶改变表面属性（推进/弹跳/可放门）", "合作双人依赖（一人开门一人通行）"]
transition_rules: ["orange 凝胶=加速表面", "blue 凝胶=弹跳表面", "white 凝胶=可放传送门表面", "光桥可被凝胶改变附着", "合作战役：双机器人分工依赖"]
feedback: ["凝胶物理演出", "合作同步", "Wheatley/Cave 叙事层"]
parameters: ["三凝胶属性", "光桥/激光链规则", "Faith Plates 弹射", "合作关卡依赖设计"]
failure_modes: ["机制家族膨胀的节奏稀释（五倍长度口径）", "凝胶-表面组合的边界情况", "合作同步门槛"]
related_case_ids: [game-000084]
related_mechanic_ids: [mechanic-000030]
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

机制家族的扩展范式：初代 Portal 变异"动量"，二代变异"介质"（凝胶三色改变表面属性——吸收自学生作品 Tag: The Power of Paint，Wikipedia 明载）。合作战役把"依赖"设计成教学——双机器人分屏/在线，跨平台同步先行（对照 pattern-000029 每代一变异：Portal 2 是"机制家族"变体而非单变异）。
