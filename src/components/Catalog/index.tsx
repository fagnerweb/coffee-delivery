import { Minus, Plus, ShoppingCartSimple, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/checkoutContext'

import {
  CatalogContainer,
  Categories,
  Footer,
  InputContainer,
  ButtonAddToCart,
  ButtonRemoveFromCart,
} from './styles'

interface CatalogProps {
  id: string
  title: string
  description: string
  categories: string[]
  cover: string
  price: number
  quantity: number
  isAdded: boolean
}

export function Catalog({
  id,
  title,
  description,
  categories,
  cover,
  price,
  quantity,
  isAdded,
}: CatalogProps) {
  const { incrementItems, decrementItems, addItemInCard, removeItemInCard } =
    useContext(CoffeeContext)

  return (
    <CatalogContainer>
      <img src={cover} alt="" />
      <Categories>
        {categories.map((category) => {
          return (
            <span key={category} className="tagline">
              {category}
            </span>
          )
        })}
      </Categories>
      <h3>{title}</h3>
      <p>{description}</p>
      <Footer>
        <div className="price">
          R${' '}
          <span>
            {price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </span>
        </div>
        <InputContainer>
          <Minus size={14} onClick={() => decrementItems(id)} />
          {quantity}
          <Plus size={14} onClick={() => incrementItems(id)} />
        </InputContainer>
        {!isAdded ? (
          <ButtonAddToCart onClick={() => addItemInCard(id)}>
            <ShoppingCartSimple size={17} weight="fill" />
          </ButtonAddToCart>
        ) : (
          <ButtonRemoveFromCart onClick={() => removeItemInCard(id)}>
            <Trash size={17} weight="fill" />
          </ButtonRemoveFromCart>
        )}
      </Footer>
    </CatalogContainer>
  )
}
