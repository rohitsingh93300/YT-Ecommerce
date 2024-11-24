import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import ProductList from '../components/ProductList'
// import Promo from '../components/Promo'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className=''>
       {/* <Hero/> */}
      <Banner/>
       {/* <Promo/> */}
      {/* <Categories/> */}
      <ProductList/>
    </div>
  )
}

export default Home
