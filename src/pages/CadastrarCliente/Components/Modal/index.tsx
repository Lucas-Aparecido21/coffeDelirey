import { ContainerModal, Container, ButtonNo, DivButton } from "./styles";

interface Open {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalMensagem: string;
  setModalMensagem: React.Dispatch<React.SetStateAction<string>>;
}

export function Modal({ isOpen, setIsOpen, modalMensagem }: Open) {
  return (
    <>
      <Container style={{ display: isOpen ? "flex" : "none" }}>
        <ContainerModal>
          <h1>{modalMensagem}</h1>
          <DivButton>
            <ButtonNo onClick={() => setIsOpen(false)}>OK</ButtonNo>
          </DivButton>
        </ContainerModal>
      </Container>
    </>
  );
}
