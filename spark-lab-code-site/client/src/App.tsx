import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CustomCursor from "@/components/ui/CustomCursor";
// Importações originais
import Home from "@/pages/Home";
import About from "@/pages/About";

// 1. Importe as novas páginas (ajuste o caminho da pasta caso tenha salvo em outro lugar, como components)
import TemperandinPage from "@/components/Projects/TemperandinPage";
import BarberflowPage from "@/components/Projects/BarberflowPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/sobre"} component={About} />

      {/* 2. Novas rotas comerciais para os Estudos de Caso */}
      <Route path={"/projetos/temperandin"} component={TemperandinPage} />
      <Route path={"/projetos/barberflow"} component={BarberflowPage} />

      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
