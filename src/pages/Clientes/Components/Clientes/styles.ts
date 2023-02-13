import styled from "styled-components";

export const DivOrders = styled.nav`
  display: flex;
  height: 90px;
  justify-content: center;
  gap: 18px;
  width: 100%;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  margin-top: 1rem !important;
  align-items: center;

  :hover {
    box-shadow: 4px 2px 13px 2px gray;
  }
`;

export const DivInfo = styled.div`
  margin-top: 2rem;
  display: flex;
  height: 50px;
  position: absolute;
  justify-content: center;
  gap: 18px;
  width: 100%;
`;

export const DivCPF = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivNome = styled.div`
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
`;
export const DivCodCliente = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 12rem;
`;

export const DivCodValor = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  /* background-color: ${(props) => props.theme["base-input"]}; */
`;

export const DivButton = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  svg {
    width: 80px;
    height: 25px;
  }
  button {
    all: unset;
    width: 50px;
    height: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #alterar:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }

  #excluir:hover {
    color: red;
  }

  #consultar:hover {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;
