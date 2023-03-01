import styled from "styled-components";

export const ContainerGeral = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivCart = styled.div`
  display: grid;
  margin-top: 32px;
  width: 480px;
  height: 100px;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: solid 1px ${(props) => props.theme["base-button"]};

  img {
    width: 80px;
    height: 80px;
  }
`;

export const DivInfo = styled.div`
  display: flex;

  width: 200px;
  flex-direction: column;

  p {
    display: flex;
    justify-content: initial;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 400;
  }

  span {
    font-size: 18px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const DivMinusPlus = styled.div`
  display: flex;
  width: 80px;

  gap: 6px;
  height: 35px;
  border-radius: 10px;
  justify-content: center;
  align-items: self-end;
  background-color: ${(props) => props.theme["base-button"]};

  button {
    all: unset;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["purple-dark"]};

    cursor: pointer;
  }
  span {
    font-size: 20px;
    background-color: ${(props) => props.theme["base-button"]};
  }
`;

export const DivButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 18px;
`;

export const DivTrash = styled.button`
  all: unset;
  display: flex;
  width: 100px;
  height: 35px;
  font-family: "Roboto", sans-serif;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => props.theme["base-button"]};

  svg {
    color: ${(props) => props.theme["purple-dark"]};
    padding-right: 2px;
  }
`;

export const DivPrice = styled.div`
  width: 140px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;
