---
id: mechanic-000028
name: "fate_batch_confirmation（三批量确认门槛）"
aliases: ["批量确认", "batch confirmation"]
category: feedback
inputs: ["fate 登记（姓名+死因的点选与输入）", "批量提交（自动触发）"]
state_variables: ["60 格 fate 簿", "待定条目集", "已确认批量", "死亡记忆解锁集"]
preconditions: ["存在客观正解（设计者已用表格链验证）", "错误不即时反馈"]
transition_rules: ["每凑齐 3 条完全正确的 fate -> 批量锁定为已证实", "最后 6 条两两确认", "错填不惩罚、不提示，仅停留待定", "通关须 58/60 正确"]
feedback: ["批量确认的揭示演出", "死亡记忆回放（信息供给侧）"]
parameters: ["批量大小=3（终局=2）", "通关阈值 58/60", "死因目录粒度", "人物锚点密度（制服/称谓/口音）"]
failure_modes: ["错误假设长期滞留待定（无反馈挫败）", "排除法机械化（后期只剩唯一未排除者）", "批量阈值过高使组合爆炸挫败、过低退化为连连看"]
related_case_ids: [game-000027]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-08"
updated_at: "2026-11-08"
---

演绎玩法的**信息经济学阀门**：错误免费（鼓励假设生成），但确认有批量门槛（纯猜测的期望收益被 C(60,3) 组合空间稀释）。3 是"假设风险"与"反馈密度"的平衡点，可参数化研究；终局两两确认防"凑批死角"。前提：设计者必须先用表格链自证可解（Pope 开发法）。
