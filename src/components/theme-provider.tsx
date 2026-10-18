import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { readTheme, resolveTheme, saveTheme, type Theme } from "@/lib/theme"
const ThemeContext = createContext<{theme: Theme; setTheme: (theme: Theme) => void} | null>(null)
export function ThemeProvider({children, defaultTheme = "system", forcedTheme}: {children: ReactNode; defaultTheme?: Theme; forcedTheme?: "light" | "dark"}) {
  const [theme, updateTheme] = useState<Theme>(() => readTheme(undefined, defaultTheme))
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const apply = () => {
      const resolved = forcedTheme ?? resolveTheme(theme, media.matches)
      document.documentElement.classList.toggle("dark", resolved === "dark")
      document.documentElement.style.colorScheme = resolved
    }
    apply()
    if (theme !== "system" || forcedTheme) return
    media.addEventListener("change", apply)
    return () => media.removeEventListener("change", apply)
  }, [theme, forcedTheme])
  const setTheme = (next: Theme) => { updateTheme(next); saveTheme(undefined, next) }
  return <ThemeContext.Provider value={{theme: forcedTheme ?? theme, setTheme}}>{children}</ThemeContext.Provider>
}
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used inside ThemeProvider")
  return context
}

