---
id: game-000056
title: "Street Fighter II"
aliases: ["街头霸王2（中文通行译名）", "SFII", "The World Warrior"]
genres: [action, hybrid]
subgenre_tags: []
platforms: [arcade, snes, 多平台移植]
release_year: 1991
creators: ["Capcom（导演 Akira Nishitani；监制 Yoshiki Okamoto；设计 Nishitani/Akira Yasuda；音乐 Yoko Shimomura；约 35-40 人、预算约 $2.45M）"]
core_loop: "三局两胜 → 摇杆+六键（轻中重拳踢）→ 指令输入必杀技 → 连击取消 → 读帧与择距 → 击倒对手"
mechanic_ids: [mechanic-000060]
pattern_ids: [pattern-000026, pattern-000014]
quality_score: 4.90
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Street_Fighter_II"
    title: "Street Fighter II - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-15"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1991-03-07 街机发行（Capcom；SNES 1992-06/07）", "导演 Nishitani/监制 Okamoto/约 $2.45M/Shimomura 音乐", "规则全项（三局两胜/六键/指令输入必杀技/八战士+四 Boss/奖励关）", "连击起源（Funamizu 语：汽车奖励关的 bug 检查中发现'punch timing 期间可以追加第二击'——先留作隐藏特性，后成系列/品类标准）", "区域名轮换（M. Bison/Boxer/Claw/Dictator 称谓）与版本修订（Champion Edition/Turbo/Super/Super Turbo——Super Combos 与隐藏角色）", "商业（约 20 万台街机/1500 万软件/约 $100 亿收入——史上最高三强口径；SNES 630 万卡）", "文化（街机复兴、从高分追逐转向面对面对抗、锦标赛场景至 EVO）"]
created_at: "2026-11-15"
updated_at: "2026-11-15"
---

# Street Fighter II（game-000056）

## 核心体验
格斗品类的定义者：六键×指令输入×帧级判定，其最深的机制——**连击**——竟是在汽车奖励关做 bug 检查时被发现的（Funamizu 语），被留作隐藏特性后成为整个品类的标准。玩家社区随后把帧数据反向工程成可背诵的"帧谱"（frame data）——游戏的深度由玩家与设计者共同完成。

## 规则与状态转移（含最简伪代码）
- 状态：`(双方 HP/位置/硬直帧, 指令缓冲, 回合计数)`；输入：`{八向摇杆, 六键}`。

```text
必杀技:  指令输入（如 ↓↘→+拳）缓冲判定 → 技能帧表启动
帧判定:  每招有 startup/active/recovery 帧——攻击命中产生 hitstun（受击硬直）
连击:    在对方 hitstun 内追加攻击 → 连击（起源于 bug：奖励关的 punch timing 可追加第二击）
平衡:    八战士各有帧表/伤害/必杀差异 → 版本修订持续调整（CE/Turbo/Super/Super Turbo）
```

## 输入与输出
- 输入：八向摇杆+六键（指令输入的时序精度即技能）。
- 输出：帧级判定、必杀演出、版本修订说明。

## 难度与学习曲线
学习=帧级知识（frame data）的掌握——社区把帧表整理成公开文档（FGC 文化基础设施）。与 pattern-000014（确定性社区）直接呼应：确定帧判定 → 可研究 → 锦标赛（EVO 谱系）。

## 关联机制与模式
- 机制：mechanic-000060（指令输入+帧判定）
- 模式：pattern-000026（玩家发现的机制转正——连击 bug 起源为本模式最强证据）、pattern-000014（确定性社区）
- 对照：与 game-000031（QWOP 分肢控制）对照——同为"控制研究"，QWOP 的技能是发明、SFII 的技能是掌握公开帧表（分析）。

## 设计权衡
- 优点：bug 转正把涌现玩法制度化；六键/指令输入的深度天花板极高（三十年竞技生命）；版本修订的平衡迭代成为品类基建；~$100 亿收入与街机复兴（Wikipedia）。
- 缺陷：指令输入门槛（新手劝退）；区域名轮换引起的称谓混乱（Boxer/Claw/Dictator 社区公约——Wikipedia）。
- 反例：与 game-000052（SpaceChem 三轴排行）对照——FGC 的"排行"是人头对局而非解法效率；确定性社区的两种形态。
- 适用场景：对战格斗；任何需要帧级判定的对抗设计。

## 可复现的最小版本与算法
帧表驱动的状态机 + 指令缓冲 + hitstun 计数即可复现核心判定（社区帧表文档成熟——pattern-000014 谱系）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1991-03-07 发行；团队/预算/音乐 | Wikipedia |
| 连击起源（Funamizu 引语：bug 检查发现） | Wikipedia |
| 版本修订（CE/Turbo/Super/Super Turbo） | Wikipedia |
| 商业（20 万台/1500 万套/约 $100 亿——史上最高三强） | Wikipedia |
| 文化（街机复兴→锦标赛→EVO） | Wikipedia |

## 推断与未知
- **未知**：各角色完整帧表（Dossier 级社区文档未核验 URL）；连击 bug 的具体触发帧窗。
- **推断（分析而非事实）**："把 bug 留作隐藏特性"是游戏史上最重要的一次不修复决定——它把玩家发现变成了官方语言，使社区（pattern-000026）从消费者变成共同作者。
- 区域 Boss 名轮换（Tyson 肖像顾虑）显示 IP 风险对命名的影响（事实层）。

## 创新延伸（可验证假设素材）
1. 见 hypothesis-000026：帧数据透明度对学习曲线与社区深度的影响。
2. 连击发现率研究：当代格斗游戏的 bug 发现量与试玩量/网络传播的关系。
