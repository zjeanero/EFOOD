import { HeaderBar, HeaderContent, LogoEfood, Title } from './styles'

import Logo from '../../assets/images/logo.png'


const Header = () => (
  <HeaderBar>
    <HeaderContent>
      <LogoEfood src={Logo} alt="Logo e-food" />
      <Title>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Title>
    </HeaderContent>
  </HeaderBar>
)

export default Header
