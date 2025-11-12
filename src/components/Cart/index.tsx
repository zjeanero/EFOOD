import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../Store'
import { useState } from 'react'

import { close, remove, clear } from '../../Store/reducers/cart'
import DeliveryForm from '../DeliveryForm'
import PaymentForm from '../PaymentForm'
import ConfirmationScreen from '../ConfirmationScreen'

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

type PaymentData = {
  card: {
    name: string
    number: string
    code: number
    expires: {
      month: number
      year: number
    }
  }
}

type DeliveryData = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement?: string
  }
}

type CartStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const [currentStep, setCurrentStep] = useState<CartStep>('cart')
  const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [orderId, setOrderId] = useState<string | null>(null)

  if (!isOpen) {
    return null
  }

  const handleCloseCart = () => {
    dispatch(close())
  }

  const handleRemoveItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentItem) => {
      return (accumulator += currentItem.preco)
    }, 0)
  }

  const goToCart = () => {
    setCurrentStep('cart')
  }

  const goToDelivery = () => {
    setCurrentStep('delivery')
  }

  const goToPayment = (data: DeliveryData) => {
    setDeliveryData(data)
    setCurrentStep('payment')
  }

  const handlePayment = async (data: PaymentData) => {
    setIsLoading(true)

    const checkoutData = {
      products: items.map((item) => ({
        id: item.id,
        price: item.preco
      })),
      delivery: deliveryData,
      payment: data
    }

    try {
      const response = await fetch(
        'https://api-ebac.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(checkoutData)
        }
      )

      if (!response.ok) {
        throw new Error('Erro ao enviar pedido')
      }

      const result = await response.json()

      setOrderId(result.orderId)
      setCurrentStep('confirmation')
      dispatch(clear())
    } catch (error) {
      console.error(error)
      alert(
        'Ocorreu um erro ao finalizar o seu pedido. Por favor, tente novamente.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 'cart':
        return (
          <>
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
              <Button onClick={goToDelivery}>Continuar com a entrega</Button>
            </div>
          </>
        )

      case 'delivery':
        return <DeliveryForm onBack={goToCart} onSubmit={goToPayment} />

      case 'payment':
        return (
          <PaymentForm
            onBack={goToDelivery}
            onPay={handlePayment}
            isLoading={isLoading}
            total={getTotalPrice()}
          />
        )

      case 'confirmation':
        return (
          <ConfirmationScreen
            orderId={orderId}
            onClose={handleCloseCart}
          />
        )

      default:
        return null
    }
  }

  return (
    <CartContainer>
      <Overlay onClick={handleCloseCart} />
      <Sidebar>{renderStep()}</Sidebar>
    </CartContainer>
  )
}

export default Cart
