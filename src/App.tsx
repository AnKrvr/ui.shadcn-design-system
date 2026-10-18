import { ThemeProvider, useTheme } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import { StarterPage } from "@/components/examples/starter-page"
function AppContent(){const {theme}=useTheme();return <TooltipProvider><StarterPage /><Toaster theme={theme} /></TooltipProvider>}
export default function App(){return <ThemeProvider><AppContent /></ThemeProvider>}
