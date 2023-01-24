/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from "immer";
import { CoffeeProps } from "../@types/Coffe";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";

interface AdressContextType {}

interface AdressContextProviderProps {
  children: ReactNode;
}

interface Adress {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string | null;
}

export const AdressContext = createContext<AdressContextType>(
  {} as AdressContextType
);

export function AdressContextProvider({
  children,
}: AdressContextProviderProps) {
  const [addres, setAddres] = useState<Adress>(() => {
    // LocalStorage JSON

    return {} as Adress;
  });

  return <AdressContext.Provider value={{}}>{children}</AdressContext.Provider>;
}
