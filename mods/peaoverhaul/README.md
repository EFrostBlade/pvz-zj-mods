# 豌豆强化

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

放大豌豆类子弹并提升伤害与穿透：一次覆盖 PeaDefault / SnowPea / FirePea / GoldPea 四种子弹。纯「覆盖内置资源」型 Mod，不新增任何角色或卡片，适合作为同类改造的模板。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `peaoverhaul` |
| 作者 | 云漫行 |
| 主分类 | 角色与卡牌 |
| 标签 | 覆盖、子弹、穿透、模板 |
| 当前收录版本 | `1.0.0` |
| 适用游戏版本 | 作者声明：`0.28`（开发与实机演示基于该版本）；尚未在 `0.29.0` 验证 |
| 平台 | 作者声明：Windows；Android 未确认 |
| 前置依赖 | 包清单 `dependencies` 为空；作者声明：无 |
| 已知冲突 | 包清单 `conflicts` 为空；作者声明：无。同类「覆盖 Projectile 资源」的 Mod 之间会互相覆盖，叠加使用前请确认加载顺序 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 维护中（作者声明，2026-09-27） |
| 信息核对日期 | 2026-09-27 |

## 内容介绍

- 覆盖 `Projectile` 资源：`PeaDefault`、`SnowPea`、`FirePea`、`GoldPea` 四种子弹（`overrides.Projectile`，无新增 provide）。
- 子弹尺寸 `scale = (1.6, 1.6)`，穿透 `penetrateNum = 8`。
- 火焰豌豆伤害 120（`damageFlags = 7`，爆破粒子走 FireSplats）。
- 无托管运行时插件（`runtimeAssembly` 为空），体积仅 3.1 KB。

## 作者与下载

- 作者主页：[云漫行（bilibili）](https://www.bilibili.com/video/BV1hthU6TEjF/)；身份可经视频简介引用的作者技能仓库 [josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills) 交叉核对。
- 原始发布页：[josnil 的杂交版 Mod 存放站 · 本作品详情页](https://josnil.github.io/pvz-mods/mod/peaoverhaul.html)。
- 下载入口：[夸克网盘（本 Mod 独立分享）](https://pan.quark.cn/s/05e3ee9fe1e3)（免提取码），或 [GitHub Release](https://github.com/josnil/pvz-mods/releases/latest/download/peaoverhaul.pmod)（`PeaOverhaul.pmod`）。
- 作者反馈入口：B 站视频评论区（见上）。
- 源码：[josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills)（`tools/pmod-toolchain/PeaOverhaul/` 为完整工程样板）。
- 授权说明：未提供。

## 安装与使用

1. 从上述下载入口获取 `.pmod`，按 [Windows](../../guides/players/README.md) 或 Android 指南导入、启用并重启。
2. 纯资源覆盖型：安装重启后即对全场豌豆类子弹生效，无游戏内开关。

## 兼容依据与实测记录

作者声明：适用游戏版本 `0.28`、平台 Windows；包清单核对（2026-09-27 读取工程 `mod.json`）：ID `peaoverhaul`、版本 `1.0.0`、作者 云漫行、`dependencies` 与 `conflicts` 均为空、`overrides.Projectile` 含 4 项。

社区实测：暂无记录。

## 已知问题

未确认；作者未提供已知问题清单。

## 条目更新记录

- 2026-09-27：首次收录 `1.0.0`；资料来源：[作者发布站详情页](https://josnil.github.io/pvz-mods/mod/peaoverhaul.html)，包清单字段依据包内 `mod.json`。
