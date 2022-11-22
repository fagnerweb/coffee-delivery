import styled from 'styled-components'

interface ButtonContainerProps {
  isActive: boolean
}

export const ButtonContainer = styled.label<ButtonContainerProps>`
  padding: 16px 20px;
  color: ${(props) => props.theme['base-text']};

  background-color: ${(props) => {
    if (props.isActive) return props.theme['purple-light']
    else return props.theme['base-button']
  }};

  transition: background-color 0.1s;

  border: ${(props) => {
    if (props.isActive) return `1px solid ${props.theme.purple}`
    else return `1px solid ${props.theme['base-button']}`
  }};

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

  &:hover {
    background-color: ${(props) => {
      if (props.isActive) return props.theme['purple-light']
      else return props.theme['base-hover']
    }};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
