import styled from "styled-components";

export const Container = styled.main`
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100px;
  }

  span {
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    text-transform: uppercase;
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const CardDiv = styled.div`
  width: 200px;

  background-color: ${(props) => props.theme["base-card"]};
`;

export const Description = styled.p`
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme["base-text"]};
`;

export const Price = styled.p``;
