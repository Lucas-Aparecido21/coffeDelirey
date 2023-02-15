import { useState } from "react";
import { Header } from "../../components/Header";

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

interface Cliente {
  cpf: string;
  nome: string;
  telefone: string;
  cep: string;
}

export function Cliente() {
  const [cliente] = useState<Cliente[]>([]);
  return (
    <>
      <Header />

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

            <DivOrders></DivOrders>
          </ContainerClientes>
        </section>
      </Container>
    </>
  );
}
