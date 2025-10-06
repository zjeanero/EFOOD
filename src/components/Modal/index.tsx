import { ModalContainer, ModalContent, CloseIcon, ProductImage } from './styles'

import closeButton from '../../assets/images/fechar.png'
import pizzaImage from '../../assets/images/pizza.png'

const mockProduct = {
  image: pizzaImage,
  title: 'Pizza Marguerita',
  description:
    'A clássica Marguerita: molho de tomate fresco, muçarela de alta qualidade, manjericão fresco e um fio de azeite. Simplesmente perfeita!',
  portion: 'Serve 2 pessoas',
  price: 'R$ 45,00'
}

type Props = {
  onClose: () => void
}

const Modal = ({ onClose }: Props) => (
  <ModalContainer>
    <div className="overlay" onClick={onClose}></div>
    <ModalContent>
  <CloseIcon
    src={closeButton}
    alt="Ícone de fechar"
    onClick={onClose}
  />

  <ProductImage src={pizzaImage} alt="Pizza Marguerita" />

  <div>
    <h4>{mockProduct.title}</h4>
    <p>{mockProduct.description}</p>
    <p>Serve: {mockProduct.portion}</p>
    <button>Adicionar ao carrinho - {mockProduct.price}</button>
  </div>
</ModalContent>

  </ModalContainer>
)

export default Modal
