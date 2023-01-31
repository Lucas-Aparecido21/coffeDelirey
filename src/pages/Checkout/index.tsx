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
import { useEffect, useState } from "react";

export function Checkout() {
  let { setFormPag, formPag } = useCart();
  // const { register, setValue } = useForm();
  const DELIVERY_PRICE = 3.5;
  const { cartItems, cartItemsTotal } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const savedName = localStorage.getItem("inputName");
  const savedSName = localStorage.getItem("inputSName");
  const savedCel = localStorage.getItem("inputCel");
  const savedCEP = localStorage.getItem("inputValue");
  const savedLogradouro = localStorage.getItem("inputLogra");
  const savedBairro = localStorage.getItem("inputBairro");
  const savedComplemento = localStorage.getItem("inputComplemento");
  const savedUf = localStorage.getItem("inputUf");
  const savedNumber = localStorage.getItem("inputNumber");
  const savedLocalidade = localStorage.getItem("inputLocalidade");

  const { setCartItems } = useCart();

  const [inputName, setInputName] = useState(savedName || "");
  const [inputSName, setInputSName] = useState(savedSName || "");
  const [inputCel, setInputCel] = useState(savedCel || "");
  const [valueNav, setValueNav] = useState("/Checkout");

  const [inputValue, setInputValue] = useState(savedCEP || "");
  const [inputNumber, setInputNumber] = useState(savedNumber || "");
  const [inputComplemento, setInputComplemento] = useState(
    savedComplemento || ""
  );
  const [inputLogradouro, setInputLogradouro] = useState(savedLogradouro || "");
  const [inputBairro, setInputBairro] = useState(savedBairro || "");
  const [inputLocalidade, setInputLocalidade] = useState(savedLocalidade || "");
  const [inputUf, setInputUf] = useState(savedUf || "");

  const ConsultaCEP = (event: any) => {
    const cep = event.target.value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setInputLogradouro(data.logradouro);
        setInputBairro(data.bairro);
        setInputLocalidade(data.localidade);
        setInputUf(data.uf);
      });

    localStorage.setItem("inputValue", inputValue);

    useEffect(() => {
      const savedCEP = localStorage.getItem("inputValue");
      if (savedCEP !== null) {
        setInputValue(savedCEP);
      }
    }, []);
  };

  function saveToLocalStorageLogradouro() {
    localStorage.setItem("inputLogradouro", inputLogradouro);
  }

  useEffect(() => {
    const savedLogradouro = localStorage.getItem("inputLogradouro");
    if (savedLogradouro !== null) {
      setInputLogradouro(savedLogradouro);
    }
  }, []);

  function saveToLocalStorageNumber() {
    localStorage.setItem("inputNumber", inputNumber);
  }

  useEffect(() => {
    const savedNumber = localStorage.getItem("inputNumber");
    if (savedNumber !== null) {
      setInputNumber(savedNumber);
    }
  }, []);

  function saveToLocalStorageComplemento() {
    localStorage.setItem("inputComplemento", inputComplemento);
  }

  useEffect(() => {
    const savedComplemento = localStorage.getItem("inputComplemento");
    if (savedComplemento !== null) {
      setInputComplemento(savedComplemento);
    }
  }, []);

  function saveToLocalStorageBairro() {
    localStorage.setItem("inputBairro", inputBairro);
  }

  useEffect(() => {
    const savedBairro = localStorage.getItem("inputBairro");
    if (savedBairro !== null) {
      setInputBairro(savedBairro);
    }
  }, []);

  function saveToLocalStorageLocalidade() {
    localStorage.setItem("inputLocalidade", inputLocalidade);
  }

  useEffect(() => {
    const savedLocalidade = localStorage.getItem("inputLocalidade");
    if (savedLocalidade !== null) {
      setInputLocalidade(savedLocalidade);
    }
  }, []);

  function saveToLocalStorageUf() {
    localStorage.setItem("inputUf", inputUf);
  }

  useEffect(() => {
    const savedUf = localStorage.getItem("inputUf");
    if (savedUf !== null) {
      setInputUf(savedUf);
    }
  }, []);

  function handleClick() {
    if (inputValue === "") {
      alert("O Endereço de entrega é obrigatório");
      return;
    }
    if (inputNumber === "") {
      alert("O Numero do endereço é obrigatório");
      return;
    }
    if (inputName === "") {
      alert("As Informações pessoais são obrigatórias");
      return;
    }
    if (inputSName === "") {
      alert("As Informações pessoais são obrigatórias");
      return;
    }
    if (inputCel === "") {
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

  function saveToLocalStorageCel() {
    localStorage.setItem("inputCel", inputCel);
  }
  useEffect(() => {
    const savedCel = localStorage.getItem("inputCel");
    if (savedCel !== null) {
      setInputCel(savedCel);
    }
  }, []);

  function saveToLocalStorageSName() {
    localStorage.setItem("inputSName", inputSName);
  }

  useEffect(() => {
    const savedName = localStorage.getItem("inputName");
    if (savedName !== null) {
      setInputName(savedName);
    }
  }, []);

  function saveToLocalStorageName() {
    localStorage.setItem("inputName", inputName);
  }

  useEffect(() => {
    const savedName = localStorage.getItem("inputName");
    if (savedName !== null) {
      setInputName(savedName);
    }
  }, []);
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
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    onBlur={saveToLocalStorageName}
                  />
                  <InputSNome
                    placeholder="Nome"
                    value={inputSName}
                    onChange={(e) => setInputSName(e.target.value)}
                    onBlur={saveToLocalStorageSName}
                  />
                </DivName>
                <InputCel
                  placeholder="Celular"
                  type="tel"
                  value={inputCel}
                  onChange={(e) => setInputCel(e.target.value)}
                  onBlur={saveToLocalStorageCel}
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
                  onBlur={ConsultaCEP}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                ></CepInput>

                <RuaInput
                  placeholder="Rua"
                  type="text"
                  value={inputLogradouro}
                  // {...register("logradouro")}
                  onBlur={saveToLocalStorageLogradouro}
                  onChange={(e) => setInputLogradouro(e.target.value)}
                ></RuaInput>
                <div className="Separador1">
                  <NumeroInput
                    placeholder="Número"
                    type="text"
                    value={inputNumber}
                    onBlur={saveToLocalStorageNumber}
                    onChange={(e) => setInputNumber(e.target.value)}
                  ></NumeroInput>
                  <ComplementoInput
                    placeholder="Complemento (opcional)"
                    type="text"
                    value={inputComplemento}
                    onBlur={saveToLocalStorageComplemento}
                    onChange={(e) => setInputComplemento(e.target.value)}
                  ></ComplementoInput>
                </div>
                <div className="Separador2">
                  <BairroInput
                    placeholder="Bairro"
                    type="text"
                    value={inputBairro}
                    onBlur={saveToLocalStorageBairro}
                    onChange={(e) => setInputBairro(e.target.value)}
                  ></BairroInput>
                  <CidadeInput
                    placeholder="Cidade"
                    type="text"
                    value={inputLocalidade}
                    onBlur={saveToLocalStorageLocalidade}
                    onChange={(e) => setInputLocalidade(e.target.value)}
                  ></CidadeInput>
                  <UFInput
                    placeholder="UF"
                    type="text"
                    value={inputUf}
                    onBlur={saveToLocalStorageUf}
                    onChange={(e) => setInputUf(e.target.value)}
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
