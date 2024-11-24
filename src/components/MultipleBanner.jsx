import React from 'react'

const MultipleBanner = () => {

    const banners = [
        {
            title: "Summer Collection 2023",
            description: "Dive into the season with our vibrant new styles",
            imageUrl: "/placeholder.svg?height=800&width=1200",
            link: "/summer-collection",
            //   size: "large" as const
        },
        {
            title: "Men's Essentials",
            description: "Timeless pieces for every wardrobe",
            imageUrl: "/placeholder.svg?height=600&width=400",
            link: "/mens-essentials"
        },
        {
            title: "Women's New Arrivals",
            description: "Fresh looks for the season",
            imageUrl: "/placeholder.svg?height=600&width=400",
            link: "/womens-new-arrivals"
        },
        {
            title: "Accessories",
            description: "Complete your look",
            imageUrl: "/placeholder.svg?height=400&width=400",
            link: "/accessories",
            //   size: "small" as const
        },
        {
            title: "Footwear",
            description: "Step into style",
            imageUrl: "/placeholder.svg?height=400&width=400",
            link: "/footwear",
            //   size: "small" as const
        }
    ]

    return (
        <div className=" bg-gray-100 ">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 max-w-7xl mx-auto'>
                {/* Banner 1 */}
                <div className="relative group">
                    <img
                        src="https://images.pexels.com/photos/6051248/pexels-photo-6051248.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="Winter Collection"
                        className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h2 className="text-white text-xl font-bold">Winter Collection</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black rounded-md shadow hover:bg-gray-200">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Banner 2 */}
                <div className="relative group">
                    <img
                        src="https://via.placeholder.com/400x400"
                        alt="Free Shipping"
                        className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h2 className="text-white text-xl font-bold">Free Shipping</h2>
                        <p className="text-white mt-2 text-sm">On Orders Over $50</p>
                    </div>
                </div>

                {/* Banner 3 */}
                <div className="relative group">
                    <img
                        src="https://images.pexels.com/photos/5709631/pexels-photo-5709631.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="Season Sale"
                        className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-yellow-700 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h2 className="text-white text-xl font-bold">Season Sale</h2>
                        <p className="text-white mt-2 text-sm">Up to 70% Off</p>
                        <button className="mt-4 px-4 py-2 bg-white text-yellow-800 rounded-md shadow hover:bg-yellow-100">
                            Explore
                        </button>
                    </div>
                </div>

                {/* Banner 4 */}
                <div className="relative group">
                    <img
                        src="https://via.placeholder.com/400x400"
                        alt="New Arrivals"
                        className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-green-900 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h2 className="text-white text-xl font-bold">New Arrivals</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-green-900 rounded-md shadow hover:bg-gray-200">
                            Discover
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MultipleBanner

