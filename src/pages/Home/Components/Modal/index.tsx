import { Container, ContainerModal } from "./styles";

interface Open {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ isOpen, setIsOpen }: Open) {
  return (
    <Container style={{ display: isOpen ? "fixed" : "none" }}>
      <ContainerModal>
        <h1>Insira uma quantidade para adicionar o produto no carrinho</h1>
        <div>
          <button onClick={() => setIsOpen(false)}>OK</button>
        </div>
      </ContainerModal>
    </Container>
  );
}
