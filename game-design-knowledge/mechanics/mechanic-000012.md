---
id: mechanic-000012
name: "motion_coupled_time（运动耦合时间缩放）"
aliases: ["时间随动", "time moves when you move"]
category: input_pattern
inputs: ["玩家移动（持续量，即时间输入）", "射击/投掷/夺械（是否计入运动由实现决定）"]
state_variables: ["全局 time_scale = f(player_motion)", "敌方位置与弹道", "手中武器耐久", "生命=1"]
preconditions: ["单机可控帧率", "敌人弹道在近停时仍可读"]
transition_rules: ["玩家运动 -> time_scale ≈ 1；静止 -> time_scale ≈ 0", "被弹一发即死 -> 关卡立即重开", "弹药有限、武器易碎 -> 必须夺械/用环境物", "清空本波敌人 -> 下一关"]
feedback: ["悬停子弹轨迹线（时间冻结可视化）", "时间流动的视觉呼吸感", "敌人 crystalline 材质的可读剪影"]
parameters: ["time_scale 曲线（线性/分段，未公开）", "静止判定阈值", "武器耐久", "每波敌人数与初始站位"]
failure_modes: ["步进式无敌（冻结无限思考）需用数量与站位压迫破解", "time_scale 抖动造成操作不适", "死亡重开过频使关卡节奏断裂"]
related_case_ids: [game-000011]
related_mechanic_ids: [mechanic-000006]
confidence: source_reviewed
created_at: "2026-10-30"
updated_at: "2026-10-30"
---

把"时间"从共享资源改为玩家私有货币：运动即消费时间，静止即囤积时间。FPS 的反应速度轴被整体替换为路线规划轴。一发即死在此是必要件（否则无限观察使时间失去稀缺性，见案例卡分析）；死亡即重开（mechanic-000006）保证学习循环密度。与 mechanic-000008（倒带）构成时间操控的两极：倒带修改过去，本机制门控现在。
