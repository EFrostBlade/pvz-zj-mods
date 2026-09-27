# 超级机枪射手

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

每 1.5 秒向前方一次齐射 7 颗豌豆（横向排开、互不重叠）；每次攻击有 10% 概率触发大招——5 秒内倾泻约 300 颗豌豆。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `supergatlingpea` |
| 作者 | 云漫行 |
| 主分类 | 角色与卡牌 |
| 标签 | 齐射、大招、金卡、托管插件 |
| 当前收录版本 | `1.0.0` |
| 适用游戏版本 | 作者声明：`0.28`（开发与实机演示基于该版本）；尚未在 `0.29.0` 验证 |
| 平台 | 作者声明：Windows；Android 未确认 |
| 前置依赖 | 包清单 `dependencies` 为空；作者声明：无 |
| 已知冲突 | 包清单 `conflicts` 为空；作者声明：无 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 维护中（作者声明，2026-09-27） |
| 信息核对日期 | 2026-09-27 |

## 内容介绍

- 金卡：阳光 600、冷却 30.0s、血量 1000；射速 1.5s，每轮 7 颗、弹速 500。
- 地形要求：空地可直接种，也可种在双发射手上升级。
- 大招：每次攻击 10% 概率触发，持续 5 秒（约 300 颗豌豆）。
- 齐射走数据侧多弹道配置；大招概率与逐颗发射由托管运行时插件驱动（`Runtime/ModAssembly.dll`，入口 `SuperGatlingPeaRuntimeEntry`）。
- 可进选卡界面与图鉴。

## 作者与下载

- 作者主页：[云漫行（bilibili）](https://www.bilibili.com/video/BV1hthU6TEjF/)；身份可经视频简介引用的作者技能仓库 [josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills) 交叉核对。
- 原始发布页：[josnil 的杂交版 Mod 存放站 · 本作品详情页](https://josnil.github.io/pvz-mods/mod/supergatlingpea.html)。
- 下载入口：[夸克网盘（本 Mod 独立分享）](https://pan.quark.cn/s/3e3b62402dfd)（免提取码），或 [GitHub Release](https://github.com/josnil/pvz-mods/releases/latest/download/supergatlingpea.pmod)（`超级机枪射手.pmod`）。
- 作者反馈入口：B 站视频评论区（见上）。
- 源码：[josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills)（`tools/plant/build_plant_super_gatling.py` 生成器与 `tools/plant/runtime_src_plant/` 插件源码，亦为作者快速上手指南的标准样板）。
- 授权说明：未提供。

## 安装与使用

1. 从上述下载入口获取 `.pmod`，按 [Windows](../../guides/players/README.md) 或 Android 指南导入、启用并重启。
2. Mod 含托管运行时插件，随包自动加载；卡片在选卡界面出现（金卡），也可在图鉴中查看。

## 兼容依据与实测记录

作者声明：适用游戏版本 `0.28`、平台 Windows；包清单核对（2026-09-27 读取工程 `mod.json`）：ID `supergatlingpea`、版本 `1.0.0`、作者 云漫行、`dependencies` 与 `conflicts` 均为空、`provides` 含 Character / CharacterSprite / Packet 各 1 项。

社区实测：暂无记录。

## 已知问题

未确认；作者未提供已知问题清单。

## 条目更新记录

- 2026-09-27：首次收录 `1.0.0`；资料来源：[作者发布站详情页](https://josnil.github.io/pvz-mods/mod/supergatlingpea.html)，包清单字段依据包内 `mod.json`。
