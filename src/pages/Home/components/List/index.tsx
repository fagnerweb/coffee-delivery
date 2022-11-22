import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { Li, ListContainer } from './styles'

export function List() {
  return (
    <ListContainer>
      <Li bgIcon="yellow-dark">
        <span>
          <ShoppingCart size={16} weight="fill" />
        </span>
        Compra simples e segura
      </Li>
      <Li bgIcon="base-text">
        <span>
          <Package size={16} weight="fill" />
        </span>
        Embalagem mantém o café intacto
      </Li>
      <Li bgIcon="yellow">
        <span>
          <Timer size={16} weight="fill" />
        </span>
        Entrega rápida e rastreada
      </Li>
      <Li bgIcon="purple">
        <span>
          <Coffee size={16} weight="fill" />
        </span>
        O café chega fresquinho até você
      </Li>
    </ListContainer>
  )
}
