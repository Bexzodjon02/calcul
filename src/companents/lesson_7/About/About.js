import React from 'react'
import homLogo from '../homeLogo.png'

import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      
      <Link to="/"><img style={{width:"50px"}} src={homLogo}/></Link>
      
      About</div>
  )
}
