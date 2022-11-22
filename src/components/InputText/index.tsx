import { InputContainer } from './styles'

interface InputTextProps {
  placeholder: string
  optional?: boolean
}

export function InputText({ placeholder, optional = false }: InputTextProps) {
  return <InputContainer placeholder={placeholder} optional={optional} />
}
