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
| 前置依赖 | 包清单 `dependencies` 为空；作者声明：无 |
| 已知冲突 | 包清单 `conflicts` 为空；作者声明：无。注：目录已收录的 [cd显示（血条·装填倒计时）](../healthcooldowndisplay/README.md) 作者声明其与各类自定义僵尸类 Mod 存在冲突，同装前请向双方作者确认 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 维护中（作者声明，2026-09-27） |
| 信息核对日期 | 2026-09-27 |

## 内容介绍

**女王（ZombieSunFlowerQueen）**：

- 6 颗追踪火球同帧发射（每 1.5 秒一轮，`fireMethodFlags = 32`，弹速为负朝向在场方向）。
- 3×3 灼烧光环：每 0.5 秒对范围内敌方造成 25 点灼烧；光环对全阵营（含自身）施加 FireHit——免疫减速与冻结。
- 每 10 秒生产 250 脑光；滑步移动；召唤火焰向日葵舞者僵尸。

**舞者（ZombieFireSunFlowerBackup）**：火焰舞者身体 + 同款女王头，免疫减速与冻结，点燃子弹。

数据以[作者发布站详情页](https://josnil.github.io/pvz-mods/mod/sunflowerqueenzombie.html)的属性表为准（女王血量 3850 / 啃食 300 / 阳光 350 / 冷却 15s；舞者血量 880 / 阳光 75）。

## 作者与下载

- 作者主页：[云漫行（bilibili）](https://www.bilibili.com/video/BV1hthU6TEjF/)；身份可经视频简介引用的作者技能仓库 [josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills) 交叉核对。
- 原始发布页：[josnil 的杂交版 Mod 存放站 · 本作品详情页](https://josnil.github.io/pvz-mods/mod/sunflowerqueenzombie.html)。
- 下载入口：[夸克网盘（本 Mod 独立分享）](https://pan.quark.cn/s/05b35a3625e2)（免提取码），或 [GitHub Release](https://github.com/josnil/pvz-mods/releases/latest/download/sunflowerqueenzombie.pmod)（`向日葵女王僵尸.pmod`）。
- 作者反馈入口：B 站视频评论区（见上）。
- 源码：[josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills)（`tools/zombie/build_zombie_sunflower_queen.py` 生成器与 `tools/zombie/runtime_src_zombie_sunflower_queen/` 插件源码）。
- 授权说明：未提供。

## 安装与使用

1. 从上述下载入口获取 `.pmod`，按 [Windows](../../guides/players/README.md) 或 Android 指南导入、启用并重启。
2. Mod 含托管运行时插件，随包自动加载；女王卡片在选卡界面出现，伴舞由女王技能召唤。
3. 头部为独立渲染的换头结构（影子吃定位、普通容器打断父代画），游戏内效果见作者演示。

## 兼容依据与实测记录

作者声明：适用游戏版本 `0.28`、平台 Windows；包清单核对（2026-09-27 读取工程 `mod.json`）：ID `sunflowerqueenzombie`、版本 `1.0.0`、作者 云漫行、`dependencies` 与 `conflicts` 均为空、`provides` 含 Character / CharacterSprite / Packet 各 2 项（双角色）。

社区实测：暂无记录。

## 已知问题

未确认；作者未提供已知问题清单。

## 条目更新记录

- 2026-09-27：首次收录 `1.0.0`；资料来源：[作者发布站详情页](https://josnil.github.io/pvz-mods/mod/sunflowerqueenzombie.html)，包清单字段依据包内 `mod.json`。
