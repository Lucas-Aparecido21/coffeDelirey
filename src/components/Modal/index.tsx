interface Open {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ isOpen, setIsOpen }: Open) {
  return (
    <>
      <div>
        <h1>Tem certeza que deseja excluir este cliente?</h1>
        <button>Sim</button>
        <button>Não</button>
      </div>
    </>
  );
}
