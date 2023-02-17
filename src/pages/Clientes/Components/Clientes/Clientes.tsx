import { PencilSimple, Scroll, Trash } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ClienteProps } from "../..";
import { Modal } from "../Modal";
import {
  DivButton,
  DivCodCliente,
  DivCodValor,
  DivCPF,
  DivNome,
  DivOrders,
} from "./styles";

interface CadastroProps {
  c: ClienteProps;
}

export function Cadastro({ c }: CadastroProps) {
  function ConsultaCliente() {}

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <DivOrders>
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
            <button id="consultar" onClick={ConsultaCliente}>
              <Scroll />
            </button>
          </NavLink>
        </DivButton>
      </DivOrders>
    </>
  );
}
