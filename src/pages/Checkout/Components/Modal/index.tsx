import {
  Button,
  Container,
  DivBairro,
  DivCEP,
  DivCPFandNome,
  DivEndereco,
  DivInfoPessoais,
  DivNumero,
  DivRua,
  DivSubTitulo,
  DivSubTituloEnd,
  DivTelefone,
  DivTitulo,
  InputBairro,
  InputCEP,
  InputCidade,
  InputComplemento,
  InputCPF,
  InputNome,
  InputNumero,
  InputRua,
  InputTelefone,
  InputUF,
  DivButton,
} from "./styles";
import { cpf as cpfValidacao } from "cpf-cnpj-validator";
import {
  MapPinLine,
  UserCircle,
  UserCirclePlus,
  XCircle,
} from "phosphor-react";
import React, { useState } from "react";
import * as api from "../../../../services/api";
import Swal from "sweetalert2";

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
  complemento?: string | undefined;
}
interface Open {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ isOpen, setIsOpen }: Open) {
  const [cliente, setCliente] = useState<Cliente>({} as Cliente);
  const cpfLocal = localStorage.getItem("cpf");
  if (cpfLocal) {
    cliente.cpf = cpfLocal;
  }

  const ConsultaCEP = async (event: any) => {
    const cep = event.target.value;
    try {
      const { data } = await api.viaCep(cep);

      setCliente({
        ...cliente,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        uf: data.uf,
      });
      console.log(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "O CEP digitado não foi localizado!",
      });
    }
  };
  function createCliente() {
    api.postCreateCliente(cliente);
  }

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
    if (!cliente.cpf) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Campo CPF é obrigatório!",
      });
      return;
    }
    if (!cliente.nome) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Campo nome é obrigatório!",
      });
      return;
    }
    if (!cliente.telefone) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Campo telefone é obrigatório!",
      });
      return;
    }
    if (!cliente.bairro) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Campo bairro é obrigatório!",
      });
      return;
    }
    if (!cliente.cep) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Campo cep é obrigatório!",
      });
      return;
    }
    if (!cliente.numero) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Campo numero é obrigatório!",
      });
      return;
    }
    if (!cliente.rua) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Campo rua é obrigatório!",
      });
      return;
    }

    if (!cliente.uf) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Campo uf é obrigatório!",
      });
      return;
    }

    createCliente();

    Swal.fire({
      icon: "success",
      title: "Cadastro salvo com sucesso",
      showConfirmButton: true,
      preConfirm: () => {
        setIsOpen(false);
      },
    });
  }

  return (
    <>
      <Container style={{ display: isOpen ? "flex" : "none" }}>
        <DivTitulo>
          <h1>
            <UserCirclePlus size={38} />
            Incluir Cliente
          </h1>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <XCircle size={28} />
          </button>
        </DivTitulo>

        <DivInfoPessoais>
          <DivSubTitulo>
            <UserCircle size={34} />
            <h1>Informações pessoais</h1>
          </DivSubTitulo>

          <DivCPFandNome>
            <InputCPF
              type="text"
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
            <InputNome
              type="text"
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
          </DivCPFandNome>
          <DivTelefone>
            <InputTelefone
              type="text"
              placeholder="Telefone"
              name="telefone"
              value={cliente.telefone || ""}
              onChange={(e) =>
                setCliente({
                  ...cliente,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </DivTelefone>
        </DivInfoPessoais>

        <DivEndereco>
          <DivSubTituloEnd>
            <MapPinLine size={28} />
            <h1> Endereço de Entrega</h1>
          </DivSubTituloEnd>
          <DivCEP>
            <InputCEP
              type="text"
              placeholder="CEP"
              name="cep"
              onBlur={ConsultaCEP}
              value={cliente.cep || ""}
              onChange={(e) =>
                setCliente({
                  ...cliente,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </DivCEP>
          <DivRua>
            <InputRua
              type="text"
              placeholder="Rua"
              name="rua"
              value={cliente.rua || ""}
              onChange={(e) =>
                setCliente({
                  ...cliente,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </DivRua>
          <DivNumero>
            <InputNumero
              type="text"
              placeholder="Número"
              name="numero"
              value={cliente.numero || ""}
              onChange={(e) =>
                setCliente({
                  ...cliente,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <InputComplemento
              type="text"
              placeholder="Complemento (opcional)"
              name="complemento"
              value={cliente.complemento || ""}
              onChange={(e) =>
                setCliente({
                  ...cliente,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </DivNumero>
          <DivBairro>
            <InputBairro
              type="text"
              placeholder="Bairro"
              name="bairro"
              value={cliente.bairro || ""}
              onChange={(e) =>
                setCliente({
                  ...cliente,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <InputCidade
              type="text"
              placeholder="Cidade"
              name="cidade"
              value={cliente.cidade || ""}
              onChange={(e) =>
                setCliente({
                  ...cliente,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <InputUF
              type="text"
              placeholder="UF"
              name="uf"
              value={cliente.uf || ""}
              onChange={(e) =>
                setCliente({
                  ...cliente,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </DivBairro>
        </DivEndereco>

        <DivButton>
          <Button onClick={handleConfirmClient}>Confirmar</Button>
        </DivButton>
      </Container>
    </>
  );
}
