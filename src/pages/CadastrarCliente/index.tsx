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
import { Modal } from "./Components/Modal";
import { MapPinLine, UserCircle } from "phosphor-react";
import { useState } from "react";
import * as api from "../../services/api";
import { cpf as cpfValidacao } from "cpf-cnpj-validator";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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

export function CadastrarCliente() {
  const [cliente, setCliente] = useState<Cliente>({} as Cliente);
  const [isOpen, setIsOpen] = useState(false);
  const [modalMensagem, setModalMensagem] = useState("");

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
  function createCliente() {
    api.postCreateCliente(cliente);
  }
  const navigate = useNavigate();
  const ConsultaCPF = async (event: any) => {
    const cpf = event.target.value;

    try {
      await api.getClientByCpf(cpf);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Já existe um cliente com este CPF!",
      });
    } catch (error) {
      if (!cpfValidacao.isValid(cpf)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "O CPF informado não é válido!",
        });
        return;
      }
    }
  };

  function handleConfirmClient() {
    if (!cliente) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha os dados obrigatórios!",
      });
    }

    createCliente();

    Swal.fire({
      icon: "success",
      title: "Cadastro salvo com sucesso",
      showConfirmButton: true,
      preConfirm: () => {
        navigate(-1);
      },
    });
  }

  console.log(cliente);
  return (
    <>
      <Header />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalMensagem={modalMensagem}
        setModalMensagem={setModalMensagem}
      />
      <Titulo>Incluir Cadastro</Titulo>
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
            <Confirmar onClickCapture={handleConfirmClient}>
              Incluir Cadastro
            </Confirmar>
          </DivBotao>
        </Container>
      </Divisor>
    </>
  );
}
