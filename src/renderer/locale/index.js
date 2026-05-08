// Renderer process locale utility
import store from '../store'

const zhCN = {
  'New File': '新建文件',
  'New Directory': '新建目录',
  Copy: '复制',
  Cut: '剪切',
  Paste: '粘贴',
  Rename: '重命名',
  'Move To Trash': '移到废纸篓',
  'Show In Folder': '在文件夹中显示',
  Close: '关闭',
  'Close others': '关闭其他',
  'Close saved tabs': '关闭已保存标签',
  'Close all tabs': '关闭所有标签',
  'Copy path': '复制路径',
  'Copy File Path': '复制文件路径',
  'Copy As Markdown': '复制为 Markdown',
  'Copy As Html': '复制为 HTML',
  'Paste as Plain Text': '粘贴为纯文本',
  'Insert Paragraph Before': '前插段落',
  'Insert Paragraph After': '后插段落',
  Delete: '删除',
  'Sort by': '排序方式',
  'Creation time': '创建时间',
  'Modification time': '修改时间',
  Title: '标题',
  'Set as Projects Folder': '设为项目文件夹',
  'Pin to Top': '置顶',
  Unpin: '取消置顶',
  'Add File': '添加文件',
  'Add Directory': '添加目录',
  'Delete Permanently': '永久删除',
  'Remove from File Tree': '从文件树移除',
  'Spelling...': '拼写检查...',
  'Open in Default Manager': '在文件管理器中打开',
  'Open in New Window': '在新窗口中打开',
  'Reveal in Finder': '在 Finder 中显示',
  'Copy File Path (Unix)': '复制文件路径 (Unix)',
  'Copy File Path (Windows)': '复制文件路径 (Windows)',
  'Copy as Plain Text': '复制为纯文本',
  'Insert File Path': '插入文件路径',
  'Show in folder': '在文件夹中显示'
}

export function getLocale () {
  const lang = (store.state.preferences && store.state.preferences.language) || 'en'
  switch (lang) {
    case 'zh-CN':
      return zhCN
    default:
      return {}
  }
}

export function t (locale, key) {
  return locale[key] || key
}

export function tLabel (locale, item) {
  if (item.label) {
    return { ...item, label: locale[item.label] || item.label }
  }
  return item
}
