import React from 'react'
import Child from './Child'

const Parent = () => {
    const fullname="SIX SEVEN";
    function Alert(){
        alert("Hello World")
    }
  return (
    <>
    <h1>{fullname}</h1>
    <div>Parent</div>
    <Child name={fullname} alert={Alert}/>
    </>
  )
}

export default Parent