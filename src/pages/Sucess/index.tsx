import React from "react";
import { Header } from "../../components/Header";
import { Container, CardOrder } from "./styles";
import SucessImagem from "../../assets/Sucess.svg";
import LocaleIcon from "../../assets/Local.svg";
import TimerIcon from "../../assets/timerIcon.svg";
import CashIcon from "../../assets/CashIcon.svg";

export function Sucess() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <div>
            <h1>Uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>

            <CardOrder>
              <p>
                <img src={LocaleIcon} alt="Icone Localização" />
                Entrega em Rua João Daniel Martinelli, 102{" "}
                <b>Farrapos - Porto Alegre, RS</b>
              </p>
              <p>
                <img src={TimerIcon} alt="Icone Temporizador" />
                Previsão de entrega
                <b>20 min - 30 min</b>
              </p>
              <p>
                <img src={CashIcon} alt="Icone Dinheiro" />
                Pagamento na entrega
                <b>Cartão de Crédito</b>
              </p>
            </CardOrder>
          </div>
          <img src={SucessImagem} alt="Imagem Motoboy" />
        </section>
      </Container>
    </>
  );
}
