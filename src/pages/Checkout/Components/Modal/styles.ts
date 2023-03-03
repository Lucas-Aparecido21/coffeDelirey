import styled from "styled-components";

export const Container = styled.main`
  width: 65%;
  height: 550px;
  max-height: 555px;
  position: fixed;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: ${(props) => props.theme.background};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  box-shadow: 1px 1px 11px 8px gray;

  overflow-y: scroll;

  /* ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme["base-card"]};
  } */
  ::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    border-radius: 8px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    padding: 2px;
    height: 8px;
  }
`;

export const DivTitulo = styled.div`
  width: 90%;
  height: 10%;
  position: fixed;
  background-color: ${(props) => props.theme.background};
  margin-top: 1rem;
  margin-left: 4rem;
  display: flex;
  align-items: center;
  gap: 6px;

  h1 {
    font-size: 26px;
  }

  svg {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
/* INF. PESSOAIS */
export const DivInfoPessoais = styled.div`
  width: 90%;
  height: 100%;
  margin-left: 4rem;
  margin-top: 6rem;
  background-color: #f3f2f2;
  display: flex;
  flex-direction: column;
`;

export const DivSubTitulo = styled.div`
  display: flex;
  margin-left: 1rem;
  gap: 6px;
  h1 {
    font-size: 20px;
  }
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const DivCPFandNome = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 1rem;
  gap: 16px;
`;

export const DivTelefone = styled.div`
  margin-top: 10px;
  margin-left: 1rem;
`;

export const BaseInput = styled.input`
  all: unset;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};

  height: 40px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  padding-left: 12px;
  height: 50px;
  border-radius: 8px;
  ::placeholder {
    color: ${(props) => props.theme["base-label"]};

    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-style: normal;
  }
`;

export const InputCPF = styled(BaseInput)`
  width: 30%;
`;

export const InputNome = styled(BaseInput)`
  width: 50%;
`;

export const InputTelefone = styled(BaseInput)`
  width: 30%;
`;
/* INF. PESSOAIS */

/* ENDEREÇO */
export const DivEndereco = styled.div`
  width: 90%;
  height: 100%;
  margin-left: 4rem;
  margin-top: 1rem;
  background-color: #f3f2f2;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const DivSubTituloEnd = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-top: 1rem;
  gap: 6px;
  h1 {
    font-size: 20px;
  }
  svg {
    color: ${(props) => props.theme["yellow-base"]};
  }
`;

export const DivCEP = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 1rem;
`;
export const DivRua = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 1rem;
`;
export const DivNumero = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 1rem;
  gap: 16px;
`;
export const DivBairro = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 1rem;
  gap: 16px;
`;

export const InputCEP = styled(BaseInput)`
  width: 25%;
`;
export const InputRua = styled(BaseInput)`
  width: 50%;
`;
export const InputNumero = styled(BaseInput)``;
export const InputComplemento = styled(BaseInput)`
  width: 32%;
`;
export const InputBairro = styled(BaseInput)`
  width: 25%;
`;
export const InputCidade = styled(BaseInput)`
  width: 25%;
`;
export const InputUF = styled(BaseInput)`
  width: 10%;
`;

/* ENDEREÇO */
