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
              <form onSubmit={handleSubmit(onSubmit)}>
                <CepInput
                  placeholder="CEP"
                  type="text"
                  onBlur={chekCEP}
                ></CepInput>
                <RuaInput
                  placeholder="Rua"
                  type="text"
                  {...register("logradouro")}
                ></RuaInput>
                <div className="Separador1">
                  <NumeroInput placeholder="Número" type="text"></NumeroInput>
                  <ComplementoInput
                    placeholder="Complemento"
                    type="text"
                  ></ComplementoInput>
                </div>
                <div className="Separador2">
                  <BairroInput
                    placeholder="Bairro"
                    type="text"
                    {...register("bairro")}
                  ></BairroInput>
                  <CidadeInput
                    placeholder="Cidade"
                    type="text"
                    {...register("cidade")}
                  ></CidadeInput>
                  <UFInput
                    placeholder="UF"
                    type="text"
                    {...register("uf")}
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
