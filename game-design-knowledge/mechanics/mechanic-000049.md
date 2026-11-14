---
id: mechanic-000049
name: "four_swipe_liveops（四向滑动、宽容资源与 World Tour 节律）"
aliases: ["四向滑动跑酷", "hoverboard + world tour"]
category: session_structure
inputs: ["上跳/下滚/左换道/右换道（滑动，速度计分）"]
state_variables: ["车道位置", "硬币/钥匙", "滑板状态（约 30 秒）", "复活资源", "World Tour 景点"]
preconditions: ["无尽跑酷主进程", "liveops 更新节律（约三周一换景）"]
transition_rules: ["四向滑动躲避；滑动更快得分更高（输入强度计分）", "碰撞即败 → 钥匙/广告复活或 hoverboard 免死", "hoverboard 双击开启约 30 秒", "硬币/道具 → 18 角色 17 滑板解锁", "每日词猎 + 赛季猎捕 + World Tour 换景"]
feedback: ["换景演出", "收集解锁", "复活/滑板 UI"]
parameters: ["滑动速度计分系数", "hoverboard 时长", "复活价格（钥匙/广告）", "World Tour 换景周期（约三周）", "每日任务结构"]
failure_modes: ["评分平庸（重复性批评口径）", "复活广告的广告化体验", "换景节律的内容通胀压力"]
related_case_ids: [game-000048]
related_mechanic_ids: [mechanic-000006]
confidence: verified
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

长线 liveops 的机制工程：失败光谱中间态的完整实现（hoverboard 30 秒免死 → 广告/钥匙复活 → 硬死亡），滑动速度计分把输入强度变成分数维度（罕见设计，分析口径），World Tour 约三周一换景是十余年更新的行业节律基准。与 game-000002（Crossy 买断）对照为商业路线样本对。
