// import { useState } from "react";
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
  DivInicial,
  DivValor,
  DivNav,
  DivButton,
  ButtonConfirm,
  ButtonHome,
  DivTeste,
} from "./styles";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import { useForm } from "react-hook-form";
import { CartListCheckout } from "./Components/Cart";

import { NavLink } from "react-router-dom";

import { useCart } from "../../hooks/useCart";
import { useState } from "react";

export function Checkout() {
  const { setFormaPagamento } = useCart();

  const { register, setValue } = useForm();
  const { handleConfirmOrder } = useCart();
  //const onSubmit = (event: any) => {};
  const DELIVERY_PRICE = 3.5;
  const { cartItems, cartItemsTotal } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;
  const chekCEP = (event: any) => {
    const cep = event.target.value;
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("logradouro", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.localidade);
        setValue("uf", data.uf);
      });
  };

  function CepValidator() {}

  return (
    <>
      <Header />
      <Container>
        <section>
          <div>
            <h1 style={{ display: "flex", top: "14px", left: "42px" }}>
              Complete seu pedido
            </h1>
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
              <form onSubmit={CepValidator}>
                <CepInput
                  id="teste"
                  placeholder="CEP"
                  type="text"
                  onBlur={chekCEP}></CepInput>
                <RuaInput
                  placeholder="Rua"
                  type="text"
                  {...register("logradouro")}></RuaInput>
                <div className="Separador1">
                  <NumeroInput placeholder="Número" type="text"></NumeroInput>
                  <ComplementoInput
                    placeholder="Complemento"
                    type="text"></ComplementoInput>
                </div>
                <div className="Separador2">
                  <BairroInput
                    placeholder="Bairro"
                    type="text"
                    {...register("bairro")}></BairroInput>
                  <CidadeInput
                    placeholder="Cidade"
                    type="text"
                    {...register("cidade")}></CidadeInput>
                  <UFInput
                    placeholder="UF"
                    type="text"
                    {...register("uf")}></UFInput>
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
                <button onClick={() => setFormaPagamento("Cartão de Crédito")}>
                  <CreditCard /> CARTÃO DE CRÉDITO
                </button>
                <button onClick={() => setFormaPagamento("Cartão de Débito")}>
                  <Bank /> CARTÃO DE DÉBITO
                </button>
                <button onClick={() => setFormaPagamento("Dinheiro")}>
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
            {cartItems.map((item) => (
              <CartListCheckout key={item.id} coffee={item} />
            ))}
          </DivTeste>
          <DivNav>
            <DivValor>
              <div className="div1">
                <p>Total de itens</p>
                <span>R${cartItemsTotal.toFixed(2)}</span>
              </div>
              <div className="div2">
                <p>Entrega</p>
                <span>R${DELIVERY_PRICE.toFixed(2)}</span>
              </div>
              <div className="div3">
                <h2>Total</h2>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
            </DivValor>
          </DivNav>
          <DivButton>
            <NavLink to="/">
              <ButtonHome> CONTINUAR COMPRANDO</ButtonHome>
            </NavLink>
            <NavLink to="/Sucess">
              <ButtonConfirm
                onClick={handleConfirmOrder}
                onInvalid={CepValidator}
                type="submit"
                onSubmit={CepValidator}>
                CONFIRMAR PEDIDO
              </ButtonConfirm>
            </NavLink>
          </DivButton>
        </ContainerCheckout>
      </Container>
    </>
  );
}
