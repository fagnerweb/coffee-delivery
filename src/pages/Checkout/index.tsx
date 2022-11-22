import { useNavigate } from 'react-router-dom'
import { CurrencyDollar, MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { BoxingCard } from '../../components/BoxingCart'
import { CoffeeContext } from '../../contexts/checkoutContext'
import { EmptyCheckout } from '../../components/EmptyCheckout'

import { priceFormated } from '../../utils/formated'
import { stateUF } from '../../utils/stateUF'

import {
  Container,
  Form,
  Content,
  FormHeader,
  InputContainer,
  ButtonContainer,
  MetodoPaymentType,
  ButtonPayment,
} from './styles'

const checkoutFormSchema = zod.object({
  cep: zod.string().length(8, 'Informe um CEP válido'),
  rua: zod.string(),
  numero: zod.string(),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
  payment: zod.enum(['credit', 'money', 'debit']),
})

type CheckoutFormInputs = zod.infer<typeof checkoutFormSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { items, addToCard, removeAll } = useContext(CoffeeContext)
  const newItems = items.filter((item) => item.isAdded === true)

  const total = newItems.reduce((acc, current) => {
    return (acc += current.quantity * current.price)
  }, 0)

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CheckoutFormInputs>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      payment: 'credit',
    },
  })

  async function handleFormSubmit(data: CheckoutFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const { cidade, rua, numero, uf, payment, complemento } = data
    const nameState = stateUF.filter((state) => state.uf === uf)[0].federation

    const newData = {
      cidade,
      rua,
      numero,
      nameState,
      uf,
      payment,
      complemento,
      produts: newItems,
    }

    addToCard(newData)
    removeAll()
    return navigate('/success')
  }

  return (
    <>
      {newItems.length > 0 ? (
        <Container>
          <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="left">
              <h1>Complete seu pedido</h1>
              <Content>
                <div className="wrapper">
                  <FormHeader>
                    <MapPin size={22} fill="regular" />
                    <div>
                      <h2>Endereço de Entrega</h2>
                      <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                  </FormHeader>

                  <div className="w200">
                    <InputContainer
                      required
                      placeholder="CEP"
                      {...register('cep')}
                    />
                  </div>

                  <InputContainer
                    required
                    placeholder="Rua"
                    {...register('rua')}
                  />
                  <div className="groupInput">
                    <div className="w200">
                      <InputContainer
                        required
                        placeholder="Número"
                        {...register('numero')}
                      />
                    </div>
                    <InputContainer
                      placeholder="Completemento"
                      optional
                      {...register('complemento')}
                    />
                  </div>

                  <div className="group3">
                    <div className="w200">
                      <InputContainer
                        required
                        placeholder="Bairro"
                        {...register('bairro')}
                      />
                    </div>
                    <InputContainer
                      required
                      placeholder="Cidade"
                      {...register('cidade')}
                    />
                    <div className="w60">
                      <InputContainer
                        required
                        placeholder="UF"
                        {...register('uf')}
                      />
                    </div>
                  </div>
                </div>
                <div className="wrapper">
                  <FormHeader iconColor="purple">
                    <CurrencyDollar size={22} weight="fill" />
                    <div>
                      <h2>Pagamento</h2>
                      <p>
                        O pagamento é feito na entrega. Escolha a forma que
                        deseja pagar
                      </p>
                    </div>
                  </FormHeader>
                  <Controller
                    control={control}
                    name="payment"
                    render={({ field }) => {
                      return (
                        <MetodoPaymentType
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <ButtonPayment variant="credit" value="credit">
                            CARTÃO DE CRÉDITO
                          </ButtonPayment>
                          <ButtonPayment variant="debit" value="debit">
                            CARTÃO DE DÉBITO
                          </ButtonPayment>
                          <ButtonPayment variant="money" value="money">
                            DINHEIRO
                          </ButtonPayment>
                        </MetodoPaymentType>
                      )
                    }}
                  />
                </div>
              </Content>
            </div>
            <div className="right">
              <h2>Cafés selecionados</h2>
              <div>
                <div className="wrapper">
                  {newItems.map((item) => {
                    return (
                      <div className="wrapper-item" key={item.id}>
                        <BoxingCard
                          id={item.id}
                          name={item.title}
                          price={item.price}
                          cover={item.cover}
                          quantity={item.quantity}
                        />
                        <hr />
                      </div>
                    )
                  })}
                  <div className="totalItems">
                    <p>
                      <span>Total de itens</span>{' '}
                      <span>{priceFormated(total)}</span>
                    </p>
                    <p>
                      <span>Entrega</span> <span>R$ 3,50</span>
                    </p>
                    <h4>
                      <span>Total</span>{' '}
                      <span>{priceFormated(total + 3.5)}</span>
                    </h4>
                  </div>

                  <ButtonContainer disabled={isSubmitting} type="submit">
                    CONFIRMAR PEDIDO
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </Form>
        </Container>
      ) : (
        <EmptyCheckout />
      )}
    </>
  )
}
