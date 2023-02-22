import { CoffeeProps } from "../../../@types/Coffe";
import { DivCart, ContainerGeral, DivInfo, DivPrice } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { useCart } from "../../../hooks/useCart";

interface CartListProps {
  coffee: CoffeeProps;
}

export function CartListCheckout({ coffee }: CartListProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();
  const coffeeTotal = coffee.price * coffee.quantity;

  return (
    <>
      <ContainerGeral>
        <DivCart>
          <div>
            <img src={coffee.image} alt="Imagem Café" />
          </div>
          <DivInfo>
            <p>{coffee.name}</p>
            <div>
              {/* <DivButton>
                <DivMinusPlus>
                  <button onClick={handleRemoveQuantity}>
                    <Minus />
                  </button>
                  <span>{coffee.quantity}</span>
                  <button onClick={handleAddQuantity}>
                    <Plus />
                  </button>
                </DivMinusPlus>
                <DivTrash onClick={handleDeleteItem}>
                  <Trash />
                  Remover
                </DivTrash>
              </DivButton> */}
            </div>
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
