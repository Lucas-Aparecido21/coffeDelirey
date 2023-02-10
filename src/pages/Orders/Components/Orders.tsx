import { PencilSimple, Scroll, Trash } from "phosphor-react";
import {
  DivButton,
  DivCodCliente,
  DivCodPedido,
  DivCodValor,
  DivDatapedido,
  DivOrders,
} from "./styles";

export function Orders() {
  function handleDeleteCliente() {}

  return (
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
  );
}
