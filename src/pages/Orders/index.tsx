import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Orders } from "./Components/Orders/Orders";
import * as api from "../../services/api";

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

export interface PedidoProps {
  id: number;
  created_at: string;
  cpf_id: string;
  valor: number;
}

export function Order() {
  const [pedido, setPedido] = useState<PedidoProps[]>([]);

  const getPedido = async () => {
    try {
      const { data } = await api.getPedido();
      setPedido(data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(pedido);
  useEffect(() => {
    getPedido();
  }, []);
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
                <p>Excluir</p>
                <p>Consultar</p>
              </DivButton>
            </DivInfo>

            <DivOrders>
              {pedido.map((pedido) => (
                <Orders p={pedido} />
              ))}
            </DivOrders>
          </ContainerOrders>
        </section>
      </Container>
    </>
  );
}
