// import React, {useState} from 'react'

// export default function UygaVazifa_1() {
//     const[son, setSon] = useState(0)
//     const[son2, setSon2] = useState(0)

    
//     const nimadir = parseFloat(son) + parseFloat(son2)
//   return (
//     <div>
//       <input type="text" onInput={(e) => setSon(e.target.value) } />
//       +
//       <input type="text" onInput={(e) => setSon2(e.target.value) } />
//       =
//       <input type="number" placeholder='0' className='inputt' value={nimadir}></input>
//     </div>
//   )
// }
// -=-=-=--=--=--=-=-=-=-= 2 vazifa -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// import React from 'react'
// import { useState } from 'react'

// export default function Java() {
//   let [text, setText] = useState([])

//   function Top(val) {
//     let mass = []
//     mass.push(val)
//     console.log(mass);

//     if (text.length == 10) {
//       alert('siz meyordan ortiq soz kitritingiz')
//     }
//       mass.split()
//       console.log(mass);
//       mass.map(item => {
//         if (item == item + 1) {
//           alert("bu harf bor")
//         }
//       })
//     }
//     return (
//       <div>
//         <input onInput={(val) => Top(val.target.value)} type="text" placeholder='text kiriting' /> <br />
//         {text}
//       </div>
//     )
// //   }
//   import React from 'react'
//   export default function UygaVazifa_1() {
    
//     let massiv = [] 
//     function Ishla(val) {
//       massiv = val.split("")
//       // massiv.push(val)
       
//       console.log(massiv);
//       massiv.map(item =>{
//         if(item == item - 1){
//           alert("bor________!11111")
//         }
//       }) 
//     }
    
//     return (
//       <div>
//         <input onInput={(val)=>Ishla(val.target.value)} type="text" placeholder='text kiriting' />
//       </div>
//     )
//   }
  
// =============== 3 dars ======================================  
  
 
  
  
  