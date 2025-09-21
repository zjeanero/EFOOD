import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Products from '../../components/Products'

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Products />
      </div>
      <Footer />
    </>
  )
}

export default Home
