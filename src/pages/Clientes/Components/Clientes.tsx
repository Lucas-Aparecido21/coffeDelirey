import { PencilSimple, Scroll, Trash } from "phosphor-react";
import {
  DivButton,
  DivCodCliente,
  DivCodValor,
  DivCPF,
  DivNome,
  DivOrders,
} from "./styles";

export function Clientes() {
  return (
    <DivOrders>
      <DivCPF>
        <p>41878052810 </p>
      </DivCPF>
      <DivNome>
        <p>Lucas Aparecido</p>
      </DivNome>
      <DivCodCliente>
        <p>11940296563</p>
      </DivCodCliente>
      <DivCodValor>03978180</DivCodValor>

      <DivButton>
        <button id="alterar">
          <PencilSimple />
        </button>
        <button id="excluir">
          <Trash />
        </button>
        <button id="consultar">
          <Scroll />
        </button>
      </DivButton>
    </DivOrders>
  );
}
