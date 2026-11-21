---
id: game-000061
title: "Enter the Gungeon"
aliases: ["进入枪牢（中文社区通称）", "EtG"]
genres: [action, hybrid]
subgenre_tags: []
platforms: [pc, ps4, xbox_one, nintendo_switch, ios]
release_year: 2016
creators: ["Dodge Roll Games（四名前 Mythic Entertainment 员工；主设计 Dave Crooks；Unity；Devolver 发行；作曲 Doseone）"]
core_loop: "五层地牢下潜 → 双摇杆弹幕射击 → 翻滚无敌帧躲弹 → 房间清空 → 楼层 Boss → 死亡 permadeath → Breach 枢纽解锁"
mechanic_ids: [mechanic-000065]
pattern_ids: []
quality_score: 4.50
confidence: verified
verification_status: source_reviewed
original_url: null
play_url: null
repository_url: null
sources:
  - url: "https://en.wikipedia.org/wiki/Enter_the_Gungeon"
    title: "Enter the Gungeon - Wikipedia"
    publisher_or_author: "Wikipedia contributors"
    published_at: null
    accessed_at: "2026-11-21"
    source_type: encyclopedia
    evidence_level: "B"
    supports_claims: ["2016-04-05 PC/PS4 与移植谱系（iOS/Android 2025-08）", "Dodge Roll 四人（前 Mythic；主设计唯一署名 Dave Crooks；Unity；Doseone 作曲）", "规则全项（弹幕肉鸽/翻滚无敌帧/Blanks 清弹/翻桌掩体/子弹形敌人 Gundead/每层 Boss/弹壳货币+钥匙开箱/permadeath/Breach 枢纽解锁；四 Gungeoneer+联机 Cultist；每层约 20 手工房间随机连接）", "命名与灵感（Gun Godz 配乐；Isaac/Nuclear Throne/Spelunky/黑魂/MGS/Mega Man/Metroid/NES Zapper）", "销量（首周 20 万+→2017-01 80 万+→2020 300 万+）", "MC 82-87；Destructoid 'all but perfected'（双摇杆射击）", "衍生 Exit the Gungeon（2019）/House of the Gundead 街机（2022）/Enter the Gungeon 2（3D，2025-04 公布）"]
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

# Enter the Gungeon（game-000061）

## 核心体验
弹幕×肉鸽的双摇杆射击：翻滚的短暂无敌帧是核心动词——"在弹幕里翻出一条路"。手工房间随机连接（每层约 20 房）保证"手工质量+随机路径"的平衡（对照 game-000024 Spelunky 的房间模板法同族）。

## 规则与状态转移（含最简伪代码）
- 状态：`(玩家/弹幕, 房间生成, 库存（枪/弹壳/钥匙/Blank）, 楼层)`；输入：`{双摇杆移动/瞄准, 翻滚, Blank}`。

```text
翻滚:  短暂无敌帧穿越弹幕（核心动词——invulnerability window）
Blank: 清除全屏敌弹（有限资源——应急牌）
房间:  手工房间随机连接 → 清空锁门 → 奖励
经济:  弹壳买枪/钥匙开箱 → 分支构筑
死亡:  permadeath → Breach 枢纽用解锁货币买永久条目
```

## 输入与输出
- 输入：双摇杆（移动/瞄准分离）+ 翻滚/Blank 键。
- 输出：弹幕密度演出、创意枪械（Mega Man/Metroid/NES Zapper 致敬谱系，Wikipedia）、Boss 多阶段。

## 难度与学习曲线
难度=弹幕读识与翻滚时机（无敌帧的窗口管理）；枪械创意带来"每局换武器"的新鲜感。Destructoid 称其"几乎完善了双摇杆射击"（Wikipedia）。

## 关联机制与模式
- 机制：mechanic-000065（翻滚无敌帧与手工房间随机连接）
- 谱系：灵感五作（Isaac/NT/Spelunky/黑魂/MGS——Wikipedia）是知识库多重谱系的交点；与 game-000012（Doom 声音 AI）同弹幕密度域但肉鸽结构不同。
- 对照：与 game-000021（VS 自动攻击）对照——同为弹幕肉鸽，EtG 保留全部操作（双摇杆+翻滚）、VS 卸载攻击；操作密度两极。

## 设计权衡
- 优点：翻滚无敌帧把"躲避"做成主动动词；手工房间+随机连接的质量/新鲜平衡（Spelunky 同族改良）；Breach 枢纽的 meta 解锁曲线；300 万销量（2020）。
- 缺陷：难度高劝退（MC 批评口径）；常规枪与创意枪落差（MC 批评口径）。
- 反例：与 game-000021（VS 自动化卸载）对照——同一弹幕问题的两个解：VS 卸载输入、EtG 精化输入（pattern-000023/000013 的对照延伸）。
- 适用场景：双摇杆肉鸽；手工房间随机连接（rooms 手工+连接随机的改良模板法）。

## 可复现的最小版本与算法
手工房间图+随机连接+弹幕发射器+翻滚无敌帧+Blank 清屏即可复现核心循环。

## 证据对照
| 关键事实 | 证据 |
|---|---|
| 2016-04-05 发行；Dodge Roll 四人前 Mythic | Wikipedia |
| 规则全项（翻滚无敌/Blank/手工房间随机连接/Breach） | Wikipedia |
| 灵感五作（Isaac/NT/Spelunky/黑魂/MGS） | Wikipedia |
| 销量（首周 20 万→300 万）与评价 | Wikipedia |

## 推断与未知
- **未知**：翻滚无敌帧的精确帧数；房间连接的拓扑约束细节。
- **推断（分析而非事实）**：Blank 作为"清弹应急牌"是把无敌帧之外的第二次容错显式资源化（与割草机/太鼓资源同族——宽容资源化谱系）。
- 灵感五作横跨 KB 多条谱系（肉鸽/魂系/潜行）——独立开发的知识来源即文化混血（分析）。

## 创新延伸（可验证假设素材）
1. 翻滚窗口剂量研究（无敌帧帧数 vs 弹幕密度的最优带）。
2. 手工房间池的社区 UGC 版（接 game-000024 的 UGC 模板方向）。
