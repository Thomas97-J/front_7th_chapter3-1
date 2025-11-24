import { ManagementPage } from "./pages/ManagementPage"
import "./index.css"

export const App = () => {
  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-bold">
              DS
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-none">Design System</h1>
              <p className="text-xs text-muted-foreground">Management Console</p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <ManagementPage />
      </main>
    </div>
  )
}
