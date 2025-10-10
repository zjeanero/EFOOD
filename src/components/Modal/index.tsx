import type { CardapioItem } from '../../pages/Perfil'
import {
  ModalContainer,
  ModalContent,
  CloseIcon,
  ProductImage
} from './styles'
import closeButton from '../../assets/images/fechar.png'

type Props = {
  dish: CardapioItem
  onClose: () => void
}

const Modal = ({ dish, onClose }: Props) => (
  <ModalContainer>
    <div className="overlay" onClick={onClose}></div>
    <ModalContent>
      <CloseIcon
        src={closeButton}
        alt="Ícone de fechar"
        onClick={onClose}
      />
      <ProductImage src={dish.foto} alt={dish.nome} />
      <div>
        <h4>{dish.nome}</h4>
        <p>{dish.descricao}</p>
        <p>Serve: {dish.porcao}</p>
        <button>
          Adicionar ao carrinho -{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(dish.preco)}
        </button>
      </div>
    </ModalContent>
  </ModalContainer>
)

export default Modal
