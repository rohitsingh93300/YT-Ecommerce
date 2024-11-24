import React from 'react'

const CategoryItem = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
    <img src={image} alt={name} className="w-24 h-24 object-cover mb-2" />
    <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
  </div>
  )
}

export default CategoryItem
