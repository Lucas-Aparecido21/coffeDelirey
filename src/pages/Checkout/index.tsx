import React from "react";
import { Header } from "../../components/Header";
import {
  Container,
  ContainerCep,
  ContainerFpg,
  ContainerCheckout,
  CepInput,
  RuaInput,
  NumeroInput,
  ComplementoInput,
  BairroInput,
  CidadeInput,
  UFInput,
  DivFpg,
} from "./styles";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";

import { CartListCheckout } from "./Components/Cart";
import { useForm } from "react-hook-form/dist/useForm";

export function Checkout() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <div>
            <h1>Complete seu pedido</h1>
          </div>
          <ContainerCep>
            <div>
              <h2>
                <MapPinLine />
                Endereço de entrega
              </h2>
              <p>
                Informe o endereço de entrega onde deseja receber seu pedido
              </p>
              <form action="">
                <CepInput placeholder="CEP" type="text"></CepInput>
                <RuaInput placeholder="Rua" type="text"></RuaInput>
                <div className="Separador1">
                  <NumeroInput placeholder="Número" type="text"></NumeroInput>
                  <ComplementoInput
                    placeholder="Complemento"
                    type="text"></ComplementoInput>
                </div>
                <div className="Separador2">
                  <BairroInput placeholder="Bairro" type="text"></BairroInput>
                  <CidadeInput placeholder="Cidade" type="text"></CidadeInput>
                  <UFInput placeholder="UF" type="text"></UFInput>
                </div>
              </form>
            </div>
          </ContainerCep>

          <ContainerFpg>
            <DivFpg>
              <div>
                <h2>
                  <CurrencyDollar /> Pagamento
                </h2>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
              <div style={{ display: "flex", gap: "18px" }}>
                <button>
                  <CreditCard /> CARTÃO DE CRÉDITO
                </button>
                <button>
                  <Bank /> CARTÃO DE DÉBITO
                </button>
                <button>
                  <Money /> DINHEIRO
                </button>
              </div>
            </DivFpg>
          </ContainerFpg>
        </section>
        <ContainerCheckout>
          <CartListCheckout />
        </ContainerCheckout>
      </Container>
    </>
  );
}
