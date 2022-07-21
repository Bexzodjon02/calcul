import React, {useState} from 'react'
import "./Users/user.css"
import userLodo from "./loginUser.png";

import {useNavigate} from "react-router-dom"

export default function() {
    const navigation = useNavigate()
    const[login, setLogin]= useState('')
    const[parol, setParol]= useState('')
    function CkeckPass() {
        if(login == "admin" && parol == "000000"){
            localStorage.setItem("status", login)
            navigation("/")
        }else{
            navigation("/error")    
            // alert("Login yoki Parol xato 😭😭😭😭😭")  
        }
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='card w-50'>
                        <img className='imgParol' width="150px" src={userLodo}></img>
                        <input onChange={(val)=>setLogin(val.target.value)} className="input" type="login" placeholder="text kiritng"/>
                        {login} <br/>
                        {parol}
                        <input onChange={(val)=>setParol(val.target.value)} className="input" type="password" placeholder="text kiritng"/>
                        <button onClick={()=>CkeckPass()} className='btn1 '>Kirish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
