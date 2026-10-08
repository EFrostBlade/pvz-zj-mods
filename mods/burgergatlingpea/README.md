# 超级汉堡射手

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

新增使用随机子弹的植物“超级汉堡射手”。当前下载包已替换为 `1.2.3.0`；包内更新日志与旧投稿的随机池说明不同，资料保持待审核，未进行实机验证。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `burgergatlingpea` |
| 作者 | 云漫行 |
| 主分类 | 角色与卡牌 |
| 标签 | 新植物、齐射、随机子弹、大招、金卡、托管插件 |
| 当前收录版本 | `1.2.3.0`（待审核） |
| 适用游戏版本 | 未确认；投稿对旧版 `1.1.1.0` 声明 `0.29`，当前合集 Release 仍写 `0.28`，待作者确认 `1.2.3.0` 的适用范围 |
| 平台 | 作者声明：Windows；Android 未确认 |
| 前置依赖 | 作者声明：无；维护者已核对本版 Release 包清单，`dependencies` 为空 |
| 已知冲突 | 作者声明：无；本版 Release 包清单 `conflicts` 为空，不代表兼容性实测。另据历史报告：[cd显示（血条·装填倒计时）](../healthcooldowndisplay/README.md) 作者曾在 `1.7.8` 投稿时报告与自定义植物、僵尸类 Mod 冲突；其 `1.14.1` 是否解决及与本作品的具体兼容性未确认 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 维护中（作者声明，2026-09-30） |
| 信息核对日期 | 2026-10-08 |

## 内容介绍

当前包内 `CHANGELOG.md` 声明：`1.2.0.0` 起每 25 秒产出 50 阳光，并更改随机子弹池；`1.2.3.0` 排除 8 种加农炮子弹后为 79 种。以上为随包作者日志，未验证运行时插件行为。

旧[投稿 #11](https://github.com/EFrostBlade/pvz-zj-mods/issues/11)对应 `1.1.1.0`，描述 10 种等权子弹合计 97%、黄油 3%，不能沿用为当前版本结论。当前 `mod.json` 的简介仍保留旧随机池描述，与同包日志不一致，需作者同步说明。

## 作者与下载

- 作者主页：[云漫行的 Mod 发布站](https://josnil.github.io/pvz-mods/)；作者身份依据同一账号 josnil 的[投稿 #11](https://github.com/EFrostBlade/pvz-zj-mods/issues/11)、此前[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)及包内作者字段。
- 原始发布页：[本作品详情页](https://josnil.github.io/pvz-mods/mod/burgergatlingpea.html)。
- 下载入口：[夸克网盘（本 Mod 独立分享）](https://pan.quark.cn/s/d6c3c106364d)。作者声明公开、免提取码、永久有效；维护者未独立下载夸克分享内容，登录或客户端要求以网盘实际提示为准。
- 原始发布源：[GitHub Release 下载](https://github.com/josnil/pvz-mods/releases/download/v1.0.0/burgergatlingpea.pmod)。合集 tag `v1.0.0` 不等于本 Mod 版本，2026-10-08 所核对附件清单版本为 `1.2.3.0`，已不同于投稿版本。两个入口的当前版本是否一致未确认。
- 作者反馈入口：[josnil/pvz-mods Issues](https://github.com/josnil/pvz-mods/issues)。
- 源码：本作品源码未公开；作者的[工具链与配套技能库](https://github.com/josnil/pvz-hybrid-mod-skills)不是本作品完整源码的公开声明。
- 授权说明：[合集 Release](https://github.com/josnil/pvz-mods/releases/tag/v1.0.0)注明“内容仅供学习交流，请勿商用”，游戏本体及原始美术素材版权归各自原作者；未提供本作品独立许可证。

## 安装与使用

1. 从上述入口获取 `.pmod`，按 [Windows 安装指南](../../guides/players/windows.md)导入、启用并重启；作者未声明额外安装步骤。
2. 含托管运行时插件；游戏内入口为选卡界面的“超级汉堡射手”卡。Android 兼容性未确认，通用导入步骤见 [Android 指南](../../guides/players/android.md)。

## 兼容依据与实测记录

作者在[投稿 #11](https://github.com/EFrostBlade/pvz-zj-mods/issues/11)对 `1.1.1.0` 声明 Windows + `0.29`，未在 `0.28` 验证；当前[合集 Release](https://github.com/josnil/pvz-mods/releases/tag/v1.0.0)仍声明 `0.28`、未在 `0.29.0` 验证。不能把旧版投稿声明直接应用于新包，`1.2.3.0` 的版本、平台适用范围仍待确认。

静态包核对（2026-10-08）：重新下载当前 GitHub Release 附件，200,678 B，SHA-256：`6349f16508bfadeb8c38dbfb1c24f0f6d79284eb93c644e073a7373b969c1c64`，与当前 GitHub 资产摘要一致。ZIP 内 `mod.json`：ID `burgergatlingpea`、版本 `1.2.3.0`、作者云漫行；`dependencies`、`conflicts` 为空，`provides` 含 Character / CharacterSprite / Packet 各 1 项，`overrides` 为空。清单引用的 `Runtime/ModAssembly.dll` 与 `Localization/translations.csv` 均存在，运行时入口为 `BurgerGatlingPeaRuntimeEntry`，策略 `optional`。仅读取清单、文件列表及更新日志，未执行包内代码。

此前 2026-09-30 核对的 `1.1.1.0` 包为 197,437 B，SHA-256 `9841ea58cc38da1c3d55925f9e6c7655277ceab72912f569cc2a3596d06c0c3f`；此为历史记录，不再代表当前 URL 的附件。作者站点本次访问被环境代理拒绝，未取得当前页面内容，未核对夸克副本。

社区实测：暂无记录。

## 已知问题

当前清单简介与更新日志的随机池说明不同；游戏适用版本冲突尚未解决。其他问题未确认。

## 条目更新记录

- 2026-10-08：草稿更新为当前附件 `1.2.3.0`，重新记录清单、摘要和日志差异；兼容依据不足，暂不合并。

- 2026-09-30：整理 `1.1.1.0` 收录草稿；依据[作者投稿 #11](https://github.com/EFrostBlade/pvz-zj-mods/issues/11)、作品发布页和 GitHub Release 包静态核对，保留兼容声明差异与未实测边界。
