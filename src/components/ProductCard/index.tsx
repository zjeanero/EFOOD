import type { CardapioItem } from '../../pages/Perfil'


import {
  AddButton,
  CardContainer,
  Description,
  ProductImage,
  Title
} from './styles'

type Props = {
  product: CardapioItem
  onOpenModal: (dish: CardapioItem) => void
}

const ProductCard = ({ product, onOpenModal }: Props) => {

  const handleOpenModal = () => {
    onOpenModal(product)
  }

  return (
    <CardContainer>
      <ProductImage src={product.foto} alt={product.nome} />
      <Title>{product.nome}</Title>
      <Description>{product.descricao}</Description>
      <AddButton onClick={handleOpenModal}>
        Adicionar ao carrinho
      </AddButton>
    </CardContainer>
  )
}

export default ProductCard
