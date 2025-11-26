import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm flex justify-center transition-colors">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground text-lg font-bold">
            L
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold leading-tight text-foreground">
              Hanghae Company
            </h1>
            <p className="text-xs text-muted-foreground">
              Design System Migration Project
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>

          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-foreground">Demo User</span>
              <span className="text-xs text-muted-foreground">demo@example.com</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
              DU
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
