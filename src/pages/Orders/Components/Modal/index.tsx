import { XCircle } from "phosphor-react";
import {
  ContainerModal,
  Container,
  ButtonNo,
  ButtonYes,
  DivButton,
} from "./styles";

interface Open {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDelete: boolean;
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ isOpen, setIsOpen, isDelete, setIsDelete }: Open) {
  function handleDeleteOrder() {
    setIsOpen(true);
    setIsDelete(true);
  }
  return (
    <>
      <Container style={{ display: isOpen ? "flex" : "none" }}>
        <ContainerModal>
          <h1>
            <XCircle />
            Tem certeza que deseja excluir este pedido?
          </h1>
          <DivButton>
            <ButtonNo onClick={() => setIsOpen(false)}>Não</ButtonNo>
            <ButtonYes onClick={handleDeleteOrder}>Sim</ButtonYes>
          </DivButton>
        </ContainerModal>
      </Container>
    </>
  );
}
