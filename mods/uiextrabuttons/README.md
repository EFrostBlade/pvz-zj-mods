# 图鉴商店快捷按钮

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

在横版 UI 的选卡阶段补充商店与图鉴入口。

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
- 下载入口：[作者网盘（蓝奏云）](https://apples1949.lanzouc.com/b007uuknqd)，密码 `762b`；[作者补充说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/25#issuecomment-6060160375)称无需登录、长期有效、随更新覆盖同名文件，并提供包内 `.pmod` 大小及 SHA-256，与本页 GitHub 核验记录一致。此为作者提供的副本对应关系；维护者未取得网盘 ZIP，不等于独立下载核验。
- 补充核对来源：[GitHub Release 附件 UIExtraButtons.pmod](https://github.com/apples1949/pvzhe-UIExtraButtons/releases/download/upload/UIExtraButtons.pmod)，本轮可公开下载；该地址的附件可能被作者替换，请以包内版本为准。
- 作者反馈入口：[作者投稿 #20](https://github.com/EFrostBlade/pvz-zj-mods/issues/20)。
- 源码：[作者公开工程](https://github.com/apples1949/pvzhe-UIExtraButtons)；本轮未编译或运行。
- 授权说明：未确认；公开源码不等于允许任意再分发。

## 安装与使用

按照 [Windows](../../guides/players/windows.md) 或 [Android](../../guides/players/android.md) 指南导入、启用并重启；平台范围以作者声明为准。

本包含 `Runtime/ModAssembly.dll` 托管插件，入口 `UIExtraButtonsEntry`，策略 `optional`；空依赖清单不代表纯资源包或插件未加载时功能完整。游戏内入口和使用方法见上述内容介绍。

## 兼容依据与实测记录

游戏版本、平台和功能依据[作者投稿 #20](https://github.com/EFrostBlade/pvz-zj-mods/issues/20)，不构成维护者实测。

2026-10-08 重新下载并静态核对 GitHub 附件：8,885 B，SHA-256 `eeffdd2e6253a589eed5cd5a46da35b98c2caa19771333a593a2e96db0ae66ec`，与 GitHub 资产摘要一致。实际 ZIP 内 `mod.json` 的 ID `uiextrabuttons`、版本 `1.0.3`、作者 `本地`；`dependencies` 和 `conflicts` 均为空，清单引用的运行时 DLL 存在。ZIP 仅含 `mod.json`（994 B，SHA-256 `d371c0a94004f2e2c80063036b9d761ffa73495f2f91f016a4eb603486468777`）和 `Runtime/ModAssembly.dll`（16,896 B，SHA-256 `c8d6c0e846ec645f123619f9140472d7599aa9dcc28036d374aeb26469caa107`）；无路径越界、符号链接或重复文件名。仅读取清单和文件列表，未执行包内代码，不构成运行安全或兼容保证。

以下为作者在投稿中报告的测试，维护者未复现，未独立核验视频或截图内容：

游戏版本：0.29.0
Mod 版本：1.0.0 / 1.0.1 / 1.0.2 / 1.0.3
平台：Windows 与 Android
同时启用的 Mod：HealthCooldownLine、LevelQuickJump、TimeStop、ImitaterClassic、MobileTapFeedback、WhiteCardCategories
步骤与结果：横版 UI 进入战斗选卡界面，右上角出现并排两个按钮，点击分别打开商店与图鉴；选卡结束后按钮隐藏；切回竖版后本作品按钮隐藏、游戏自带按钮显示。
测试人：作者
日期：2026-10-01
证据链接：[作者投稿中的演示截图及测试说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/20)

作者在[布局澄清](https://github.com/EFrostBlade/pvz-zj-mods/issues/20#issuecomment-6063767627)中确认 1.0.3 实际为右上角横向并排（左“商店”、右“查看图鉴”）；右下角竖排是 1.0.0 遗留描述。已核对[README 修正提交](https://github.com/apples1949/pvzhe-UIExtraButtons/commit/4d6dc4c849140d8099fb46553c114a7aedf5b2fe)，其概述现与投稿及实际包清单一致。该提交仅修改文档，当前附件摘要未变。README 仍保留旧版诊断示例与开发侧未完成实机验证的说明；新版测试按上述作者投稿记录，不作为维护者实测。

社区独立实测：暂无记录。

## 已知问题

未确认。蓝奏云对应关系与访问条件已有作者补充声明；维护者未独立下载核验该副本。

## 条目更新记录

- 2026-10-08：首次收录 `1.0.3`，依据[作者投稿 #20](https://github.com/EFrostBlade/pvz-zj-mods/issues/20)、[作者布局澄清](https://github.com/EFrostBlade/pvz-zj-mods/issues/20#issuecomment-6063767627)与重新下载的 GitHub Release 实际附件；保留作者声明和未实测边界。
