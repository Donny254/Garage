import { useState, UserContext } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import DarkMode from './components/DarkMode/DarkMode'
import InputForm from './components/InputForm/inputForm'
import ProductCard from './components/ProductCard/ProductCard'
import ProductCardList from './components/ProductCardList/ProductCardList'


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
         <InputForm/>


        </UserContext.Provider>

      </BrowserRouter>

    </>
  )
}

export default App

