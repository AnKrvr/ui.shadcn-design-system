export type Theme = "light" | "dark" | "system"
export function readTheme(storage?: Pick<Storage, "getItem">, fallback: Theme = "system"): Theme {
  try {
    const value = (storage ?? window.localStorage).getItem("ui-theme")
    return value === "light" || value === "dark" || value === "system" ? value : fallback
  } catch { return fallback }
}
export function resolveTheme(theme: Theme, systemDark: boolean): "light" | "dark" {
  return theme === "system" ? (systemDark ? "dark" : "light") : theme
}
export function saveTheme(storage: Pick<Storage, "setItem"> | undefined, theme: Theme): void {
  try { (storage ?? window.localStorage).setItem("ui-theme", theme) } catch { /* Storage can be blocked; the in-memory choice still works. */ }
}
