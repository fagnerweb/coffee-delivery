import styled from 'styled-components'

export const Container = styled.section``

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 32px;
  padding-bottom: 157px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  column-gap: 32px;
  row-gap: 40px;

  h1 {
    grid-column-end: span 4;
    width: 100%;
    margin-bottom: 14px;
    font-size: 32px;
    font-weight: 800;
    line-height: 1.3;
    letter-spacing: 0;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
