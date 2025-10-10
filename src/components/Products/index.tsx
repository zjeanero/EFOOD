import type { Restaurante } from '../../pages/Home'
import {
  Button,
  Cards,
  CardContent,
  Container,
  Infos,
  ListCards,
  Tags,
  TitleContainer
} from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const Products = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <ListCards>
        {restaurantes.map((restaurante) => (
          <Cards key={restaurante.id}>
            <img src={restaurante.capa} alt={restaurante.titulo} />
            <Infos>
              {restaurante.destacado && <Tags>Destaque da semana</Tags>}
              <Tags>{restaurante.tipo}</Tags>
            </Infos>
            <CardContent>
              <TitleContainer>
                <h3>{restaurante.titulo}</h3>
                <span>
                  {restaurante.avaliacao} &#11088;
                </span>
              </TitleContainer>
              <p>{restaurante.descricao}</p>
              <Button to={`/perfil/${restaurante.id}`}>Saiba mais</Button>
            </CardContent>
          </Cards>
        ))}
      </ListCards>
    </div>
  </Container>
)

export default Products
