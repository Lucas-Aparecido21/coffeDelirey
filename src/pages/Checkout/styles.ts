import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin-top: 108px;
  font-family: "Baloo 2", sans-serif;
  display: grid;

  grid-template-columns: 1fr 1fr;
  section {
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-top: 16px;
    width: 90%;
  }
  div h1 {
    width: 730px;
    position: relative;
    display: flex;
    font-size: 20px;
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 18px;
  }
`;

export const ContainerCep = styled.nav`
  width: 85%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme["base-card"]};

  .Separador1 {
    display: flex;
    gap: 1rem;
  }

  .Separador2 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
  }

  div {
    width: 90%;
    height: 80%;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 20px;
    font-weight: 100;
    font-family: "Roboto", sans-serif;
  }

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Roboto", sans-serif;
    font-weight: 600;
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

export const CepInput = styled(BaseInput)`
  grid-area: "cep";
  margin-top: 24px;
  width: 200px;
`;

export const RuaInput = styled(BaseInput)`
  grid-area: "rua";
  margin-top: 10px;
`;

export const NumeroInput = styled(BaseInput)`
  grid-area: "numero";
  margin-top: 10px;
  width: 140px;
`;

export const ComplementoInput = styled(BaseInput)`
  grid-area: "complemento";
  margin-top: 10px;
  width: 250px;
`;

export const BairroInput = styled(BaseInput)`
  grid-area: "bairro";
  margin-top: 10px;
  width: 280px;
`;

export const CidadeInput = styled(BaseInput)`
  grid-area: "cidade";
  width: 250px;
`;

export const UFInput = styled(BaseInput)`
  grid-area: "uf";
  width: 50px;
`;
export const ContainerFpg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 200px;
  margin-top: 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const DivFpg = styled.div`
  width: 90%;
  height: 80%;

  svg {
    color: ${(props) => props.theme["purple-dark"]};
  }

  div h2 {
    display: flex;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  div p {
    display: flex;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-text"]};
  }

  div button {
    width: 90%;
    margin-top: 3rem;
    gap: 1.5rem;
  }

  button {
    all: unset;
    width: 80px;
    height: 40px;
    border-radius: 8px;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    text-align: center;
    border: 1px solid transparent;
  }

  button:hover {
    /* border: solid 1px ${(props) => props.theme["purple-dark"]}; */
    background-color: ${(props) => props.theme["base-hover"]};
    transition: all 0.3s;
  }
`;

export const ContainerCheckout = styled.div`
  margin-top: 108px;
  width: 500px;
  height: 300px;
  background-color: ${(props) => props.theme["base-card"]};
`;
