import { Header } from "../../components/Header";
import { Clientes } from "./Components/Clientes";
import { Modal } from "../../components/Modal";
import {
  Container,
  DivButton,
  DivCodCliente,
  DivCodValor,
  DivDatapedido,
  DivInfo,
  DivOrders,
  DivSubtitulo,
  ContainerClientes,
  DivCodCPF,
} from "./styles";
import { useState } from "react";

export function Cliente() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <DivSubtitulo>
        <h1>Cadastro de clientes</h1>
      </DivSubtitulo>
      <Container>
        <section>
          <ContainerClientes>
            <DivInfo>
              <DivCodCPF>
                <p>CPF</p>
              </DivCodCPF>
              <DivDatapedido>Nome</DivDatapedido>
              <DivCodCliente>
                <p>Telefone</p>
              </DivCodCliente>
              <DivCodValor>
                <p>CEP</p>
              </DivCodValor>

              <DivButton>
                <p>Alterar</p>
                <p>Excluir</p>
                <p>Consultar</p>
              </DivButton>
            </DivInfo>

            <DivOrders>
              <Clientes />
              <Clientes />

              <Clientes />
              <Clientes />
              <Clientes />
              <Clientes />
              <Clientes />
              <Clientes />
              <Clientes />
              <Clientes />
            </DivOrders>
          </ContainerClientes>
        </section>
      </Container>
    </>
  );
}
