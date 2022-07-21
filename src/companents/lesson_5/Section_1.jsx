// import React, { Component } from 'react'

// export default class Section_1 extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       sanoq:0
//     }
//   }
//   render() {
//     return (
//       <div>
//          {/* <input type="text"  placeholder='Ismi kiriting' />
//          <input type="text"  placeholder='Familya kiriting' />
//          <input type="text" placeholder='Lavozim  kiriting'  />
//          <input type="text" placeholder='Kontakt kiriting'  />
         
//            <button style={{background:"#144fe6ef", color:"white", borderRadius:"8px"}}>Qoshish</button> */}
//            <button onClick={ () => this.setState({sanoq: this.state.sanoq -1})}>oshirish</button>
//            Sanoq:{this.state.sanoq}
//            <button onClick = {()=>this.setState({sanoq: this.state.sanoq + 1})}>kamayish</button>
           
//       </div>
//     )
//   }
// }

// ============ table tuzish ikkinchi===========//

import React, { Component } from 'react'

export default class Section_1 extends Component {
     constructor(props){
        super(props)
        this.state ={
          compyuters: [],
            name:'',
            userName: '',
            position:'',
            contact:''
          }
         
     }
     
    
     
     
     addNewItem(){
        let array = this.state.compyuters 
        
        array.push({
             name:this.state.name,
             userName:this.state.userName,
             position:this.state.position,
             contact:this.state.contact
        })  
        
        this.setState({
          compyuters:array,
          name:'',
          userName: '',
          position:'',
          contact:''
        })
       
     }
  
  render() {
    return (
      <div>
        <div className="inps" style={{marginLeft:"25%"}}>
          
         <input onChange={(val)=>{this.setState({name: val.target.value})}} type="text" placeholder='ismi kiriting'  />
         <input onChange={(val)=>{this.setState({userName: val.target.value})}}  type="text" placeholder='familyasi kiriting' />
         <input onChange={(val)=>{this.setState({position: val.target.value})}} type="text" placeholder='Lavozimi kiriting' />
         <input onChange={(val)=>{this.setState({contact: val.target.value})}} type="text" placeholder='Contact kiriting' /> 
         <br />
          <button onClick={()=>this.addNewItem()} >Qo'shish</button>
          
          
          
        </div>
        <table border={1} style={{marginLeft:'auto', marginRight:"auto"}}>
          {/* thead */}
            <thead>
               <th>#</th>
               <th>Ismi</th>
               <th>Familyasi</th>
               <th>Lavozimi</th>
               <th>Kontact</th>
               <th>Hodisalar</th>
            </thead>
            {/* tbody */}
            <tbody>
                 {
                  this.state.compyuters.map((item, index)=>{
                     return(
                        <tr key={index}>
                             <td>{index+1}</td>
                             <td>{item.name}</td>
                             <td>{item.userName}</td>
                             <td>{item.position}</td>
                             <td>{item.contact}</td>
                             <td>
                               <button onClick={()=>this.Edit()}>Edit</button>
                               <button onClick={()=>this.Delete(index)}>Del</button>
                             </td>
                        </tr>         
                     )
                 })
                  
                }
            </tbody>
        </table>
      </div>
    )
  }
}
