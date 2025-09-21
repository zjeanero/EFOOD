import Logo from '../../assets/images/logo.png'
import Insta from '../../assets/images/ig logo.png'
import Face from '../../assets/images/fb logo.png'
import Twitter from '../../assets/images/twitter.png'

import { Copyright, FooterBar, LogoEfood, SocialMediaIcons } from './styles'

const Footer = () => (
  <FooterBar>
    <div className="container">
      <LogoEfood src={Logo} alt="Logo e-food" />
      <SocialMediaIcons>
        <img src={Insta} alt="Instagram" />
        <img src={Face} alt="Facebook" />
        <img src={Twitter} alt="Twitter" />
      </SocialMediaIcons>
      <Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Copyright>
    </div>
  </FooterBar>
)

export default Footer
