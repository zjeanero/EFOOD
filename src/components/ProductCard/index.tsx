import {
  CardContainer,
  ProductImage,
  Title,
  Description,
  AddButton
} from './styles'

type Props = {
  image: string
  title: string
  description: string
  onOpenModal: () => void
}

const ProductCard = ({ image, title, description, onOpenModal }: Props) => (
  <CardContainer>
    <ProductImage src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <AddButton onClick={onOpenModal}>Adicionar ao carrinho</AddButton>
  </CardContainer>
)

export default ProductCard
