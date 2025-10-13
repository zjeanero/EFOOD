import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Products from '../../components/Products'

export type Restaurante = {
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
