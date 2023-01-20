import React, { createContext, ReactNode } from "react";

interface AdressContext {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface AdressContextType {
  adress: AdressContext;
  setEndereco: (endereco: AdressContext) => void;
  setValue: (nome: string, value: string) => void;
  clearAddress: () => void;
}

interface AdressContextProps {
  children: ReactNode;
}

const ADRESS_IN_STORAGE = "CoffeDelivery:endereco";

export const AdressContext = createContext({} as AdressContextType);

export const AdressContextProvider = ({ children }: AdressContextProps) => {};
