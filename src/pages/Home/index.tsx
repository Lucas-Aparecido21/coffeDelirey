import React from "react";
import { Header } from "../../components/Header";
import { CoffeListContainer, Container, DivCoffee, DivInfo } from "./styles";
import Imagem from "../../assets/Imagem.svg";
import coffeIcon from "../../assets/coffeIcon.svg";
import checkoutIcon from "../../assets/checkoutIcon.svg";
import timerIcon from "../../assets/timerIcon.svg";
import embIcon from "../../assets/embIcon.svg";
//
import { dataFake } from "../../database/fakeCoffe";
import { Card } from "./Components/Card";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </span>
            <DivInfo>
              <p>
                <img src={checkoutIcon} alt="Icone Checkout" />
                Compra simples e segura
              </p>
              <p>
                <img src={timerIcon} alt="Icone Relógio" />
                Entrega rápida e rastreada
              </p>
              <p>
                <img src={embIcon} alt="Icone Embalagem" />
                Embalagem mantém o café intacto
              </p>
              <p>
                <img src={coffeIcon} alt="Icone Café" />O café chega fresquinho
                até você
              </p>
            </DivInfo>
          </div>

          <div>
            <img src={Imagem} alt="imagem café" />
          </div>
        </section>
      </Container>
      <CoffeListContainer>
        <section>
          <h1>Nossos Cafés</h1>
          <DivCoffee>
            {dataFake.map((coffee) => (
              <Card key={coffee.id} coffee={coffee} />
            ))}
          </DivCoffee>
        </section>
      </CoffeListContainer>
    </>
  );
}
