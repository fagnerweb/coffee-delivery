import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 8px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-dark']};
  transition: background-color 0.1s;
  border: 0;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
