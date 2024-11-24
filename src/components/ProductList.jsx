import React, { useContext } from 'react'
// import { MensTshirts } from '../utils/MensTshirts'
import Item from './Item'
import { ShopContext } from '../Context/ShopContext'

const ProductList = () => {
  const { all_product } = useContext(ShopContext)
  const menProducts = all_product.filter((product) => product.category === "men");
  const womenProducts = all_product.filter((product) => product.category === "women");
  const kidProducts = all_product.filter((product) => product.category === "kid");
  return (
    <div className="bg-white">
      {/* mens Collection */}
      <div className="mx-auto max-w-2xl px-4 py-16  sm:pt-24 lg:max-w-7xl lg:px-8">

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start">Men's Collection</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {menProducts.map((product) => {
            return <Item key={product.id} product={product} />
          })}
        </div>
      </div>
      {/* womens Collection */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Women's Collection</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {womenProducts.map((product) => {
            return <Item key={product.id} product={product} />
          })}
        </div>
      </div>
      {/* kids Collection */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Kid's Collection</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {kidProducts.map((product) => {
            return <Item key={product.id} product={product} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductList
