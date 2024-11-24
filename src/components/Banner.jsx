import React from 'react'

const Banner = () => {
  return (
    <div className='bg-gray-100 pt-24'>

    <div className="relative  max-w-7xl mx-auto rounded-2xl pt-28 bg-cover bg-center h-[500px] md:h-[600px] lg:h-[600px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/grandmother-mother-daughter-shopping_1303-9190.jpg?t=st=1732335283~exp=1732338883~hmac=a05d9d2cd7f581eb996755bd5cfeb0058913bcae62edace805928c901b2ba805&w=1380)',
      backgroundPosition: 'Top'
     }}>
    <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-50 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Discover Your Style</h1>
        <p className="text-lg md:text-xl mb-6">Shop the latest trends and find your perfect look</p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Banner
