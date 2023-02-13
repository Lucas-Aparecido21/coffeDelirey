import { useState } from "react";
import { Header } from "../../components/Header";
import { Modal } from "./Components/Modal";
import { Orders } from "./Components/Orders/Orders";

import {
  Container,
  ContainerOrders,
  DivButton,
  DivCodCliente,
  DivCodPedido,
  DivCodValor,
  DivDatapedido,
  DivInfo,
  DivOrders,
  DivSubtitulo,
} from "./styles";

export function Order() {
  return (
    <>
      <Header />
      <DivSubtitulo>
        <h1>Pedidos realizados</h1>
      </DivSubtitulo>
      <Container>
        <section>
          <ContainerOrders>
            <DivInfo>
              <DivCodPedido>
                <p>Código do pedido</p>
              </DivCodPedido>
              <DivDatapedido>Data do pedido</DivDatapedido>
              <DivCodCliente>
                <p>Cliente</p>
              </DivCodCliente>
              <DivCodValor>
                <p>Valor total</p>
              </DivCodValor>

              <DivButton>
                <p>Alterar</p>
                <p>Excluir</p>
                <p>Consultar</p>
              </DivButton>
            </DivInfo>

            <DivOrders>
              <Orders />
              <Orders />

              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
            </DivOrders>
          </ContainerOrders>
        </section>
      </Container>
    </>
  );
}
