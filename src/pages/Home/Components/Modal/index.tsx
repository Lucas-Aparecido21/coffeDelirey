import { XCircle } from "phosphor-react";
import { ContainerModal, Container, ButtonYes, DivButton } from "./styles";

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
            Insira uma quantidade para prosseguir
          </h1>
          <DivButton>
            <ButtonYes onClick={() => setIsOpen(false)}>OK</ButtonYes>
          </DivButton>
        </ContainerModal>
      </Container>
    </>
  );
}
