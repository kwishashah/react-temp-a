import React from 'react'
import { useState,useRef } from 'react'
export default function App12() {
    const [price,setPrice]=useState(0);
    const previousPrice=useRef(0);
    const handleSubmit=()=>{
        previousPrice.current=price
    }
  return (
    <div>App12
        <h3>This is app12</h3>
        <p>
            <input type="number"  />
            <button onClick={handleSubmit}>Submit</button>
        </p>
        {previousPrice.current}-{price}
    </div>
    
  )
}
