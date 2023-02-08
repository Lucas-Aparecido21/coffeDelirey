// import { useState } from "react";
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
  ButtonHome,
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
// import { useForm } from "react-hook-form";
import { CartListCheckout } from "./Components/Cart";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import api from "../../services/api";

interface Cliente {
  cpf: string;
  nome: string;
  telefone: string;
  cep: string;
  rua: string;
  cidade: string;
  bairro: string;
  uf: string;
  numero: string;
  complemento?: string;
}

export function Checkout() {
  let { setFormPag, formPag } = useCart();
  // const { register, setValue } = useForm();
  const DELIVERY_PRICE = 3.5;
  const { cartItems, cartItemsTotal } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const { setCartItems } = useCart();

  const [cliente, setCliente] = useState<Cliente>({} as Cliente);
  const [valueNav, setValueNav] = useState("/Checkout");
  // const ConsultaCEP = (event: any) => {
  //   const cep = event.target.value;

  //   fetch(`https://viacep.com.br/ws/${cep}/json/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setInputLogradouro(data.logradouro);
  //       setInputBairro(data.bairro);
  //       setInputLocalidade(data.localidade);
  //       setInputUf(data.uf);
  //     });

  const ConsultaCPF = (event: any) => {
    const cpf2 = event.target.value;
    console.log(cpf2);
    api.get(`clientes/${cpf2}`).then((res) => {});
  };

  console.log(ConsultaCPF);

  // const changeCliente = (campo: keyof typeof cliente, valor: string) => {
  //   setCliente((prevState) => {
  //     return { ...prevState, [campo]: valor }
  //   })
  // }

  function handleClick() {
    if (cliente.rua === "") {
      alert("O Endereço de entrega é obrigatório");
      return;
    }
    if (cliente.numero === "") {
      alert("O Numero do endereço é obrigatório");
      return;
    }
    if (cliente.cpf === "") {
      alert("As Informações pessoais são obrigatórias");
      return;
    }
    if (cliente.nome === "") {
      alert("As Informações pessoais são obrigatórias");
      return;
    }
    if (cliente.telefone === "") {
      alert("As Informações pessoais são obrigatórias");
      return;
    }
    if (cartItemsTotal === 0) {
      alert("Insira algum item no carrinho antes de concluir a compra");
    } else {
      setCartItems([]);

      setValueNav("/Sucess");
    }
  }

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
                    value={cliente.cpf}
                    // onChange={(e) => setinputCPF(e.target.value)}
                  />
                  <InputSNome
                    placeholder="Nome"
                    value={cliente.nome}
                    // onChange={(e) => setInputSName(e.target.value)}
                  />
                </DivName>
                <InputCel
                  placeholder="Celular"
                  type="tel"
                  value={cliente.telefone}
                  // onChange={(e) => setInputCel(e.target.value)}
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
              <p>
                Informe o endereço de entrega onde deseja receber seu pedido
              </p>

              <form>
                <CepInput
                  placeholder="CEP"
                  type="text"
                  // onBlur={ConsultaCEP}
                  value={cliente.cep}
                  // onChange={(e) => setInputValue(e.target.value)}
                ></CepInput>

                <RuaInput
                  placeholder="Rua"
                  type="text"
                  value={cliente.rua}
                  // onChange={(e) => setInputLogradouro(e.target.value)}
                ></RuaInput>
                <div className="Separador1">
                  <NumeroInput
                    placeholder="Número"
                    type="text"
                    value={cliente.numero}
                    // onChange={(e) => setInputNumber(e.target.value)}
                  ></NumeroInput>
                  <ComplementoInput
                    placeholder="Complemento (opcional)"
                    type="text"
                    value={cliente.complemento}
                    // onChange={(e) => setInputComplemento(e.target.value)}
                  ></ComplementoInput>
                </div>
                <div className="Separador2">
                  <BairroInput
                    placeholder="Bairro"
                    type="text"
                    value={cliente.bairro}

                    // onChange={(e) => setInputBairro(e.target.value)}
                  ></BairroInput>
                  <CidadeInput
                    placeholder="Cidade"
                    type="text"
                    value={cliente.cidade}

                    // onChange={(e) => setInputLocalidade(e.target.value)}
                  ></CidadeInput>
                  <UFInput
                    placeholder="UF"
                    type="text"
                    value={cliente.uf}

                    // onChange={(e) => setInputUf(e.target.value)}
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
                <button
                  style={{
                    border:
                      formPag === "Cartão de Crédito"
                        ? `2px solid #4B2995`
                        : "2px solid transparent",
                  }}
                  onClick={() => setFormPag((formPag = "Cartão de Crédito"))}
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
                  onClick={() => setFormPag((formPag = "Cartão de Débito"))}
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
                  onClick={() => setFormPag((formPag = "Dinheiro"))}
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

            <NavLink to={valueNav} onClickCapture={handleClick}>
              <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
            </NavLink>
          </DivButton>
        </ContainerCheckout>
      </Container>
    </>
  );
}
