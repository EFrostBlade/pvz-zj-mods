# 图鉴商店快捷按钮

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

在横版 UI 的选卡阶段补充商店与图鉴入口。

> 收录草稿：蓝奏云分享页与密码已核对，实际文件版本尚未独立核实，暂不合并。下列包清单来自另行核对的 GitHub Release 附件。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `uiextrabuttons` |
| 作者 | apples1949（投稿与发布账号；包内 author 为“本地”） |
| 主分类 | 工具与前置 |
| 标签 | 选卡界面、快捷入口 |
| 当前收录版本 | `1.0.3` |
| 适用游戏版本 | 作者在[作者投稿 #20](https://github.com/EFrostBlade/pvz-zj-mods/issues/20)声明 `0.29.0`；维护者未实测 |
| 平台 | 作者投稿声明：Windows 与 Android；维护者未实测 |
| 前置依赖 | 作者投稿声明无；实际包 dependencies 为空 |
| 已知冲突 | 未确认 |
| 联机说明 | 未确认；不将投稿中的“无”解释为联机支持 |
| 作者维护状态 | 未确认 |
| 信息核对日期 | 2026-10-08 |

## 内容介绍

以下依据[作者投稿 #20](https://github.com/EFrostBlade/pvz-zj-mods/issues/20)，为作者功能说明：

在选卡界面右上角横向并排新增「商店」和「查看图鉴」两个按钮，外观与游戏自带按钮一致（直接复制游戏自带的按钮节点，九宫格贴图、字体、字号全部继承），点击分别打开商店页与图鉴页。

游戏在横版 UI（手机预设 MobilePreset）下会把自带的商店/图鉴按钮直接隐藏，导致选卡界面没有这两个入口，本作品就是为这个场景补入口。按钮只在横版 UI 下出现、且只在选卡阶段显示；切回竖版后游戏自带按钮会自己显示，本作品会自动隐藏以免出现重复的两排按钮。

## 作者与下载

- 作者主页：[apples1949](https://github.com/apples1949)。
- 原始发布页：[作者 Release](https://github.com/apples1949/pvzhe-UIExtraButtons/releases/tag/upload)。
- 下载入口：[作者网盘（蓝奏云）](https://apples1949.lanzouc.com/b007uuknqd)，作者提供访问密码 `762b`，称统一维护并随版本更新；2026-10-08 已打开分享页并用该密码列出文件；列表中的 ZIP 文件名标示对应投稿版本，但尚未下载核对 ZIP 内实际包，不能确认与下列 GitHub 附件一致。
- 补充核对来源：[GitHub Release 附件 UIExtraButtons.pmod](https://github.com/apples1949/pvzhe-UIExtraButtons/releases/download/upload/UIExtraButtons.pmod)，本轮可公开下载；该地址的附件可能被作者替换，请以包内版本为准。
- 作者反馈入口：[作者投稿 #20](https://github.com/EFrostBlade/pvz-zj-mods/issues/20)。
- 源码：[作者公开工程](https://github.com/apples1949/pvzhe-UIExtraButtons)；本轮未编译或运行。
- 授权说明：未确认；公开源码不等于允许任意再分发。

## 安装与使用

按照 [Windows](../../guides/players/windows.md) 或 [Android](../../guides/players/android.md) 指南导入、启用并重启；平台范围以作者声明为准。

本包含 `Runtime/ModAssembly.dll` 托管插件，入口 `UIExtraButtonsEntry`，策略 `optional`；空依赖清单不代表纯资源包或插件未加载时功能完整。游戏内入口和使用方法见上述内容介绍。

## 兼容依据与实测记录

游戏版本、平台和功能依据[作者投稿 #20](https://github.com/EFrostBlade/pvz-zj-mods/issues/20)，不构成维护者实测。

2026-10-08 重新下载并静态核对 GitHub 附件：8,885 B，SHA-256 `eeffdd2e6253a589eed5cd5a46da35b98c2caa19771333a593a2e96db0ae66ec`，与 GitHub 资产摘要一致。实际 ZIP 内 `mod.json` 的 ID `uiextrabuttons`、版本 `1.0.3`、作者 `本地`；`dependencies` 和 `conflicts` 均为空，清单引用的运行时 DLL 存在。仅查看清单和文件列表，未执行任何包内代码。

以下为作者在投稿中报告的测试，维护者未复现，未独立核验视频或截图内容：

游戏版本：0.29.0
Mod 版本：1.0.0 / 1.0.1 / 1.0.2 / 1.0.3
平台：Windows 与 Android
同时启用的 Mod：HealthCooldownLine、LevelQuickJump、TimeStop、ImitaterClassic、MobileTapFeedback、WhiteCardCategories
步骤与结果：横版 UI 进入战斗选卡界面，右上角出现并排两个按钮，点击分别打开商店与图鉴；选卡结束后按钮隐藏；切回竖版后本作品按钮隐藏、游戏自带按钮显示。
测试人：作者
日期：2026-10-01
证据链接：见上方演示截图

作者仓库 README 还保留旧版编号与开发侧未完成实机验证的说明；本条目将新版实际包清单与投稿中的作者测试报告分开记录，不将旧说明改写为新版实测。

社区独立实测：暂无记录。

## 已知问题

未确认。蓝奏云分享页及密码已核对；实际 ZIP 内包版本、与 GitHub 副本的一致性及后续下载条件仍待核实。

## 条目更新记录

- 2026-10-08：整理 `1.0.3` 收录草稿，依据[作者投稿 #20](https://github.com/EFrostBlade/pvz-zj-mods/issues/20)与 GitHub Release 实际附件；保留作者声明和未实测边界。
