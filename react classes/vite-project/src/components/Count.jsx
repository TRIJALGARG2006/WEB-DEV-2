import React, { useState } from 'react'

const Count = () => {
    const [clicks, updateClicks] = useState(0);

    return (
        <>
            <div>Count: {clicks}</div>
            <button onClick={() => {updateClicks(clicks+1)}}>Click</button>
        </>
    )
}

export default Count