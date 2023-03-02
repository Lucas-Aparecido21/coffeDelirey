import { Route, Routes } from "react-router-dom";
import { ConsultarCliente } from "./pages/ConsultarCliente";
import { AlterarCliente } from "./pages/AlterarCliente";
import { Checkout } from "./pages/Checkout";
import { Cliente } from "./pages/Clientes";
import { Home } from "./pages/Home";
import { Order } from "./pages/Orders";
import { Sucess } from "./pages/Sucess";
import { ConsultarPedido } from "./pages/ConsultarPedido";
import { CadastrarCliente } from "./pages/CadastrarCliente";

export function Router() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Sucess" element={<Sucess />} />
      <Route path="/Orders" element={<Order />} />
      <Route path="/Clientes" element={<Cliente />} />
      <Route path="/ConsultarCliente" element={<ConsultarCliente />} />
      <Route path="/AlterarCliente" element={<AlterarCliente />} />
      <Route path="/ConsultarPedido" element={<ConsultarPedido />} />
      <Route path="/CadastrarCliente" element={<CadastrarCliente />} />
    </Routes>
  );
}
