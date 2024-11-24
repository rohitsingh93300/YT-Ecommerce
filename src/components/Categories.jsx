import React from 'react'
import CategoryItem from './CategoryItem';
import Electronics from '../assets/Electronics.png'
import Fashion from '../assets/Fashion1.png'
import Kitchen from '../assets/Kitchen.png'
import Sports from '../assets/Sports1.png'

const Categories = () => {
    const categories = [
        { name: "Electronics", image: Electronics },
        { name: "Fashion", image: Fashion },
        { name: "Home & Kitchen", image: Kitchen },
        { name: "Sports", image: Sports },
      ];
  return (
    <section className="my-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryItem key={category.name} name={category.name} image={category.image} />
        ))}
      </div>
    </section>
  )
}

export default Categories
