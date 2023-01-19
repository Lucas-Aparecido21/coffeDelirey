import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin-top: 108px;
  display: flex;
  justify-content: center;
  font-family: "Baloo 2", sans-serif;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80%;
    margin-top: 4rem;

    @media (max-width: 1554px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  div h1 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 48px;
    margin-top: 2rem;
  }
`;

export const CardOrder = styled.div`
  width: 600px;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
  border: 1px solid ${(props) => props.theme["purple-dark"]};
  border-radius: 8px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;

  @media (max-width: 1554px) {
    /* width: 1000px; */
    justify-content: center;
  }
`;

export const CardOrder2 = styled.div`
  width: 500px;
  div {
    display: flex;
    gap: 1rem;
  }

  img {
    justify-content: baseline;
  }

  p {
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-text"]};
  }

  span {
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-text"]};
  }

  @media (max-width: 1554px) {
    /* width: 800px; */
  }
`;

export const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 800px;
    height: 420px;
  }

  button {
    margin-top: 18px;
    width: 400px;
    height: 70px;
    background-color: ${(props) => props.theme["yellow-base"]};
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    color: #fafafa;
    border: none;
    border-radius: 12px;
  }

  button:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
    transition: all 0.3s;

    @media (max-width: 1554px) {
      width: 600px;
    }
  }

  @media (max-width: 1554px) {
    #teste {
      display: none;
    }
  }
`;
