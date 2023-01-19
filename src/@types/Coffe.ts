export interface CoffeeProps {
  id: number;
  image: string;
  tag: string[];
  name: string;
  quantity: number;
  description: string;
  price: number;
}

export interface CartListCoffee {
  id: number;
  image: string;
  tag: string[];
  name: string;
  quantity: number;
  description: string;
  price: number;
}

export interface CartItem extends CoffeeProps {
  quantity: number;
  item?: void;
}

export interface CartProps {
  CartItems: CartItem[];
  cartQuantity: number;
  cartTotalItems: number;
  setItemInStorage: (itemToSet: CartItem[]) => void;
  getItemsInStorage: () => CoffeeProps[] | undefined;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  clearCart: () => void;
}
