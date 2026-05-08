import { isOsx } from '../../config'
import strongIcon from '../../assets/pngicon/format_strong/2.png'
import emphasisIcon from '../../assets/pngicon/format_emphasis/2.png'
import underlineIcon from '../../assets/pngicon/format_underline/2.png'
import codeIcon from '../../assets/pngicon/code/2.png'
import imageIcon from '../../assets/pngicon/format_image/2.png'
import linkIcon from '../../assets/pngicon/format_link/2.png'
import strikeIcon from '../../assets/pngicon/format_strike/2.png'
import mathIcon from '../../assets/pngicon/format_math/2.png'
import highlightIcon from '../../assets/pngicon/highlight/2.png'
import clearIcon from '../../assets/pngicon/format_clear/2.png'

const COMMAND_KEY = isOsx ? '⌘' : 'Ctrl'

const zhCNTooltips = {
  strong: '粗体',
  em: '斜体',
  u: '下划线',
  del: '删除线',
  mark: '高亮',
  inline_code: '行内代码',
  inline_math: '行内公式',
  link: '链接',
  image: '图片',
  clear: '清除格式'
}

const enTooltips = {
  strong: 'Bold',
  em: 'Italic',
  u: 'Underline',
  del: 'Strikethrough',
  mark: 'Highlight',
  inline_code: 'Inline Code',
  inline_math: 'Inline Math',
  link: 'Link',
  image: 'Image',
  clear: 'Clear Formatting'
}

const shortcuts = {
  strong: `${COMMAND_KEY}+B`,
  em: `${COMMAND_KEY}+I`,
  u: `${COMMAND_KEY}+U`,
  del: `${COMMAND_KEY}+D`,
  mark: `⇧+${COMMAND_KEY}+H`,
  inline_code: `${COMMAND_KEY}+\``,
  inline_math: `⇧+${COMMAND_KEY}+M`,
  link: `${COMMAND_KEY}+L`,
  image: `⇧+${COMMAND_KEY}+I`,
  clear: `⇧+${COMMAND_KEY}+R`
}

const icons = [
  { type: 'strong', icon: strongIcon },
  { type: 'em', icon: emphasisIcon },
  { type: 'u', icon: underlineIcon },
  { type: 'del', icon: strikeIcon },
  { type: 'mark', icon: highlightIcon },
  { type: 'inline_code', icon: codeIcon },
  { type: 'inline_math', icon: mathIcon },
  { type: 'link', icon: linkIcon },
  { type: 'image', icon: imageIcon },
  { type: 'clear', icon: clearIcon }
]

export { icons, zhCNTooltips, enTooltips, shortcuts }
export default icons
