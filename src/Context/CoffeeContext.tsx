import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from "immer";
import { CoffeeProps } from "../@types/Coffe";

export interface CartItem extends CoffeeProps {
  quantity: number;
  item?: void;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  setItemInStorage: (itemToSet: CartItem[]) => void;
  getItemsInStorage: () => CoffeeProps[] | undefined;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  handleConfirmOrder: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_IN_STORAGE_KEY = "coffeDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storadCartItems = localStorage.getItem(COFFEE_ITEMS_IN_STORAGE_KEY);
    if (storadCartItems) {
      return JSON.parse(storadCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  function setItemInStorage(itemToSet: CartItem[]) {
    const items = localStorage.getItem("coffee");

    if (items) {
      const jItems = JSON.stringify([itemToSet]);

      localStorage.setItem("coffee", jItems);
    }

    const jItems = JSON.stringify([itemToSet]);

    localStorage.setItem("coffee", jItems);
  }

  function getItemsInStorage() {
    const items = localStorage.getItem("coffee");

    if (!items) return;

    return JSON.parse(items) as CoffeeProps[];
  }

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (carItem) => carItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1);
      }
    });
    setCartItems(newCart);
  }

  function handleConfirmOrder() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(
      COFFEE_ITEMS_IN_STORAGE_KEY,
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
        setItemInStorage,
        getItemsInStorage,
        handleConfirmOrder,
      }}>
      {children}
    </CartContext.Provider>
  );
}
