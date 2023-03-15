import styled from "styled-components";

export const ContainerGrid = styled.div`
  width: 100%;
  height: 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: fixed;
  z-index: 99;
  top: 0;
  background: #fafafa;

  @media (max-width: 640px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    display: flex;
  }
`;

export const ContainerCheckout = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 18rem;

  button svg {
    width: 100%;
    height: 18px;
  }
`;

export const ContainerLogo = styled.main`
  display: flex;
  width: 65%;
  justify-self: center;

  img {
    display: flex;
    align-items: center;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Locale = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 38px;
  font-size: 12px;
  width: 145px;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  border-radius: 8px;

  img {
    padding: 0 6px;
    align-self: center;
    display: flex;
  }
`;

export const Checkout = styled.button`
  all: unset;
  width: 38px;
  height: 38px;
  cursor: pointer;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-base"]};
  border-radius: 8px;

  span {
    all: unset;
    position: relative;
    display: flex;
    justify-content: center;
    background: ${(props) => props.theme["yellow-dark"]};
    color: #fafafa;
    align-content: center;
    font-style: normal;
    align-items: center;
    bottom: 8px;
    left: 24px;
    width: 16px;
    border-radius: 999px;
  }

  img {
    position: relative;
    bottom: 10px;
    left: 8px;
  }
`;

export const OrdersButton = styled.button`
  all: unset;
  width: 38px;
  height: 38px;
  cursor: pointer;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  border-radius: 8px;
  text-decoration: none;

  :active {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const ClientesButton = styled.button`
  all: unset;
  width: 38px;
  height: 38px;
  cursor: pointer;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  border-radius: 8px;
  text-decoration: none;

  :active {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
