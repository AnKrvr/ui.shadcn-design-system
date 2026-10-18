import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
export function ThemeToggle() {
  const { setTheme } = useTheme()
  return <DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline" size="icon" aria-label="Выбрать тему"><Sun className="dark:hidden" /><Moon className="hidden dark:block" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem onClick={() => setTheme("light")}><Sun />Светлая</DropdownMenuItem><DropdownMenuItem onClick={() => setTheme("dark")}><Moon />Тёмная</DropdownMenuItem><DropdownMenuItem onClick={() => setTheme("system")}><Monitor />Как в системе</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
}

