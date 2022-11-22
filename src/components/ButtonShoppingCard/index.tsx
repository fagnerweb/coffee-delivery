import { ShoppingCart } from 'phosphor-react'

import { ButtonContainer } from './styles'

interface ButtonShoppingCardProps {
  itemsQtd: number
}

export function ButtonShoppingCard({ itemsQtd }: ButtonShoppingCardProps) {
  return (
    <ButtonContainer>
      {itemsQtd > 0 && <span>{itemsQtd}</span>}
      <ShoppingCart size={22} weight="fill" />
    </ButtonContainer>
  )
}
