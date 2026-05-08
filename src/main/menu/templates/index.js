import edit from './edit'
import prefEdit from './prefEdit'
import file from './file'
import help from './help'
import marktext from './marktext'
import view from './view'
import window from './window'
import paragraph from './paragraph'
import format from './format'
import theme from './theme'
import { t } from '../../locale'

export dockMenu from './dock'

function applyLocale (template, locale) {
  // Walk menu template recursively and translate labels
  const langMap = locale
  function walk (items) {
    for (const item of items) {
      if (item.label) {
        item.label = t(langMap, item.label)
      }
      if (item.submenu) {
        walk(item.submenu)
      }
    }
  }
  walk(template)
  return template
}

/**
 * Create the setting window menu.
 *
 * @param {Keybindings} keybindings The keybindings instance
 */
export const configSettingMenu = (keybindings, localeData) => {
  const menu = [
    ...(process.platform === 'darwin' ? [marktext(keybindings)] : []),
    prefEdit(keybindings),
    help()
  ]
  return localeData ? applyLocale(menu, localeData) : menu
}

/**
 * Create the application menu for the editor window.
 *
 * @param {Keybindings} keybindings The keybindings instance.
 * @param {Preference} preferences The preference instance.
 * @param {string[]} recentlyUsedFiles The recently used files.
 */
export default function (keybindings, preferences, recentlyUsedFiles, localeData) {
  const menu = [
    ...(process.platform === 'darwin' ? [marktext(keybindings)] : []),
    file(keybindings, preferences, recentlyUsedFiles),
    edit(keybindings),
    paragraph(keybindings),
    format(keybindings),
    window(keybindings),
    theme(preferences),
    view(keybindings),
    help()
  ]
  return localeData ? applyLocale(menu, localeData) : menu
}
