import React, { useEffect, useState } from 'react'
import Home from './Home'
import NavBar from './NavBar'
import Shop from './Shop'
import Contact from './Contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Cart from './Cart'
const App = () => {

 
  return (
    <BrowserRouter>
        <>
          <NavBar />
         
          <Routes>
          <Route path='/' element = {<Home />}/>
         <Route path='/Shop' element = {<Shop />}/>
         <Route path='/Contact' element = {<Contact />}/>
         <Route path='/Cart' element = {<Cart />}/>
 
          </Routes>
        </>
      
    </BrowserRouter>
  )
}

export default App