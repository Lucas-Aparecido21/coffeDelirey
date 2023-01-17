import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  font-family: "Baloo 2", sans-serif;
  display: grid;

  grid-template-columns: 1fr 1fr;
  section {
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
`;

export const ContainerCep = styled.nav`
  width: 85%;
  height: 400px;

  background-color: ${(props) => props.theme["base-card"]};

  h2,
  p {
    color: ${(props) => props.theme["base-text"]};
    font-weight: 100;
  }

  svg {
    color: ${(props) => props.theme["yellow-base"]};
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const BaseInput = styled.input`
  background-color: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-label"]};
  height: 30px;
  all: unset;
  padding-left: 12px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  ::placeholder {
    color: ${(props) => props.theme["base-label"]};

    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-style: normal;
  }
`;

export const CepInput = styled(BaseInput)`
  grid-area: "cep";
  margin-top: 24px;
  width: 200px;
`;

export const RuaInput = styled(BaseInput)`
  grid-area: "rua";
  margin-top: 24px;
  width: 480px;
`;

export const NumeroInput = styled(BaseInput)`
  grid-area: "numero";
  margin-top: 24px;
  width: 140px;
`;

export const ComplementoInput = styled(BaseInput)`
  grid-area: "complemento";
  margin-top: 24px;
  width: 250px;
`;

export const BairroInput = styled(BaseInput)`
  grid-area: "bairro";
  margin-top: 24px;
  width: 180px;
`;

export const CidadeInput = styled(BaseInput)`
  grid-area: "cidade";
  width: 180px;
`;

export const UFInput = styled(BaseInput)`
  grid-area: "uf";
  width: 50px;
`;
export const ContainerFpg = styled.div`
  width: 80%;
  margin-top: 2rem;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const ContainerCheckout = styled.div`
  width: 500px;
  height: 300px;
  background-color: ${(props) => props.theme["base-card"]};
`;
