import { PencilSimple, Scroll, Trash } from "phosphor-react";
import { useState } from "react";
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
  function handleDeleteCliente() {
    setIsOpen(true);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
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
          <button id="alterar">
            <PencilSimple />
          </button>
          <button id="excluir" onClick={handleDeleteCliente}>
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
