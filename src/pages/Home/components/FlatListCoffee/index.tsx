import { Catalog } from '../../../../components/Catalog'
import { Container, Content } from './styles'

interface FlatListCoffeeProps {
  data: {
    id: string
    cover: string
    categories: string[]
    title: string
    description: string
    price: number
    quantity: number
    isAdded: boolean
  }[]
}

export function FlatListCoffee({ data }: FlatListCoffeeProps) {
  return (
    <Container>
      <Content>
        <h1>Nossos cafés</h1>
        {data.map((item) => {
          return (
            <Catalog
              key={item.id}
              id={item.id}
              cover={item.cover}
              categories={item.categories}
              title={item.title}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              isAdded={item.isAdded}
            />
          )
        })}
      </Content>
    </Container>
  )
}
