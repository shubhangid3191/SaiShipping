import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import QuoteFrom from "../components/quote/QuoteFrom";
import Projects from "../pages/Projects";
import Footer from "../components/layout/Footer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/get-a-free-quote" element={<QuoteFrom />} />
        <Route path="/projects" element={<><Projects /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}