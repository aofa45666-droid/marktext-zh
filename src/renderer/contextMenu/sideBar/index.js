import { getCurrentWindow, Menu as RemoteMenu, MenuItem as RemoteMenuItem } from '@electron/remote'
import {
  SEPARATOR,
  NEW_FILE,
  NEW_DIRECTORY,
  COPY,
  CUT,
  PASTE,
  RENAME,
  DELETE,
  SHOW_IN_FOLDER
} from './menuItems'
import { getLocale, tLabel } from '../../locale'

export const showContextMenu = (event, hasPathCache) => {
  const menu = new RemoteMenu()
  const win = getCurrentWindow()
  const locale = getLocale()
  const CONTEXT_ITEMS = [
    NEW_FILE,
    NEW_DIRECTORY,
    SEPARATOR,
    COPY,
    CUT,
    PASTE,
    SEPARATOR,
    RENAME,
    DELETE,
    SEPARATOR,
    SHOW_IN_FOLDER
  ]

  PASTE.enabled = hasPathCache

  CONTEXT_ITEMS.forEach(item => {
    const translated = tLabel(locale, item)
    menu.append(new RemoteMenuItem(translated))
  })
  menu.popup([{ window: win, x: event.clientX, y: event.clientY }])
}
