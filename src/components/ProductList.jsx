import React, { useContext } from 'react'
// import { MensTshirts } from '../utils/MensTshirts'
import Item from './Item'
import { ShopContext } from '../Context/ShopContext'

const ProductList = () => {
  const { all_product, new_collections } = useContext(ShopContext)
  const menProducts = all_product.filter((product) => product.category === "men");
  const womenProducts = all_product.filter((product) => product.category === "women");
  const kidProducts = all_product.filter((product) => product.category === "kid");
  return (
    <div className="bg-white ">
      {/* new collection */}
      <div className="mx-auto max-w-2xl px-4 py-16  sm:pt-24 lg:max-w-7xl lg:px-8">

        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center font-serif">New Collection</h2>
        <p className='text-center mt-3 md:px-56'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nulla quis in similique officia, cupiditate fugit mollitia saepe necessitatibus.</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {new_collections.map((product) => {
            return <Item key={product.id} product={product} />
          })}
        </div>
      </div>
      {/* Popular products */}
      <div className="mx-auto max-w-2xl px-4 py-16  sm:pt-24 lg:max-w-7xl lg:px-8">

        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center font-serif">New Collection</h2>
        <p className='text-center mt-3 md:px-56'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nulla quis in similique officia, cupiditate fugit mollitia saepe necessitatibus.</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {new_collections.map((product) => {
            return <Item key={product.id} product={product} />
          })}
        </div>
      </div>
      {/* kids Collection */}
      {/* <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Kid's Collection</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {kidProducts.map((product) => {
            return <Item key={product.id} product={product} />
          })}
        </div>
      </div> */}
    </div>
  )
}

export default ProductList
