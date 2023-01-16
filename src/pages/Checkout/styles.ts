import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  font-family: "Baloo 2", sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  section {
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
`;

export const ContainerCep = styled.div`
  width: 70%;
  background-color: ${(props) => props.theme["base-input"]};

  h2,
  p {
    color: ${(props) => props.theme["base-text"]};
    font-weight: 100;
  }
  input {
    background-color: ${(props) => props.theme["base-input"]};
  }

  svg {
    color: ${(props) => props.theme["yellow-base"]};
  }
`;

export const ContainerFpg = styled.div`
  width: 70%;
  margin-top: 2rem;
  background-color: ${(props) => props.theme["base-input"]};
`;

export const ContainerCheckout = styled.div`
  width: 500px;
  background-color: ${(props) => props.theme["base-input"]};
`;
