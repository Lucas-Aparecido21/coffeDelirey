import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeProps } from "../../../@types/Coffe";
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
  return (
    <Container2>
      <CardDiv>
        <img src={coffee.image} alt="Imagem Café" />
        <DivTag>
          {coffee.tag.map((coffee) => (
            <span>{coffee}</span>
          ))}
        </DivTag>

        <h2>{coffee.name}</h2>
        <Description>{coffee.description}</Description>
        <Price>
          <p className="value">
            {coffee.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <div>
            <button>
              <Minus />
            </button>
            <span>1</span>
            <button>
              <Plus />
            </button>
          </div>
          <ButtonCart>
            <ShoppingCart />
          </ButtonCart>
        </Price>
      </CardDiv>
    </Container2>
  );
};
