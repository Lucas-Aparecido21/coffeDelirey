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

export function Header() {
  const { cartQuantity } = useCart();
  //let valueLocalidade = localStorage.getItem("localidade");
  //let valueUF = localStorage.getItem("uf");

  //if (valueUF === "undefined") {
  // valueUF = "";
  // }

  // if (valueLocalidade === "undefined") {
  //  valueLocalidade = "";
  // }

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
          style={{ textDecoration: "none" }}>
          <Locale>
            <img src={Icon} alt="LocaleIcon" />
            {/*{valueLocalidade} {valueUF} */}
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
