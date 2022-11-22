import styled, { css } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import * as RadioGroup from '@radix-ui/react-radio-group'

import OptionalSvg from '../../assets/images/optional.svg'

export const Container = styled.main`
  margin-top: 144px;
  margin-bottom: 240px;
`

const title = css`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: 0;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 15px;
`

export const Form = styled.form`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;

  .left {
    width: 640px;
    h1 {
      ${title}
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .right h2 {
    ${title}
  }

  .right .wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 6px 44px 6px 44px;
    background-color: ${(props) => props.theme['base-card']};
    padding: 40px;

    .wrapper-item {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    hr {
      background-color: ${(props) => props.theme['base-button']};
      border: 0;
      height: 1px;
    }

    .totalItems {
      display: flex;
      flex-direction: column;
      gap: 13.5px;
    }

    .totalItems p,
    .totalItems h4 {
      display: flex;
      justify-content: space-between;
    }

    .totalItems p {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.3;
      letter-spacing: 0;
      color: ${(props) => props.theme['base-text']};
    }

    .totalItems h4 {
      font-family: Roboto, sans-serif;
      font-size: 20px;
      font-weight: 700;
      line-height: 1.3;
      letter-spacing: 0;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ButtonContainer = styled.button`
  font-weight: bold;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 0;

  padding: 12px 45px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};
  transition: background-color 0.1s;
  border: 0;
  cursor: pointer;
  border-radius: 6px;

  &:disabled {
    background-color: ${(props) => props.theme['base-text']};
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const Content = styled.div`
  .wrapper {
    width: 100%;
    background-color: ${(props) => props.theme['base-card']};
    padding: 40px;
    border-radius: 6px;
    margin-bottom: 12px;
  }

  .w200 {
    width: 200px;
  }

  .groupInput {
    display: flex;
    gap: 12px;
  }

  .group3 {
    display: flex;
    gap: 12px;
  }

  .w60 {
    width: 60px;
  }

  input {
    display: flex;
    flex: 1;
    width: 100%;
    margin-bottom: 16px;
  }
`

interface FormHeaderProps {
  iconColor?: keyof typeof defaultTheme
}

export const FormHeader = styled.header<FormHeaderProps>`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 32px;

  svg {
    color: ${(props) => {
      if (props.iconColor) {
        return props.theme[props.iconColor]
      } else {
        return props.theme['yellow-dark']
      }
    }};
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
    letter-spacing: 0;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0;
    color: ${(props) => props.theme['base-text']};
  }
`

interface InputContainerProps {
  optional?: boolean
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

export const MetodoPaymentType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`

interface ButtonContainerProps {
  variant: 'credit' | 'money' | 'debit'
}

export const ButtonPayment = styled(RadioGroup.Item)<ButtonContainerProps>`
  padding: 16px 20px;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};

  transition: background-color 0.1s;

  border: ${(props) => `1px solid ${props.theme['base-button']}`};

  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0;

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &[data-state='checked'] {
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
