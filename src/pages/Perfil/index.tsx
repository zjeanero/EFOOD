// Em: src/pages/Perfil/index.tsx

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ProfileHeader from '../../components/ProfileHeader'
import Footer from '../../components/Footer'
import RestaurantBanner from '../../components/RestaurantBanner'
import ProductList from '../../components/ProductList'
import Modal from '../../components/Modal'

import type { Restaurante } from '../Home'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}


type RestauranteCompleto = Restaurante & {
  cardapio: CardapioItem[]
}

const Perfil = () => {
  const { id } = useParams()


  const [restaurante, setRestaurante] = useState<RestauranteCompleto>()
  const [selectedDish, setSelectedDish] = useState<CardapioItem>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ProfileHeader />
      <RestaurantBanner
        image={restaurante.capa}
        category={restaurante.tipo}
        name={restaurante.titulo}
      />
      <ProductList
        products={restaurante.cardapio}
        onOpenModal={(dish) => setSelectedDish(dish)}
      />
      <Footer />
      {selectedDish && (
        <Modal
          dish={selectedDish}
          onClose={() => setSelectedDish(undefined)}
        />
      )}
    </>
  )
}

export default Perfil
