import { useState } from 'react'
import Modal from '../../components/Modal'

import ProfileHeader from '../../components/ProfileHeader'
import Footer from '../../components/Footer'
import RestaurantBanner from '../../components/RestaurantBanner'
import ProductList from '../../components/ProductList'
import bannerMassa from '../../assets/images/massa.png'
import pizzaImage from '../../assets/images/pizza.png'

const mockPizzas = [
  {
    id: 1,
    image: pizzaImage,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: pizzaImage,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: pizzaImage,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: pizzaImage,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: pizzaImage,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: pizzaImage,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Perfil = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <ProfileHeader />
      <RestaurantBanner
        image={bannerMassa}
        category="Italiana"
        name="La Dolce Vita Trattoria"
      />
      <ProductList products={mockPizzas} onOpenModal={() => setModalIsOpen(true)} />
      <Footer />
      {modalIsOpen && <Modal onClose={() => setModalIsOpen(false)} />}
    </>
  )
}

export default Perfil
