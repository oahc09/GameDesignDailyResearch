---
id: mechanic-000007
name: "rule_block_rewrite（词块规则重写）"
aliases: ["规则即推块", "words are rules"]
category: state_transition
inputs: ["四方向推块（Sokoban 移动语义）", "UNDO/RESET 回退"]
state_variables: ["网格对象集合", "词块布局", "现行规则集（由词块对齐解析）", "各对象派生属性（YOU/STOP/WIN/SINK/DEFEAT…）"]
preconditions: ["规则以 3+ 词块横向/纵向对齐构成有效语法才生效", "固定词块可锁死规则（X IS X）"]
transition_rules: ["推词块 -> 重新解析对齐段 -> 规则集更新 -> 全体同类对象属性即时重派生", "NOUN IS NOUN 触发全体变形", "失去全部 YOU 对象不判负，仅限 UNDO/RESET（MOVE/SHIFT 可临时断开）", "YOU 对象与 WIN 对象重合 -> 过关"]
feedback: ["现行规则高亮显示", "属性变化即时反映对象外观", "变形动画"]
parameters: ["词块词表（名词/动词 IS·HAS/操作符 AND·NOT/属性词）", "语法解析约束", "每关词块初始布局", "关卡总数（481）"]
failure_modes: ["规则改写造成无解局面（需 RESET）", "词块推进死角", "语法组合的解空间爆炸导致测试覆盖不足", "后期难度波动（媒体批评点）"]
related_case_ids: [game-000006]
related_mechanic_ids: []
confidence: verified
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

把规则系统本身降格为可推拽的关卡物件：规则不再是引擎常量，而是每关的状态变量。设计要点：① 对象无默认属性（开发者起点决定），规则是唯一事实源；② 无强制失败 + 无限 UNDO，把试错成本清零，难度全部来自洞察；③ 代价是解空间按规则组合爆炸，内容测试难度随深度失控。
