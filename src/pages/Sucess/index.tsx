import React from "react";
import { Header } from "../../components/Header";
import { Container, CardOrder, CardOrder2, DivHome } from "./styles";
import SucessImagem from "../../assets/Sucess.svg";
import LocaleIcon from "../../assets/Local.svg";
import TimerIcon from "../../assets/timerIcon.svg";
import CashIcon from "../../assets/CashIcon.svg";
import { NavLink } from "react-router-dom";

export function Sucess() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <div>
            <h1>Uhu! Pedido confirmado</h1>
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: "400",
                fontSize: "22px",
                color: "#403937",
              }}>
              Agora é só aguardar que logo o café chegará até você
            </span>

            <CardOrder>
              <CardOrder2>
                <div>
                  <img src={LocaleIcon} alt="Icone Localização" />
                  <p>
                    Entrega em Rua João Daniel Martinelli, 102
                    <p style={{ color: "#272221", fontWeight: "600" }}>
                      Farrapos - Porto Alegre, RS
                    </p>
                  </p>
                </div>
                <div>
                  <img src={TimerIcon} alt="Icone Temporizador" />
                  <p style={{ marginTop: "12px" }}>
                    Previsão de entrega
                    <p style={{ color: "#272221", fontWeight: "600" }}>
                      20 min - 30 min
                    </p>
                  </p>
                </div>
                <div>
                  <img src={CashIcon} alt="Icone Dinheiro" />
                  <p style={{ marginTop: "12px" }}>
                    Pagamento na entrega
                    <p style={{ color: "#272221", fontWeight: "600" }}>
                      Cartão de Crédito
                    </p>
                  </p>
                </div>
              </CardOrder2>
            </CardOrder>
          </div>
          <DivHome>
            <img src={SucessImagem} alt="Imagem Motoboy" id="teste" />
            <NavLink to="/">
              <button>Continuar comprando</button>
            </NavLink>
          </DivHome>
        </section>
      </Container>
    </>
  );
}
