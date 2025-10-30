import type { CardapioItem } from '../../pages/Perfil'

import { useDispatch } from 'react-redux'
import { add, open } from '../../Store/reducers/cart'

import {
  AddButton,
  CardContainer,
  Description,
  ProductImage,
  Title
} from './styles'

type Props = {
  product: CardapioItem
}
const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(add(product))
    dispatch(open())
  }

  return (
    <CardContainer>
      <ProductImage src={product.foto} alt={product.nome} />
      <Title>{product.nome}</Title>
      <Description>{product.descricao}</Description>
      <AddButton onClick={handleAddToCart}>
        Adicionar ao carrinho
      </AddButton>
    </CardContainer>
  )
}

export default ProductCard
