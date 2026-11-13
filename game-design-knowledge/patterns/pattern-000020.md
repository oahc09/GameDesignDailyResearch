---
id: pattern-000020
name: "clone_wave_outcompetes_original（克隆波反超原作）"
aliases: ["克隆反超", "clone outcompetes original"]
related_case_ids: [game-000035, game-000015, game-000003, game-000001]
related_mechanic_ids: [mechanic-000036, mechanic-000016, mechanic-000003]
confidence: source_reviewed
created_at: "2026-11-13"
updated_at: "2026-11-13"
---

## problem
机制创新者（常为付费小团队）投入数月打磨，而克隆者数周内以免费+更简规则+平台化分发反超——创新的商业回报与设计贡献脱钩。

## context
规则可一眼看穿（pattern-000001 家族）；移动商店分发无原创性门槛；免费模式 vs 付费模式存在价差。

## solution（对克隆者而言）
取核心机制、去掉设计者的"深度附件"（Threes 的特例合并→2048 纯倍数）、免费+开源或广告化、抢先铺量。原作侧的应对（除法律外）只有：把深度做成品牌（45,000 字 postmortem 的公开叙事）、加速迭代、或转向平台/续作。

## tradeoffs
- 对生态：克隆潮压低原创定价（Threes 团队"puzzled"且商业落败）；但也传播了机制本身（2048 让合并玩法触达远超 Threes 的受众）。
- 对知识库：克隆与原作的规则 diff 是最好的设计教学材料（什么可简化、什么简化后消失）。

## known_uses（知识库内三次独立发生）
- game-000035 Threes! → game-000015 2048（数周内 Fives/1024/2048；2048 即 1024 克隆）
- game-000003 Suika Game → 《合成大西瓜》等（日本 App Store 免费榜前五过半为仿品；中国 H5 同构变体早于全球发行热度）
- game-000001 Flappy Bird → 下架后约每天 60 款山寨（Slate 口径）

## counterexamples
- game-000004 Stack / Ketchapp：克隆方自己成了发行平台（Ketchapp 也是 2048 移动克隆发行者）——说明克隆波的赢家是分发者而非机制首创者；原创者的护城河只能在执行/品牌/续作。
