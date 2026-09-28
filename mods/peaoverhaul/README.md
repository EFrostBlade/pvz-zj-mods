# 豌豆强化

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

放大豌豆类子弹并提升伤害与穿透：一次覆盖 PeaDefault / SnowPea / FirePea / GoldPea 四种子弹。纯「覆盖内置资源」型 Mod，不新增任何角色或卡片，适合作为同类改造的模板。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `peaoverhaul` |
| 作者 | 云漫行 |
| 主分类 | 玩法调整 |
| 标签 | 覆盖、子弹、穿透、模板 |
| 当前收录版本 | `1.0.0` |
| 适用游戏版本 | 作者声明：`0.28`（开发与实机演示基于该版本）；尚未在 `0.29.0` 验证 |
| 平台 | 作者声明：Windows；Android 未确认 |
| 前置依赖 | 作者投稿声明：无，所核对清单 `dependencies` 为空；维护者未独立读取下载包 |
| 已知冲突 | 作者投稿声明：无，所核对清单 `conflicts` 为空；覆盖相同 Projectile 资源的 Mod 可能冲突，具体组合未确认 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 维护中（作者声明，2026-09-27） |
| 信息核对日期 | 2026-09-28 |

## 内容介绍

- 覆盖 `Projectile` 资源：`PeaDefault`、`SnowPea`、`FirePea`、`GoldPea` 四种子弹（`overrides.Projectile`，无新增 provide）。
- 子弹尺寸 `scale = (1.6, 1.6)`，穿透 `penetrateNum = 8`。
- 火焰豌豆伤害 120（`damageFlags = 7`，爆破粒子走 FireSplats）。
- 无托管运行时插件（`runtimeAssembly` 为空），体积仅 3.1 KB。

## 作者与下载

- 作者主页：[云漫行的发布视频（bilibili）](https://www.bilibili.com/video/BV1hthU6TEjF/)；作者身份依据[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)的本人声明与作品发布站。
- 原始发布页：[josnil 的杂交版 Mod 存放站 · 本作品详情页](https://josnil.github.io/pvz-mods/mod/peaoverhaul.html)。
- 下载入口：[夸克网盘（本 Mod 独立分享）](https://pan.quark.cn/s/05e3ee9fe1e3)。链接来自作者发布站，作者标注免提取码；维护者未独立下载分享内容，登录或客户端要求以网盘实际提示为准。
- 作者反馈入口：B 站视频评论区（见上）。
- 源码：[josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills)（`tools/pmod-toolchain/PeaOverhaul/` 为完整工程样板）。
- 授权说明：未提供。

## 安装与使用

1. 从上述下载入口获取 `.pmod`，按 [Windows 安装指南](../../guides/players/windows.md)导入、启用并重启。Android 兼容性未确认；通用导入步骤见 [Android 指南](../../guides/players/android.md)。
2. 纯资源覆盖型：安装重启后即对全场豌豆类子弹生效，无游戏内开关。

## 兼容依据与实测记录

作者声明：适用游戏版本 `0.28`、平台 Windows；作者投稿中的包清单核对记录（2026-09-27 读取工程 `mod.json`；维护者未独立读取下载包）：ID `peaoverhaul`、版本 `1.0.0`、作者 云漫行、`dependencies` 与 `conflicts` 均为空、`overrides.Projectile` 含 4 项。

资料核对：版本、平台、维护状态及包清单记录以[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)和作者发布站为来源；本次维护者仅核对公开资料，未下载、安装或运行这些 Mod。

社区实测：暂无记录。

## 已知问题

未确认；作者未提供已知问题清单。

## 条目更新记录

- 2026-09-28：核对[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)与作者发布站，整理下载入口、安装链接和兼容声明的来源及版本范围；未进行包内容或实机验证。
- 2026-09-27：首次收录 `1.0.0`；资料来源：[作者发布站详情页](https://josnil.github.io/pvz-mods/mod/peaoverhaul.html)，包清单字段依据作者投稿中的 `mod.json` 核对记录。
