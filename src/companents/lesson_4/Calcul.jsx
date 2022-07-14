import React from 'react'
import { useState } from 'react';
import './cal.css'
export default function Calcul() {
    // let [input,setInput]= useState('')
    let [bos, setBos] = useState(0)
    // function setBos(e) {
    //     input = e
    //     console.log(input);
    // }
    
    let massiv  = []
    massiv.push(bos)
    console.log(massiv);

  return (
    <div className='container'>
        <div className="calculator">
            {/* tablo */}
            <div className="tablo">
            <input id="display" type="text" value={massiv}  name="display" placeholder="0" readonly/>      
                
            </div>
            {/* buttons */}
            <button id="button" onClick={(val)=>setBos(val.target.value)} value={7}>7</button>
            <button id="button" onClick={(val)=>setBos(val.target.value)} value={8}>8</button>
            <button id="button" onClick={(val)=>setBos(val.target.value)} value={9}>9</button>
            <button id="button" onClick={(val)=>setBos(val.target.value)} value="+">+</button>
            <br />
            <button id="button" onClick={(val)=>setBos(val.target.value)} value={4}>4</button>
            <button id="button" onClick={(val)=>setBos(val.target.value)} value={5}>5</button>
            <button id="button" onClick={(val)=>setBos(val.target.value)} value={6}>6</button>
            <button id="button" onClick={(val)=>setBos(val.target.value)} value="-">-</button>
            <br />
            <button id="button" onClick={(val)=>setBos(val.target.value)} value={1}>1</button>
            <button id="button" onClick={(val)=>setBos(val.target.value)} value={2}>2</button>
            <button id="button" onClick={(val)=>setBos(val.target.value)} value={3}>3</button>
            <button id="button" onClick={(val)=>setBos(val.target.value)} value="x">x</button>
            <br />
            <button id="button" onClick={(val)=>setBos(val.target.value)}>C</button>
            <button id="button" onClick={(val)=>setBos(val.target.value)} value={0}>0</button>
            <button id="button" onClick={(val)=>setBos(val.target.value)} value="=">=</button>
            <button id="button" onClick={(val)=>setBos(val.target.value)} value="/">/</button>
            
        </div>
    </div>
  )
}
