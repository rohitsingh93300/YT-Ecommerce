import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">
        {/* Company Info */}
        <div className="mb-6 md:mb-0">
        <Link to='/'>
           <img src={Logo} alt="" className='w-32'/>
            </Link>
          <p className="mt-2 text-sm">High-quality, sustainable clothing at affordable prices.</p>
          <p className="mt-2 text-sm">123 Fashion St, Style City, NY 10001</p>
          <p className="text-sm">Email: support@clothify.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        {/* Customer Service Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Customer Service</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-400">Order Tracking</a></li>
            <li><a href="#" className="hover:text-gray-400">Size Guide</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-200 hover:text-red-500"><FaFacebook/></a>
            <a href="#" className="text-gray-200 hover:text-red-500"><FaInstagram/></a>
            <a href="#" className="text-gray-200 hover:text-red-500"><FaSquareXTwitter/></a>
            <a href="#" className="text-gray-200 hover:text-red-500"><FaPinterest/></a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold">Stay in the Loop</h3>
          <p className="mt-2 text-sm">Subscribe to get special offers, free giveaways, and more.</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button type="submit" className="bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} <span className='text-red-500'>Clothify</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
