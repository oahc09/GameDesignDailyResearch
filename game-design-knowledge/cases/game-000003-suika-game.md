---
id: game-000003
title: "Suika Game（スイカゲーム）"
aliases: ["スイカゲーム", "西瓜游戏", "Watermelon Game"]
genres: [casual, puzzle]
subgenre_tags: [merge, one_touch, hypercasual]
platforms: [nintendo_switch, ios, android]
release_year: 2021
creators: ["popIn / Aladdin X（popIn 现为 Aladdin X 旗下；百度子公司出身）", "Esquadra（移植协助）"]
core_loop: "选择落点投放水果 -> 物理下落滚动 -> 同阶接触合并升阶 -> 连锁与物理挤压持续反馈 -> 堆积越过容器顶线 -> 结束"
mechanic_ids: [mechanic-000003]
pattern_ids: [pattern-000002]
quality_score: 4.85
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: "https://github.com/itsakeyfut/suika-game"
sources:
  - url: "https://en.wikipedia.org/wiki/Suika_Game"
    title: "Suika Game - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-10-27"
    source_type: encyclopedia
    evidence_level: B
    supports_claims: ["各平台发行时间线", "11 阶合并链与投放规则", "计分与顶线败北条件", "2023 主播传播与下载里程碑", "山寨潮与官方应对"]
  - url: "https://github.com/itsakeyfut/suika-game"
    title: "itsakeyfut/suika-game — Bevy + Rapier2D 复刻"
    publisher_or_author: "itsakeyfut"
    published_at: null
    accessed_at: "2026-10-28"
    source_type: open_source_repository
    evidence_level: A
    supports_claims: ["存在可研读的开源物理复刻（可复现性依据）"]
  - url: "https://github.com/winsight/daxigua-1"
    title: "winsight/daxigua-1 — 合成大西瓜原版源码（浏览器可运行）"
    publisher_or_author: "winsight"
    published_at: null
    accessed_at: "2026-10-28"
    source_type: open_source_repository
    evidence_level: A
    supports_claims: ["同构玩法『合成大西瓜』的 H5 源码可运行（中国变体证据）"]
  - url: "https://github.com/tangxiangmin/cocos-big-watermelon"
    title: "cocos-big-watermelon — 合成大西瓜原理分析可读版"
    publisher_or_author: "tangxiangmin"
    published_at: null
    accessed_at: "2026-10-28"
    source_type: open_source_repository
    evidence_level: B
    supports_claims: ["对同构玩法的机制拆解（原版代码压缩不可读）"]
created_at: "2026-10-27"
updated_at: "2026-10-27"
---

# Suika Game（game-000003）

## 核心体验
玩家只决定水果从容器口落下的横向位置；水果受重力下落、滚动、挤压，两颗同类接触即合并成上一阶水果并可能引发连锁。目标是在容器不被堆满的前提下合成最大的西瓜并冲击高分。物理的不可预测性让每次堆叠都产生"差点就成了"的叙事。

## 规则与状态转移（含最简伪代码）
- 11 阶链（小→大）：樱桃 → 草莓 → 葡萄 → 柑（Dekopon）→ 柿 → 苹果 → 梨 → 桃 → 菠萝 → 甜瓜 → 西瓜。
- 仅最小 5 阶可投放，顺序随机且可见下一个；两个西瓜相互接触则双双消失。
- 任意水果越过容器顶线即败——连锁的物理挤压也能把水果挤出线。

```text
# 研究重构口径（非原版源码），与 11 阶链条、投放规则以 Wikipedia 事实为准
drop():      从最小 5 阶随机取一，置于玩家选定的 x，赋重力
onContact(a,b):
  if a.tier == b.tier and tier < 11:
      生成 tier+1 于接触点；score += points[tier+1]（越大越高）；触发邻近重压
  if a.tier == b.tier == 11: 双双消失
lose():  任意水果中心持续越过顶线（含连锁挤压）-> game over
```

## 输入与输出
- 输入：横向定位 + 投放确认（触屏拖放/单击），单指完成。
- 输出：物理滚动、合并爆浆动画与音效、得分跳字、下一颗预览、榜单（日/月/总）。

## 难度与学习曲线
上手零门槛（投放即玩），深度来自三层的耦合：**空间规划**（大果放哪）、**顺序管理**（随机队列下推迟低阶合并）、**物理风险**（连锁可能救场也可能挤爆顶线）。失败可读性中等——败局可复盘但物理因果链较长；这正是"再看一遍"回放价值的来源（推断）。

## 关联机制与模式
- 机制：mechanic-000003（物理投放与同阶合并）
- 模式：pattern-000002（可见的连锁与接近奖励）
- 相关变体：中国 H5 同构玩法《合成大西瓜》（比翼互动，Cocos Creator），开源源码与原理拆解见上表来源；**同玩法不同实体，按 aliases.yaml 归并规则不合并**。

## 设计权衡
- 优点：把 2048 的离散合并升级为物理连续体，累积感（塔越来越高）与失控感（物理挤压）同屏；"下一颗预览"保留规划性；合成的即时奖励天然成段，适合直播围观（2023 年经 VTuber 爆发即为佐证）。
- 缺陷：高阶后单颗水果体积占比大，边缘死角的惩罚接近不可逆；随机队列可能造成无法挽回的布局。
- 反例：纯离散合并（2048）无物理挤压，败局归因完全清晰——物理是该作乐趣与挫败的共同来源。
- 适用场景：需要"无失败操作、只有失败布局"的宽松感，以及可围观性强的会话型玩法。

## 可复现的最小版本与算法
任意 2D 物理引擎（圆体 + 重力）+ 11 阶半径/分值表 + 接触回调即可复现；上列伪代码即全部规则。参考实现：itsakeyfut/suika-game（Bevy + Rapier2D）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| popIn Aladdin 投影仪首发（2021-04，日本） | Wikipedia |
| Switch 日本 2021-12-09 / 全球 2023-10-20；iOS 全球 2024-03-07 | Wikipedia |
| 11 阶链条、仅 5 阶可投、双西瓜消失、顶线败北 | Wikipedia |
| 2023-05 起经日本主播/VTuber 爆发（Korone 等） | Wikipedia |
| 下载里程碑：2023-10 破 100 万 → 2024-10 1100 万+；2023/2024 日本 eShop 年度第一 | Wikipedia |
| 山寨潮：日本 App Store 免费榜前五过半为仿品 | Wikipedia |

## 推断与未知
- **未知**：官方分值表与物理参数（半径序列、恢复系数）；本库伪代码为研究重构。
- **推断（分析而非事实）**：其直播友好性源于"物理结果不可精确预测但宏观可解说"的观感结构。
- 与《合成大西瓜》的先后与独立性（是否互为启发）未查证，存疑待考。

## 创新延伸（可验证假设素材）
1. 把升阶链反向：投放即高阶、合并降阶分解成两颗，测试风险方向反转是否产生新决策结构。
2. 见 hypothesis-000001：合并链 × 网格跳跃的跨类型组合。
