# cd显示（血条·装填倒计时）

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

显示角色冷却、装填进度、障碍物血量和选卡栏种植冷却等信息，帮助观察战斗中的关键状态。

> 作者在[作者补充说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/25#issuecomment-6060160375)报告：当前版本已解决旧版自定义植物、僵尸类 Mod 的程序集身份名冲突。维护者未复现，不构成所有组合兼容保证。

> 草稿资料：GitHub 实际包已静态核验；网盘包对应关系依据作者补充声明，维护者未下载网盘 ZIP。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `healthcooldowndisplay` |
| 作者 | [apples1949](https://github.com/apples1949)（依据投稿与发布来源） |
| 主分类 | 工具与前置 |
| 标签 | 冷却显示、战斗信息、血条 |
| 当前收录版本 | `1.20.1` |
| 适用游戏版本 | 作者对 `1.20.1` 声明 `0.29.0`；见[作者补充说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/25#issuecomment-6060160375)，维护者未实测 |
| 平台 | 作者对 `1.20.1` 报告 Windows 与 Android 均实测可用；维护者未复现 |
| 前置依赖 | 包清单未声明前置依赖；作者未另行说明实际需求 |
| 已知冲突 | 作者报告当前版本已解决旧版程序集身份名冲突；其他组合未独立验证，见[作者补充说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/25#issuecomment-6060160375) |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 作者曾表示不再更新；现又提交版本更新，当前维护计划未确认 |
| 信息核对日期 | 2026-10-08 |

## 内容介绍

本次 GitHub 实际附件为 `1.20.1`，依据[作者版本历史](https://github.com/apples1949/pvzhe-HealthCooldownLine/blob/f5d3dcdc382d8560ceb698003d16957efeae9d1b/README.md)与包内清单（维护者未实测）：

- `1.20.0`：将「只显示 ≥5 秒」改为按计时器总时长判定；总时长低于 4.9 秒时整行隐藏，否则剩余时间一路显示至 0。
- `1.20.1`：修复泡椒罐子装填数恒为 `0/4`、发射倒计时不出现的问题。

此前 `1.19.3` 更新依据[作者更新 #14](https://github.com/EFrostBlade/pvz-zj-mods/issues/14)，作者说明如下（维护者未实测）：

修复无法攻击的墓碑显示血量的问题
修复充能大喷菇与豆荚壳不显示叠种等级的问题
新增：我是僵尸系（IZM / IZM2）「血量产出剩余触发次数」显示（脑光/阳光 剩 N/M 次）
新增：「伪装」家族（伪装向日葵 / 伪装机枪射手 / 伪装樱桃 / 伪装三叶草）剩余触发次数显示（各 6 次）
新增：泡椒罐子「装填 N/4」与「发射 X.Xs」
新增：设置页「只显示 ≥5 秒」开关（优先级仅次于总开关）；此处为旧版行为，`1.20.0` 起按上方总时长规则判定
修复：我是僵尸下不再显示植物的「阳光生产倒计时」（该模式植物按掉血产出、timer 恒为 0，原显示为假倒计时）
修复：血量产出剩余次数显示成「最大值 − 1」（初始 hpNext = 满血 − 一段，公式需减 1，现满血显示 6/6）
修复：伪装向日葵同时显示「阳光生产时间」与「次数」（改为计时产出 / 血量产出严格互斥判据）

以下保留此前版本的功能介绍：

以下功能依据[作者介绍](https://github.com/apples1949/pvzhe-HealthCooldownLine)和此前 `1.14.1` 的[源码提交中的清单](https://github.com/apples1949/pvzhe-HealthCooldownLine/blob/607c48238bb07a66ad68a5a5303ba92683d98306/mod.json)整理，未由目录维护者实测：

- 提供 10 类信息显示：装填与核能、障碍物消失、障碍物血量、选卡栏种植 CD、生成计时、角色计时器其他 CD、成长与充能、产出倒计时、战斗辅助、等级与加速。
- 提供总开关与上述 10 类功能的独立开关，可按需选择显示内容。
- 作者说明支持双格植物文字居中、叠种文字错开和翻转显示修正；具体角色的显示效果尚未实测。

[观看作者演示](https://www.bilibili.com/video/BV1tyhR6SEkG)。

## 作者与下载

- 作者主页：[apples1949](https://github.com/apples1949)。
- 原始发布页：[作者 Release](https://github.com/apples1949/pvzhe-HealthCooldownLine/releases/tag/releases)；附件更新后需以包内版本为准。
- 下载入口：[作者网盘（蓝奏云）](https://apples1949.lanzouc.com/b007uuknqd)，密码 `762b`；[作者补充说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/25#issuecomment-6060160375)称无需登录、长期有效、随更新覆盖同名文件，并提供包内 `.pmod` 大小及 SHA-256，与本页 GitHub 核验记录一致。此为作者提供的副本对应关系；维护者未取得网盘 ZIP，不等于独立下载核验。
- 补充核对来源：[GitHub Release 附件](https://github.com/apples1949/pvzhe-HealthCooldownLine/releases/download/releases/HealthCooldownLine.pmod)，本轮实际包版本 `1.20.1`，公开可下载；不承诺附件不被替换。
- 作品主页：[pvzhe-HealthCooldownLine](https://github.com/apples1949/pvzhe-HealthCooldownLine)。
- 作者反馈入口：未单独指定，可通过上述作者发布来源查找后续反馈方式。
- 源码：已公开[实现源码](https://github.com/apples1949/pvzhe-HealthCooldownLine/tree/607c48238bb07a66ad68a5a5303ba92683d98306/runtime_src)，链接固定到此前 `1.14.1` 更新申请提供的提交，不代表当前发布包源码。
- 授权说明：未提供明确授权说明。

## 安装与使用

1. 从作者发布页下载 `.pmod`，按照 [Windows](../../guides/players/windows.md) 或 [Android](../../guides/players/android.md) 指南导入、启用并重启。
2. 进入战斗，在战斗设置页启用冷却显示总开关，并按需调整各类功能开关。
3. 观察角色、障碍物和选卡栏的对应信息。遇到适配或显示问题时，记录游戏版本、Mod 版本、同时启用的其他 Mod 和复现步骤，结合作者发布资料排查。

安装与设置说明依据通用指南及[公开源码](https://github.com/apples1949/pvzhe-HealthCooldownLine/blob/607c48238bb07a66ad68a5a5303ba92683d98306/runtime_src/HealthCooldownLineEntry.cs)，维护者未验证该包的实际运行效果。不要将“工具与前置”分类理解为它必须作为其他作品的前置安装。

## 兼容依据与实测记录

2026-10-08 [作者补充说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/25#issuecomment-6060160375)明确 `1.20.1` 在游戏 `0.29.0` 的 Windows 与 Android 上均由作者实测可用；未提供完整设备与步骤记录，维护者未复现。联机状态仍未确认。

2026-10-08 当前包核对：重新下载 GitHub Release 附件，只读查看 ZIP 列表及 `mod.json`：ID `healthcooldowndisplay`、版本 `1.20.1`、作者“本地”，`dependencies` / `conflicts` 为空，ZIP 仅有 `mod.json`（1,663 B）与 `Runtime/ModAssembly.dll`（69,120 B），无路径越界或符号链接。包体 31,400 B，SHA-256 `2ba13183dd965985f381e3ba63c54c7fe7b1c8b2aa7adcbe5959ac7f8020cbf2`，与 GitHub 资产元数据一致。未执行包内代码，未将空冲突清单视为兼容证明；新版游戏、平台及联机适用范围没有独立实测，历史声明仍按原版本保留。

以下为历史版本核对记录：

- `1.19.3`：前轮实际核对 30,815 B，SHA-256 `7cecc831ab80f814dd8b95d453f410818aaceb5f51ca514541b36cb4581c49ce`；同一 GitHub 下载地址现已替换为 `1.20.1`，旧摘要不标识当前附件。

- **作者声明**：游戏版本 `0.29`、Windows 与 Android，以及自定义植物/僵尸类 Mod 冲突，均来自 `1.7.8` 的[收录申请 #1](https://github.com/EFrostBlade/pvz-zj-mods/issues/1)。[更新申请 #2](https://github.com/EFrostBlade/pvz-zj-mods/issues/2)说明补全待办并增加障碍物血量显示，未重新确认版本、平台、联机或组合兼容范围。
- **包清单核对**：2026-09-28 读取发布附件中的 `mod.json`，确认 ID 为 `healthcooldowndisplay`、版本为 `1.14.1`，与发布页及本次源码提交的清单一致；`dependencies` 与 `conflicts` 均为空。空冲突列表不能证明历史冲突已解决。
- **名称与署名**：投稿名为“cd显示”，包内名称为“血条·装填倒计时”，作者字段为“本地”。本条目署名依据提交申请的账号和发布仓库作者 `apples1949`。
- **历史核对包的 SHA-256**（`1.14.1`）：`0d6d16968fc610ee960934115bac62a3526b44dde03e2f249c2c3410d12f619d`。此值只标识本次核对的附件，后续发布页替换附件后需重新核对。
- **社区实测**：暂无记录。维护者仅核对资料和包清单，没有安装或运行该 Mod。

## 历史更新与兼容边界（1.14.1）

作者在本次申请中说明已补全待办并增加障碍物血量显示。新版介绍已包含种植冷却、等级与加速及分类开关，因此不再将这些内容列为未来计划；源码也已公开。

旧版投稿中的魅惑僵尸文字镜像问题，在新版清单中有“翻转正常”的作者说明，但尚无独立实测记录。自定义植物、僵尸类 Mod 冲突没有明确的修复说明，不能仅凭“补全待办”认定全部组合已经兼容。

## 条目更新记录

- 2026-10-08：整理 `1.20.1` 更新草稿，来源为[作者更新 #14](https://github.com/EFrostBlade/pvz-zj-mods/issues/14)、[下载修正 #25](https://github.com/EFrostBlade/pvz-zj-mods/issues/25)及当前 GitHub 发布包、作者版本历史；草稿从 `1.19.3` 更新为 `1.20.1`，补入作者提供的下载映射及新版兼容声明，保留未独立复现边界。

- 2026-09-28：更新至 `1.14.1`；依据[更新申请 #2](https://github.com/EFrostBlade/pvz-zj-mods/issues/2)、[作者源码提交](https://github.com/apples1949/pvzhe-HealthCooldownLine/commit/607c48238bb07a66ad68a5a5303ba92683d98306)及发布附件，更新功能、设置开关、源码和维护状态，保留历史兼容声明及未实测边界。
- 2026-09-27：首次收录 `1.7.8`；依据[作者投稿](https://github.com/EFrostBlade/pvz-zj-mods/issues/1)、作品介绍与发布包清单整理，主分类按辅助显示功能归入“工具与前置”。
  当时核对包的 SHA-256 为 `cfe64778779b042cf7286aaa6d6c008dbfb761e0264efb98973503dcf7c815aa`，仅作为历史记录。
