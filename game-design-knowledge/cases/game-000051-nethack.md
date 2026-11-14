---
id: game-000051
title: "NetHack"
aliases: ["网络创世纪（旧译）", "NH"]
genres: [puzzle, hybrid, strategy]
subgenre_tags: []
platforms: [多平台（终端/PC）]
release_year: 1987
creators: ["NetHack DevTeam（Mike Stephenson、Izchak Miller（宾大哲学教授）、Janet Walz——自 Hack fork；Hack 由 Lincoln-Sudbury 高中生团队在拒绝共享 Rogue 源码后自写地牢生成——'programming hack'）"]
core_loop: "50 层地下城下行 → 学会数千件物品的身份与交互 → 死亡（YASD）即知识 → 骨头文件把你的尸体带进别人的游戏 → 献祭 Amulet of Yendor 于星灵层 → 飞升（ascension）"
mechanic_ids: [mechanic-000052]
pattern_ids: [pattern-000024]
quality_score: 4.58
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/NetHack"
    title: "NetHack - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-14"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["1987-07-28 首发（Hack 的 fork；Hack 源自 Rogue——高中生团队被拒共享源码后自写生成代码）", "DevTeam（Stephenson/Miller/Walz；互联网协作命名）", "玩法全项（约 50 层 Mazes of Menace、Amulet of Yendor、星灵层献祭飞升、物品身份学习——乱码标签逐局重随机、宠物系统、骨头文件跨局携带死者、诅咒/祝福装备、YASD 文化、TDTTOE 'DevTeam Thinks of Everything'）", "社区（rec.games.roguelike.nethack；NAO 公共服务器；/dev/null 与 November NetHack 锦标赛、Junethack）", "NGPL 1989 copyleft 授权与变体（Slash'EM/UnNetHack/dNethack）", "版本史（3.4.3 2003 → 3.6.0 2015-12-07 含 Terry Pratchett 致敬 → 5.0.0 2026-05-02）", "影响（John Harris 五大 roguelike；Diablo/Minecraft/Spelunky/Mystery Dungeon 引用；Time 2012 百佳；MoMA Never Alone 展 2022-23）", "Meta/Facebook AI 研究的 NetHack Learning Environment（NeurIPS 2021 挑战——无 agent 飞升，Top 为符号方法 AutoAscend）"]
created_at: "2026-11-14"
updated_at: "2026-11-14"
---

# NetHack（game-000051）

## 核心体验
"读的游戏"：数千件物品的交互矩阵（dip into potion、polymorph、wish、诅咒装备的怪癖）全部需要从死亡中学习——每一次 YASD（Yet Another Stupid Death）都是数据点。骨头文件把你上次的尸体带进陌生人的游戏。它是涌现交互矩阵的历史极限（TDTTOE：DevTeam Thinks of Everything）。

## 规则与状态转移（含最简伪代码）
- 状态：`(物品身份表（逐局重随机）, 角色/宠物, 地下城层, 骨头文件队列)`；输入：`{移动/交互/物品使用}`。

```text
身份学习:  物品以乱码外观出现（'pink potion'），同类共用标签（TEMOV）
           试错/卷轴/祭坛鉴定 → 一旦确认终身有效（本局）
交互矩阵:  数千种物品×情境组合被预先编码（TDTTOE）——玩家发现即乐趣
骨头文件:  玩家死亡层随机存档 → 插入他人游戏（带诅咒遗物）
死亡:      permadeath + 排名 + 'Do you want your possessions identified?'
飞升:      献祭 Amulet（星灵层对抗 Riders：Death/Famine/Pestilence；玩家象征 War）
```

## 输入与输出
- 输入：键盘命令集（ASCII 界面）。
- 输出：ASCII 网格、命令回显、死亡排名与物品鉴定提示。

## 难度与学习曲线
难度=交互矩阵的知识覆盖率（TDTTOE 的承诺：每种组合都有答案）。学习文化即社区核心：YASD 自嘲、spoilers 伦理（剧透文化：读攻略算不算作弊的长期争论——社区口径）、save-scumming 判定为作弊。

## 关联机制与模式
- 机制：mechanic-000052（物品身份学习与骨头文件跨局传承）
- 模式：pattern-000021（唯一解契约的对照面：NetHack 是多解/无解皆可的涌现系——Baba 型开放契约的先祖）
- 影响（Wikipedia）：Diablo、Minecraft、Spelunky（game-000024 明言受其地形交互影响）、Mystery Dungeon；Meta AI 的 NetHack Learning Environment（NeurIPS 2021）把它变成 AI 基准。

## 设计权衡
- 优点：涌现交互矩阵的内容生产力（数十年更新 + TDTTOE 承诺）；死亡即知识的社区文化自组织（YASD/spoilers/tournament 生态）；骨头文件的"异步社交"。
- 缺陷：ASCII 与知识门槛的劝退（对照 game-000048 的入门零门槛——谱系两端）；无状态的确认机制被刷档文化侵蚀。
- 反例：与 game-000039（Sudoku 唯一解契约）对照——NetHack 是"多解涌现"路线的先祖（pattern-000021 的反例域，与 Baba 同侧但先于其三十年）。
- 适用场景：交互矩阵设计；"死亡即学习"文化；AI/Agent 研究环境。

## 可复现的最小版本与算法
物品身份表+交互矩阵子集+骨头文件机制即可复现"死亡即知识"骨架；全交互矩阵不可复现（数十年累积，TDTTOE 即其总量标签）。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 1987-07-28 首发；Hack fork 与高中生自写生成史 | Wikipedia |
| DevTeam 三人（含哲学教授 Izchak Miller） | Wikipedia |
| 玩法全项（身份学习/骨头文件/YASD/TDTTOE/飞升） | Wikipedia |
| 3.6.0（2015，Pratchett 致敬）→5.0.0（2026-05） | Wikipedia |
| 影响链与 Meta NLE（NeurIPS 2021） | Wikipedia |

## 推断与未知
- **未知**：交互矩阵的完整规模（社区 wiki 统计口径未核验）；5.0.0 的变更清单细节。
- **推断（分析而非事实）**：骨头文件是"异步多人"的最早实践之一——玩家互相踩进彼此的死亡现场；它与 NAO 公共服务器共同构成 roguelike 的社区基础设施（分析）。
- 3.4.3→3.6.0 的十二年断档与 5.0.0 的 2026 发布说明：志愿维护模式的发布节律不可预测（分析）。

## 创新延伸（可验证假设素材）
1. 骨头文件移植实验：把"死亡现场跨局携带"移植到现代肉鸽（ Deaths become content），检验异步社交的留存效应。
2. AI 基准延伸：NetHack Learning Environment 的 agent 行为分析（已在 NeurIPS 存在——续研方向）。
