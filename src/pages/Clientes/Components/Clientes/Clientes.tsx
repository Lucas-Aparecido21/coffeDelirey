import { PencilSimple, Scroll, Trash } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import * as api from "../../../../services/api";
import { Modal } from "../Modal";
import {
  DivButton,
  DivCodCliente,
  DivCodValor,
  DivCPF,
  DivNome,
  DivOrders,
} from "./styles";

import { ClienteProps } from "../../../../@types/Coffe";

interface ClientesProps {
  clientes: ClienteProps;
}

interface Cliente {
  cpf: string[];
  nome: string;
  telefone: string;
  cep: string;
}

export const Cadastro = async ({ clientes }: ClientesProps) => {
  const [cliente, setCliente] = useState<Cliente>({} as Cliente);

  try {
    const { data } = await api.getClient();

    setCliente((prevState) => {
      return {
        ...prevState,
        cpf: data.cpf,
        nome: data.nome,
        telefone: data.telefone,
        cep: data.cep,
      };
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <DivOrders>
        <DivCPF>
          <p>{cliente.cpf}</p>
        </DivCPF>
        <DivNome>
          <p>{cliente.nome}</p>
        </DivNome>
        <DivCodCliente>
          <p>{cliente.telefone}</p>
        </DivCodCliente>
        <DivCodValor>{cliente.cep}</DivCodValor>

        <DivButton>
          <NavLink
            to="/AlterarCliente"
            style={{ textDecoration: "none", color: "black" }}>
            <button id="alterar">
              <PencilSimple />
            </button>
          </NavLink>
          <button onClickCapture={() => setIsOpen(true)} id="excluir">
            <Trash />
          </button>
          <NavLink
            to="/ConsultarCliente"
            style={{ textDecoration: "none", color: "black" }}>
            <button id="consultar">
              <Scroll />
            </button>
          </NavLink>
        </DivButton>
      </DivOrders>
    </>
  );
};
