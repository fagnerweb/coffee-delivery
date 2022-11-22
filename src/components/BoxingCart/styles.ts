import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 8px 4px;

  img {
    width: 64px;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.3;
    letter-spacing: 0;
    color: ${(props) => props.theme['base-text']};
  }
`

export const Info = styled.div`
  margin-right: auto;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 8px;
  }

  & > div {
    display: flex;
    gap: 8px;
  }
`

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
