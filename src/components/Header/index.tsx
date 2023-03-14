import {
  ContainerGrid,
  ContainerCheckout,
  Locale,
  Checkout,
  ContainerLogo,
  OrdersButton,
  ClientesButton,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import Icon from "../../assets/Locale.svg";
import CheckoutIcon from "../../assets/Checkout.svg";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { Scroll, Timer, UserCircle } from "phosphor-react";

interface MyType {
  cep?: string;
  rua?: string;
  cidade?: string;
  uf?: string;
  bairro?: string;
  numero?: string;
}

export function Header() {
  const { cartQuantity } = useCart();

  const enderecoCli = localStorage.getItem("cliente");

  let enderecoObj: MyType = {};
  if (enderecoCli) {
    enderecoObj = JSON.parse(enderecoCli);
  }

  let separator = ",";
  if (!enderecoObj.cidade) {
    enderecoObj.cidade = "Insira o Endereço";
    separator = " ";
  }

  return (
    <ContainerGrid>
      <ContainerLogo>
        <NavLink to="/" title="Home">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </ContainerLogo>

      <ContainerCheckout>
        <ClientesButton>
          <NavLink
            to="/Clientes"
            title="Clientes"
            style={{ textDecoration: "none", color: "#4B2995" }}
          >
            <UserCircle />
          </NavLink>
        </ClientesButton>
        <OrdersButton>
          <NavLink
            to="/Orders"
            title="Pedidos"
            style={{ textDecoration: "none", color: "#4B2995" }}
            className="orderButton"
          >
            <Timer />
          </NavLink>
        </OrdersButton>
        <NavLink
          to="/Checkout"
          title="Insira seu endereço"
          style={{ textDecoration: "none" }}
        >
          <Locale>
            <img src={Icon} alt="LocaleIcon" />
            {enderecoObj.cidade}
            {separator}
            {enderecoObj.uf}
          </Locale>
        </NavLink>
        <Checkout title="Checkout">
          <span>{cartQuantity}</span>
          <NavLink
            to="/Checkout"
            title="Checkout"
            style={{ textDecoration: "none" }}
          >
            <img src={CheckoutIcon} alt="CheckoutIcon" />
          </NavLink>
        </Checkout>
      </ContainerCheckout>
    </ContainerGrid>
  );
}
