# MarkText 中文版

> 基于 [MarkText](https://github.com/marktext/marktext) v0.17.1 的简体中文汉化版本

MarkText 是一款开源、跨平台的 Markdown 编辑器。本项目在原版基础上进行了全面的简体中文本地化。

## 汉化范围

| 模块 | 说明 |
|------|------|
| ✅ 主菜单栏 | 文件、编辑、段落、格式、视图、窗口、主题、帮助，包括 macOS 应用菜单 |
| ✅ 右键菜单 | 编辑器内右键菜单、标签页右键菜单、侧边栏右键菜单 |
| ✅ 偏好设置 | 通用、编辑器、Markdown、主题、图片、拼写、快捷键 — 全部 7 个设置页面 |
| ✅ 快捷键描述 | 快捷键设置页面中的完整命令描述列表 |
| ✅ 退出保存对话框 | "是否保存更改"提示框及其按钮 |
| ✅ 重命名覆盖提示 | 文件重命名冲突时的确认对话框 |
| ✅ Element-UI 组件 | 按钮、对话框、选择器、日期选择器等 UI 组件文字 |
| ✅ 语言切换 | 支持在「偏好设置 → 通用 → 界面语言」中切换中/英文 |

## 安装

### macOS

从 [Releases](https://github.com/YOUR_USERNAME/marktext-zh/releases) 页面下载最新版 DMG 文件，打开后拖入 Applications 文件夹即可。

### Windows / Linux

同上，下载对应平台的安装包。

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

所有中文翻译集中在以下文件中：

- `src/main/locale/zh-CN.js` — 主进程菜单、右键菜单
- `src/main/locale/index.js` — 主进程语言加载器
- `src/renderer/locale/settings-zh-CN.js` — 设置页面翻译
- `src/renderer/commands/descriptions-zh-CN.js` — 快捷键描述翻译
- `src/renderer/locale/index.js` — 渲染进程右键菜单翻译

## 致谢

- [MarkText](https://github.com/marktext/marktext) — 优秀的开源 Markdown 编辑器

## License

[MIT](LICENSE)
