import { getCurrentWindow, Menu as RemoteMenu, MenuItem as RemoteMenuItem } from '@electron/remote'
import {
  CLOSE_THIS,
  CLOSE_OTHERS,
  CLOSE_SAVED,
  CLOSE_ALL,
  SEPARATOR,
  RENAME,
  COPY_PATH,
  SHOW_IN_FOLDER
} from './menuItems'
import { getLocale, tLabel } from '../../locale'

export const showContextMenu = (event, tab) => {
  const menu = new RemoteMenu()
  const win = getCurrentWindow()
  const { pathname } = tab
  const locale = getLocale()
  const CONTEXT_ITEMS = [CLOSE_THIS, CLOSE_OTHERS, CLOSE_SAVED, CLOSE_ALL, SEPARATOR, RENAME, COPY_PATH, SHOW_IN_FOLDER]
  const FILE_CONTEXT_ITEMS = [RENAME, COPY_PATH, SHOW_IN_FOLDER]

  FILE_CONTEXT_ITEMS.forEach(item => {
    item.enabled = !!pathname
  })

  CONTEXT_ITEMS.forEach(item => {
    const translated = tLabel(locale, item)
    const menuItem = new RemoteMenuItem(translated)
    menuItem._tabId = tab.id
    menu.append(menuItem)
  })
  menu.popup([{ window: win, x: event.clientX, y: event.clientY }])
}
