import moment from "moment";
import { Scroll, Trash } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PedidoProps } from "../..";
import { useCart } from "../../../../hooks/useCart";
import * as api from "../../../../services/api";
import { Modal } from "../Modal";
import {
  DivButton,
  DivCodCliente,
  DivCodPedido,
  DivCodValor,
  DivDatapedido,
  DivOrders,
} from "./styles";

interface CadastroPedidoProps {
  p: PedidoProps;
}

export function Orders({ p }: CadastroPedidoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const { setIdCoffee, valorCart, setValorCart } = useCart();

  if (isDelete) {
    api.deletePedidoByID(p.id);
    window.location.reload();
  }

  function ConsultarPedido() {
    localStorage.setItem("OrdersCliente", p.cpf_id);
    setValorCart(p.valor);
    setIdCoffee(JSON.stringify(p.id));
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isDelete={isDelete}
        setIsDelete={setIsDelete}
      />
      <DivOrders>
        <DivCodPedido>
          <p>{p.id}</p>
        </DivCodPedido>
        <DivDatapedido>
          {moment(p.created_at).format("DD/MM/YYYY")}
        </DivDatapedido>
        <DivCodCliente>
          <p>{p.cpf_id}</p>
        </DivCodCliente>
        <DivCodValor>
          <p>
            {p.valor.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </DivCodValor>
        <DivButton>
          <button id="excluir" onClick={() => setIsOpen(true)}>
            <Trash />
          </button>

          <NavLink
            to="/ConsultarPedido"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button id="consultar" onClick={ConsultarPedido}>
              <Scroll />
            </button>
          </NavLink>
        </DivButton>
      </DivOrders>
    </>
  );
}
