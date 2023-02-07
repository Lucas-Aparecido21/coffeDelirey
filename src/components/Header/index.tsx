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
import { Scroll, UserCircle } from "phosphor-react";

export function Header() {
  const { cartQuantity } = useCart();
  let valueLocalidade = localStorage.getItem("inputLocalidade");
  let valueUF = localStorage.getItem("inputUf");
  let separator = ",";
  // if (valueUF === "undefined") {
  //   valueUF = "Insira seu Endereço";
  // }

  // if (valueUF === "") {
  //   valueUF = "Insira seu Endereço";
  //   separator = " ";
  // }

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
            style={{ textDecoration: "none", color: "#4B2995" }}>
            <UserCircle />
          </NavLink>
        </ClientesButton>
        <OrdersButton>
          <NavLink
            to="/Orders"
            title="Pedidos"
            style={{ textDecoration: "none", color: "#4B2995" }}>
            <Scroll />
          </NavLink>
        </OrdersButton>
        <NavLink
          to="/Checkout"
          title="Insira seu endereço"
          style={{ textDecoration: "none" }}>
          <Locale>
            <img src={Icon} alt="LocaleIcon" />
            {valueLocalidade}
            {separator}
            {valueUF}
          </Locale>
        </NavLink>
        <Checkout title="Checkout">
          <span>{cartQuantity}</span>
          <NavLink
            to="/Checkout"
            title="Checkout"
            style={{ textDecoration: "none" }}>
            <img src={CheckoutIcon} alt="CheckoutIcon" />
          </NavLink>
        </Checkout>
      </ContainerCheckout>
    </ContainerGrid>
  );
}
