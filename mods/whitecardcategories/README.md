# 白卡分类

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

在选卡界面增加白卡标签分类、自动归类和可记忆的字号设置。

> 收录草稿：GitHub 2.3.0 已静态核验；网盘包字节摘要不同，作者称内部内容一致，尚待补充内部文件摘要。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `whitecardcategories` |
| 作者 | apples1949（投稿与发布账号；包内 author 为“本地”） |
| 主分类 | 综合扩展 |
| 标签 | 选卡界面、分类筛选、标签 |
| 当前收录版本 | `2.3.0` |
| 适用游戏版本 | 作者在[投稿 #19](https://github.com/EFrostBlade/pvz-zj-mods/issues/19)声明 0.29；维护者未实测 |
| 平台 | 未确认 |
| 前置依赖 | 作者投稿声明无；包清单 dependencies 为空 |
| 已知冲突 | 作者投稿声明无；空 conflicts 清单不代表组合已验证 |
| 联机说明 | 未确认；不将投稿中的“无”解释为支持联机 |
| 作者维护状态 | 未确认 |
| 信息核对日期 | 2026-10-08 |

## 内容介绍

依据[作者投稿 #19](https://github.com/EFrostBlade/pvz-zj-mods/issues/19)与实际包清单：在选卡界面右侧“僵尸卡”下方增加“白卡分类”，按攻击、生产、职能、系列、属性五大类和 71 个标签筛选白卡，一张卡可属于多个标签。作者说明内置表覆盖 188 株白卡，并自动识别新增白卡，无法判断时归入“其他”。

支持显示所有标签及返回大类；2.3.0 增加字号 16/18/20/22/24/26，按钮布局随字号调整，选择保存在 `user://WhiteCardCategories.cfg`。上述为作者说明，维护者未验证游戏效果。[作者演示](https://www.bilibili.com/video/BV1ocaZ6zEKd)。

## 作者与下载

- 作者主页：[apples1949](https://github.com/apples1949)。
- 原始发布页：[2.3.0 Release](https://github.com/apples1949/pvzhe-WhiteCardCategories/releases/tag/upload)。
- 下载入口：[作者网盘（蓝奏云）](https://apples1949.lanzouc.com/b007uuknqd)，密码 `762b`；[作者补充说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/25#issuecomment-6060160375)称无需登录、长期有效并随更新覆盖同名文件。网盘 ZIP 内 `.pmod` 声明为 19,822 B、SHA-256 `5be0b27540b9c73df416db1b7f9074305f491b4f465f3b6b3ce97ff4abb79644`，与 GitHub 附件字节不同；作者称只有 ZIP 时间戳不同、内部清单与 DLL 相同，维护者未取得网盘 ZIP，尚未独立验证此说法。
- 补充核对来源：[GitHub 实际附件](https://github.com/apples1949/pvzhe-WhiteCardCategories/releases/download/upload/WhiteCardCategories.pmod)，公开下载，附件可被作者替换。
- 作者反馈入口：[投稿 #19](https://github.com/EFrostBlade/pvz-zj-mods/issues/19)。
- 源码：[作者工程](https://github.com/apples1949/pvzhe-WhiteCardCategories)；未执行脚本或编译。
- 授权说明：未提供明确授权说明；公开源码不等于允许任意再分发。

## 安装与使用

按[通用导入步骤](../../guides/players/README.md)导入 `.pmod`，平台支持未确认。进入选卡界面使用“白卡分类”。本包含托管运行时插件 `Runtime/ModAssembly.dll`，入口 `WhiteCardCategoriesEntry`，策略为 `optional`；不保证插件未加载时功能完整。

## 兼容依据与实测记录

游戏版本与功能来自作者投稿。维护者和社区独立实测：暂无记录。

2026-10-08 重新下载实际 GitHub 附件：19,822 B，SHA-256 `c92fface4c86caf28208494bff6280ddb26e0a9f6af0a909efd6ee4dd5412078`，与 GitHub digest 一致。实际 `mod.json` 的 ID 为 `whitecardcategories`、版本 `2.3.0`、作者 `本地`，dependencies/conflicts 均为空。

ZIP 只有两项：`mod.json`（2,071 B，SHA-256 `eff909a71e7de80d0d09b9fb133b646facbe606b2fa646685ec82aa5d542ae5f`）及 `Runtime/ModAssembly.dll`（42,496 B，SHA-256 `ebdb40154d360d4ea2145a81e794441cdae18b90bd1ec3c4c0cf658448209886`）。无路径越界、符号链接或重复文件名；仅静态读取，未执行包内代码，不构成运行安全或兼容保证。

## 已知问题

网盘与 GitHub 包摘要差异待补充内部文件摘要；未把“内容一致”记为逐字节一致。平台与联机支持未确认。

## 条目更新记录

- 2026-10-08：依据投稿 #19、[作者补充说明](https://github.com/EFrostBlade/pvz-zj-mods/issues/25#issuecomment-6060160375)及 GitHub 实际包整理 2.3.0 草稿。原 GitHub 1.2.1（13,318 B，SHA-256 `ba7e5436dfaa80af665959e801905bcc55bfd0dcc15c77c5bfbde67eaacf1022`）已被替换，旧摘要仅为历史记录。
