# 点击反馈与自动拾取开关

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

为关卡入口增加按压反馈，并提供阳光与金币自动拾取开关。

> 核对范围：GitHub 实际包已静态核验；网盘包对应关系依据作者补充声明，维护者未下载网盘 ZIP。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `mobiletapfeedback` |
| 作者 | apples1949（投稿与发布账号；包内 author 为“本地”） |
| 主分类 | 综合扩展 |
| 标签 | 无 |
| 当前收录版本 | `1.0.0` |
| 适用游戏版本 | 作者在[作者投稿 #18](https://github.com/EFrostBlade/pvz-zj-mods/issues/18)声明 `0.29`；维护者未实测 |
| 平台 | 作者投稿声明：Windows 与 Android；维护者未实测 |
| 前置依赖 | 作者投稿声明无；实际包 dependencies 为空 |
| 已知冲突 | 作者投稿声明无；空 conflicts 清单不代表任意组合已验证 |
| 联机说明 | 未确认；不将投稿中的“无”解释为联机支持 |
| 作者维护状态 | 未确认 |
| 信息核对日期 | 2026-10-08 |

## 内容介绍

以下依据[作者投稿 #18](https://github.com/EFrostBlade/pvz-zj-mods/issues/18)，为作者功能说明：

1.给游戏关卡入口增加点击反馈：窗口变深色以及窗口变小 参考墓碑点击状态
2.在图鉴-道具图鉴中增加自动拾取开关 需要注意 选择关闭后 商店状态也会变成未购买状态 是正常情况

作者于 2026-10-08 新增的 [README](https://github.com/apples1949/pvzhe-MobileTapFeedback/blob/f0d4a52319f2bf7e439d28abe191c86f8e1d32cd/README.md) 说明：阳光与金币有独立自动拾取开关，设置写入存档并同步场上已有物件；本作由 MobileUXFixes 拆分，两者分别安装。此为作者说明，未构成维护者实测或新增兼容证明。

## 作者与下载

- 作者主页：[apples1949](https://github.com/apples1949)。
- 原始发布页：[作者 Release](https://github.com/apples1949/pvzhe-MobileTapFeedback/releases/tag/upload)。
- 下载入口：[作者网盘（蓝奏云）](https://apples1949.lanzouc.com/b007uuknqd)，密码 `762b`；[作者补充说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/25#issuecomment-6060160375)称无需登录、长期有效、随更新覆盖同名文件，并提供包内 `.pmod` 大小及 SHA-256，与本页 GitHub 核验记录一致。此为作者提供的副本对应关系；维护者未取得网盘 ZIP，不等于独立下载核验。
- 补充核对来源：[GitHub Release 附件 MobileTapFeedback.pmod](https://github.com/apples1949/pvzhe-MobileTapFeedback/releases/download/upload/MobileTapFeedback.pmod)，本轮可公开下载；该地址的附件可能被作者替换，请以包内版本为准。
- 作者反馈入口：[作者投稿 #18](https://github.com/EFrostBlade/pvz-zj-mods/issues/18)。
- 源码：[作者公开工程](https://github.com/apples1949/pvzhe-MobileTapFeedback)；本轮未编译或运行。
- 授权说明：未确认；公开源码不等于允许任意再分发。

## 安装与使用

按照 [Windows](../../guides/players/windows.md) 或 [Android](../../guides/players/android.md) 指南导入、启用并重启；平台范围以作者声明为准。

本包含 `Runtime/ModAssembly.dll` 托管插件，入口 `MobileTapFeedbackEntry`，策略 `optional`；空依赖清单不代表纯资源包或插件未加载时功能完整。游戏内入口和使用方法见上述内容介绍。

## 兼容依据与实测记录

游戏版本、平台和功能依据[作者投稿 #18](https://github.com/EFrostBlade/pvz-zj-mods/issues/18)，不构成维护者实测。

2026-10-08 重新下载并静态核对 GitHub 附件：7,937 B，SHA-256 `1ead59cc39a05e8b6f2a828cb2a9dd194d33e67c365f4e0c60a3163f91fb6a59`，与 GitHub 资产摘要一致。实际 ZIP 内 `mod.json` 的 ID `mobiletapfeedback`、版本 `1.0.0`、作者 `本地`；`dependencies` 和 `conflicts` 均为空，清单引用的运行时 DLL 存在。仅查看清单和文件列表，未执行任何包内代码。

作者未提供实测记录。

社区独立实测：暂无记录。

## 已知问题

作者投稿声明无；空 conflicts 清单不代表任意组合已验证。蓝奏云对应关系与访问条件已有作者补充声明；维护者未独立下载核验该副本。

## 条目更新记录

- 2026-10-08：整理 `1.0.0` 收录资料，依据[作者投稿 #18](https://github.com/EFrostBlade/pvz-zj-mods/issues/18)与 GitHub Release 实际附件；保留作者声明和未实测边界。
