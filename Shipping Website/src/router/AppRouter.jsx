import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import QuoteFrom from "../components/quote/QuoteFrom";  // ← QuoteFrom not QuoteForm

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/get-a-free-quote" element={<QuoteFrom />} />
      </Routes>
    </BrowserRouter>
  );
}