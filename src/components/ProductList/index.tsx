import type { CardapioItem } from '../../pages/Perfil'
import ProductCard from '../ProductCard'
import { Container, List } from './styles'

type Props = {
  products: CardapioItem[]
  onOpenModal: (dish: CardapioItem) => void
}

const ProductList = ({ products, onOpenModal }: Props) => (
  <Container>
    <div className="container">
      <List>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpenModal={onOpenModal}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
