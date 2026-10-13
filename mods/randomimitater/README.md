# 随机模仿者

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

新增钻卡植物“随机模仿者”，种下后随机开出一株植物或一只敌对僵尸，支持游戏内调整概率与阳光消耗。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `randomimitater` |
| 作者 | 小橙c（投稿与发布账号 Xcheng-dada） |
| 主分类 | 角色与卡牌 |
| 标签 | 新植物、钻卡、随机、模仿者、地形 |
| 当前收录版本 | `1.9.1` |
| 适用游戏版本 | 作者声明仅 `0.30.0`，并报告本版测试通过；维护者未实测 |
| 平台 | 作者声明并报告测试：Windows；Android 未确认 |
| 前置依赖 | 作者声明：无；实际包 dependencies 为空 |
| 已知冲突 | 作者声明无已知冲突；与改动模仿者、种植扩展点或右键输入的其他 Mod 组合未确认，详见下文 |
| 联机说明 | 未确认；清单的玩法配置标记不代表联机兼容已验证 |
| 作者维护状态 | 维护中（[作者投稿 #30](https://github.com/EFrostBlade/pvz-zj-mods/issues/30)，2026-10-13） |
| 信息核对日期 | 2026-10-13 |

## 内容介绍

依据[作者投稿 #30](https://github.com/EFrostBlade/pvz-zj-mods/issues/30)、[v1.9.1 Release](https://github.com/Xcheng-dada/pvzhe-RandomImitater/releases/tag/v1.9.1)与[作者说明](https://github.com/Xcheng-dada/pvzhe-RandomImitater/blob/4ada024dd9612930ddedc8ef5582c3297106eb2b/README.md)：

- 默认约 65% 开出植物、35% 开出敌对僵尸；作者称同类卡等概率，BOSS 与巨人也在随机池中，没有排除开关。
- 默认 0 阳光、冷却 7.5 秒、本体 1000 血，会被僵尸啃咬；这些默认值与包内静态配置一致。
- 无需解锁，在“Mod 植物”页签选取；作者称也会加入关卡已有的“钻卡”页签，两处是同一张卡，支持重复选取。
- `1.9.1` 扩展种植范围：草地、泥地、砖地、水面、花盆、睡莲、墓碑、弹坑、南瓜壳内及咖啡豆所在格；已有实体植物的格子会被拦截，作者称不扣阳光、不进入冷却，落点预览也同步隐藏。
- 作者称变身时临时放宽抽出植物的地形要求，随后还原，以保持不同地形上的植物/僵尸比例接近配置值；维护者未验证运行时行为或统计分布。
- 附带右键放行小推车：战斗中右键点中某台仍可用的推车即可立即发车，没有开关；选卡、结算或暂停时不响应。

## 作者与下载

- 作者主页：[Xcheng-dada](https://github.com/Xcheng-dada)。投稿账号与公开工程所有者、Release 发布者一致，README 与包内作者均为“小橙c”。
- 原始发布页：[随机模仿者工程与说明](https://github.com/Xcheng-dada/pvzhe-RandomImitater)。
- 下载入口：[v1.9.1 Release](https://github.com/Xcheng-dada/pvzhe-RandomImitater/releases/tag/v1.9.1)，选择 `RandomImitater.pmod`；[作者原始附件](https://github.com/Xcheng-dada/pvzhe-RandomImitater/releases/download/v1.9.1/RandomImitater.pmod)。作者声明公开、免登录，本轮已下载并静态核验。
- 作者反馈入口：[作者仓库 Issues](https://github.com/Xcheng-dada/pvzhe-RandomImitater/issues)。
- 源码：[公开工程](https://github.com/Xcheng-dada/pvzhe-RandomImitater)；未编译或执行。
- 授权说明：作者允许下载游玩和分享原始链接；转载、搬运、二次上传安装包、修改后发布或打包进整合包均需先取得作者授权。公开源码不代表允许转载或再发布，详见[作者授权说明](https://github.com/Xcheng-dada/pvzhe-RandomImitater/blob/4ada024dd9612930ddedc8ef5582c3297106eb2b/README.md#授权与维护)。本目录仅提供原始入口。

## 安装与使用

1. 按 [Windows 安装指南](../../guides/players/windows.md)导入 `.pmod`、启用并完全退出游戏后重启；升级时也需重启以加载新程序集。
2. 在选卡界面选取“随机模仿者”，种下后变身。含托管插件 `Runtime/ModAssembly.dll`，入口 `RandomImitaterEntry`，策略 `optional`；空依赖清单不代表纯资源包。
3. 在“Mod 管理 → 随机模仿者 → 配置”中调整下列选项并保存。作者说明保存后立即生效，重新打开图鉴或卡面可查看更新值。

| 配置项 | 默认值 | 范围与作用 |
| --- | --- | --- |
| 开出植物的概率 | 65 | 0～100，步长 5；其余概率开出敌对僵尸 |
| 阳光消耗 | 0 | 0～1500，步长 25 |
| 随机模仿者不变白 | 开 | 保留本 Mod 产物的原本配色，不改变原生模仿者 |

清单三项均为 `applyMode=immediate`；概率和阳光消耗标记 `affectsGameplay=true`，配色开关为 `false`。这些是静态字段，不构成联机验证。

## 兼容依据与实测记录

2026-10-13，作者在[投稿 #30](https://github.com/EFrostBlade/pvz-zj-mods/issues/30)将本次收录明确更新为 `1.9.1`，现行适用范围收窄为 Windows / `0.30.0`，与当前 Release、README 一致。作者声明旧 Release 的宽泛兼容表述已作废，并明确 `1.6.0` 未单独实测；不沿用旧说明推断 `0.29.0` 或其他版本兼容。

静态包核对（2026-10-13）：重新下载实际附件，26,212 B，SHA-256 `38c84e4fd4ffe2fc6330cf330f374121e63d4cf6a9817d3ae4fe0e8ba189a873`，与 GitHub 资产摘要、Release 和投稿一致。ZIP 共 8 个文件，未见路径越界、符号链接或重复路径；`mod.json` 为 `randomimitater` / `1.9.1` / 小橙c。dependencies、conflicts、overrides 均为空，provides 含 Character / CharacterSprite / Packet 各 1 项；清单引用的 7 项资源均存在，包含 42,496 B 的运行时 DLL。仅查看文件列表、清单与文本配置，未执行包内代码，不构成运行安全或兼容保证。

以下为作者在[投稿 #30](https://github.com/EFrostBlade/pvz-zj-mods/issues/30)提供的文字实测记录和日志摘录，维护者未复现、未独立核验原始日志：

| 日期 / 测试人 | Mod / 游戏 / 平台 | 同时启用 | 步骤与报告结果 |
| --- | --- | --- | --- |
| 2026-10-13 / 小橙c | `1.9.1` / `0.30.0` / Windows | randomimitater、stuckfix（后者版本未提供） | 在上述地形种植成功；已有植物的格子被拦截且不扣阳光、不进冷却、预览同步；作者观察地形不再使结果偏向僵尸；三项配置保存即生效、图鉴同步；右键可放行推车。日志摘录报告游戏 `0.30.0.0`、本 Mod 加载成功、占用格拦截接入及加入钻卡页签 |
| 2026-10-12 / 小橙c | `1.5.2` / `0.30.0` / Windows | randomimitater、stuckfix（后者版本未提供） | 配置保存生效、图鉴更新、右键放行推车通过；此记录不证明新版地形或钻卡改动 |
| 2026-10-10 / 小橙c | `1.1.0` / `0.30.0` / Windows | 仅 randomimitater | 卡片出现在 Mod 植物页签；可开出植物与敌对僵尸；重复选卡、重选上次卡牌、保存和读取六个选卡分组通过 |

历史下载仍由作者提供：[v1.5.2](https://github.com/Xcheng-dada/pvzhe-RandomImitater/releases/tag/v1.5.2)、[v1.1.0](https://github.com/Xcheng-dada/pvzhe-RandomImitater/releases/tag/v1.1.0)。历史记录仅对应表中版本与步骤，不延伸为当前版或任意 Mod 组合的兼容承诺。

社区独立实测：暂无记录。Android、联机及其他改动模仿者的 Mod 组合均未确认。

## 已知问题

- 作者声明钻卡不受按卡类改价的常规机制影响，但尚未与市场僵尸同场复测；依据是作者的静态分析与游戏文案，不写作本版实测结论。
- 与官方模仿者共用变身逻辑；其他 Mod 修改该逻辑可能相互影响。清单 conflicts/overrides 为空不代表无运行时冲突。
- 作者说明：若种植扩展点注册失败，已有植物的载体格可能仍允许叠种，日志会提示“种植扩展点没接上（叠种拦截不生效）”；此退化路径未与其他 Mod 交叉测试。
- 右键放行推车始终生效；与其他使用右键输入的 Mod 组合未确认。

## 条目更新记录

- 2026-10-13：首次收录 `1.9.1`；依据[作者投稿 #30](https://github.com/EFrostBlade/pvz-zj-mods/issues/30)、同步后的 Release/README 与实际附件静态核验，记录仅 Windows / `0.30.0` 的适用声明和分版本作者实测。
