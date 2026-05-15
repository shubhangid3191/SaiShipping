import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

import Navbar from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import QuoteFrom from "../components/quote/QuoteFrom";
import Projects from "../pages/Projects";
import Home from "../components/home/Home"
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<App />} />
        <Route path="/get-a-free-quote" element={<QuoteFrom />} />
        <Route path="/projects" element={<><Projects /></>} />
        <Route path="/contact" element={<><Contact/></>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}