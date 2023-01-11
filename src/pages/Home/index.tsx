import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Header } from "./styles";
import { ShoppingCart } from "phosphor-react";
import logo from "./../../assets/Logo.svg";

export function Home() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo"></img>
        <ShoppingCart />
      </Header>
    </Container>
  );
}
