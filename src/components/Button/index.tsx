import { ButtonContainer } from './styles'

interface ButtonProps {
  label: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

export function Button({ label, type = 'button' }: ButtonProps) {
  return <ButtonContainer type={type}>{label}</ButtonContainer>
}
