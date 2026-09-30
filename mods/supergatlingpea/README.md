# 超级机枪射手

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

每 1.5 秒向前方发射一轮 7 颗豌豆，由插件逐颗出膛；每次攻击有 10% 概率触发大招——5 秒内倾泻约 300 颗豌豆。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `supergatlingpea` |
| 作者 | 云漫行 |
| 主分类 | 角色与卡牌 |
| 标签 | 齐射、大招、金卡、托管插件 |
| 当前收录版本 | `1.0.5.0` |
| 适用游戏版本 | 作者更新投稿声明：`0.29`；合集 Release 通用说明仍写 `0.28`，来源差异见下文；维护者未实测 |
| 平台 | 作者声明：Windows；Android 未确认 |
| 前置依赖 | 作者声明：无；维护者已核对本版 Release 包清单，`dependencies` 为空 |
| 已知冲突 | 作者声明：无；本版 Release 包清单 `conflicts` 为空，不代表兼容性实测。另据历史报告：[cd显示（血条·装填倒计时）](../healthcooldowndisplay/README.md) 作者曾在 `1.7.8` 投稿时报告与自定义植物、僵尸类 Mod 冲突；其 `1.14.1` 是否解决及与本作品的具体兼容性未确认 |
| 联机说明 | 未确认，作者未提供联机说明或实测记录 |
| 作者维护状态 | 维护中（作者声明，2026-09-27） |
| 信息核对日期 | 2026-09-30 |

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
- 下载入口：[夸克网盘（本 Mod 独立分享）](https://pan.quark.cn/s/e3f000722fbf)。链接由[作者更新投稿 #12](https://github.com/EFrostBlade/pvz-zj-mods/issues/12)与发布站提供，作者声明公开、免提取码、永久有效；维护者未独立下载夸克分享内容，登录或客户端要求以网盘实际提示为准。
- 原始发布源：[GitHub Release 下载](https://github.com/josnil/pvz-mods/releases/download/v1.0.0/supergatlingpea.pmod)。合集 tag `v1.0.0` 不等于本 Mod 版本，所核对附件清单版本为 `1.0.5.0`。作者称与夸克内容一致，维护者未独立比对两个入口。
- 作者反馈入口：B 站视频评论区（见上）。
- 源码：[josnil/pvz-hybrid-mod-skills](https://github.com/josnil/pvz-hybrid-mod-skills)（`tools/plant/build_plant_super_gatling.py` 生成器与 `tools/plant/runtime_src_plant/` 插件源码，亦为作者快速上手指南的标准样板）。
- 授权说明：[合集 Release](https://github.com/josnil/pvz-mods/releases/tag/v1.0.0)注明“内容仅供学习交流，请勿商用”，游戏本体及原始美术素材版权归各自原作者；未提供本作品独立许可证。

## 安装与使用

1. 从上述下载入口获取 `.pmod`，按 [Windows 安装指南](../../guides/players/windows.md)导入、启用并重启。Android 兼容性未确认；通用导入步骤见 [Android 指南](../../guides/players/android.md)。
2. Mod 含托管运行时插件，随包自动加载；卡片在选卡界面出现（金卡），也可在图鉴中查看。

## 兼容依据与实测记录

作者声明：本版 `1.0.5.0` 适用游戏版本 `0.29`、平台 Windows，依据[作者更新投稿 #12](https://github.com/EFrostBlade/pvz-zj-mods/issues/12)。Android 与联机未确认。合集 [Release](https://github.com/josnil/pvz-mods/releases/tag/v1.0.0) 的通用说明仍写 `0.28`、未在 `0.29.0` 验证；本条目按较新的、针对本作品的投稿记录 `0.29` 声明，不将其视为维护者实测结论。历史收录版本 `1.0.0` 的 `0.28` 声明见[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)。

静态包核对（2026-09-30）：独立下载并只读检查 GitHub Release 附件（178,325 B；SHA-256：`69e0bde35b243c06a380fdd3486ebff408fe64144815da9d8a2edfeca302fd66`），摘要与 GitHub 资产元数据一致。`mod.json` 的 ID、版本、作者分别为 `supergatlingpea`、`1.0.5.0`、云漫行；`dependencies`、`conflicts` 为空，`provides` 含 Character / CharacterSprite / Packet 各 1 项。Config 的升级对象为 `PlantPeaShooter`，`canCopy = true`；ComponentSet 含 `fireEventName = "modfire"`；运行时 DLL 大小为 23,040 B。以上仅为清单和静态配置核对，未加载 DLL、安装或运行 Mod。

作者在 #12 报告新旧包的 Config、ComponentSet、Scene 和运行时 DLL 有变化，并说明两个包的 `mod.json` 版本同为 `1.0.5.0`；因此本次是将目录原记录 `1.0.0` 更正为 `1.0.5.0`，不据此断言旧包清单版本。新旧包逐文件差异尚未由维护者独立复核。
社区实测：暂无记录。

## 已知问题

未确认；作者未提供已知问题清单。

## 条目更新记录

- 2026-09-30：依据[作者更新投稿 #12](https://github.com/EFrostBlade/pvz-zj-mods/issues/12)、发布站与 Release 包静态核对，更新至 `1.0.5.0`，修正豌豆射手升级对象、替换夸克入口并补充 GitHub 下载与投影说明；保留游戏版本声明差异及未实测边界。
- 2026-09-28：核对[作者投稿 PR #4](https://github.com/EFrostBlade/pvz-zj-mods/pull/4)与作者发布站，整理下载入口、安装链接和兼容声明的来源及版本范围；未进行包内容或实机验证。
- 2026-09-27：首次收录 `1.0.0`；资料来源：[作者发布站详情页](https://josnil.github.io/pvz-mods/mod/supergatlingpea.html)，包清单字段依据作者投稿中的 `mod.json` 核对记录。
