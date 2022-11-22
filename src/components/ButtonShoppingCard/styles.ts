import styled from 'styled-components'

export const ButtonContainer = styled.button`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -6%;
  padding: 8px;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  position: relative;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    padding: 4px;
    height: 20px;
    border-radius: 10px;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    position: absolute;
    right: -8px;
    top: -8px;
  }
`
