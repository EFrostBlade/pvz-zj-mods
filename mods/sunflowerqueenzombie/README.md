# 向日葵女王僵尸

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

一包两个僵尸共用一个插件：女王 = 火焰迪斯科身体 + 向日葵女王头，会滑步、点燃队友子弹、召唤伴舞；舞者 = 火焰舞者身体 + 同款女王头。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `sunflowerqueenzombie` |
| 作者 | 云漫行 |
| 主分类 | 角色与卡牌 |
| 标签 | 双角色、追踪、灼烧光环、召唤、钻卡 |
| 当前收录版本 | `1.0.0` |
| 适用游戏版本 | 作者声明：`0.28`（开发与实机演示基于该版本）；尚未在 `0.29.0` 验证 |
| 平台 | 作者声明：Windows；Android 未确认 |
| 前置依赖 | 作者投稿声明：无，所核对清单 `dependencies` 为空；维护者未独立读取下载包 |
| 已知冲突 | 作者投稿声明：无，所核对清单 `conflicts` 为空。另据历史报告：[cd显示（血条·装填倒计时）](../healthcooldowndisplay/README.md) 作者曾在 `1.7.8` 投稿时报告与自定义植物、僵尸类 Mod 冲突；其 `1.14.1` 是否解决及与本作品的具体兼容性未确认 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 维护中（作者声明，2026-09-27） |
| 信息核对日期 | 2026-09-28 |

## 内容介绍

**女王（ZombieSunFlowerQueen）**：

- 6 颗追踪火球同帧发射（每 1.5 秒一轮，`fireMethodFlags = 32`，弹速为负朝向在场方向）。
- 3×3 灼烧光环：每 0.5 秒对范围内敌方造成 25 点灼烧；光环对全阵营（含自身）施加 FireHit——免疫减速与冻结。
- 每 10 秒生产 250 脑光；滑步移动；召唤火焰向日葵舞者僵尸。

**舞者（ZombieFireSunFlowerBackup）**：火焰舞者身体 + 同款女王头，免疫减速与冻结，点燃子弹。

数据以[作者发布站详情页](https://josnil.github.io/pvz-mods/mod/sunflowerqueenzombie.html)的属性表为准（女王血量 3850 / 啃食 300 / 阳光 350 / 冷却 15s；舞者血量 880 / 阳光 75）。

## 作者与下载

- 作者主页：[云漫行的发布视频（bilibili）](https://www.bilibili.com/video/BV1hthU6TEjF/)；作者身份依据[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)的本人声明与作品发布站。
- 原始发布页：[josnil 的杂交版 Mod 存放站 · 本作品详情页](https://josnil.github.io/pvz-mods/mod/sunflowerqueenzombie.html)。
- 下载入口：[夸克网盘（本 Mod 独立分享）](https://pan.quark.cn/s/05b35a3625e2)。链接来自作者发布站，作者标注免提取码；维护者未独立下载分享内容，登录或客户端要求以网盘实际提示为准。
- 作者反馈入口：B 站视频评论区（见上）。
- 源码：[josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills)（`tools/zombie/build_zombie_sunflower_queen.py` 生成器与 `tools/zombie/runtime_src_zombie_sunflower_queen/` 插件源码）。
- 授权说明：未提供。

## 安装与使用

1. 从上述下载入口获取 `.pmod`，按 [Windows 安装指南](../../guides/players/windows.md)导入、启用并重启。Android 兼容性未确认；通用导入步骤见 [Android 指南](../../guides/players/android.md)。
2. Mod 含托管运行时插件，随包自动加载；女王卡片在选卡界面出现，伴舞由女王技能召唤。
3. 头部为独立渲染的换头结构（影子吃定位、普通容器打断父代画），游戏内效果见作者演示。

## 兼容依据与实测记录

作者声明：适用游戏版本 `0.28`、平台 Windows；作者投稿中的包清单核对记录（2026-09-27 读取工程 `mod.json`；维护者未独立读取下载包）：ID `sunflowerqueenzombie`、版本 `1.0.0`、作者 云漫行、`dependencies` 与 `conflicts` 均为空、`provides` 含 Character / CharacterSprite / Packet 各 2 项（双角色）。

资料核对：版本、平台、维护状态及包清单记录以[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)和作者发布站为来源；本次维护者仅核对公开资料，未下载、安装或运行这些 Mod。

社区实测：暂无记录。

## 已知问题

未确认；作者未提供已知问题清单。

## 条目更新记录

- 2026-09-28：核对[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)与作者发布站，整理下载入口、安装链接和兼容声明的来源及版本范围；未进行包内容或实机验证。
- 2026-09-27：首次收录 `1.0.0`；资料来源：[作者发布站详情页](https://josnil.github.io/pvz-mods/mod/sunflowerqueenzombie.html)，包清单字段依据作者投稿中的 `mod.json` 核对记录。
