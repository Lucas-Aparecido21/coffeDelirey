import { PencilSimple, Scroll, Trash } from "phosphor-react";
import { useState } from "react";
import api from "../../../services/api";
import {
  DivButton,
  DivCodCliente,
  DivCodValor,
  DivCPF,
  DivNome,
  DivOrders,
} from "./styles";

interface Cliente {
  cpf: string;
  cep: string;
  cidade: string;
  telefone: string;
  complemento: string;
  nome: string;
  rua: string;
  uf: string;
  bairro: string;
  numero: string;
}

export function Clientes() {
  const [cliente, setCliente] = useState<Cliente>({} as Cliente);
  //   api.get(`clientes/ `).then((res) => {

  //     return {
  //       ...prevState,
  //       bairro: res.data.bairro,
  //       cidade: res.data.cidade,
  //       rua: res.data.rua,
  //       numero: res.data.numero,
  //       uf: res.data.uf,
  //       nome: res.data.nome,
  //       complemento: res.data.complemento,
  //       telefone: res.data.telefone,
  //       cep: res.data.cep,
  //     };

  //  )}

  api.get(`clientes/`).then((res) => {
    return {};
  });
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
