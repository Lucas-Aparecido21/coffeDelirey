import { CheckCircle } from "phosphor-react";
import { ContainerModal, Container, ButtonNo, DivButton } from "./styles";

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
            <CheckCircle />
            Cadastro atualizado com sucesso!
          </h1>
          <DivButton>
            <ButtonNo onClick={() => setIsOpen(false)}>OK</ButtonNo>
          </DivButton>
        </ContainerModal>
      </Container>
    </>
  );
}
