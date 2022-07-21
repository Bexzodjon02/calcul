
import './App.css';
import {Link, Outlet } from "react-router-dom";
import { useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import closeLogo from "./companents/lesson_7/closeLodo.png";

function App() {
  const navigate = useNavigate()
  useEffect(()=>{
      let status = localStorage.getItem("status")
      if(!status ){
        navigate("/login") 
      }
  },[])
  function exetSystem() {
       localStorage.clear()
       navigate("/login")
  }
  return (
    <div className="container">
        <nav className='navbar'>  
          <Link className="m-3 btn btn-primary h3" to="/users">Users</Link>
          <Link className="m-3 btn btn-success h3" to="/about">About</Link>
          <Link className="m-3 btn btn-info h3" to="/contact">Contact</Link>
          <Outlet/>
          <button onClick={()=>exetSystem()} className="m-3 btn btn-warning h3" style={{marginLeft:"0", marginTop:"500px" } }><img style={{width:"25px", color:"black",fontSize:"50px"}} src={closeLogo}/>Exit</button>
          
          </nav>
    </div>
  );
}

export default App;
