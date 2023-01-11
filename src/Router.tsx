import { Route, Routes } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Sucess } from "./pages/Sucess";

export function Router() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Sucess" element={<Sucess />} />
    </Routes>
  );
}
