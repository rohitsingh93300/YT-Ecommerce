import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import ProductList from '../components/ProductList'
// import Promo from '../components/Promo'
import Banner from '../components/Banner'
import MultipleBanner from '../components/MultipleBanner'
import MultiBanner2 from '../components/MultiBanner2'
import Details from '../components/Details'

const Home = () => {
  return (
    <div className=''>
       {/* <Hero/> */}
      <Banner/>
      <MultiBanner2/>
      {/* <MultipleBanner/> */}
       {/* <Promo/> */}
      {/* <Categories/> */}
      <ProductList/>
      <Details/>
    </div>
  )
}

export default Home
