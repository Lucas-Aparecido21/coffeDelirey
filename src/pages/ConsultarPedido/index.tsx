/* eslint-disable react-hooks/exhaustive-deps */
// import { useState } from "react";
import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import {
  Container,
  ContainerCep,
  ContainerFpg,
  ContainerCheckout,
  ContainerInfo,
  CepInput,
  RuaInput,
  NumeroInput,
  ComplementoInput,
  BairroInput,
  CidadeInput,
  UFInput,
  DivFpg,
  DivInicial,
  DivValor,
  DivNav,
  DivButton,
  ButtonConfirm,
  DivTeste,
  DivInfo,
  InputNome,
  InputSNome,
  InputCel,
  DivName,
} from "./styles";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  UserCircle,
} from "phosphor-react";

import { CartListCheckout } from "./Components/Cart";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import * as api from "../../services/api";
import { dataFake } from "../../database/fakeCoffe";

interface ItensProps {
  item: number;
  quantidade: number;
}

interface Cliente {
  cpf?: string | undefined;
  nome: string;
  telefone: string;
  cep: string;
  rua: string;
  cidade: string;
  bairro: string;
  uf: string;
  numero: string;
  complemento?: string | undefined;
}

export function ConsultarPedido() {
  let { formPag } = useCart();
  const DELIVERY_PRICE = 3.5;

  // const cartTotal = DELIVERY_PRICE + cartItemsTotal;
  const [cliente, setCliente] = useState<Cliente>({} as Cliente);
  const ordersCliente = localStorage.getItem("OrdersCliente");
  const { idCoffee } = useCart();
  const [itensConsulta, setItensConsulta] = useState<ItensProps[]>([]);
  const { valorCart } = useCart();
  const ConsultaCliente = async () => {
    if (!ordersCliente) {
      return;
    }
    const { data } = await api.getClientByCpf(ordersCliente);

    setCliente((prevState) => {
      return {
        ...prevState,
        cpf: data.cpf,
        bairro: data.bairro,
        cidade: data.cidade,
        rua: data.rua,
        numero: data.numero,
        uf: data.uf,
        nome: data.nome,
        complemento: data.complemento,
        telefone: data.telefone,
        cep: data.cep,
      };
    });
  };
  useEffect(() => {
    ConsultaCliente();
  }, [ordersCliente]);

  const ConsultaItem = async () => {
    if (!idCoffee) {
      return;
    }
    const { data } = await api.getItensByIdPedido(idCoffee);
    setItensConsulta(data as unknown as ItensProps[]);
  };

  useEffect(() => {
    ConsultaItem();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <section>
          <div>
            <h1 style={{ display: "flex", top: "14px", left: "42px" }}>
              Informações do pedido
            </h1>
          </div>
          <ContainerInfo>
            <DivInfo>
              <h2>
                <UserCircle />
                Informações pessoais
              </h2>
              <form action="">
                <DivName>
                  <InputNome
                    placeholder="CPF"
                    name="cpf"
                    type="number"
                    value={cliente.cpf || ""}
                  />

                  <InputSNome
                    placeholder="Nome"
                    name="nome"
                    value={cliente.nome || ""}
                  />
                </DivName>
                <InputCel
                  placeholder="Celular"
                  name="telefone"
                  type="tel"
                  value={cliente.telefone || ""}
                />
              </form>
            </DivInfo>
          </ContainerInfo>

          <ContainerCep>
            <div>
              <h2>
                <MapPinLine />
                Endereço de entrega
              </h2>

              <form>
                <CepInput
                  placeholder="CEP"
                  name="cep"
                  type="text"
                  value={cliente.cep || ""}
                ></CepInput>

                <RuaInput
                  placeholder="Rua"
                  name="rua"
                  type="text"
                  value={cliente.rua || ""}
                ></RuaInput>
                <div className="Separador1">
                  <NumeroInput
                    placeholder="Número"
                    name="numero"
                    type="text"
                    value={cliente.numero || ""}
                  ></NumeroInput>
                  <ComplementoInput
                    placeholder="Complemento (opcional)"
                    name="complemento"
                    type="text"
                    value={cliente.complemento || ""}
                  ></ComplementoInput>
                </div>
                <div className="Separador2">
                  <BairroInput
                    placeholder="Bairro"
                    name="bairro"
                    type="text"
                    value={cliente.bairro || ""}
                  ></BairroInput>
                  <CidadeInput
                    placeholder="Cidade"
                    name="cidade"
                    type="text"
                    value={cliente.cidade || ""}
                  ></CidadeInput>
                  <UFInput
                    placeholder="UF"
                    name="uf"
                    type="text"
                    value={cliente.uf}
                  ></UFInput>
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

                <p>Pagamento selecionado no pedido </p>
              </div>
              <div style={{ display: "flex", gap: "18px" }}>
                <button
                  style={{
                    border:
                      formPag === "Cartão de Crédito"
                        ? `2px solid #4B2995`
                        : "2px solid transparent",
                  }}
                  disabled={formPag !== "Cartão de Crédito"}
                >
                  <CreditCard /> CARTÃO DE CRÉDITO
                </button>
                <button
                  style={{
                    border:
                      formPag === "Cartão de Débito"
                        ? `2px solid #4B2995`
                        : "2px solid transparent",
                  }}
                  disabled={formPag !== "Cartão de Débito"}
                >
                  <Bank /> CARTÃO DE DÉBITO
                </button>
                <button
                  style={{
                    border:
                      formPag === "Dinheiro"
                        ? `2px solid #4B2995`
                        : "2px solid transparent",
                  }}
                  disabled={formPag !== "Dinheiro"}
                >
                  <Money /> DINHEIRO
                </button>
              </div>
            </DivFpg>
          </ContainerFpg>
        </section>

        <ContainerCheckout>
          <DivInicial>
            <h1>Cafés Selecionados</h1>
          </DivInicial>
          <DivTeste>
            {itensConsulta.map((itemConsulta) =>
              dataFake
                .filter((item) => item.id === itemConsulta.item)
                .map((item) => (
                  <CartListCheckout
                    key={item.id}
                    coffee={item}
                    quantidade={itemConsulta.quantidade}
                  />
                ))
            )}
          </DivTeste>

          <DivNav>
            <DivValor>
              <div className="div2">
                <p>Entrega</p>
                <span>R${DELIVERY_PRICE.toFixed(2)}</span>
              </div>
              <div className="div3">
                <h2>Total</h2>
                <span>R$ {valorCart.toFixed(2)}</span>
              </div>
            </DivValor>
          </DivNav>
          <DivButton>
            <NavLink to="/orders">
              <ButtonConfirm>Retornar a listagem de pedidos</ButtonConfirm>
            </NavLink>
          </DivButton>
        </ContainerCheckout>
      </Container>
    </>
  );
}
