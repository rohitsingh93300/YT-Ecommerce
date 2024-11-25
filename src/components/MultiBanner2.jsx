import React from 'react'

const MultiBanner2 = () => {
  return (
    <div className='bg-gray-100 '>

    <div className="grid grid-cols-1 px-4 md:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6 max-w-7xl mx-auto">
    

    {/* Medium Banner */}
    <div className="relative h-[250px]">
      <img
        src="https://images.pexels.com/photos/6051248/pexels-photo-6051248.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="New Arrivals"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
        <h2 className="text-white text-2xl font-bold">New Arrivals</h2>
        <button className="mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200">
          Discover
        </button>
      </div>
    </div>

    {/* Small Square Banner */}
    <div className="relative h-[250px]">
      <img
        src="https://images.pexels.com/photos/5650023/pexels-photo-5650023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Limited Offer"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
        <h2 className="text-white text-2xl font-bold">Limited Offer</h2>
      </div>
    </div>

    {/* Horizontal Banner */}
    <div className="relative h-[250px] col-span-1 sm:col-span-2 ">
      <img
        src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Season Sale"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-yellow-800 bg-opacity-50 flex flex-col items-center rounded-lg justify-center">
        <h2 className="text-white text-4xl font-bold">Season Sale</h2>
        <p className="text-white my-2 text-lg ">Up to 70% Off</p>
        <button className='text-white bg-yellow-600 px-3 py-2 hover:bg-yellow-500 rounded-md'>Shop Now</button>
      </div>
    </div>

    {/* Horizontal Banner */}
    <div className="relative h-[250px] col-span-1 sm:col-span-2">
      <img
        src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Season Sale"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-orange-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
        <h2 className="text-white text-4xl font-bold">Season Sale</h2>
        <p className="text-white my-2 text-lg">Up to 70% Off</p>
        <button className='text-white bg-red-600 px-3 py-2 hover:bg-yellow-500 rounded-md'>Shop Now</button>
      </div>
    </div>

     {/* Small Square Banner */}
     <div className="relative h-[250px]">
      <img
        src="https://images.pexels.com/photos/5622859/pexels-photo-5622859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Limited Offer"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
        <h2 className="text-white text-2xl font-bold">Limited Offer</h2>
      </div>
    </div>

    {/* Medium Banner */}
    <div className="relative h-[250px]">
      <img
        src="https://images.pexels.com/photos/4210857/pexels-photo-4210857.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="New Arrivals"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
        <h2 className="text-white text-2xl font-bold">New Arrivals</h2>
        <button className="mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200">
          Discover
        </button>
      </div>
    </div>

    {/* Tall Banner */}
    {/* <div className="relative h-[300px]">
      <img
        src="https://via.placeholder.com/600x900"
        alt="Exclusive Deals"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-purple-900 bg-opacity-50 flex flex-col items-center justify-center">
        <h2 className="text-white text-lg font-bold">Exclusive Deals</h2>
        <button className="mt-2 px-4 py-2 bg-white text-purple-900 rounded-md shadow hover:bg-gray-200">
          Explore
        </button>
      </div>
    </div> */}
  </div>
    </div>
  )
}

export default MultiBanner2
