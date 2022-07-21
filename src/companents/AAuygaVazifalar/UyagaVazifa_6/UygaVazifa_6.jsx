import React, {useEffect, useState } from 'react'
import axios from "axios";
import "../UyagaVazifa_6/style.css"

export default function () {
 // const [yangi, setYangi] = useState([])
 const [news, setNews] = useState([])
 const [text, setText] = useState([])
let searchResult = []
 function textSearch(value) {
       searchResult = text.map(item =>{
          return (item.categories.toLowerCase().includes(value.toLowerCase()))
         
      })
      // setNews(searchResult)    
      console.log(searchResult + "salom")
 }
 useEffect(() => {
  getStudents()
}, [])
function getStudents() {
 axios.get("https://myjson.dit.upm.es/api/bins/fsxf")
  .then(ress => {
   setNews(ress.data)
   
  })
  .catch(err => {
   return err.json()
  })
 
}

 return (
  <div>

   <div className='container d-flex justify-content-center align-items-center '>
    <input  onInput={(val) => {textSearch(val.target.value) }} type="text" placeholder='Qiriruv..................!' className='input' />
    <form action="">
      <select name="" id="category">
          <option value="Mahalliy">Mahalliy</option>
          <option value="Sport">Sport</option>
          <option value="Dunyo">Dunyo</option>
      </select>
    </form>
   </div>

   {
    (news.length > 0) &&
    <table className='' text>

     <thead >
      <th className='text2' >TITLE</th>
      <th className='text2' >DATE</th>
      <th className='text2' >CATEGORYS</th>

     </thead>

     <tbody>
      {
       news.map((item, index) => {
        return (
         <tr key={index}>
 
          <td  className='text'>{item.title}</td>
          <td className='text'>{item.date}</td>
          <td className='text'>{item.categories}</td>

         </tr>
        )
       })
      }
     </tbody>
    </table>
   }
  </div>
 )
}














