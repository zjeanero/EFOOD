import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Products from '../../components/Products'
import type { Product } from '../../components/ProductList'

export type Restaurante = {
  cardapio: Product[]
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((dados) => {
        setRestaurantes(dados)
      })
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Products restaurantes={restaurantes} />
      </div>
      <Footer />
    </>
  )
}

export default Home
