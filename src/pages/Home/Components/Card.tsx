import { CoffeeProps } from "../../../@types/Coffe";
import { Description, Price, Container, Container2, CardDiv } from "./styles";

interface CardProps {
  coffee: CoffeeProps;
}

export const Card = ({ coffee }: CardProps) => {
  return (
    <Container>
      <Container2>
        <CardDiv>
          <img src={coffee.image} alt="Imagem Café" />
          <span>{coffee.tag}</span>
          <h2>{coffee.name}</h2>
          <Description>{coffee.description}</Description>
          <Price>RS {coffee.price}</Price>
        </CardDiv>
      </Container2>
    </Container>
  );
};
