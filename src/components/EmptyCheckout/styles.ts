import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  flex-direction: column;
  height: 100vh;

  h1 {
    font-size: 48px;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 20px;
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 30px;
  }

  a {
    padding: 14px 20px;
    border: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    text-decoration: none;
  }
`
