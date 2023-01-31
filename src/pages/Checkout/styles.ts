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
  margin-top: 1rem;
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
    justify-content: space-between;
  }

  button:hover {

    background-color: ${(props) => props.theme["base-hover"]};
    transition: all 0.3s;
  }
  button:active {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const ContainerCheckout = styled.nav`
  margin-top: 66px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  width: 600px;
  min-height: 100px;
  max-height: 750px;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const DivInicial = styled.div`
  display: flex;
  height: 10px;
  h1 {
    bottom: 38px;
  }
`;

export const DivNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const DivValor = styled.nav`
  width: 80%;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .div1 {
    display: flex;
    height: 40px;

    justify-content: space-between;
    align-items: end;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 18px;
  }
  .div2 {
    display: flex;
    color: ${(props) => props.theme["base-subtitle"]};
    height: 40px;
    justify-content: space-between;
    align-items: end;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
  }
  .div3 {
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: baseline;
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonConfirm = styled.button`
  margin-top: 1rem;
  width: 480px;
  height: 60px;
  background-color: ${(props) => props.theme["yellow-base"]};
  color: #fafafa;
  font-size: 18px;
  border: none;
  border-radius: 14px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
    transition: all 0.2s;
  }
`;

export const ButtonHome = styled.button`
  cursor: pointer;
  width: 480px;
  height: 8px;
  background-color: transparent;
  color: ${(props) => props.theme["yellow-base"]};
  font-size: 18px;
  border: none;
  border-radius: 14px;
`;

export const DivTeste = styled.div`
  overflow-y: scroll;
  width: 590px;
  min-height: 10px;
  max-height: 400px;
  border-top-right-radius: 80px;
  scrollbar-color: red;

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme["base-card"]};
  }
  ::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    border-radius: 8px;
    // background-color: ${(props) => props.theme["base-card"]};
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

export const ContainerInfo = styled.nav`
  width: 85%;
  height: 200px;
  margin-top: 20px;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivInfo = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
  }
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const DivName = styled.div`
  display: flex;
  gap: 12px;
`;

export const InputNome = styled(BaseInput)`
  width: 40%;
`;

export const InputSNome = styled(BaseInput)`
  width: 40%;
`;

export const InputCel = styled(BaseInput)`
  margin-top: 12px;
  width: 40%;
`;
