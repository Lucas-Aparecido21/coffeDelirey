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
  width: 1580px;
  height: 650px;
  margin-top: 20px;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  display: flex;
  justify-content: center;
`;

export const DivInfo = styled.div`
  margin-top: 2rem;
  display: flex;
  height: 50px;
  position: absolute;
  justify-content: center;
  gap: 18px;
  width: 80%;
  /* background-color: ${(props) => props.theme["base-input"]}; */
`;

export const DivCodPedido = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: initial;
  /* background-color: ${(props) => props.theme["base-input"]}; */
`;

export const DivCodCliente = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 12rem;
  /* background-color: ${(props) => props.theme["base-input"]}; */
`;

export const DivDatapedido = styled.div`
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 12rem;
  /* background-color: ${(props) => props.theme["base-input"]}; */
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
  /* background-color: ${(props) => props.theme["base-input"]}; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivStatus = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
`;
export const DivOrders = styled.div`
  display: flex;
  height: 80px;
  justify-content: center;
  gap: 18px;
  width: 80%;
  background-color: ${(props) => props.theme["base-input"]};
`;
