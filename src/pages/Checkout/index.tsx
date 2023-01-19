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
import { dataList } from "../../database/fakeList";
import { NavLink } from "react-router-dom";

export function Checkout() {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (event: any) => {};

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <CepInput
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
          <DivInicial>
            <h1>Cafés Selecionados</h1>
          </DivInicial>
          {dataList.map((cart) => (
            <CartListCheckout key={cart.id} cart={cart} />
          ))}
          <DivNav>
            <DivValor>
              <div className="div1">
                <p>Total de itens</p>
                <span>R$ 38,00</span>
              </div>
              <div className="div2">
                <p>Entrega</p>
                <span>R$ 5,00</span>
              </div>
              <div className="div3">
                <h2>Total</h2>
                <span>R$ 43,00</span>
              </div>
            </DivValor>
          </DivNav>
          <DivButton>
            <NavLink to="/Sucess">
              <button>CONFIRMAR PEDIDO</button>
            </NavLink>
          </DivButton>
        </ContainerCheckout>
      </Container>
    </>
  );
}
