import React, {useState, useEffect} from 'react'

export default function() {
    const [count, setCount]= useState(0)
    //companentDiDMaunt()
     useEffect(()=>{
        console.log("renderdan oldin ishliman");
        return ()=>{
               console.log("sahifa oxirida ishlayan");
        }
     }, [count])
    
    function Incre() {
      setCount(count - 1)
    }
  return (
    <div>
        <button onClick={Incre}>dencriment</button>
        Count:{count}
        <button onClick={()=>setCount(count + 1)}>Increment</button>
    </div>
  )
}
