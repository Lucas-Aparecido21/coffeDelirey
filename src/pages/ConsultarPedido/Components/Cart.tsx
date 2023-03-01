/* eslint-disable react-hooks/exhaustive-deps */
import { CoffeeProps } from "../../../@types/Coffe";
import { DivCart, ContainerGeral, DivInfo, DivPrice } from "./styles";

interface CartListProps {
  coffee: CoffeeProps;
  quantidade: number;
}

export function CartListCheckout({ coffee, quantidade }: CartListProps) {
  const coffeeTotal = coffee.price * quantidade;

  return (
    <>
      <ContainerGeral>
        <DivCart>
          <div>
            <img src={coffee.image} alt="Imagem Café" />
          </div>
          <DivInfo>
            <p>{coffee.name}</p>
            <span>Quantidade: {quantidade} </span>
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
