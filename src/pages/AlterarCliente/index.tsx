/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../components/Header";
import {
  ContainerCep,
  ContainerInfo,
  CepInput,
  RuaInput,
  NumeroInput,
  ComplementoInput,
  BairroInput,
  CidadeInput,
  UFInput,
  DivInfo,
  InputNome,
  InputSNome,
  InputCel,
  DivName,
  Container,
  Confirmar,
  Titulo,
  Divisor,
  DivBotao,
} from "./styles";
import { MapPinLine, UserCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import * as api from "../../services/api";
import { Modal } from "./Components/Modal";

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

export function AlterarCliente() {
  const [cliente, setCliente] = useState<Cliente>({} as Cliente);
  const [isOpen, setIsOpen] = useState(false);

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
  const idCliente = localStorage.getItem("idCliente");
  const ConsultaCliente = async () => {
    if (!idCliente) {
      return;
    }
    const { data } = await api.getClientByCpf(idCliente);

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
  }, [idCliente]);

  async function handleConfirmClient() {
    if (cliente.bairro === "") {
      alert("O bairro do cliente não pode ser vazio");
      return;
    }
    if (cliente.cidade === "") {
      alert("A cidade do cliente não pode ser vazio");
      return;
    }
    if (cliente.rua === "") {
      alert("A rua do cliente não pode ser vazio");
      return;
    }
    if (cliente.numero === "") {
      alert("O numero do cliente não pode ser vazio");
      return;
    }
    if (cliente.telefone === "") {
      alert("O telefone do cliente não pode ser vazio");
      return;
    }
    if (cliente.cidade === "") {
      alert("A cidade do cliente não pode ser vazio");
      return;
    }
    if (cliente.uf === "") {
      alert("A UF do cliente não pode ser vazio");
      return;
    }
    if (cliente.cep === "") {
      alert("O CEP do cliente não pode ser vazio");
      return;
    }
    if (cliente.nome === "") {
      alert("O nome do cliente não pode ser vazio");
      return;
    }
    setIsOpen(true);
    if (!idCliente) {
      return;
    }

    await api.postAtualizaCliente(idCliente, {
      nome: cliente.nome.toString(),
      cep: cliente.cep.toString(),
      cidade: cliente.cidade.toString(),
      telefone: cliente.telefone.toString(),
      rua: cliente.rua.toString(),
      uf: cliente.uf.toString(),
      bairro: cliente.bairro.toString(),
      numero: cliente.numero.toString(),
    });
  }

  return (
    <>
      <Header />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Titulo>Alterar Cadastro</Titulo>
      <Divisor>
        <Container>
          <ContainerInfo>
            <DivInfo>
              <h2>
                <UserCircle />
                Informações pessoais
              </h2>
              <form action="">
                <DivName>
                  <InputNome name="cpf" value={cliente.cpf || ""} />
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
          <DivBotao>
            <Confirmar onClick={handleConfirmClient}>
              Confirmar Alterações
            </Confirmar>
          </DivBotao>
        </Container>
      </Divisor>
    </>
  );
}
