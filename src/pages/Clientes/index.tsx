import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import * as api from "../../services/api";
import { Cadastro } from "./Components/Clientes/Clientes";

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

export interface ClienteProps {
  cpf: string;
  nome: string;
  telefone: string;
  cep: string;
}

export function Cliente() {
  const [cliente, setCliente] = useState<ClienteProps[]>([]);
  const getCliente = async () => {
    try {
      const { data } = await api.getClient();

      setCliente(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCliente();
  }, []);
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
              {cliente.map((cliente) => (
                <Cadastro c={cliente} />
              ))}
            </DivOrders>
          </ContainerClientes>
        </section>
      </Container>
    </>
  );
}
