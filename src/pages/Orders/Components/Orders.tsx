import { PencilSimple, Scroll, Trash } from "phosphor-react";
import {
  DivButton,
  DivCodCliente,
  DivCodPedido,
  DivCodValor,
  DivDatapedido,
  DivOrders,
  DivStatus,
} from "./styles";

export function Orders() {
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
      <DivStatus>Status</DivStatus>
      <DivButton>
        <button>
          <PencilSimple />
        </button>
        <button>
          <Trash />
        </button>
        <button>
          <Scroll />
        </button>
      </DivButton>
    </DivOrders>
  );
}
