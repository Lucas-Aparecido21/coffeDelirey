import { ReactNode } from "react";

interface CoffeeContextProviderProps {
  children: ReactNode;
}

const COFFE_STORAGE_CART = "coffee-storage:cartItems";

export function CoffeeContext({ children }: CoffeeContextProviderProps) {
  const storageCartItems = localStorage.getItem(COFFE_STORAGE_CART);
  if (storageCartItems) {
    return JSON.parse(storageCartItems);
  }
  return [];
}
