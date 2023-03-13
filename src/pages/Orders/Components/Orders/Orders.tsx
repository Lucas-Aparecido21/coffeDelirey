import moment from "moment";
import { Scroll, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
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

interface Cliente {
  nome: string;
}

export function Orders({ p }: CadastroPedidoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [cliente, setCliente] = useState<Cliente>({} as Cliente);
  const { setIdCoffee, setValorCart } = useCart();

  function handleDeleteOrder() {
    Swal.fire({
      title: "Tem certeza que deseja excluir este pedido?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Não",
      confirmButtonText: "Sim, excluir o pedido!",
    }).then((result) => {
      if (result.isConfirmed) {
        api.deletePedidoByID(p.id);
        Swal.fire({
          icon: "success",
          title: "Processo concluido!",
          text: "Pedido deletado com sucesso!",
          confirmButtonText: "OK",
          preConfirm: () => {
            window.location.reload();
          },
        });
      }
    });
  }

  function ConsultarPedido() {
    localStorage.setItem("OrdersCliente", p.cpf_id);
    setValorCart(p.valor);
    setIdCoffee(JSON.stringify(p.id));
  }

  const getCliente = async () => {
    if (!p.cpf_id) {
      return;
    }
    const { data } = await api.getClientByCpf(p.cpf_id);
    setCliente({
      ...cliente,
      nome: data.nome,
    });
  };
  useEffect(() => {
    getCliente();
  }, []);

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
          <p>{cliente.nome}</p>
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
          <button id="excluir" onClick={handleDeleteOrder}>
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
