---
id: game-000040
title: "Stephen's Sausage Roll"
aliases: ["香肠卷（中文社区通称）", "SSR"]
genres: [puzzle, hybrid]
subgenre_tags: []
platforms: [pc]
release_year: 2016
creators: ["Stephen Lavelle（increpare Games，爱尔兰独立开发者）"]
core_loop: "推香肠上烤架 -> 每个烤面恰好烤一次（过烤/欠烤即败）-> 叉子可串起/举起香肠 -> 一步撤销/重开 -> 走回起点交付"
mechanic_ids: [mechanic-000041]
pattern_ids: []
quality_score: 4.60
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Stephen%27s_Sausage_Roll"
    title: "Stephen's Sausage Roll - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2016-04-18 PC（Windows/OS X/Linux）；increpare/Lavelle；Unity", "规则全项（Sokoban 式推香肠上烤架、每点恰好烤一次——香肠每侧两点、烧焦/落水/人落水即败、一步撤销/重开、叉子串起与分离机制随章节扩展）", "难度声誉（Guardian：比 The Witness 还难、'难度可能挫败部分玩家'；Foddy 类比 Dark Souls、Blow 赞誉）", "MC 90（Destructoid 10/10、Edge 9/10、Guardian 5/5）；Edge Awards 2016 PC 年度游戏", "叙事：石碑短语渐次拼合", "Sokoban-like 分类"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# Stephen's Sausage Roll（game-000040）

## 核心体验
Sokoban 谱系的极限推进：香肠有六个"烤面状态"（每侧两点），推动/翻转/叉串都在改变这个六维状态——每个动作都是一次不可逆的状态转移，目标让全部面"恰好烤一次"。Guardian 称其比 Witness 更难；Foddy 类比 Dark Souls。

## 规则与状态转移（含最简伪代码）
- 状态：`(网格, 每根香肠的朝向与各面烤制计数, 叉子状态, 玩家位置)`；输入：`{四向移动}`。

```text
推动:  Sokoban 式推香肠（滚动/平移改变朝向）
烤制:  香肠落在烤架格 -> 接触面计数 +1
       计数=1 完美；>1 烧焦（败）；终局有面计数=0 欠烤（败）
叉子:  可串起/举起香肠（新增空间自由度，随章节解锁）
撤销:  一步撤销/重开按钮
失败:  烧焦/香肠落水/人落水
```

## 输入与输出
- 输入：四向移动（唯一输入集）。
- 输出：烤面计数可视化（香肠表面的焦痕）、撤销与重开按钮。

## 难度与学习曲线
难度=六维状态在脑内的预演能力：每步移动同时改变香肠朝向与烤制计数，玩家必须"提前看见"几步后的全部面状态。Foddy/Blow 的公开发声（Wikipedia）证明其难度声誉是设计者社区背书而非营销。

## 关联机制与模式
- 机制：mechanic-000041（恰好一次计数谜题——状态计数即谜题）
- 谱系：Sokoban 直系（game-000036 只推不拉 → SSR 加"计数"维度）；与 game-000030（Snakebird）同属"身体状态谜题"（蛇身=烤面）。
- 归属：increpare 为推箱变体高产者（社区谱系，本卡不展开未核验细节）。

## 设计权衡
- 优点：计数机制把 Sokoban 的二值推箱升级为连续状态管理；一步撤销保持"死锁可挽回"（与 Sokoban 原版死锁不可撤销对照——机制层已内置宽恕）；难度声誉获 Edge PC 年度游戏（硬核即品牌）。
- 缺陷：受众极窄（Guardian 警告口径）；无难度分级（对照 pattern-000017 续作路线——increpare 未做 Primer 式易化）。
- 反例：与 game-000009（Tiny Wings 单输入极简）对照——同为"身体状态"谜题/玩法，输入极简度相反、深度同高。
- 适用场景：网格状态计数谜题；硬核向独立设计。

## 可复现的最小版本与算法
香肠朝向/计数状态机 + 推动结算 + 烤架判定即可复现（状态空间远大于 Sokoban 但规则同样可完全形式化——求解器可作难度度量，参照 FESS 谱系思路）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2016-04-18 发行；Lavelle/increpare；Unity | Wikipedia |
| 规则全项（每点恰好一次/叉串/撤销） | Wikipedia |
| 难度声誉（Guardian/Foddy/Blow） | Wikipedia |
| MC 90/Edge PC 年度 2016 | Wikipedia |

## 推断与未知
- **未知**：全关卡清单与解法长度分布；Lavelle 的关卡设计方法论一手资料。
- **推断（分析而非事实）**："恰好一次"是"至多一次"的更苛刻版本——它把 Sokoban 的死锁（不可逆）扩展为过烤（不可逆+方向性），状态空间更大且失败更早可见。
- 叙事石碑（Wikipedia）为低优先附加层——难度本体不依赖叙事。

## 创新延伸（可验证假设素材）
1. 计数维度的实验：三面烤制（立体香肠）/两面计数（扁平）——检验状态维度对难度谱的敏感性。
2. 求解器辅助验证：SSR 型关卡的 FESS 式求解器移植（接 pattern-000011）。
