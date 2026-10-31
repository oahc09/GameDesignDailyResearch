---
id: mechanic-000018
name: "chips_mult_algebra（底注×倍率计分代数）"
aliases: ["chips×mult", "乘法计分"]
category: state_transition
inputs: ["选牌打出", "弃牌", "商店购买/出售（改写公式参数）"]
state_variables: ["牌组（52±改造）", "小丑栏（有序）", "ante/盲注目标", "金钱（含利息）"]
preconditions: ["牌型查表给出基础 chips 与 mult", "小丑触发顺序显式（左→右）"]
transition_rules: ["score = chips × mult", "小丑/牌面强化依序触发：mult += x / mult *= x / chips += y（加乘分区）", "Boss 盲注禁用一种打法（去对称化）", "盲注目标随 ante 指数上升", "经济：奖励 = 基础 + 剩余出牌加成 + 利息"]
feedback: ["逐项结算动画（每个加成依序砸入公式——反馈即审计）", "目标血条"]
parameters: ["牌型基础表", "小丑池（发行时 150 张）与稀有度权重（未核验）", "商店价格/刷新", "ante 目标曲线", "利息利率"]
failure_modes: ["乘法组合爆炸导致数值失控（需 Boss 禁用与目标曲线刹车）", "关键小丑缺席的高方差局", "加/乘顺序敏感造成新手理解门槛"]
related_case_ids: [game-000017]
related_mechanic_ids: []
confidence: verified
created_at: "2026-10-31"
updated_at: "2026-10-31"
---

单接口数值设计：所有 150 张小丑共用"进 chips 区还是 mult 区、加法还是乘法"这一个代数接口，因此互相可组合、无需教程。加/乘分区 + 顺序敏感让**计分顺序本身成为构筑对象**（分析口径）；指数目标曲线与 Boss 去对称化充当失控刹车。该代数壳可移植到任意"基础值×倍率"的玩法（弹幕/塔防/经营）。
