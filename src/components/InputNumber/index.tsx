import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { InputContainer } from './styles'

export function InputNumber() {
  const [inputValue, setInputValue] = useState(0)

  function handleDecrementInput() {
    setInputValue((c) => {
      if (c <= 0) {
        return c
      } else {
        console.log(c - 1)
        return c - 1
      }
    })
  }

  function handleIncrementInput() {
    setInputValue((c) => c + 1)
  }

  return (
    <InputContainer>
      <Minus onClick={handleDecrementInput} size={14} />
      {inputValue}
      <Plus onClick={handleIncrementInput} size={14} />
    </InputContainer>
  )
}
