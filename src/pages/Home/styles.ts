import styled from 'styled-components'

import backgroundImage from '../../assets/images/home-background.png'

export const Container = styled.main`
  margin-top: 104px;
`

export const Presentation = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`

export const Content = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 92px 0;

  h1 {
    font-size: 48px;
    font-weight: 800;
    line-height: 1.3;
    letter-spacing: 0;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 16px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 66px;
  }
`
