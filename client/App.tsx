import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CheckIn from "./pages/CheckIn";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route
            path="/regras"
            element={<Placeholder title="Regras da casa" />}
          />
          <Route
            path="/como-chegar"
            element={<Placeholder title="Como chegar" />}
          />
          <Route
            path="/guias"
            element={<Placeholder title="Guias da região" />}
          />
          <Route
            path="/delivery"
            element={<Placeholder title="Delivery de comida" />}
          />
          <Route
            path="/check-out"
            element={<Placeholder title="Como fazer check-out" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
