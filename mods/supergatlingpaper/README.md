# 超级机枪读报僵尸

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

读报僵尸的身体 + 超级机枪射手的头。每 1.5 秒直线连发 7 颗豌豆，10% 概率触发 5 秒 300 颗大招；报纸被打破后 3 倍速暴走。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `supergatlingpaper` |
| 作者 | 云漫行 |
| 主分类 | 角色与卡牌 |
| 标签 | 远程、护具、暴走、钻卡、托管插件 |
| 当前收录版本 | `1.0.0` |
| 适用游戏版本 | 作者声明：`0.28`（开发与实机演示基于该版本）；尚未在 `0.29.0` 验证 |
| 平台 | 作者声明：Windows；Android 未确认 |
| 前置依赖 | 包清单 `dependencies` 为空；作者声明：无 |
| 已知冲突 | 包清单 `conflicts` 为空；作者声明：无。注：目录已收录的 [cd显示（血条·装填倒计时）](../healthcooldowndisplay/README.md) 作者声明其与各类自定义僵尸类 Mod 存在冲突，同装前请向双方作者确认 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 维护中（作者声明，2026-09-27） |
| 信息核对日期 | 2026-09-27 |

## 内容介绍

- 护具（报纸）500 + 本体血量 1250，啃食伤害 800；卡片阳光 100、冷却 5.0s。
- 每 1.5 秒向前方直线连发 7 颗豌豆；每次开火 10% 概率触发大招：5 秒内向 ±15° 散射 300 颗豌豆。
- 报纸被打掉后进入暴走，移速 ×3（复用读报僵尸的护具破碎状态机）。
- 子弹从炮口出膛：托管插件每帧把子弹生成点对齐 `FireMarker`（头部独立渲染后，生成点跟随头部美术而非静态插槽）。
- 与植物版超级机枪射手共用同一份齐射判定核心（`GatlingVolleyCore.cs`，共享源文件编译进两个包）。
- 图鉴僵尸页的重复条目已在运行期消除。

## 作者与下载

- 作者主页：[云漫行（bilibili）](https://www.bilibili.com/video/BV1hthU6TEjF/)；身份可经视频简介引用的作者技能仓库 [josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills) 交叉核对。
- 原始发布页：[josnil 的杂交版 Mod 存放站 · 本作品详情页](https://josnil.github.io/pvz-mods/mod/supergatlingpaper.html)。
- 下载入口：[夸克网盘（本 Mod 独立分享）](https://pan.quark.cn/s/aae6cedcf4dc)（免提取码），或 [GitHub Release](https://github.com/josnil/pvz-mods/releases/latest/download/supergatlingpaper.pmod)（`超级机枪读报僵尸.pmod`）。
- 作者反馈入口：B 站视频评论区（见上）。
- 源码：[josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills)（`tools/zombie/build_zombie_super_gatling_paper.py` 生成器、`tools/zombie/runtime_src_zombie_super_gatling/` 插件源码、`tools/zombie/gates/` 离线闸门）。
- 授权说明：未提供。

## 安装与使用

1. 从上述下载入口获取 `.pmod`，按 [Windows](../../guides/players/README.md) 或 Android 指南导入、启用并重启。
2. Mod 含托管运行时插件，随包自动加载；卡片在选卡界面出现（钻卡）。

## 兼容依据与实测记录

作者声明：适用游戏版本 `0.28`、平台 Windows；包清单核对（2026-09-27 读取工程 `mod.json`）：ID `supergatlingpaper`、版本 `1.0.0`、作者 云漫行、`dependencies` 与 `conflicts` 均为空、`provides` 含 Character / CharacterSprite / Packet 各 1 项。

社区实测：暂无记录。

## 已知问题

未确认；作者未提供已知问题清单。

## 条目更新记录

- 2026-09-27：首次收录 `1.0.0`；资料来源：[作者发布站详情页](https://josnil.github.io/pvz-mods/mod/supergatlingpaper.html)，包清单字段依据包内 `mod.json`。
