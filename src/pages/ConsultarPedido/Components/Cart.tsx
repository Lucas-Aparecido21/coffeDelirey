/* eslint-disable react-hooks/exhaustive-deps */
import { CoffeeProps } from "../../../@types/Coffe";
import { DivCart, ContainerGeral, DivInfo, DivPrice } from "./styles";

import * as api from "../../../services/api";
import { useEffect } from "react";
import { useCart } from "../../../hooks/useCart";

interface CartListProps {
  coffee: CoffeeProps;
}

export function CartListCheckout({ coffee }: CartListProps) {
  const coffeeTotal = coffee.price * coffee.quantity;
  const { idCoffee } = useCart();

  const ConsultaItem = async () => {
    if (!idCoffee) {
      return;
    }
    const { data } = await api.getItensByIdPedido(idCoffee);
    coffee.quantity = data.quantidade;
  };

  useEffect(() => {
    ConsultaItem();
  }, []);

  return (
    <>
      <ContainerGeral>
        <DivCart>
          <div>
            <img src={coffee.image} alt="Imagem Café" />
          </div>
          <DivInfo>
            <p>{coffee.name}</p>
            <div></div>
          </DivInfo>
          <DivPrice>
            <p>
              {coffeeTotal.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </DivPrice>
        </DivCart>
      </ContainerGeral>
    </>
  );
}
