import styled from 'styled-components'

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

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
