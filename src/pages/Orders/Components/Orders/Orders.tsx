import { Scroll, Trash } from "phosphor-react";
import { useState } from "react";
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

export function Orders() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  async function DeleteClient() {
    // await api.deletePedidoByID(id)
  }

  if (isDelete) {
    DeleteClient();
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
          <p>1</p>
        </DivCodPedido>
        <DivDatapedido>31/01/2023</DivDatapedido>
        <DivCodCliente>
          <p>Lucas Aparecido</p>
        </DivCodCliente>
        <DivCodValor>
          <p>R$ 130,00</p>
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
