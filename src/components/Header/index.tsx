import {
  ContainerGrid,
  ContainerCheckout,
  Locale,
  Checkout,
  ContainerLogo,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import Icon from "../../assets/Locale.svg";
import CheckoutIcon from "../../assets/Checkout.svg";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

export function Header() {
  const { cartQuantity } = useCart();
  let valueLocalidade = localStorage.getItem("inputLocalidade");
  let valueUF = localStorage.getItem("inputUf");
  let separator = ",";
  if (valueUF === "undefined") {
    valueUF = "Insira seu Endereço";
  }
  if (valueLocalidade === "undefined") {
    valueLocalidade = "Insira seu Endereço";
  }

  if (valueUF === "") {
    valueUF = "Insira seu Endereço";
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
        <NavLink
          to="/Checkout"
          title="Insira seu endereço"
          style={{ textDecoration: "none" }}
        >
          <Locale>
            <img src={Icon} alt="LocaleIcon" />
            {valueLocalidade}
            {separator}
            {valueUF}
          </Locale>
        </NavLink>
        <Checkout title="Checkout">
          <span>{cartQuantity}</span>
          <NavLink to="/Checkout" title="Checkout">
            <img src={CheckoutIcon} alt="CheckoutIcon" />
          </NavLink>
        </Checkout>
      </ContainerCheckout>
    </ContainerGrid>
  );
}
