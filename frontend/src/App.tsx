import './App.css'
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Weather } from "./pages/Weather";
import { Prices } from "./pages/Prices";
import { News } from "./pages/News";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight">
              Meridiano Agro
            </span>
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "font-medium" : "text-muted-foreground"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/clima"
              className={({ isActive }) =>
                isActive ? "font-medium" : "text-muted-foreground"
              }
            >
              Clima
            </NavLink>
            <NavLink
              to="/precos"
              className={({ isActive }) =>
                isActive ? "font-medium" : "text-muted-foreground"
              }
            >
              Preços
            </NavLink>
            <NavLink
              to="/noticias"
              className={({ isActive }) =>
                isActive ? "font-medium" : "text-muted-foreground"
              }
            >
              Notícias
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clima" element={<Weather />} />
          <Route path="/precos" element={<Prices />} />
          <Route path="/noticias" element={<News />} />
        </Routes>
      </main>
    </div>
  );
}
