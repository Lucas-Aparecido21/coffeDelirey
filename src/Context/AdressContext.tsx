/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from "immer";
import { CoffeeProps } from "../@types/Coffe";
import { useForm } from "react-hook-form";

interface AdressContextType {
  chekCEP: (event: any) => void;
}

interface AdressContextProviderProps {
  children: ReactNode;
}

export const AdressContext = createContext({} as AdressContextType);

export function AdressContextProvider({
  children,
}: AdressContextProviderProps) {
  const { register, setValue } = useForm();

  const chekCEP = (event: any) => {
    const cep = event.target.value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("logradouro", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.localidade);
        setValue("uf", data.uf);
      });
  };

  return (
    <AdressContext.Provider
      value={{
        chekCEP,
      }}>
      {children}
    </AdressContext.Provider>
  );
}
