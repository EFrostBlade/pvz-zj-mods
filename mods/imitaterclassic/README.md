# 原版模仿者（经典模仿者）

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

新增经典模仿者卡，复制上一次选择的植物种子包；随机取卡场景下随机变成彩卡植物。

> 草稿资料：GitHub 实际包已静态核验；网盘包对应关系依据作者补充声明，维护者未下载网盘 ZIP。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `imitaterclassic` |
| 作者 | apples1949（投稿与发布账号；实际发布包清单的 author 字段为“本地”） |
| 主分类 | 角色与卡牌 |
| 标签 | 无 |
| 当前收录版本 | `1.5.0` |
| 适用游戏版本 | 作者对 `1.5.0` 声明 `0.29.0`；见[作者补充说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/25#issuecomment-6060160375)，维护者未实测 |
| 平台 | 作者对 `1.5.0` 报告 Windows 与 Android 均实测可用；维护者未复现 |
| 前置依赖 | 作者投稿声明无其他 Mod 前置；实际包 dependencies 为空，含托管运行时插件（见安装说明） |
| 已知冲突 | 作者投稿声明无；实际发布包清单 conflicts 为空，不代表任意组合已验证 |
| 联机说明 | 未确认；投稿中的“无”未明确说明支持情况 |
| 作者维护状态 | 未确认 |
| 信息核对日期 | 2026-10-08 |

## 内容介绍

本次 `1.5.0` 更新依据[作者更新 #15](https://github.com/EFrostBlade/pvz-zj-mods/issues/15)，作者说明如下（维护者未实测）：

修复bug：
1.不显示模仿者选择动画 植物为原色 已正确显示动画 植物为灰白色
2.修复模仿的植物无法跟随更改阳光
3.无法在创建预选卡自制关卡时选择改mod植物
4.修复预选自制关卡预选多个模仿者时错误模仿植物
变动：将植物阶级改成彩卡

以下保留此前版本的功能介绍：

新增经典模仿者卡，复制上一次选择的植物种子包；随机取卡场景下随机变成彩卡植物。 功能说明依据作者投稿和公开工程清单，未进行游戏内验证。

## 作者与下载

- 作者主页：[apples1949](https://github.com/apples1949)；投稿人和原始 Release 发布者为同一账号。
- 原始发布页：[作者 Release](https://github.com/apples1949/pvzhe-ImitaterClassic/releases/tag/upload)；附件更新后需以包内版本为准。
- 下载入口：[作者网盘（蓝奏云）](https://apples1949.lanzouc.com/b007uuknqd)，密码 `762b`；[作者补充说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/25#issuecomment-6060160375)称无需登录、长期有效、随更新覆盖同名文件，并提供包内 `.pmod` 大小及 SHA-256，与本页 GitHub 核验记录一致。此为作者提供的副本对应关系；维护者未取得网盘 ZIP，不等于独立下载核验。
- 补充核对来源：[GitHub Release 附件](https://github.com/apples1949/pvzhe-ImitaterClassic/releases/download/upload/ImitaterClassic.pmod)，本轮实际包版本 `1.5.0`，公开可下载；不承诺附件不被替换。
- 作者反馈入口：[投稿 Issue #7](https://github.com/EFrostBlade/pvz-zj-mods/issues/7)。
- 源码：[作者公开工程](https://github.com/apples1949/pvzhe-ImitaterClassic/tree/upload)。
- 授权说明：未提供；公开源码不等于允许任意再分发。

## 安装与使用

按照 [Windows 安装指南](../../guides/players/windows.md) 或 [Android 安装指南](../../guides/players/android.md) 导入作者的 `.pmod` 文件。Android 支持仅为作者投稿声明，未作维护者兼容保证。

在选卡界面选择「经典模仿者」彩卡，随后按作者说明使用复制功能。

本包含 `Runtime/ModAssembly.dll` 托管插件，清单 `runtimeAssemblyPolicy` 为 `optional`。空 `dependencies` 仅表示未声明其他 Mod 前置，不表示纯资源包，也不保证插件未加载时功能完整。

## 兼容依据与实测记录

2026-10-08 [作者补充说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/25#issuecomment-6060160375)明确 `1.5.0` 在游戏 `0.29.0` 的 Windows 与 Android 上均由作者实测可用；未提供完整设备与步骤记录，维护者未复现。联机状态仍未确认。

2026-10-08 当前包核对：重新下载 GitHub Release 附件，只读查看 ZIP 列表及 `mod.json`：ID `imitaterclassic`、版本 `1.5.0`、作者“本地”，`dependencies` / `conflicts` 为空，引用的运行时 DLL 存在。包体 16,359 B，SHA-256 `dea301920b1dcddd48495f9e9df8ead60ee5a69a12ac1f817d1730242da66433`，与 GitHub 资产元数据一致。未执行包内代码，未将空冲突清单视为兼容证明；新版游戏、平台及联机适用范围没有独立实测，历史声明仍按原版本保留。

以下为历史版本核对记录：

作者声明：[Issue #7](https://github.com/EFrostBlade/pvz-zj-mods/issues/7) 的 1.3.3 投稿声明游戏 0.29、Windows 与 Android，依赖和冲突填写“无”；没有提供可归为社区实测的步骤、设备、组合及证据。联机支持未确认。

资料核对：2026-09-30 独立读取 [upload tag 的公开 mod.json](https://github.com/apples1949/pvzhe-ImitaterClassic/blob/upload/mod.json)，确认 ID `imitaterclassic`、名称、版本 `1.3.3`、author `本地`、`dependencies: []`、`conflicts: []`。同日独立下载对应 Release 附件，只读读取 ZIP 内的 `mod.json`；上述身份、版本、依赖和冲突字段与工程清单一致。

Release 元数据：附件 `ImitaterClassic.pmod`，13597 字节，GitHub 提供的摘要 `sha256:8e0481a5e42fc27c844657db6158443cfb21477d22e80628ff26b0d41004dd66`。下载附件的实际 SHA-256 与 GitHub 提供的摘要一致。仅进行了 ZIP 文件列表及文本清单静态检查，没有加载 DLL、安装或运行 Mod；这不构成运行安全或实机兼容保证。

社区实测：暂无记录。

## 已知问题

未确认。空冲突清单不代表与已有 Mod 的组合已经测试。

## 条目更新记录

- 2026-10-08：整理 `1.5.0` 更新草稿，来源为[作者更新 #15](https://github.com/EFrostBlade/pvz-zj-mods/issues/15)、[下载修正 #23](https://github.com/EFrostBlade/pvz-zj-mods/issues/23)及当前 GitHub 发布包；补入作者提供的下载映射及新版兼容声明。

- 2026-09-30：收录 1.3.3，来源为 [作者投稿 #7](https://github.com/EFrostBlade/pvz-zj-mods/issues/7)、[原始 Release](https://github.com/apples1949/pvzhe-ImitaterClassic/releases/tag/upload) 和公开工程清单；补齐实际发布包清单及摘要核对，保留作者声明与未实测边界。
