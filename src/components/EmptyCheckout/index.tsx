import { NavLink } from 'react-router-dom'
import { Container } from './styles'

export function EmptyCheckout() {
  return (
    <Container>
      <h1>Carrinho vazio</h1>
      <p>
        Volte e confira todas as nossas opções. O melhor <br />
        café para te acompanhar no dia a dia ;)
      </p>
      <NavLink to="/">Voltar</NavLink>
    </Container>
  )
}
