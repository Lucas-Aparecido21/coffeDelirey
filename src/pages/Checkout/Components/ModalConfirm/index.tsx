import {
  Button,
  Container,
  DivTitulo,
  DivButton,
  ButtonYes,
  ButtonNo,
} from "./styles";

import { XCircle } from "phosphor-react";

interface Open {
  isOpenConfirm: boolean;
  setIsOpenConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function ModalConfirm({
  isOpenConfirm,
  setIsOpenConfirm,
  isOpen,
  setisOpen,
}: Open) {
  return (
    <>
      {/* <Container style={{ display: isOpenConfirm ? "none" : "flex" }}> */}
      <Container style={{ display: isOpenConfirm ? "flex" : "none" }}>
        <DivTitulo>
          <h1>
            <XCircle /> O CPF Informado não foi localizado!
          </h1>
          <h1>Deseja cadastrar este cliente?</h1>
        </DivTitulo>

        <DivButton>
          <ButtonYes
            onClick={() => {
              setIsOpenConfirm(false);
              setisOpen(true);
            }}
          >
            Sim
          </ButtonYes>
          <ButtonNo
            onClick={() => {
              setIsOpenConfirm(false);
            }}
          >
            Não
          </ButtonNo>
        </DivButton>
      </Container>
    </>
  );
}
