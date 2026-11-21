---
id: mechanic-000089
name: "hex_alchemy_programming（六边形炼金机械编程与 GIF 导出）"
aliases: ["六边形编程", "opus arms"]
category: input_pattern
inputs: ["各机械臂独立指令集编辑（运行期零输入）"]
state_variables: ["六边形网格", "多机械臂（grab/drop/rotate/pivot/extend/retract+轨道）", "元素与键", "排行记录"]
preconditions: ["运行确定性（同指令带恒同结果）", "完成机器可导出 GIF", "Workshop 上传须附可解证明"]
transition_rules: ["每臂独立指令集并行运行", "符文：bond/unbond/calcify/transmute（铅→金）", "原子或臂碰撞 → 停机", "排行：cycles/cost/area 三轴（社区有 sum 合成指标——口径未核验）", "完成机器导出 GIF"]
feedback: ["机械臂并行舞动", "炼金结果", "GIF 分享产物"]
parameters: ["六边形网格", "机械臂类型与轨道", "符文效果表", "排行三轴", "Workshop 证明规则"]
failure_modes: ["碰撞停机的调试挫败", "三轴优化的受众天花板", "炼金叙事的轻量（对照 SpaceChem 剧情线，分析）"]
related_case_ids: [game-000085, game-000052]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

SpaceChem 的六边形精炼官方重制（The Codex of Alchemical Engineering 2008 → SpaceChem → Opus Magnum——Zachtronics 自我 remake 谱系闭环，Wikipedia 明载）：排行三轴从"指令/循环/反应器"演化为"循环/成本/占地"——排行轴随机制语言演化（分析口径）。**GIF 导出为刻意开发优先项**（Wikipedia 明载）——确定性模拟使"解法即动画"免费获得分享产物。Workshop 可解证明把 pattern-000021 从设计者义务扩展为上传者义务。
