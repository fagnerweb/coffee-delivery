import { CreditCard } from 'phosphor-react'
import { useState } from 'react'

import { ButtonContainer } from './styles'

interface ButtonDeleteProps {
  label: string
}

export function ButtonCreditCard({ label }: ButtonDeleteProps) {
  const [isActive, setIsActive] = useState(false)

  function handleClickCreditCard() {
    setIsActive(!isActive)
  }

  return (
    <ButtonContainer onClick={handleClickCreditCard} isActive={isActive}>
      <CreditCard size={16} weight="regular" />
      {label}
    </ButtonContainer>
  )
}
