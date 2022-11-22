import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.white};
  z-index: 2;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  max-width: 1120px;
  margin: 0 auto;

  & > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

export const ButtonLocation = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  color: ${(props) => props.theme['purple-dark']};
`
