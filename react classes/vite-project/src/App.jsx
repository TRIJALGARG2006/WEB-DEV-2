import React from 'react'
import Navbar from './Navbar'

import { add, subtract } from './components/math'
import Count from './components/Count';
import Parent from './propsPassing/Parent';
import MultiCounter from './components/Multicounter';
import Login from './components/Login';
import Ligda from './components/Ligda';
import Input from './components/Input';
console.log(add(5, 3)); 
console.log(subtract(5, 3)); 
const App = () => {
  return (
    <>
      <Navbar />
      <h1>i like react </h1>
      <Count />
      <Parent/>
      <MultiCounter />
      <Login/>
      <input/>
      <Ligda/>
    </>
  )
}

export default App