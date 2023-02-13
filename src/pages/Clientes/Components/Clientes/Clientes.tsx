import { PencilSimple, Scroll, Trash } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import api from "../../../../services/api";
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

export const Clientes = ({ clientes }: ClientesProps) => {
  api.get(`clientes/`).then((res) => {
    const data = new FormData();

    return {
      ...clientes,
      cpf: res.data.cpf,
      nome: res.data.nome,
      telefone: res.data.telefone,
      cep: res.data.cep,
    };
  });

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <DivOrders>
        <DivCPF>
          {clientes.cpf.map((clientes) => (
            <p>{clientes}</p>
          ))}
        </DivCPF>
        <DivNome>
          <p>{clientes.nome}</p>
        </DivNome>
        <DivCodCliente>
          <p>{clientes.telefone}</p>
        </DivCodCliente>
        <DivCodValor>{clientes.cep}</DivCodValor>

        <DivButton>
          <NavLink
            to="/AlterarCliente"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button id="alterar">
              <PencilSimple />
            </button>
          </NavLink>
          <button onClickCapture={() => setIsOpen(true)} id="excluir">
            <Trash />
          </button>
          <NavLink
            to="/ConsultarCliente"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button id="consultar">
              <Scroll />
            </button>
          </NavLink>
        </DivButton>
      </DivOrders>
    </>
  );
};
