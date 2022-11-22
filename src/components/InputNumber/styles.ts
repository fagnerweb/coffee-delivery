import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 10px;
  border-radius: 6px;
  padding: 8px;
  background-color: ${(props) => props.theme['base-button']};

  font-size: 16px;
  letter-spacing: 0;
  color: ${(props) => props.theme['base-title']};

  svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`
