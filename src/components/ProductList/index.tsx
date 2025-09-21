import ProductCard from '../ProductCard'
import { GridList, ListContainer } from './styles'

export type Product = {
  id: number
  image: string
  title: string
  description: string
}

type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => (
  <ListContainer>
    <div className="container">
      <GridList>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
            />
          </li>
        ))}
      </GridList>
    </div>
  </ListContainer>
)

export default ProductList
