# cd显示（血条·装填倒计时）

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

显示角色冷却、装填进度、障碍物血量和选卡栏种植冷却等信息，帮助观察战斗中的关键状态。

> **兼容提醒：作者在 `1.7.8` 投稿时报告过与各类自定义植物、僵尸类 Mod 冲突。** 本次更新未明确说明该冲突是否解决，`1.14.1` 的组合兼容性仍未确认。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `healthcooldowndisplay` |
| 作者 | [apples1949](https://github.com/apples1949)（依据投稿与发布来源） |
| 主分类 | 工具与前置 |
| 标签 | 冷却显示、战斗信息、血条 |
| 当前收录版本 | `1.14.1` |
| 适用游戏版本 | 作者在 `1.7.8` [收录申请](https://github.com/EFrostBlade/pvz-zj-mods/issues/1)中声明 `0.29`；本次更新未重新确认 |
| 平台 | 作者此前声明 Windows 与 Android；本次更新未重新确认，未独立实测 |
| 前置依赖 | 包清单未声明前置依赖；作者未另行说明实际需求 |
| 已知冲突 | `1.7.8` 曾由作者报告自定义植物、僵尸类 Mod 冲突；具体范围及新版是否解决未确认 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 作者在[作品介绍](https://github.com/apples1949/pvzhe-HealthCooldownLine)中表示不打算继续更新（核对时声明） |
| 信息核对日期 | 2026-09-28 |

## 内容介绍

以下功能依据[作者介绍](https://github.com/apples1949/pvzhe-HealthCooldownLine)和本次[源码提交中的清单](https://github.com/apples1949/pvzhe-HealthCooldownLine/blob/607c48238bb07a66ad68a5a5303ba92683d98306/mod.json)整理，未由目录维护者实测：

- 提供 10 类信息显示：装填与核能、障碍物消失、障碍物血量、选卡栏种植 CD、生成计时、角色计时器其他 CD、成长与充能、产出倒计时、战斗辅助、等级与加速。
- 提供总开关与上述 10 类功能的独立开关，可按需选择显示内容。
- 作者说明支持双格植物文字居中、叠种文字错开和翻转显示修正；具体角色的显示效果尚未实测。

[观看作者演示](https://www.bilibili.com/video/BV1tyhR6SEkG)。

## 作者与下载

- 作者主页：[apples1949](https://github.com/apples1949)。
- 原始发布页与下载入口：[1.14.1 发布页](https://github.com/apples1949/pvzhe-HealthCooldownLine/releases/tag/releases)，选择附件 `HealthCooldownLine.pmod`。核对时页面与附件公开可访问，无提取码。作者沿用 `releases` 标签更新附件，下载后请以包内版本为准。
- 作品主页：[pvzhe-HealthCooldownLine](https://github.com/apples1949/pvzhe-HealthCooldownLine)。
- 作者反馈入口：未单独指定，可通过上述作者发布来源查找后续反馈方式。
- 源码：已公开[实现源码](https://github.com/apples1949/pvzhe-HealthCooldownLine/tree/607c48238bb07a66ad68a5a5303ba92683d98306/runtime_src)，链接固定到本次更新申请提供的提交。
- 授权说明：未提供明确授权说明。

## 安装与使用

1. 从作者发布页下载 `.pmod`，按照 [Windows](../../guides/players/windows.md) 或 [Android](../../guides/players/android.md) 指南导入、启用并重启。
2. 进入战斗，在战斗设置页启用冷却显示总开关，并按需调整各类功能开关。
3. 观察角色、障碍物和选卡栏的对应信息。遇到适配或显示问题时，记录游戏版本、Mod 版本、同时启用的其他 Mod 和复现步骤，结合作者发布资料排查。

安装与设置说明依据通用指南及[公开源码](https://github.com/apples1949/pvzhe-HealthCooldownLine/blob/607c48238bb07a66ad68a5a5303ba92683d98306/runtime_src/HealthCooldownLineEntry.cs)，维护者未验证该包的实际运行效果。不要将“工具与前置”分类理解为它必须作为其他作品的前置安装。

## 兼容依据与实测记录

- **作者声明**：游戏版本 `0.29`、Windows 与 Android，以及自定义植物/僵尸类 Mod 冲突，均来自 `1.7.8` 的[收录申请 #1](https://github.com/EFrostBlade/pvz-zj-mods/issues/1)。[更新申请 #2](https://github.com/EFrostBlade/pvz-zj-mods/issues/2)说明补全待办并增加障碍物血量显示，未重新确认版本、平台、联机或组合兼容范围。
- **包清单核对**：2026-09-28 读取发布附件中的 `mod.json`，确认 ID 为 `healthcooldowndisplay`、版本为 `1.14.1`，与发布页及本次源码提交的清单一致；`dependencies` 与 `conflicts` 均为空。空冲突列表不能证明历史冲突已解决。
- **名称与署名**：投稿名为“cd显示”，包内名称为“血条·装填倒计时”，作者字段为“本地”。本条目署名依据提交申请的账号和发布仓库作者 `apples1949`。
- **当前核对包的 SHA-256**（`1.14.1`）：`0d6d16968fc610ee960934115bac62a3526b44dde03e2f249c2c3410d12f619d`。此值只标识本次核对的附件，后续发布页替换附件后需重新核对。
- **社区实测**：暂无记录。维护者仅核对资料和包清单，没有安装或运行该 Mod。

## 本次更新与兼容边界

作者在本次申请中说明已补全待办并增加障碍物血量显示。新版介绍已包含种植冷却、等级与加速及分类开关，因此不再将这些内容列为未来计划；源码也已公开。

旧版投稿中的魅惑僵尸文字镜像问题，在新版清单中有“翻转正常”的作者说明，但尚无独立实测记录。自定义植物、僵尸类 Mod 冲突没有明确的修复说明，不能仅凭“补全待办”认定全部组合已经兼容。

## 条目更新记录

- 2026-09-28：更新至 `1.14.1`；依据[更新申请 #2](https://github.com/EFrostBlade/pvz-zj-mods/issues/2)、[作者源码提交](https://github.com/apples1949/pvzhe-HealthCooldownLine/commit/607c48238bb07a66ad68a5a5303ba92683d98306)及发布附件，更新功能、设置开关、源码和维护状态，保留历史兼容声明及未实测边界。
- 2026-09-27：首次收录 `1.7.8`；依据[作者投稿](https://github.com/EFrostBlade/pvz-zj-mods/issues/1)、作品介绍与发布包清单整理，主分类按辅助显示功能归入“工具与前置”。
  当时核对包的 SHA-256 为 `cfe64778779b042cf7286aaa6d6c008dbfb761e0264efb98973503dcf7c815aa`，仅作为历史记录。
