import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { CoffeeProps } from "../../../../@types/Coffe";
import { useCart } from "../../../../hooks/useCart";

import {
  Description,
  Price,
  Container2,
  CardDiv,
  DivTag,
  ButtonCart,
} from "./styles";

interface CardProps {
  coffee: CoffeeProps;
}

export const Card = ({ coffee }: CardProps) => {
  const [quantity, setQuantity] = useState(0);
  const { addCoffeeToCart } = useCart();
  const { addItem } = useCart();
  function handleAddQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleRemoveQuantity() {
    setQuantity((state) => Math.max(state - 1, 0));
  }

  function handleAddToCart() {
    if (quantity === 0) {
      alert("Insira uma quantidade para prosseguir");
    } else {
      const coffeeToAdd = {
        ...coffee,
        quantity,
      };
      addCoffeeToCart(coffeeToAdd);
      setQuantity((state) => (state = 0));
    }

    const handleAddToCart = (id: string, quantidade: string) => {
      addItem({ item: id, quantidade });
      console.log({ item: id, quantidade });
    };
    handleAddToCart(coffee.id.toString(), quantity.toString());
  }

  return (
    <>
      <Container2>
        <CardDiv>
          <img src={coffee.image} alt="Imagem Café" />
          <DivTag>
            {coffee.tag.map((coffee) => (
              <span>{coffee}</span>
            ))}
          </DivTag>

          <h2>{coffee.name} </h2>
          <Description>{coffee.description}</Description>
          <Price>
            <p className="value">
              {coffee.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <div>
              <button onClick={handleRemoveQuantity}>
                <Minus />
              </button>
              <span>{quantity}</span>
              <button onClick={handleAddQuantity}>
                <Plus />
              </button>
            </div>
            <ButtonCart onClick={handleAddToCart}>
              <ShoppingCart />
            </ButtonCart>
          </Price>
        </CardDiv>
      </Container2>
    </>
  );
};
