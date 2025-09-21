import Sushi from '../../assets/images/Sushi.png'
import Massa from '../../assets/images/massa.png'
import { Button, Cards, Container, ImageContainer, Infos, ListCards, Tags } from './styles'

const Products = () => (
  <Container>
    <ListCards>
      <Cards>
        <ImageContainer>
          <img src={Sushi} alt="Sushi" />
            <Infos>
              <Tags>Destaque da semana</Tags>
              <Tags>Japonesa</Tags>
            </Infos>
          <h1>Hioki Sushi <span>4.9 &#11088;</span></h1>
          <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
          <Button to="/perfil/1">Saiba mais</Button>
        </ImageContainer>
      </Cards>
      <Cards>
        <ImageContainer>
          <img src={Massa} alt="Massa" />
          <Infos>
            <Tags>Italiana</Tags>
          </Infos>
          <h1>La Dolce Vita Trattoria <span>4.6 &#11088;</span></h1>
          <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
          <Button to="/perfil/1">Saiba mais</Button>
        </ImageContainer>
      </Cards>
      <Cards>
        <ImageContainer>
          <img src={Massa} alt="Massa" />
          <Infos>
            <Tags>Italiana</Tags>
          </Infos>
          <h1>La Dolce Vita Trattoria <span>4.6 &#11088;</span></h1>
          <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
          <Button to="/perfil/1">Saiba mais</Button>
        </ImageContainer>
      </Cards>
      <Cards>
        <ImageContainer>
          <img src={Massa} alt="Massa" />
          <Infos>
            <Tags>Italiana</Tags>
          </Infos>
          <h1>La Dolce Vita Trattoria <span>4.6 &#11088;</span></h1>
          <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
          <Button to="/perfil/1">Saiba mais</Button>
        </ImageContainer>
      </Cards>
      <Cards>
        <ImageContainer>
          <img src={Massa} alt="Massa" />
          <Infos>
            <Tags>Italiana</Tags>
          </Infos>
          <h1>La Dolce Vita Trattoria <span>4.6 &#11088;</span></h1>
          <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
          <Button to="/perfil/1">Saiba mais</Button>
        </ImageContainer>
      </Cards>
      <Cards>
        <ImageContainer>
          <img src={Massa} alt="Massa" />
          <Infos>
            <Tags>Italiana</Tags>
          </Infos>
          <h1>La Dolce Vita Trattoria <span>4.6 &#11088;</span></h1>
          <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
          <Button to="/perfil/1">Saiba mais</Button>
        </ImageContainer>
      </Cards>
    </ListCards>
  </Container>
)

export default Products
