import styled from 'styled-components'

import OptionalSvg from '../../assets/images/optional.svg'

interface InputContainerProps {
  optional: boolean
}

export const InputContainer = styled.input<InputContainerProps>`
  background: ${(props) => {
    if (props.optional) {
      return `${props.theme['base-input']} url(${OptionalSvg}) no-repeat right 12px center`
    } else {
      return `${props.theme['base-input']}`
    }
  }};
  width: 100%;
  padding: 12px;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  border-radius: 4px;
  border: 0;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0;

  &:focus {
    outline-color: ${(props) => props.theme['yellow-dark']};

    ::placeholder {
      color: transparent;
    }
  }
`
