# 时停

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

新增时停按钮，暂停战场运动，同时允许种植、铲除和收集资源。

> 更新草稿：蓝奏云分享页与密码已核对，实际包版本尚未独立核实，暂不合并。当前版本依据 GitHub 实际附件；历史记录保留原版本范围。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `timestop` |
| 作者 | apples1949（投稿与发布账号；实际发布包清单的 author 字段为“本地”） |
| 主分类 | 玩法调整 |
| 标签 | 无 |
| 当前收录版本 | `1.0.31` |
| 适用游戏版本 | 作者在 [Issue #8](https://github.com/EFrostBlade/pvz-zj-mods/issues/8) 对 `1.0.29` 声明 0.29；`1.0.31` 未单独确认，维护者未实测 |
| 平台 | 作者对 `1.0.29` 声明 Windows 与 Android；`1.0.31` 未单独确认，维护者未实测 |
| 前置依赖 | 作者投稿声明无其他 Mod 前置；实际包 dependencies 为空，含托管运行时插件（见安装说明） |
| 已知冲突 | 作者投稿声明无；实际发布包清单 conflicts 为空，不代表任意组合已验证 |
| 联机说明 | 1.0.31 未确认；作者 upload tag 的旧版 README 提示多人模式未适配，见下方版本边界 |
| 作者维护状态 | 未确认 |
| 信息核对日期 | 2026-10-08 |

## 内容介绍

本次 `1.0.31` 更新依据[作者更新 #16](https://github.com/EFrostBlade/pvz-zj-mods/issues/16)，作者说明如下（维护者未实测）：

修复更新以下内容：
1.给时停切换状态增加1秒等待期防止不好切换
2.允许在时停下操作加农炮类食物发射
调整：「时停」的定位基准改为「加速」下方**最底部**的 Mod 控件（避免与其他 Mod 的控件重叠，例如「双倍加速」）；整摞控件间距统一为 6px

以下保留此前版本的功能介绍：

新增时停按钮，暂停战场运动，同时允许种植、铲除和收集资源。 功能说明依据作者投稿和公开工程清单，未进行游戏内验证。

## 作者与下载

- 作者主页：[apples1949](https://github.com/apples1949)；投稿人和原始 Release 发布者为同一账号。
- 原始发布页：[作者 Release](https://github.com/apples1949/pvzhe-TimeStop/releases/tag/upload)；附件更新后需以包内版本为准。
- 下载入口：[作者网盘（蓝奏云）](https://apples1949.lanzouc.com/b007uuknqd)，密码 `762b`，依据[下载修正 #24](https://github.com/EFrostBlade/pvz-zj-mods/issues/24)；作者称统一维护并随版本更新。2026-10-08 已打开分享页并用该密码列出文件；列表中的 ZIP 文件名标示对应投稿版本，但尚未下载核对 ZIP 内实际包，不能确认与下列 GitHub 附件一致。
- 补充核对来源：[GitHub Release 附件](https://github.com/apples1949/pvzhe-TimeStop/releases/download/upload/TimeStop.pmod)，本轮实际包版本 `1.0.31`，公开可下载；不承诺附件不被替换。
- 作者反馈入口：[投稿 Issue #8](https://github.com/EFrostBlade/pvz-zj-mods/issues/8)。
- 源码：[作者公开工程](https://github.com/apples1949/pvzhe-TimeStop/tree/upload)。
- 授权说明：未提供；公开源码不等于允许任意再分发。

## 安装与使用

按照 [Windows 安装指南](../../guides/players/windows.md) 或 [Android 安装指南](../../guides/players/android.md) 导入作者的 `.pmod` 文件。Android 支持仅为作者投稿声明，未作维护者兼容保证。

作者说明：游戏内「加速」按钮下方的「时停」按钮用于切换；未触发为绿色，触发中为红色。

本包含 `Runtime/ModAssembly.dll` 托管插件，清单 `runtimeAssemblyPolicy` 为 `optional`。空 `dependencies` 仅表示未声明其他 Mod 前置，不表示纯资源包，也不保证插件未加载时功能完整。

## 兼容依据与实测记录

2026-10-08 当前包核对：重新下载 GitHub Release 附件，只读查看 ZIP 列表及 `mod.json`：ID `timestop`、版本 `1.0.31`、作者“本地”，`dependencies` / `conflicts` 为空，引用的运行时 DLL 存在。包体 19,175 B，SHA-256 `42083646cc85da9f57cef29c1fdcec6072cac5d0a7166051587210c52075a954`，与 GitHub 资产元数据一致。未执行包内代码，未将空冲突清单视为兼容证明；新版游戏、平台及联机适用范围没有独立实测，历史声明仍按原版本保留。

以下为历史版本核对记录：

作者声明：[Issue #8](https://github.com/EFrostBlade/pvz-zj-mods/issues/8) 的 1.0.29 投稿声明游戏 0.29、Windows 与 Android，依赖和冲突填写“无”；没有提供可归为社区实测的步骤、设备、组合及证据。联机支持未确认。

资料核对：2026-09-30 独立读取 [upload tag 的公开 mod.json](https://github.com/apples1949/pvzhe-TimeStop/blob/upload/mod.json)，确认 ID `timestop`、名称、版本 `1.0.29`、author `本地`、`dependencies: []`、`conflicts: []`。同日独立下载对应 Release 附件，只读读取 ZIP 内的 `mod.json`；上述身份、版本、依赖和冲突字段与工程清单一致。

Release 元数据：附件 `TimeStop.pmod`，17291 字节，GitHub 提供的摘要 `sha256:b44f319ab4e37c4bce1ff16f57d00817c1a385f8a6fe6e26a7760f0f7a62c929`。下载附件的实际 SHA-256 与 GitHub 提供的摘要一致。仅进行了 ZIP 文件列表及文本清单静态检查，没有加载 DLL、安装或运行 Mod；这不构成运行安全或实机兼容保证。

社区实测：暂无记录。

## 已知问题

作者在[三倍加速投稿 #22](https://github.com/EFrostBlade/pvz-zj-mods/issues/22)说明 TimeStop `1.0.31` 起可自动排在该控件下方，更早版本可能重叠；此为作者说明，未独立复测。

作者 [upload tag 的 README](https://github.com/apples1949/pvzhe-TimeStop/blob/upload/README.md) 在“已知风险 / 待实测项”提示多人模式未适配、未考虑联机的 Paused 语义。该说明标题仍为 1.0.6，因此保留为旧版作者风险提示，不据此认定 1.0.29 已修复或已完成联机实测。1.0.29 与 1.0.31 联机状态均未确认。空冲突清单不代表与已有 Mod 的组合已经测试。

## 条目更新记录

- 2026-10-08：整理 `1.0.31` 更新草稿，来源为[作者更新 #16](https://github.com/EFrostBlade/pvz-zj-mods/issues/16)、[下载修正 #24](https://github.com/EFrostBlade/pvz-zj-mods/issues/24)及当前 GitHub 发布包；下载入口核对尚未完成。

- 2026-09-30：收录 1.0.29，来源为 [作者投稿 #8](https://github.com/EFrostBlade/pvz-zj-mods/issues/8)、[原始 Release](https://github.com/apples1949/pvzhe-TimeStop/releases/tag/upload) 和公开工程清单；补齐实际发布包清单及摘要核对，保留作者声明与未实测边界。
