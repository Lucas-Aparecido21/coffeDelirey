import { CoffeeProps } from "../../../@types/Coffe";
import {
  DivCart,
  ContainerGeral,
  DivInfo,
  DivMinusPlus,
  DivTrash,
  DivButton,
  DivPrice,
} from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import { useCart } from "../../../hooks/useCart";

interface CartListProps {
  coffee: CoffeeProps;
}



export function CartListCheckout({ coffee}: CartListProps) {
  const [quantity, setQuantity] = useState(0);
  function handleAddQuantity() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleRemoveQuantity() {
    if (coffee.quantity === 1) return

    changeCartItemQuantity(coffee.id, 'decrease')
  }

  const { cartItems, changeCartItemQuantity, removeCartItem } = useCart()





  const coffeeTotal = coffee.price * coffee.quantity

  //const formattedPrice = formatMoney(coffeeTotal)

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
              <DivButton>
                <DivMinusPlus>
                  <button onClick={handleRemoveQuantity}>
                    <Minus />
                  </button>
                  <span>{quantity}</span>
                  <button onClick={handleAddQuantity}>
                    <Plus />
                  </button>
                </DivMinusPlus>
                <DivTrash>
                  <Trash />
                  Remover
                </DivTrash>
              </DivButton>
            </div>
          </DivInfo>
          <DivPrice>
            <p>
              {coffee.price.toLocaleString("pt-br", {
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
