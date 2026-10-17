# 超级汉堡射手

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

新增使用随机子弹并定时产出阳光的植物“超级汉堡射手”。当前下载包已替换为 `1.2.4`；包内数值与作者详情页仍有差异，资料保持待审核，未进行实机验证。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `burgergatlingpea` |
| 作者 | 云漫行 |
| 主分类 | 角色与卡牌 |
| 标签 | 新植物、齐射、随机子弹、大招、金卡、托管插件 |
| 当前收录版本 | `1.2.4`（待审核） |
| 适用游戏版本 | 作者当前 Release 声明：`0.30`；本批包按该版本构建，`0.28` / `0.29` 未逐项回归；维护者未实测 |
| 平台 | 作者声明：Windows；Android 未确认 |
| 前置依赖 | 作者声明：无；维护者已核对本版 Release 包清单，`dependencies` 为空 |
| 已知冲突 | 作者旧投稿声明：无；本版 Release 包清单 `conflicts` 为空，不代表兼容性实测。[cd显示（血条·装填倒计时）](../healthcooldowndisplay/README.md) 曾在 `1.7.8` 投稿时报告与自定义植物、僵尸类 Mod 冲突；该历史报告不自动适用于新版，与本作品当前版本的组合兼容性未确认 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 维护中（作者声明及 2026-10-17 发布资料更新） |
| 信息核对日期 | 2026-10-17 |

## 内容介绍

当前包内 `mod.json` 与 `CHANGELOG.md` 均描述：每 2 秒齐射 9 颗随机子弹，随机池为 79 种；每 25 秒产出 50 阳光，每次攻击有 10% 概率触发持续 5 秒的大招。以上为包内说明，未验证运行时插件行为。

本包清单、更新日志和 Config 一致为 **1000 阳光、8000 血量**，冷却 30 秒；Config 的升级对象为豌豆射手，`canCopy = true`。但标为 `1.2.4` 的[作者详情页固定版本](https://github.com/josnil/pvz-mods/blob/605fb59a0e9cb373f5ac6343c0093dca0abd492d/mod/burgergatlingpea.html)仍写 **600 阳光、1000 血量**。这项面向玩家的数值差异尚待作者同步，暂不合并。

旧[投稿 #11](https://github.com/EFrostBlade/pvz-zj-mods/issues/11)对应 `1.1.1.0`，其 10 种等权子弹合计 97%、黄油 3% 的说明不适用于当前包。当前包已消除此前清单与日志的随机池差异。随包日志仍采用四段标题 `1.2.4.0`；本次按实际清单和 Release 的三段版本 `1.2.4` 记录，合集 Release 已说明四段旧版本迁移规则。

## 作者与下载

- 作者主页：[云漫行的 Mod 发布站](https://josnil.github.io/pvz-mods/)；作者身份依据同一账号 josnil 的[投稿 #11](https://github.com/EFrostBlade/pvz-zj-mods/issues/11)、此前[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)及包内作者字段。
- 原始发布页：[本作品详情页](https://josnil.github.io/pvz-mods/mod/burgergatlingpea.html)。
- 下载入口：[GitHub Release 下载](https://github.com/josnil/pvz-mods/releases/download/v1.0.0/burgergatlingpea.pmod)。公开附件无需登录；合集 tag `v1.0.0` 不等于本 Mod 版本，2026-10-17 所核对附件清单版本为 `1.2.4`。
- 其他作者入口：[夸克网盘（本 Mod 独立分享）](https://pan.quark.cn/s/a03dcd58ce62)，来自本轮作者详情页。作者站点声明与 GitHub 内容一致、免登录；维护者未访问或比对当前夸克副本，访问条件以网盘实际提示为准，不沿用旧分享的版本保证。
- 作者反馈入口：[josnil/pvz-mods Issues](https://github.com/josnil/pvz-mods/issues)。
- 源码：本作品源码未公开；作者的[工具链与配套技能库](https://github.com/josnil/pvz-hybrid-mod-skills)不是本作品完整源码的公开声明。
- 授权说明：[合集 Release](https://github.com/josnil/pvz-mods/releases/tag/v1.0.0)注明“内容仅供学习交流，请勿商用”，游戏本体及原始美术素材版权归各自原作者；未提供本作品独立许可证。

## 安装与使用

1. 从上述入口获取 `.pmod`，按 [Windows 安装指南](../../guides/players/windows.md)导入、启用并重启；作者未声明额外安装步骤。
2. 含托管运行时插件；游戏内入口为选卡界面的“超级汉堡射手”卡。Android 兼容性未确认，通用导入步骤见 [Android 指南](../../guides/players/android.md)。

## 兼容依据与实测记录

作者当前[合集 Release](https://github.com/josnil/pvz-mods/releases/tag/v1.0.0)声明本批包按 `0.30` 解包与工具链构建，平台 Windows，`0.28` / `0.29` 未逐项回归。该说明覆盖当前附件，属于作者适用声明，不是实机验收记录。旧[投稿 #11](https://github.com/EFrostBlade/pvz-zj-mods/issues/11)的 Windows + `0.29` 仅对应 `1.1.1.0`，此前 Release 的 `0.28` 说明也不继续应用于当前新包。Android、联机及其他游戏版本未确认。

静态包核对（2026-10-17）：重新下载当前 GitHub Release 附件，**200,910 B、13 个文件**，SHA-256：`5f9305a9f4780849b624c4ff6724cb234db5608e5d532b248986b09f563cc6f7`，与当前 GitHub 资产摘要一致。ZIP 内 `mod.json`：ID `burgergatlingpea`、版本 `1.2.4`、作者云漫行；`dependencies`、`conflicts` 为空，`provides` 含 Character / CharacterSprite / Packet 各 1 项，`overrides` 为空。清单声明的资源、翻译表与 `Runtime/ModAssembly.dll` 均存在，运行时入口为 `BurgerGatlingPeaRuntimeEntry`，策略 `optional`。完整文件列表、CRC、路径、重复路径及符号链接检查通过；仅读取清单、文本和静态配置，未加载 DLL 或执行包内代码。

历史包记录：`1.2.3.0` 为 200,678 B，SHA-256 `6349f16508bfadeb8c38dbfb1c24f0f6d79284eb93c644e073a7373b969c1c64`；`1.1.1.0` 为 197,437 B，SHA-256 `9841ea58cc38da1c3d55925f9e6c7655277ceab72912f569cc2a3596d06c0c3f`。这些摘要不再标识当前 URL 的附件，也不代表当前版本兼容性。

社区实测：暂无记录。

## 已知问题

当前包与作者详情页的阳光价格、血量说明不同，待作者同步。其他问题未确认。

## 条目更新记录

- 2026-10-17：草稿同步当前附件 `1.2.4`、作者 Windows / `0.30` 声明、下载入口与完整摘要；记录新发现的页面数值差异，继续待审核。
- 2026-10-08：草稿更新为当前附件 `1.2.3.0`，重新记录清单、摘要和日志差异；兼容依据不足，暂不合并。

- 2026-09-30：整理 `1.1.1.0` 收录草稿；依据[作者投稿 #11](https://github.com/EFrostBlade/pvz-zj-mods/issues/11)、作品发布页和 GitHub Release 包静态核对，保留兼容声明差异与未实测边界。
