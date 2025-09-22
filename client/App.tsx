import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Parcours from "./pages/Parcours";
import Competences from "./pages/Competences";
import Projets from "./pages/Projets";
import QuiSuisJe from "./pages/QuiSuisJe";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

// ✅ Nouveau ThemeSwitcher avec toggle style iPhone
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "default";
    applyTheme(savedTheme, false);
  }, []);

  const applyTheme = (themeName: string, save = true) => {
    document.documentElement.classList.remove("dark", "theme-nature", "theme-sunset");

    if (themeName === "dark") {
      document.documentElement.classList.add("dark");
    }

    if (save) {
      localStorage.setItem("portfolio-theme", themeName);
    }

    setTheme(themeName);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "default" : "dark";
    applyTheme(newTheme);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3">
      <span className="text-sm">{theme === "dark" ? "🌙" : "☀️"}</span>
      <button
        onClick={toggleTheme}
        role="switch"
        aria-checked={theme === "dark"}
        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
          theme === "dark" ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
            theme === "dark" ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/portfolio">
        <Layout>
          <ThemeSwitcher />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/qui-suis-je" element={<QuiSuisJe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// ✅ Création du root ici (pas besoin de main.tsx)
createRoot(document.getElementById("root")!).render(<App />);
