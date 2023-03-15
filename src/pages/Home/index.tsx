import React, { useState } from "react";
import { Header } from "../../components/Header";
import {
  CoffeListContainer,
  Container,
  DivCoffee,
  DivContainerCoffee,
  DivInfo,
  ImagemCafe,
} from "./styles";
import Imagem from "../../assets/Imagem.svg";
import coffeIcon from "../../assets/coffeIcon.svg";
import checkoutIcon from "../../assets/checkoutIcon.svg";
import timerIcon from "../../assets/timerIcon.svg";
import embIcon from "../../assets/embIcon.svg";
//
import { dataFake } from "../../database/fakeCoffe";
import { Card } from "./Components/Card/Card";

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
            <ImagemCafe src={Imagem} alt="imagem café" id="imagemCafe" />
          </div>
        </section>
      </Container>

      <CoffeListContainer>
        {/* <h1>Nossos Cafés</h1> */}
        <DivContainerCoffee>
          <DivCoffee>
            {dataFake.map((coffee) => (
              <Card key={coffee.id} coffee={coffee} />
            ))}
          </DivCoffee>
        </DivContainerCoffee>
      </CoffeListContainer>
    </>
  );
}
