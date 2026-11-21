---
id: mechanic-000079
name: "cells_meta_economy（Cells meta 经济与 Boss Cells 反向难度）"
aliases: ["细胞经济", "boss cells"]
category: economy
inputs: ["run 结束（死亡/通关）", "Cells 消费决策", "Boss Cells 启用"]
state_variables: ["run 内状态（武器/变异/HP）", "已消费永久升级", "Runes 能力解锁", "Boss Cells 层级（1-5）"]
preconditions: ["死亡失去 run 物品与未消费 Cells（已消费的不丢）", "Runes 从精英怪顺序解锁（metroidvania 能力层）"]
transition_rules: ["run 内收集 Cells → 地牢末端消费 → 永久升级", "Runes 解锁能力（藤蔓/传送等）", "Boss Cells 1-5 层层加难（玩家自选启用）", "程序生成自预设区段"]
feedback: ["像素战斗演出", "Cells 结算", "Boss Cells 加难提示"]
parameters: ["Cells 掉落率", "永久升级树", "Runes 顺序", "Boss Cells 5 级", "区段生成规则"]
failure_modes: ["未消费 Cells 的死亡挫败（损失可见）", "叙事模糊批评（MC 口径）", "无总监共识决策的迭代成本（组织层）"]
related_case_ids: [game-000075]
related_mechanic_ids: [mechanic-000066]
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

permadeath 的"不白费"中间态：未消费 Cells 损失可见（有痛感）但已消费的不丢（有沉淀）——与纯删档（FTL）和纯保留（VS meta）构成 permadeath 经济的三档。Boss Cells 五级自选加难是反向难度曲线（与 game-000059 Pact 同族）。Motion Twin 工人合作社（无总监）+EA 反馈 40-50% 特性（Bénard 口径，Wikipedia）为组织样本；Evil Empire 分拆共研 + 2026-02 合研 Castlevania 新作为拆分协作档案。
