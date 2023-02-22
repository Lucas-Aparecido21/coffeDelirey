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
  Titulo,
  Divisor,
} from "./styles";
import { MapPinLine, UserCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import * as api from "../../services/api";

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

// interface ClienteProps {
//   idCliente: string;
// }

export function ConsultarCliente() {
  const [cliente, setCliente] = useState<Cliente>({} as Cliente);

  const idCliente = "123";

  const ConsultaCliente = async () => {
    const { data } = await api.getClientByCpf(idCliente);
    if (idCliente) {
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
    }
  };
  useEffect(() => {
    ConsultaCliente();
  }, [idCliente]);

  return (
    <>
      <Header />

      <Titulo>Consultar Cadastro</Titulo>
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
                  />
                  <InputSNome
                    placeholder="Nome"
                    name="nome"
                    value={cliente.nome || ""}
                  />
                </DivName>
                <InputCel
                  placeholder="Celular"
                  name="telefone"
                  type="tel"
                  value={cliente.telefone || ""}
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
                  value={cliente.cep || ""}></CepInput>

                <RuaInput
                  placeholder="Rua"
                  name="rua"
                  type="text"
                  value={cliente.rua || ""}></RuaInput>
                <div className="Separador1">
                  <NumeroInput
                    placeholder="Número"
                    name="numero"
                    type="text"
                    value={cliente.numero || ""}></NumeroInput>
                  <ComplementoInput
                    placeholder="Complemento (opcional)"
                    name="complemento"
                    type="text"
                    value={cliente.complemento || ""}></ComplementoInput>
                  <BairroInput
                    placeholder="Bairro"
                    name="bairro"
                    type="text"
                    value={cliente.bairro || ""}></BairroInput>
                  <CidadeInput
                    placeholder="Cidade"
                    name="cidade"
                    type="text"
                    value={cliente.cidade || ""}></CidadeInput>
                  <UFInput
                    placeholder="UF"
                    name="uf"
                    type="text"
                    value={cliente.uf || ""}></UFInput>
                </div>
              </form>
            </div>
          </ContainerCep>
        </Container>
      </Divisor>
    </>
  );
}
