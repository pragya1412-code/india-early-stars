import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhoWeHelp from "./pages/WhoWeHelp";
import WhatWeHelpWith from "./pages/WhatWeHelpWith";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import NewsEvents from "./pages/NewsEvents";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import MakeAReferral from "./pages/MakeAReferral";
import FindACentre from "./pages/FindACentre";
import Enquire from "./pages/Enquire";
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
          <Route path="/who-we-help" element={<WhoWeHelp />} />
          <Route path="/what-we-help-with" element={<WhatWeHelpWith />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/make-a-referral" element={<MakeAReferral />} />
          <Route path="/find-a-centre" element={<FindACentre />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
