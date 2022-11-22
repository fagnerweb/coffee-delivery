import { createContext, ReactNode, useEffect, useState } from 'react'
import { data } from './mock'

export interface Items {
  id: string
  title: string
  description: string
  categories: string[]
  cover: string
  price: number
  quantity: number
  isAdded: boolean
}

interface Cart {
  cidade: string
  rua: string
  numero: string
  nameState: string
  uf: string
  payment: string
  complemento?: string
  produts: Items[]
}

interface Context {
  items: Items[]
  cart: Cart
  incrementItems: (id: string) => void
  decrementItems: (id: string) => void
  addItemInCard: (id: string) => void
  removeItemInCard: (id: string) => void
  removeAll: () => void
  addToCard: (data: Cart) => void
}

export const CoffeeContext = createContext({} as Context)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [itemsInCard, setItemsInCard] = useState<Items[]>([])
  const [cart, setNewCart] = useState({} as Cart)

  useEffect(() => {
    setItemsInCard(data)
  }, [])

  function incrementItems(id: string) {
    setItemsInCard((state) =>
      state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        } else {
          return item
        }
      }),
    )
  }

  function decrementItems(id: string) {
    setItemsInCard((state) =>
      state.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        } else {
          return item
        }
      }),
    )
  }

  function removeItemInCard(id: string) {
    setItemsInCard((state) =>
      state.map((item) => {
        if (item.id === id) {
          item.quantity = 0
          item.isAdded = false
          return {
            ...item,
            quantity: 0,
            isAdded: false,
          }
        } else {
          return item
        }
      }),
    )
  }

  function removeAll() {
    setItemsInCard((state) =>
      state.map((item) => {
        return {
          ...item,
          quantity: 0,
          isAdded: false,
        }
      }),
    )
  }

  function addToCard(data: Cart) {
    setNewCart(data)
  }

  function addItemInCard(id: string) {
    setItemsInCard((state) =>
      state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isAdded: true,
          }
        } else {
          return item
        }
      }),
    )
  }

  return (
    <CoffeeContext.Provider
      value={{
        items: itemsInCard,
        cart,
        incrementItems,
        decrementItems,
        addItemInCard,
        removeItemInCard,
        removeAll,
        addToCard,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
