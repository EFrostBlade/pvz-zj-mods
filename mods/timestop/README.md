# 时停

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

新增时停按钮，暂停战场运动，同时允许种植、铲除和收集资源。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `timestop` |
| 作者 | apples1949（投稿与发布账号；实际发布包清单的 author 字段为“本地”） |
| 主分类 | 玩法调整 |
| 标签 | 无 |
| 当前收录版本 | `1.0.29` |
| 适用游戏版本 | 作者在 [Issue #8](https://github.com/EFrostBlade/pvz-zj-mods/issues/8) 声明 0.29；维护者未实测 |
| 平台 | 作者在投稿声明 Windows 与 Android；维护者未实测 |
| 前置依赖 | 作者投稿声明无；实际发布包清单 dependencies 为空 |
| 已知冲突 | 作者投稿声明无；实际发布包清单 conflicts 为空，不代表任意组合已验证 |
| 联机说明 | 1.0.29 未确认；作者 upload tag 的旧版 README 提示多人模式未适配，见下方版本边界 |
| 作者维护状态 | 未确认 |
| 信息核对日期 | 2026-09-30 |

## 内容介绍

新增时停按钮，暂停战场运动，同时允许种植、铲除和收集资源。 功能说明依据作者投稿和公开工程清单，未进行游戏内验证。

## 作者与下载

- 作者主页：[apples1949](https://github.com/apples1949)；投稿人和原始 Release 发布者为同一账号。
- 原始发布页：[作者 Release 1.0.29](https://github.com/apples1949/pvzhe-TimeStop/releases/tag/upload)；[作者提供的视频入口](https://www.bilibili.com/video/BV12LaH6WES1)（本轮未独立读取视频内容）。
- 下载入口：[Release 附件 TimeStop.pmod](https://github.com/apples1949/pvzhe-TimeStop/releases/download/upload/TimeStop.pmod)，GitHub 公开附件；访问受当地网络条件影响，不承诺永久有效。
- 作者反馈入口：[投稿 Issue #8](https://github.com/EFrostBlade/pvz-zj-mods/issues/8)。
- 源码：[作者公开工程](https://github.com/apples1949/pvzhe-TimeStop/tree/upload)。
- 授权说明：未提供；公开源码不等于允许任意再分发。

## 安装与使用

按照 [Windows 安装指南](../../guides/players/windows.md) 或 [Android 安装指南](../../guides/players/android.md) 导入作者的 `.pmod` 文件。Android 支持仅为作者投稿声明，未作维护者兼容保证。

作者说明：游戏内「加速」按钮下方的「时停」按钮用于切换；未触发为绿色，触发中为红色。

## 兼容依据与实测记录

作者声明：[Issue #8](https://github.com/EFrostBlade/pvz-zj-mods/issues/8) 的 1.0.29 投稿声明游戏 0.29、Windows 与 Android，依赖和冲突填写“无”；没有提供可归为社区实测的步骤、设备、组合及证据。联机支持未确认。

资料核对：2026-09-30 独立读取 [upload tag 的公开 mod.json](https://github.com/apples1949/pvzhe-TimeStop/blob/upload/mod.json)，确认 ID `timestop`、名称、版本 `1.0.29`、author `本地`、`dependencies: []`、`conflicts: []`。同日独立下载对应 Release 附件，只读读取 ZIP 内的 `mod.json`；上述身份、版本、依赖和冲突字段与工程清单一致。

Release 元数据：附件 `TimeStop.pmod`，17291 字节，GitHub 提供的摘要 `sha256:b44f319ab4e37c4bce1ff16f57d00817c1a385f8a6fe6e26a7760f0f7a62c929`。下载附件的实际 SHA-256 与 GitHub 提供的摘要一致。仅进行了 ZIP 文件列表及文本清单静态检查，没有加载 DLL、安装或运行 Mod；这不构成运行安全或实机兼容保证。

社区实测：暂无记录。

## 已知问题

作者 [upload tag 的 README](https://github.com/apples1949/pvzhe-TimeStop/blob/upload/README.md) 在“已知风险 / 待实测项”提示多人模式未适配、未考虑联机的 Paused 语义。该说明标题仍为 1.0.6，因此保留为旧版作者风险提示，不据此认定 1.0.29 已修复或已完成联机实测。1.0.29 联机状态仍未确认。空冲突清单不代表与已有 Mod 的组合已经测试。

## 条目更新记录

- 2026-09-30：收录 1.0.29，来源为 [作者投稿 #8](https://github.com/EFrostBlade/pvz-zj-mods/issues/8)、[原始 Release](https://github.com/apples1949/pvzhe-TimeStop/releases/tag/upload) 和公开工程清单；补齐实际发布包清单及摘要核对，保留作者声明与未实测边界。
