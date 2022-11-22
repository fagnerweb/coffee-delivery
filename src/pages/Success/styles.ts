import styled from 'styled-components'

import { defaultTheme } from '../../styles/themes/default'

interface iconsColorProps {
  colors: keyof typeof defaultTheme
}

export const Container = styled.main`
  max-width: 1120px;
  margin: 184px auto 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    font-size: 32px;
    font-weight: 800;
    line-height: 1.3;
    letter-spacing: 0;
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: 4px;
  }

  h1 + p {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0;
    margin-bottom: 40px;
  }

  .boxPreview {
    padding: 40px;
    border: 1px solid transparent;
    background: linear-gradient(#fff, #fff) padding-box,
      linear-gradient(126deg, rgba(219, 172, 44, 1), rgba(128, 71, 248, 1))
        border-box;
    border-radius: 6px 36px 6px 36px;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .boxPreview .item {
    display: flex;
    align-items: flex-start;
    gap: 10px;

    .boxIcon {
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.3;
      letter-spacing: 0;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const BoxIcon = styled.span<iconsColorProps>`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme[props.colors]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.white};
  }
`
