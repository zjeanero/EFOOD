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
}

const ProductCard = ({ image, title, description }: Props) => (
  <CardContainer>
    <ProductImage src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <AddButton>Adicionar ao carrinho</AddButton>
  </CardContainer>
)

export default ProductCard
