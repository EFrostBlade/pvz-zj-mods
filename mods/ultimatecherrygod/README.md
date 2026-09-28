# 究极樱桃战神

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

高大近战植物：撕咬前方一格造成 300 伤害，并吐出樱桃子弹（直击 300 + 3×3 溅射 300）。被碾压反伤，咬车秒杀，每次咬击回血。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `ultimatecherrygod` |
| 作者 | 云漫行 |
| 主分类 | 角色与卡牌 |
| 标签 | 近战、溅射、防爆、高血量、钻卡 |
| 当前收录版本 | `1.0.0` |
| 适用游戏版本 | 作者声明：`0.28`（开发与实机演示基于该版本）；尚未在 `0.29.0` 验证 |
| 平台 | 作者声明：Windows；Android 未确认 |
| 前置依赖 | 未确认（作者站点未声明前置依赖；包清单未独立核对） |
| 已知冲突 | 未确认，作者站点未声明冲突。另据历史报告：[cd显示（血条·装填倒计时）](../healthcooldowndisplay/README.md) 作者曾在 `1.7.8` 投稿时报告与自定义植物、僵尸类 Mod 冲突；其 `1.14.1` 是否解决及与本作品的具体兼容性未确认 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 维护中（作者声明，2026-09-27） |
| 信息核对日期 | 2026-09-28 |

## 内容介绍

以下依据[作者发布站详情页](https://josnil.github.io/pvz-mods/mod/ultimatecherrygod.html)的属性表与实现要点整理，未由目录维护者独立核对包清单：

- 钻卡：阳光 666、冷却 30s、血量 8000，体型高大（height = 3）。
- 撕咬：`biteOnly` 模式不吞尸，每次咬击 300 伤害并回血 100。
- 樱桃子弹（UltimateCherryShot）：直击 300 + 西瓜溅射通道 3×3 范围 300 伤害（`rangeSize 1.5×1.5`）。
- 防爆：`explosionHurt = 0`，爆炸免伤。
- 防碾压：`smashHurt = 500`（碾压仅扣 500），且被碾压时反伤 500。
- 咬车秒杀：命中车辆直接摧毁，自损 500。

## 作者与下载

- 作者主页：[云漫行的发布视频（bilibili）](https://www.bilibili.com/video/BV1hthU6TEjF/)；作者身份依据[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)的本人声明与作品发布站。
- 原始发布页：[josnil 的杂交版 Mod 存放站 · 本作品详情页](https://josnil.github.io/pvz-mods/mod/ultimatecherrygod.html)。
- 下载入口：[夸克网盘（本 Mod 独立分享）](https://pan.quark.cn/s/f8cacc624df8)。链接来自作者发布站，作者标注免提取码；维护者未独立下载分享内容，登录或客户端要求以网盘实际提示为准。
- 作者反馈入口：B 站视频评论区（见上）。
- 源码：未公开。
- 授权说明：未提供。

## 安装与使用

1. 从上述下载入口获取 `.pmod`，按 [Windows 安装指南](../../guides/players/windows.md)导入、启用并重启。Android 兼容性未确认；通用导入步骤见 [Android 指南](../../guides/players/android.md)。
2. 卡片在选卡界面出现（钻卡）。

## 兼容依据与实测记录

作者声明：适用游戏版本 `0.28`、平台 Windows，功能以[作者发布站详情页](https://josnil.github.io/pvz-mods/mod/ultimatecherrygod.html)与 B 站演示为准；未提供联机或组合兼容实测记录。

包清单核对：未独立核对（作者未随投稿提供包内 `mod.json` 摘录）；ID 与版本依据作者发布站（ID `ultimatecherrygod`、版本 `1.0.0`）。

资料核对：版本、平台、维护状态及包清单记录以[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)和作者发布站为来源；本次维护者仅核对公开资料，未下载、安装或运行这些 Mod。

社区实测：暂无记录。

## 已知问题

未确认；作者未提供已知问题清单。

## 条目更新记录

- 2026-09-28：核对[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)与作者发布站，整理下载入口、安装链接和兼容声明的来源及版本范围；未进行包内容或实机验证。
- 2026-09-27：首次收录 `1.0.0`；资料来源：[作者发布站详情页](https://josnil.github.io/pvz-mods/mod/ultimatecherrygod.html)。
