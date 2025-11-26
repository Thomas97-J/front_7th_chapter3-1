import { ManagementPage } from "./pages/ManagementPage";
import "./index.css";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main>
        <ManagementPage />
      </main>
    </div>
  );
};
