import { useContext } from 'react'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import { CoffeeContext } from '../../contexts/checkoutContext'
import { EmptyCheckout } from '../../components/EmptyCheckout'

import { Container, BoxIcon } from './styles'
import imgCover from '../../assets/images/ilustration-delivery.svg'

export function Success() {
  const { cart } = useContext(CoffeeContext)

  return (
    <>
      {cart.cidade ? (
        <Container>
          <div className="left">
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <div className="boxPreview">
              <div className="item">
                <BoxIcon colors="purple">
                  <MapPin weight="fill" />
                </BoxIcon>
                <div className="info">
                  <p>
                    Entrega em{' '}
                    <b>
                      {cart.rua}, {cart.numero}
                    </b>
                  </p>
                  <p>
                    {cart.cidade} - {cart.nameState}, {cart.uf}
                  </p>
                </div>
              </div>
              <div className="item">
                <BoxIcon colors="yellow">
                  <Timer weight="fill" />
                </BoxIcon>
                <div className="info">
                  <p>
                    <b>Previsão de entrega</b>
                  </p>
                  <p>20 min - 30 min</p>
                </div>
              </div>
              <div className="item">
                <BoxIcon colors="yellow-dark">
                  <CurrencyDollar weight="fill" />
                </BoxIcon>
                <div className="info">
                  <p>Pagamento na entrega</p>
                  <p>
                    <b>
                      {cart.payment === 'debite' && 'Cartão de Debito'}
                      {cart.payment === 'credit' && 'Cartão de Crédito'}
                      {cart.payment === 'money' && 'Dinheiro'}
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={imgCover} alt="" />
          </div>
        </Container>
      ) : (
        <EmptyCheckout />
      )}
    </>
  )
}
