import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: flex;
    width: 100px;
    bottom: 1.5rem;
    position: relative;
  }

  span {
    font-size: 12px;
    background-color: ${(props) => props.theme["yellow-light"]};
    border-radius: 8px;
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    text-transform: uppercase;
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  align-items: center;
  background-color: ${(props) => props.theme["base-card"]};
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: ${(props) => props.theme["base-label"]} 3px 3px 18px;
  /* :hover {
  } */
`;

export const Description = styled.p`
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme["base-label"]};
  width: 80%;
  font-size: 16px;
  align-self: center;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 99px;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 100;
    color: ${(props) => props.theme["base-text"]};
  }

  div {
    width: 70px;
    height: 45px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme["base-button"]};
    justify-content: center;

    span {
      background-color: ${(props) => props.theme["base-button"]};
      font-size: 18px;
      padding: 0 3px;
    }

    button {
      width: 100%;
      height: 100%;
      all: unset;
      display: flex;
      cursor: pointer;
    }
  }
  gap: 1.5rem;
`;

export const DivTag = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonCart = styled.button`
  all: unset;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["purple-dark"]};
  border-radius: 10px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 70%;
    color: ${(props) => props.theme.white};
  }

  :hover {
    background-color: #6a5acd;
  }
`;
