import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import Fundo from '../../assets/images/Fundo.png'

export const HeaderBar = styled.header`
  width: 100%;
  padding: 24px 0;
  background-image: url(${Fundo});

  .container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;

    p {
      text-align: right;
    }
  }
`

export const LogoEfood = styled.img`
  width: 125px;
`

export const HeaderText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.laranja};
  cursor: pointer;
`

export const HeaderLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.laranja};
  text-decoration: none;
`
