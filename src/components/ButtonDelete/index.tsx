import { Trash } from 'phosphor-react'

import { ButtonContainer } from './styles'

interface ButtonDeleteProps {
  label: string
}

export function ButtonDelete({ label }: ButtonDeleteProps) {
  return (
    <ButtonContainer>
      <Trash size={16} weight="regular" /> {label}
    </ButtonContainer>
  )
}
