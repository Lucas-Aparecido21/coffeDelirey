import { Header } from "../../components/Header";
import { Orders } from "./Components/Orders";
import {
  Container,
  ContainerOrders,
  DivButton,
  DivCodCliente,
  DivCodPedido,
  DivCodValor,
  DivDatapedido,
  DivInfo,
  DivStatus,
} from "./styles";

export function Order() {
  return (
    <>
      <Header />

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
              <DivStatus>Status</DivStatus>
              <DivButton>
                <p>Alterar</p>
                <p>Excluir</p>
                <p>Consultar</p>
              </DivButton>
            </DivInfo>
            <Orders />
          </ContainerOrders>
        </section>
      </Container>
    </>
  );
}
