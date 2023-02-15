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

interface Cliente {
  cpf: string;
  nome: string;
  telefone: string;
  cep: string;
}

export const Cadastro = async () => {
  const [cliente, setCliente] = useState<Cliente[]>([]);

  try {
    const { data } = await api.getClient();

    setCliente(data);
  } catch (error) {
    console.error(error);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <DivOrders>
        {cliente.map((c) => (
          <>
            <DivCPF>
              <p>{c.cpf}</p>
            </DivCPF>
            <DivNome>
              <p>{c.nome}</p>
            </DivNome>
            <DivCodCliente>
              <p>{c.telefone}</p>
            </DivCodCliente>
            <DivCodValor>{c.cep}</DivCodValor>
          </>
        ))}

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
