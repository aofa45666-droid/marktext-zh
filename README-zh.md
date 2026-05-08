# MarkText 中文版

开源 Markdown 编辑器 · 完整简体中文本地化

---

## 快速下载

| 平台 | 安装包 | 说明 |
|------|--------|------|
| macOS（Intel） | `MarkText-zh-x64.dmg` | Intel 芯片 Mac |
| macOS（Apple Silicon） | `MarkText-zh-arm64.dmg` | M1/M2/M3/M4 Mac |
| Windows | `MarkText-zh-Setup-x64.exe` | Windows 10/11 64位 |
| Linux | `MarkText-zh-x86_64.AppImage` | Linux 桌面版 |

> ⬇️ **下载地址**：前往 [Releases 页面](https://github.com/aofa45666-droid/marktext-zh/releases) 选择最新版本，下载对应平台的安装包。

---

## 安装方法

### macOS

打开 `.dmg` 文件，将 MarkText 拖入「应用程序」文件夹。

首次打开如果提示「无法验证开发者」，需要在「系统设置 → 隐私与安全性」中点击「仍要打开」。

### Windows

双击 `.exe` 安装包，按提示完成安装。安装过程中可选择关联 `.md` 文件。

### Linux

```bash
chmod +x MarkText-zh-*.AppImage
./MarkText-zh-*.AppImage
```

---

## 汉化说明

本版本基于 MarkText v0.17.1 源码进行中文本地化，所有界面文字已翻译为简体中文：

- 主菜单栏、右键菜单
- 偏好设置（全部 7 个页面）
- 快捷键描述
- 选中文字的格式工具栏提示
- 退出保存对话框

**注意**：偏好设置中的「界面语言」下拉框为只读选项，本版本固定为简体中文，不支持切换语言。

---

## 从源码构建

```bash
git clone https://github.com/aofa45666-droid/marktext-zh.git
cd marktext-zh
npm install --legacy-peer-deps
npm run release:mac      # macOS
npm run release:win      # Windows
npm run release:linux    # Linux
```

构建产物在 `build/` 目录下。

---

## 许可证

本项目基于 MIT 许可证发布。
