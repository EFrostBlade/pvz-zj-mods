# 墓碑直达

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

记忆各类关卡上次选择的章节，返回时自动定位。

> 草稿资料：GitHub 实际包已静态核验；网盘包对应关系依据作者补充声明，维护者未下载网盘 ZIP。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `levelquickjump` |
| 作者 | apples1949（投稿与发布账号；包内 author 为“本地”） |
| 主分类 | 关卡与地图 |
| 标签 | 章节记忆、快捷入口 |
| 当前收录版本 | `1.4.0` |
| 适用游戏版本 | 作者在[作者投稿 #21](https://github.com/EFrostBlade/pvz-zj-mods/issues/21)声明 `0.29.0`；维护者未实测 |
| 平台 | 作者投稿声明：Windows 与 Android；维护者未实测 |
| 前置依赖 | 作者投稿声明无；实际包 dependencies 为空 |
| 已知冲突 | 未确认 |
| 联机说明 | 未确认；不将投稿中的“无”解释为联机支持 |
| 作者维护状态 | 未确认 |
| 信息核对日期 | 2026-10-08 |

## 内容介绍

以下依据[作者投稿 #21](https://github.com/EFrostBlade/pvz-zj-mods/issues/21)，为作者功能说明：

点主界面墓碑（冒险 / 挑战 / 生存 / 解谜 / 小游戏 / 我是僵尸 / 杂交乐园）进入关卡选择时，停在章节选择页，并把上次打开的那个章节自动滚到正中（居中项自动放大高亮，两旁缩小变淡），不必手动滑动，直接点该章节即可进入它的关卡页。

按大类分别记忆上次的章节，记忆写进游戏存档，重启游戏后仍然有效。

## 作者与下载

- 作者主页：[apples1949](https://github.com/apples1949)。
- 原始发布页：[作者 Release](https://github.com/apples1949/pvzhe-LevelQuickJump/releases/tag/upload)。
- 下载入口：[作者网盘（蓝奏云）](https://apples1949.lanzouc.com/b007uuknqd)，密码 `762b`；[作者补充说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/25#issuecomment-6060160375)称无需登录、长期有效、随更新覆盖同名文件，并提供包内 `.pmod` 大小及 SHA-256，与本页 GitHub 核验记录一致。此为作者提供的副本对应关系；维护者未取得网盘 ZIP，不等于独立下载核验。
- 补充核对来源：[GitHub Release 附件 LevelQuickJump.pmod](https://github.com/apples1949/pvzhe-LevelQuickJump/releases/download/upload/LevelQuickJump.pmod)，本轮可公开下载；该地址的附件可能被作者替换，请以包内版本为准。
- 作者反馈入口：[作者投稿 #21](https://github.com/EFrostBlade/pvz-zj-mods/issues/21)。
- 源码：[作者公开工程](https://github.com/apples1949/pvzhe-LevelQuickJump)；本轮未编译或运行。
- 授权说明：未确认；公开源码不等于允许任意再分发。

## 安装与使用

按照 [Windows](../../guides/players/windows.md) 或 [Android](../../guides/players/android.md) 指南导入、启用并重启；平台范围以作者声明为准。

本包含 `Runtime/ModAssembly.dll` 托管插件，入口 `LevelQuickJumpEntry`，策略 `optional`；空依赖清单不代表纯资源包或插件未加载时功能完整。游戏内入口和使用方法见上述内容介绍。

## 兼容依据与实测记录

游戏版本、平台和功能依据[作者投稿 #21](https://github.com/EFrostBlade/pvz-zj-mods/issues/21)，不构成维护者实测。

2026-10-08 重新下载并静态核对 GitHub 附件：11,461 B，SHA-256 `94814c4662c8b9ca19cc815b92bf9e5bd4034d00230e15525b11a12756c40711`，与 GitHub 资产摘要一致。实际 ZIP 内 `mod.json` 的 ID `levelquickjump`、版本 `1.4.0`、作者 `本地`；`dependencies` 和 `conflicts` 均为空，清单引用的运行时 DLL 存在。仅查看清单和文件列表，未执行任何包内代码。

以下为作者在投稿中报告的测试，维护者未复现，未独立核验视频或截图内容：

游戏版本：0.29.0
Mod 版本：1.0.0 至 1.4.0
平台：Windows 与 Android
同时启用的 Mod：HealthCooldownLine、UIExtraButtons、TimeStop、ImitaterClassic、MobileTapFeedback、WhiteCardCategories
步骤与结果：进入某一章节的关卡后返回主界面，再点对应墓碑，章节选择页停在该大类并自动定位到上次的章节（居中放大高亮），可自由左右滑动切换到其他章节；重启游戏后记忆仍保留。
测试人：作者
日期：2026-10-01
证据链接：https://www.bilibili.com/video/BV1Zxa66bE9f/

作者于 2026-10-08 将 [README](https://github.com/apples1949/pvzhe-LevelQuickJump/blob/b8ea92fe3e955eae3bbbd81e9ca2283125f287c2/README.md) 版本号同步为 `1.4.0`，补充章节定位及状态泄漏修复历史；其中仍保留开发侧未完成实机验证的旧说明。本条目将实际包清单与投稿中的作者测试报告分开记录，不将旧说明改写为新版实测。

社区独立实测：暂无记录。

## 已知问题

未确认。蓝奏云对应关系与访问条件已有作者补充声明；维护者未独立下载核验该副本。

## 条目更新记录

- 2026-10-08：整理 `1.4.0` 收录草稿，依据[作者投稿 #21](https://github.com/EFrostBlade/pvz-zj-mods/issues/21)与 GitHub Release 实际附件；保留作者声明和未实测边界。
