import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { HeaderBar, HeaderLink, HeaderText, LogoEfood } from './styles'

const ProfileHeader = () => (
  <HeaderBar>
    <div className="container">
      <HeaderLink to="/">Restaurantes</HeaderLink>
      <Link to="/">
        <LogoEfood src={Logo} alt="e-food" />
      </Link>
      <HeaderText>0 produto(s) no carrinho</HeaderText>
    </div>
  </HeaderBar>
)

export default ProfileHeader
