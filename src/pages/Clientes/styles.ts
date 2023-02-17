import styled from "styled-components";

export const Container = styled.main`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  margin-top: 108px;

  display: flex;
  justify-content: center;

  font-family: "Baloo 2", sans-serif;
  section {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`;

export const ContainerClientes = styled.div`
  width: 1400px;
  height: 700px;
  margin-top: 20px;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  display: flex;
  justify-content: center;

  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme["base-card"]};
  }
  ::-webkit-scrollbar {
    width: 8px;
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

export const DivInfo = styled.div`
  display: flex;
  height: 100px;
  position: absolute;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 1390;
  font-size: 20px;
  color: ${(props) => props.theme["base-subtitle"]};
  background-color: ${(props) => props.theme["base-card"]};
`;

export const DivCodCPF = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivDatapedido = styled.div`
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
`;

export const DivButton = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivOrders = styled.div`
  margin-top: 7rem;
`;

export const DivSubtitulo = styled.div`
  display: flex;
  width: 400px;
  height: 80px;
  justify-content: end;
  align-items: flex-end;
  position: relative;
  top: 8rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
  }
`;

export const DivOrdersCad = styled.nav`
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

export const DivInfoCad = styled.div`
  margin-top: 2rem;
  display: flex;
  height: 50px;
  position: absolute;
  justify-content: center;
  gap: 18px;
  width: 100%;
`;

export const DivCPFCad = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivNomeCad = styled.div`
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
`;
export const DivCodClienteCad = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 12rem;
`;

export const DivCodValorCad = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  /* background-color: ${(props) => props.theme["base-input"]}; */
`;

export const DivButtonCad = styled.div`
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
