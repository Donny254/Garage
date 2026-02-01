import { useState, UserContext } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import DarkMode from './components/DarkMode/DarkMode'
import SignupForm from './components/SignUpForm/SignUp'
import ProductCard from './components/ProductCard/ProductCard'
import ProductCardList from './components/ProductCardList/ProductCardList'
import Home from './components/Home/Home'
import Service from './components/Service/Service'
import Store from './components/Store/Store'
import About from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'


// links all functional components

function App() {


  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ user,total ,setuser, setTotal }}>
          <nav className='nav'>
            <Link to="./Home">Home</Link>
            <Link to="./Service">Service</Link>
            <Link to="./Store">Store</Link>
            <Link to="./Contact">Contact</Link>
          </nav>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='./Service' element={<Service />} />
            <Route path='./Store' element={<Store />} />

          </Routes>
         <SignupForm/>


        </UserContext.Provider>

      </BrowserRouter>

    </>
  )
}

export default App

