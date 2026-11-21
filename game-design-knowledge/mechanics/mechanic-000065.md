---
id: mechanic-000065
name: "roll_iframes_handmade_rooms（翻滚无敌帧与手工房间随机连接）"
aliases: ["翻滚无敌帧", "dodge roll"]
category: input_pattern
inputs: ["双摇杆移动/瞄准", "翻滚", "Blank 清弹"]
state_variables: ["弹幕与敌人", "房间生成图", "库存（枪/弹壳/钥匙/Blank）", "楼层"]
preconditions: ["翻滚有短暂无敌帧窗口", "手工房间池随机连接（每层约 20 房）"]
transition_rules: ["翻滚 → 窗口内免疫弹幕", "Blank → 清除全屏敌弹（有限资源）", "房间清空 → 门开 → 奖励", "楼层 Boss → 下一层", "死亡 permadeath → Breach 解锁"]
feedback: ["弹幕密度演出", "翻滚轨迹", "Boss 多阶段"]
parameters: ["无敌帧数", "房间池规模", "Blank 数量", "枪械池", "Boss 阶段表"]
failure_modes: ["难度高劝退（MC 批评口径）", "常规枪与创意枪落差", "翻滚滥用的无脑化"]
related_case_ids: [game-000061]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

翻滚无敌帧把"躲避"变成主动动词（窗口管理即技能）；手工房间随机连接是 Spelunky 模板法（mechanic-000025）的同族改良——连接随机、内容手工。Blank 是无敌帧之外的第二次容错显式资源化（宽容资源化谱系，分析口径）。灵感横跨 Isaac/NT/Spelunky/黑魂/MGS（Wikipedia）——谱系交点样本。
