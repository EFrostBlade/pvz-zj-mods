# FPS 显示

[返回目录](../../catalog.md) · [安装指南](../../guides/players/README.md)

在屏幕上显示实时 FPS 数字，带黑色描边，并随窗口尺寸和横竖版切换调整位置。

| 项目 | 内容 |
| --- | --- |
| Mod ID | `fpsdisplay` |
| 作者 | apples1949（投稿与发布账号；包内 author 为“本地”） |
| 主分类 | 工具与前置 |
| 标签 | 帧率显示、性能监控 |
| 当前收录版本 | `1.0.1` |
| 适用游戏版本 | 作者在[投稿 #28](https://github.com/EFrostBlade/pvz-zj-mods/issues/28)声明并报告测试 `0.29.0`；维护者未实测 |
| 平台 | 作者报告 Windows、Android 测试通过；维护者未实测 |
| 前置依赖 | 作者声明无；实际包 dependencies 为空 |
| 已知冲突 | 未确认；包内 conflicts 为空不代表兼容性已验证 |
| 联机说明 | 未确认；作者称纯本地显示，不涉及网络，不据此承诺联机兼容 |
| 作者维护状态 | 未确认 |
| 信息核对日期 | 2026-10-09 |

## 内容介绍

依据[作者公开说明](https://github.com/apples1949/pvzhe-FpsDisplay)及[投稿 #28](https://github.com/EFrostBlade/pvz-zj-mods/issues/28)：

- 实时 FPS 以纯数字显示，带 4px 黑描边，默认位于左上角。
- 独立显示层避免被战斗界面覆盖；标签不接收鼠标点击，位置随视口尺寸重新计算。
- `1.0.1` 改用真实时间间隔累计帧数，以约 0.5 秒窗口刷新，跳过超过 1 秒的异常间隔。作者称修复了 Android 改变 FPS 上限后旧统计值不刷新的问题。
- 作者称本 Mod 仅显示数据，不修改游戏逻辑；以上为作者说明，维护者未验证运行行为。

## 作者与下载

- 作者主页：[apples1949](https://github.com/apples1949)。投稿账号与源码仓库所有者、Release 发布者一致。
- 原始发布页：[作者工程与说明](https://github.com/apples1949/pvzhe-FpsDisplay)。
- 下载入口：[GitHub Release 1.0.1](https://github.com/apples1949/pvzhe-FpsDisplay/releases/tag/upload)，选择 `FpsDisplay.pmod`；[直接下载](https://github.com/apples1949/pvzhe-FpsDisplay/releases/download/upload/FpsDisplay.pmod)，本轮公开下载成功，无需登录。`upload` 为发布标签，不是 Mod 版本；同名附件可能被替换。
- 其他作者下载入口：[蓝奏云分享目录](https://apples1949.lanzouc.com/b007uuknqd)，作者提供密码 `762b`；维护者未下载核验该副本，版本对应关系及登录要求未确认。
- 作者反馈入口：[作者投稿 #28](https://github.com/EFrostBlade/pvz-zj-mods/issues/28)。
- 源码：[公开工程](https://github.com/apples1949/pvzhe-FpsDisplay)；未编译或执行。
- 授权说明：未提供独立许可证；公开源码不等于允许任意再分发。

## 安装与使用

按 [Windows](../../guides/players/windows.md) 或 [Android](../../guides/players/android.md) 指南导入、启用并重启。作者报告主菜单和关卡内均可显示数值。

包含托管插件 `Runtime/ModAssembly.dll`，入口 `FpsDisplayEntry`，策略 `optional`；空依赖清单不代表纯资源包。作者说明位置、字号、颜色等为源码内部设置，修改后需重新构建，不是已确认的游戏内设置入口。

## 兼容依据与实测记录

2026-10-09 静态核对 GitHub 实际附件：4,674 B，SHA-256 `c815eb42e14ea5bd2515bc44f4f43fac4b78981ffe7139aefe0202d0d99fbc35`，与 GitHub 资产摘要一致。ZIP 共两项：`mod.json`（1,213 B）和 `Runtime/ModAssembly.dll`（7,680 B）；无路径越界或符号链接。清单 ID `fpsdisplay`、名称“FPS 显示”、版本 `1.0.1`、author `本地`，dependencies/conflicts 为空，清单引用的运行时 DLL 存在。仅查看清单和文件列表，未执行包内代码，不构成运行安全或兼容保证。

作者在[投稿 #28](https://github.com/EFrostBlade/pvz-zj-mods/issues/28)报告以下测试；[公开说明](https://github.com/apples1949/pvzhe-FpsDisplay)亦记录 Windows 与 Android 测试通过，维护者未复现：

- 游戏版本：`0.29.0`；Mod 版本：`1.0.0 / 1.0.1`；平台：Windows、Android。
- 同时启用：HealthCooldownLine、LevelQuickJump、UIExtraButtons、TimeStop、ImitaterClassic、MobileTapFeedback、WhiteCardCategories、DoubleSpeedToggle；各依赖外作品版本未提供，不扩展为任意版本组合的兼容承诺。
- Windows：主菜单与关卡内正常显示数字，随帧率变化，按钮点击不受影响。
- Android：正常显示；`1.0.1` 调整 FPS 上限后数值跟随变化。作者还报告横竖版切换及改变分辨率后位置自动跟随。
- 测试人：作者；日期：2026-10-09；证据为上述作者文字报告，未独立核验视频或日志。

社区独立实测：暂无记录。

## 已知问题

作者报告 `1.0.0` 在 Android 调整 FPS 上限后可能继续显示旧值，称 `1.0.1` 已修复。其他冲突、联机兼容及网盘副本对应关系未确认。

## 条目更新记录

- 2026-10-09：首次收录 `1.0.1`，依据[作者投稿 #28](https://github.com/EFrostBlade/pvz-zj-mods/issues/28)、公开说明和 GitHub Release 实际附件静态核验。
