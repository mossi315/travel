import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/home' exact element={<Home />}/>
      <Route path='/services' element={<Services />} />
      <Route path='/products' element={<Products/>} />
      <Route path='/sign-up'element={<SignUp />} />


    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
