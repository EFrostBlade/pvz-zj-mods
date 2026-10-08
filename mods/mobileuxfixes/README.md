# 手机端操作修复

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

滑动选卡时撤销误选，并改善再次点击卡牌取消选择。

> 收录草稿：蓝奏云分享页与密码已核对，实际文件版本尚未独立核实，暂不合并。下列包清单来自另行核对的 GitHub Release 附件。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `mobileuxfixes` |
| 作者 | apples1949（投稿与发布账号；包内 author 为“本地”） |
| 主分类 | 综合扩展 |
| 标签 | 无 |
| 当前收录版本 | `1.2.0` |
| 适用游戏版本 | 作者在[作者投稿 #17](https://github.com/EFrostBlade/pvz-zj-mods/issues/17)声明 `0.29`；维护者未实测 |
| 平台 | 作者投稿声明：Android；维护者未实测 |
| 前置依赖 | 作者投稿声明无；实际包 dependencies 为空 |
| 已知冲突 | 作者投稿声明无；空 conflicts 清单不代表任意组合已验证 |
| 联机说明 | 未确认；不将投稿中的“无”解释为联机支持 |
| 作者维护状态 | 未确认 |
| 信息核对日期 | 2026-10-08 |

## 内容介绍

以下依据[作者投稿 #17](https://github.com/EFrostBlade/pvz-zj-mods/issues/17)，为作者功能说明：

1.在选卡界面中 手机端不容易点击滚动条上下滑动 从而直接点击任意卡牌滑动 此mod修复在点击卡牌时同时滑动后 自动取消选择此卡牌
2.在游戏界面中 不容易取消选择卡牌 此mod优化这一情况 尽可能的能正常双击取消选择卡牌
见[视频](https://www.bilibili.com/video/BV1RAaZ6MEoY)

## 作者与下载

- 作者主页：[apples1949](https://github.com/apples1949)。
- 原始发布页：[作者 Release](https://github.com/apples1949/pvzhe-MobileUXFixes/releases/tag/upload)。
- 下载入口：[作者网盘（蓝奏云）](https://apples1949.lanzouc.com/b007uuknqd)，作者提供访问密码 `762b`，称统一维护并随版本更新；2026-10-08 已打开分享页并用该密码列出文件；列表中的 ZIP 文件名标示对应投稿版本，但尚未下载核对 ZIP 内实际包，不能确认与下列 GitHub 附件一致。
- 补充核对来源：[GitHub Release 附件 MobileUXFixes.pmod](https://github.com/apples1949/pvzhe-MobileUXFixes/releases/download/upload/MobileUXFixes.pmod)，本轮可公开下载；该地址的附件可能被作者替换，请以包内版本为准。
- 作者反馈入口：[作者投稿 #17](https://github.com/EFrostBlade/pvz-zj-mods/issues/17)。
- 源码：[作者公开工程](https://github.com/apples1949/pvzhe-MobileUXFixes)；本轮未编译或运行。
- 授权说明：未确认；公开源码不等于允许任意再分发。

## 安装与使用

按照 [Windows](../../guides/players/windows.md) 或 [Android](../../guides/players/android.md) 指南导入、启用并重启；平台范围以作者声明为准。

本包含 `Runtime/ModAssembly.dll` 托管插件，入口 `MobileUXFixesEntry`，策略 `optional`；空依赖清单不代表纯资源包或插件未加载时功能完整。游戏内入口和使用方法见上述内容介绍。

## 兼容依据与实测记录

游戏版本、平台和功能依据[作者投稿 #17](https://github.com/EFrostBlade/pvz-zj-mods/issues/17)，不构成维护者实测。

2026-10-08 重新下载并静态核对 GitHub 附件：7,933 B，SHA-256 `9febf114b118fc5a420bd870f3f9e842752bb859b07d6c4d8e7026e9d3cfcf40`，与 GitHub 资产摘要一致。实际 ZIP 内 `mod.json` 的 ID `mobileuxfixes`、版本 `1.2.0`、作者 `本地`；`dependencies` 和 `conflicts` 均为空，清单引用的运行时 DLL 存在。仅查看清单和文件列表，未执行任何包内代码。

作者未提供实测记录。

社区独立实测：暂无记录。

## 已知问题

作者投稿声明无；空 conflicts 清单不代表任意组合已验证。蓝奏云分享页及密码已核对；实际 ZIP 内包版本、与 GitHub 副本的一致性及后续下载条件仍待核实。

## 条目更新记录

- 2026-10-08：整理 `1.2.0` 收录草稿，依据[作者投稿 #17](https://github.com/EFrostBlade/pvz-zj-mods/issues/17)与 GitHub Release 实际附件；保留作者声明和未实测边界。
