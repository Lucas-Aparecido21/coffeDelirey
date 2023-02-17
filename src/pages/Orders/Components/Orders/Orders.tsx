import moment from "moment";
import { Scroll, Trash } from "phosphor-react";
import { useState } from "react";
import { PedidoProps } from "../..";
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
          <button id="consultar">
            <Scroll />
          </button>
        </DivButton>
      </DivOrders>
    </>
  );
}
