# MarkText 中文版

> 基于 [MarkText](https://github.com/marktext/marktext) v0.17.1 的简体中文汉化版本

MarkText 是一款开源、跨平台的 Markdown 编辑器。本项目在原版基础上进行了全面的简体中文本地化。**构建产物可在 macOS、Windows、Linux 上原生运行**（工作流配置三平台自动构建）。

## 汉化范围

| 模块 | 说明 |
|------|------|
| ✅ 主菜单栏 | 文件、编辑、段落、格式、视图、窗口、主题、帮助，包括 macOS 应用菜单 |
| ✅ 右键菜单 | 编辑器内右键菜单、标签页右键菜单、侧边栏右键菜单 |
| ✅ 偏好设置 | 通用、编辑器、Markdown、主题、图片、拼写、快捷键 — 全部 7 个设置页面 |
| ✅ 快捷键描述 | 快捷键设置页面中的完整命令描述列表 |
| ✅ 格式工具栏 | 选中文字后浮现的加粗/斜体/下划线等按钮的 tooltip |
| ✅ 退出保存对话框 | "是否保存更改"提示框及其按钮 |
| ✅ 重命名覆盖提示 | 文件重命名冲突时的确认对话框 |
| ✅ Element-UI 组件 | 按钮、对话框、选择器、日期选择器等 UI 组件文字 |

> 偏好设置中的「界面语言」下拉框为原版自带的只读选项，实际语言跟随此汉化版固定为简体中文，不支持动态切换。

## 安装

### macOS

从 [Releases](https://github.com/YOUR_USERNAME/marktext-zh/releases) 下载 `MarkText-zh-*.dmg`，打开后拖入 Applications 文件夹。

### Windows

下载 `MarkText-zh-*.exe`，双击安装。

### Linux

下载 `MarkText-zh-*.AppImage`，赋予执行权限后运行：

```bash
chmod +x MarkText-zh-*.AppImage
./MarkText-zh-*.AppImage
```

**注**：各平台安装包由 GitHub Actions 自动构建，在 `Actions` 页面下载 Artifact 或在 Releases 页面获取。

## 从源码构建

```bash
git clone https://github.com/YOUR_USERNAME/marktext-zh.git
cd marktext-zh
npm install --legacy-peer-deps

# macOS
npm run release:mac

# Windows
npm run release:win

# Linux
npm run release:linux
```

构建产物在 `build/` 目录下。

## 翻译维护

所有中文翻译集中在以下文件中，方便后续更新：

| 文件 | 内容 |
|------|------|
| `src/main/locale/zh-CN.js` | 主进程菜单、右键菜单 |
| `src/main/locale/index.js` | 主进程语言加载器 |
| `src/renderer/locale/settings-zh-CN.js` | 设置页面翻译 |
| `src/renderer/commands/descriptions-zh-CN.js` | 快捷键描述翻译 |
| `src/renderer/locale/index.js` | 渲染进程右键菜单翻译 |

## 更新上游

如需同步上游 MarkText 新版本：

```bash
git remote add upstream https://github.com/marktext/marktext.git
git fetch upstream
git merge upstream/v0.17.2   # 合并新版本
# 如有冲突，保留我们的翻译文件，解决冲突后重新构建
```

## 致谢

- [MarkText](https://github.com/marktext/marktext) — 优秀的开源 Markdown 编辑器

## License

[MIT](LICENSE)
