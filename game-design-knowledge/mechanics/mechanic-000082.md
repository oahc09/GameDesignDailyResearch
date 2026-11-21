---
id: mechanic-000082
name: "player_dug_terrain_phasing（玩家挖掘关卡与敌人幽灵化）"
aliases: ["挖掘关卡", "dig tunnels"]
category: state_transition
inputs: ["四向挖掘", "泵气（连击）"]
state_variables: ["土层网格", "敌人（实体/幽灵态）", "巨石", "泵气进度"]
preconditions: ["关卡地形由玩家挖掘生成", "敌人可幽灵化穿土（无敌减速）"]
transition_rules: ["挖掘 → 开辟通道（关卡=玩家挖掘的产物）", "泵管连击 → 敌人充气爆破", "挖空巨石下 → 坠落压碎（可压玩家）", "敌人幽灵化穿土逼近 → 空处固化", "最后一只敌人 → 逃向地表（限时压力）", "256 关 kill screen"]
feedback: ["挖掘的地形改变", "充气膨胀演出", "巨石坠落"]
parameters: ["土层网格尺寸", "泵气连击数", "巨石分布", "幽灵化频率", "深度分值表", "kill screen 关数=256"]
failure_modes: ["幽灵化使静态防守不可能（反龟缩，分析）", "泵气高密度敌群的节奏紧张", "巨石误压自己的挫败"]
related_case_ids: [game-000078]
related_mechanic_ids: []
confidence: verified
created_at: "2026-11-21"
updated_at: "2026-11-21"
---

地形即武器的始祖（1982）：关卡由玩家挖掘生成（player-dug levels）——内容自生成；幽灵化打破"挖好即安全"的反龟缩机制（与 game-000039 反驻留同精神，分析口径）。泵气与巨石双击杀手段=直接处决/地形杀的选择。kill screen（256 关）与 Pac-Man/Galaga 同族（pattern-000022 关联）。
