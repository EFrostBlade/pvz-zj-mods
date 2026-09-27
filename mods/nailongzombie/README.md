# 奶龙僵尸

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

一只会大笑控场的自制僵尸：保留普通僵尸的移动 / 啃食 / 受击 / 死亡全部基础行为，出场后每 10 秒大笑一次——切到大笑形象并播放奶龙笑声，一边笑一边照常前进；同时全场植物被笑得僵直 3 秒、完全无法发射子弹。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `nailongzombie` |
| 作者 | 云漫行 |
| 主分类 | 角色与卡牌 |
| 标签 | 新僵尸、控场、程序化生成素材 |
| 当前收录版本 | `1.0.0` |
| 适用游戏版本 | 作者声明：`0.28`（开发与实机演示基于该版本）；尚未在 `0.29.0` 验证 |
| 平台 | 作者声明：Windows；Android 未确认 |
| 前置依赖 | 包清单 `dependencies` 为空；作者声明：无 |
| 已知冲突 | 包清单 `conflicts` 为空；作者声明：无。注：目录已收录的 [cd显示（血条·装填倒计时）](../healthcooldowndisplay/README.md) 作者声明其与各类自定义僵尸类 Mod 存在冲突，同装前请向双方作者确认 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 维护中（作者声明，2026-09-27） |
| 信息核对日期 | 2026-09-27 |

## 内容介绍

- 保留普通僵尸的全部基础行为：移动、啃食、受击、死亡（含水中死亡等动画状态）。
- **大笑控场**：出场后每 10 秒大笑一次，切到大笑形象并播放奶龙笑声，大笑期间照常前进；全场植物被笑得僵直 3 秒、无法发射子弹。
- 形象由作者提供的三份素材（奶龙站立图、奶龙大笑图、奶龙笑声音频）经离线程序化扩帧生成，无第三方美术依赖；含托管运行时插件（`Runtime/ModAssembly.dll`，随包分发）。
- 演示视频：[一句话做奶龙？杂交版mod迎来大变！（bilibili）](https://www.bilibili.com/video/BV1hthU6TEjF/)。

## 作者与下载

- 作者主页：[云漫行（bilibili 视频主页）](https://www.bilibili.com/video/BV1hthU6TEjF/)；身份可经视频简介引用的作者技能仓库 [josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills) 交叉核对。
- 原始发布页：[josnil 的杂交版 Mod 存放站](https://josnil.github.io/pvz-mods/)。
- 下载入口：[夸克网盘 Mods.zip](https://pan.quark.cn/s/ca8a57a330f8?pwd=1Us3)，提取码 `1Us3`（需安装夸克 App 或使用网页端登录；压缩包内含本 Mod，`Resources/Characters/Zombies/ZombieNaiLong/`，Mod ID `nailongzombie`）。
- 作者反馈入口：B 站视频评论区（见上）。
- 源码：[josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills)（`tools/zombie/` 目录含生成器、皮肤管线、托管插件源码与离线闸门）。
- 授权说明：未提供。

## 安装与使用

1. 从上述下载入口获取 `.pmod`，按 [Windows](../../guides/players/README.md) 或 Android 指南导入、启用并重启。
2. Mod 含托管运行时插件，随包自动加载；僵尸随普通僵尸类卡池 / 场景生成出现。
3. 大笑为自动触发，无需手动操作；具体效果见演示视频。

## 兼容依据与实测记录

作者声明：适用游戏版本 `0.28`、平台 Windows；功能以 [B 站演示视频](https://www.bilibili.com/video/BV1hthU6TEjF/)（2026-09-25 发布）为准；未提供联机或组合兼容实测记录。

社区实测：暂无记录。

## 已知问题

未确认；作者未提供已知问题清单。

## 条目更新记录

- 2026-09-27：首次收录 `1.0.0`；资料来源：作者 B 站发布页与投稿信息，包清单字段依据包内 `mod.json`（ID `nailongzombie`、版本 `1.0.0`、作者 云漫行、依赖与冲突均为空）。
