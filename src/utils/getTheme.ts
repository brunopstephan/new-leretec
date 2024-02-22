export function getTheme() {
  return (
    (localStorage.getItem(import.meta.env.VITE_THEME_STORAGE || '') as
      | 'light'
      | 'dark'
      | 'system') || ('system' as 'light' | 'dark' | 'system')
  )
}
