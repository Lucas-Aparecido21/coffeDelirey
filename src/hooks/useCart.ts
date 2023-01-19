import { useContext } from 'react'
import { CartContext } from '../Context/CoffeeContext'


export function useCart() {
  const context = useContext(CartContext)
  return context
}