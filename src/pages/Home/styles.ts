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

    h1 {
      margin-top: 2rem;
      margin-bottom: 2rem;
      width: 83%;
      color: ${(props) => props.theme["base-title"]};
      font-size: 52px;
      font-weight: 800;

      @media (max-width: 1630px) {
        font-size: 48px;
      }
      @media (max-width: 1503px) {
        font-size: 40px;
      }
    }
    p {
      width: 90%;
      color: ${(props) => props.theme["base-subtitle"]};
      font-family: "Roboto", sans-serif;
    }

    span {
      font-family: "Roboto", sans-serif;
      width: 83%;
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

    @media (max-width: 1300px) {
      display: flex;
    }
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

  @media (max-width: 1554px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 880px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImagemCafe = styled.img`
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const CoffeListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  justify-content: center;

  font-family: "Baloo 2", sans-serif;
  margin-top: 4rem;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 28px;
    font-weight: 800;
    position: absolute;
    left: 12rem;

    @media (max-width: 1780px) {
      left: 11rem;
      width: 100px;
    }
  }
`;

export const DivContainerCoffee = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivCoffee = styled.div`
  margin-top: 7rem;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4rem;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5rem;
  }
  @media (max-width: 1450px) {
    grid-template-columns: repeat(2, 1fr);
    width: 85%;
  }
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;
