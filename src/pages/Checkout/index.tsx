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
  const DELIVERY_PRICE = 3.5;
  const { cartItems, cartItemsTotal } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;
  const { setCartItems } = useCart();
  const [cliente, setCliente] = useState<Cliente>({} as Cliente);
  const [valueNav, setValueNav] = useState("/Checkout");

  const ConsultaCEP = (event: any) => {
    const cep = event.target.value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setCliente({
          ...cliente,
          rua: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          uf: data.uf,
        });
      });
  };

  const ConsultaCPF = (event: any) => {
    const cpf = event.target.value;

    api.get(`clientes/${cpf} `).then((res) => {
      setCliente((prevState) => {
        return {
          ...prevState,
          bairro: res.data.bairro,
          cidade: res.data.cidade,
          rua: res.data.rua,
          numero: res.data.numero,
          uf: res.data.uf,
          nome: res.data.nome,
          complemento: res.data.complemento,
          telefone: res.data.telefone,
          cep: res.data.cep,
        };
      });
    });
  };

  function createPedido() {
    // api.post(`pedidos`);
    // const data = new FormData();
    // data.append("valor", cartTotal);
    // data.append("entrega", DELIVERY_PRICE);
  }
  function createCliente() {
    // if (cliente === undefined) {
    //   const data = new FormData();
    //   data.append("cpf");
    //   // data.append("nome", { ...cliente.nome });
    //   // data.append("telefone", { ...cliente.telefone });
    //   // data.append("cep", { ...cliente.cep });
    //   // data.append("rua", { ...cliente.rua });
    //   // data.append("cidade", { ...cliente.cidade });
    //   // data.append("bairro", { ...cliente.bairro });
    //   // data.append("uf", { ...cliente.uf });
    //   // data.append("numero", { ...cliente.numero });
    // } else {
  }

  function handleClick() {
    if (cliente.cpf === undefined) {
      alert("As Informações pessoais são obrigatórias");
      return;
    }
    if (cliente.nome === undefined) {
      alert("As Informações pessoais são obrigatórias");
      return;
    }
    if (cliente.telefone === undefined) {
      alert("As Informações pessoais são obrigatórias");
      return;
    }
    if (cliente.rua === undefined) {
      alert("O Endereço de entrega é obrigatório");
      return;
    }
    if (cliente.numero === undefined) {
      alert("O Numero do endereço é obrigatório");
      return;
    }

    if (cartItemsTotal === 0) {
      alert("Insira algum item no carrinho antes de concluir a compra");
    } else {
      setCartItems([]);
      setValueNav("/Sucess");
      createPedido();
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
                    name="cpf"
                    value={cliente.cpf || ""}
                    onChange={(e) =>
                      setCliente({
                        ...cliente,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={ConsultaCPF}
                  />
                  <InputSNome
                    placeholder="Nome"
                    name="nome"
                    value={cliente.nome || ""}
                    onChange={(e) =>
                      setCliente({
                        ...cliente,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </DivName>
                <InputCel
                  placeholder="Celular"
                  name="telefone"
                  type="tel"
                  value={cliente.telefone || ""}
                  onChange={(e) =>
                    setCliente({
                      ...cliente,
                      [e.target.name]: e.target.value,
                    })
                  }
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
                  name="cep"
                  type="text"
                  onBlur={ConsultaCEP}
                  value={cliente.cep || ""}
                  onChange={(e) =>
                    setCliente({
                      ...cliente,
                      [e.target.name]: e.target.value,
                    })
                  }
                ></CepInput>

                <RuaInput
                  placeholder="Rua"
                  name="rua"
                  type="text"
                  value={cliente.rua || ""}
                  onChange={(e) =>
                    setCliente({
                      ...cliente,
                      [e.target.name]: e.target.value,
                    })
                  }
                ></RuaInput>
                <div className="Separador1">
                  <NumeroInput
                    placeholder="Número"
                    name="numero"
                    type="text"
                    value={cliente.numero || ""}
                    onChange={(e) =>
                      setCliente({
                        ...cliente,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></NumeroInput>
                  <ComplementoInput
                    placeholder="Complemento (opcional)"
                    name="complemento"
                    type="text"
                    value={cliente.complemento || ""}
                    onChange={(e) =>
                      setCliente({
                        ...cliente,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></ComplementoInput>
                </div>
                <div className="Separador2">
                  <BairroInput
                    placeholder="Bairro"
                    name="bairro"
                    type="text"
                    value={cliente.bairro || ""}
                    onChange={(e) =>
                      setCliente({
                        ...cliente,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></BairroInput>
                  <CidadeInput
                    placeholder="Cidade"
                    name="cidade"
                    type="text"
                    value={cliente.cidade || ""}
                    onChange={(e) =>
                      setCliente({
                        ...cliente,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></CidadeInput>
                  <UFInput
                    placeholder="UF"
                    name="uf"
                    type="text"
                    value={cliente.uf}
                    onChange={(e) =>
                      setCliente({
                        ...cliente,
                        [e.target.name]: e.target.value,
                      })
                    }
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
