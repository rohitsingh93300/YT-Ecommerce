// import React, { useContext } from 'react'
// import { ShopContext } from '../Context/ShopContext'
// import { X } from 'lucide-react'

// const CartItems = () => {
//     const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext)
//   return (
//     <div className='max-w-7xl mx-auto my-20'>
//     <div className="grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-[20px] ">
//       <p>Products</p>
//       <p>Title</p>
//       <p>Price</p>
//       <p>Quantity</p>
//       <p>Total</p>
//       <p>Remove</p>
//     </div>
//     <hr className='bg-[#e2e2e2] border-0 h-[3px] my-2'/>
//     {all_product.map((e)=>{
//       if(cartItems[e.id]>0)
//       {
//           return <div>
//           <div className="text-gray-500 font-semibold text-lg grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-[20px] ">
//               <img src={e.image} className='h-[62px]' alt="" />
//               <p>{e.name}</p>
//               <p>${e.new_price}</p>
//               <button className='w-[64px] h-[50px] bg-white border-2 border-[#ebebeb]'>{cartItems[e.id]}</button>
//               <p>${e.new_price*cartItems[e.id]}</p>
//               <X onClick={()=>{removeFromCart(e.id)}} className=''/>
//               {/* <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" /> */}
//           </div>
//           <hr className='bg-[#e2e2e2] border-0 h-[3px] my-2'/>
//         </div>
//       }
//       return null;
//     })}
//     <div className="flex my-24">
//       <div className="flex-1 flex flex-col mr-[200px] gap-10">
//           <h1>Cart Totals</h1>
//           <div>
//               <div className="flex justify-between py-[15px]">
//                   <p>Subtotal</p>
//                   <p>${getTotalCartAmount()}</p>
//               </div>
//               <hr className='bg-[#e2e2e2] border-0 h-[3px] my-2'/>
//               <div className="flex justify-between py-[15px]">
//                   <p>Shipping Fee</p>
//                   <p>Free</p>
//               </div>
//               <hr className='bg-[#e2e2e2] border-0 h-[3px] my-2'/>
//               <div className="flex justify-between text-xl font-semibold py-[15px]">
//                   <h3>Total</h3>
//                   <h3>${getTotalCartAmount()}</h3>
//               </div>
//           </div>
//           <button className='w-[260px] h-[58px] bg-red-500 text-white font-semibold text-lg'>PROCEED TO CHECKOUT</button>
//       </div>
//       <div className="flex-1 text-lg font-semibold">
//           <p className='text-[#555]'>If u have a promo code, Enter it here</p>
//           <div className="w-[520px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea]">
//               <input type="text" placeholder='promo code' className='bg-transparent text-lg w-[330px] h-[50px]'/>
//               <button className='w-[170px] h-[58px] text-lg bg-black text-white cursor-pointer'>Submit</button>
//           </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default CartItems

import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { X } from 'lucide-react'
import EmptyCart from '../assets/EmptyCart.png'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, getTotalCartItems } = useContext(ShopContext)

    return (
        <div className='max-w-7xl mx-auto my-10 p-4'>
            {getTotalCartItems() === 0 ? <div className='flex items-center justify-center'><img src={EmptyCart} alt="" /></div>:  <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4">
                    <p>Products</p>
                    <p>Title</p>
                    <p className='hidden md:block'>Price</p>
                    <p className='hidden md:block'>Quantity</p>
                    <p className='hidden md:block'>Total</p>
                    <p className='hidden md:block'>Remove</p>
                </div>
                <hr className='bg-gray-300 border-0 h-[2px] my-2' />
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div key={e.id}>
                                <div className="text-gray-500 font-semibold text-sm sm:text-base grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4 gap-2">
                                    <img src={e.image} className='h-16 w-16 object-cover' alt="" />
                                    <p>{e.name}</p>
                                    <p className='hidden md:block'>${e.new_price}</p>
                                    <button className='w-16 h-12 bg-white border border-gray-300'>{cartItems[e.id]}</button>
                                    <p className='hidden md:block'>${e.new_price * cartItems[e.id]}</p>
                                    <X onClick={() => { removeFromCart(e.id) }} className='cursor-pointer' />
                                </div>
                                <hr className='bg-gray-300 border-0 h-[2px] my-2' />
                            </div>
                        )
                    }
                    return null;
                })}
                <div className="flex flex-col lg:flex-row my-12 gap-10">
                    <div className="flex-1 flex flex-col gap-4">
                        <h1 className='text-lg font-bold'>Cart Totals</h1>
                        <div>
                            <div className="flex justify-between py-2">
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr className='bg-gray-300 border-0 h-[2px] my-2' />
                            <div className="flex justify-between py-2">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr className='bg-gray-300 border-0 h-[2px] my-2' />
                            <div className="flex justify-between text-xl font-semibold py-2">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button className='w-full lg:w-64 h-14 bg-red-500 text-white font-semibold text-lg'>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="flex-1 text-lg font-semibold">
                        <p className='text-gray-600'>If you have a promo code, enter it here:</p>
                        <div className="w-full lg:w-80 mt-2 flex">
                            <input type="text" placeholder='Promo code' className='flex-1 h-14 p-2 bg-gray-200' />
                            <button className='h-14 w-32 bg-black text-white'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>}
           

        </div>
    )
}

export default CartItems
