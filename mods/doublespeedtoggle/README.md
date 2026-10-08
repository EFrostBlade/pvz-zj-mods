# 三倍加速

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

新增与原加速互斥的速度开关，普通关卡为三倍速度。

> 收录草稿：蓝奏云分享页与密码已核对，实际文件版本尚未独立核实，暂不合并。下列包清单来自另行核对的 GitHub Release 附件。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `doublespeedtoggle` |
| 作者 | apples1949（投稿与发布账号；包内 author 为“本地”） |
| 主分类 | 玩法调整 |
| 标签 | 速度、加速 |
| 当前收录版本 | `1.0.7` |
| 适用游戏版本 | 作者在[作者投稿 #22](https://github.com/EFrostBlade/pvz-zj-mods/issues/22)声明 `0.29.0`；维护者未实测 |
| 平台 | 作者投稿声明：Windows；维护者未实测 |
| 前置依赖 | 作者投稿声明无；实际包 dependencies 为空 |
| 已知冲突 | 作者说明：与 TimeStop 1.0.30 及更早版本同时启用会发生控件重叠；建议配合 TimeStop 1.0.31 及以上 |
| 联机说明 | 未确认；不将投稿中的“无”解释为联机支持 |
| 作者维护状态 | 未确认 |
| 信息核对日期 | 2026-10-08 |

## 内容介绍

以下依据[作者投稿 #22](https://github.com/EFrostBlade/pvz-zj-mods/issues/22)，为作者功能说明：

在战斗界面右上角「加速」复选框的**正下方**新增一个勾选框，勾选后在原有加速的基础上再乘 2，同时自动取消原有的加速（两者互斥，不会叠加）；取消勾选即回到普通速度。

两个勾选框的文本直接显示**实际倍率**：游戏原「加速」框显示它的真实倍率（普通关卡为 1.5x），本框显示自己的真实倍率（普通关卡为 3x）。倍率按关卡实际的 `baseTimeScale` 动态计算 —— 少数关卡（小游戏 13-1~13-6、挑战·钻石 7-2）的 `baseTimeScale` 为 2.0，那里分别显示 3x 与 6x。

本框紧贴「加速」下方、与原框同尺寸（沿用原框的 scale 与布局尺寸，只有文字内容不同）。

作品名说明：本作品双倍于游戏原生加速档，而原生加速在普通关卡实际是 1.5 倍，故最终为 3 倍 —— 名称「三倍加速」与界面显示的 `3x` 口径一致。

## 作者与下载

- 作者主页：[apples1949](https://github.com/apples1949)。
- 原始发布页：[作者 Release](https://github.com/apples1949/pvzhe-DoubleSpeedToggle/releases/tag/upload)。
- 下载入口：[作者网盘（蓝奏云）](https://apples1949.lanzouc.com/b007uuknqd)，作者提供访问密码 `762b`，称统一维护并随版本更新；2026-10-08 已打开分享页并用该密码列出文件；列表中的 ZIP 文件名标示对应投稿版本，但尚未下载核对 ZIP 内实际包，不能确认与下列 GitHub 附件一致。
- 补充核对来源：[GitHub Release 附件 DoubleSpeedToggle.pmod](https://github.com/apples1949/pvzhe-DoubleSpeedToggle/releases/download/upload/DoubleSpeedToggle.pmod)，本轮可公开下载；该地址的附件可能被作者替换，请以包内版本为准。
- 作者反馈入口：[作者投稿 #22](https://github.com/EFrostBlade/pvz-zj-mods/issues/22)。
- 源码：[作者公开工程](https://github.com/apples1949/pvzhe-DoubleSpeedToggle)；本轮未编译或运行。
- 授权说明：未确认；公开源码不等于允许任意再分发。

## 安装与使用

按照 [Windows](../../guides/players/windows.md) 或 [Android](../../guides/players/android.md) 指南导入、启用并重启；平台范围以作者声明为准。

本包含 `Runtime/ModAssembly.dll` 托管插件，入口 `DoubleSpeedToggleEntry`，策略 `optional`；空依赖清单不代表纯资源包或插件未加载时功能完整。游戏内入口和使用方法见上述内容介绍。

## 兼容依据与实测记录

游戏版本、平台和功能依据[作者投稿 #22](https://github.com/EFrostBlade/pvz-zj-mods/issues/22)，不构成维护者实测。

2026-10-08 重新下载并静态核对 GitHub 附件：8,639 B，SHA-256 `86c36029bec37fe6cac73db26c706d20537e8b07ed4210993e7c56594d54b1eb`，与 GitHub 资产摘要一致。实际 ZIP 内 `mod.json` 的 ID `doublespeedtoggle`、版本 `1.0.7`、作者 `本地`；`dependencies` 和 `conflicts` 均为空，清单引用的运行时 DLL 存在。仅查看清单和文件列表，未执行任何包内代码。

以下为作者在投稿中报告的测试，维护者未复现，未独立核验视频或截图内容：

游戏版本：0.29.0
Mod 版本：1.0.0 至 1.0.7
平台：Windows
同时启用的 Mod：HealthCooldownLine、LevelQuickJump、UIExtraButtons、TimeStop、ImitaterClassic、MobileTapFeedback、WhiteCardCategories
步骤与结果：进入战斗，右上角「加速」下方出现显示实际倍率的勾选框；勾选后原「加速」自动取消、速度约为原加速的两倍；再次点击取消回到普通速度；与「时停」不重叠。
测试人：作者
日期：2026-10-01
证据链接：https://www.bilibili.com/video/BV1tmHJ6tEqM/

社区独立实测：暂无记录。

## 已知问题

Release 简介仍写 `v1.0.5`，但实际附件、作者当前 README 和投稿均为 `1.0.7`；待作者同步 Release 文字，当前不将标签或简介当作包版本。

作者说明：与 TimeStop 1.0.30 及更早版本同时启用会发生控件重叠；建议配合 TimeStop 1.0.31 及以上。蓝奏云分享页及密码已核对；实际 ZIP 内包版本、与 GitHub 副本的一致性及后续下载条件仍待核实。

## 条目更新记录

- 2026-10-08：整理 `1.0.7` 收录草稿，依据[作者投稿 #22](https://github.com/EFrostBlade/pvz-zj-mods/issues/22)与 GitHub Release 实际附件；保留作者声明和未实测边界。
