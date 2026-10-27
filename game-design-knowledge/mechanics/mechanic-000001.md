---
id: mechanic-000001
name: "impulse_flap_gravity（脉冲升力对抗持续重力）"
aliases: ["单触上抛", "flap impulse"]
category: state_transition
inputs: ["单点触控/按键：离散点击事件（无方向、无长按语义）"]
state_variables: ["垂直速度 vy", "高度 y", "生存状态 alive", "score"]
preconditions: ["会话运行中", "输入不改变水平进程（进程自走）"]
transition_rules: ["每帧：vy += g; y += vy", "点击事件：vy = -J（脉冲，与当前 vy 无关地重置）", "与障碍或地面相交：alive = false"]
feedback: ["上抛-下坠的连续轨迹（玩家可读出速度）", "扑翼动画/音效", "通过障碍 +1 分"]
parameters: ["重力 g（复刻口径 0.25）", "脉冲 J（复刻口径 -4.6）", "障碍生成间隔（1400ms）", "缺口高度（90px）"]
failure_modes: ["连打过密：顶死上沿", "点击过疏：坠地", "误判缺口高度：贴边死亡", "输入延迟感知误差导致系统性误按"]
related_case_ids: [game-000001]
related_mechanic_ids: [mechanic-000006]
confidence: verified
created_at: "2026-10-27"
updated_at: "2026-10-27"
---

把"跳跃"从位移改为**速度重置**：点击不移动玩家，只改写垂直速度，其余全部交给恒定重力。玩家操作被压缩为"何时按下"一个自由度，而 g 与 J 的比值决定容错窗口——比值越小（脉冲越强/重力越弱），单次误按越致命。来源：floppybird 源码核对（复刻口径）；原版二进制参数未知，使用时须注明。
