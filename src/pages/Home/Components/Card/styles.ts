import styled from "styled-components";

export const Container = styled.main`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 35%;
    bottom: 1.7rem;
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
  position: relative;
  flex-direction: column;
  width: 300px;
  height: 300px;
  align-items: center;
  background-color: ${(props) => props.theme["base-card"]};
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: ${(props) => props.theme["base-label"]} 3px 3px 18px;
  @media (max-width: 350px) {
    transform: scale(0.8);
  }
`;

export const Description = styled.p`
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme["base-label"]};
  width: 80%;
  height: 30px;
  margin-top: 10px;
  font-size: 16px;
  align-self: center;
`;

export const Price = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  align-items: center;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 100;
    color: ${(props) => props.theme["base-text"]};
  }

  div {
    width: 75px;
    height: 45px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme["base-button"]};
    justify-content: center;
    border-radius: 8px;

    span {
      background-color: ${(props) => props.theme["base-button"]};
      color: #000000;
      font-size: 18px;
      padding: 0 3px;
    }

    button {
      width: 100%;
      height: 100%;
      all: unset;
      display: flex;
      cursor: pointer;
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
  gap: 1rem;
  .value {
    font-size: 26px;
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const DivTag = styled.div`
  display: flex;
  position: relative;
  bottom: 8px;
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
