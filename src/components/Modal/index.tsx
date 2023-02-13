import { ButtonNo, ButtonYes, Container, ContainerModal } from "./styles";

interface Open {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ isOpen, setIsOpen }: Open) {
  return (
    <>
      <Container>
        <ContainerModal>
          <h1>Tem certeza que deseja excluir este cliente?</h1>
          <ButtonYes>Sim</ButtonYes>
          <ButtonNo>Não</ButtonNo>
        </ContainerModal>
      </Container>
    </>
  );
}
