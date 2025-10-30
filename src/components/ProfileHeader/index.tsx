import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { HeaderBar, HeaderLink, HeaderText, LogoEfood } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../Store/reducers/cart'
import type { RootState } from '../../Store'

const ProfileHeader = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootState) => state.cart)

  const handleOpenCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div className="container">
        <HeaderLink to="/">Restaurantes</HeaderLink>
        <Link to="/">
          <LogoEfood src={Logo} alt="e-food" />
        </Link>
        <HeaderText onClick={handleOpenCart}>
          {items.length} produto(s) no carrinho
        </HeaderText>
      </div>
    </HeaderBar>
  )
}

export default ProfileHeader
