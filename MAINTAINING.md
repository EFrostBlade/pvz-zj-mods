# 维护说明

[返回首页](README.md) · [投稿规则](CONTRIBUTING.md)

## 首版边界

使用 Markdown、GitHub Issue 表单和 PR 模板，人工审核资料。已收录作品见 [Mod 目录](catalog.md)。安装包由作者维护；收录审核不要求运行投稿包，实测作为独立记录维护。首版以 GitHub 文档形式提供内容。

资料来源和实测结论分别维护。维护者填写的信息核对日期，表示核对链接和资料的日期，不表示试玩日期。

## 指南版本依据

- 目标游戏版本：**0.29.0**；游戏运行时版本字段为 `0.29.0.0`。
- 源码基线：`bf77fb51132cbd231c823a24ebb823a3a003d9d7`。
- 核对日期：2026-09-26。
- 本轮依据：已同步远端源码、正式 UI 实现及已有说明；没有新运行游戏、编译或执行游戏代码测试。
- `project.godot` 中遗留的版本字符串不是本指南的发行版本依据。

维护者可以对照以下游戏源码位置。指南正文保持自包含，普通读者不需要访问源码仓库。

| 内容 | 核对依据 |
| --- | --- |
| 运行版本 | `Core/Global/Global.cs` |
| 管理、导入、启停与删除 | `addons/ModEditor/Tools/GUI/XWModToolsPanel.cs` 及 `XWModToolsPanel.PlayerManagement.cs` |
| 游玩、制作与进度恢复入口 | `addons/ModEditor/Tools/GUI/XWModToolsPanel.Experience.cs` |
| 可玩关卡创建 | `addons/ModEditor/FileSystem/XWResourceCreateRoute.cs`、`XWNewLevelResourceDefaults.cs` |
| 导出与校验 | `addons/ModEditor/ModEditorPanel.cs`、`ModSystem/Validation/XWModProjectContentValidation.cs` |
| 平台、依赖和联机 | `docs/mod-runtime.md`、`docs/mod-installation-platform.md`、`docs/mod-compatibility.md` |
| 0.29 流程与原有验收边界 | `docs/mod-experience-0.29.md` |

文档中的“源码核对，未重新实机验证”只描述本轮工作；已有工程验收记录不自动成为本目录维护者的新实测记录。

## 投稿处理

1. 检查 ID 是否重复，更新投稿是否指向已有条目。
2. 核对作者来源、发布页、下载入口和访问条件。暂时打不开的地址需要补充可核对依据。
3. 检查模板字段、分类、版本和兼容信息来源；资料不足时回复缺失项并标注“待补充”。
4. 用统一模板整理详情页，同时更新分类目录。无需复制安装包。
5. 检查内部链接与 GitHub 渲染效果，再合并并在投稿 Issue 中附条目链接。

Issue 表单没有预设负责人或标签，因此无需先创建标签也能使用。投稿通过 GitHub Issues 接收，表单由默认分支 `main` 提供。

## 更新与失效链接

处理更新时保留历史实测的版本范围。每月抽查目录入口及近期活跃作品链接；偶发网络错误先重试或换时段核对，不直接认定作品下架。确认失效后在条目注明日期并接受补充来源。

确认作者撤下请求后移除列表与详情；检查是否还有其他条目依赖该页，必要时改为文字说明和可用的作者来源。

## 发布前检查

- 首页四个入口可用；分类链接、条目返回链接和指南导航可用。
- 一个 Mod ID 只有一个详情页，分类目录中只出现一次。
- 必填资料完整，作者声明和实测记录有对应来源；未知值没有被改写成兼容承诺。
- 三种 Issue 表单字段能覆盖新增、更新/撤下、反馈；PR 模板与收录规则一致。
- 使用虚构数据演练表单和条目模板时，不把演练作品加入正式目录。
- 指南注明目标版本与验证状态，没有本地绝对路径或依赖私有源码访问的步骤。
- 改动只包含目录资料；没有 `.pmod`、凭据或构建产物。

本地可检查 Markdown 链接、表单 YAML 和字段一致性；线上表单渲染、真实 Issue/PR 提交须在仓库发布后核验，不能用本地解析通过替代。本仓库暂未指定统一内容许可；Mod 本身仍遵循作者授权。
