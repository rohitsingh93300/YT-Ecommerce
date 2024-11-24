import React, { useEffect } from 'react'
import CartItems from '../components/CartItems'

const Cart = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='mt-32'>
      <CartItems/>
    </div>
  )
}

export default Cart
