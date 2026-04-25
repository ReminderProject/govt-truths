import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import MoneyTrail from "./pages/sections/MoneyTrail.tsx";
import SaidVsDone from "./pages/sections/SaidVsDone.tsx";
import PermanentClass from "./pages/sections/PermanentClass.tsx";
import TakeAction from "./pages/sections/TakeAction.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/money-trail" element={<MoneyTrail />} />
          <Route path="/said-vs-done" element={<SaidVsDone />} />
          <Route path="/permanent-class" element={<PermanentClass />} />
          <Route path="/take-action" element={<TakeAction />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
