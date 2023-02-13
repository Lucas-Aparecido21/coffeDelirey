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
}

export function Modal({ isOpen, setIsOpen }: Open) {
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
            <ButtonYes onClick={() => setIsOpen(false)}>Sim</ButtonYes>
          </DivButton>
        </ContainerModal>
      </Container>
    </>
  );
}
