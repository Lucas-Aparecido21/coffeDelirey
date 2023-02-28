/* eslint-disable react-hooks/exhaustive-deps */
import { CoffeeProps } from "../../../@types/Coffe";
import { DivCart, ContainerGeral, DivInfo, DivPrice } from "./styles";

import * as api from "../../../services/api";
import { useEffect } from "react";

interface CartListProps {
  coffee: CoffeeProps;
}

export function CartListCheckout({ coffee }: CartListProps) {
  const coffeeTotal = coffee.price * coffee.quantity;
  const id_pedido = localStorage.getItem("OrdersPedido");

  const ConsultaItem = async () => {
    if (!id_pedido) {
      return;
    }
    const { data } = await api.getItensByIdPedido(id_pedido);
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
