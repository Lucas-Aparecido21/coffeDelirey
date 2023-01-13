import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Baloo 2", sans-serif;
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 90%;
    margin-top: 2rem;

    //    background-color: rgba(235, 229, 249, 0.3);
    //  border-radius: 88px;
  }

  h1 {
    padding: 0 2rem;
    color: ${(props) => props.theme["base-title"]};
    font-size: 28px;
    font-weight: 800;
  }
  span {
    padding: 0 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Roboto", sans-serif;
  }

  img {
    width: 380px;
    height: 300px;
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  p img {
    width: 28px;
    height: 28px;
  }
`;

export const DivInfo = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 16px;
  gap: 1.6rem;

  p {
    display: flex;
    gap: 8px;
    font-family: "Roboto", sans-serif;
    align-items: center;
    color: ${(props) => props.theme["base-text"]};
    font-size: 11px;
  }
`;

export const CoffeListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Baloo 2", sans-serif;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 95%;
    margin-top: 2rem;
  }

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 28px;
    font-weight: 800;
  }
`;
