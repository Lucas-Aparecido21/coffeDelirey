import React from "react";
import { Header } from "../../components/Header";
import { Container, CardOrder, CardOrder2 } from "./styles";
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
              <CardOrder2>
                <p>
                  <img src={LocaleIcon} alt="Icone Localização" />
                  Entrega em Rua João Daniel Martinelli, 102
                  <p>Farrapos - Porto Alegre, RS</p>
                </p>

                <p>
                  <img src={TimerIcon} alt="Icone Temporizador" />
                  Previsão de entrega
                  <p>20 min - 30 min</p>
                </p>
                <p>
                  <img src={CashIcon} alt="Icone Dinheiro" />
                  Pagamento na entrega
                  <p>Cartão de Crédito</p>
                </p>
              </CardOrder2>
            </CardOrder>
          </div>
          <img src={SucessImagem} alt="Imagem Motoboy" />
        </section>
      </Container>
    </>
  );
}
