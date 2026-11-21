---
id: game-000062
title: "Nuclear Throne"
aliases: ["核子王座（中文社区通称）", "NT", "原名 Wasteland Kings"]
genres: [action, hybrid]
subgenre_tags: []
platforms: [pc, ps4, ps_vita, nintendo_switch, xbox_one]
release_year: 2015
creators: ["Vlambeer（荷兰；导演/设计 Jan Willem Nijman、制作人/程序 Rami Ismail；美术 Paul Veer/Justin Chan；音乐 Jukio Kallio）"]
core_loop: "双摇杆弹幕肉鸽 → 辐射尘（rads）升级四选一变异 → 弹药五类两枪位 → 7-3 打 Nuclear Throne → 可 loop 无限加速难度 → 死亡全reset（王座/皇冠除外）"
mechanic_ids: [mechanic-000066]
pattern_ids: []
quality_score: 4.55
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Nuclear_Throne"
    title: "Nuclear Throne - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2015-12-05 正式发行（PC/PS4/Vita；Switch 2019-03-25/Xbox 2021-09-09）——纠误：非 2016", "Vlambeer（Nijman/Ismail）；EA 约两年（2013 起）", "起源：Mojam 48 小时慈善 jam 原型 Wasteland Kings（Notch 邀请，2013-02）→与 inXile 商标冲突改名", "玩法全项（13 角色/辐射尘升级四选一变异/10 级 ultra 变异/五弹药类两枪位/7-3 Throne/loop 无限难度/本地合作；Update #100 2025-12-05 加四人合作与宽屏 60+fps）", "'performative development' 直播开发（Northernlion 直播带动销量尖峰）", "walker 生成系统（分区规则）；4:3 画幅的刻意保留（至 2025）", "MC 89（IGN 9/PC Gamer 90/Eurogamer Essential）；EA 期破 10 万份与 $1M 营收；IGF 2015 音频荣誉提名", "后 Vlambeer 时代由 YellowAfterlife 维护"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Nuclear Throne（game-000062）

## 核心体验
双摇杆弹幕肉鸽的"手感"标杆：辐射尘（rads）驱动四选一变异构筑，loop 机制让通关不是终点而是难度倍增器。Vlambeer 的 "performative development"（直播开发）是本卡的发行侧研究点。

## 规则与状态转移（含最简伪代码）
- 状态：`(角色, 变异集, 双枪（五弹药类）, rads, 楼层/loop)`；输入：`{双摇杆, 切枪}`。

```text
rads:   击杀拾取 → 升级四选一变异（10 级 ultra 变异）
loop:   打赢 Throne → 回起点（难度大增，无限循环）
弹药:   五类（弹/壳/能/爆/十字）限制两枪位——武器组合即构筑
生成:   walker 系统分区规则生成关卡
死亡:   全 reset（特殊武器与皇冠除外）
```

## 输入与输出
- 输入：双摇杆+切枪（紧凑操作集）。
- 输出：高密度弹幕、变异构筑面板、loop 难度跳变。

## 难度与学习曲线
难度=弹幕生存+构筑路线选择（变异 synergy）+弹药管理；loop 让高手继续（无限难度，Wikipedia）。

## 关联机制与模式
- 机制：mechanic-000066（rads 变异构筑与 loop 难度）
- 谱系：Mojam 48h 慈善 jam 原型（Wasteland Kings）——jam 管道样本（pattern-000014 谱系记录，与 game-000014/000022 同）；Enter the Gungeon（game-000061）明言受其启发（Wikipedia 灵感列表）——KB 谱系闭环。
- 发行：4:3 画幅刻意保留至 2025（Wikipedia）——"美学一致性优先于市场惯例"（分析口径）。

## 设计权衡
- 优点：变异构筑+loop 的深度延长（MC 89）；直播开发与社区共建（Northernlion 尖峰案例）；EA 两年打磨手感（Vlambeer game feel 名声——RPS 访谈口径）。
- 缺陷：难度陡峭；4:3 画幅的现代适配争议（至 2025 才宽屏——社区长期要求，Wikipedia 口径）。
- 反例：与 game-000061（EtG 手工房间）对照——NT 用 walker 生成系统（全生成）、EtG 用手工房间随机连接；肉鸽关卡供给的两条路线（生成 vs 模板）。
- 适用场景：弹幕肉鸽；直播驱动发行研究。

## 可复现的最小版本与算法
walker 生成器+变异表+弹药经济+loop 参数即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2015-12-05 正式发行（EA 2013 起约两年） | Wikipedia |
| Mojam 48h 慈善 jam 起源（Wasteland Kings→商标改名） | Wikipedia |
| 规则全项（rads 变异/五弹药/loop/Update #100 四人合作） | Wikipedia |
| performative development 与 Northernlion 尖峰 | Wikipedia |
| MC 89 与 EA 期 $1M | Wikipedia |

## 推断与未知
- **未知**：各变异的精确数值；walker 生成算法细节；Nuclear Throne Together 模组（Wikipedia 未载——不采信）。
- **推断（分析而非事实）**：loop 是对"通关即终"的解法——把肉鸽的胜利转为难度签证（与 game-000039 日常结构的无限性对照，分析）。
- 商标冲突改名（Wasteland Kings→Nuclear Throne）是 jam 命名的法律风险案例（分析）。

## 创新延伸（可验证假设素材）
1. loop 难度曲线的玩家分段研究（loop1/loop2 的流失与留存）。
2. 变异 synergy 图的公开化（构筑透明度对照——接 pattern-000025）。
