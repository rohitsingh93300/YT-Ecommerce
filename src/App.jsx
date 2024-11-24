import React from 'react'
import Navbar from './components/Navbar'
// import SingleProduct from './components/SingleProduct'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home'
import Login from './Pages/Login'
import SingleProduct from './components/SingleProduct'
import Footer from './components/Footer'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
import Mens from './Pages/Mens';
import Womens from './Pages/Womens';
import Kids from './Pages/Kids';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home/><Footer/></>,
  },
  {
    path: "/mens",
    element: <><Navbar/><Mens/><Footer/></>,
  },
  {
    path: "/womens",
    element: <><Navbar/><Womens/><Footer/></>,
  },
  {
    path: "/kids",
    element: <><Navbar/><Kids/><Footer/></>,
  },
  {
    path: "/products/:productId",
    element: <><Navbar/><SingleProduct/><Footer/></>,
  },
  {
    path: "/login",
    element: <><Navbar/><Login/><Footer/></>,
  },
  {
    path: "/register",
    element: <><Navbar/><Register/><Footer/></>,
  },
  {
    path: "/cart",
    element: <><Navbar/><Cart/><Footer/></>,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
