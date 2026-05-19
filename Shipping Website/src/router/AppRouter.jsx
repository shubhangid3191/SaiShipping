import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

import Navbar from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import QuoteFrom from "../components/quote/QuoteFrom";
import Projects from "../pages/Projects";
import Home from "../components/home/Home"
import Contact from "../pages/Contact";
import Warehouses from "../pages/Warehouses";
import FreightForwarding from "../pages/FreightForwarding";
import Industry from "../pages/Industry";
import AdditionalServices from "../pages/AdditionalServices";
import Clients from "../pages/Clients";
import FAQ from "../pages/FAQ";
import Import from "../pages/Import";
import Export from "../pages/Export";
import Services from "../pages/Services";
import AchievementsRewards from "../pages/AchievementsRewards";

// Company pages
import AboutUs from "../pages/AboutUs";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-a-free-quote" element={<QuoteFrom />} />
        <Route path="/projects" element={<><Projects /></>} />
        <Route path="/freight-forwarding" element={<FreightForwarding />} />
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="/warehouses" element={<><Warehouses /></>} />
        <Route path="/additional-services"element={<AdditionalServices />}/>
        <Route path="/import" element={<Import />} />
        <Route path="/export" element={<Export />} />
        <Route path="/services" element={<Services />} />


        {/* Company Dropdown */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/achievements" element={<AchievementsRewards />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}