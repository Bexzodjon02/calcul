import React, {useState} from 'react'
import "./usd_use.css"
export default function USD_USE_valyuta() {
    const[dollor, setDollar]= useState(0)
    const[sum, setSum]= useState(0)
    let resalt = dollor / 11000
    let resalt2 = sum * 11000
    // const[sum, setSum]= useState("")
  return (
    <div className='block'>
        <input id="USD" type="number" onInput={(val)=>parseInt(setDollar(val.target.value))} placeholder='USD kiriting '/>
        <br />
       <h3 className='resalt'>{ "$" + resalt + " " + "Dollor"}</h3> 
        <br />
        <input id="USE" type="number" onInput={(val)=>setSum(val.target.value)} placeholder='USE kiriting '/> <br/>
        <h3 className='resalt' >
        {  resalt2 + " " + "so'm"}
            
        </h3>
    </div>
  )
}
