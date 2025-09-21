import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBar = styled.footer`
  background-color: ${cores.bege};
  padding: 40px 0;
  text-align: center;
`

export const LogoEfood = styled.img`
  width: 125px;
  margin-bottom: 32px;
`

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;
  margin-top: 32px;
  img {
    height: 24px;
    cursor: pointer;
  }
`

export const Copyright = styled.p`
  font-size: 10px;
  color: ${cores.laranja};
  max-width: 480px;
  margin: 0 auto;
`
