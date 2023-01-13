import React from "react";
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

export function Header() {
  return (
    <ContainerGrid>
      <ContainerLogo>
        <img src={Logo} alt="Logo" />
      </ContainerLogo>

      <ContainerCheckout>
        <Locale>
          <img src={Icon} alt="LocaleIcon" />
          São Paulo, SP
        </Locale>
        <Checkout title="Checkout">
          <img src={CheckoutIcon} alt="CheckoutIcon" />
        </Checkout>
      </ContainerCheckout>
    </ContainerGrid>
  );
}
