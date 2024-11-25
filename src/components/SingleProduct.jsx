import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from './Breadcrum';
import ProductDisplay from './ProductDisplay';
import DescriptionBox from './DescriptionBox';
import new_collections from '../utils/NewCollection';
import Item from './Item';

const SingleProduct = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='max-w-7xl mx-auto mb-32 mt-32'>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      {/* new collection */}
      <div className="mx-auto max-w-2xl px-4 py-16  sm:pt-24 lg:max-w-7xl lg:px-8">

        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center font-serif">Similar Products</h2>
        <p className='text-center mt-3 md:px-56'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nulla quis in similique officia, cupiditate fugit mollitia saepe necessitatibus.</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {new_collections.map((product) => {
            return <Item key={product.id} product={product} />
          })}
        </div>
      </div>
      {/* <RelatedProducts/> */}
    </div>
  )
}

export default SingleProduct
