// Locale manager for main process
export function loadLocale (language) {
  switch (language) {
    case 'zh-CN':
      return require('./zh-CN').default
    default:
      return {} // English - no translation needed
  }
}

export function t (locale, key) {
  return locale[key] || key
}
