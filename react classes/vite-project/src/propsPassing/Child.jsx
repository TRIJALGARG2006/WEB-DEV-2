import React from 'react'

const Child = ({ name, alert }) => {
  return (<>
    <div>Child: {name}</div>
    <button onClick={alert}>Alert</button>
  </>
  )
}

export default Child