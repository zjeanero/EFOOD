import { BannerContainer, Category, Name } from './styles'

type Props = {
  image: string
  category: string
  name: string
}

const RestaurantBanner = ({ image, category, name }: Props) => (
  <BannerContainer style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      <Category>{category}</Category>
      <Name>{name}</Name>
    </div>
  </BannerContainer>
)

export default RestaurantBanner
