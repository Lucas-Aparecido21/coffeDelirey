import React from "react";
import { Header } from "../../components/Header";
import {
  Container,
  ContainerCep,
  ContainerFpg,
  ContainerCheckout,
} from "./styles";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";

export function Checkout() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <h1>Complete seu pedido</h1>
          <ContainerCep>
            <h2>
              <MapPinLine />
              Endereço de entrega
            </h2>
            <p>Informe o endereço de entrega onde deseja receber seu pedido</p>

            <input placeholder="CEP"></input>
            <input placeholder="Rua"></input>
            <input placeholder="Número"></input>
            <input placeholder="Complemento"></input>
            <input placeholder="Bairro"></input>
            <input placeholder="Cidade"></input>
            <input placeholder="UF"></input>
          </ContainerCep>

          <ContainerFpg>
            <h2>
              <CurrencyDollar /> Pagamento
            </h2>

            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>

            <button>
              <CreditCard /> CARTÃO DE CRÉDITO
            </button>
            <button>
              <Bank /> CARTÃO DE DÉBITO
            </button>
            <button>
              <Money /> DINHEIRO
            </button>
          </ContainerFpg>
        </section>
        <ContainerCheckout>
          <h2>Cafés selecionados</h2>
          <p>Total de itens</p>
          <p>Entrega</p>
          <p>Total</p>
          <button>CONFIRMAR PEDIDO</button>
        </ContainerCheckout>
      </Container>
    </>
  );
}
