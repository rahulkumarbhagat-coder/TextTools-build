import React, { useEffect, useState } from 'react'
import "../Counter.css"

export default function Counter() {
    useEffect(()=>{
        window.alert("Paad diya");
    })
    let count = 0;
    const [initial, updateFinal] = useState(count)
    const Number = ()=>{
        updateFinal(initial+ 1)
    }
  return (
    <>
    <div className='counter-parent'>
    <div className='counter-div'>
        <h3>Counter</h3>
        <button onClick={Number}>{initial}</button>
    </div>
    </div>
    </>
  )
}
