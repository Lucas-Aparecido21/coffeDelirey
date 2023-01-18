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
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 90%;
    margin-top: 2rem;

    //    background-color: rgba(235, 229, 249, 0.3);
    //  border-radius: 88px;
  }

  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 80%;
    color: ${(props) => props.theme["base-title"]};
    font-size: 52px;
    font-weight: 800;
  }
  p {
    width: 90%;
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Roboto", sans-serif;
  }

  span {
    font-family: "Roboto", sans-serif;
    width: 80%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
  img {
    width: 550px;
    height: 400px;
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
    font-size: 14px;
    padding: 0 2.5rem;
  }
`;

export const CoffeListContainer = styled.div`
  width: 100%;
  height: 1550px;
  display: flex;
  justify-content: center;
  align-self: center;
  font-family: "Baloo 2", sans-serif;
  margin-top: 4rem;

  section {
  }

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 28px;
    font-weight: 800;
  }
`;

export const DivCoffee = styled.div`
  margin-top: 4rem;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4rem;
`;
