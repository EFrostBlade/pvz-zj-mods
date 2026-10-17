# 超级机枪射手

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

每 1.5 秒向前方发射一轮 7 颗豌豆，由插件逐颗出膛；每次攻击有 10% 概率触发大招——5 秒内倾泻约 300 颗豌豆。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `supergatlingpea` |
| 作者 | 云漫行 |
| 主分类 | 角色与卡牌 |
| 标签 | 齐射、大招、金卡、托管插件 |
| 当前收录版本 | `1.0.5` |
| 适用游戏版本 | 作者当前 Release 声明：`0.30`；本批包按该版本构建，`0.28` / `0.29` 未逐项回归；维护者未实测 |
| 平台 | 作者声明：Windows；Android 未确认 |
| 前置依赖 | 作者声明：无；维护者已核对本版 Release 包清单，`dependencies` 为空 |
| 已知冲突 | 作者旧投稿声明：无；本版 Release 包清单 `conflicts` 为空，不代表兼容性实测。[cd显示（血条·装填倒计时）](../healthcooldowndisplay/README.md) 曾在 `1.7.8` 投稿时报告与自定义植物、僵尸类 Mod 冲突；该历史报告不自动适用于新版，与本作品当前版本的组合兼容性未确认 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 维护中（作者声明及 2026-10-17 发布资料更新） |
| 信息核对日期 | 2026-10-17 |

## 内容介绍

- 金卡：阳光 600、冷却 30.0s、血量 1000；射速 1.5s，每轮 7 颗、弹速 500。
- 地形要求：空地可直接种，也可种在豌豆射手上升级（包内 `plantCover = ["PlantPeaShooter"]`）。
- 大招：每次攻击 10% 概率触发，持续 5 秒（约 300 颗豌豆）。
- 数据侧保留多弹道配置，使用 `fireEventName = "modfire"`；大招概率与逐颗发射由托管运行时插件驱动（`Runtime/ModAssembly.dll`，入口 `SuperGatlingPeaRuntimeEntry`）。
- 作者说明：全息投影花盆（PotQX）现在可投影本植物；包内已核对 `canCopy = true`。
- 可进选卡界面与图鉴。

## 作者与下载

- 作者主页：[云漫行的发布视频（bilibili）](https://www.bilibili.com/video/BV1hthU6TEjF/)；作者身份依据[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)的本人声明与作品发布站。
- 原始发布页：[josnil 的杂交版 Mod 存放站 · 本作品详情页](https://josnil.github.io/pvz-mods/mod/supergatlingpea.html)。
- 下载入口：[GitHub Release 下载](https://github.com/josnil/pvz-mods/releases/download/v1.0.0/supergatlingpea.pmod)。公开附件无需登录；合集 tag `v1.0.0` 不等于本 Mod 版本，2026-10-17 所核对附件清单版本为 `1.0.5`。
- 其他作者入口：[夸克网盘（本 Mod 独立分享）](https://pan.quark.cn/s/0fb95b4b0e26)，来自本轮作者详情页。作者站点声明与 GitHub 内容一致、免登录；维护者未访问或比对当前夸克副本，访问条件以网盘实际提示为准，不沿用旧分享的版本保证。
- 作者反馈入口：B 站视频评论区（见上）。
- 源码：[josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills)（`tools/plant/build_plant_super_gatling.py` 生成器与 `tools/plant/runtime_src_plant/` 插件源码，亦为作者快速上手指南的标准样板）。
- 授权说明：[合集 Release](https://github.com/josnil/pvz-mods/releases/tag/v1.0.0)注明“内容仅供学习交流，请勿商用”，游戏本体及原始美术素材版权归各自原作者；未提供本作品独立许可证。

## 安装与使用

1. 从上述下载入口获取 `.pmod`，按 [Windows 安装指南](../../guides/players/windows.md)导入、启用并重启。Android 兼容性未确认；通用导入步骤见 [Android 指南](../../guides/players/android.md)。
2. Mod 含托管运行时插件，随包自动加载；卡片在选卡界面出现（金卡），也可在图鉴中查看。

## 兼容依据与实测记录

2026-10-17 复核：重新下载当前 Release 包，清单版本已为 **`1.0.5`、178,323 B、12 个文件**，SHA-256 `e9b4d4f256c6c7126b239bcc1a2e015a05475a9e2fa6a4d9d95cff347660b1db`，与 GitHub 当前摘要一致。[作者详情页固定版本](https://github.com/josnil/pvz-mods/blob/605fb59a0e9cb373f5ac6343c0093dca0abd492d/mod/supergatlingpea.html)同样标为 `1.0.5`；合集 Release 已说明四段旧版本迁移为三段语义化版本。

作者当前[合集 Release](https://github.com/josnil/pvz-mods/releases/tag/v1.0.0)声明本批包按 `0.30` 解包与工具链构建，平台 Windows，`0.28` / `0.29` 未逐项回归。该说明覆盖当前附件，属于作者适用声明，不是实机验收记录。旧[更新投稿 #12](https://github.com/EFrostBlade/pvz-zj-mods/issues/12)的 Windows / `0.29` 声明保留在 `1.0.5.0` 的历史范围；更早 `1.0.0` 的 `0.28` 声明见[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)，均不扩展到本轮替换的包。Android、联机及其他游戏版本未确认。

当前包静态核对：`mod.json` 的 ID、版本、作者分别为 `supergatlingpea`、`1.0.5`、云漫行；`dependencies`、`conflicts` 为空，`provides` 含 Character / CharacterSprite / Packet 各 1 项。Config 的升级对象为 `PlantPeaShooter`，`canCopy = true`；ComponentSet 含 `fireEventName = "modfire"`；运行时 DLL 大小为 23,040 B。清单声明的资源、翻译表和运行时均存在，完整文件列表、CRC、路径、重复路径及符号链接检查通过。未加载 DLL、安装或运行 Mod。

历史包记录：2026-09-30 与 2026-10-08 核对的 `1.0.5.0` 包为 178,325 B，SHA-256 `69e0bde35b243c06a380fdd3486ebff408fe64144815da9d8a2edfeca302fd66`；该摘要不再标识当前下载。作者在 #12 报告其旧包 Config、ComponentSet、Scene 与 DLL 的变化，未由维护者独立完成新旧包逐文件比对；不据此推定最早 `1.0.0` 下载包的清单版本。
社区实测：暂无记录。

## 已知问题

未确认；作者未提供已知问题清单。

## 条目更新记录

- 2026-10-17：草稿同步当前附件 `1.0.5`、作者 Windows / `0.30` 声明、下载入口与完整摘要；保留旧版声明和未实测边界。
- 2026-09-30：依据[作者更新投稿 #12](https://github.com/EFrostBlade/pvz-zj-mods/issues/12)、发布站与 Release 包静态核对，更新至 `1.0.5.0`，修正豌豆射手升级对象、替换夸克入口并补充 GitHub 下载与投影说明；保留游戏版本声明差异及未实测边界。
- 2026-09-28：核对[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)与作者发布站，整理下载入口、安装链接和兼容声明的来源及版本范围；未进行包内容或实机验证。
- 2026-09-27：首次收录 `1.0.0`；资料来源：[作者发布站详情页](https://josnil.github.io/pvz-mods/mod/supergatlingpea.html)，包清单字段依据作者投稿中的 `mod.json` 核对记录。
