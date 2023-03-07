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
  complemento?: string | undefined;
}
interface Open {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ isOpen, setIsOpen }: Open) {
  const savedCliente = localStorage.getItem("cliente");
  const [cliente, setCliente] = useState<Cliente>(
    ({} as Cliente) || savedCliente
  );

  function saveToLocalStorageCliente() {
    localStorage.setItem("cliente", JSON.stringify(cliente));
  }
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
    Swal.fire({
      icon: "success",
      title: "Cliente cadastrado com sucesso!",
      confirmButtonText: "OK",
      preConfirm: () => {
        setIsOpen(false);
      },
    });
  }

  const ConsultaCPF = async (event: any) => {
    saveToLocalStorageCliente();
    const cpf = event.target.value;

    try {
      const { data } = await api.getClientByCpf(cpf);
      setCliente((prevState) => {
        return {
          ...prevState,
          bairro: data.bairro.toString(),
          cidade: data.cidade.toString(),
          rua: data.rua.toString(),
          numero: data.numero.toString(),
          uf: data.uf.toString(),
          nome: data.nome.toString(),
          complemento: data.complemento?.toString(),
          telefone: data.telefone.toString(),
          cep: data.cep.toString(),
        };
      });
    } catch (error) {
      if (cpfValidacao.isValid(cpf)) {
        return;
      }

      alert("CPF não existe");
    }
  };
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
          <Button onClick={createCliente}>Confirmar</Button>
        </DivButton>
      </Container>
    </>
  );
}
