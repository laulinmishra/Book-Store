import React from 'react'
import Header from './Components/Header'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Shope from './pages/Shope'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'


const App = () => {
  return (
    <main className='overflow-hidden bg-primary'>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shope/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
     </Routes>
    </main>
  )
}

export default App
