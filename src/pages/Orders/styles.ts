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

export const ContainerOrders = styled.div`
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
  width: 1390px;
  font-size: 20px;
  color: ${(props) => props.theme["base-subtitle"]};
  background-color: ${(props) => props.theme["base-card"]};
`;

export const DivCodPedido = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: initial;
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
  justify-content: center;
  gap: 1.5rem;
`;

export const DivStatus = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
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
