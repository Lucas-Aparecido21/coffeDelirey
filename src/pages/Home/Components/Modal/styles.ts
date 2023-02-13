import styled from "styled-components";

export const Container = styled.main`
  position: fixed;
  width: 100%;
  height: 400px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerModal = styled.div`
  margin-top: 8rem;
  position: relative;
  width: 50%;
  height: 50%;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-family: "Roboto", sans-serif;
    text-align: center;
    font-size: 18px;
  }

  button {
    width: 20%;
  }
`;
