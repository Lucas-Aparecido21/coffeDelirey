import styled from "styled-components";

export const Container = styled.main`
  width: 50%;
  height: 450px;

  max-height: 555px;
  position: fixed;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: ${(props) => props.theme.background};
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  position: fixed;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  box-shadow: 1px 1px 11px 8px gray;
`;

export const DivTitulo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;

  h1 {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  svg {
    color: red;
  }
`;
export const DivButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 22px;
  margin-top: 3rem;
`;
export const Button = styled.button`
  all: unset;
  cursor: pointer;
  width: 65px;
  height: 45px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-family: "Roboto", sans-serif;
`;

export const ButtonYes = styled(Button)`
  background-color: green;
  color: white;
`;
export const ButtonNo = styled(Button)`
  color: red;
`;
