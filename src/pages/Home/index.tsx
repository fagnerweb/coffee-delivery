import { List } from './components/List'

import { Container, Content, Presentation } from './styles'

import CupOfCoffeImage from '../../assets/images/cup-of-coffee.png'
import { FlatListCoffee } from './components/FlatListCoffee'

import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/checkoutContext'

export function Home() {
  const { items } = useContext(CoffeeContext)
  return (
    <>
      <Container>
        <Presentation>
          <Content>
            <div>
              <h1>
                Encontre o café perfeito <br /> para qualquer hora do dia
              </h1>
              <p>
                Com o Coffe Delivery você recebe seu café onde estiver, a <br />{' '}
                qualquer hora
              </p>
              <List />
            </div>
            <img src={CupOfCoffeImage} alt="" />
          </Content>
        </Presentation>
        <FlatListCoffee data={items} />
      </Container>
    </>
  )
}
