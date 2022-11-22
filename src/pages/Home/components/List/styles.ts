import styled from 'styled-components'

import { defaultTheme } from '../../../../styles/themes/default'

interface LiProps {
  bgIcon: keyof typeof defaultTheme
}

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  row-gap: 25.5px;
`

export const Li = styled.li<LiProps>`
  width: 50%;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0;
  color: ${(props) => props.theme['base-text']};
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${(props) => props.theme[props.bgIcon]};
    color: ${(props) => props.theme.white};
  }
`
