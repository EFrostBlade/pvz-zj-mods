# 维护说明

[返回首页](README.md) · [投稿规则](CONTRIBUTING.md)

## 内容与网站

使用 Markdown、GitHub Issue 表单和 PR 模板，人工审核资料。已收录作品见 [Mod 目录](catalog.md)。安装包由作者维护；收录审核不要求运行投稿包，实测作为独立记录维护。GitHub 文档与 VitePress 网站共用这些资料，网站不维护第二份作品清单。

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
- 改动限于当前任务的目录资料或网站功能；没有 `.pmod`、凭据或构建产物。

本地可检查 Markdown 链接、表单 YAML 和字段一致性；线上表单渲染、真实 Issue/PR 提交须在仓库发布后核验，不能用本地解析通过替代。本仓库暂未指定统一内容许可；Mod 本身仍遵循作者授权。

## 网站开发与发布

网站使用 Node.js 24、npm、VitePress 1.6.4 和 Vue 3。提交依赖锁文件，安装使用 `npm ci`。VitePress 默认依赖的旧 Vite 存在开发服务器安全问题，本仓库通过 `overrides` 固定为已修补的 Vite 6.4.3；升级相关依赖时须重新核对审计、构建、搜索和浏览器检查。

```sh
npm ci
npm run docs:dev
```

开发地址按终端提示访问，路径前缀为 `/pvz-zj-mods/`。发布前执行：

```sh
npm test
npm run docs:build
npx playwright install chromium
npm run test:e2e
```

`npm run check:content` 检查必填字段、日期、重复 ID、分类与排序、遗漏的目录入口、内部文档链接及锚点；`npm test` 验证读取和筛选逻辑。`npm run test:e2e` 使用桌面及手机尺寸验证生产构建的导航、筛选、中文搜索、深层链接和明暗主题。浏览器截图和失败轨迹位于已忽略的 `test-results/`，均不代表 Mod 实机验收。

仅需查看生产构建时运行 `npm run docs:preview`。构建后应重新启动预览进程，避免预览服务器持有旧资源列表。开发、预览和浏览器验证结束后关闭本次启动的进程。

### 资料如何成为页面

- `catalog.md` 是目录入口与短简介的来源；详情页的标题和资料表格提供其他卡片字段。未知兼容状态始终保留在详情说明中，不转换为兼容性筛选或承诺。
- 各层 `README.md` 仅在网站构建时重写为目录首页，站内链接同步转换，GitHub 原文链接保持不变；文件夹名称与真实 Mod ID 可以不同。
- 分类、标签和关键词筛选使用 URL 查询参数，可分享及恢复；旧分类锚点也会选中对应分类。
- 全文搜索在浏览器本地运行。索引和查询使用同一中文分词规则，保留英文与 Mod ID；维护说明与目录组织说明不进入玩家搜索结果。
- 网站只构建根目录说明、指南和 Mod 文档。测试资料与 GitHub 模板不进入网站；未加入目录的 Mod 会使内容检查失败。

### 自动检查与上线

GitHub Actions 对 PR 和 `main` 执行单元测试、内容检查、生产构建和浏览器检查。PR 任务只有仓库读取权限，不发布正式站；审核与合并仍由维护者负责。

仓库 Pages 的 Source 选择 **GitHub Actions**。仅 `main` 检查通过后向 `github-pages` 环境发布，地址为 [社区网站](https://efrostblade.github.io/pvz-zj-mods/)。发布权限仅授予部署任务。失败的构建不会覆盖上一次成功部署，浏览器失败产物保留 7 天。

上线后检查首页、目录、一个作品详情及指南的直接访问和刷新，并确认线上显示的资料与对应提交一致。需要回滚时，回退引入问题的提交并重新部署；不重写公开历史。待审核 PR 不应为网站上线而提前合并。
