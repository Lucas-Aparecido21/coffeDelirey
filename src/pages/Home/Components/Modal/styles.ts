import styled from "styled-components";

export const Container = styled.main`
  width: 60%;
  height: 250px;
  position: fixed;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ContainerModal = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  box-shadow: 1px 1px 11px 8px gray;

  h1 {
    position: absolute;
    top: 25%;
    left: 25%;
  }

  svg {
    width: 32px;
    color: red;
    margin-right: 2px;
    vertical-align: sub;
  }
`;

export const DivButton = styled.div`
  margin-top: 80px;
  display: flex;
  gap: 1rem;
  align-self: center;
`;

export const BaseButton = styled.button`
  all: unset;
  cursor: pointer;
  border: none;
  width: 100px;
  height: 40px;
  text-align: center;
  border-radius: 8px;
  font-size: 18px;
`;

export const ButtonYes = styled(BaseButton)`
  background-color: #176917;
`;

export const ButtonNo = styled(BaseButton)`
  background-color: #f34336;
`;
