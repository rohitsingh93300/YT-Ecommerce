import React, { useContext } from 'react'
import banner from '../assets/MensBanner.png'
import { ShopContext } from '../Context/ShopContext';
import Item from '../components/Item';

const Mens = () => {
    const { all_product } = useContext(ShopContext)
    const menProducts = all_product.filter((product) => product.category === "men");
    return (
        <div className='md:mt-32 mt-20 max-w-7xl mx-auto'>
            <div className=''>
                <img src={banner} alt="" className='w-screen px-6' />
            </div>
            <div className="mx-auto max-w-2xl px-4 py-16  sm:pt-24 lg:max-w-7xl lg:px-8">

                <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start">Men's Collection</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {menProducts.map((product) => {
                        return <Item key={product.id} product={product} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Mens
