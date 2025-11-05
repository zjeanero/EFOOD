import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../Store'

import { close, remove } from '../../Store/reducers/cart'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Button,
  Total,
  ItemsList,
  CartItem
} from './styles'

const formatCurrency = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)

  const dispatch = useDispatch()

  const handleCloseCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentItem) => {
      return (accumulator += currentItem.preco)
    }, 0)
  }

  const handleRemoveItem = (id: number) => {
    dispatch(remove(id))
  }

  if (!isOpen) {
    return null
  }

  return (
    <CartContainer>
      <Overlay onClick={handleCloseCart} />
      <Sidebar>
        <ItemsList>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h4>{item.nome}</h4>
                <p>{formatCurrency(item.preco)}</p>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveItem(item.id)}
              >
              </button>
            </CartItem>
          ))}
        </ItemsList>
        <div>
          <Total>
            Valor total <span>{formatCurrency(getTotalPrice())}</span>
          </Total>
          <Button>Continuar com a entrega</Button>
        </div>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
