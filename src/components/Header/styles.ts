import styled from 'styled-components'
import { cores } from '../../styles'
import Fundo from '../../assets/images/Fundo.png'

export const HeaderBar = styled.header`
  width: 100%;
  height: 384px;
  background-image: url(${Fundo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoEfood = styled.img`
  width: 125px;
  height: auto;
  margin-bottom: 64px;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${cores.laranja};
  text-align: center;
  line-height: 1.2;
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0; //
`
