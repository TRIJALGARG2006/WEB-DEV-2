import React from 'react';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bollywood from './components/Bollywood';
import Technology from './components/Technology';
import Hollywood from './components/Hollywood';
import Fitness from './components/Fitness';
import Food from './components/Food';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/food' element={<Food />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App