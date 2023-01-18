import React, { useState } from "react";
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

export function Header() {
  const [cartQuantity] = useState(0);
  return (
    <ContainerGrid>
      <ContainerLogo>
        <NavLink to="/" title="Home">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </ContainerLogo>

      <ContainerCheckout>
        <Locale>
          <img src={Icon} alt="LocaleIcon" />
          São Paulo, SP
        </Locale>
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
