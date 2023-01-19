import { CartListCoffee } from "../../../@types/Coffe";
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

interface CartListProps {
  cart: CartListCoffee;
}

export function CartListCheckout({ cart }: CartListProps) {
  const [quantity, setQuantity] = useState(0);
  function handleAddQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleRemoveQuantity() {
    setQuantity((state) => Math.max(state - 1, 0));
  }
  return (
    <>
      <ContainerGeral>
        <DivCart>
          <div>
            <img src={cart.image} alt="Imagem Café" />
          </div>
          <DivInfo>
            <p>{cart.name}</p>
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
              {cart.price.toLocaleString("pt-br", {
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
