import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 6px 8px;
  color: ${(props) => props.theme['base-subtitle']};
  background-color: ${(props) => props.theme['base-button']};
  transition: background-color 0.1s;
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
