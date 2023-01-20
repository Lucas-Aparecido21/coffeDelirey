import { useContext } from "react";
import { AdressContext } from "../Context/AdressContext";

export function useAdress() {
  const context = useContext(AdressContext);
  return context;
}
