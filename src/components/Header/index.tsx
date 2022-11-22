import { NavLink } from 'react-router-dom'
import { MapPin } from 'phosphor-react'
import { ButtonLocation, Container, Content } from './styles'

import LogoSvg from '../../assets/images/logo.svg'
import { ButtonShoppingCard } from '../../components/ButtonShoppingCard'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/checkoutContext'

export function Header() {
  const { items, cart } = useContext(CoffeeContext)

  const newItems = items.filter((item) => item.isAdded === true)
  const countItemsAdded = newItems.length > 0 ? newItems.length : 0

  return (
    <Container>
      <Content>
        <NavLink to="/" title="Pagina inicial">
          <img src={LogoSvg} alt="" />
        </NavLink>
        <div>
          {cart.cidade && (
            <ButtonLocation>
              <MapPin size={22} fill="weight" />
              {cart.cidade}, {cart.uf.toUpperCase()}
            </ButtonLocation>
          )}
          <NavLink to="/checkout" title="Carrinho de Compras">
            <ButtonShoppingCard itemsQtd={countItemsAdded} />
          </NavLink>
        </div>
      </Content>
    </Container>
  )
}
