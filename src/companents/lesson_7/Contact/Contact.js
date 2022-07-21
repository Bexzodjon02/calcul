import React from 'react'
import {Link} from "react-router-dom";
import homLogo from '../homeLogo.png'


export default function Contact() {
  return (
    <div>
      <Link to="/"><img style={{width:"50px"}} src={homLogo}/></Link>
      Contact
      </div>
  )
}
