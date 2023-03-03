import {
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
} from "./styles";
import { MapPinLine, UserCircle, UserCirclePlus } from "phosphor-react";
interface Open {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ isOpen, setIsOpen }: Open) {
  return (
    <>
      <Container style={{ display: isOpen ? "none" : "flex" }}>
        {/* <Container style={{ display: isOpen ? "flex" : "none" }}> */}
        <DivTitulo>
          <UserCirclePlus size={38} />
          <h1>Incluir Cliente</h1>
        </DivTitulo>

        <DivInfoPessoais>
          <DivSubTitulo>
            <UserCircle size={28} />
            <h1>Informações pessoais</h1>
          </DivSubTitulo>
          <DivCPFandNome>
            <InputCPF type="text" placeholder="CPF" />
            <InputNome type="text" placeholder="Nome" />
          </DivCPFandNome>
          <DivTelefone>
            <InputTelefone type="text" placeholder="Telefone" />
          </DivTelefone>
        </DivInfoPessoais>

        <DivEndereco>
          <DivSubTituloEnd>
            <MapPinLine size={28} />
            <h1> Endereço de Entrega</h1>
          </DivSubTituloEnd>
          <DivCEP>
            <InputCEP type="text" placeholder="CEP" />
          </DivCEP>
          <DivRua>
            <InputRua type="text" placeholder="Rua" />
          </DivRua>
          <DivNumero>
            <InputNumero type="text" placeholder="Número" />
            <InputComplemento
              type="text"
              placeholder="Complemento (opcional)"
            />
          </DivNumero>
          <DivBairro>
            <InputBairro type="text" placeholder="Bairro" />
            <InputCidade type="text" placeholder="Cidade" />
            <InputUF type="text" placeholder="UF" />
          </DivBairro>
        </DivEndereco>
      </Container>
    </>
  );
}
