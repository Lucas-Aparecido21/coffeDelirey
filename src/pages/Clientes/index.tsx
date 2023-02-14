import { Header } from "../../components/Header";
import { Clientes } from "./Components/Clientes/Clientes";

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
import { Key, useState } from "react";

export function Cliente() {
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

            <DivOrders>
              {/* {clientes.map((cliente) => (
                <Clientes key={cliente.cpf} cliente={clientes} />
              ))} */}
            </DivOrders>
          </ContainerClientes>
        </section>
      </Container>
    </>
  );
}
