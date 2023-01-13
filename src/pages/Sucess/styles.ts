import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Baloo 2", sans-serif;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80%;
    margin-top: 4rem;
  }

  div h1 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 48px;
  }

  div span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 22px;
  }
`;

export const CardOrder = styled.div`
  width: 80%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin-top: 3rem;
  /* border: 1px solid ${(props) => props.theme["purple-dark"]};
  border-radius: 8px; */
`;
