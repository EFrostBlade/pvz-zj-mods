# 超级汉堡射手

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

每 2.0 秒向前方发射 9 颗随机子弹；每次攻击有 10% 概率触发大招，5 秒内倾泻约 300 颗随机子弹。玩法数值依据作者说明，未进行实机验证。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `burgergatlingpea` |
| 作者 | 云漫行 |
| 主分类 | 角色与卡牌 |
| 标签 | 新植物、齐射、随机子弹、大招、金卡、托管插件 |
| 当前收录版本 | `1.1.1.0` |
| 适用游戏版本 | 作者投稿声明：`0.29`，未在 `0.28` 验证；合集 Release 通用说明仍写 `0.28`，来源差异见下文；维护者未实测 |
| 平台 | 作者声明：Windows；Android 未确认 |
| 前置依赖 | 作者声明：无；维护者已核对本版 Release 包清单，`dependencies` 为空 |
| 已知冲突 | 作者声明：无；本版 Release 包清单 `conflicts` 为空，不代表兼容性实测。另据历史报告：[cd显示（血条·装填倒计时）](../healthcooldowndisplay/README.md) 作者曾在 `1.7.8` 投稿时报告与自定义植物、僵尸类 Mod 冲突；其 `1.14.1` 是否解决及与本作品的具体兼容性未确认 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 维护中（作者声明，2026-09-30） |
| 信息核对日期 | 2026-09-30 |

## 内容介绍

以下功能与玩法数值依据[作者投稿 #11](https://github.com/EFrostBlade/pvz-zj-mods/issues/11)及作品发布页；静态核对范围见下文。

- 金卡：阳光 600、冷却 30.0 秒、血量 1000；每 2.0 秒发射 9 颗随机子弹。
- 随机池：内核、豌豆、寒冰豌豆、火焰豌豆、星星、棉花、地刺、卷心菜、西瓜、冰西瓜 10 种等权合计 97%，另有 3% 概率黄油。
- 大招：每次攻击 10% 概率触发，持续 5 秒，约 300 颗随机子弹。
- 可在空地种植，也可种在豌豆射手上升级；支持全息投影花盆（PotQX）投影。包内 Config 分别为 `plantCover = ["PlantPeaShooter"]`、`canCopy = true`。
- 数据侧配置 9 个发射点，逐颗出膛与随机概率由托管运行时插件驱动（`Runtime/ModAssembly.dll`，入口 `BurgerGatlingPeaRuntimeEntry`）；ComponentSet 使用 `fireEventName = "modfire"`。
- 作者说明外观使用 SuperGatlingB 官方部件图集直转（23 部件 / 26 轨），根精灵与头精灵独立，待机动画常驻；包内附 `CHANGELOG.md`，记录 `1.0.0.0` → `1.1.0.0` → `1.1.1.0` 的变更。

## 作者与下载

- 作者主页：[云漫行的 Mod 发布站](https://josnil.github.io/pvz-mods/)；作者身份依据同一账号 josnil 的[投稿 #11](https://github.com/EFrostBlade/pvz-zj-mods/issues/11)、此前[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)及包内作者字段。
- 原始发布页：[本作品详情页](https://josnil.github.io/pvz-mods/mod/burgergatlingpea.html)。
- 下载入口：[夸克网盘（本 Mod 独立分享）](https://pan.quark.cn/s/d6c3c106364d)。作者声明公开、免提取码、永久有效；维护者未独立下载夸克分享内容，登录或客户端要求以网盘实际提示为准。
- 原始发布源：[GitHub Release 下载](https://github.com/josnil/pvz-mods/releases/download/v1.0.0/burgergatlingpea.pmod)。合集 tag `v1.0.0` 不等于本 Mod 版本，所核对附件清单版本为 `1.1.1.0`。作者称与夸克内容一致，维护者未独立比对两个入口。
- 作者反馈入口：[josnil/pvz-mods Issues](https://github.com/josnil/pvz-mods/issues)。
- 源码：本作品源码未公开；作者的[工具链与配套技能库](https://github.com/josnil/pvz-hybrid-mod-skills)不是本作品完整源码的公开声明。
- 授权说明：[合集 Release](https://github.com/josnil/pvz-mods/releases/tag/v1.0.0)注明“内容仅供学习交流，请勿商用”，游戏本体及原始美术素材版权归各自原作者；未提供本作品独立许可证。

## 安装与使用

1. 从上述入口获取 `.pmod`，按 [Windows 安装指南](../../guides/players/windows.md)导入、启用并重启；作者未声明额外安装步骤。
2. 含托管运行时插件；游戏内入口为选卡界面的“超级汉堡射手”卡。Android 兼容性未确认，通用导入步骤见 [Android 指南](../../guides/players/android.md)。

## 兼容依据与实测记录

作者声明：`1.1.1.0` 的开发、打包与实机演示基线为 Windows + `0.29`，未在 `0.28` 验证，依据[作者投稿 #11](https://github.com/EFrostBlade/pvz-zj-mods/issues/11)。合集 [Release](https://github.com/josnil/pvz-mods/releases/tag/v1.0.0) 的通用说明仍写 `0.28`、未在 `0.29.0` 验证；本条目按较新的、针对本作品的投稿记录 `0.29` 声明，不将其视为维护者实测结论。Android 与联机未确认。

静态包核对（2026-09-30）：独立下载并只读检查 GitHub Release 附件（197,437 B；SHA-256：`9841ea58cc38da1c3d55925f9e6c7655277ceab72912f569cc2a3596d06c0c3f`），摘要与 GitHub 资产元数据一致。`mod.json` 的 ID、版本、作者分别为 `burgergatlingpea`、`1.1.1.0`、云漫行；`dependencies`、`conflicts` 为空，`provides` 含 Character / CharacterSprite / Packet 各 1 项，`overrides` 为空。清单声明 `Runtime/ModAssembly.dll`、入口 `BurgerGatlingPeaRuntimeEntry`、加载策略 `optional` 及 `Localization/translations.csv`；已核对上述文件存在、Config 升级与投影字段、ComponentSet 的 9 个发射点和随机池权重，以及包内更新日志。以上不等于插件行为或游戏兼容性验证；未加载 DLL、安装或运行 Mod。

社区实测：暂无记录。

## 已知问题

未确认；作者未提供当前版本已知问题清单。包内更新日志记录 `1.1.1.0` 修复投影问题，维护者未实机复测。

## 条目更新记录

- 2026-09-30：首次收录 `1.1.1.0`；依据[作者投稿 #11](https://github.com/EFrostBlade/pvz-zj-mods/issues/11)、作品发布页和 GitHub Release 包静态核对，保留兼容声明差异与未实测边界。
