---
id: mechanic-000027
name: "emergent_history_simulation（涌现历史模拟：世界生成+个体人格+事件日志）"
aliases: ["模拟即内容", "world simulation"]
category: state_transition
inputs: ["世界生成请求（随机种子）", "玩家对模拟层的干预（建造/冒险指令）"]
state_variables: ["世界史层（文明/战争/英雄/神器）", "个体层（人格/需求/关系/记忆）", "事件日志（可检索）"]
preconditions: ["模拟系统可作为叙事发生器（个体有可解读动机）", "事件日志可检索可导出"]
transition_rules: ["世界生成先模拟数百年历史写入 Legends", "个体交互产生无脚本事件链（压力→暴动→连锁）", "Strange Mood → 个体造神器（带名字入史）", "要塞陷落必然发生 → 失败事件本身入史"]
feedback: ["事件文本流", "Legends 史书浏览器（模拟产物可检索）", "社区可分享叙事（Boatmurdered 型）"]
parameters: ["历史模拟年数", "个体人格参数空间", "事件触发阈值", "日志粒度"]
failure_modes: ["模拟复杂度无上限（优化债）", "涌现事件不可控（无法保证玩家遇到'该有的故事'）", "知识门槛陡峭（需逆向工程系统思维）"]
related_case_ids: [game-000026]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-07"
updated_at: "2026-11-07"
---

内容生产的范式转移：把内容外包给模拟（world gen 先写数百年史；个体模拟长出故事），设计者只造"故事的物理"。两个配套件缺一不可：**必然失败**（"Losing is Fun"把终局写进模拟，预期预先对齐）与**可检索日志**（Legends——涌现内容不可分享就不构成社区叙事，Boatmurdered 正是分享性的产物，分析口径）。影响链：Minecraft/RimWorld/Terraria/Prison Architect（Wikipedia 直接证据）。
